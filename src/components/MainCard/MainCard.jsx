import React from "react";
import "./MainCard.css";
const MainCard = ({ main, accountNumber, kindOfBank, money, nickname }) => {
  return (
    <>
      <div className="mainCardForm">
        <div className="mainCard-titleDiv">
          <div className="mainCard-mainTitle">민욱님의 계좌</div>
          <div className="mainCard-subTitle">1234-56-789101</div>
        </div>
        <div className="mainCard-money">10,000원</div>
        {main && (
          <div className="giveAndTakeDiv">
            <div className="takeDiv">가져오기</div>
            <div className="giveDiv">이체</div>
          </div>
        )}
      </div>
      {/* <div className="mainCardForm">
        <div className="mainCard-titleDiv">
          <div className="mainCard-mainTitle">{nickname}님의 계좌</div>
          <div className="mainCard-subTitle">{accountNumber}</div>
        </div>
        <div className="mainCard-money">{money}원</div>
        {main && (
          <div className="giveAndTakeDiv">
            <div className="takeDiv">가져오기</div>
            <div className="giveDiv">이체</div>
          </div>
        )}
      </div> */}
    </>
  );
};

export default MainCard;
