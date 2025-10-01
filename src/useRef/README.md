# useRef

---

## 1. What it does

`useRef` is a built-in React hook that creates a mutable reference which persists across renders.

- Can hold a DOM element reference or any mutable value.
- Changing a `.current` value does **not** trigger re-render.
- Often used for accessing DOM nodes or storing previous state/value.

---

## 2. When to use it

- Accessing DOM elements (focus input, measure size, scroll).
- Storing mutable values that survive renders (timers, previous props/state).
- Avoiding re-renders when value changes.

---

## 3. Rules / Key Points

```js
const ref = useRef(initialValue);
