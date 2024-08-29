import { ButtonHTMLAttributes, FC, memo } from 'react';

import { cls } from '@/shared/lib/cls.ts';

import style from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: boolean;
  active?: boolean;
  clearStyle?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    children,
    onClick,
    type = 'button',
    className,
    theme = true,
    active,
    clearStyle,
    disabled,
  } = props;
  return (
    <button
      disabled={disabled}
      className={cls(
        style.btn,
        {
          [style.Button]: theme,
          [style.active]: active,
          [style.clear]: clearStyle,
          [style.disabled]: disabled,
        },
        [className]
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
