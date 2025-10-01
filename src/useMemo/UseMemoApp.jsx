import React, { useState, useMemo } from "react";

function UseMemoApp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Expensive computation (simulate delay)
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    const computeFactorial = n => {
      return n <= 1 ? 1 : n * computeFactorial(n - 1);
    };
    return computeFactorial(count);
  }, [count]); // Recompute only when count changes

  return (
    <div>
      <h1>Factorial of {count}: {factorial}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Typed text: {text}</p>
    </div>
  );
}

export default UseMemoApp;
