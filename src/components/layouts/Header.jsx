import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Anchor,
  Group,
  Tooltip,
  Text,
  useMantineColorScheme,
  Space,
  Image,
  Box,
} from '@mantine/core';
import { Link } from 'react-router-dom';

import logo from '@/logo.svg';

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Group position="flex-start">
        <Group spacing="xs">
          <Box component="span">
            <Image
              src={logo}
              height={32}
              width={32}
              className="animate-duration-5000 animate-spin"
            />
          </Box>
          <Text align="center">React Template</Text>
        </Group>
        <Space w="xl" />
        <Anchor underline={false} component={Link} to="/">
          Home
        </Anchor>
      </Group>
      <Group>
        <Tooltip label="Source code">
          <Anchor
            href="https://github.com/DuckyMomo20012/traffic-sign-detection"
            target="_blank"
          >
            <ActionIcon size="lg" variant="outline">
              <Icon icon="ant-design:github-filled" width={24} />
            </ActionIcon>
          </Anchor>
        </Tooltip>
        <Tooltip label={dark ? 'Light mode' : 'Dark mode'}>
          <ActionIcon
            color="blue"
            onClick={() => toggleColorScheme()}
            size="lg"
            variant="outline"
          >
            <Icon
              icon={dark ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'}
              width={24}
            />
          </ActionIcon>
        </Tooltip>
      </Group>
    </>
  );
};

export { Header };
