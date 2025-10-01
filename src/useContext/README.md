# useContext

`useContext` is a built-in React hook that allows functional components to consume data from a React Context.

---

## What does `useContext` do?

- Provides direct access to the value of a React Context inside functional components.
- Helps avoid prop drilling by sharing data across multiple components.
- Commonly used for theming, user authentication, localization, and other global data.

---

## When to use it?

- Managing themes (e.g., dark/light mode)
- User authentication state
- Language or localization settings
- Any global data shared across many components

---

## Rules

1. Create a Context with `React.createContext()`.
2. Provide a value using `Context.Provider` at a higher level in the component tree.
3. Consume the context using `useContext(MyContext)` inside functional components.
4. Always pass the context object (not the provider) to `useContext`.

---

## Example Implementation

```jsx
import React, { createContext, useContext, useState } from "react";

// 1. Create a Context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provide the value
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemeButton />
    </div>
  );
}

function ThemeButton() {
  // 3. Consume the context value
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        backgroundColor: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Current Theme: {theme}
    </button>
  );
}

export default App;
