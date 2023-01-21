import {
  RouterProvider as BaseRouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { AppShell } from '@/components/layouts/AppShell';
import { NotFound } from '@/pages/404';
import { ErrorBoundary } from '@/pages/error';
import { HomePage } from '@/pages/index';

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
