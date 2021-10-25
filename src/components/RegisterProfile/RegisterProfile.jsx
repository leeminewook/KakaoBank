import React from "react";
import "./RegisterProfile.css";
import normalProfile from "../../assets/img/KakaoTalk_Photo_2021-10-20-10-59-12.png";
import { useHistory } from "react-router-dom";
const RegisterProfile = () => {
  const history = useHistory();
  return (
    <>
      <div className="RegisterForm">
        <div className="register-title">회원가입</div>
        <div className="profile-optoins">
          <div className="profile-optoins-title">프로필 사진</div>
          <div className="profile-options-imgBtn">
            <div className="profile-optoins-pictureDiv">
              <img src={normalProfile} className="profileImg" />
            </div>
            <div className="chooseProfile">
              <button className="chooseProfileBtn kakaoBtn">사진 선택</button>
            </div>
          </div>
        </div>
        <div className="goNext">
          <button
            className="registerSimpleReqBtn kakaoBtn"
            onClick={() => {
              history.push("/simpleregister");
            }}
          >
            간편 비밀번호 설정하기
          </button>
        </div>
      </div>
    </>
  );
};
export default RegisterProfile;
