import React from "react";
import SimpleInput from "../../components/SimpleInput/SimpleInput";

const SimpleInputContainer = ({ i }) => {
  const refNextInput = (e) => {
    console.log(e);
    if (e.target.value.length === e.target.maxLength) {
      //   second.current.focus();
    }
  };

  return (
    <>
      <SimpleInput refNextInput={refNextInput} i={i} />
    </>
  );
};

export default SimpleInputContainer;
