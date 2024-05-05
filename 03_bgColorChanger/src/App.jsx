import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="flex flex-wrap justify-center w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="gap-3 fixed flex flex-wrap justify-center bottom-12 bg-gray-400 items-center px-6 py-2 rounded-3xl">
        <button
          className="rounded-3xl text-white px-4 py-1"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="rounded-3xl text-white px-4 py-1"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="rounded-3xl text-white px-4 py-1"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="rounded-3xl text-white px-4 py-1"
          style={{ backgroundColor: "black" }}
          onClick={() => setColor("black")}
        >
          Black
        </button>
        <button
          className="rounded-3xl text-black px-4 py-1"
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          pink
        </button>
        <button
          className="rounded-3xl text-white px-4 py-1"
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          orange
        </button>
        <button
          className="rounded-3xl text-white px-4 py-1"
          style={{ backgroundColor: "purple" }}
          onClick={() => setColor("purple")}
        >
          purple
        </button>
        <button
          className="rounded-3xl text-black px-4 py-1"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          yellow
        </button>
      </div>
    </div>
  );
}

export default App;
