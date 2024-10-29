import { Leaderboard } from '@mui/icons-material';
import { FC } from 'react';

import { FlexRow } from '@/shared/ui/Flex/FlexRow.tsx';
import { PageWrapper } from '@/shared/ui/PageWrapper/PageWrapper.tsx';

import style from './MainPage.module.scss';

const description = {
  React: ' — библиотека для построения пользовательских интерфейсов.',
  'Redux Toolkit': ' — упрощенное управление состоянием приложения.',
  'RTK Query': ' — для удобного взаимодействия с сервером.',
  TypeScript:
    ' — строго типизированный JavaScript для улучшения качества кода.',
  Vite: ' — быстрый сборщик для разработки и продакшн-сборок.',
  'json-server': ' — симуляция сервера для хранения и обработки данных.',
  'FSD архитектура':
    ' — структурирование приложения для лучшей масштабируемости и поддержки.',
  'Material UI': ' — для UI-компонентов.',
  'react-hook-form': ' — библиотека для работы с формами.',
};

const MainPage: FC = () => {
  return (
    <PageWrapper className={style.MainPage}>
      <FlexRow alignItems={'center'}>
        <h1 className={style.title}>Task board</h1>
        <Leaderboard className={style.icon} />
      </FlexRow>
      <p className={style.info}>
        Task board - это SPA-приложение для управления проектами и задачами.
        Пользователи могут создавать проекты, добавлять к ним описание и
        устанавливать статус выполнения. В каждом проекте можно создавать
        задачи, отслеживать их статус, добавлять отчеты о выполнении и удалять
        как задачи, так и проекты.
      </p>
      <div className={style.description}>
        <h5>Проект создан с использованием следующих технологий:</h5>
        <ul>
          {Object.entries(description).map(([key, text], index) => (
            <li key={key + index}>
              <b className={style.key}>{key}</b>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageWrapper>
  );
};

export default MainPage;
