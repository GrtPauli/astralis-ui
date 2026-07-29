import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Box, Flex } from "./index";

/**
 * A guarantee that is easy to break silently, because breaking it still
 * renders: a style prop that stops being recognised becomes a stray DOM
 * attribute rather than a class, and nothing fails.
 */

function classesOf(container: HTMLElement): string[] {
  return [...container.firstElementChild!.classList];
}

describe("self-placement props", () => {
  it("resolve on any primitive, not only Flex.Item", () => {
    const { container } = render(<Flex shrink="0" grow="1" />);

    expect(classesOf(container)).toEqual(
      expect.arrayContaining(["astralis:shrink-0", "astralis:grow"]),
    );
  });

  it("become classes rather than DOM attributes", () => {
    const { container } = render(<Box shrink="0" order="2" alignSelf="center" />);
    const el = container.firstElementChild!;

    expect(el.hasAttribute("shrink")).toBe(false);
    expect(el.hasAttribute("order")).toBe(false);
    expect(el.hasAttribute("alignSelf")).toBe(false);
    expect(classesOf(container)).toEqual(
      expect.arrayContaining(["astralis:shrink-0", "astralis:order-2", "astralis:self-center"]),
    );
  });

  it("accept a responsive map like every other style prop", () => {
    const { container } = render(<Box alignSelf={{ base: "start", lg: "center" }} />);

    expect(classesOf(container)).toEqual(
      expect.arrayContaining(["astralis:self-start", "astralis:lg:self-center"]),
    );
  });
});
