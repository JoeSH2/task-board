import { memo, Suspense, useCallback } from 'react';
import { Route, RouteObject, Routes } from 'react-router-dom';

import { router } from '@/app/providers/RouteProvider/RouteProvider.tsx';

const AppRouter = memo(() => {
  const routeRender = useCallback((route: RouteObject) => {
    const element = (
      <Suspense fallback={<div>...Loading...</div>}>{route.element}</Suspense>
    );

    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{router.map(routeRender)}</Routes>;
});

export default AppRouter;
