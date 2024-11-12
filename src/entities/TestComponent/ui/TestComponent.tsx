import { FC } from 'react';

import { SortingProject } from '@/features/SortingProject/ui/SortingProject.tsx';

export const TestComponent: FC = () => {
  return (
    <div>
      <h2>TEST COMPONENT</h2>
      <section>
        <SortingProject />
      </section>
    </div>
  );
};
