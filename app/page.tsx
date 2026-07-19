import { Board } from '../components/Board';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ 
        padding: '20px 32px', 
        backgroundColor: 'var(--color-dark-navy)', 
        color: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
        zIndex: 10
      }}>
        <h1 style={{ margin: 0, fontSize: '24px', color: 'white', fontWeight: 700 }}>Kanban Board</h1>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>
          Add cards, rename columns, delete tasks, and move work across stages with a polished client-only board.
        </p>
      </header>
      
      <div style={{ flex: 1, backgroundColor: 'var(--color-background)', overflow: 'hidden' }}>
        <Board />
      </div>
    </main>
  );
}
