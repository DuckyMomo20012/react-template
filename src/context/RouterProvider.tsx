import { Suspense, lazy } from 'react';
import {
  RouterProvider as BaseRouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { ProgressBar } from '@/components/ui/ProgressBar';

const HomePage = lazy(() => import('@/pages/index'));
const NotFound = lazy(() => import('@/pages/404'));
const ErrorBoundary = lazy(() => import('@/pages/error'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<ProgressBar />}>
        <HomePage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<ProgressBar />}>
        <ErrorBoundary />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<ProgressBar />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

const RouterProvider = () => {
  return <BaseRouterProvider router={router} />;
};

export { RouterProvider };
