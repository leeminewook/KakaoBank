import React from "react";
import SimpleInputContainer from "../../containers/SimpleInput/SimpleInputContainer";
import "./SimpleLogin.css";
import { useHistory } from "react-router-dom";
const SimpleLogin = () => {
  const history = useHistory();
  return (
    <>
      <div className="SimpleLoginForm">
        <div className="SimpleLoginTitle">간편 로그인</div>
        <div className="SimpleLoginInputDiv">
          <SimpleInputContainer i="6" />
        </div>
        <div className="SimpleLoginSubmitDiv">
          <button
            className="SimpleLoginSubmitBtn kakaoBtn"
            onClick={() => {
              history.push("/main");
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
