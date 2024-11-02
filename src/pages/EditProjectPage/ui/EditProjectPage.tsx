import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useGetProjectByIdQuery } from '@/entities/Project';
import {
  EditProjectForm,
  EditProjectHead,
  EditProjectStatus,
} from '@/features/EditProject';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import style from './EditProjectPage.module.scss';

const EditProjectPage: FC = () => {
  const { id: urlId } = useParams();
  const { isLoading } = useGetProjectByIdQuery(urlId);

  if (isLoading) {
    //TODO сделать лоадер
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
