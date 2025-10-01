import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
});

function UseCallbackApp() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function would be recreated every render
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []); // Empty array → function never changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default UseCallbackApp;