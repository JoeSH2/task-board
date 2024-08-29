import { FC } from 'react';
import { cls } from 'src/shared/lib/cls.ts';

import style from './Flex.module.scss';
import { FlexProps } from './types.ts';

export const FlexColumn: FC<FlexProps> = ({
  children,
  className,
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      style={{
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
      className={cls(style.FlexColumn, {}, [className])}
    >
      {children}
    </div>
  );
};
