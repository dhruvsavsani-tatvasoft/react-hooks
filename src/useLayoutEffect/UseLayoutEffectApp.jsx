import { useState, useRef, useLayoutEffect } from "react";

function UseLayoutEffectApp() {
  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    // Measure the width of the box before paint
    const boxWidth = boxRef.current.getBoundingClientRect().width;
    setWidth(boxWidth);
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{ width: "50%", height: "50px", background: "lightblue" }}
      >
        Box
      </div>
      <p>Box width: {width}px</p>
    </div>
  );
}

export default UseLayoutEffectApp;
