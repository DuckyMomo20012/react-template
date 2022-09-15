import { Icon } from '@iconify/react';
import {
  Navbar as MantineNavbar,
  NavLink,
  ScrollArea,
  CloseButton,
  useMantineColorScheme,
  Anchor,
  Box,
  Image,
  Text,
  Group,
  Tooltip,
  ActionIcon,
  Button,
  Transition,
  Divider,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '@/logo.svg';

const paths = [
  {
    path: '/',
    label: 'Home',
    icon: 'ic:outline-home',
  },
];

const Navbar = ({ navBarOpened, setNavBarOpened }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const matches = useMediaQuery('(min-width: 640px)');
  const location = useLocation();

  useEffect(() => {
    if (navBarOpened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [navBarOpened]);

  useEffect(() => {
    if (matches) {
      setNavBarOpened(false);
    }
  }, [matches, setNavBarOpened]);

  return (
    <Transition
      mounted={navBarOpened}
      transition={{
        in: { opacity: 1, transform: 'translateX(0)' },
        out: { opacity: 0, transform: 'translateX(-100%)' },
      }}
      duration={100}
      timingFunction="ease"
    >
      {(styles) => {
        return (
          <MantineNavbar
            // hiddenBreakpoint="sm"
            // NOTE: Don't set this because we want animation to work
            // hidden={!navBarOpened}
            className="!sm:hidden !w-9/10 !z-200 !top-0 shadow-md"
            style={styles}
          >
            <MantineNavbar.Section
              className="flex items-center justify-between gap-2"
              p="sm"
            >
              <Group noWrap className="min-w-0">
                <Anchor
                  underline={false}
                  spacing="xs"
                  component={Link}
                  to="/"
                  className="flex min-w-0 items-center gap-2"
                >
                  <Box component="span">
                    <Image
                      src={logo}
                      height={32}
                      width={32}
                      className="animate-duration-5000 animate-spin"
                    />
                  </Box>
                  <Text align="center" className="w-full truncate">
                    React Template
                  </Text>
                </Anchor>
                <Tooltip label={dark ? 'Light mode' : 'Dark mode'}>
                  <ActionIcon
                    color="blue"
                    onClick={() => toggleColorScheme()}
                    size="lg"
                    variant="outline"
                  >
                    <Icon
                      icon={
                        dark ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'
                      }
                      width={24}
                    />
                  </ActionIcon>
                </Tooltip>
              </Group>
              <CloseButton onClick={() => setNavBarOpened(false)} />
            </MantineNavbar.Section>
            <MantineNavbar.Section grow component={ScrollArea}>
              {paths.map((path) => {
                return (
                  <NavLink
                    key={path.path}
                    label={path.label}
                    component={Link}
                    to={path.path}
                    active={location.pathname === path.path}
                    icon={<Icon icon={path.icon} height={24} />}
                    onClick={() => setNavBarOpened(false)}
                  />
                );
              })}
            </MantineNavbar.Section>
            <Divider />
            <MantineNavbar.Section p="sm">
              <Group position="center">
                <Button
                  variant="light"
                  component="a"
                  href="https://github.com/DuckyMomo20012/react-template"
                  target="_blank"
                  leftIcon={<Icon icon="ant-design:github-filled" width={24} />}
                >
                  Github
                </Button>
              </Group>
            </MantineNavbar.Section>
          </MantineNavbar>
        );
      }}
    </Transition>
  );
};

export { Navbar };
