# useState

---

## 1. What it does

`useState` is a built-in React hook that lets you add state to functional components.

- Replaces `this.state` and `this.setState` from class components.
- Returns a state variable and a function to update it.
- Causes the component to re-render whenever the state changes.

---

## 2. When to use it

- To store any reactive data in a component.

Examples:

- Form input values
- Counters or toggles
- Lists or fetched data

---

## 3. Rules / Key Points

```js
const [state, setState] = useState(initialValue);
