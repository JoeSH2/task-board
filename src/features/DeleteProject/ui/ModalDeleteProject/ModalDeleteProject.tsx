import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getProjectId, getProjectTitleSelector } from '@/entities/Project';
import { useDeleteAllTasksProjectMutation } from '@/features/DeleteTask';
import { getMainPage } from '@/shared/config/RoutingPath.ts';
import { cls } from '@/shared/lib/cls.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';

import { useDeleteProjectMutation } from '../../model/api/fetchDeleteProject.ts';
import style from './ModalDeleteProject.module.scss';

interface ModalDeleteProjectProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalDeleteProject: FC<ModalDeleteProjectProps> = (props) => {
  const { setIsOpen, isOpen } = props;
  const navigate = useNavigate();
  const projectTitle = useSelector(getProjectTitleSelector);
  const projectId = useSelector(getProjectId);
  const [deleteProject] = useDeleteProjectMutation();
  const [deleteAllTasksProject] = useDeleteAllTasksProjectMutation();

  const onClose = () => {
    setIsOpen(false);
  };

  const onDeleteProject = async () => {
    if (projectId) {
      try {
        await deleteAllTasksProject(projectId);
        await deleteProject(projectId);
        setIsOpen(false);
        navigate(getMainPage());
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className={style.ModalDeleteProject}
    >
      <h5 className={style.title}>
        Are you sure you want to delete the project <b>{projectTitle}</b>?
      </h5>
      <FlexRow justifyContent={'space-evenly'}>
        <Button
          className={cls(style.btn_cancel, {}, [style.btn])}
          onClick={onClose}
        >
          Cancel
        </Button>
        <Button className={style.btn} onClick={onDeleteProject}>
          Delete
        </Button>
      </FlexRow>
    </Modal>
  );
};
