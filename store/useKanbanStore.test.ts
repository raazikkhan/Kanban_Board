import { useKanbanStore } from './useKanbanStore';

describe('useKanbanStore', () => {
  beforeEach(() => {
    useKanbanStore.setState({
      columns: [
        { id: 'col-1', title: 'To Do' },
        { id: 'col-2', title: 'Done' }
      ],
      cards: [
        { id: 'card-1', title: 'Test Card', details: 'Details', columnId: 'col-1' }
      ]
    });
  });

  it('should update column title', () => {
    const { updateColumnTitle } = useKanbanStore.getState();
    updateColumnTitle('col-1', 'In Progress');
    
    expect(useKanbanStore.getState().columns[0].title).toBe('In Progress');
  });

  it('should add a new card', () => {
    const { addCard } = useKanbanStore.getState();
    addCard('col-1', 'New Card', 'New Details');
    
    const cards = useKanbanStore.getState().cards;
    expect(cards.length).toBe(2);
    expect(cards[1].title).toBe('New Card');
    expect(cards[1].columnId).toBe('col-1');
  });

  it('should delete a card', () => {
    const { deleteCard } = useKanbanStore.getState();
    deleteCard('card-1');
    
    expect(useKanbanStore.getState().cards.length).toBe(0);
  });

  it('should move a card to another column', () => {
    const { moveCard } = useKanbanStore.getState();
    moveCard('card-1', 'col-2', 0);
    
    const cards = useKanbanStore.getState().cards;
    expect(cards[0].columnId).toBe('col-2');
  });
});
