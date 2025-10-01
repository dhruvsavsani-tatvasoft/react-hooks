# useLayoutEffect

## 1. What it does

`useLayoutEffect` is a built-in React hook that lets you run side effects **synchronously after all DOM mutations but before the browser paints**.

- Unlike `useEffect`, it **blocks the browser from painting** until the effect runs.
- Useful for reading or changing the DOM layout immediately.
- Ensures the user doesn’t see flickering or incorrect layout.

---

## 2. When to use it

- Measuring DOM elements (width, height, position).
- Adjusting scroll position or layout immediately after render.
- Synchronizing animations with layout.
- Avoiding flickering that happens if using `useEffect` for layout updates.

---

## 3. Rules / Key Points

```js
useLayoutEffect(() => {
  // Read or modify DOM here
  return () => {
    // Cleanup if needed
  };
}, [dependencies]);
