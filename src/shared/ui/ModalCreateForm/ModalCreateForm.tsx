import { FC, memo, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';

import style from './ModalCreateForm.module.scss';

interface ModalCreateFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  labelInput: string;
  placeholderInput?: string;
  labelTextarea: string;
  placeholderTextarea?: string;
  submitBtn: string;
  onSubmit: () => void;
}

interface AddTaskForm {
  taskName: string;
  taskDescription: string;
}

export const ModalCreateForm: FC<ModalCreateFormProps> = memo((props) => {
  const {
    isOpen,
    setIsOpen,
    title,
    placeholderInput,
    placeholderTextarea,
    labelTextarea,
    labelInput,
    submitBtn,
    onSubmit,
  } = props;

  const { control, handleSubmit, watch, setFocus } = useForm<AddTaskForm>();

  const onCreateSubmit: SubmitHandler = (data) => {
    console.log(data);
    onSubmit();
  };

  const onCancel = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setFocus('taskName');
  }, [setFocus]);

  return (
    <Modal
      className={style.ModalCreateForm}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
    >
      <h5 className={style.title}>{title}</h5>
      <form onSubmit={handleSubmit(onCreateSubmit)} className={style.form}>
        <FlexRow className={style.blockForm}>
          <label className={style.text}>{labelInput}</label>
          <Controller
            name="taskName"
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <Input
                hook={field}
                placeholder={placeholderInput}
                className={style.input}
              />
            )}
          />
        </FlexRow>
        <FlexRow className={style.blockForm}>
          <label className={style.text}>{labelTextarea}</label>
          <Controller
            name="taskDescription"
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <Textarea
                hook={field}
                placeholder={placeholderTextarea}
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
            {submitBtn}
          </Button>
        </FlexRow>
      </form>
    </Modal>
  );
});
