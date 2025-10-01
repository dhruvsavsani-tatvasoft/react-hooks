# useDebugValue

`useDebugValue` is a built-in React hook designed to help you debug custom hooks by displaying labels in React DevTools.

---

## What does `useDebugValue` do?

- Displays a label or formatted value for custom hooks in React DevTools.
- Does **not** affect app logic or UI.
- Purely a development and debugging tool.
- Especially helpful when creating complex custom hooks.

---

## When to use it?

- When building custom hooks.
- When you want to see the internal state or value of your hook directly in React DevTools for easier debugging.

---

## Rules / Key Points

- Pass any value to display in React DevTools: `useDebugValue(value);`
- Optionally pass a formatting function for better readability: `useDebugValue(value, formatFunction);`
- Typically used **inside** custom hooks.
- Does **not** cause re-renders.
- Only works in development mode.

---

## Example Implementation

```jsx
import { useState, useDebugValue } from "react";

// Custom hook to track online/offline status
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const updateStatus = () => setIsOnline(navigator.onLine);
  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);

  // Show status label in React DevTools
  useDebugValue(isOnline ? "Online" : "Offline");

  return isOnline;
}

function App() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h1>{isOnline ? "You are Online 🌐" : "You are Offline ❌"}</h1>
    </div>
  );
}

export default App;
