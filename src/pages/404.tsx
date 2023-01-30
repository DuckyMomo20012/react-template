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
    <Center className="h-full">
      <Helmet>
        <title>404 - Not Found</title>
        <meta content="404 - Not Found" name="description"></meta>
      </Helmet>
      <Stack className="w-3/4 md:w-1/2 lg:w-1/3">
        <Image
          alt="404"
          imageProps={{
            style: {
              aspectRatio: '5 / 4',
            },
          }}
          src="https://http.cat/404"
        />
        <Title align="center" order={1}>
          You have found a secret place.
        </Title>
        <Text align="center" color="dimmed" size="lg">
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

export default NotFound;
