import React from "react";
import "./Login.css";
import Logo from "../../assets/img/997BD7335D089C3023.png";
const Login = () => {
  return (
    <>
      <div className="LoginForm">
        <div className="LoginImgDiv">
          <img src={Logo} alt="" className="LoginImg" />
        </div>
        <div className="LoginOptions">
          <div className="LoginOptoins-idDiv">
            <div className="idDiv-title">아이디</div>
            <div className="idDiv-inputDiv">
              <input type="text" className="idDiv-input" />
            </div>
          </div>
          <div className="LoginOptoins-pwDiv">
            <div className="pwDiv-title">비밀번호</div>
            <div className="pwDiv-inputDiv">
              <input type="password" className="pwDiv-input" />
            </div>
          </div>
        </div>
        <div className="Login-LoginBtnDiv">
          <button className="Login-LoginBtn kakaoBtn">로그인</button>
        </div>
      </div>
    </>
  );
};

export default Login;
