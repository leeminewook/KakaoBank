import React from "react";
import MainCardContainer from "../../containers/MainCard/MainCardContainer";
import "./Main.css";
import plus from "../../assets/img/Group 15.png";
import sideImg from "../../assets/img/KakaoTalk_Photo_2021-10-20-10-59-12.png";
const Main = ({ cardList }) => {
  const main = true;
  return (
    <>
      <div className="mainForm">
        <div className="mainTitleDiv">
          <div className="mainTitleDiv-title">이민욱</div>
          <div className="mainTitleDiv-buttonDiv">
            <button className="mainTitleDiv-button">내 계좌</button>
          </div>
          <div className="sideImgDiv">
            <img src={sideImg} alt="" className="sideImg" />
          </div>
        </div>
        <div className="mainOptions">
          {cardList.map((card, index) => (
            <MainCardContainer
              main={main}
              accountNumber={card.accountNumber}
              kindOfBank={card.kindOfBank}
              money={card.money}
              nickname={card.nickname}
            />
          ))}
          <MainCardContainer main={main} />
          <MainCardContainer main={main} />
          <MainCardContainer main={main} />
          <MainCardContainer main={main} />
        </div>
        <div className="main-addCardDiv">
          <div className="main-addCardBtn">
            <img src={plus} alt="" className="main-addCardBtn-plus" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
