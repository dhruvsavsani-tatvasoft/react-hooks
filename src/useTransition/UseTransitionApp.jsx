import { useState, useTransition } from "react";

function UseTransitionApp() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value); // high-priority update

    // low-priority update
    startTransition(() => {
      const filtered = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`).filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setList(filtered);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type to filter..."
      />
      {isPending && <p>Loading filtered list...</p>}
      <ul>
        {list.slice(0, 20).map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseTransitionApp;
