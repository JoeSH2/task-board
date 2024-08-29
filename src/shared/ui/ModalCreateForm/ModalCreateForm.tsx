import { FC } from 'react';
import { Button } from 'src/shared/ui/Button/Button.tsx';
import { FlexRow } from 'src/shared/ui/Flex/FlexRow.tsx';
import { Input } from 'src/shared/ui/Input/Input.tsx';
import { Modal } from 'src/shared/ui/Modal/Modal.tsx';
import { Textarea } from 'src/shared/ui/Textarea/Textarea.tsx';

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
  valueInput: string;
  onChangeInput: (valueInput: string) => void;
  valueTextarea: string;
  onChangeTextarea: (valueTextarea: string) => void;
}

export const ModalCreateForm: FC<ModalCreateFormProps> = (props) => {
  const {
    isOpen,
    setIsOpen,
    title,
    placeholderInput,
    placeholderTextarea,
    labelTextarea,
    labelInput,
    submitBtn,
  } = props;

  return (
    <Modal
      className={style.ModalCreateForm}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
    >
      <h5 className={style.title}>{title}</h5>
      <form className={style.form}>
        <FlexRow className={style.blockForm}>
          <label className={style.text}>{labelInput}</label>
          <Input placeholder={placeholderInput} className={style.input} />
        </FlexRow>
        <FlexRow className={style.blockForm}>
          <label className={style.text}>{labelTextarea}</label>
          <Textarea
            placeholder={placeholderTextarea}
            className={style.textarea}
          />
        </FlexRow>
        <FlexRow justifyContent={'space-evenly'} className={style.btnWrapper}>
          <Button className={style.btnCancel} onClick={() => {}}>
            Cancel
          </Button>
          <Button className={style.btn} onClick={() => {}}>
            {submitBtn}
          </Button>
        </FlexRow>
      </form>
    </Modal>
  );
};
