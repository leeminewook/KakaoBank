import React from "react";
import { useHistory } from "react-router-dom";
import "./SendMoneyValue.css";
const SendMoneyValue = () => {
  const history = useHistory();
  return (
    <>
      <div className="SendMoneyValueForm">
        <div>
          <div className="SendMoneyValue-title">토스 123-4567891-012</div>
          <div
            className="SendMoneyValuecancle cancle"
            onClick={() => {
              history.push("/main");
            }}
          >
            취소
          </div>
        </div>
        <div className="SendMoneyValue-options">
          <div className="SendMoneyValue-money">0원</div>
          <div className="SendMoneyValue-money-Subtitle">수수료 : 500원</div>
          <div className="SendMoneyValue-InputDiv">
            <input
              type="text"
              className="SendMoneyValue-input grayInput"
              placeholder="내 용돈 통장 : 20,000원"
            />
          </div>
        </div>
        <div className="SendMoneyValue-NextBtnDiv">
          <button
            className="SendMoneyValue-NextBtnDiv kakaoBtn"
            onClick={() => {
              history.push("/sendmoney/password");
            }}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default SendMoneyValue;
