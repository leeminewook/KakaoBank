import React from "react";
import "./MakeCardNick.css";
import MakeCardTitle from "../../components/MakeCardTitle/MakeCardTitle";
import { useHistory } from "react-router-dom";

const MakeCardNick = () => {
  const history = useHistory();
  return (
    <>
      <div className="MakeCardNickForm">
        <MakeCardTitle />
        <div className="MakeCardNick-subTitle">
          계좌 개설을 위해 입력한 정보를
          <br />
          확인하고 나만의 통장 별명을
          <br />
          만들어주세요!
        </div>
        <div className="MakeCardNick-options-div">
          <div className="MakeCardNick-name">
            <div className="MakeCardNick-options-nameTitle">이름</div>
            <div className="MakeCardNick-options-name">이민욱</div>
          </div>
          <div className="MakeCardNick-birth">
            <div className="MakeCardNick-options-birthTitle">주민등록번호</div>
            <div className="MakeCardNick-options-birth">001230-3******</div>
          </div>
        </div>
        <div className="MakeCardNick-nick">
          <div className="MakeCardNick-nickTitle">통장 별명</div>
          <div className="MakeCardNick-nickInputDiv">
            <input type="text" className="MakeCardNick-nickInput" />
          </div>
        </div>
        <div className="MakeCardNickSubmitDiv">
          <button
            className="MakeCardNickSubmitBtn"
            onClick={() => {
              history.push("/makecard/password");
            }}
          >
            다음 단계로
          </button>
        </div>
      </div>
    </>
  );
};

export default MakeCardNick;
