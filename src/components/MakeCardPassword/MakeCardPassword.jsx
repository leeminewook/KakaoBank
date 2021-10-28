import React from "react";
import MakeCardTitle from "../MakeCardTitle/MakeCardTitle";
import "./MakeCardPassword.css";
import SimpleInputContainer from "../../containers/SimpleInput/SimpleInputContainer";
import { useHistory } from "react-router-dom";
const MakeCardPassword = () => {
  const history = useHistory();

  return (
    <>
      <div className="MakeCardPasswordForm">
        <MakeCardTitle />
        <div className="MakeCardPasswordTitle">마지막 단계에요!</div>
        <div className="MakeCardpasswordSubTitle">
          입출금 시 사용할 비밀번호를
          <br /> 설정해주세요
        </div>
        <div className="MakeCardPasswordSimpleInputDiv">
          <SimpleInputContainer i="4" />
        </div>
        <div className="MakeCardPasswordSubmitDiv">
          <button
            className="MakeCardPasswordSubmitBtn kakaoBtn"
            onClick={() => {
              history.push("/makecard/success");
            }}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default MakeCardPassword;
