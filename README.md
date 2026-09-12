# Dev Stack

A React + TypeScript + Vite web app where developers can explore technologies
(frontend, backend, database, styling, DevOps, and tools) and build their own
"stack" by adding/removing items.

## Features
- Responsive navbar (desktop + mobile hamburger menu), sticky on scroll
- Gradient-themed hero section
- Technology cards loaded from a local JSON file (with loading state)
- "Your Stack" sidebar with add / remove / remove all functionality
- Toast alerts (react-toastify) for add, duplicate, remove, remove all
- Fully responsive: mobile, tablet, desktop
- Single-source gradient theme (orange → pink → violet)

## Tech Stack
- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 + DaisyUI
- react-toastify

## Getting Started

Clone the repository:
\`\`\`bash:-
git clone https://github.com/farhad-alom/Assignment-5-devStack.git

cd Assignment-5-devStack

npm install

npm run dev

\`\`\`

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Project Structure

\`\`\`
src/
├── assets/            # images
├── components/        # Navbar, Hero, TechCard, TechGrid, YourStack, Footer, Loader
├── data/               # technologies.json
├── hooks/              # useTechnologies.ts
├── types/              # technology.ts
├── App.tsx
├── index.css
└── main.tsx
\`\`\`