import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/globals.css';

import {
  HelmetProvider,
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
          <HelmetProvider>
            <RouterProvider />
          </HelmetProvider>
        </MantineProvider>
      </QueryProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
