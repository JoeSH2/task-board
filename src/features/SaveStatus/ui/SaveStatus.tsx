import Done from '@mui/icons-material/Done';
import { FC, useCallback } from 'react';

import {
  getProjectSelector,
  useGetProjectsListQuery,
} from '@/entities/Project';
import { useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import { useSaveStatusMutation } from '../model/api/apiSaveStatus';
import style from './SaveStatus.module.scss';

export const SaveStatus: FC = () => {
  const [saveStatus] = useSaveStatusMutation();
  const project = useAppSelector(getProjectSelector);
  const { refetch } = useGetProjectsListQuery();

  const onSaveStatus = useCallback(async () => {
    try {
      await saveStatus(project).unwrap();
      await refetch();
    } catch (e) {
      console.log(e);
    }
  }, [project, refetch, SaveStatus]);

  return (
    <div className={style.SaveStatus}>
      <Button onClick={onSaveStatus} className={style.saveBtn}>
        <Done className={style.btnIcon} />
        Save status
      </Button>
    </div>
  );
};
