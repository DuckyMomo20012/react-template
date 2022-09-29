import { Button, Group, Stack, Text, Title } from '@mantine/core';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Stack align="center" className="w-full h-full" justify="center">
      <Stack align="center" className="w-1/2">
        <Text className="text-240px" color="gray">
          404
        </Text>
        <Title align="center">You have found a secret place.</Title>
        <Text align="center" color="dimmed" size="lg">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group position="center">
          <Button component={Link} size="md" to="/" variant="subtle">
            Take me back to home page
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
};

export { NotFound };
