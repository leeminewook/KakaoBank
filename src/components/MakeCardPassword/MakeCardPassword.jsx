import React from "react";
import MakeCardTitle from "../MakeCardTitle/MakeCardTitle";
import "./MakeCardPassword.css";
import SimpleInputContainer from "../../containers/SimpleInput/SimpleInputContainer";
import { useHistory } from "react-router-dom";
const MakeCardPassword = ({ password, setPassowrd, tryMakeCard }) => {
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
          <input
            type="password"
            className="SimpleLoginInput"
            maxLength="4"
            value={password}
            onChange={(e) => {
              setPassowrd(e.target.value);
            }}
          />
        </div>
        <div className="MakeCardPasswordSubmitDiv">
          <button
            className="MakeCardPasswordSubmitBtn kakaoBtn"
            onClick={() => {
              tryMakeCard();
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
