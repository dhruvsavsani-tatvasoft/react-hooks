# useEffectEvent

⚠️ **Note:** `useEffectEvent` is an experimental hook introduced in React 18+ for concurrent-safe event callbacks. It is designed to work smoothly with React’s concurrent rendering features.

---

## What does `useEffectEvent` do?

- Creates a stable event handler that always accesses the latest state or props without being recreated every render.
- Helps avoid stale closures (when callbacks capture outdated state).
- Useful for async operations, timers, or event listeners.
- Works better with concurrent rendering.

---

## When to use it?

- Event handlers in functional components.
- Callbacks relying on the latest state or props.
- Timers or subscriptions where a stable function reference is needed.

---

## Rules / Key Points

```js
const stableCallback = useEffectEvent((event) => {
  // callback code
});
