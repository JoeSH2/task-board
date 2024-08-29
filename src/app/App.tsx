import { Route, Routes } from 'react-router-dom';
import { ProjectPage } from 'src/pages/ProjectPage';
import { Container } from 'src/shared/ui/Container/Container.tsx';
import { Webrapper } from 'src/shared/ui/Webrapper/Webrapper.tsx';
import { Footer } from 'src/widgets/Footer';
import { Header } from 'src/widgets/Header';
import { Sidebare } from 'src/widgets/Sidebare';

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
