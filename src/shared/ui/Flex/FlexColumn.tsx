import { FC } from 'react';

import { cls } from '@/shared/lib/cls.ts';

import style from './Flex.module.scss';
import { FlexProps } from './types.ts';

export const FlexColumn: FC<FlexProps> = ({
  children,
  className,
  fullHeight,
  fullWight,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      style={{
        width: fullWight ? '100%' : undefined,
        height: fullHeight ? '100%' : undefined,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
      className={cls(style.FlexColumn, {}, [className])}
    >
      {children}
    </div>
  );
};
