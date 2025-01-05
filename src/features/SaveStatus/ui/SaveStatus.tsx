import { CircleCheck } from 'lucide-react';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getProjectId, getProjectStatus } from '@/entities/Project';
import { useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import { useSaveStatusMutation } from '../model/api/apiSaveStatus';
import style from './SaveStatus.module.scss';

export const SaveStatus: FC = () => {
  const [saveStatus] = useSaveStatusMutation();
  const projectId = useSelector(getProjectId);
  const projectStatus = useAppSelector(getProjectStatus);

  const onSaveStatus = useCallback(async () => {
    try {
      await saveStatus({ id: projectId, status: projectStatus }).unwrap();
    } catch (e) {
      console.log(e);
    }
  }, [projectStatus, SaveStatus]);

  return (
    <div className={style.SaveStatus}>
      <Button onClick={onSaveStatus} className={style.saveBtn}>
        <CircleCheck className={style.btnIcon} />
        Save status
      </Button>
    </div>
  );
};
