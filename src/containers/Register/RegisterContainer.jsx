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
} from "../../stores/AuthStore";
const RegisterContainer = () => {
  const [id, setId] = useRecoilState(idState);
  const [password, setPassword] = useRecoilState(pwState);
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneState);
  const [name, setName] = useRecoilState(nameState);
  const [residentRegistrationNumber, setResidentRegistrationNumber] =
    useRecoilState(residentRegistrationNumberState);
  const [nickName, setNickName] = useRecoilState(nickNameState);
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
      />
    </>
  );
};

export default RegisterContainer;
