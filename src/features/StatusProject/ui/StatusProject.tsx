import { FC } from 'react';

import { StatusProjectType } from '@/features/StatusProject/model/types/StatusProjectType.ts';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { cls } from '@/shared/lib/cls.ts';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox.tsx';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';

import { getStatusProject } from '../model/selectors/getStatusProjectSelectors.ts';
import { statusProjectAction } from '../model/slice/statusProjectSlice.ts';
import style from './StatusProject.module.scss';

const stateStatus: StatusProjectType[] = [
  StatusProjectType.WORK,
  StatusProjectType.HOLD,
  StatusProjectType.RISK,
  StatusProjectType.INACTIVE,
];

export const StatusProject: FC = () => {
  const dispatch = useAppDispatch();
  const activeStatus = useAppSelector(getStatusProject);

  const handleCheckboxChange = (item: StatusProjectType) => {
    dispatch(statusProjectAction.setStatus(item));
  };

  return (
    <div className={style.StatusProject}>
      {stateStatus.map((item, i) => (
        <FlexColumn
          alignItems={'center'}
          key={i}
          className={cls(
            style.item,
            { [style.active]: activeStatus === item },
            []
          )}
        >
          <Checkbox
            checked={activeStatus === item}
            item={item}
            onChange={() => handleCheckboxChange(item)}
          />
        </FlexColumn>
      ))}
    </div>
  );
};
