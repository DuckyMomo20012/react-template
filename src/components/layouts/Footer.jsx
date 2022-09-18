import { Icon } from '@iconify/react';
import {
  Footer as MantineFooter,
  Stack,
  Anchor,
  Text,
  useMantineColorScheme,
} from '@mantine/core';

const Footer = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <MantineFooter className="!static">
      <Stack align="center" className="children:w-1/2 items-center">
        <Text align="center" size="sm" className="w-full">
          Made with{' '}
          <Icon
            icon={`fluent-emoji-flat:${
              dark ? 'teacup-without-handle' : 'sparkling-heart'
            }`}
            inline={true}
          />{' '}
          by <Anchor href="https://github.com/DuckyMomo20012">Tien Vinh</Anchor>
          . MIT License
        </Text>
      </Stack>
    </MantineFooter>
  );
};

export { Footer };
