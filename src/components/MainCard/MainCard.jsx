import React from "react";
import "./MainCard.css";
const MainCard = () => {
  return (
    <>
      <div className="mainCardForm">
        <div className="mainCard-titleDiv">
          <div className="mainCard-mainTitle">민욱님의 계좌</div>
          <div className="mainCard-subTitle">1234-56-789101</div>
        </div>
        <div className="mainCard-money">10,000원</div>
        <div className="giveAndTakeDiv">
          <div className="takeDiv">가져오기</div>
          <div className="giveDiv">이체</div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
