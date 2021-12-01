import React from "react";
import "./Login.css";
import Logo from "../../assets/img/997BD7335D089C3023.png";
import { useHistory } from "react-router";
const Login = ({ id, setId, password, setPassword, tryLogin }) => {
  const history = useHistory();
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
              <input
                type="text"
                className="idDiv-input"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>
          <div className="LoginOptoins-pwDiv">
            <div className="pwDiv-title">비밀번호</div>
            <div className="pwDiv-inputDiv">
              <input
                type="password"
                className="pwDiv-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div
          className="goSimpleLogin"
          onClick={() => {
            history.push("/simplelogin");
          }}
        >
          간편인증로그인
        </div>
        <div className="Login-LoginBtnDiv">
          <button
            className="Login-LoginBtn kakaoBtn"
            onClick={() => {
              tryLogin(id, password);
            }}
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
