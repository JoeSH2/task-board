import { FC, MouseEvent, ReactNode, useCallback, useRef } from 'react';

import { useHandleClickOutside } from '@/shared/hooks/useHandleClickOutside.tsx';

import style from './Popup.module.scss';

export type PopupMenuItem = {
  title: ReactNode;
  onClick?: () => void;
};

interface PopupProps {
  name: ReactNode;
  menuItems: PopupMenuItem[];
  open: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Popup: FC<PopupProps> = ({ menuItems, setIsOpen, open, name }) => {
  const ref = useRef<HTMLElement>(null);

  const handleVisiblePopup = useCallback(
    (event: MouseEvent<HTMLSpanElement>) => {
      event.stopPropagation();
      setIsOpen(!open);
    },
    [open, setIsOpen]
  );

  const onClickMenuItem = (item: PopupMenuItem) => {
    setIsOpen(false);
    if (item.onClick) {
      item.onClick();
    }
  };

  useHandleClickOutside({ ref, setIsOpen });

  return (
    <div className={style.Popup}>
      <span onClick={handleVisiblePopup}>{name}</span>
      {open && (
        <menu className={style.menu} ref={ref}>
          <ul className={style.list}>
            {menuItems.map((item) => (
              <li onClick={() => onClickMenuItem(item)}>{item.title}</li>
            ))}
          </ul>
        </menu>
      )}
    </div>
  );
};
