import React from "react";
import "./SendMoneySuccess.css";
import success from "../../assets/img/Group 29.png";
import { useHistory } from "react-router";
const SendMoneySuccess = () => {
  const history = useHistory();
  return (
    <>
      <div className="SendMoneySuccessForm">
        <div className="SendMoneySuccessForm-title">이체 완료</div>
        <div className="SendMoneySuccessForm-titleOptions">
          <div className="titleOptions-ImgDiv">
            <img src={success} alt="" className="titleOptions-Img" />
          </div>
          <div className="titleOptions-cardNum">
            출금 계좌 : 123-4567891-012
          </div>
          <div className="titleOptions-Balance">이체 후 잔액 : 500원</div>
        </div>
        <div className="line"></div>
        <div className="SendMoneySuccessForm-subOptions">
          <div className="subOptions-name">
            <div className="subOptions-name-title">받는 사람</div>
            <div className="subOptions-name-value">임재현</div>
          </div>
          <div className="subOptions-sendMoney">
            <div className="subOptions-sendMoney-title">보낸 금액</div>
            <div className="subOptions-sendMoney-value">10,000원</div>
          </div>
          <div className="subOptions-Fee">
            <div className="subOptions-Fee-title">수수료</div>
            <div className="subOptions-Fee-value">500원</div>
          </div>
        </div>
        <div className="SendMoneySuccessSubmitDiv">
          <button
            className="SendMoneySuccessSubmitBtn kakaoBtn"
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

export default SendMoneySuccess;
