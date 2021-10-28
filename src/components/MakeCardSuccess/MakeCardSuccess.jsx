import React from "react";
import "./MakeCardSuccess.css";
import img from "../../assets/img/Group 29.png";
import { useHistory } from "react-router-dom";
const MakeCardSuccess = () => {
  const history = useHistory();
  return (
    <>
      <div className="MakeCardSuccessForm">
        <div className="MakeCardSuccess-imgDiv">
          <img src={img} alt="" className="MakeCardSuccess-img" />
        </div>
        <div className="MakeCardSuccessTitle">입출금통장 개설 완료</div>
        <div className="MakeCardSuccessSubTitle">
          입출금통장이 개설되었습니다.
          <br />
          아래의 내용을 확인해주세요
        </div>
        <div className="MakeCardSuccessLineFirst"></div>
        <div className="MakeCardSuccess-cardKindDiv">
          <div className="cardKindTitle">계좌 종류</div>
          <div className="cardKindValue">입출금계좌</div>
        </div>
        <div className="MakeCardSuccessLine"></div>
        <div className="MakeCardSuccess-hando">
          <div className="handoTitle">앱 이체한도</div>
          <div className="handoValue">
            1일 최대
            <br />
            500만원
          </div>
        </div>
        <div className="MakeCardSuccessLine"></div>
        <div className="MakeCardSuccessSubmitDiv">
          <button
            className="MakeCardSuccessSubmitBtn kakaoBtn"
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

export default MakeCardSuccess;
