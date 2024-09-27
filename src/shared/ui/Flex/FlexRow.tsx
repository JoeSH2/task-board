import { FC } from 'react';

import { cls } from '@/shared/lib/cls.ts';

import style from './Flex.module.scss';
import { FlexProps } from './types.ts';

export const FlexRow: FC<FlexProps> = ({
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
      className={cls(style.FlexRow, {}, [className])}
    >
      {children}
    </div>
  );
};
