import React from "react";
import normalProfile from "../../assets/img/KakaoTalk_Photo_2021-10-20-10-59-12.png";
import "./RegisterFinal.css";
const RegisterFinal = () => {
  return (
    <>
      <div className="RegisterFinalForm">
        <div className="RegisterFinal-title">반가워요 이민욱님!</div>
        <div className="RegisterFinal-options">
          <div className="RegisterFinal-ImgDiv">
            <img src={normalProfile} alt="" className="RegisterFinal-profile" />
          </div>
          <div className="RegisterFinal-subtitle">
            쉽고 간편한 카카오 뱅크를
            <br /> 지금부터 시작하세요
          </div>
        </div>
        <div className="RegisterFinal-Submit">
          <button className="RegisterFinal-Submit-btn kakaoBtn">
            카카오 뱅크 시작하기
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterFinal;
