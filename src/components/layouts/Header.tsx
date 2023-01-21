import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Anchor,
  Box,
  Group,
  Image,
  Header as MantineHeader,
  Text,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import { Link } from 'react-router-dom';

import logo from '@/logo.svg';

type HeaderProps = {
  setNavBarOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setNavBarOpened }: HeaderProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MantineHeader height={48} px={24}>
      <Group className="h-full" noWrap position="apart">
        <ActionIcon size="lg" variant="subtle">
          <Icon
            className="block sm:hidden"
            height={24}
            icon="ic:baseline-menu"
            onClick={() => {
              setNavBarOpened((prevNavBarOpened) => !prevNavBarOpened);
            }}
          />
        </ActionIcon>
        <Group className="!sm:flex !hidden !flex-grow" position="left">
          <Anchor
            className="flex items-center gap-2"
            component={Link}
            to="/"
            underline={false}
          >
            <Box component="span">
              <Image
                className="animate-duration-5000 animate-spin"
                height={32}
                src={logo}
                width={32}
              />
            </Box>
            <Text align="center" fw={700}>
              React Template
            </Text>
          </Anchor>
          <Anchor component={Link} fw={500} to="/" underline={false}>
            Home
          </Anchor>
        </Group>
        <Group>
          <Tooltip label={dark ? 'Light mode' : 'Dark mode'}>
            <ActionIcon
              className="!sm:flex !hidden"
              color="blue"
              data-test-id="color-scheme-toggle"
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
          <Tooltip label="Source code">
            <Anchor
              data-test-id="github-link"
              href="https://github.com/DuckyMomo20012/react-template"
              target="_blank"
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
