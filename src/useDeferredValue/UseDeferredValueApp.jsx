import { useState, useDeferredValue, useMemo } from "react";

function UseDeferredValueApp() {
  const [text, setText] = useState("");

  // 1. Defer the value of text
  const deferredText = useDeferredValue(text);

  // 2. Expensive computation (filtering large list)
  const items = useMemo(() => {
    console.log("Filtering items...");
    return Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`).filter(
      (item) => item.toLowerCase().includes(deferredText.toLowerCase())
    );
  }, [deferredText]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type to filter..."
        style={{ padding: "10px", width: "300px" }}
      />
      <p>Showing {items.length} items</p>
      <ul>
        {items.slice(0, 20).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseDeferredValueApp;
