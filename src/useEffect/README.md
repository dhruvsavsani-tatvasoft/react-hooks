# useEffect

`useEffect` is a built-in React hook that lets you perform side effects in functional components.

---

## What does `useEffect` do?

Side effects are operations that happen outside of rendering, such as:

- Fetching data from an API
- Updating the DOM directly
- Setting up subscriptions or timers
- Logging or analytics

---

## When to use it?

- Running code after the component renders
- Fetching data on mount or when dependencies change
- Cleaning up resources like timers or subscriptions
- Responding to state or prop changes

---

## Rules / Key Points

```js
useEffect(() => {
  // Effect code here
  return () => {
    // Cleanup code here (optional)
  };
}, [dependencies]);
