import {
  Button,
  Center,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Helmet } from 'react-helmet-async';

function ErrorBoundary() {
  return (
    <Center className="h-full">
      <Helmet>
        <title>Server Error</title>
        <meta
          content="Server Error - Something bad just happened..."
          name="description"
        ></meta>
      </Helmet>
      <Stack className="w-3/4 md:w-1/2 lg:w-1/3">
        <Image alt="500" src="https://http.cat/500" />
        <Title align="center" order={1}>
          Something bad just happened...
        </Title>
        <Text align="center" color="dimmed" size="lg">
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
        </Text>
        <Group position="center">
          <Button
            onClick={() => {
              window.location.reload();
            }}
            size="md"
            variant="light"
          >
            Refresh the page
          </Button>
        </Group>
      </Stack>
    </Center>
  );
}

export { ErrorBoundary };
