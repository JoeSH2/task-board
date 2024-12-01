import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { getProjectSelector, projectAction } from '@/entities/Project';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';

import { useEditProjectMutation } from '../../model/api/fetchEditProject';
import style from './EditProjectForm.module.scss';

interface EditProjectFormProps {
  title: string;
  info: string;
  img?: string;
}

export const EditProjectForm: FC = () => {
  const dispatch = useAppDispatch();
  const [editProject] = useEditProjectMutation();
  const project = useSelector(getProjectSelector);

  const { control, handleSubmit, reset, getValues } =
    useForm<EditProjectFormProps>({
      defaultValues: {
        img: project.img,
        info: project.info,
        title: project.title,
      },
    });

  const onSubmit: SubmitHandler<EditProjectFormProps> = async () => {
    const { img, info, title } = getValues();
    const modifiedProject = {
      id: project.id,
      title,
      img,
      status: project.status,
      tasks: project.tasks,
      info,
    };
    try {
      await editProject(modifiedProject).unwrap();
      dispatch(projectAction.initialProject(modifiedProject));
    } catch (e) {
      console.log(e);
    }
  };

  const onCancel = () => {
    reset({
      img: project.img,
      info: project.info,
      title: project.title,
    });
  };

  useEffect(() => {
    if (project.id) {
      reset({ img: project.img, info: project.info, title: project.title });
    }
  }, [reset, project]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.EditProjectForm}>
      <FlexRow
        alignItems={'flex-end'}
        className={`${style.formBlock} ${style.inputBlock}`}
      >
        <label>Project name:</label>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              clearStyle
              hook={field}
              placeholder={'specify the name of the project...'}
              className={style.inputText}
            />
          )}
        />
      </FlexRow>
      <FlexRow
        alignItems={'flex-end'}
        className={`${style.formBlock} ${style.inputBlock}`}
      >
        <label>Logo:</label>
        <Controller
          name="img"
          control={control}
          render={({ field }) => (
            <Input
              clearStyle
              hook={field}
              placeholder={'insert link...'}
              className={style.inputText}
            />
          )}
        />
      </FlexRow>
      <FlexRow className={`${style.formBlock} ${style.textareaBlock}`}>
        <label>Describe the project:</label>
        <Controller
          name="info"
          control={control}
          render={({ field }) => (
            <Textarea
              hook={field}
              placeholder={'describe the project...'}
              className={`${style.inputText} ${style.textareaText}`}
            />
          )}
        />
      </FlexRow>
      <FlexRow justifyContent={'flex-end'} className={style.submitBlock}>
        <Button onClick={onCancel} className={style.errorBtn}>
          Cancel
        </Button>
        <Button type="submit">Save project</Button>
      </FlexRow>
    </form>
  );
};
