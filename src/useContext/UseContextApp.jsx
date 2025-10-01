import { createContext, useContext, useState } from "react";

// 1. Create a Context
const ThemeContext = createContext();

function UseContextApp() {
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

export default UseContextApp;
