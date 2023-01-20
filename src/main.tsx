// eslint-disable-next-line import/no-unresolved
import 'virtual:windi-devtools';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  MantineProvider,
  QueryProvider,
  ReduxProvider,
  RouterProvider,
} from '@/context/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
