import { Button, Tooltip } from '@mantine/core';
import { memo } from 'react';
import { Feature } from '@/components/elements/Feature';
import { type ControlledDemoProps } from '@/pages/index';

const OverlayDemo = memo(function OverlayDemo({
  color,
  disabled,
  label,
  radius,
}: ControlledDemoProps) {
  return (
    <>
      <Feature
        group="Overlays"
        title="Tooltip"
        url="https://mantine.dev/core/tooltip/"
      >
        <Tooltip
          disabled={disabled}
          label={label}
          opened
          position="right"
          radius={radius}
        >
          <Button className="w-min" color={color} variant="outline">
            Button
          </Button>
        </Tooltip>
        <Tooltip
          color={color}
          disabled={disabled}
          label={label}
          opened
          position="right"
          radius={radius}
        >
          <Button className="w-min" color={color} variant="outline">
            Button
          </Button>
        </Tooltip>
        <Tooltip
          color={color}
          disabled={disabled}
          label={label}
          opened
          position="right"
          radius={radius}
          withArrow
        >
          <Button className="w-min" color={color} variant="outline">
            Button
          </Button>
        </Tooltip>
        <Tooltip
          className="w-20"
          color={color}
          disabled={disabled}
          label={label}
          multiline
          opened
          position="bottom"
          radius={radius}
        >
          <Button className="w-min" color={color} variant="outline">
            Button
          </Button>
        </Tooltip>
      </Feature>
    </>
  );
});

export { OverlayDemo };
