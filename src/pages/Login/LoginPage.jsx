import React from "react";
import LoginContainer from "../../containers/Login/LoginContainer";
import DefaultTemplate from "../../template/DefaultTemplate";

const LoginPage = () => {
  return (
    <>
      <DefaultTemplate>
        <LoginContainer />
      </DefaultTemplate>
    </>
  );
};

export default LoginPage;
