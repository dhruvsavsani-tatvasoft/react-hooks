import useActionState from "./useActionState";

function UseActionStateApp() {
  const { state, error, start, reset } = useActionState();

  const handleClick = () => {
    start(async () => {
      // Simulate API call
      await new Promise((res, rej) => setTimeout(() => Math.random() > 0.5 ? res() : rej(new Error("Failed")), 1000));
    });
  };

  return (
    <div>
      <button onClick={handleClick} disabled={state === "loading"}>
        {state === "loading" ? "Submitting..." : "Submit"}
      </button>

      {state === "success" && <p>Action succeeded!</p>}
      {state === "error" && <p style={{ color: "red" }}>Error: {error.message}</p>}

      {(state === "success" || state === "error") && (
        <button onClick={reset}>Reset</button>
      )}
    </div>
  );
}

export default UseActionStateApp;
