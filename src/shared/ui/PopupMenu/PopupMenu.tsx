import { FC, ReactNode } from 'react';

export type ElementPopupMenu = {
  content: ReactNode;
  onClick: () => void;
};

interface PopupMenuProps {
  contentButton: ReactNode;
  elements: Array<ElementPopupMenu>;
}

export const PopupMenu: FC<PopupMenuProps> = ({ contentButton, elements }) => {
  return <div>PopupMenu</div>;
};
