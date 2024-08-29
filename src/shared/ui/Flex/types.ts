import { HTMLAttributes, ReactNode } from 'react';

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  full?: boolean;
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-evenly';
}
