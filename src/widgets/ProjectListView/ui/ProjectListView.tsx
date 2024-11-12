import { Done, NotInterested, SwapVert } from '@mui/icons-material';
import { FC, MouseEvent, useState } from 'react';

import { ProjectList } from '@/entities/ProjectList';
import { SortingProject } from '@/features/SortingProject/ui/SortingProject.tsx';
import { cls } from '@/shared/lib/cls.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';

import style from './ProjectListView.module.scss';

export const ProjectListView: FC = () => {
  const [isSorting, setIsSorting] = useState(false);

  const setViewList = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsSorting((prev) => !prev);
  };

  const handleFetchSortList = () => {
    console.log('handleFetchSortList');
    setIsSorting(false);
  };

  if (!isSorting) {
    return (
      <>
        <FlexRow className={style.ProjectListView} justifyContent={'flex-end'}>
          <Button className={style.btn} onClick={(e) => setViewList(e)}>
            <SwapVert fontSize={'small'} />
          </Button>
        </FlexRow>
        <ProjectList />
      </>
    );
  }

  return (
    <>
      <FlexRow className={style.ProjectListView} justifyContent={'flex-end'}>
        <Button
          className={cls(style.btn, {}, [style.cancelBtn])}
          onClick={() => setIsSorting(false)}
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
      <SortingProject onFetch={() => {}} />
    </>
  );
};
