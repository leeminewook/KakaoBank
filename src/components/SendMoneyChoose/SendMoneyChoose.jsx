import React from "react";
import "./SendMoneyChoose.css";
import bankLogo from "../../assets/img/997BD7335D089C3023.png";
import modalBtnImg from "../../assets/img/right-arrow 1.png";
import { useHistory } from "react-router-dom";
import ModalContainer from "../../containers/Modal/ModalContainer";

const SendMoneyChoose = ({ isModal, setIsModal, modalName, setModalName }) => {
  const history = useHistory();
  return (
    <>
      <ModalContainer />
      <div className="SendmoneyChooseForm">
        <div>
          <div className="SendmoneyChooseTitle">이체</div>
          <div
            className="SendmoneyChooseCancle cancle"
            onClick={() => {
              history.push("/main");
            }}
          >
            닫기
          </div>
        </div>
        <div className="SendmoneyChooseOptoins">
          <div className="SendmoneyChooseOptions-ChooseBank">
            <div className="BankImgDiv">
              <img src={bankLogo} alt="" className="BankImg" />
            </div>
            <div className="ChooseBank-optoins">
              <div className="ChooseBank-optoins-name">
                <div className="ChooseBankName">은행 선택</div>
                <div className="ChooseBankSubtitle">입금 은행</div>
              </div>
              <div className="ChooseBank-optoins-buttonDiv">
                <img
                  src={modalBtnImg}
                  alt=""
                  className="modalBtnImg"
                  onClick={() => {
                    setIsModal(!isModal);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="SendmoneyChooseOptoins-inputDiv">
            <input
              type="text"
              className="SendmoneyChooseOptoins-input grayInput"
              placeholder="입금할 계좌번호 입력"
            />
          </div>
        </div>
        <div className="SendmoneyChooseOptoins-btnDiv">
          <button
            className="SendmoneyChooseOptoinsBtn nextBtn"
            onClick={() => {
              setIsModal(!isModal);
            }}
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};

export default SendMoneyChoose;
