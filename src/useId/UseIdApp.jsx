import { useId } from "react";

function UseIdApp() {
  const nameId = useId();
  const emailId = useId();

  return (
    <form>
      <div>
        <label htmlFor={nameId}>Name:</label>
        <input id={nameId} type="text" placeholder="Enter your name" />
      </div>

      <div>
        <label htmlFor={emailId}>Email:</label>
        <input id={emailId} type="email" placeholder="Enter your email" />
      </div>
    </form>
  );
}

export default UseIdApp;
