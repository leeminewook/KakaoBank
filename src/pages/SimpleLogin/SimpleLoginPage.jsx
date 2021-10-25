import React from "react";
import SimpleLoginContainer from "../../containers/SimpleLogin/SimpleLoginContainer";
import DefaultTemplate from "../../template/DefaultTemplate";
const SimpleLoginPage = () => {
  return (
    <>
      <DefaultTemplate>
        <SimpleLoginContainer />
      </DefaultTemplate>
    </>
  );
};

export default SimpleLoginPage;
