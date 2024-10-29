import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { projectAction, useGetProjectByIdQuery } from '@/entities/Project';
import {
  EditProjectForm,
  EditProjectHead,
  EditProjectStatus,
} from '@/features/EditProject';
import { useAppDispatch } from '@/shared/hooks/hookRedux.tsx';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import style from './EditProjectPage.module.scss';

const EditProjectPage: FC = () => {
  const dispatch = useAppDispatch();
  const { id: urlId } = useParams();
  const { data, isLoading } = useGetProjectByIdQuery(urlId);

  useEffect(() => {
    if (data) {
      dispatch(projectAction.initialProject(data));
    }
  }, [data, dispatch]);

  if (isLoading) {
    //TODO доделать
    return <div>Loading</div>;
  }

  return (
    <PageWrapper className={style.EditProjectPage}>
      <EditProjectHead />
      <EditProjectStatus />
      <EditProjectForm />
    </PageWrapper>
  );
};

export default EditProjectPage;
