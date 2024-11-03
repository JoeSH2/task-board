import { FC } from 'react';

import { Contact } from '@/entities/Contact/types/Contact.ts';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Link } from '@/shared/ui/Link/Link.tsx';
import { Svg } from '@/shared/ui/Svg/Svg.tsx';

import style from './ContactItem.module.scss';

export const ContactItem: FC<Contact> = (props) => {
  const { icon, href, label } = props;
  return (
    <FlexRow className={style.ContactItem} alignItems={'center'}>
      <Svg className={style.iconLogo} src={icon} />
      <Link target={'_blank'} href={href}>
        {label}
      </Link>
    </FlexRow>
  );
};
