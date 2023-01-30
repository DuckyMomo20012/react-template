import NProgress from 'nprogress';
import { useEffect } from 'react';

const ProgressBar = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};

export { ProgressBar };
