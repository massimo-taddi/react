import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  /*
  state data that a component can hold over time (multiple renders)
  "state variable"/"piece of state" single variable of a component state
  state is the entire page in that moment,

  State allows us to rerender a component

  */
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}></button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={function Previous() {
                if (step > 1) setStep((s) => s - 1);
              }}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={function Next() {
                if (step < 3) setStep((s) => s + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
