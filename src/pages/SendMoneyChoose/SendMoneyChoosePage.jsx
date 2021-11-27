import React from "react";
import SendMoneyChooseContainer from "../../containers/SendMoneyChoose/SendMoneyChooseContainer";
import DefaultTemplate from "../../template/DefaultTemplate";
const SendMoneyChoosePage = () => {
  return (
    <>
      <DefaultTemplate>
        <SendMoneyChooseContainer />
      </DefaultTemplate>
    </>
  );
};

export default SendMoneyChoosePage;
