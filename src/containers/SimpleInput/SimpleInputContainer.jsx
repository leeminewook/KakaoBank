import React from "react";
import SimpleInput from "../../components/SimpleInput/SimpleInput";

const SimpleInputContainer = () => {
  const refNextInput = (e) => {
    console.log(e);
    if (e.target.value.length === e.target.maxLength) {
      //   second.current.focus();
    }
  };

  return (
    <>
      <SimpleInput refNextInput={refNextInput} />
    </>
  );
};

export default SimpleInputContainer;
