import { useEffect } from 'react';

const Route = ({path, children}) => {
  useEffect(() => {
    const onLocationChange = () => {
      console.log("Location change");
    }
    window.addEventListener('popstate', onLocationChange);

    // cleanup
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);
  return window.location.pathname === path
    ? children
    : null;
};

export default Route;
