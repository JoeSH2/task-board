import { FC, memo, ReactNode } from 'react';

import style from './Checkbox.module.scss';

interface CheckboxProps {
  item: ReactNode;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = memo((props) => {
  const { item, onChange, checked } = props;
  return (
    <>
      <input
        className={style.checkbox}
        type="radio"
        checked={checked}
        onChange={onChange}
      />
      <label className={style.checkboxLabel}>{item}</label>
    </>
  );
});
