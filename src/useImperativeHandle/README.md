# useImperativeHandle

`useImperativeHandle` is a built-in React hook that lets you customize the instance value exposed to parent components when using `ref`.

---

## What does `useImperativeHandle` do?

- Normally, when you attach a ref to a component, the parent gets access to the DOM node or component instance.
- `useImperativeHandle` lets you expose only specific methods or properties to the parent.
- Helps hide internal implementation details and expose a clean API.

---

## When to use it?

- Building reusable components that need to expose specific methods to parent components.
- Example: custom input components with `.focus()` or `.clear()` methods.
- Avoid exposing internal state or unnecessary details.

---

## Rules / Key Points

```js
useImperativeHandle(ref, () => ({
  method1: () => { /* ... */ },
  method2: () => { /* ... */ }
}), [dependencies]);
