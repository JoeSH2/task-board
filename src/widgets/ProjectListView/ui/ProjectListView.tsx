import { Done, NotInterested, SwapVert } from '@mui/icons-material';
import { FC, useState } from 'react';

import { Project, useGetProjectsListQuery } from '@/entities/Project';
import { ProjectList } from '@/entities/ProjectList';
import { SortingProject } from '@/features/SortingProject/ui/SortingProject.tsx';
import { StorageKey } from '@/shared/consts/storageKey.ts';
import { cls } from '@/shared/lib/cls.ts';
import { localStorageWrapper } from '@/shared/lib/storageWrapper.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './ProjectListView.module.scss';

export const ProjectListView: FC = () => {
  const [isSorting, setIsSorting] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const sortedProjectsId = localStorageWrapper.get<string[]>(
    StorageKey.projects
  );
  const { data } = useGetProjectsListQuery({
    sortId: sortedProjectsId,
  });

  const setViewSortingProjectsList = () => {
    setIsSorting(true);
  };
  const setViewProjectsList = () => {
    setIsSorting(false);
    setIsFetching(false);
  };

  const handleFetchSortList = (projects: Project[]) => {
    setIsFetching(true);
    if (isFetching) {
      const array: string[] = projects.map((project) => project.id);
      localStorageWrapper.set(StorageKey.projects, array);
      setViewProjectsList();
    }
  };

  if (!isSorting) {
    return (
      <>
        <FlexRow className={style.ProjectListView} justifyContent={'flex-end'}>
          <Button className={style.btn} onClick={setViewSortingProjectsList}>
            <SwapVert fontSize={'small'} />
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
          onClick={setViewProjectsList}
        >
          <NotInterested fontSize={'small'} />
        </Button>
        <Button
          onClick={handleFetchSortList}
          className={cls(style.btn, {}, [style.doneBtn])}
        >
          <Done fontSize={'small'} />
        </Button>
      </FlexRow>
      <SortingProject
        data={data}
        isFetching={isFetching}
        onFetch={handleFetchSortList}
      />
    </>
  );
};
