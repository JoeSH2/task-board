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
  const [isSavingSort, setIsSavingSort] = useState(false);

  const sortedProjectsId = localStorageWrapper.get<string[]>(
    StorageKey.projects
  );
  const { data } = useGetProjectsListQuery({
    sortId: sortedProjectsId,
  });

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
      localStorageWrapper.set(StorageKey.projects, array);
      exitSortingMode();
    }
  };

  if (!isSorting) {
    return (
      <>
        <FlexRow className={style.ProjectListView} justifyContent={'flex-end'}>
          <Button className={style.btn} onClick={enterSortingMode}>
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
          onClick={exitSortingMode}
        >
          <NotInterested fontSize={'small'} />
        </Button>
        <Button
          onClick={onFetchingSortedProjects}
          className={cls(style.btn, {}, [style.doneBtn])}
        >
          <Done fontSize={'small'} />
        </Button>
      </FlexRow>
      <SortingProject
        data={data}
        isFetching={isSavingSort}
        onFetch={saveSortedProjects}
      />
    </>
  );
};
