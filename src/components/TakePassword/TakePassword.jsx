import React from "react";
import "./TakePassword.css";
import SimpleInputContainer from "../../containers/SimpleInput/SimpleInputContainer";
const TakePassword = () => {
  return (
    <>
      <div className="TakePasswordForm">
        <div className="TakePasswordTitle">
          민욱님의 계좌
          <br />
          비밀번호
        </div>
        <div className="TakePasswordInputDiv">
          <SimpleInputContainer i="4" />
        </div>
        <div className="TakePasswordSubmitDiv">
          <button className="TakePasswordSubmitBtn kakaoBtn">확인</button>
        </div>
      </div>
    </>
  );
};

export default TakePassword;
