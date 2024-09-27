import { FC, useCallback } from 'react';

import { projectAction } from '@/entities/Project';
import { getProjectStatus } from '@/entities/Project';
import { StatusProjectType } from '@/features/StatusProject/model/types/StatusProjectType';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hookRedux';
import { cls } from '@/shared/lib/cls.ts';
import { Checkbox } from '@/shared/ui/Checkbox/Checkbox';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn';

import style from './StatusProject.module.scss';

const stateStatus: StatusProjectType[] = [
  StatusProjectType.WORK,
  StatusProjectType.HOLD,
  StatusProjectType.RISK,
  StatusProjectType.INACTIVE,
];

export const StatusProject: FC = () => {
  const dispatch = useAppDispatch();
  const activeStatus = useAppSelector(getProjectStatus);

  const handleCheckboxChange = useCallback(
    (item: StatusProjectType) => {
      dispatch(projectAction.setStatus(item));
    },
    [dispatch]
  );

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
