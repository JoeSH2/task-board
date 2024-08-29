import { FC, ReactNode, useEffect, useRef } from 'react';
import { cls } from 'src/shared/lib/cls.ts';
import { Portal } from 'src/shared/ui/Portal/Portal.tsx';

import style from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
  className?: string;
}

export const Modal: FC<ModalProps> = (props) => {
  const { isOpen, setIsOpen, children, className } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', onClick);

    return () => document.removeEventListener('click', onClick);
  }, [isOpen, setIsOpen]);

  if (isOpen) {
    return (
      <Portal>
        <div className={cls(style.Modal, {}, ['app'])}>
          <div ref={ref} className={cls(style.wrapper, {}, [className])}>
            {children}
          </div>
        </div>
      </Portal>
    );
  }

  return null;
};
