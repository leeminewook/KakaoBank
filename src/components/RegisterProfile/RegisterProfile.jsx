import React, { useState } from "react";
import "./RegisterProfile.css";
import normalProfile from "../../assets/img/KakaoTalk_Photo_2021-10-20-10-59-12.png";
import { useHistory } from "react-router-dom";

const RegisterProfile = ({ handleChangeFile, imgBase64, tryRegister }) => {
  const history = useHistory();
  return (
    <>
      <div className="RegisterForm">
        <div className="register-title">회원가입</div>
        <div className="simpleRegisterTitle">마지막 단계에요!</div>
        <div className="profile-optoins">
          <div className="profile-optoins-title">프로필 사진</div>
          <div className="profile-options-imgBtn">
            <div className="profile-optoins-pictureDiv">
              {imgBase64.map((item) => {
                return (
                  <img
                    className="profileImg"
                    src={item}
                    alt="First slide"
                    style={{ width: "100%", height: "550px" }}
                  />
                );
              })}
            </div>
            <div className="chooseProfile">
              <input
                type="file"
                id="addFile"
                style={{ display: "none" }}
                onChange={handleChangeFile}
                multiple="multiple"
              />
              <button className="chooseProfileBtn kakaoBtn">
                <label htmlFor="addFile">사진 선택</label>
              </button>
            </div>
          </div>
        </div>
        <div className="goNext">
          <button
            className="registerSimpleReqBtn kakaoBtn"
            onClick={() => {
              tryRegister();
            }}
          >
            가입완료
          </button>
        </div>
      </div>
    </>
  );
};
export default RegisterProfile;
