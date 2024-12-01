import { useEffect } from 'react';

import AppRouter from '@/app/route/AppRouter';
import { User, userAction } from '@/entities/User';
import { StorageKey } from '@/shared/consts/storageKey.ts';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { useHideSidebar } from '@/shared/hooks/useHideSidebar.tsx';
import { localStorageWrapper } from '@/shared/lib/storageWrapper.ts';
import { Container } from '@/shared/ui/Container/Container.tsx';
import { Webrapper } from '@/shared/ui/Webrapper/Webrapper.tsx';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebare';

function App() {
  const dispatch = useAppDispatch();
  const { isHideSidebar } = useHideSidebar();
  const user = localStorageWrapper.get<User>(StorageKey.USER_KEY);

  useEffect(() => {
    if (user) {
      dispatch(userAction.signWith(user));
    }
  }, [user]);

  return (
    <div className={'app'}>
      <Container>
        <Header />
        <Webrapper isHideSidebar={isHideSidebar}>
          {!isHideSidebar && <Sidebar />}
          <AppRouter />
        </Webrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
