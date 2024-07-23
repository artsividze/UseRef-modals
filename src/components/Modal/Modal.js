import React, { useState } from "react";
// import "./Modal.css";

export default function Modal(props) {
  return (
    <>
      <div>
        <button
          className="border border-solid border-[red] "
          style={{
            marginLeft: "20px",
            marginTop: `${props.top}px`,
            display: `${props.visibility}`,
          }}
        >
          {props.text}
        </button>
      </div>
    </>
  );
}
