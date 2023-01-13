import {
  Button,
  Center,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Center align="center" className="h-screen">
      <Stack className="w-1/2">
        <Image alt="404" src="/img/404.svg" />
        <Title order={1}>You have found a secret place.</Title>
        <Text color="dimmed" size="lg">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group position="center">
          <Button component={Link} size="md" to="/" variant="light">
            Take me back to home page
          </Button>
        </Group>
      </Stack>
    </Center>
  );
};

export { NotFound };
