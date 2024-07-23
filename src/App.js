import React, { useState, useRef } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

function App() {
  const [info, setInfo] = useState({
    index: 0,
    buttonName: "",
    visibility: "none",
  });
  const btnRef = useRef([]);

  const top = btnRef.current[info.index]?.offsetTop;

  const btnNames = ["Home", "Contacts", "About", "Schedule"];
  return (
    <>
      <div className="w-100px flex flex-row">
        <div className="flex flex-col w-[100px] mt-10">
          {btnNames.map((btnName, btnIndex) => (
            <Button
              key={btnIndex}
              text={btnName}
              btnIndex={btnIndex}
              refFunction={(refElement) => {
                if (refElement) btnRef.current[btnIndex] = refElement;
              }}
              setInfo={setInfo}
            />
          ))}
        </div>
        <Modal text={info.buttonName} top={top} visibility={info.visibility} />
      </div>
    </>
  );
}

export default App;
