import Add from '@mui/icons-material/Add';
import { FC, MouseEvent, useState } from 'react';

import { getUserIsAuth } from '@/entities/User';
import { ModalCreateProject } from '@/features/CreateProject/ui/ModalCreateProject/ModalCreateProject.tsx';
import { useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import style from './CreateProject.module.scss';

export const CreateProject: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useAppSelector(getUserIsAuth);

  const onOpenModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <div className={style.CreateProject}>
      <Button
        disabled={!isAuth}
        className={style.createBtn}
        onClick={(e) => onOpenModal(e)}
      >
        <Add className={style.icon} />
        New project
      </Button>
      <ModalCreateProject isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};
