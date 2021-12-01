import React from "react";
import SimpleInputContainer from "../../containers/SimpleInput/SimpleInputContainer";
import "./SimpleRegister.css";
import { useHistory } from "react-router-dom";

const SimpleRegister = ({ simpleNum, setSimpleNum }) => {
  const history = useHistory();
  return (
    <>
      <div className="simpleRegisterForm">
        <div className="register-title">회원가입</div>
        <div className="simpleRegisterOptions">
          <div className="simpleRegisterOptionsTitle">
            간편인증번호를 입력하세요
          </div>
          <div className="simpleRegisterOptionsInputs">
            <input
              type="password"
              className="SimpleLoginInput"
              maxLength="6"
              value={simpleNum}
              onChange={(e) => {
                setSimpleNum(e.target.value);
              }}
            />
          </div>
          <div className="simpleRegisterOptoinsSubtitle">
            6자리 숫자를 입력하세요
          </div>
        </div>
        <div className="simpleRegisterSubmitDiv">
          <button
            className="simpleRegisterSubmitBtn kakaoBtn"
            onClick={() => {
              history.push("/profile");
            }}
          >
            프로필 설정하러 가기
          </button>
        </div>
      </div>
    </>
  );
};

export default SimpleRegister;
