# useDeferredValue

`useDeferredValue` is a built-in React hook (introduced in React 18) that defers updating a value until less urgent work is completed, helping keep the UI responsive during expensive renders.

---

## What does `useDeferredValue` do?

- Defers updating a value when React is busy with higher priority updates (e.g., typing).
- Helps maintain UI responsiveness during expensive computations or rendering.
- Ideal for optimizing performance in concurrent React apps.

---

## When to use it?

- Filtering or searching large lists or tables as you type.
- Any expensive rendering task where you want to avoid blocking user input.
- To optimize performance with concurrent React features.

---

## Rules / Key Points

- Returns a deferred version of the given value.
- The deferred value lags behind the actual value when React is busy.
- Works well with React 18’s concurrent features.

```js
const deferredValue = useDeferredValue(value);
