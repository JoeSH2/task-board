import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Project, useGetProjectsListQuery } from '@/entities/Project';
import { useCreateProjectMutation } from '@/features/CreateProject';
import { StatusProjectType } from '@/features/StatusProject';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';

import style from './ModalCreateProject.module.scss';

interface ModalCreateProjectProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface CreateProjectForm extends Partial<Project> {
  title: string;
  info: string;
  img: string;
}

export const ModalCreateProject: FC<ModalCreateProjectProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  const { control, handleSubmit, reset } = useForm<CreateProjectForm>();
  const [createProject] = useCreateProjectMutation();
  const { refetch } = useGetProjectsListQuery();

  const onCreateSubmit: SubmitHandler<CreateProjectForm> = async ({
    title,
    info,
    img,
  }: CreateProjectForm) => {
    try {
      await createProject({
        title,
        info,
        img: img,
        tasks: 0,
        status: StatusProjectType.INACTIVE,
      }).unwrap();
      await refetch();
      await reset();
      setIsOpen(false);
    } catch (e) {
      console.log(e);
    }
  };
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <Modal
      className={style.ModalCreateProject}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
    >
      <h5 className={style.title}>New project</h5>
      <form onSubmit={handleSubmit(onCreateSubmit)} className={style.form}>
        <FlexRow className={style.blockForm}>
          <label className={style.text}>Project name</label>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input
                clearStyle
                hook={field}
                placeholder="name..."
                className={style.input}
              />
            )}
          />
        </FlexRow>
        <FlexRow className={style.blockForm}>
          <label className={style.text}>Image project</label>
          <Controller
            name="img"
            control={control}
            render={({ field }) => (
              <Input
                clearStyle
                hook={field}
                placeholder="provide a URL to the picture..."
                className={style.input}
              />
            )}
          />
        </FlexRow>
        <FlexRow className={style.blockForm}>
          <label className={style.text}>Describe your project</label>
          <Controller
            name="info"
            control={control}
            render={({ field }) => (
              <Textarea
                hook={field}
                placeholder={'project description...'}
                className={style.textarea}
              />
            )}
          />
        </FlexRow>
        <FlexRow justifyContent={'space-evenly'} className={style.btnWrapper}>
          <Button className={style.btnCancel} onClick={onCancel}>
            Cancel
          </Button>
          <Button type={'submit'} className={style.btn} onClick={() => {}}>
            Create project
          </Button>
        </FlexRow>
      </form>
    </Modal>
  );
};
