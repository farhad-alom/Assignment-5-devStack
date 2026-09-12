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

# Questions Answers:
1. What is JSX, and why is it used in React?

Ans:- JSX lets you write HTML-like code inside JavaScript. Instead of using document.createElement, you just write <div>Hello</div> directly in your .tsx files. React uses it because it's easier to read and write UI this way — like in Navbar.tsx, we wrote <span>Dev Stack</span> instead of complicated JS code.

2. What is the difference between props and state?

Ans:- Props are data passed into a component from its parent — the component can't change them. Example: TechCard receives technology, isAdded, onAdd as props from TechGrid.
State is data a component manages itself and can change over time. Example: stack in App.tsx — it changes when you add/remove items.

3. What does the useState hook do, and where did you use it in this project?

Ans:- useState lets a component "remember" a value and re-render when it changes. Example: tsxconst [stack, setStack] = useState<Technology[]([]);
We used it in App.tsx to track selected technologies, and in Navbar.tsx for menuOpen

4. What does the useEffect hook do, and why did you need it to load the JSON data?

Ans:- useEffect runs code automatically after the component renders--good for things like fetching data.I used it in useTechnologies.ts to load the JSON file once when the app starts:

5. Why does every item in a .map() list need a unique key prop?

Ans:- React uses key to know which item is which when the list changes.

6. What is conditional rendering? Show one place you used it?

Ans:- Conditional rendering means showing different UI based on a condition (like an if/else, but inside JSX). Example from YourStack.tsx

{count === 0 ? (
  <div>Your stack is empty.</div>
) : (
  <div>{/* list of stack items */}</div>
)};

7. How do you pass data from a parent to a child, and how does a child send something back?

Ans: Parent → Child: through props. Example: App.tsx passes stack to YourStack:

<YourStack stack={stack} onRemove={handleRemove} />

Child → Parent: the parent passes a function as a prop, and the child calls that function. Example: YourStack calls onRemove(tech.id) when you click ✕, which runs handleRemove back in App.tsx. This is how data "flows back up" — not directly, but through a callback function.