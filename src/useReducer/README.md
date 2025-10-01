# useReducer

---

## 1. What it does

`useReducer` is a built-in React hook that manages complex state logic in functional components.

- Works like Redux, but built-in to React.
- Good for multiple related state values or state transitions.
- Uses a reducer function to update state based on actions.

---

## 2. When to use it

- Complex forms with multiple fields.
- Components with multiple state transitions.
- Managing lists or nested objects.
- When state depends on previous state.

---

## 3. Rules / Key Points

```js
const [state, dispatch] = useReducer(reducer, initialState);
