import { FC, MouseEvent, useState } from 'react';

import { getUserIsAuth } from '@/entities/User';
import PlusSVG from '@/shared/assets/img/plus.svg';
import { useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { ModalCreateForm } from '@/shared/ui/ModalCreateForm/ModalCreateForm.tsx';
import { Svg } from '@/shared/ui/Svg/Svg.tsx';

import style from './CreateProject.module.scss';

export const CreateProject: FC = (props) => {
  const {} = props;
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
        <Svg className={style.icon} src={PlusSVG} />
        New project
      </Button>
      <ModalCreateForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        labelInput={'Project name'}
        placeholderInput={'name...'}
        labelTextarea={'Describe your project'}
        placeholderTextarea={'project description...'}
        submitBtn={'Create project'}
        title={'New project'}
        valueInput={''}
        onChangeInput={() => {}}
        valueTextarea={''}
        onChangeTextarea={() => {}}
      />
    </div>
  );
};