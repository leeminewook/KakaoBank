import React from "react";
import SimpleInputContainer from "../../containers/SimpleInput/SimpleInputContainer";
import "./SimpleRegister.css";
import { useHistory } from "react-router-dom";

const SimpleRegister = () => {
  const history = useHistory();
  return (
    <>
      <div className="simpleRegisterForm">
        <div className="register-title">회원가입</div>
        <div className="simpleRegisterTitle">마지막 단계에요!</div>
        <div className="simpleRegisterOptions">
          <div className="simpleRegisterOptionsTitle">
            간편인증번호를 입력하세요
          </div>
          <div className="simpleRegisterOptionsInputs">
            <SimpleInputContainer i="6" />
          </div>
          <div className="simpleRegisterOptoinsSubtitle">
            6자리 숫자를 입력하세요
          </div>
        </div>
        <div className="simpleRegisterSubmitDiv">
          <button
            className="simpleRegisterSubmitBtn kakaoBtn"
            onClick={() => {
              history.push("/final");
            }}
          >
            가입완료
          </button>
        </div>
      </div>
    </>
  );
};

export default SimpleRegister;
