import React from "react";
import "./TakePassword.css";
import SimpleInputContainer from "../../containers/SimpleInput/SimpleInputContainer";
import { useHistory } from "react-router-dom";

const TakePassword = () => {
  const history = useHistory();
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
          <button
            className="TakePasswordSubmitBtn kakaoBtn"
            onClick={() => {
              history.push("/main");
            }}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default TakePassword;
