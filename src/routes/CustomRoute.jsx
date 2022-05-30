import { Login, Register } from '@/pages/auth/index.js';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/index.jsx';
import { NotFound } from '@/pages/404.jsx';

const CustomRoute = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<Login />} path="/auth/login" />
      <Route element={<Register />} path="/auth/register" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export { CustomRoute };
