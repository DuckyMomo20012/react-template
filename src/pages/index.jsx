import { Icon } from '@iconify/react';
import {
  Text,
  Title,
  Stack,
  ActionIcon,
  Group,
  Image,
  Tooltip,
  useMantineColorScheme,
  Button,
  Badge,
  Code,
  useMantineTheme,
  ColorSwatch,
  SimpleGrid,
  Space,
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
];

const HomePage = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Stack align="center">
      <Group position="center" grow spacing="xl">
        <Image
          src="/vite.svg"
          height={80}
          fit="contain"
          className="hover:filter"
          style={{ '--tw-drop-shadow': 'drop-shadow(0 0 2em #646cffaa)' }}
        />
        <Image
          src="/react.svg"
          height={80}
          fit="contain"
          className="animate-duration-10000 animate-spin hover:filter"
          style={{ '--tw-drop-shadow': 'drop-shadow(0 0 2em #61dafbaa)' }}
        />
      </Group>
      <Title className="text-4xl" align="center">
        Vite + React
      </Title>

      <Title
        order={2}
        variant="gradient"
        gradient={{ from: 'purple', to: 'cyan', deg: 45 }}
        align="center"
      >
        Features
      </Title>

      <SimpleGrid
        className="children:(p-5 border-dashed) children:(border-3 rounded-md) children:border-gray-400 w-2/3 lg:auto-cols-min xl:auto-rows-fr"
        breakpoints={[
          { minWidth: 'sm', cols: 1 },
          { minWidth: 'md', cols: 2 },
          { minWidth: 'lg', cols: 3 },
        ]}
      >
        <Stack
          align="center"
          className="col-span-1 md:col-span-2 lg:col-span-3"
        >
          <Text size="xl" align="center">
            <Icon icon="fluent-emoji-flat:high-voltage" inline /> Batteries
            included
          </Text>
          <Group className="w-full" position="center" spacing="xl">
            {techStack.map(({ name, color, docLink, description, logoSrc }) => {
              return (
                <Stack align="center" key={name}>
                  <Tooltip.Floating label={description} color={color}>
                    <ActionIcon
                      size={64}
                      color={color}
                      variant="outline"
                      component="a"
                      href={docLink || '#'}
                      target="_blank"
                    >
                      <Image
                        src={logoSrc}
                        height={36}
                        width={36}
                        fit="contain"
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
          <Text size="xl" align="center">
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
          <Text size="xl" align="center">
            <Icon icon="fluent-emoji-flat:artist-palette" inline /> Extended
            WindiCSS color palette
          </Text>
          <Group position="center">
            {Object.keys(theme.colors).map((color) => {
              return (
                <Tooltip.Floating
                  key={color}
                  label={color}
                  color={color}
                  className="capitalize"
                >
                  <ColorSwatch color={theme.colors[color][4]} />
                </Tooltip.Floating>
              );
            })}
          </Group>
        </Stack>

        <Stack align="center">
          <Text size="xl" align="center">
            <Icon
              icon={`fluent-emoji-flat:${
                dark ? 'full-moon-face' : 'sun-with-face'
              }`}
              inline
            />{' '}
            Dark mode ready
          </Text>
          <Button variant="light" onClick={() => toggleColorScheme()}>
            Toggle dark mode
          </Button>
        </Stack>

        <Stack align="center">
          <Text size="xl" align="center">
            <Icon icon="fluent-emoji-flat:input-latin-lowercase" inline />{' '}
            Pre-configured font pairing
          </Text>
          <Group position="center">
            <Text>Text: Inter</Text>
            <Title order={4}>Heading: Barlow</Title>
            <Code color="violet">Mono: Space Mono</Code>
            <Text className="!font-serif">Serif: Roboto Slab</Text>
          </Group>
        </Stack>
        <Stack align="center">
          <Text size="xl" align="center">
            <Icon icon="fluent-emoji-flat:dizzy" inline /> Animation is easy
            with plugins
          </Text>
          <Group
            position="center"
            className="children:(animate animate-infinite animate-duration-3000)"
          >
            <Badge color="yellow" className="animate-tada">
              Tada
            </Badge>
            <Badge color="lime" className="animate-wobble">
              Wobble
            </Badge>
            <Badge color="rose" className="animate-swing">
              Swing
            </Badge>
            <Badge color="cyan" className="animate-jello">
              Jello
            </Badge>
          </Group>
        </Stack>

        <Stack align="center">
          <Text size="xl" align="center">
            <Icon icon="fluent-emoji-flat:locked" inline /> Type-safe all the
            way with TypeScript
          </Text>
          <Text transform="uppercase" align="center" color="dimmed">
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
