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
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Not Found</title>
        <meta content="404 - Not Found" name="description" />
      </Helmet>

      <Center className="@container h-full w-full flex-1">
        <Stack align="center" className="w-4/5 max-w-xl min-w-4/5 @lg:w-full">
          <Image alt="404" className="aspect-5/4" src="https://http.cat/404" />
          <Title className="text-center" order={1}>
            You have found a secret place.
          </Title>
          <Text c="dimmed" className="text-center" size="lg">
            Unfortunately, this is only a 404 page. You may have mistyped the
            address, or the page has been moved to another URL.
          </Text>
          <Group justify="center">
            <Button component={Link} size="md" to="/" variant="light">
              Take me back to home page
            </Button>
          </Group>
        </Stack>
      </Center>
    </>
  );
};

export default NotFound;
