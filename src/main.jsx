// eslint-disable-next-line import/no-unresolved
import 'virtual:windi-devtools';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  MantineProvider,
  QueryProvider,
  ReduxProvider,
  RouterProvider,
} from '@/context/index.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ReduxProvider>
      <QueryProvider>
        <MantineProvider>
          <RouterProvider />
        </MantineProvider>
      </QueryProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
