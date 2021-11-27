import React from "react";
import SendMoneyValueContainer from "../../containers/SendMoneyValue/SendMoneyValueContainer";
import DefaultTemplate from "../../template/DefaultTemplate";

const SendMoneyValuePage = () => {
  return (
    <>
      <DefaultTemplate>
        <SendMoneyValueContainer />
      </DefaultTemplate>
    </>
  );
};

export default SendMoneyValuePage;
