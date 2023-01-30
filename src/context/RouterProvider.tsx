import { Suspense, lazy } from 'react';
import {
  RouterProvider as BaseRouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { ProgressBar } from '@/components/elements/ProgressBar';
import { AppShell } from '@/components/layouts/AppShell';

const HomePage = lazy(() => import('@/pages/index'));
const NotFound = lazy(() => import('@/pages/404'));
const ErrorBoundary = lazy(() => import('@/pages/error'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        element: (
          <Suspense fallback={<ProgressBar />}>
            <HomePage />
          </Suspense>
        ),
        index: true,
      },
    ],
    errorElement: (
      <AppShell>
        <Suspense fallback={<ProgressBar />}>
          <ErrorBoundary />
        </Suspense>
      </AppShell>
    ),
  },
  {
    path: '*',
    element: (
      <AppShell>
        <Suspense fallback={<ProgressBar />}>
          <NotFound />
        </Suspense>
      </AppShell>
    ),
  },
]);

const RouterProvider = () => {
  return <BaseRouterProvider router={router} />;
};

export { RouterProvider };
