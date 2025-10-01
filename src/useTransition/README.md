# useTransition

---

## 1. What it does

`useTransition` is a built-in React 18 hook that lets you mark state updates as “low priority”, keeping the UI responsive for high-priority updates like typing.

- Useful for concurrent rendering.
- Helps avoid UI jank during expensive rendering.
- Returns a boolean for pending state and a function to start a transition.

---

## 2. When to use it

- Large lists or tables that filter or sort while typing.
- UI updates that are expensive but not urgent.
- Preventing input lag during heavy rendering.

---

## 3. Rules / Key Points

```js
const [isPending, startTransition] = useTransition();
