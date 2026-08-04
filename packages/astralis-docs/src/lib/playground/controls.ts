import type { PropRow } from "@/modules/docs/props-table";
import { COLOR_SCHEMES, COLOR_SCHEME_TYPE } from "@/modules/demos/color-schemes";

/**
 * Turning a documented prop into an editable control.
 *
 * The whole point of the playground is that this is *derived*, not authored:
 * `PropRow.type` already holds the TypeScript union we wrote for the props
 * table, so a union of quoted literals becomes a picker and `boolean` becomes a
 * switch with no extra per-component data. A `control` override on the row
 * handles the few cases the string can't express.
 *
 * Pure and React-free on purpose — this is the part worth unit-testing.
 */

export type Control =
  /** Few, short options — rendered as a row of chips. */
  | { kind: "chips"; prop: string; options: readonly string[]; initial: string }
  /** Many or long options — rendered as a dropdown. */
  | { kind: "select"; prop: string; options: readonly string[]; initial: string }
  | { kind: "switch"; prop: string; initial: boolean }
  | { kind: "text"; prop: string; initial: string }
  | { kind: "number"; prop: string; initial: number };

/** Above this many options, or this wide, a chip row stops being readable. */
const MAX_CHIPS = 5;
const MAX_CHIP_LABEL = 12;

/**
 * Types written as prose for the reader, mapped back to their real options.
 *
 * `colorScheme` is deliberately documented as "all 15 schemes" — fifteen quoted
 * literals in a table cell is unreadable — so the union parser can't see it.
 * Handling it here means one rule instead of the same `control` override copied
 * into every component that has a hue, which is exactly the duplication that
 * let five props tables drift to a stale 11 in the first place.
 */
const PROSE_TYPES: Record<string, readonly string[]> = {
  [COLOR_SCHEME_TYPE]: COLOR_SCHEMES,
};

/**
 * Strip the quotes a `default` field carries for display: the table shows
 * `"solid"` with quotes, but the live component needs `solid`.
 */
export function unquote(value: string | undefined): string | undefined {
  if (value === undefined) return undefined;
  const trimmed = value.trim();
  return /^(["'`]).*\1$/.test(trimmed) ? trimmed.slice(1, -1) : trimmed;
}

/**
 * Parse `"solid" | "subtle" | "outline"` into its members. Returns null for
 * anything that isn't a clean union of string literals — prose like
 * "all 15 schemes", bare `boolean`, `ReactNode`, and so on.
 */
export function parseUnion(type: string): string[] | null {
  const parts = type.split("|").map((p) => p.trim());
  if (parts.length < 2) return null;
  const members: string[] = [];
  for (const part of parts) {
    // The body must not itself contain a quote. With a greedy `.*` this
    // accepted grouped rows like `"italic" · "underline"` as ONE literal —
    // producing a control for a prop that doesn't exist and emitting invalid
    // JSX. Real option labels never contain quotes.
    const m = part.match(/^(["'`])([^"'`]*)\1$/);
    if (!m) return null; // one non-literal member disqualifies the whole union
    members.push(m[2]);
  }
  return members;
}

/** The initial value for an enum control: the documented default, else the first option. */
function initialFor(options: readonly string[], row: PropRow): string {
  const fallback = unquote(row.default);
  return fallback !== undefined && options.includes(fallback) ? fallback : options[0];
}

function pickerFor(options: readonly string[], row: PropRow): Control {
  const compact =
    options.length <= MAX_CHIPS && options.every((o) => o.length <= MAX_CHIP_LABEL);
  return {
    kind: compact ? "chips" : "select",
    prop: row.prop,
    options,
    initial: initialFor(options, row),
  };
}

/**
 * A row whose `prop` is a real, single JSX attribute name.
 *
 * Props tables group related props into one row for readability — `p · px · py`,
 * `fontStyle · textDecoration`, `Pagination.Pages`. Those document several
 * things at once, so there is no single attribute a control could write. This
 * is the backstop: whatever the type string looks like, a row that doesn't name
 * exactly one prop can never become a control.
 */
const isSingleProp = (prop: string): boolean => /^[a-zA-Z][a-zA-Z0-9]*$/.test(prop);

/** One row → one control, or null when the prop isn't meaningfully editable. */
export function deriveControl(row: PropRow): Control | null {
  if (!isSingleProp(row.prop)) return null;

  if (row.control) {
    switch (row.control.kind) {
      case "omit":
        return null;
      case "chips":
      case "select":
        return {
          kind: row.control.kind,
          prop: row.prop,
          options: row.control.options,
          initial: initialFor(row.control.options, row),
        };
      case "switch":
        return { kind: "switch", prop: row.prop, initial: unquote(row.default) === "true" };
      case "text":
        return { kind: "text", prop: row.prop, initial: unquote(row.default) ?? "" };
      case "number": {
        const documented = Number(unquote(row.default));
        return {
          kind: "number",
          prop: row.prop,
          initial: Number.isFinite(documented) ? documented : 0,
        };
      }
    }
  }

  const union = parseUnion(row.type);
  if (union) return pickerFor(union, row);

  const prose = PROSE_TYPES[row.type.trim()];
  if (prose) return pickerFor(prose, row);

  const type = row.type.trim();
  if (type === "boolean") {
    return { kind: "switch", prop: row.prop, initial: unquote(row.default) === "true" };
  }
  if (type === "string") {
    return { kind: "text", prop: row.prop, initial: unquote(row.default) ?? "" };
  }
  if (type === "number") {
    const documented = Number(unquote(row.default));
    return {
      kind: "number",
      prop: row.prop,
      initial: Number.isFinite(documented) ? documented : 0,
    };
  }

  // ReactNode, ElementType, function signatures, prose — no honest control.
  return null;
}

export function deriveControls(rows: readonly PropRow[]): Control[] {
  return rows.map(deriveControl).filter((c): c is Control => c !== null);
}

export type PropValue = string | boolean | number;

/** The starting prop state for a set of controls. */
export function initialState(controls: readonly Control[]): Record<string, PropValue> {
  const state: Record<string, PropValue> = {};
  for (const control of controls) state[control.prop] = control.initial;
  return state;
}
