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
  Space,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';

const techStack = [
  {
    name: 'Redux Toolkit',
    color: 'violet',
    docLink: 'https://redux-toolkit.js.org/',
    description: 'State management',
    logoSrc: '/redux.svg',
  },
  {
    name: 'React Router',
    color: 'red',
    docLink: 'https://reactrouter.com/en/main',
    description: 'Routing',
    logoSrc: '/react-router.svg',
  },
  {
    name: 'React Hook Form',
    color: 'pink',
    docLink: 'https://react-hook-form.com/',
    description: 'Forms',
    logoSrc: '/react-hook-form.svg',
  },
  {
    name: 'TanStack Query',
    color: 'orange',
    docLink: 'https://tanstack.com/query/v4',
    description: 'Data fetching',
    logoSrc: '/react-query.svg',
  },
  {
    name: 'Mantine',
    color: 'blue',
    docLink: 'https://mantine.dev/',
    description: 'UI library',
    logoSrc: '/mantine.svg',
  },
  {
    name: 'WindiCSS',
    color: 'sky',
    docLink: 'https://windicss.org/',
    description: 'CSS framework',
    logoSrc: '/windicss.svg',
  },
  {
    name: 'Vitest',
    color: 'emerald',
    docLink: 'https://vitest.dev/',
    description: 'Unit testing',
    logoSrc: '/vitest.svg',
  },
  {
    name: 'Playwright',
    color: 'green',
    docLink: 'https://playwright.dev/',
    description: 'E2E testing',
    logoSrc: '/playwright.svg',
  },
];

const HomePage = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Stack align="center">
      <Group grow position="center" spacing="xl">
        <Image
          className="hover:filter"
          fit="contain"
          height={80}
          src="/vite.svg"
          style={{ '--tw-drop-shadow': 'drop-shadow(0 0 2em #646cffaa)' }}
        />
        <Image
          className="animate-duration-10000 animate-spin hover:filter"
          fit="contain"
          height={80}
          src="/react.svg"
          style={{ '--tw-drop-shadow': 'drop-shadow(0 0 2em #61dafbaa)' }}
        />
      </Group>
      <Title align="center" className="text-4xl">
        Vite + React
      </Title>

      <Title
        align="center"
        gradient={{ from: 'purple', to: 'cyan', deg: 45 }}
        order={2}
        variant="gradient"
      >
        Features
      </Title>

      <SimpleGrid className="children:(p-5 border-dashed) children:(border-3 rounded-md) children:border-gray-400 w-2/3 lg:auto-cols-min xl:auto-rows-fr grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Stack
          align="center"
          className="col-span-1 md:col-span-2 lg:col-span-3"
        >
          <Text align="center" size="xl">
            <Icon icon="fluent-emoji-flat:high-voltage" inline /> Batteries
            included
          </Text>
          <Group className="w-full" position="center" spacing="xl">
            {techStack.map(({ name, color, docLink, description, logoSrc }) => {
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
            })}
          </Group>
        </Stack>

        <Stack align="center">
          <Text align="center" size="xl">
            <Icon icon="fluent-emoji-flat:sponge" inline /> Better code style
            with
          </Text>
          <Group position="center">
            <Badge color="purple">ESlint</Badge>
            <Badge color="fuchsia">Prettier</Badge>
            <Badge color="slate">Husky</Badge>
            <Badge color="indigo">Commitlint</Badge>
            <Badge color="teal">Lint-staged</Badge>
            <Badge color="zinc">Editorconfig</Badge>
          </Group>
        </Stack>

        <Stack align="center">
          <Text align="center" size="xl">
            <Icon icon="fluent-emoji-flat:artist-palette" inline /> Extended
            WindiCSS color palette
          </Text>
          <Group position="center">
            {Object.keys(theme.colors).map((color) => {
              return (
                <Tooltip.Floating
                  className="capitalize"
                  color={color}
                  key={color}
                  label={color}
                >
                  <ColorSwatch color={theme.colors[color][4]} />
                </Tooltip.Floating>
              );
            })}
          </Group>
        </Stack>

        <Stack align="center">
          <Text align="center" size="xl">
            <Icon
              icon={`fluent-emoji-flat:${
                dark ? 'full-moon-face' : 'sun-with-face'
              }`}
              inline
            />{' '}
            Dark mode ready
          </Text>
          <Button
            data-test-id="demo-color-scheme-toggle"
            onClick={() => toggleColorScheme()}
            variant="light"
          >
            Toggle dark mode
          </Button>
        </Stack>

        <Stack align="center">
          <Text align="center" size="xl">
            <Icon icon="fluent-emoji-flat:input-latin-lowercase" inline />{' '}
            Pre-configured font pairing
          </Text>
          <Group position="center">
            <Text>Text: Inter</Text>
            <Title order={4}>Heading: Quicksand</Title>
            <Code color="violet">Mono: Space Mono</Code>
            <Text className="!font-serif">Serif: Merriweather</Text>
          </Group>
        </Stack>
        <Stack align="center">
          <Text align="center" size="xl">
            <Icon icon="fluent-emoji-flat:dizzy" inline /> Animation is easy
            with plugins
          </Text>
          <Group
            className="children:(animate animate-infinite animate-duration-3000)"
            position="center"
          >
            <Badge className="animate-tada" color="yellow">
              Tada
            </Badge>
            <Badge className="animate-wobble" color="lime">
              Wobble
            </Badge>
            <Badge className="animate-swing" color="rose">
              Swing
            </Badge>
            <Badge className="animate-jello" color="cyan">
              Jello
            </Badge>
          </Group>
        </Stack>

        <Stack align="center">
          <Text align="center" size="xl">
            <Icon icon="fluent-emoji-flat:locked" inline /> Type-safe all the
            way with TypeScript
          </Text>
          <Text align="center" color="dimmed" transform="uppercase">
            <Icon icon="fluent-emoji-flat:construction" inline /> Coming Soon{' '}
            <Icon icon="fluent-emoji-flat:construction" inline />
          </Text>
        </Stack>
      </SimpleGrid>

      <Space h="md" />
    </Stack>
  );
};

export { HomePage };
