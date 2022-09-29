import { Button, Group, Stack, Text, Title } from '@mantine/core';
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';

function ErrorBoundary() {
  const navigate = useNavigate();
  const error = useRouteError();

  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
  }

  return (
    <Stack align="center" className="w-full h-full" justify="center">
      <Stack align="center" className="w-1/2">
        <Text className="text-240px" color="gray">
          {errorStatus}
        </Text>
        <Title align="center">Something bad just happened...</Title>
        <Text align="center" color="dimmed" size="lg">
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
        </Text>
        <Group position="center">
          <Button
            onClick={() => {
              navigate(0);
            }}
            size="md"
            variant="subtle"
          >
            Refresh the page
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
}

export { ErrorBoundary };
