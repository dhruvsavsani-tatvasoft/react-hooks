import { useInsertionEffect } from "react";

function UseInsertionEffectApp() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .dynamic {
        color: red;
        font-weight: bold;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // cleanup
    };
  }, []);

  return <h1 className="dynamic">This text is styled immediately!</h1>;
}

export default UseInsertionEffectApp;
