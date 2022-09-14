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
      <Title className="text-5xl" align="center">
        Vite + React
      </Title>

      <Title order={2} className="text-5xl" align="center">
        Features
      </Title>

      <SimpleGrid
        className="children:(p-5 border-dashed) children:(border-3 rounded-md) children:border-gray-400 w-2/3 md:auto-cols-min lg:auto-rows-fr"
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
            <Stack align="center">
              <Tooltip.Floating label="Redux Toolkit" color="violet">
                <ActionIcon
                  size={64}
                  color="violet"
                  variant="outline"
                  component="a"
                  href="https://redux-toolkit.js.org/"
                  target="_blank"
                >
                  <Image
                    src="/redux.svg"
                    height={36}
                    width={36}
                    fit="contain"
                  />
                </ActionIcon>
              </Tooltip.Floating>
              <Badge color="violet">Redux Toolkit</Badge>
            </Stack>
            <Stack align="center">
              <Tooltip.Floating label="React Router" color="red">
                <ActionIcon
                  size={64}
                  color="red"
                  variant="outline"
                  component="a"
                  href="https://reactrouter.com/en/main"
                  target="_blank"
                >
                  <Image
                    src="/react-router.svg"
                    height={36}
                    width={36}
                    fit="contain"
                  />
                </ActionIcon>
              </Tooltip.Floating>
              <Badge color="red">React Router</Badge>
            </Stack>
            <Stack align="center">
              <Tooltip.Floating label="React Hook Form" color="pink">
                <ActionIcon
                  size={64}
                  color="pink"
                  variant="outline"
                  component="a"
                  href="https://react-hook-form.com/"
                  target="_blank"
                >
                  <Image
                    src="/react-hook-form.svg"
                    height={36}
                    width={36}
                    fit="contain"
                  />
                </ActionIcon>
              </Tooltip.Floating>
              <Badge color="pink">React Hook Form</Badge>
            </Stack>
            <Stack align="center">
              <Tooltip.Floating label="TanStack Query" color="orange">
                <ActionIcon
                  size={64}
                  color="orange"
                  variant="outline"
                  component="a"
                  href="https://tanstack.com/query/v4"
                  target="_blank"
                >
                  <Image
                    src="/react-query.svg"
                    height={36}
                    width={36}
                    fit="contain"
                  />
                </ActionIcon>
              </Tooltip.Floating>
              <Badge color="orange">TanStack Query</Badge>
            </Stack>
            <Stack align="center">
              <Tooltip.Floating label="Mantine" color="blue">
                <ActionIcon
                  size={64}
                  color="blue"
                  variant="outline"
                  component="a"
                  href="https://mantine.dev/"
                  target="_blank"
                >
                  <Image
                    src="/mantine.svg"
                    height={36}
                    width={36}
                    fit="contain"
                  />
                </ActionIcon>
              </Tooltip.Floating>
              <Badge color="blue">Mantine</Badge>
            </Stack>
            <Stack align="center">
              <Tooltip.Floating label="WindiCSS" color="sky">
                <ActionIcon
                  size={64}
                  color="sky"
                  variant="outline"
                  component="a"
                  href="https://windicss.org/"
                  target="_blank"
                >
                  <Image
                    src="/windicss.svg"
                    height={36}
                    width={36}
                    fit="contain"
                  />
                </ActionIcon>
              </Tooltip.Floating>
              <Badge color="sky">WindiCSS</Badge>
            </Stack>
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
