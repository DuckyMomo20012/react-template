import {
  Anchor,
  Button,
  Code,
  Container,
  Group,
  Modal,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { getOneUser } from '@/pages/api/auth/index.js';

async function fetchOneUser() {
  const user = await getOneUser();
  return user;
}

async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder().encode(message);

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [opened, setOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (data) => {
    const user = await fetchOneUser();
    const hashPassword = await sha256(data.password);
    if (user.name === data.username && user.password === hashPassword) {
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
        <Anchor component={Link} size="sm" to="/auth/register">
          Create account
        </Anchor>
      </Text>
      <Text align="center" color="dimmed" mt={5} size="sm">
        <Code color="blue">username:</Code> Hello,{' '}
        <Code color="blue">password:</Code> World
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
