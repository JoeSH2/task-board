import { FC } from 'react';
import { Task } from 'src/entities/Task';
import { TaskStatus, TaskType } from 'src/entities/Task/types/TaskType.ts';
import { getUserIsAuth } from 'src/entities/User';
import { AddTask } from 'src/features/AddTask';
import { getStatusProject, StatusProject } from 'src/features/StatusProject';
import { StatusProjectType } from 'src/features/StatusProject';
import { TaskList } from 'src/features/TaskList';
import { useAppSelector } from 'src/shared/hooks/hookRedux.tsx';
import { cls } from 'src/shared/lib/cls.ts';

import style from './ProjectPage.module.scss';

const tasks: TaskType[] = [
  {
    status: TaskStatus.UNFULFILLED,
    date: '28.05.2024',
    title: 'Search',
    report: 'Overdue',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias assumenda atque blanditiis dolor eaque iusto nulla similique sunt vel. Aspernatur delectus eligendi impedit iure non quidem',
  },
  {
    status: TaskStatus.FULFILLED,
    date: '28.05.2024',
    title: 'Create profile page',
    report: 'Realized',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus culpa cum est veniam! Architecto delectus quaerat sit?',
  },
  {
    status: TaskStatus.EXECUTED,
    date: undefined,
    title: 'Develop a system for editing tasks',
    report: '',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, suscipit?',
  },
];

export const ProjectPage: FC = () => {
  const isAuth = useAppSelector(getUserIsAuth);
  const statusProject = useAppSelector(getStatusProject);

  return (
    <div
      className={cls(
        style.ProjectPage,
        {
          [style.hold]: statusProject === StatusProjectType.HOLD,
          [style.risk]: statusProject === StatusProjectType.RISK,
          [style.inactive]: statusProject === StatusProjectType.INACTIVE,
        },
        []
      )}
    >
      <StatusProject />
      <h1 className={style.title}>{isAuth ? 'Company 1' : 'Test project'}</h1>
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        accusantium, beatae commodi eius eligendi eum ipsa maxime minus nihil
        nisi nobis numquam quas reiciendis reprehenderit similique soluta
        tenetur? Eum, iusto.
      </p>
      <AddTask />
      <div className={style.wrapper}>
        <TaskList tasks={tasks} />
        <Task />
      </div>
      {!isAuth && (
        <div className={style.testData}>
          <b>Authorize to access all features of the application!</b>
        </div>
      )}
    </div>
  );
};
