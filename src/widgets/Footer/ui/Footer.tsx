import { FC } from 'react';

import { Container } from '@/shared/ui/Container/Container.tsx';

import style from './Footer.module.scss';

interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  const {} = props;
  return (
    <footer className={style.Footer}>
      <Container>
        <div className={style.wrapper}>
          <h1>Footer</h1>
        </div>
      </Container>
    </footer>
  );
};
