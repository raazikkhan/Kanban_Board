'use client';

import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Card, useKanbanStore } from '../store/useKanbanStore';
import { Button } from './Button';
import { Trash2 } from 'lucide-react';

interface KanbanCardProps {
  card: Card;
  index: number;
}

export const KanbanCard: React.FC<KanbanCardProps> = ({ card, index }) => {
  const deleteCard = useKanbanStore((state) => state.deleteCard);

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            backgroundColor: snapshot.isDragging ? 'var(--color-surface-hover)' : 'var(--color-surface)',
            padding: '16px',
            marginBottom: '12px',
            borderRadius: '8px',
            boxShadow: snapshot.isDragging 
              ? '0 8px 20px rgba(0,0,0,0.15)' 
              : '0 2px 4px rgba(0,0,0,0.05)',
            border: '1px solid var(--color-border)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            transition: 'background-color 0.2s, box-shadow 0.2s',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>{card.title}</h4>
            <Button 
              variant="ghost" 
              onClick={() => deleteCard(card.id)}
              style={{ padding: '4px', marginTop: '-4px', marginRight: '-4px' }}
              title="Delete card"
            >
              <Trash2 size={16} />
            </Button>
          </div>
          {card.details && (
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-gray-text)', lineHeight: 1.4, whiteSpace: 'pre-wrap' }}>
              {card.details}
            </p>
          )}
        </div>
      )}
    </Draggable>
  );
};
