import { FC } from 'react';
import { StatusProjectType } from 'src/features/StatusProject/model/types/StatusProjectType.ts';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/hookRedux.tsx';
import { cls } from 'src/shared/lib/cls.ts';
import { Checkbox } from 'src/shared/ui/Checkbox/Checkbox.tsx';
import { FlexColumn } from 'src/shared/ui/Flex/FlexColumn.tsx';

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
