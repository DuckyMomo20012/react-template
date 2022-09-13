// eslint-disable-next-line import/no-unresolved
import 'virtual:windi-devtools';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  MantineProvider,
  QueryProvider,
  ReduxProvider,
} from '@/context/index.js';
import { CustomRoute } from '@/routes/CustomRoute.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ReduxProvider>
      <BrowserRouter>
        <QueryProvider>
          <MantineProvider>
            <CustomRoute />
          </MantineProvider>
        </QueryProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
);
