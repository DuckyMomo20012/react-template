import { HelmetProvider as BaseHelmetProvider } from 'react-helmet-async';

const HelmetProvider = ({ children }: { children?: React.ReactNode }) => {
  return <BaseHelmetProvider>{children}</BaseHelmetProvider>;
};

export { HelmetProvider };
