import { DetailedHTMLProps, FC, InputHTMLAttributes, memo } from 'react';

import { cls, ModeClassName } from '../../lib/cls.ts';
import style from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hook?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  clearStyle?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    clearStyle,
    placeholder = 'type...',
    disabled,
    type,
    hook,
  } = props;

  const mode: ModeClassName = {
    [style.disabled]: disabled,
    [style.clear]: clearStyle,
  };

  return (
    <input
      {...hook}
      type={type}
      disabled={disabled}
      className={cls(style.Input, mode, [className])}
      placeholder={placeholder}
    />
  );
});
