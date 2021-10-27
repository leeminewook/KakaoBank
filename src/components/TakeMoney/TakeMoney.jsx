import React from "react";
import "./TakeMoney.css";
import { useHistory } from "react-router-dom";
const TakeMoney = () => {
  const history = useHistory();
  return (
    <>
      <div className="TakeMoneyForm">
        <div className="TakeMoneyTitleDiv">
          <div className="TakeMoneyTitleDiv-title">
            민욱님의 계좌로 가져오기
          </div>
          <div
            className="TakeMoneyTitleDiv-cancle"
            onClick={() => {
              history.push("/main");
            }}
          >
            취소
          </div>
        </div>
        <div className="TakeMoneyOptions">
          <div className="TakeMoneyOptions-money">0원</div>
          <div className="TakeMoneyOptions-inputDiv">
            <input type="text" className="TakeMoneyOptions-inputDiv-input" />
          </div>
        </div>
        <div className="TakeMoneySubmitDiv">
          <button
            className="TakeMoneySubmitBtn kakaoBtn"
            onClick={() => {
              history.push("/take/password");
            }}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default TakeMoney;
