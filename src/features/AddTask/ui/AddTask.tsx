import { FC, MouseEvent, useState } from 'react';

import PlusSVG from '@/shared/assets/img/plus.svg';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { ModalCreateForm } from '@/shared/ui/ModalCreateForm/ModalCreateForm.tsx';
import { Svg } from '@/shared/ui/Svg/Svg.tsx';

import style from './AddTask.module.scss';

export const AddTask: FC = (props) => {
  const {} = props;
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
        <Svg className={style.icon} src={PlusSVG} />
        Create a task
      </Button>
      <ModalCreateForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        labelInput={'Name the task'}
        placeholderInput={'name task...'}
        labelTextarea={'Objective of tasks'}
        placeholderTextarea={'description...'}
        submitBtn={'Create task'}
        title={'New task'}
        valueInput={''}
        onChangeInput={() => {}}
        valueTextarea={''}
        onChangeTextarea={() => {}}
      />
    </FlexRow>
  );
};
