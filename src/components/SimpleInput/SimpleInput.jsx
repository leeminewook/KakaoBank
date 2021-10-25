import React from "react";
import "./SimpleInput.css";
import { useRef } from "react";

const SimpleInput = ({ refNextInput }) => {
  return (
    <>
      <input
        type="text"
        className="simpleInput"
        maxLength="1"
        onChange={refNextInput}
        useRef="1"
      />
      <input
        type="text"
        className="simpleInput"
        maxLength="1"
        onChange={refNextInput}
        useRef="2"
      />
      <input type="text" className="simpleInput" maxLength="1" />
      <input type="text" className="simpleInput" maxLength="1" />
      <input type="text" className="simpleInput" maxLength="1" />
      <input type="text" className="simpleInput" maxLength="1" />
    </>
  );
};

export default SimpleInput;
