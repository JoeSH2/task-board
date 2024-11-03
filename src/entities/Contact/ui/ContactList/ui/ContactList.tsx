import { FC } from 'react';

import { Contact } from '@/entities/Contact/types/Contact.ts';
import { ContactItem } from '@/entities/Contact/ui/ContactItem';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';

import style from './ContactList.module.scss';

interface ContactListProps {
  title: string;
  contacts: Contact[];
}

export const ContactList: FC<ContactListProps> = (props) => {
  const { title, contacts } = props;
  return (
    <FlexColumn className={style.ContactList}>
      <h5>{title}</h5>
      <FlexColumn className={style.contactBlock}>
        {contacts.map((item) => (
          <ContactItem icon={item.icon} label={item.label} href={item.href} />
        ))}
      </FlexColumn>
    </FlexColumn>
  );
};
