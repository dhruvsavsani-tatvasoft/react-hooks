# useActionState

A simple custom React hook to manage the state of asynchronous actions (e.g., API calls, form submissions) by tracking their lifecycle states like `idle`, `loading`, `success`, and `error`.

---

## What is `useActionState`?

`useActionState` helps you manage action states cleanly without juggling multiple `useState` variables. It tracks:

- Whether the action is loading
- If it succeeded
- If it failed (and stores the error)

---

## When to use it?

- API requests (GET, POST, PUT, DELETE)
- Form submissions
- Any asynchronous operation that has multiple states

---

## Hook API

Returns an object with:

| Property | Type     | Description                              |
| -------- | -------- | -------------------------------------  |
| `state`  | `string` | Current state: `'idle'`, `'loading'`, `'success'`, or `'error'` |
| `error`  | `Error`  | The error object if the action fails   |
| `start`  | `func`   | Function to trigger the async action   |
| `reset`  | `func`   | Resets the state back to `'idle'`      |

---

## Example Implementation

```jsx
import { useState } from "react";

function useActionState() {
  const [state, setState] = useState("idle");
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
