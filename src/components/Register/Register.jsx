import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import gray from "../../assets/img/Ellipse 2.png";
import yellow from "../../assets/img/Ellipse 1.png";
const Register = ({
  id,
  setId,
  password,
  setPassword,
  phoneNumber,
  setPhoneNumber,
  name,
  setName,
  residentRegistrationNumber,
  setResidentRegistrationNumber,
  nickName,
  setNickName,
  check,
  setCheck,
  tryCheckId,
  isCheckId,
  setIsCheckId,
}) => {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="RegisterForm">
        <div className="register-title">회원가입</div>
        <div className="register-options">
          <div className="register-options-id">
            <div className="register-optoins-id-title">아이디</div>
            <div className="inputBtn">
              <div className="register-options-id-input">
                <input
                  type="text"
                  className="kakaoInput idInputBox"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="register-options-id-Btn">
                <button
                  className={
                    isCheckId ? "kakaoBtn idButton" : "nextBtn idButton"
                  }
                  onClick={() => {
                    tryCheckId(id);
                  }}
                >
                  중복확인
                </button>
              </div>
            </div>
          </div>
          <div className="register-options-pw">
            <div className="register-optoins-pw-title">비밀번호</div>
            <div className="inputBtn">
              <div className="register-options-pw-input">
                <input
                  type="text"
                  className="kakaoInput pwInputBox"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="register-options-phone">
            <div className="register-optoins-phone-title">전화번호</div>
            <div className="inputBtn">
              <div className="register-options-phone-input">
                <input
                  type="text"
                  className="kakaoInput phoneInputBox"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
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
                  value={residentRegistrationNumber}
                  onChange={(e) =>
                    setResidentRegistrationNumber(e.target.value)
                  }
                />
              </div>
            </div>
          </div>
          <div className="register-options-name">
            <div className="register-optoins-name-title">이름(실명)</div>
            <div className="inputBtn">
              <div className="register-options-name-input">
                <input
                  type="text"
                  className="kakaoInput nameInputBox"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="register-options-nickName">
            <div className="register-optoins-nickName-title">닉네임</div>
            <div className="inputBtn">
              <div className="register-options-nickName-input">
                <input
                  type="text"
                  className="kakaoInput nickNameInputBox"
                  value={nickName}
                  onChange={(e) => setNickName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="register-optoins-check">
            <div className="register-options-check-boxDiv">
              {isChecked ? (
                <img
                  src={yellow}
                  alt=""
                  className="register-options-check-boxDiv-Img"
                  onClick={() => {
                    setIsChecked(!isChecked);
                    // console.log("A");
                  }}
                />
              ) : (
                <img
                  src={gray}
                  alt=""
                  className="register-options-check-boxDiv-Img"
                  onClick={() => {
                    setIsChecked(!isChecked);
                  }}
                />
              )}
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
            <div className="registerDi">
              {isChecked ? (
                <button
                  className="registerReqBtn kakaoBtn"
                  onClick={() => history.push("/simpleregister")}
                  // onClick={() => {}}
                >
                  다음으로
                </button>
              ) : (
                <button className="registerReqBtn nextBtn">다음으로</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
