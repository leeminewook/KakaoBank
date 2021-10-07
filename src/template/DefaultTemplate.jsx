import React from "react";
import "./DefaultTemplate.css";

const DefaultTemplate = ({ children }) => {
  return (
    <>
      <div className="contant">{children}</div>
    </>
  );
};

export default DefaultTemplate;
