import {
  RouterProvider as BaseRouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { AppShell } from '@/components/layouts/AppShell.jsx';
import { NotFound } from '@/pages/404.jsx';
import { ErrorBoundary } from '@/pages/error.jsx';
import { HomePage } from '@/pages/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
    ],
    errorElement: (
      <AppShell>
        <ErrorBoundary />
      </AppShell>
    ),
  },
  {
    path: '*',
    element: (
      <AppShell>
        <NotFound />
      </AppShell>
    ),
  },
]);

const RouterProvider = () => {
  return <BaseRouterProvider router={router} />;
};

export { RouterProvider };
