import { FC, MouseEvent, useState } from 'react';

import { Button } from '@/shared/ui/Button/Button.tsx';

import style from './DeleteProject.module.scss';
import { ModalDeleteProject } from './ModalDeleteProject/ModalDeleteProject';

export const DeleteProject: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenedModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpenModal(true);
  };

  return (
    <div className={style.DeleteProject}>
      <Button
        onClick={(e: MouseEvent) => handleOpenedModal(e)}
        className={style.delete_btn}
      >
        Delete project
      </Button>
      <ModalDeleteProject isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </div>
  );
};
