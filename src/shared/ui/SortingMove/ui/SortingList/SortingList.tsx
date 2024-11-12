import { closestCenter, DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { ReactNode, useEffect } from 'react';

import { Project } from '@/entities/Project';
import { useSortingListDnd } from '@/shared/hooks/useSortingListDnd.tsx';

interface SortingListProps<T> {
  values: T[];
  renderList: (items: T[]) => ReactNode;
  onFetchValues?: (items: T[]) => void;
}

export const SortingList = <T extends Project>({
  values,
  renderList,
  onFetchValues,
}: SortingListProps<T>) => {
  const { items, sensors, handleDragEnd } = useSortingListDnd({ data: values });

  useEffect(() => {
    if (onFetchValues) {
      onFetchValues(items);
    }
  }, [onFetchValues]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map((item) => item.id)}>
        {renderList(items)}
        {/*ОБЕРНУТЬ В <SortingItem key={id} id={id}>...</SortingItem>*/}
      </SortableContext>
    </DndContext>
  );
};
