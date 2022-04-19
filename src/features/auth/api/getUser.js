import { sha1 } from 'hash-wasm';

const getUser = async () => {
  const password = await sha1('World');
  const users = await Promise.resolve({ name: 'Hello', password });
  return users;
};

export { getUser };
