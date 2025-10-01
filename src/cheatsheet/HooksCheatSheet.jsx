// ✅ Ultimate React Hooks Cheatsheet (React 18+ + Experimental Hooks)
import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useMemo,
  useCallback,
  createContext,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  useTransition,
  useDeferredValue,
  useId,
  useSyncExternalStore,
  useInsertionEffect,
} from "react";

// ------------------------------
// 1. useState
// ------------------------------
function UseStateExample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>useState</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

// ------------------------------
// 2. useEffect
// ------------------------------
function UseEffectExample() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <h3>useEffect</h3>
      <p>Timer: {time}s</p>
    </div>
  );
}

// ------------------------------
// 3. useContext
// ------------------------------
const ThemeContext = createContext({ bg: "black", text: "white" });
function UseContextExample() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h3>useContext</h3>
      <button style={{ background: theme.bg, color: theme.text }}>
        Themed Button
      </button>
    </div>
  );
}

// ------------------------------
// 4. useRef
// ------------------------------
function UseRefExample() {
  const inputRef = useRef();
  return (
    <div>
      <h3>useRef</h3>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}

// ------------------------------
// 5. useReducer
// ------------------------------
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h3>useReducer</h3>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
    </div>
  );
}

// ------------------------------
// 6. useMemo
// ------------------------------
function UseMemoExample({ num }) {
  const double = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]);
  return (
    <div>
      <h3>useMemo</h3>
      <p>{num} * 2 = {double}</p>
    </div>
  );
}

// ------------------------------
// 7. useCallback
// ------------------------------
function Button({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}
function UseCallbackExample() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  return (
    <div>
      <h3>useCallback</h3>
      <p>{count}</p>
      <Button onClick={increment} />
    </div>
  );
}

// ------------------------------
// 8. Custom Hook
// ------------------------------
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then((res) => res.json()).then(setData);
  }, [url]);
  return data;
}
function CustomHookExample() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      <h3>Custom Hook</h3>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

// ------------------------------
// 9. useLayoutEffect
// ------------------------------
function UseLayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const divRef = useRef();
  useLayoutEffect(() => {
    setWidth(divRef.current.offsetWidth);
  }, []);
  return (
    <div>
      <h3>useLayoutEffect</h3>
      <div ref={divRef} style={{ width: "200px", border: "1px solid red" }}>
        Box
      </div>
      <p>Measured width: {width}px</p>
    </div>
  );
}

// ------------------------------
// 10. useImperativeHandle + forwardRef
// ------------------------------
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));
  return <input ref={inputRef} {...props} />;
});
function UseImperativeHandleExample() {
  const ref = useRef();
  return (
    <div>
      <h3>useImperativeHandle</h3>
      <FancyInput ref={ref} />
      <button onClick={() => ref.current.focus()}>Focus from Parent</button>
    </div>
  );
}

// ------------------------------
// 11. useTransition
// ------------------------------
function UseTransitionExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const items = Array.from({ length: 2000 }, (_, i) => e.target.value + i);
      setList(items);
    });
  };

  return (
    <div>
      <h3>useTransition</h3>
      <input value={input} onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <ul>{list.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
}

// ------------------------------
// 12. useDeferredValue
// ------------------------------
function UseDeferredValueExample() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const list = Array.from({ length: 2000 }, (_, i) => deferredQuery + i);
  return (
    <div>
      <h3>useDeferredValue</h3>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>{list.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
}

// ------------------------------
// 13. useId
// ------------------------------
function UseIdExample() {
  const id = useId();
  return (
    <div>
      <h3>useId</h3>
      <label htmlFor={id}>Enter Text: </label>
      <input id={id} type="text" />
    </div>
  );
}

// ------------------------------
// 14. useSyncExternalStore
// ------------------------------
function useWindowWidth() {
  return useSyncExternalStore(
    (callback) => {
      window.addEventListener("resize", callback);
      return () => window.removeEventListener("resize", callback);
    },
    () => window.innerWidth
  );
}
function UseSyncExternalStoreExample() {
  const width = useWindowWidth();
  return (
    <div>
      <h3>useSyncExternalStore</h3>
      <p>Window width: {width}px</p>
    </div>
  );
}

// ------------------------------
// 15. useInsertionEffect
// ------------------------------
function UseInsertionEffectExample() {
  const [color, setColor] = useState("blue");
  useInsertionEffect(() => {
    console.log("Inserting CSS effect before paint:", color);
  }, [color]);
  return (
    <div>
      <h3>useInsertionEffect</h3>
      <button onClick={() => setColor(color === "blue" ? "red" : "blue")}>
        Change Color
      </button>
      <p style={{ color }}>Color: {color}</p>
    </div>
  );
}

// ------------------------------
// 16. useActionState (experimental)
// ------------------------------
function UseActionStateExample() {
  const [state, setState] = useState("idle");

  // emulate an action state
  const handleAction = () => {
    setState("pending");
    setTimeout(() => setState("success"), 1000);
  };

  return (
    <div>
      <h3>useActionState (experimental)</h3>
      <button onClick={handleAction}>Run Action</button>
      <p>State: {state}</p>
    </div>
  );
}

// ------------------------------
// 17. useEffectEvent (experimental)
// ------------------------------
// function UseEffectEventExample() {
//   const handleClick = React.useEffectEvent(() => {
//     alert("Clicked!");
//   });

//   return (
//     <div>
//       <h3>useEffectEvent (experimental)</h3>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// ------------------------------
// 18. useOptimistic (experimental)
// ------------------------------
function UseOptimisticExample() {
  const [text, setText] = React.useState("Hello");
  const [optimisticText, setOptimisticText] = React.useOptimistic(
    text,
    (draft, newValue) => newValue
  );

  return (
    <div>
      <h3>useOptimistic (experimental)</h3>
      <input
        value={optimisticText}
        onChange={(e) => setOptimisticText(e.target.value)}
      />
      <p>Value: {optimisticText}</p>
    </div>
  );
}

// ------------------------------
// Main Demo App
// ------------------------------
export default function HooksCheatSheet() {
  return (
    <ThemeContext.Provider value={{ bg: "navy", text: "white" }}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>🔥 Ultimate React Hooks Cheatsheet (All Hooks + Experimental)</h2>
        <UseStateExample />
        <UseEffectExample />
        <UseContextExample />
        <UseRefExample />
        <UseReducerExample />
        <UseMemoExample num={5} />
        <UseCallbackExample />
        <CustomHookExample />
        <UseLayoutEffectExample />
        <UseImperativeHandleExample />
        <UseTransitionExample />
        <UseDeferredValueExample />
        <UseIdExample />
        <UseSyncExternalStoreExample />
        <UseInsertionEffectExample />
        <UseActionStateExample />
        {/* <UseEffectEventExample /> */}
        <UseOptimisticExample />
      </div>
    </ThemeContext.Provider>
  );
}
