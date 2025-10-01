# useInsertionEffect

> ⚠️ Note: `useInsertionEffect` is an advanced React 18 hook, rarely needed in app code. Mainly used by libraries like styled-components or MUI for injecting styles before layout.

---

## What does `useInsertionEffect` do?

- Runs code to insert styles or perform DOM changes **before React paints** the screen.
- Runs earlier than `useEffect` or `useLayoutEffect`.
- Ensures styles are applied immediately, preventing Flash of Unstyled Content (FOUC).

---

## When to use it?

- Injecting dynamic styles in libraries.
- Preventing layout shifts caused by late-applied CSS.
- Mostly used by library authors; rarely needed in typical apps.

---

## Rules / Key Points

```js
useInsertionEffect(() => {
  // Insert styles or DOM updates
  return () => {
    // Cleanup if needed
  };
}, [dependencies]);
