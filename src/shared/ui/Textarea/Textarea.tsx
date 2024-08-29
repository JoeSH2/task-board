import { DetailedHTMLProps, FC, memo, TextareaHTMLAttributes } from 'react';

import { cls } from '@/shared/lib/cls.ts';

import style from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hook?: DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
}

export const Textarea: FC<TextareaProps> = memo((props) => {
  const { className, placeholder, disabled, hook } = props;

  return (
    <textarea
      {...hook}
      disabled={disabled}
      placeholder={placeholder}
      className={cls(style.Textarea, { [style.disabled]: disabled }, [
        className,
      ])}
    />
  );
});
