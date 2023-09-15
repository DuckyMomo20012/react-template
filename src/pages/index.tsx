import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Title,
  Tooltip,
  useMantineColorScheme,
} from '@mantine/core';
import { Helmet } from 'react-helmet-async';

const techStack = [
  {
    name: 'Redux Toolkit',
    color: 'violet',
    docLink: 'https://redux-toolkit.js.org/',
    description: 'State management',
    logoSrc: '/img/redux.svg',
  },
  {
    name: 'React Router',
    color: 'red',
    docLink: 'https://reactrouter.com/en/main',
    description: 'Routing',
    logoSrc: '/img/react-router.svg',
  },
  {
    name: 'React Hook Form',
    color: 'pink',
    docLink: 'https://react-hook-form.com/',
    description: 'Forms',
    logoSrc: '/img/react-hook-form.svg',
  },
  {
    name: 'TanStack Query',
    color: 'orange',
    docLink: 'https://tanstack.com/query/v4',
    description: 'Data fetching',
    logoSrc: '/img/react-query.svg',
  },
  {
    name: 'Mantine',
    color: 'blue',
    docLink: 'https://mantine.dev/',
    description: 'UI library',
    logoSrc: '/img/mantine.svg',
  },
  {
    name: 'WindiCSS',
    color: 'sky',
    docLink: 'https://windicss.org/',
    description: 'CSS framework',
    logoSrc: '/img/windicss.svg',
  },
  {
    name: 'Vitest',
    color: 'emerald',
    docLink: 'https://vitest.dev/',
    description: 'Unit testing',
    logoSrc: '/img/vitest.svg',
  },
  {
    name: 'Playwright',
    color: 'green',
    docLink: 'https://playwright.dev/',
    description: 'E2E testing',
    logoSrc: '/img/playwright.svg',
  },
];

const HomePage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Helmet>
        <title>Vite + React + TS</title>
        <meta
          content="A simple starter template for Vite + React + Typescript projects, with many useful features and tools pre-installed."
          name="description"
        ></meta>
      </Helmet>
      <Stack align="center" className="h-screen justify-center" spacing="xl">
        <Group className="w-full" position="center" spacing="xl">
          <Stack align="center">
            <Image
              alt="vite logo"
              className="hover:filter"
              fit="contain"
              height={80}
              imageProps={{
                style: {
                  aspectRatio: '1 / 1',
                },
              }}
              src="/img/vite.svg"
              width={80}
              withPlaceholder
            />
            <Title align="center" className="text-4xl">
              Vite
            </Title>
          </Stack>
          <Stack align="center">
            <Image
              alt="react logo"
              className="hover:filter"
              fit="contain"
              height={80}
              imageProps={{
                style: {
                  aspectRatio: '1 / 1',
                },
              }}
              src="/img/react.svg"
              width={80}
              withPlaceholder
            />
            <Title align="center" className="text-4xl">
              React
            </Title>
          </Stack>
          <Stack align="center">
            <Image
              alt="typescript logo"
              className="hover:filter"
              fit="contain"
              height={80}
              imageProps={{
                style: {
                  aspectRatio: '1 / 1',
                },
              }}
              src="/img/typescript.svg"
              width={80}
              withPlaceholder
            />
            <Title align="center" className="text-4xl">
              Typescript
            </Title>
          </Stack>
        </Group>

        <SimpleGrid
          breakpoints={[
            { minWidth: 'md', cols: 2 },
            { minWidth: 'lg', cols: 3 },
          ]}
          className="w-2/3 lg:auto-cols-min xl:auto-rows-fr"
          cols={1}
          spacing="xl"
          verticalSpacing="xl"
        >
          <Box className="border-4 rounded-lg border-indigo-300 col-span-1 md:col-span-2 lg:col-span-3 p-5">
            <Stack align="center">
              <Title align="center" order={3}>
                <Icon
                  className="aspect-square inline"
                  height={22}
                  icon="fluent-emoji-flat:high-voltage"
                  inline
                  width={22}
                />{' '}
                Batteries included
              </Title>
              <Group className="w-full" position="center" spacing="xl">
                {techStack.map(
                  ({ name, color, docLink, description, logoSrc }) => {
                    return (
                      <Stack align="center" key={name}>
                        <Tooltip.Floating color={color} label={description}>
                          <ActionIcon
                            color={color}
                            component="a"
                            href={docLink || '#'}
                            size={64}
                            target="_blank"
                            variant="outline"
                          >
                            <Image
                              alt={`${name.toLowerCase()} logo`}
                              fit="contain"
                              height={36}
                              imageProps={{
                                style: {
                                  aspectRatio: '1 / 1',
                                },
                              }}
                              src={logoSrc}
                              width={36}
                              withPlaceholder
                            />
                          </ActionIcon>
                        </Tooltip.Floating>
                        <Badge color={color}>{name}</Badge>
                      </Stack>
                    );
                  },
                )}
              </Group>
            </Stack>
          </Box>

          <Box className="border-4 rounded-lg border-rose-300 p-5">
            <Stack align="center">
              <Title align="center" order={3}>
                <Icon
                  height={22}
                  icon="fluent-emoji-flat:sponge"
                  inline
                  style={{
                    aspectRatio: '1 / 1',
                  }}
                  width={22}
                />{' '}
                Better code style with
              </Title>
              <Group position="center">
                <Badge color="purple">ESlint</Badge>
                <Badge color="fuchsia">Prettier</Badge>
                <Badge color="slate">Husky</Badge>
                <Badge color="indigo">Commitlint</Badge>
                <Badge color="teal">Lint-staged</Badge>
                <Badge color="zinc">Editorconfig</Badge>
              </Group>
            </Stack>
          </Box>

          <Box className="border-4 rounded-lg border-pink-300 p-5">
            <Stack align="center">
              <Title align="center" order={3}>
                <Icon
                  height={22}
                  icon="fluent-emoji-flat:dizzy"
                  inline
                  style={{
                    aspectRatio: '1 / 1',
                  }}
                  width={22}
                />{' '}
                Move faster with these awesome libraries
              </Title>
              <Group position="center">
                <Badge color="yellow">Axios</Badge>
                <Badge color="lime">Clsx</Badge>
                <Badge color="rose">Type-fest</Badge>
                <Badge color="cyan">Zod</Badge>
              </Group>
            </Stack>
          </Box>

          <Box className="border-4 rounded-lg border-amber-300 p-5">
            <Stack align="center">
              <Title align="center" order={3}>
                <Icon
                  height={22}
                  icon={`fluent-emoji-flat:${
                    dark ? 'full-moon-face' : 'sun-with-face'
                  }`}
                  inline
                  style={{
                    aspectRatio: '1 / 1',
                  }}
                  width={22}
                />{' '}
                Dark mode ready
              </Title>
              <Button
                data-test-id="demo-color-scheme-toggle"
                onClick={() => toggleColorScheme()}
                variant="light"
              >
                Toggle dark mode
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Stack>
    </>
  );
};

export default HomePage;
