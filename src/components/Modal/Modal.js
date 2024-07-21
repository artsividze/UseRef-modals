import React, { useState } from "react";
// import "./Modal.css";

export default function Modal(props, style) {
  console.log(props.style);
  return (
    <>
      <div className="modal">
        <p style={props.style}>{props.data}</p>
      </div>
    </>
  );
}
