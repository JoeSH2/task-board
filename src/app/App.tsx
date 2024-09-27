import AppRouter from '@/app/route/AppRouter';
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
          <AppRouter />
        </Webrapper>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
