import Done from '@mui/icons-material/Done';
import { FC, useCallback } from 'react';

import {
  getProjectSelector,
  useGetProjectsListQuery,
} from '@/entities/Project';
import { useSaveProjectMutation } from '@/features/SaveProject';
import { useAppSelector } from '@/shared/hooks/hookRedux.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';

import style from './SaveProject.module.scss';

export const SaveProject: FC = () => {
  const [saveProject] = useSaveProjectMutation();
  const project = useAppSelector(getProjectSelector);
  const { refetch } = useGetProjectsListQuery();

  const onSaveProject = useCallback(async () => {
    try {
      await saveProject(project).unwrap();
      await refetch();
    } catch (e) {
      console.log(e);
    }
  }, [project, refetch, saveProject]);

  return (
    <div className={style.SaveProject}>
      <Button onClick={onSaveProject} className={style.saveBtn}>
        <Done className={style.btnIcon} />
        Save project
      </Button>
    </div>
  );
};
