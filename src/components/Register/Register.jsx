import React from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
const Register = () => {
  const history = useHistory();

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
          <div className="register-options-pw">
            <div className="register-optoins-pw-title">비밀번호</div>
            <div className="inputBtn">
              <div className="register-options-pw-input">
                <input type="text" className="kakaoInput pwInputBox" />
              </div>
            </div>
          </div>
          <div className="register-options-phone">
            <div className="register-optoins-phone-title">전화번호</div>
            <div className="inputBtn">
              <div className="register-options-phone-input">
                <input type="text" className="kakaoInput phoneInputBox" />
              </div>
            </div>
          </div>
          <div className="register-optoins-birthday">
            <div className="register-options-birthday-title">주민등록 번호</div>
            <div className="register-options-birthday-inputs">
              <div className="register-optoins-birthday-inputs-first">
                <input
                  type="text"
                  className="register-optoins-birthday-inputs-first-input kakaoInput"
                />
              </div>
              <div className="inputCut">-</div>
              <div className="register-optoins-birthday-inputs-second">
                <input
                  type="text"
                  className="register-optoins-birthday-inputs-second-input kakaoInput"
                />
              </div>
            </div>
          </div>
          <div className="register-options-name">
            <div className="register-optoins-name-title">이름(실명)</div>
            <div className="inputBtn">
              <div className="register-options-name-input">
                <input type="text" className="kakaoInput nameInputBox" />
              </div>
            </div>
          </div>
          <div className="register-options-nickName">
            <div className="register-optoins-nickName-title">아이디</div>
            <div className="inputBtn">
              <div className="register-options-nickName-input">
                <input type="text" className="kakaoInput nickNameInputBox" />
              </div>
              <div className="register-options-nickName-Btn">
                <button className="kakaoBtn nickNameButton">중복확인</button>
              </div>
            </div>
          </div>
          <div className="register-optoins-profile">
            <div className="register-optoins-profile-title">
              프로필 사진등록
            </div>
            <div className="register-optoins-profile-btn-Div">
              <button className="profileUploadBtn kakaoBtn">사진 선택</button>
            </div>
          </div>
          <div className="register-optoins-check">
            <div className="register-options-check-boxDiv">
              <input type="radio" className="checkBox" />
            </div>
            <a href="/" className="register-options-check-title">
              약관동의
            </a>
          </div>
          <div className="endingBtn">
            <div className="cancelDiv">
              <button
                className="cancelBtn kakaoBtn"
                onClick={() => history.push("/")}
              >
                취소
              </button>
            </div>
            <div className="registerDiv">
              <button
                className="registerReqBtn kakaoBtn"
                onClick={() => history.push("/simple/register")}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
