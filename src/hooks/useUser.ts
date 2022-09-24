import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useUser = () => {
  const { pathname } = useLocation();
  const [isOwner, setIsOwner] = useState<boolean>(false);
  useEffect(() => {
    setIsOwner(pathname.includes('admin'));
  }, [pathname]);
  return isOwner;
};
