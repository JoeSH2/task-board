import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import {
  router,
  RouterProvider,
} from '../providers/RouteProvider/RouteProvider';
import { ProtectedRoutes } from '../route/config/ProtectedRoutes';

const AppRouter = memo(() => {
  const routeRender = useCallback((route: RouterProvider) => {
    const element = (
      <Suspense
        fallback={
          <PageWrapper>
            <Loader height={'100%'} message={'LOADING PAGE'} />
          </PageWrapper>
        }
      >
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authUser ? (
            <ProtectedRoutes>{element}</ProtectedRoutes>
          ) : (
            element
          )
        }
      />
    );
  }, []);

  return <Routes>{router.map(routeRender)}</Routes>;
});

export default AppRouter;
