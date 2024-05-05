import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  const myObj = {
    name: "khushi",
    surname: "maurya",
  };

  return (
    <>
      <h1 className="text-3xl text-white">Test</h1>
      {/* We cannot pass array as props to components */}
      {/* also the props must be an evaluted expression */}
      {/* <Card name="Shikha" button_text=[1,2,3] /> */}
      <Card name="Shikha" button_text="know more" />
      {/* but we can pass objects as props */}
      {/* <Card name="Shikha" button_text={myObj} /> */}
      <Card />
      <Card name="Samar" button_text="not a great person" />
    </>
  );
}

export default App;
