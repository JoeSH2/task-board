import Add from '@mui/icons-material/Add';
import { FC, MouseEvent, useState } from 'react';

import { ModalAddTask } from '@/features/AddTask/ui/ModalAddTask/ModalAddTask.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './AddTask.module.scss';

export const AddTask: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <FlexRow alignItems={'center'} className={style.AddTask}>
      <Button
        className={style.createBtn}
        onClick={(e: MouseEvent) => onOpenModal(e)}
      >
        <Add className={style.icon} />
        Create a task
      </Button>
      <ModalAddTask isOpen={isOpen} setIsOpen={setIsOpen} />
    </FlexRow>
  );
};
