import { Icon } from '@iconify/react';
import { ActionIcon, Button } from '@mantine/core';
import { memo } from 'react';
import { Feature } from '@/components/elements/Feature';
import { type ControlledDemoProps } from '@/pages/index';

const ButtonDemo = memo(function ButtonDemo({
  color,
  disabled,
  label,
  radius,
  size,
  loading,
}: ControlledDemoProps) {
  return (
    <>
      <Feature
        group="Buttons"
        title="ActionIcon"
        url="https://mantine.dev/core/action-icon/"
      >
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="default"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="filled"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="light"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="outline"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="subtle"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="transparent"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
        <ActionIcon
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="white"
        >
          <Icon
            height="70%"
            icon="material-symbols:settings-outline-rounded"
            width="70%"
          />
        </ActionIcon>
      </Feature>

      <Feature
        group="Buttons"
        title="Button"
        url="https://mantine.dev/core/button/"
      >
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="default"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="filled"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="light"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="outline"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="subtle"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="transparent"
        >
          {label}
        </Button>
        <Button
          color={color}
          disabled={disabled}
          loading={loading}
          radius={radius}
          size={size}
          variant="white"
        >
          {label}
        </Button>
      </Feature>
    </>
  );
});

export { ButtonDemo };
