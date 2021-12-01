import React from "react";
import SimpleInputContainer from "../../containers/SimpleInput/SimpleInputContainer";
import "./SimpleLogin.css";
import { useHistory } from "react-router-dom";
const SimpleLogin = ({ simpleNum, setSimpleNum, trySimpleLogin }) => {
  const history = useHistory();

  return (
    <>
      <div className="SimpleLoginForm">
        <div className="SimpleLoginTitle">간편 로그인</div>
        <div className="SimpleLoginInputDiv">
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
        <div className="SimpleLoginSubmitDiv">
          <button
            className="SimpleLoginSubmitBtn kakaoBtn"
            onClick={() => {
              trySimpleLogin(simpleNum);
            }}
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default SimpleLogin;
