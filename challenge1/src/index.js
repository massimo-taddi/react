import React from "react";
import ReactDOM from "react-dom/client";

const jonas = {
  name: "Jonas Schemdtmann",
  description: "bla bla bla fullStack",
  decorators: ["javascript", "react", "svelte"],
};

function App() {
  return (
    <>
      <table>
        <tr>
          <td>
            <img alt="immagine di jonas"></img>
          </td>
        </tr>
        <tr>{jonas.name}</tr>
        <tr>{jonas.description}</tr>
        <tr>{jonas.decorators.map((element) => element)}</tr>
      </table>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
