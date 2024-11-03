import { FC } from 'react';

import { contactData, contactLink, ContactList } from '@/entities/Contact';
import { Container } from '@/shared/ui/Container/Container.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={style.Footer}>
      <Container>
        <FlexRow justifyContent={'space-between'} className={style.wrapper}>
          <h3 className={style.title}>Footer</h3>
          <ContactList title={'Ссылки:'} contacts={contactLink} />
          <ContactList title={'Связь:'} contacts={contactData} />
        </FlexRow>
      </Container>
    </footer>
  );
};
