import { useState, useEffect, useEffectEvent } from "react";

function UseEffectEventApp() {
  const [count, setCount] = useState(0);

  // Create a stable event handler
  const tick = useEffectEvent(() => {
    setCount(prev => prev + 1);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      tick(); // always uses latest state
    }, 1000);

    return () => clearInterval(interval);
  }, [tick]);

  return <h1>Count: {count}</h1>;
}

export default UseEffectEventApp;
