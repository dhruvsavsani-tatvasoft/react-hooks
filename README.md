# React Hooks Master Cheat Sheet & Example Apps

Welcome to the ultimate React Hooks resource repository!  
This project contains **detailed cheat sheets**, **quick reference tables**, **mini-guides**, and **live example apps** for all major React hooks, including built-in and experimental hooks introduced in React 18+.

---

## Table of Contents

1. [Overview](#overview)  
2. [React Hooks Cheat Sheets & Mini-Guides](#react-hooks-cheat-sheets--mini-guides)  
3. [Example Apps](#example-apps)  
4. [How to Use](#how-to-use)  
5. [Hooks Covered](#hooks-covered)  
6. [Contributing](#contributing)  
7. [License](#license)

---

## Overview

This project aims to provide a **comprehensive learning and revision tool** for React Hooks, combining:

- **Detailed explanations** for each hook  
- **Practical example code snippets**  
- **Quick reference tables** with 1-line purposes and examples  
- **Mini-guides** for interview prep and daily coding reference  
- **Live demo components** showcasing usage  

Whether you are a beginner or advanced React developer, this repo helps you master hooks effectively.

---

## React Hooks Cheat Sheets & Mini-Guides

### 1. Full Text-Based Cheat Sheet / Mind Map (Categorized)

- **State Hooks:** useState, useReducer, useOptimistic  
- **Effect Hooks:** useEffect, useLayoutEffect, useInsertionEffect, useEffectEvent  
- **Performance / Memoization Hooks:** useMemo, useCallback, useDeferredValue, useTransition  
- **Reference / DOM Hooks:** useRef, useImperativeHandle  
- **Context / Store Hooks:** useContext, useSyncExternalStore  
- **Concurrent / Experimental Hooks:** useId, useDebugValue, useActionState

### 2. Quick Reference Table (1-Line Purpose + Example)

| Hook                | Purpose                         | Example                             |
|---------------------|--------------------------------|-----------------------------------|
| useState            | Add state to functional comps   | `const [count, setCount] = useState(0);` |
| useReducer          | Manage complex state            | `const [state, dispatch] = useReducer(reducer, initialState);` |
| useOptimistic       | Optimistic UI updates           | `const [likes, addLike] = useOptimistic(0, (prev, action) => prev + action);` |
| useEffect           | Run side effects after render   | `useEffect(() => fetchData(), []);` |
| useLayoutEffect     | Run effect before browser paint | `useLayoutEffect(() => measureDOM(), []);` |
| useInsertionEffect  | Insert styles before paint      | `useInsertionEffect(() => insertStyles(), []);` |
| useEffectEvent      | Stable event callbacks          | `const onClick = useEffectEvent(() => console.log(count));` |
| useMemo             | Memoize expensive computation   | `const value = useMemo(() => computeHeavy(), [dep]);` |
| useCallback         | Memoize functions               | `const fn = useCallback(() => doSomething(), [dep]);` |
| useDeferredValue    | Defer low-priority updates      | `const deferred = useDeferredValue(text);` |
| useTransition       | Mark low-priority updates       | `const [isPending, startTransition] = useTransition();` |
| useRef              | Persist mutable values or DOM refs | `const inputRef = useRef();` |
| useImperativeHandle | Customize what ref exposes      | `useImperativeHandle(ref, () => ({ focus: () => {} }));` |
| useContext          | Consume React context           | `const value = useContext(MyContext);` |
| useSyncExternalStore| Subscribe safely to external stores | `const state = useSyncExternalStore(subscribe, getSnapshot);` |
| useId               | Generate stable unique IDs      | `const id = useId();` |
| useDebugValue       | Show custom debug info in DevTools | `useDebugValue(state);` |
| useActionState      | Manage async action state (experimental) | `const [state, runAction] = useActionState(action);` |

### 3. Mini-Guide by Category with Usage Examples

Each hook includes:

- **Purpose**  
- **Usage example snippet**  
- **When and why to use it**

Perfect for quick interview prep or as a handy coding reference.

---

## Example Apps

This repo also contains React components demonstrating practical usage of hooks, including but not limited to:

- `UseStateApp` (counter and form input examples)  
- `UseReducerApp` (complex state management)  
- `UseTransitionApp` (concurrent UI updates)  
- `UseSyncExternalStoreApp` (external store subscription)  
- `UseDeferredValueApp`, `UseCallbackApp`, `UseMemoApp`, and many more...

---

## How to Use

1. **Clone the repo**

   ```bash
   git clone https://github.com/dhruvsavsani-tatvasoft/react-hooks.git
   cd react-hooks-cheatsheet

2. **Install dependencies**

   ```bash
   npm install

3. **Run the app locally**

   ```bash
   npm start

4. **View examples**

Uncomment any of the example components in `App.jsx` to see it in action.

Use cheat sheets and mini-guides in the `docs` folder or wherever you maintain your notes.

---

## Hooks Covered

| Category               | Hooks                                                      |
|------------------------|------------------------------------------------------------|
| **State**              | useState, useReducer, useOptimistic                         |
| **Effect**             | useEffect, useLayoutEffect, useInsertionEffect, useEffectEvent |
| **Performance**        | useMemo, useCallback, useDeferredValue, useTransition       |
| **Refs / DOM**         | useRef, useImperativeHandle                                 |
| **Context / Store**    | useContext, useSyncExternalStore                            |
| **Concurrent / Experimental** | useId, useDebugValue, useActionState                  |

---

## Contributing

Contributions and feedback are welcome!  
Feel free to open issues or submit pull requests to improve examples, add hooks, or enhance documentation.

---

## License

This project is licensed under the MIT License.
