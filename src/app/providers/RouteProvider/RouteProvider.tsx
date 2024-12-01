import { RouteObject } from 'react-router-dom';

import { EditProjectPage } from '@/pages/EditProjectPage';
import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { ProjectPage } from '@/pages/ProjectPage';
import {
  getEditProjectPage,
  getLoginPage,
  getMainPage,
  getProjectsPage,
} from '@/shared/config/RoutingPath.ts';

export type RouterProvider = RouteObject & {
  hideSidebar?: boolean;
  authUser?: boolean;
};

export const router: RouterProvider[] = [
  {
    path: getMainPage(),
    element: <MainPage />,
  },
  {
    path: getProjectsPage(':id'),
    element: <ProjectPage />,
    authUser: true, // Доступ только авторизованным пользователям
  },
  {
    path: getEditProjectPage(':id'),
    element: <EditProjectPage />,
    authUser: true,
  },

  // Ниже идут страницы без Sidebar
  {
    path: getLoginPage(),
    element: <LoginPage />,
    hideSidebar: true,
  },
];

export const isHideSidebarRoutes = router
  .filter((item) => item.hideSidebar)
  .map((route) => route.path);
