# Kanban Board

A modern, elegant, and simple Kanban-style project management application built with Next.js.

The application focuses on providing a polished project management experience with a single board, fixed customizable columns, and intuitive drag-and-drop interactions.

## 🔗 Links

- **Live Demo:** [kanban-project.vercel.app](https://kanban-board-ruddy-ten.vercel.app/)
- **GitHub Repository:** [github.com/your-username/kanban-project]([https://github.com/your-username/kanban-project](https://github.com/raazikkhan/Kanban_Board.git))

---

## ✨ Features

- Single Kanban board
- Five fixed columns
- Rename columns
- Add new cards to any column
- Edit card title and details
- Delete existing cards
- Drag and drop cards between columns
- Dummy data populated on initial load
- Modern, responsive, and professional UI
- No authentication or user management
- No persistence — data resets when the application reloads

---

## 🎯 Project Scope

This project is intentionally designed as a focused MVP.

The goal is to provide a simple and beautiful Kanban experience without unnecessary complexity.

### Included

- One board
- Five customizable columns
- Cards with:
  - Title
  - Details
- Drag-and-drop functionality
- Card creation and deletion
- Responsive UI

### Not Included

To keep the MVP simple, the following features are intentionally excluded:

- Multiple boards
- User authentication
- User management
- Database persistence
- Archive functionality
- Search
- Filtering
- Due dates
- Labels or tags
- Comments
- Notifications

---

## 🛠️ Tech Stack

- **Next.js** — React framework for the web
- **React** — UI development
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Styling and responsive design
- **Drag and Drop Library** — Interactive card movement
- **Lucide React** — Modern icon system

---

## 📁 Project Structure

```text
kanban-project/
│
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── board/
│   │   ├── column/
│   │   ├── card/
│   │   └── ui/
│   │
│   ├── lib/
│   │   └── data.ts
│   │
│   ├── types/
│   │   └── kanban.ts
│   │
│   ├── public/
│   │
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm, pnpm, or yarn

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Frontend Directory

```bash
cd frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

---

## 🧩 Application Behavior

### Board

The application contains one Kanban board with five columns.

Each column can be renamed while the overall number of columns remains fixed.

### Cards

Each card contains only:

- **Title**
- **Details**

Users can create a card inside any column and delete cards when they are no longer needed.

### Drag and Drop

Cards can be dragged and moved between any of the five columns.

The interface should provide clear visual feedback during drag-and-drop interactions.

### Dummy Data

The application starts with predefined dummy data so users can immediately interact with the board without needing to create content manually.

---

## 🎨 UI/UX Principles

The primary focus of this project is a polished user experience.

The interface should be:

- Clean
- Modern
- Professional
- Responsive
- Intuitive
- Visually balanced
- Easy to navigate

The application should prioritize visual quality and interaction design over unnecessary functionality.

---

## 📱 Responsive Design

The application should provide a smooth experience across:

- Desktop
- Laptop
- Tablet
- Mobile devices

The board should remain usable on smaller screens while preserving the drag-and-drop experience wherever possible.

---

## 🧠 Data Management

This MVP does not use a database or persistent storage.

All board data is managed on the client side.

```text
Application Load
       ↓
Dummy Data
       ↓
Client State
       ↓
User Interactions
       ↓
Updated UI
```

Refreshing the page resets the board to its initial dummy data.

---

## 📌 MVP Goals

The main goals of this project are:

1. Build a functional Kanban board
2. Provide a smooth drag-and-drop experience
3. Create a visually impressive and professional interface
4. Keep the application simple and focused
5. Establish a clean and maintainable project structure

---

## 🔮 Future Improvements

Future versions may include:

- Persistent data storage
- Multiple boards
- User authentication
- Team collaboration
- Real-time updates
- Search and filtering
- Labels and priorities
- Due dates
- Comments
- Activity history

These features are intentionally outside the scope of the current MVP.

---

## 📄 License

This project is created for learning and development purposes.

---

## 👨‍💻 Author

** Razik Khan **

Built with Next.js, React, TypeScript, and a focus on creating a simple yet beautiful user experience.
