import React from "react";
import SendMoneyPasswordContainer from "../../containers/SendMoneyPassword/SendMoneyPasswordContainer";
import DefaultTemplate from "../../template/DefaultTemplate";

const SendMoneyPasswordPage = () => {
  return (
    <>
      <DefaultTemplate>
        <SendMoneyPasswordContainer />
      </DefaultTemplate>
    </>
  );
};

export default SendMoneyPasswordPage;
