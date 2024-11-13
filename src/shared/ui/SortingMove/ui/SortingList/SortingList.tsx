import { closestCenter, DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';
import { ReactNode, useEffect, useState } from 'react';

import { Project } from '@/entities/Project';
import { useSortingListDnd } from '@/shared/hooks/useSortingListDnd.tsx';

interface SortingListProps<T> {
  values: T[];
  renderList: (items: T[]) => ReactNode;
  onFetchValues?: (items: T[]) => void;
  isFetching: boolean;
}

export const SortingList = <T extends Project>({
  values,
  renderList,
  onFetchValues,
  isFetching,
}: SortingListProps<T>) => {
  const { items, sensors, handleDragEnd } = useSortingListDnd({ data: values });
  const [isFetch, setIsFetch] = useState(false);

  useEffect(() => {
    setIsFetch(isFetching);
  }, [isFetching]);

  useEffect(() => {
    if (onFetchValues && isFetch) {
      onFetchValues(items);
    }
  }, [isFetch, items, onFetchValues]);

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
