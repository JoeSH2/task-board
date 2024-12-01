import { useLocation } from 'react-router-dom';

import { isHideSidebarRoutes } from '@/app/providers/RouteProvider/RouteProvider.tsx';

export const useHideSidebar = () => {
  const location = useLocation();
  const isHideSidebar = isHideSidebarRoutes.some(
    (route) => route === location.pathname
  );

  return { isHideSidebar };
};
