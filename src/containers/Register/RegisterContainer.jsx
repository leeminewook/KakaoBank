import React, { useState } from "react";
import Register from "../../components/Register/Register";
import { useRecoilState } from "recoil";
import {
  idState,
  pwState,
  phoneState,
  nameState,
  residentRegistrationNumberState,
  nickNameState,
  checkState,
} from "../../stores/AuthStore";
import AuthApi from "../../assets/api/AuthApi";
const RegisterContainer = () => {
  const [id, setId] = useRecoilState(idState);
  const [password, setPassword] = useRecoilState(pwState);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneState);
  const [name, setName] = useRecoilState(nameState);
  const [residentRegistrationNumber, setResidentRegistrationNumber] =
    useRecoilState(residentRegistrationNumberState);
  const [nickName, setNickName] = useRecoilState(nickNameState);
  const [check, setCheck] = useRecoilState(checkState);
  const [isCheckId, setIsCheckId] = useState(false);

  const tryCheckId = async (id) => {
    await AuthApi.checkId(id)
      .then((res) => {
        console.log(res.data);
        if (res.data.data.available) {
          alert(res.data.message);
          setIsCheckId(!isCheckId);
        } else {
          alert("중복입니다");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Register
        id={id}
        setId={setId}
        password={password}
        setPassword={setPassword}
        phoneNumber={phoneNumber}
        name={name}
        setName={setName}
        setPhoneNumber={setPhoneNumber}
        residentRegistrationNumber={residentRegistrationNumber}
        setResidentRegistrationNumber={setResidentRegistrationNumber}
        nickName={nickName}
        setNickName={setNickName}
        check={check}
        setCheck={setCheck}
        tryCheckId={tryCheckId}
        isCheckId={isCheckId}
        setIsCheckId={setIsCheckId}
      />
    </>
  );
};

export default RegisterContainer;
