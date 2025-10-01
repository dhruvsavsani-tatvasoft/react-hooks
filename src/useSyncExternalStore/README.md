# useSyncExternalStore

---

## 1. What it does

`useSyncExternalStore` is a built-in React 18 hook that allows your component to subscribe to external stores and safely read their state in a concurrent-safe way.

- Designed for React 18 concurrent rendering.
- Guarantees consistent UI even if React interrupts rendering.
- Ideal for integrating with external state management libraries like Redux, Zustand, or custom stores.

---

## 2. When to use it

- When consuming external state stores in React.
- Libraries like Redux, Zustand, Jotai, or custom store patterns.
- To avoid stale values or inconsistent UI in concurrent mode.

---

## 3. Rules / Key Points

```js
const state = useSyncExternalStore(
  subscribe,         // function to subscribe to store updates
  getSnapshot,       // function to get current store value
  getServerSnapshot  // optional function for SSR
);
