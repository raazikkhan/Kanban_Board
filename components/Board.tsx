'use client';

import React, { useEffect, useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { useKanbanStore } from '../store/useKanbanStore';
import { Column } from './Column';

export const Board: React.FC = () => {
  const columns = useKanbanStore((state) => state.columns);
  const moveCard = useKanbanStore((state) => state.moveCard);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    moveCard(draggableId, destination.droppableId, destination.index);
  };

  if (!isMounted) return null;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="board-container">
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </DragDropContext>
  );
};
