import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CustomRoute } from '@/routes/CustomRoute.jsx';
import { CustomMantineProvider } from '@/providers/CustomMantineProvider.jsx';
import 'virtual:windi-devtools';
import 'virtual:windi.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomMantineProvider>
        <CustomRoute />
      </CustomMantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
