import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi-devtools';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import App from './App.jsx';
import './index.css';
import { CustomMantineProvider } from './provider/CustomMantineProvider.jsx';

ReactDOM.render(
  <React.StrictMode>
    <CustomMantineProvider>
      <App />
    </CustomMantineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
