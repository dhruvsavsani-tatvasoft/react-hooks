import React, { useRef, forwardRef, useImperativeHandle, useState } from "react";

// Custom input component
const CustomInput = forwardRef((props, ref) => {
  const [value, setValue] = useState("");

  // Expose only focus and clear methods
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      setValue("");
    }
  }));

  const inputRef = useRef();

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Type something..."
    />
  );
});

function UseImperativeHandleApp() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <button onClick={() => inputRef.current.clear()}>Clear Input</button>
    </div>
  );
}

export default UseImperativeHandleApp;
