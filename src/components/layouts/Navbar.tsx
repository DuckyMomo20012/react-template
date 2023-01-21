import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  CloseButton,
  Divider,
  Group,
  Image,
  NavLink as MantineNavLink,
  Navbar as MantineNavbar,
  ScrollArea,
  Text,
  Tooltip,
  Transition,
  useMantineColorScheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '@/logo.svg';

const paths = [
  {
    path: '/',
    label: 'Home',
    icon: 'ic:outline-home',
  },
];

type NavbarProps = {
  navBarOpened: boolean;
  setNavBarOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const slideRight = {
  in: { opacity: 1, transform: 'translateX(0)' },
  out: { opacity: 0, transform: 'translateX(-100%)' },
  transitionProperty: 'transform, opacity',
};

const Navbar = ({ navBarOpened, setNavBarOpened }: NavbarProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const matches = useMediaQuery('(min-width: 640px)');

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
      duration={200}
      mounted={navBarOpened}
      timingFunction="ease-in-out"
      transition={slideRight}
    >
      {(styles) => {
        return (
          <MantineNavbar
            // hiddenBreakpoint="sm"
            // NOTE: Don't set this because we want animation to work
            // Hidden={!navBarOpened}
            className="!sm:hidden !w-9/10 !z-200 !top-0 shadow-md rounded-r-lg"
            style={styles}
          >
            <MantineNavbar.Section
              className="flex items-center justify-between gap-2"
              p="sm"
            >
              <Group className="min-w-0" noWrap>
                <Anchor
                  className="flex min-w-0 items-center gap-2"
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
                  <Text align="center" className="w-full truncate" fw={700}>
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
              <CloseButton onClick={() => setNavBarOpened(false)} size="xl" />
            </MantineNavbar.Section>
            <MantineNavbar.Section component={ScrollArea} grow>
              {paths.map((path) => {
                return (
                  <NavLink
                    className="no-underline"
                    key={path.path}
                    to={path.path}
                  >
                    {({ isActive }) => {
                      return (
                        <MantineNavLink
                          active={isActive}
                          fw={500}
                          icon={<Icon height={24} icon={path.icon} />}
                          label={path.label}
                          onClick={() => setNavBarOpened(false)}
                        />
                      );
                    }}
                  </NavLink>
                );
              })}
            </MantineNavbar.Section>
            <Divider />
            <MantineNavbar.Section p="sm">
              <Group position="center">
                <Button
                  component="a"
                  href="https://github.com/DuckyMomo20012/react-template"
                  leftIcon={<Icon icon="ant-design:github-filled" width={24} />}
                  target="_blank"
                  variant="light"
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
