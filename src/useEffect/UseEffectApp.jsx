import { useState, useEffect } from "react";

function UseEffectApp() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Effect to update document title on count change
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // Effect to fetch data once on mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  // Effect with cleanup (timer example)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running");
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default UseEffectApp;
