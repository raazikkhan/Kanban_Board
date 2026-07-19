import { create } from 'zustand';

export interface Card {
  id: string;
  title: string;
  details: string;
  columnId: string;
}

export interface Column {
  id: string;
  title: string;
  color: string;
}

interface KanbanState {
  columns: Column[];
  cards: Card[];
  updateColumnTitle: (columnId: string, newTitle: string) => void;
  addCard: (columnId: string, title: string, details: string) => void;
  deleteCard: (cardId: string) => void;
  moveCard: (cardId: string, toColumnId: string, newIndex: number) => void;
}

const initialColumns: Column[] = [
  { id: 'col-1', title: 'Backlog', color: '#64748b' },
  { id: 'col-2', title: 'To Do', color: '#3b82f6' },
  { id: 'col-3', title: 'In Progress', color: '#ecad0a' },
  { id: 'col-4', title: 'Review', color: '#8b5cf6' },
  { id: 'col-5', title: 'Done', color: '#22c55e' },
];

const initialCards: Card[] = [
  { id: 'card-1', title: 'Research competitors', details: 'Look at Trello and Jira for inspiration.', columnId: 'col-1' },
  { id: 'card-2', title: 'Design System', details: 'Implement the designated color palette and typography.', columnId: 'col-2' },
  { id: 'card-3', title: 'Implement Drag and Drop', details: 'Using @hello-pangea/dnd library.', columnId: 'col-3' },
  { id: 'card-4', title: 'Write unit tests', details: 'Use Jest for state and components.', columnId: 'col-4' },
];

export const useKanbanStore = create<KanbanState>((set) => ({
  columns: initialColumns,
  cards: initialCards,

  updateColumnTitle: (columnId, newTitle) =>
    set((state) => ({
      columns: state.columns.map((col) =>
        col.id === columnId ? { ...col, title: newTitle } : col
      ),
    })),

  addCard: (columnId, title, details) =>
    set((state) => ({
      cards: [
        ...state.cards,
        { id: `card-${Date.now()}`, title, details, columnId },
      ],
    })),

  deleteCard: (cardId) =>
    set((state) => ({
      cards: state.cards.filter((card) => card.id !== cardId),
    })),

  moveCard: (cardId, toColumnId, newIndex) =>
    set((state) => {
      const cardIndex = state.cards.findIndex((c) => c.id === cardId);
      if (cardIndex === -1) return state;

      const card = state.cards[cardIndex];
      const newCards = [...state.cards];
      newCards.splice(cardIndex, 1);

      // Separate cards in the destination column from the rest
      const destinationCards = newCards.filter((c) => c.columnId === toColumnId);
      const otherCards = newCards.filter((c) => c.columnId !== toColumnId);
      
      const updatedCard = { ...card, columnId: toColumnId };
      destinationCards.splice(newIndex, 0, updatedCard);

      return {
        cards: [...otherCards, ...destinationCards],
      };
    }),
}));
