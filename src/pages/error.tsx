import {
  Button,
  Center,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';

function ErrorBoundary() {
  return (
    <Center className="h-screen">
      <Stack className="w-1/2">
        <Image alt="500" src="/img/500.svg" />
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