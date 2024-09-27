import { RouteObject } from 'react-router-dom';

import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { ProjectPage } from '@/pages/ProjectPage';
import {
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
];
