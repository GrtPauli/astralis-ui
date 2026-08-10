import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { CardRoot } from "./data-display/card";
import { StatRoot, StatLabel, StatValue } from "./data-display/stat";
import { Select } from "./data-entry/select";
import { Badge } from "./data-display/badge";
import { Kbd } from "./typography/kbd";
import { BreadcrumbRoot } from "./navigation/breadcrumb";
import { CodeBlockRoot } from "./typography/code-block";
import { TableRoot } from "./data-display/table";
import { StepsRoot } from "./navigation/steps";
import { TabsRoot } from "./navigation/tabs";
import { Tag } from "./data-display/tag";
import { Skeleton } from "./feedback/skeleton";
import { Spinner } from "./feedback/spinner";
import { Icon } from "./icon";
import { Link } from "./typography/link";

/**
 * The rule these pin down:
 *
 *   A component owns how it LOOKS. Its parent owns WHERE IT SITS and HOW BIG.
 *
 * Recipe components take the placement set (size, flex-item, margin) and none
 * of Box's paint props. Before this, sizing a Card cost a wrapper node purely
 * to reach one prop, which is why no block used Card at all.
 *
 * The failure mode being guarded is the one this library keeps producing: a
 * prop that looks valid and does nothing — or worse, reaches the DOM as a
 * stray attribute.
 */

/**
 * Phase 2 — the same contract across every component that adopts the rule.
 *
 * Table-driven rather than one test each: the wiring is identical everywhere,
 * so what matters is that no component is missed and none of them leaks a
 * placement key onto the DOM. A component added to the rule and left out of
 * this table is the failure this cannot catch, so the list is kept in step
 * with PLACEMENT_ADOPTERS below.
 */
const ADOPTERS: Array<[string, (props: Record<string, unknown>) => React.ReactElement]> = [
  ["Badge", (p) => <Badge {...p}>badge</Badge>],
  ["Kbd", (p) => <Kbd {...p}>K</Kbd>],
  ["BreadcrumbRoot", (p) => <BreadcrumbRoot {...p} />],
  ["CodeBlockRoot", (p) => <CodeBlockRoot {...p} code="x" />],
  ["TableRoot", (p) => <TableRoot {...p} />],
  ["StepsRoot", (p) => <StepsRoot {...p} />],
  ["TabsRoot", (p) => <TabsRoot {...p} defaultValue="a" />],
  ["Tag", (p) => <Tag {...p}>tag</Tag>],
  ["Skeleton", (p) => <Skeleton {...p} />],
  ["Spinner", (p) => <Spinner {...p} />],
  ["Icon", (p) => <Icon {...p} as="svg" />],
  ["Link", (p) => <Link {...p} href="#">link</Link>],
];

describe.each(ADOPTERS)("placement on %s", (name, render_) => {
  it("resolves w to a class and keeps it off the DOM", () => {
    const { container } = render(render_({ w: "full", mt: "4" }));
    const root = container.firstElementChild!;

    expect([...root.classList]).toEqual(
      expect.arrayContaining(["astralis:w-full", "astralis:mt-4"]),
    );
    expect(root.hasAttribute("w")).toBe(false);
    expect(root.hasAttribute("mt")).toBe(false);
  });
});

describe("placement props on recipe components", () => {
  it("resolves placement props to classes on Card", () => {
    const { container } = render(
      <CardRoot w="full" maxW="lg" flex="1" mt="4">
        card
      </CardRoot>,
    );
    const card = container.firstElementChild!;

    expect([...card.classList]).toEqual(
      expect.arrayContaining([
        "astralis:w-full",
        "astralis:max-w-lg",
        "astralis:flex-1",
        "astralis:mt-4",
      ]),
    );
  });

  it("never leaks a placement prop onto the DOM as an attribute", () => {
    const { container } = render(<CardRoot w="full" alignSelf="end" mb="2" />);
    const card = container.firstElementChild!;

    for (const leaked of ["w", "alignself", "mb"]) {
      expect(card.hasAttribute(leaked)).toBe(false);
    }
  });

  it("keeps the recipe's own variant classes alongside placement", () => {
    const { container } = render(<CardRoot variant="outline" size="lg" w="full" />);
    const classes = [...container.firstElementChild!.classList];

    // `size` here is the Card recipe's scale, not Box's width+height.
    expect(classes).toEqual(expect.arrayContaining(["astralis:w-full"]));
    expect(classes.some((c) => c.includes("border"))).toBe(true);
  });

  it("accepts responsive placement, the same as on Box", () => {
    const { container } = render(<CardRoot w={{ base: "full", md: "1/2" }} />);
    const classes = [...container.firstElementChild!.classList];

    // Whole class names, not prefixes: the CSS coverage gate scans source for
    // `astralis:` strings, so a partial one reads as a class that must exist.
    expect(classes).toEqual(
      expect.arrayContaining(["astralis:w-full", "astralis:md:w-1/2"]),
    );
  });

  it("gives Stat placement and a flat root export", () => {
    const { container } = render(
      <StatRoot w="full" mt="2">
        <StatLabel>Revenue</StatLabel>
        <StatValue>$12k</StatValue>
      </StatRoot>,
    );
    const stat = container.firstElementChild!;

    expect([...stat.classList]).toEqual(
      expect.arrayContaining(["astralis:w-full", "astralis:mt-2"]),
    );
    expect(stat.hasAttribute("w")).toBe(false);
  });

  it("passes an aria-label through to Select's combobox", () => {
    // Select destructured every prop with no rest, so a label passed from
    // outside was dropped and a Field wrapper was the only way to name one.
    const { container } = render(<Select aria-label="Pick a plan" options={[]} w="full" />);

    const combobox = container.querySelector('[role="combobox"]')!;
    expect(combobox.getAttribute("aria-label")).toBe("Pick a plan");

    // Placement belongs to the wrapper, not the trigger.
    expect([...container.firstElementChild!.classList]).toContain("astralis:w-full");
  });
});
