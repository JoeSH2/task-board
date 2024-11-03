import { AnchorHTMLAttributes, FC, ReactNode } from 'react';

import style from './Link.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const Link: FC<LinkProps> = (props) => {
  const { children, href, ...otherProps } = props;
  return (
    <a {...otherProps} className={style.Link} href={href}>
      {children}
    </a>
  );
};
