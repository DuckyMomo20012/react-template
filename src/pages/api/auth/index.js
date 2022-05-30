import { sha1 } from 'hash-wasm';

const getOneUser = async () => {
  const password = await sha1('World');
  const users = await Promise.resolve({ name: 'Hello', password });
  return users;
};

export { getOneUser };
