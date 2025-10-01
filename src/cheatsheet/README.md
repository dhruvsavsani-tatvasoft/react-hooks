# Ultimate React Hooks Cheatsheet

This folder contains a comprehensive React 18+ hooks cheatsheet component that demonstrates **all key React hooks**, including the experimental ones.

It’s designed as a **single-file master cheatsheet** to help you quickly understand and reference:

- Basic hooks like `useState`, `useEffect`, `useContext`, and more
- Performance hooks like `useMemo` and `useCallback`
- Layout and DOM hooks like `useLayoutEffect` and `useImperativeHandle`
- Concurrent hooks like `useTransition` and `useDeferredValue`
- New React hooks like `useId` and `useSyncExternalStore`
- Experimental hooks such as `useActionState`, `useEffectEvent`, and `useOptimistic`
- A simple custom hook example (`useFetch`)

## Usage

You can import and render the cheatsheet component anywhere in your app for a live demonstration of all hooks working together:

```jsx
import React from "react";
import HooksCheatSheet from "./HooksCheatSheet";

export default function App() {
  return <HooksCheatSheet />;
}
