import React from "react";
import MainCardContainer from "../../containers/MainCard/MainCardContainer";

import "./TakeMain.css";
const TakeMain = () => {
  const main = false;
  return (
    <>
      <div className="TakeMainForm">
        <div className="TakeMainTitleDiv">
          <div className="TakeMainTitle">가져오기</div>
          <div className="TakeMainTitleDiv-cancle">닫기</div>
        </div>
        <div className="TakeMainOptions">
          <MainCardContainer main={main} />
          <MainCardContainer main={main} />
          <MainCardContainer main={main} />
          <MainCardContainer main={main} />
        </div>
      </div>
    </>
  );
};

export default TakeMain;
