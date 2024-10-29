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

export const router: RouteObject[] = [
  {
    path: getMainPage(),
    element: <MainPage />,
  },
  {
    path: getLoginPage(),
    element: <LoginPage />,
  },
  {
    path: getProjectsPage(':id'),
    element: <ProjectPage />,
  },
  {
    path: getEditProjectPage(':id'),
    element: <EditProjectPage />,
  },
];
