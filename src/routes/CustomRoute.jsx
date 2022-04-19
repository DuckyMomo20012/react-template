import { Routes, Route } from 'react-router-dom';
import { Login, Register } from '@/features/auth';
import { NotFound } from '@/features/misc';
import { HomePage } from '@/features/pages';

const CustomRoute = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<Login />} path="/account/login" />
      <Route element={<Register />} path="/account/register" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export { CustomRoute };
