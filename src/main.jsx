import React from 'react';
import ReactDOM from 'react-dom';
import 'virtual:windi-devtools';
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
