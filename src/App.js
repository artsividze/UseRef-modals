import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";

function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setTheme("blue");
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }
  return (
    <>
      <Buttons />
    </>
  );
}

export default App;
