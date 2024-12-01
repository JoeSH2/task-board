import { FC, ReactNode } from 'react';

import { cls } from '@/shared/lib/cls.ts';

import style from './Webrapper.module.scss';

interface WebrapperProps {
  children: ReactNode;
  isHideSidebar?: boolean;
}

export const Webrapper: FC<WebrapperProps> = ({ children, isHideSidebar }) => {
  return (
    <div
      className={cls(
        style.Webrapper,
        { [style.hideSidebar]: isHideSidebar },
        []
      )}
    >
      {children}
    </div>
  );
};
