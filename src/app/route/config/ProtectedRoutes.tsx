import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserIsAuth } from '@/entities/User';
import { getMainPage } from '@/shared/config/RoutingPath.ts';

interface ProtectedRoutesProps {
  children: ReactNode;
}

export const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector(getUserIsAuth);

  if (!isAuth) {
    return <Navigate to={getMainPage()} replace state={{ from: location }} />;
  }

  return children;
};
