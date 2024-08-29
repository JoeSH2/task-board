import { FC, ReactNode } from 'react';

import style from './Webrapper.module.scss';

interface WebrapperProps {
  children: ReactNode;
}

export const Webrapper: FC<WebrapperProps> = ({ children }) => {
  return <div className={style.Webrapper}>{children}</div>;
};
