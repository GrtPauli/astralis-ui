import type { ComponentType, ReactNode } from "react";
import type { PropValue } from "@/lib/playground/controls";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Code,
  DataList,
  Heading,
  Input,
  Kbd,
  Link,
  List,
  Progress,
  Radio,
  Separator,
  Skeleton,
  Spinner,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  Text,
  Textarea,
  ThemeToggle,
  Timeline,
} from "astralis-ui";
import type { PropRow } from "@/modules/docs/props-table";
import { deriveControls } from "@/lib/playground/controls";
import { accordionProps } from "./accordion/accordion-props";
import { alertProps } from "./alert/alert-props";
import { avatarProps } from "./avatar/avatar-props";
import { badgeProps } from "./badge/badge-props";
import { buttonProps } from "./button/button-props";
import { buttonGroupProps } from "./button-group/button-group-props";
import { cardProps } from "./card/card-props";
import { checkboxProps } from "./checkbox/checkbox-props";
import { codeProps } from "./code/code-props";
import { dataListProps } from "./data-list/data-list-props";
import { headingProps } from "./heading/heading-props";
import { inputProps } from "./input/input-props";
import { kbdProps } from "./kbd/kbd-props";
import { linkProps } from "./link/link-props";
import { listProps } from "./list/list-props";
import { progressProps } from "./progress/progress-props";
import { radioProps } from "./radio/radio-props";
import { separatorProps } from "./separator/separator-props";
import { skeletonProps } from "./skeleton/skeleton-props";
import { spinnerProps } from "./spinner/spinner-props";
import { stepsProps } from "./steps/steps-props";
import { switchProps } from "./switch/switch-props";
import { tableProps } from "./table/table-props";
import { tabsProps } from "./tabs/tabs-props";
import { tagProps } from "./tag/tag-props";
import { textProps } from "./text/text-props";
import { textareaProps } from "./textarea/textarea-props";
import { themeToggleProps } from "./theme-toggle/theme-toggle-props";
import { timelineProps } from "./timeline/timeline-props";

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
/**
 * Fixed element children for a component that is composed, not labelled —
 * `Alert.Title`, a `ButtonGroup` of `Button`s, an `Accordion.Item`.
 *
 * The playground edits the ROOT's props against this fixture; it does not edit
 * structure. That boundary is deliberate: a node-tree editor is a different
 * product, and this one stays finishable by not becoming it.
 *
 * `node` is what renders; `source` is written verbatim into the generated JSX
 * so the code still pastes and runs. They are two hand-written descriptions of
 * the same thing, which is exactly the drift this project keeps designing
 * away — but the alternative is parsing JSX at runtime, and the fixtures are
 * short and reviewed together. Keep them in step.
 */
