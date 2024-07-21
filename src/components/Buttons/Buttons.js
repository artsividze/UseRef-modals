import React, { useState, useRef } from "react";
import "./Buttons.css";
import Modal from "../Modal/Modal";

export default function Buttons() {
  const [coordinates, setCoordinates] = useState(0);
  const btnRef = useRef(null);

  const checkRef = (buttonName) => {
    let element = document.getElementById(`${buttonName}`);
    console.log(element.width);
    const clickedElement = element;
    const rect = clickedElement.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    const width = rect.width;
    setCoordinates([x, y, width]);
    btnRef.current = buttonName;
  };
  return (
    <>
      <div className="buttons">
        <div className="container">
          <button
            className="btn home"
            id="Home"
            value="Home"
            onClick={() => checkRef("Home")}
          >
            Home
          </button>
          <button
            className="btn contact"
            id="Contact"
            value={"Contact"}
            onClick={() => checkRef("Contact")}
          >
            Contact
          </button>
          <button
            className="btn about"
            id="About"
            value={"About"}
            onClick={() => checkRef("About")}
          >
            About
          </button>
          <button
            className="btn schedule"
            id="Schedule"
            value={"Schedule"}
            onClick={() => checkRef("Schedule")}
          >
            Schedule
          </button>
        </div>
        <Modal
          data={btnRef.current}
          style={{
            // position: "absolute",
            textAlign: "center",
            marginTop: `${coordinates[1]}px`,
            marginLeft: "20px",
            backgroundColor: "red",
            width: `${coordinates[2]}px`,
          }}
        />
      </div>
    </>
  );
}
