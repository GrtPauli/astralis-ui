"use client";

import { Button, ButtonGroup, Input, NumberInput, Select, Switch, Text } from "astralis-ui";
import type { Control, PropValue } from "@/lib/playground/controls";

/**
 * The control rail. Every input here is an Astralis component — this panel is
 * the library exercising its own form primitives, so anything awkward to build
 * is a finding about the API, not something to work around locally.
 *
 * Visual language follows the theme builder's rail (PresetChips / labelled
 * rows) so the docs don't grow a second dialect of control panel.
 */

interface PlaygroundPanelProps {
  controls: readonly Control[];
  state: Record<string, PropValue>;
  onChange: (prop: string, value: PropValue) => void;
  /** Children text, when the component takes any. */
  childrenValue?: string;
  childrenLabel?: string;
  onChildrenChange?: (value: string) => void;
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <Text size="sm" weight="medium">
        {label}
      </Text>
      {children}
    </div>
  );
}

function ControlRow({
  control,
  value,
  onChange,
}: {
  control: Control;
  value: PropValue;
  onChange: (value: PropValue) => void;
}) {
  switch (control.kind) {
    case "chips":
      return (
        <Row label={control.prop}>
          {/* ButtonGroup is inline-flex; as a flex item it blockifies and fills
              the rail, which is what lets flex-wrap actually break the row. */}
          <ButtonGroup spacing="sm" className="flex-wrap">
            {control.options.map((option) => {
              const active = option === value;
              return (
                <Button
                  key={option}
                  size="xs"
                  variant={active ? "subtle" : "outline"}
                  colorScheme={active ? "brand" : "gray"}
                  aria-pressed={active}
                  onClick={() => onChange(option)}
                >
                  {option}
                </Button>
              );
            })}
          </ButtonGroup>
        </Row>
      );

    case "select":
      return (
        <Row label={control.prop}>
          <Select
            size="sm"
            value={String(value)}
            options={control.options.map((option) => ({ value: option, label: option }))}
            onChange={(next) => next !== null && onChange(String(next))}
            aria-label={control.prop}
          />
        </Row>
      );

    case "switch":
      return (
        <Switch
          size="sm"
          checked={Boolean(value)}
          onChange={(event) => onChange(event.currentTarget.checked)}
        >
          <Text as="span" size="sm" weight="medium">
            {control.prop}
          </Text>
        </Switch>
      );

    case "text":
      return (
        <Row label={control.prop}>
          <Input
            size="sm"
            value={String(value)}
            onChange={(event) => onChange(event.currentTarget.value)}
            aria-label={control.prop}
          />
        </Row>
      );

    case "number":
      return (
        <Row label={control.prop}>
          <NumberInput
            size="sm"
            value={Number(value)}
            /* null when cleared — fall back to 0 so the live component never
               receives undefined mid-edit and blank the stage. */
            onChange={(next) => onChange(next ?? 0)}
            aria-label={control.prop}
          />
        </Row>
      );
  }
}

export function PlaygroundPanel({
  controls,
  state,
  onChange,
  childrenValue,
  childrenLabel = "Content",
  onChildrenChange,
}: PlaygroundPanelProps) {
  /* Reset lives beside the rail's tabs, not here — it acts on the whole
     playground, so it shouldn't scroll away with the controls. */
  return (
    <div className="flex flex-col gap-5 pb-1">

      {onChildrenChange && (
        <Row label={childrenLabel}>
          <Input
            size="sm"
            value={childrenValue ?? ""}
            onChange={(event) => onChildrenChange(event.currentTarget.value)}
            aria-label={childrenLabel}
          />
        </Row>
      )}

      {controls.map((control) => (
        <ControlRow
          key={control.prop}
          control={control}
          value={state[control.prop]}
          onChange={(value) => onChange(control.prop, value)}
        />
      ))}
    </div>
  );
}
