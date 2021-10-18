import React from "react";
import SimpleRegisterContainer from "../../containers/SimpleRegister/SimpleRegisterContainer";
import DefaultTemplate from "../../template/DefaultTemplate";

const SimpleRegisterPage = () => {
  return (
    <>
      <DefaultTemplate>
        <SimpleRegisterContainer />
      </DefaultTemplate>
    </>
  );
};

export default SimpleRegisterPage;
