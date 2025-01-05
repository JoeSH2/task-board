import { Ban, CircleCheckBig, GripVertical } from 'lucide-react';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Project, useGetProjectsListQuery } from '@/entities/Project';
import { ProjectList } from '@/entities/ProjectList';
import { getUserIsAuth } from '@/entities/User';
import { SortingProject } from '@/features/SortingProject/ui/SortingProject.tsx';
import { getLoginPage } from '@/shared/config/RoutingPath.ts';
import { StorageKey } from '@/shared/consts/storageKey.ts';
import { cls } from '@/shared/lib/cls.ts';
import { localStorageWrapper } from '@/shared/lib/storageWrapper.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexColumn } from '@/shared/ui/Flex/FlexColumn.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

import style from './ProjectListView.module.scss';

export const ProjectListView: FC = () => {
  const [isSorting, setIsSorting] = useState(false);
  const [isSavingSort, setIsSavingSort] = useState(false);
  const isAuth = useSelector(getUserIsAuth);

  const sortedProjectsId = localStorageWrapper.get<string[]>(
    StorageKey.PROJECTS
  );
  const { data, isLoading, isError, isFetching } = useGetProjectsListQuery({
    sortId: sortedProjectsId,
  });

  console.log(isLoading, isFetching);

  const enterSortingMode = () => {
    setIsSorting(true);
  };
  const exitSortingMode = () => {
    setIsSorting(false);
    setIsSavingSort(false);
  };
  const onFetchingSortedProjects = () => {
    setIsSavingSort(true);
  };

  const saveSortedProjects = (projects: Project[]) => {
    if (isSavingSort) {
      const array: string[] = projects.map((project) => project.id);
      localStorageWrapper.set(StorageKey.PROJECTS, array);
      exitSortingMode();
    }
  };

  if (!isAuth) {
    return (
      <div className={style.emptyList}>
        <h3>
          Log in to your <Link to={getLoginPage()}>account!</Link>
        </h3>
      </div>
    );
  }

  if (isLoading) {
    return (
      <FlexColumn
        alignItems={'center'}
        justifyContent={'center'}
        fullHeight
        fullWight
      >
        <Loader />
      </FlexColumn>
    );
  }

  if (isError && !data) {
    return (
      <FlexColumn
        alignItems={'center'}
        justifyContent={'center'}
        fullHeight
        fullWight
      >
        <h3>Error data</h3>
      </FlexColumn>
    );
  }

  if (!isSorting) {
    return (
      <>
        <FlexRow className={style.ProjectListView} justifyContent={'flex-end'}>
          <Button className={style.btn} onClick={enterSortingMode}>
            <GripVertical size={18} />
          </Button>
        </FlexRow>
        <ProjectList data={data} />
      </>
    );
  }

  return (
    <>
      <FlexRow className={style.ProjectListView} justifyContent={'flex-end'}>
        <Button
          className={cls(style.btn, {}, [style.cancelBtn])}
          onClick={exitSortingMode}
        >
          <Ban size={18} />
        </Button>
        <Button
          onClick={onFetchingSortedProjects}
          className={cls(style.btn, {}, [style.doneBtn])}
        >
          <CircleCheckBig size={18} />
        </Button>
      </FlexRow>
      <SortingProject
        data={data!}
        isFetching={isSavingSort}
        onFetch={saveSortedProjects}
      />
    </>
  );
};
