import React from "react";
import "./MakeCardTitle.css";
import { useHistory } from "react-router-dom";
const MakeCardTitle = () => {
  const history = useHistory();

  return (
    <>
      <div className="MakeCardTitleDiv">
        <div className="MakeCardTitle">계좌 개설</div>
        <div
          className="MakeCardCancle"
          onClick={() => {
            history.push("/main");
          }}
        >
          취소
        </div>
      </div>
    </>
  );
};

export default MakeCardTitle;
