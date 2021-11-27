import React from "react";
import { useHistory } from "react-router";
import SimpleInputContainer from "../../containers/SimpleInput/SimpleInputContainer";
import "./SendMoneyPassword.css";

const SendMoneyPassword = () => {
  const history = useHistory();
  return (
    <>
      <div className="SendMoneyPasswordForm">
        <div className="SendMoneyPassword-title">계좌 비밀번호</div>
        <div className="SendMoneyPassword-SimpleInputDiv">
          <SimpleInputContainer i="4" />
        </div>
        <div className="SendMoneyPasswordNextBtnDiv">
          <button
            className="SendMoneyPasswordNextBtn kakaoBtn"
            onClick={() => {
              history.push("/sendmoney/success");
            }}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default SendMoneyPassword;
