# useOptimistic

⚠️ Note: `useOptimistic` is an experimental React 18+ hook designed for optimistic UI updates, mainly in concurrent React apps.

---

## 1. What it does

`useOptimistic` lets you update the UI immediately **before** an async operation completes, while keeping the state consistent with the actual result later.

- Helps create instant feedback for users (optimistic updates).
- Common in form submissions, likes, counters, or toggles.
- Works well with concurrent rendering.

---

## 2. When to use it

- API calls where you want immediate UI response.
- Examples:
  - Incrementing a counter.
  - Adding/removing items from a list.
  - Marking “like” on a post.
- When waiting for the server response should **not block** UI.

---

## 3. Rules / Key Points

```js
const [state, dispatch] = useOptimistic(initialValue, reducer);
