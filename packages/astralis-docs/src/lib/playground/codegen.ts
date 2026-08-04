import type { PropRow } from "@/modules/docs/props-table";
import { unquote, type PropValue } from "./controls";

/**
 * Turning playground state back into JSX you can paste.
 *
 * The rule that matters is **omit anything still at its default**. Emit every
 * prop and the output is noise nobody copies; omit one that *isn't* actually
 * default and the pasted code renders differently from the preview, which is
 * worse than noise. Hence the `rows` argument — defaults come from the same
 * documented data the controls were derived from.
 *
 * Pure and React-free on purpose.
 */

interface GenerateOptions {
  /** JSX tag name, e.g. "Badge". */
  tag: string;
  /** Current control state, keyed by prop name. */
  props: Record<string, PropValue>;
  /** The documented rows, for default comparison. */
  rows: readonly PropRow[];
  /** Text children, if the component takes any. */
  children?: string;
  /** Package the import line points at. */
  from?: string;
  /** Wrap onto one prop per line past this width. */
  maxWidth?: number;
}

const DEFAULT_MAX_WIDTH = 72;

/** Is this value the prop's documented default, and therefore droppable? */
function isDefault(row: PropRow | undefined, value: PropValue): boolean {
  if (!row) return false;
  const documented = unquote(row.default);
  if (documented === undefined) {
    // No documented default: booleans default to false, so only `true` is worth
    // emitting. Strings and numbers have no safe assumption — always emit.
    return typeof value === "boolean" ? value === false : false;
  }
  return typeof value === "boolean"
    ? String(value) === documented
    : String(value) === documented;
}

/** `variant="outline"`, `max={100}`, or a bare `disabled` for a true boolean. */
function attribute(prop: string, value: PropValue): string | null {
  if (typeof value === "boolean") return value ? prop : null;
  // Numbers take braces — `max="100"` would pass the string "100".
  if (typeof value === "number") return `${prop}={${value}}`;
  return `${prop}="${value}"`;
}

export function generateJsx({
  tag,
  props,
  rows,
  children,
  from = "astralis-ui",
  maxWidth = DEFAULT_MAX_WIDTH,
}: GenerateOptions): string {
  const byName = new Map(rows.map((row) => [row.prop, row]));

  const attrs: string[] = [];
  for (const [prop, value] of Object.entries(props)) {
    if (isDefault(byName.get(prop), value)) continue;
    const attr = attribute(prop, value);
    if (attr) attrs.push(attr);
  }

  const body = children?.trim() ?? "";
  const importLine = `import { ${tag} } from "${from}";`;

  const oneLine = attrs.length ? `<${tag} ${attrs.join(" ")}>` : `<${tag}>`;
  const closing = `</${tag}>`;

  // Self-closing when there are no children — `<Spinner size="lg" />`.
  if (!body) {
    const selfClosed = attrs.length ? `<${tag} ${attrs.join(" ")} />` : `<${tag} />`;
    const element =
      selfClosed.length <= maxWidth
        ? selfClosed
        : [`<${tag}`, ...attrs.map((a) => `  ${a}`), "/>"].join("\n");
    return `${importLine}\n\n${element}\n`;
  }

  const inline = `${oneLine}${body}${closing}`;
  const element =
    inline.length <= maxWidth
      ? inline
      : attrs.length
        ? [`<${tag}`, ...attrs.map((a) => `  ${a}`), `>`, `  ${body}`, closing].join("\n")
        : [oneLine, `  ${body}`, closing].join("\n");

  return `${importLine}\n\n${element}\n`;
}
