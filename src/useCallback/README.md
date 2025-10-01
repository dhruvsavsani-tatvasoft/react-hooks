# useCallback

`useCallback` is a built-in React hook that memoizes a function, returning a stable function reference that only changes if its dependencies change.

---

## What does `useCallback` do?

- Prevents unnecessary re-creation of functions on every render.
- Useful when passing functions as props to memoized child components to avoid needless re-renders.
- Often used together with `React.memo` for performance optimization.

---

## When to use it?

- When passing a function to a memoized child component.
- When a function is expensive to create repeatedly.
- To avoid unnecessary effects or re-renders triggered by changing function references.

---

## Rules

- Always pass an array of dependencies as the second argument.
- If dependencies don’t change, the memoized function stays the same.
- If dependencies change, a new function is created.

```jsx
const memoizedCallback = useCallback(() => {
  // function code here
}, [dependencies]);
