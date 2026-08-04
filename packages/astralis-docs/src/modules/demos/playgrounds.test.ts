import { describe, expect, it } from "vitest";
import { deriveControls } from "@/lib/playground/controls";
import { playgrounds } from "./playgrounds";

const entries = Object.entries(playgrounds);

describe("playground registry", () => {
  it.each(entries)("%s derives at least one control", (_name, entry) => {
    // A registered component whose rows yield nothing would render a tab over
    // an empty rail. hasPlayground() hides that at runtime, but silently — this
    // fails loudly instead, so a registration mistake is caught here.
    expect(deriveControls(entry.rows).length).toBeGreaterThan(0);
  });

  it.each(entries)("%s names a real component and tag", (_name, entry) => {
    expect(entry.component).toBeTruthy();
    expect(entry.tag).toMatch(/^[A-Z][A-Za-z.]*$/);
  });

  it.each(entries)("%s derives controls only for single, real prop names", (_name, entry) => {
    // Grouped documentation rows like "p · px · py" must never become controls
    // — they'd generate JSX for a prop that doesn't exist.
    for (const control of deriveControls(entry.rows)) {
      expect(control.prop).toMatch(/^[a-zA-Z][a-zA-Z0-9]*$/);
    }
  });

  it("keys the registry by demo names that ComponentPreview can match", () => {
    for (const name of Object.keys(playgrounds)) {
      expect(name).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
