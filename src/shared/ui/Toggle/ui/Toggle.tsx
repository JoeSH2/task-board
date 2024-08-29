import { FC } from 'react';
import { cls } from 'src/shared/lib/cls.ts';

import style from './Toggle.module.scss';

interface ToggleProps {
  value: boolean;
  onChange: () => void;
}

export const Toggle: FC<ToggleProps> = (props) => {
  const { value, onChange } = props;

  return (
    <label className={style.switch}>
      <input checked={value} onChange={onChange} type="checkbox" />
      <span className={cls(style.slider, {}, [style.round])}></span>
    </label>
  );
};
