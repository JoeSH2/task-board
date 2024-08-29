import { DetailedHTMLProps, FC, InputHTMLAttributes, memo } from 'react';

import { cls } from '../../lib/cls.ts';
import style from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hook?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

export const Input: FC<InputProps> = memo((props) => {
  const { className, placeholder = 'type...', disabled, type, hook } = props;

  return (
    <input
      {...hook}
      type={type}
      disabled={disabled}
      className={cls(style.Input, { [style.disabled]: disabled }, [className])}
      placeholder={placeholder}
    />
  );
});
