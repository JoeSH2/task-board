import { AnchorHTMLAttributes, FC, ReactNode } from 'react';

import { cls } from '@/shared/lib/cls.ts';

import style from './Link.module.scss';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

export const Link: FC<LinkProps> = (props) => {
  const { children, className, href, ...otherProps } = props;
  return (
    <a {...otherProps} className={cls(style.Link, {}, [className])} href={href}>
      {children}
    </a>
  );
};
