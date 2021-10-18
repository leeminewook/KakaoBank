import React from "react";
import "./SimpleRegister.css";
const SimpleRegister = () => {
  return (
    <>
      <div className="simpleRegisterForm">
        <div className="simpleRegisterTitle">마지막 단계입니다</div>
        <div className="simpleRegisterOptions">
          <div className="simpleRegisterOptionsTitle">
            간편인증번호를 입력하세요
          </div>
          <div className="simpleRegisterOptionsInputs">인풋</div>
          <div className="simpleRegisterOptoinsSubtitle">
            6자리 숫자를 입력하세요
          </div>
        </div>
        <div className="simpleRegisterSubmitDiv">
          <button className="simpleRegisterSubmitBtn kakaoBtn">가입완료</button>
        </div>
      </div>
    </>
  );
};

export default SimpleRegister;
