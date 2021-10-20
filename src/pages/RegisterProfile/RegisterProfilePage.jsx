import React from "react";
import RegisterProfileContainer from "../../containers/RegisterProfileContainer/RegisterProfileContainer";
import DefaultTemplate from "../../template/DefaultTemplate";

const RegisterProfilePage = () => {
  return (
    <>
      <DefaultTemplate>
        <RegisterProfileContainer />
      </DefaultTemplate>
    </>
  );
};

export default RegisterProfilePage;
