import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import AuthApi from "../../assets/api/AuthApi";
import RegisterProfile from "../../components/RegisterProfile/RegisterProfile";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import {
  idState,
  pwState,
  phoneState,
  nickNameState,
  residentRegistrationNumberState,
  nameState,
  registerSimpleNumber,
  imgBase64State,
  imgFileState,
} from "../../stores/AuthStore";

const RegisterProfileContainer = () => {
  const history = useHistory();
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일
  const id = useRecoilValue(idState);
  const password = useRecoilValue(pwState);
  const phoneNumber = useRecoilValue(phoneState);
  const name = useRecoilValue(nameState);
  const nickname = useRecoilValue(nickNameState);
  const residentRegistrationNumber = useRecoilValue(
    residentRegistrationNumberState
  );

  const simpleNumber = useRecoilValue(registerSimpleNumber);
  console.log(id);
  const handleChangeFile = (event) => {
    console.log(event.target.files);
    setImgFile(event.target.files);
    //fd.append("file", event.target.files)
    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          console.log(base64);
          if (base64) {
            //  images.push(base64.toString())
            var base64Sub = base64.toString();

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)
          }
        };
      }
    }
  };

  const tryRegister = async () => {
    await AuthApi.register(
      imgFile,
      id,
      password,
      phoneNumber,
      name,
      nickname,
      residentRegistrationNumber,
      simpleNumber
    )
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          toast.success(res.data.message);
          history.push("/final");
        }
      })
      .catch((err) => {
        console.log(err.response);
        toast.warning(err.response.data.message);
      });
  };

  return (
    <>
      <RegisterProfile
        handleChangeFile={handleChangeFile}
        imgBase64={imgBase64}
        tryRegister={tryRegister}
      />
    </>
  );
};

export default RegisterProfileContainer;
