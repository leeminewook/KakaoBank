import React, { useState } from "react";
import { useHistory } from "react-router";
import BankCardContainer from "../../containers/BankCard/BankCardContainer";
import "./Modal.css";
const Modal = ({ isModal, modalName, onClose }) => {
  const history = useHistory();
  return (
    <>
      {isModal && (
        <div className="modal">
          <div
            className="modal-close"
            onClick={() => {
              onClose();
            }}
          ></div>
          {modalName === "Bank" ? (
            <div className="bankModal">
              <div
                className="bankModalCancle"
                onClick={() => {
                  onClose();
                }}
              >
                취소
              </div>
              <div className="bankModalTitle">은행선택</div>
              <div className="bankModalBankList">
                <BankCardContainer checkBank="list" />
                <BankCardContainer checkBank="list" />
                <BankCardContainer checkBank="list" />
                <BankCardContainer checkBank="list" />
              </div>
            </div>
          ) : (
            <div className="checkModal">
              <div className="checkModalTitle">
                <BankCardContainer checkBank="check" />
                <div className="checkModalTitleNum">123-4567891-012</div>
              </div>
              <div className="checkModalTitleOptoins">
                <div className="checkModalTitleOptionsName">임재현님</div>
                <div className="checkModalTitleOptionsText">
                  받는 사람 정보가 맞나요?
                </div>
              </div>
              <div className="checkModalSubmitDiv">
                <div className="checkModalSubmitDivNoDiv">
                  <button
                    className="checkModalSubmitDivNoBtn"
                    onClick={onClose}
                  >
                    아니요
                  </button>
                </div>
                <div className="checkModalSubmitDivYesDiv">
                  <button
                    className="checkModalSubmitDivYesBtn"
                    onClick={() => {
                      history.push("/sendmoney/value");
                    }}
                  >
                    네
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Modal;
