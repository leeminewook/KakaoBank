import React from "react";
import "./Register.css";
const Register = () => {
  return (
    <>
      <div className="RegisterForm">
        <div className="register-title">회원가입</div>
        <div className="register-options">
          <div className="register-options-id">
            <div className="register-optoins-id-title">아이디</div>
            <div className="inputBtn">
              <div className="register-options-id-input">
                <input type="text" className="kakaoInput idInputBox" />
              </div>
              <div className="register-options-id-Btn">
                <button className="kakaoBtn idButton">중복확인</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
