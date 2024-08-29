import { Route, Routes } from 'react-router-dom';

import { ProjectPage } from '@/pages/ProjectPage';
import { Container } from '@/shared/ui/Container/Container.tsx';
import { Webrapper } from '@/shared/ui/Webrapper/Webrapper.tsx';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Sidebare } from '@/widgets/Sidebare';

function App() {
  return (
    <div className={'app'}>
      <Container>
        <Header />
        <Webrapper>
          <Sidebare />
          <Routes location={'/'}>
            <Route path={'/'} element={<ProjectPage />} />
          </Routes>
        </Webrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
