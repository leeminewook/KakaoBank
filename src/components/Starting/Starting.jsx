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
          <img src={logo} className="logo" />
        </div>
        <div className="BtnDiv">
          <div className="loginBtn">
            <button className="kakaoBtn login">로그인</button>
          </div>
          <div className="registerBtn">
            <button
              className="kakaoBtn register"
              onClick={() => history.push("/register")}
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Starting;
