import React from "react";
import MakeCardTitle from "../MakeCardTitle/MakeCardTitle";
import "./MakeCardInfo.css";
import { useHistory } from "react-router-dom";

const MakeCardInfo = ({ name, setName, rrm, setRrm, trySelfCertification }) => {
  const history = useHistory();

  return (
    <>
      <div className="MakeCardInfoForm">
        <MakeCardTitle />
        <div className="MakeCardInfo-title">
          실명 정보 확인을 위해
          <br />
          이름과 주민등록번호를 입력해주세요
        </div>
        <div className="MakeCardInfo-options">
          <div className="MakeCardInfo-options-nameDiv">
            <div className="MakeCardInfo-options-nameDiv-title">이름</div>
            <div className="MakeCardInfo-options-nameinputDiv">
              <input
                type="text"
                className="MakeCardInfo-nameInput"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="MakeCardInfo-options-birthDiv">
            <div className="MakeCardInfo-options-birthDiv-title">
              주민등록번호
            </div>
            <div className="MakeCardInfo-options-birthinputDiv">
              <input
                type="text"
                className="MakeCardInfo-birthInput"
                value={rrm}
                onChange={(e) => {
                  setRrm(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="MakeCardSubmitDiv">
          <button
            className="MakeCardSubmitBtn nextBtn"
            onClick={() => {
              trySelfCertification(name, rrm);
            }}
          >
            다음 단계로
          </button>
        </div>
      </div>
    </>
  );
};

export default MakeCardInfo;
