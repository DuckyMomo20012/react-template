import {
  RouterProvider as BaseRouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import NotFound from '@/pages/404';
import Error from '@/pages/error';
import HomePage from '@/pages/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route element={<HomePage />} path="/" />
      <Route element={<NotFound />} path="*" />
    </Route>,
  ),
);

const RouterProvider = () => {
  return <BaseRouterProvider router={router} />;
};

export { RouterProvider };
