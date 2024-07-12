import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count * step);
  return (
    <>
      <button id="MinusStep" onClick={() => setStep((s) => s - 1)}>
        -
      </button>
      Step: {step}
      <button id="AddStep" onClick={() => setStep((s) => s + 1)}>
        +
      </button>
      <button id="MinusCount" onClick={() => setCount((s) => s - 1)}>
        -
      </button>
      Count: {count}
      <button id="AddCount" onClick={() => setCount((s) => s + 1)}>
        +
      </button>
      <br />
      <br />
      <br />
      <span>
        {" "}
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count * step} days from today is `
          : `${count * step} days ago was`}
      </span>
      <label> {date.toDateString()}</label>
    </>
  );
}
