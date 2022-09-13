import { Icon } from '@iconify/react';
import {
  Anchor,
  Text,
  AppShell as MantineAppShell,
  Footer,
  Header as AppShellHeader,
  Stack,
  useMantineColorScheme,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layouts/Header';

const AppShell = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <MantineAppShell
      footer={
        <Footer className="!static">
          <Stack align="center" className="children:w-1/2 items-center">
            <Text align="center" size="sm">
              Made with{' '}
              <Icon
                icon={`fluent-emoji-flat:${
                  dark ? 'teacup-without-handle' : 'sparkling-heart'
                }`}
                inline={true}
              />{' '}
              by{' '}
              <Anchor href="https://github.com/DuckyMomo20012">
                Tien Vinh
              </Anchor>
            </Text>
          </Stack>
        </Footer>
      }
      header={
        <AppShellHeader
          className="flex items-center justify-between"
          height={48}
          px={24}
        >
          <Header />
        </AppShellHeader>
      }
    >
      <Outlet />
    </MantineAppShell>
  );
};

export { AppShell };
