import { Button } from '@mantine/core';
import { useState } from 'react';
import logo from './logo.svg';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="bg-dark-300 flex min-h-[100vh] flex-col items-center justify-center text-lg">
        <img
          src={logo}
          className="animate-flipInX animate-loop animate-duration-1000 pointer-events-none h-[40vmin]"
          alt="logo"
        />
        <p className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"></p>
        <h1 className="text-light-400 text-3xl font-bold underline">
          Happy New Year!
        </h1>
        <p className="text-light-400">Hello Vite + React!</p>
        <Button
          // className="rounded bg-sky-400 p-2"
          color="purple"
          type="button"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          count is: {count}
        </Button>
        <p className="text-light-400">
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-2xl text-sky-400 underline decoration-wavy"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-2xl text-sky-400 underline decoration-wavy"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
