import { FC } from 'react';

import { cls } from '@/shared/lib/cls.ts';

import style from './Flex.module.scss';
import { FlexProps } from './types.ts';

export const FlexRow: FC<FlexProps> = ({
  children,
  className,
  full,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      style={{
        width: full ? '100%' : 'auto',
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
      className={cls(style.FlexRow, {}, [className])}
    >
      {children}
    </div>
  );
};
