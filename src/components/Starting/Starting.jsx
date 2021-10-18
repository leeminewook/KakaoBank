import React from "react";
import logo from "../../assets/img/997BD7335D089C3023.png";
import "./Starting.css";
import { useHistory } from "react-router-dom";

const Starting = () => {
  const history = useHistory();

  return (
    <>
      <div className="StartingForm">
        <div className="LogoDiv">
          <img src={logo} className="kakaoLogo" />
        </div>
        <div className="startingOptions">
          <div className="loginDiv">
            <button className="loginBtn">로그인</button>
          </div>
          <div className="registerDiv">
            <div className="registerSubtitle">계정이 없으신가요?</div>
            <div
              className="registerPage"
              onClick={() => {
                history.push("/register");
              }}
            >
              가입하기
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Starting;
