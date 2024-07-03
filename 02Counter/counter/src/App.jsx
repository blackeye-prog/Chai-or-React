import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // const addValue = () => {
  //   if (counter >= 20) {
  //     alert("Limit exceed");
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // };
  // const removeValue = () => {
  //   setCounter(counter - 1);
  // };
  // const resetValue = function () {
  //   setCounter(0);
  // };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          if (counter >= 20) {
            setCounter(0);
          } else {
            setCounter(counter + 1);
          }
        }}
      >
        Add Value{" "}
      </button>
      <br />
      <button
        onClick={() => {
          if (counter <= 0) {
            alert("Reset value");
          } else {
            setCounter(counter - 1);
          }
        }}
      >
        Remove Value
      </button>
      <br />
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset Value
      </button>
    </div>
  );
}

export default App;
