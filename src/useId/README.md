# useId

`useId` is a built-in React hook introduced in React 18 that generates unique, stable IDs for components.

---

## What does `useId` do?

- Generates unique IDs that remain stable across renders.
- Ensures uniqueness even with server-side rendering (SSR) and concurrent rendering.
- Useful for associating labels with inputs, accessibility attributes, and dynamic lists.

---

## When to use it?

- Form inputs and their labels (`id` + `htmlFor`).
- Dynamic lists needing unique IDs for elements.
- Accessibility attributes like `aria-*`.
- Anywhere a stable unique ID is required without manual generation.

---

## Rules / Key Points

```js
const id = useId();
