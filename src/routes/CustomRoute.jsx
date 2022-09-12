import { Route, Routes } from 'react-router-dom';
import { AppShell } from '@/components/layouts/AppShell.jsx';
import { NotFound } from '@/pages/404.jsx';

import { HomePage } from '@/pages/index.jsx';

const CustomRoute = () => {
  return (
    <Routes>
      <Route element={<AppShell />} path="/">
        <Route element={<HomePage />} index />
      </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export { CustomRoute };