export interface PlaygroundFixture {
  node: ReactNode;
  source: string;
  /** Names the source needs beyond the root tag, e.g. `Button` inside a group. */
  imports?: readonly string[];
}

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
  /** Fixed element children. Mutually exclusive with `children`. */
  fixture?: PlaygroundFixture;
  /**
   * Props the component needs to be meaningful, but which aren't worth a
   * control — usually because they're bound to the fixture. `Tabs` selects via
   * `useState(defaultValue)`, so without one nothing is selected and the panel
   * renders empty; but its value has to match a trigger in the fixture, so
   * letting the reader edit it would only break the example.
   *
   * Merged UNDER control state, and emitted in the generated code, because the
   * pasted snippet needs them to work.
   */
  baseProps?: Record<string, PropValue>;
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

  /* ---- Composed components: root props edited against a fixed fixture ---- */

  "alert-demo": {
    tag: "Alert",
    component: asEntry(Alert),
    rows: alertProps,
    fixture: {
      node: (
        <>
          <Alert.Title>Scheduled maintenance</Alert.Title>
          <Alert.Description>
            The dashboard will be read-only on Saturday from 02:00–04:00 UTC.
          </Alert.Description>
        </>
      ),
      source: `<Alert.Title>Scheduled maintenance</Alert.Title>
<Alert.Description>
  The dashboard will be read-only on Saturday from 02:00–04:00 UTC.
</Alert.Description>`,
    },
  },
  "button-group-demo": {
    tag: "ButtonGroup",
    component: asEntry(ButtonGroup),
    rows: buttonGroupProps,
    fixture: {
      node: (
        <>
          <Button>Save draft</Button>
          <Button>Preview</Button>
          <Button>Publish</Button>
        </>
      ),
      source: `<Button>Save draft</Button>
<Button>Preview</Button>
<Button>Publish</Button>`,
      imports: ["Button"],
    },
  },
  "tabs-demo": {
    tag: "Tabs",
    component: asEntry(Tabs),
    rows: tabsProps,
    baseProps: { defaultValue: "overview" },
    fixture: {
      node: (
        <>
          <Tabs.List>
            <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
            <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview">Overview panel.</Tabs.Content>
          <Tabs.Content value="activity">Recent activity shows here.</Tabs.Content>
          <Tabs.Content value="settings">Settings panel.</Tabs.Content>
        </>
      ),
      source: `<Tabs.List>
  <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
  <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
  <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
</Tabs.List>
<Tabs.Content value="overview">Overview panel.</Tabs.Content>
<Tabs.Content value="activity">Recent activity shows here.</Tabs.Content>
<Tabs.Content value="settings">Settings panel.</Tabs.Content>`,
    },
  },
  "steps-demo": {
    tag: "Steps",
    component: asEntry(Steps),
    rows: stepsProps,
    fixture: {
      node: (
        <Steps.List>
          <Steps.Item>
            <Steps.Indicator />
            <Steps.Title>Account</Steps.Title>
          </Steps.Item>
          <Steps.Item>
            <Steps.Indicator />
            <Steps.Title>Shipping</Steps.Title>
          </Steps.Item>
          <Steps.Item>
            <Steps.Indicator />
            <Steps.Title>Payment</Steps.Title>
          </Steps.Item>
        </Steps.List>
      ),
      source: `<Steps.List>
  <Steps.Item>
    <Steps.Indicator />
    <Steps.Title>Account</Steps.Title>
  </Steps.Item>
  <Steps.Item>
    <Steps.Indicator />
    <Steps.Title>Shipping</Steps.Title>
  </Steps.Item>
  <Steps.Item>
    <Steps.Indicator />
    <Steps.Title>Payment</Steps.Title>
  </Steps.Item>
</Steps.List>`,
    },
  },
  "table-demo": {
    tag: "Table",
    component: asEntry(Table),
    rows: tableProps,
    fixture: {
      node: (
        <>
          <Table.Header>
            <Table.Row>
              <Table.Head>Version</Table.Head>
              <Table.Head>Released</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>0.3.0</Table.Cell>
              <Table.Cell>Jun 28</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>0.2.1</Table.Cell>
              <Table.Cell>Jun 14</Table.Cell>
            </Table.Row>
          </Table.Body>
        </>
      ),
      source: `<Table.Header>
  <Table.Row>
    <Table.Head>Version</Table.Head>
    <Table.Head>Released</Table.Head>
  </Table.Row>
</Table.Header>
<Table.Body>
  <Table.Row>
    <Table.Cell>0.3.0</Table.Cell>
    <Table.Cell>Jun 28</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.Cell>0.2.1</Table.Cell>
    <Table.Cell>Jun 14</Table.Cell>
  </Table.Row>
</Table.Body>`,
    },
  },
  "timeline-demo": {
    tag: "Timeline",
    component: asEntry(Timeline),
    rows: timelineProps,
    fixture: {
      node: (
        <>
          <Timeline.Item>
            <Timeline.Indicator />
            <Timeline.Content>
              <Timeline.Title>Order placed</Timeline.Title>
              <Timeline.Description>Confirmed at 2:30 PM</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Indicator />
            <Timeline.Content>
              <Timeline.Title>In transit</Timeline.Title>
              <Timeline.Description>Left the depot</Timeline.Description>
            </Timeline.Content>
          </Timeline.Item>
        </>
      ),
      source: `<Timeline.Item>
  <Timeline.Indicator />
  <Timeline.Content>
    <Timeline.Title>Order placed</Timeline.Title>
    <Timeline.Description>Confirmed at 2:30 PM</Timeline.Description>
  </Timeline.Content>
</Timeline.Item>
<Timeline.Item>
  <Timeline.Indicator />
  <Timeline.Content>
    <Timeline.Title>In transit</Timeline.Title>
    <Timeline.Description>Left the depot</Timeline.Description>
  </Timeline.Content>
</Timeline.Item>`,
    },
  },
  "card-demo": {
    tag: "Card",
    component: asEntry(Card),
    rows: cardProps,
    fixture: {
      node: (
        <>
          <Card.Header>
            <Card.Title>Production cluster</Card.Title>
            <Card.Description>us-east-1 · 12 nodes</Card.Description>
          </Card.Header>
          <Card.Body>All services healthy.</Card.Body>
        </>
      ),
      source: `<Card.Header>
  <Card.Title>Production cluster</Card.Title>
  <Card.Description>us-east-1 · 12 nodes</Card.Description>
</Card.Header>
<Card.Body>All services healthy.</Card.Body>`,
    },
  },
  "list-demo": {
    tag: "List",
    component: asEntry(List),
    rows: listProps,
    fixture: {
      node: (
        <>
          <List.Item>Semantic tokens over raw colors</List.Item>
          <List.Item>Responsive props on every primitive</List.Item>
          <List.Item>Precompiled CSS — no build step</List.Item>
        </>
      ),
      source: `<List.Item>Semantic tokens over raw colors</List.Item>
<List.Item>Responsive props on every primitive</List.Item>
<List.Item>Precompiled CSS — no build step</List.Item>`,
    },
  },
  "data-list-demo": {
    tag: "DataList",
    component: asEntry(DataList),
    rows: dataListProps,
    fixture: {
      node: (
        <>
          <DataList.Item>
            <DataList.Label>Name</DataList.Label>
            <DataList.Value>Sophie Durand</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Email</DataList.Label>
            <DataList.Value>sophie@astralis.dev</DataList.Value>
          </DataList.Item>
        </>
      ),
      source: `<DataList.Item>
  <DataList.Label>Name</DataList.Label>
  <DataList.Value>Sophie Durand</DataList.Value>
</DataList.Item>
<DataList.Item>
  <DataList.Label>Email</DataList.Label>
  <DataList.Value>sophie@astralis.dev</DataList.Value>
</DataList.Item>`,
    },
  },
  /* Breadcrumb is deliberately absent: its only documented prop is `separator`
     (ReactNode), so it derives no control and a Playground tab would open onto
     an empty rail. Its props table was still migrated. */

  "accordion-demo": {
    tag: "Accordion",
    component: asEntry(Accordion),
    rows: accordionProps,
    fixture: {
      node: (
        <>
          <Accordion.Item value="tokens">
            <Accordion.Trigger>What are semantic tokens?</Accordion.Trigger>
            <Accordion.Content>
              Named colors that resolve differently in light and dark mode.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="build">
            <Accordion.Trigger>Do I need a build step?</Accordion.Trigger>
            <Accordion.Content>
              No — the library ships precompiled CSS.
            </Accordion.Content>
          </Accordion.Item>
        </>
      ),
      source: `<Accordion.Item value="tokens">
  <Accordion.Trigger>What are semantic tokens?</Accordion.Trigger>
  <Accordion.Content>
    Named colors that resolve differently in light and dark mode.
  </Accordion.Content>
</Accordion.Item>
<Accordion.Item value="build">
  <Accordion.Trigger>Do I need a build step?</Accordion.Trigger>
  <Accordion.Content>
    No — the library ships precompiled CSS.
  </Accordion.Content>
</Accordion.Item>`,
    },
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
