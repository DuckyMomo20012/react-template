import 'virtual:windi-devtools';
import 'virtual:windi.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  CustomMantineProvider,
  CustomQueryClientProvider,
  CustomReduxProvider,
} from '@/context/index.js';
import { CustomRoute } from '@/routes/CustomRoute.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CustomReduxProvider>
      <BrowserRouter>
        <CustomQueryClientProvider>
          <CustomMantineProvider>
            <CustomRoute />
          </CustomMantineProvider>
        </CustomQueryClientProvider>
      </BrowserRouter>
    </CustomReduxProvider>
  </React.StrictMode>,
);
