import { useState } from "react";

function useActionState() {
  const [state, setState] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const start = async (asyncAction) => {
    setState("loading");
    setError(null);
    try {
      await asyncAction();
      setState("success");
    } catch (err) {
      setState("error");
      setError(err);
    }
  };

  const reset = () => {
    setState("idle");
    setError(null);
  };

  return { state, error, start, reset };
}

export default useActionState;
