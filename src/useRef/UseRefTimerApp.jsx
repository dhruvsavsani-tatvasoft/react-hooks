import { useRef, useState } from "react";

function UseRefTimerApp() {
  const intervalRef = useRef();
  const [count, setCount] = useState(0);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default UseRefTimerApp;
