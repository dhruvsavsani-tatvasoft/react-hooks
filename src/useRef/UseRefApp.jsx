import React, { useRef } from "react";

function UseRefApp() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // focus the input
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default UseRefApp;
