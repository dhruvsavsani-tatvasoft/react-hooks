# useMemo

## 1. What it does

`useMemo` is a built-in React hook that **memoizes the result of a computation**.

- React remembers the returned value and only recomputes it if dependencies change.
- Helps optimize performance for expensive calculations.
- Prevents unnecessary recalculations on every render.

---

## 2. When to use it

- Expensive calculations that depend on state or props.
- Filtering or sorting large lists.
- Creating derived data from props/state.
- Avoid unnecessary re-renders or recalculations.

---

## 3. Rules / Key Points

```js
const memoizedValue = useMemo(() => {
  // expensive computation
  return computeSomething();
}, [dependencies]);
