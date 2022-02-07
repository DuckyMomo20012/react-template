import { useState } from 'react';
import logo from './logo.svg';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="bg-dark-300 flex min-h-[100vh] flex-col items-center justify-center text-lg">
        <img
          src={logo}
          className="animate-flipInX animate-duration-1000 animate-loop pointer-events-none h-[40vmin]"
          alt="logo"
        />
        <h1 className="text-light-400 text-3xl font-bold underline">
          Happy New Year!
        </h1>
        <p className="text-light-400">Hello Vite + React!</p>
        <p className="text-light-400">
          <button
            className="rounded bg-sky-400 p-2"
            type="button"
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p className="text-light-400">
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="text-3xl text-sky-400 underline decoration-wavy"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="text-3xl text-sky-400 underline decoration-wavy"
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
