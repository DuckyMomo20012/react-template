import {
  Anchor,
  Button,
  Container,
  Modal,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Group,
  ThemeIcon,
  Code,
} from '@mantine/core';
import { useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { sha1 } from 'hash-wasm';

import { getUser } from '@/features/auth/api';

async function fetchUsers() {
  const user = await getUser();
  return user;
}

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [opened, setOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (data) => {
    const users = await fetchUsers();
    const hashPassword = await sha1(data.password);
    if (users.name === data.username && users.password === hashPassword) {
      setIsLoggedIn(true);
    }
    setOpened(true);
  };

  return (
    <Container my={40} size={420}>
      <Modal
        onClose={() => {
          setOpened(false);
          if (isLoggedIn) navigate('/');
        }}
        opened={opened}
        withCloseButton={false}
      >
        {isLoggedIn ? (
          <Group>
            <ThemeIcon color="green" radius="xl" size="xl" variant="light">
              <Icon icon="ic:twotone-check-circle" width={24} />
            </ThemeIcon>
            <Text>You are logged in</Text>
          </Group>
        ) : (
          <Group>
            <ThemeIcon color="red" radius="xl" size="xl" variant="light">
              <Icon icon="ic:baseline-error-outline" width="24" />
            </ThemeIcon>
            <Text>You are not logged in</Text>
          </Group>
        )}
      </Modal>
      <Title align="center" className="font-black">
        Welcome back!
      </Title>
      <Text align="center" color="dimmed" mt={5} size="sm">
        Do not have an account yet?{' '}
        <Link to="/account/register">
          <Anchor size="sm">Create account</Anchor>
        </Link>
      </Text>
      <Text align="center" color="dimmed" mt={5} size="sm">
        <Code color="red">username:</Code> Hello,{' '}
        <Code color="red">password:</Code> World
      </Text>

      <Paper mt={30} p={30} radius="md" shadow="md" withBorder>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            {...register('username')}
            id="username"
          />
          <PasswordInput
            label="Password"
            mt="md"
            placeholder="Your password"
            required
            {...register('password')}
            id="password"
          />
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export { Login };
