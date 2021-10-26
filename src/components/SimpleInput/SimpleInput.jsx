import React from "react";
import "./SimpleInput.css";
import { useRef } from "react";

const SimpleInput = ({ refNextInput, i }) => {
  const inputs = [];
  const numRef = [];
  for (let k = 0; k < i; k++) {
    inputs.push(
      <input
        key={k}
        type="text"
        name={k}
        className="simpleInput"
        maxLength="1"
        onChange={refNextInput}
        ref={(k) => numRef.push(k)}
      />
    );
  }
  return (
    <>
      {console.log(inputs.map((input, index) => input))}
      {inputs.map((input, index) => (
        <>{input}</>
      ))}
    </>
  );
};

export default SimpleInput;
