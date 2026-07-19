'use client';

import React, { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { Column as ColumnType, useKanbanStore } from '../store/useKanbanStore';
import { KanbanCard } from './KanbanCard';
import { Button } from './Button';
import { Input } from './Input';
import { Modal } from './Modal';
import { Plus } from 'lucide-react';

interface ColumnProps {
  column: ColumnType;
}

export const Column: React.FC<ColumnProps> = ({ column }) => {
  const cards = useKanbanStore((state) => state.cards).filter((c) => c.columnId === column.id);
  const updateColumnTitle = useKanbanStore((state) => state.updateColumnTitle);
  const addCard = useKanbanStore((state) => state.addCard);

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(column.title);
  
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardDetails, setNewCardDetails] = useState('');

  const handleTitleSubmit = () => {
    if (titleInput.trim()) {
      updateColumnTitle(column.id, titleInput.trim());
    }
    setIsEditingTitle(false);
  };

  const handleAddCard = () => {
    if (newCardTitle.trim()) {
      addCard(column.id, newCardTitle.trim(), newCardDetails.trim());
      setNewCardTitle('');
      setNewCardDetails('');
      setIsAddingCard(false);
    }
  };

  return (
    <div
      className="column-container"
      style={{
        borderTop: `4px solid ${column.color}`,
      }}
    >
      <div style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {isEditingTitle ? (
          <Input
            autoFocus
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            onBlur={handleTitleSubmit}
            onKeyDown={(e) => e.key === 'Enter' && handleTitleSubmit()}
            style={{ fontWeight: 600, fontSize: '15px' }}
          />
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, cursor: 'pointer' }} onClick={() => setIsEditingTitle(true)} title="Click to edit column title">
            <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>{column.title}</h3>
            <span style={{ 
              backgroundColor: column.color, 
              color: 'white', 
              padding: '2px 8px', 
              borderRadius: '12px', 
              fontSize: '12px',
              fontWeight: 600
            }}>
              {cards.length}
            </span>
          </div>
        )}
      </div>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              padding: '0 16px',
              flex: 1,
              overflowY: 'auto',
              minHeight: '150px',
              transition: 'background-color 0.2s',
              backgroundColor: snapshot.isDraggingOver ? 'rgba(0,0,0,0.03)' : 'transparent',
            }}
          >
            {cards.map((card, index) => (
              <KanbanCard key={card.id} card={card} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div style={{ padding: '16px' }}>
        <Button 
          variant="ghost" 
          onClick={() => setIsAddingCard(true)}
          style={{ width: '100%', justifyContent: 'flex-start', gap: '8px', color: 'var(--color-gray-text)' }}
        >
          <Plus size={16} /> Add a card
        </Button>
      </div>

      <Modal isOpen={isAddingCard} onClose={() => setIsAddingCard(false)} title="Add New Card">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Card Title</label>
            <Input 
              autoFocus
              value={newCardTitle} 
              onChange={(e) => setNewCardTitle(e.target.value)} 
              placeholder="e.g. Design homepage" 
              onKeyDown={(e) => e.key === 'Enter' && handleAddCard()}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 500 }}>Details (optional)</label>
            <textarea 
              className="input" 
              value={newCardDetails} 
              onChange={(e) => setNewCardDetails(e.target.value)} 
              placeholder="Add more details..."
              style={{ minHeight: '80px', resize: 'vertical' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
            <Button variant="ghost" onClick={() => setIsAddingCard(false)}>Cancel</Button>
            <Button variant="secondary" onClick={handleAddCard} disabled={!newCardTitle.trim()}>Add Card</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
