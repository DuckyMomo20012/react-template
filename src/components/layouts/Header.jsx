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
  Header as MantineHeader,
} from '@mantine/core';
import { Link } from 'react-router-dom';

import logo from '@/logo.svg';

const Header = ({ setNavBarOpened }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MantineHeader height={48} px={24}>
      <Group className="h-full" position="apart" noWrap>
        <Icon
          icon="ic:baseline-menu"
          onClick={() => {
            setNavBarOpened((prevNavBarOpened) => !prevNavBarOpened);
          }}
          className="block sm:hidden"
          height={24}
        />
        <Group position="left" className="!sm:flex !hidden !flex-grow">
          <Anchor
            underline={false}
            spacing="xs"
            component={Link}
            to="/"
            className="flex items-center gap-2"
          >
            <Box component="span">
              <Image
                src={logo}
                height={32}
                width={32}
                className="animate-duration-5000 animate-spin"
              />
            </Box>
            <Text align="center">React Template</Text>
          </Anchor>
          <Space w="xl" />
          <Anchor underline={false} component={Link} to="/">
            Home
          </Anchor>
        </Group>
        <Group>
          <Tooltip label={dark ? 'Light mode' : 'Dark mode'}>
            <ActionIcon
              color="blue"
              onClick={() => toggleColorScheme()}
              size="lg"
              variant="outline"
              className="!sm:flex !hidden"
              data-test-id="color-scheme-toggle"
            >
              <Icon
                icon={dark ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'}
                width={24}
              />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Source code">
            <Anchor
              href="https://github.com/DuckyMomo20012/react-template"
              target="_blank"
              data-test-id="github-link"
            >
              <ActionIcon size="lg" variant="outline">
                <Icon icon="ant-design:github-filled" width={24} />
              </ActionIcon>
            </Anchor>
          </Tooltip>
        </Group>
      </Group>
    </MantineHeader>
  );
};

export { Header };
