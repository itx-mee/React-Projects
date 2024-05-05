import { useState } from "react";
// ************IMPORTANT*******************
// WE don't need to import React from react in .jsx file 
// all html tags will be converted into object by bable(.jsx) itself
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const increase = function () {
    setCounter(counter + 1);
  };
  const decrease = function () {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>counter</h1>
      <button onClick={increase}>increment: {counter} </button>
      <button onClick={decrease}>decrement: {counter} </button>
    </>
  );
}

export default App;
