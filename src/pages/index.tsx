import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Badge,
  Button,
  Code,
  ColorSwatch,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { FeatureBox } from '@/components/elements/FeatureBox';

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
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Stack align="center" py="xl">
      <Group className="w-full" position="center" spacing="xl">
        <Stack align="center">
          <Image
            className="hover:filter"
            fit="contain"
            height={80}
            src="/img/vite.svg"
            style={
              {
                '--tw-drop-shadow': 'drop-shadow(0 0 2em #646cffaa)',
              } as React.CSSProperties
            }
          />
          <Title align="center" className="text-4xl">
            Vite
          </Title>
        </Stack>
        <Icon height={36} icon="fluent-emoji-flat:plus" width={36} />
        <Stack align="center">
          <Image
            className="hover:filter"
            fit="contain"
            height={80}
            src="/img/react.svg"
            style={
              {
                '--tw-drop-shadow': 'drop-shadow(0 0 2em #61dafbaa)',
              } as React.CSSProperties
            }
          />
          <Title align="center" className="text-4xl">
            React
          </Title>
        </Stack>
        <Icon height={36} icon="fluent-emoji-flat:plus" width={36} />
        <Stack align="center">
          <Image
            className="hover:filter"
            fit="contain"
            height={80}
            src="/img/typescript.svg"
            style={
              {
                '--tw-drop-shadow': 'drop-shadow(0 0 2em #3178c6aa)',
              } as React.CSSProperties
            }
          />
          <Title align="center" className="text-4xl">
            Typescript
          </Title>
        </Stack>
      </Group>

      <Title
        align="center"
        gradient={{
          from: dark ? 'white' : 'purple',
          to: dark ? 'pink' : 'cyan',
          deg: 45,
        }}
        order={2}
        variant="gradient"
      >
        Features
      </Title>

      <SimpleGrid
        breakpoints={[
          { minWidth: 'md', cols: 2 },
          { minWidth: 'lg', cols: 3 },
        ]}
        className="w-2/3 lg:auto-cols-min xl:auto-rows-fr"
        cols={1}
      >
        <FeatureBox
          color="indigo"
          outerClassName="col-span-1 md:col-span-2 lg:col-span-3"
        >
          <Stack align="center">
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:high-voltage" inline /> Batteries
              included
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
                            fit="contain"
                            height={36}
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
        </FeatureBox>

        <FeatureBox color="rose">
          <Stack align="center">
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:sponge" inline /> Better code style
              with
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
        </FeatureBox>

        <FeatureBox color="pink">
          <Stack align="center">
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:dizzy" inline /> Move faster with
              these awesome libraries
            </Title>
            <Group position="center">
              <Badge className="animate-tada" color="yellow">
                Axios
              </Badge>
              <Badge className="animate-wobble" color="lime">
                Clsx
              </Badge>
              <Badge className="animate-swing" color="rose">
                Type-fest
              </Badge>
              <Badge className="animate-jello" color="cyan">
                Zod
              </Badge>
            </Group>
          </Stack>
        </FeatureBox>

        <FeatureBox color="teal">
          <Stack align="center">
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:artist-palette" inline /> Extended
              WindiCSS color palette
            </Title>
            <Group position="center">
              {Object.keys(theme.colors).map((color) => {
                return (
                  <Tooltip.Floating
                    className="capitalize"
                    color={color}
                    key={color}
                    label={color}
                  >
                    <ColorSwatch color={theme.colors[color][4]} radius="md" />
                  </Tooltip.Floating>
                );
              })}
            </Group>
          </Stack>
        </FeatureBox>

        <FeatureBox color="amber">
          <Stack align="center">
            <Title align="center" order={3}>
              <Icon
                icon={`fluent-emoji-flat:${
                  dark ? 'full-moon-face' : 'sun-with-face'
                }`}
                inline
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
        </FeatureBox>

        <FeatureBox color="sky">
          <Stack align="center">
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:input-latin-lowercase" inline />{' '}
              Pre-configured font pairing
            </Title>
            <Group position="center">
              <Text>Text: Inter</Text>
              <Title order={4}>Heading: Quicksand</Title>
              <Code color="violet">Mono: Space Mono</Code>
            </Group>
          </Stack>
        </FeatureBox>

        <FeatureBox color="gray">
          <Stack align="center">
            <Title align="center" order={3}>
              <Icon icon="fluent-emoji-flat:locked" inline /> Type-safe all the
              way with TypeScript
            </Title>
            <Badge color="green" variant="dot">
              Enabled
            </Badge>
          </Stack>
        </FeatureBox>
      </SimpleGrid>
    </Stack>
  );
};

export { HomePage };
