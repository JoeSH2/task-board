import { FC } from 'react';
import { cls } from 'src/shared/lib/cls.ts';

import style from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  onClick: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = (props) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className={style.BurgerMenu}>
      <span className={cls(style.line, {}, [style.line1])}></span>
      <span className={cls(style.line, {}, [style.line2])}></span>
      <span className={cls(style.line, {}, [style.line3])}></span>
    </div>
  );
};
