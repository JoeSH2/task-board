import { RefObject, useCallback, useEffect } from 'react';

interface useHandleClickOutsideProps {
  setIsOpen: (arg: boolean) => void;
  ref: RefObject<HTMLElement>;
}

export const useHandleClickOutside = ({
  setIsOpen,
  ref,
}: useHandleClickOutsideProps) => {
  {
    const onClose = useCallback(
      (event: MouseEvent) => {
        const element = event.target as HTMLElement;
        const visibleMenu = ref.current && ref.current.contains(element);
        if (!visibleMenu) {
          setIsOpen(false);
        }
      },
      [ref, setIsOpen]
    );

    const onKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      },
      [setIsOpen]
    );

    useEffect(() => {
      window.addEventListener('click', onClose);
      window.addEventListener('keydown', onKeyDown);
      return () => {
        window.removeEventListener('click', onClose);
        window.removeEventListener('keydown', onKeyDown);
      };
    }, [onClose, onKeyDown]);
  }
};
