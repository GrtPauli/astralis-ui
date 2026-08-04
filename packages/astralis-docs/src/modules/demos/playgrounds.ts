import type { ComponentType } from "react";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Code,
  Heading,
  Input,
  Kbd,
  Link,
  Progress,
  Radio,
  Separator,
  Skeleton,
  Spinner,
  Switch,
  Tag,
  Text,
  Textarea,
  ThemeToggle,
} from "astralis-ui";
import type { PropRow } from "@/modules/docs/props-table";
import { deriveControls } from "@/lib/playground/controls";
import { avatarProps } from "./avatar/avatar-props";
import { badgeProps } from "./badge/badge-props";
import { buttonProps } from "./button/button-props";
import { checkboxProps } from "./checkbox/checkbox-props";
import { codeProps } from "./code/code-props";
import { headingProps } from "./heading/heading-props";
import { inputProps } from "./input/input-props";
import { kbdProps } from "./kbd/kbd-props";
import { linkProps } from "./link/link-props";
import { progressProps } from "./progress/progress-props";
import { radioProps } from "./radio/radio-props";
import { separatorProps } from "./separator/separator-props";
import { skeletonProps } from "./skeleton/skeleton-props";
import { spinnerProps } from "./spinner/spinner-props";
import { switchProps } from "./switch/switch-props";
import { tagProps } from "./tag/tag-props";
import { textProps } from "./text/text-props";
import { textareaProps } from "./textarea/textarea-props";
import { themeToggleProps } from "./theme-toggle/theme-toggle-props";

/**
 * Components with a live Playground tab.
 *
 * Keyed by the demo name used in `<ComponentPreview name="…" />`, so the tab
 * attaches itself to the *primary* demo on a page and appears once, at the top,
 * rather than beside every example. A component with no entry here simply has
 * no Playground tab — the docs must degrade silently, because 64 pages will
 * never all be covered and the absence must not look broken.
 *
 * Deliberately NOT a "use client" module. ComponentPreview is a Server
 * Component and calls `hasPlayground` to decide whether to render the tab at
 * all; behind a client boundary that function would arrive as a client
 * reference and throw. The components it holds are themselves client
 * components — referencing them from here is fine, React passes them across
 * the boundary and PlaygroundView (which is "use client") does the rendering.
 */
export interface PlaygroundEntry {
  /** JSX tag name written into the generated code. */
  tag: string;
  component: ComponentType<Record<string, unknown>>;
  /** The documented props — the same data the props table renders. */
  rows: readonly PropRow[];
  /** Editable text children. Omit for components that take none. */
  children?: string;
  /** Label for the children input. */
  childrenLabel?: string;
}

const asEntry = <P,>(component: ComponentType<P>) =>
  component as ComponentType<Record<string, unknown>>;

export const playgrounds = {
  "badge-demo": {
    tag: "Badge",
    component: asEntry(Badge),
    rows: badgeProps,
    children: "Active",
    childrenLabel: "Label",
  },
  "button-demo": {
    tag: "Button",
    component: asEntry(Button),
    rows: buttonProps,
    children: "Button",
    childrenLabel: "Label",
  },
  "text-demo": {
    tag: "Text",
    component: asEntry(Text),
    rows: textProps,
    children: "The quick brown fox jumps over the lazy dog.",
    childrenLabel: "Content",
  },
  "tag-demo": {
    tag: "Tag",
    component: asEntry(Tag),
    rows: tagProps,
    children: "Design",
    childrenLabel: "Label",
  },
  "kbd-demo": { tag: "Kbd", component: asEntry(Kbd), rows: kbdProps, children: "Ctrl" },
  "code-demo": { tag: "Code", component: asEntry(Code), rows: codeProps, children: "npm i" },
  "heading-demo": {
    tag: "Heading",
    component: asEntry(Heading),
    rows: headingProps,
    children: "The quick brown fox",
  },
  "link-demo": {
    tag: "Link",
    component: asEntry(Link),
    rows: linkProps,
    children: "Read the docs",
  },
  "switch-demo": {
    tag: "Switch",
    component: asEntry(Switch),
    rows: switchProps,
    children: "Enable notifications",
    childrenLabel: "Label",
  },
  "checkbox-demo": {
    tag: "Checkbox",
    component: asEntry(Checkbox),
    rows: checkboxProps,
    children: "Accept terms",
    childrenLabel: "Label",
  },
  "radio-demo": {
    tag: "Radio",
    component: asEntry(Radio),
    rows: radioProps,
    children: "Standard shipping",
    childrenLabel: "Label",
  },

  /* No `children` below: these render from props alone, so the stage shows them
     bare and codegen self-closes the tag. */
  "theme-toggle-demo": {
    tag: "ThemeToggle",
    component: asEntry(ThemeToggle),
    rows: themeToggleProps,
  },
  "avatar-demo": { tag: "Avatar", component: asEntry(Avatar), rows: avatarProps },
  "progress-demo": { tag: "Progress", component: asEntry(Progress), rows: progressProps },
  "spinner-demo": { tag: "Spinner", component: asEntry(Spinner), rows: spinnerProps },
  "skeleton-demo": { tag: "Skeleton", component: asEntry(Skeleton), rows: skeletonProps },
  "separator-demo": { tag: "Separator", component: asEntry(Separator), rows: separatorProps },
  "input-demo": { tag: "Input", component: asEntry(Input), rows: inputProps },
  "textarea-demo": { tag: "Textarea", component: asEntry(Textarea), rows: textareaProps },
} satisfies Record<string, PlaygroundEntry>;

export type PlaygroundName = keyof typeof playgrounds;

/**
 * True when this demo has a playground worth showing.
 *
 * Registration alone isn't enough: control derivation skips rows it can't read
 * honestly — `ReactNode`, handler signatures, and the grouped rows some props
 * tables use (`p · px · py`, `alignItems · justifyContent · wrap …`) that name
 * several props at once. A component whose rows are all of that kind would get
 * a tab over an empty rail, which reads as broken rather than as absent. So the
 * tab is gated on there being at least one real control.
 */
export const hasPlayground = (name: string): name is PlaygroundName =>
  Object.hasOwn(playgrounds, name) &&
  deriveControls(playgrounds[name as PlaygroundName].rows).length > 0;
