import { FC, ReactNode } from 'react';

import style from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={style.Container}>{children}</div>;
};
