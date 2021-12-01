import React, { useState } from "react";
import AuthApi from "../../assets/api/AuthApi";
import MakeCardInfo from "../../components/MakeCardInfo/MakeCardInfo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { nameState, rrmState } from "../../stores/CardStore";
import { useRecoilState } from "recoil";

const MakeCardInfoContainer = () => {
  const [name, setName] = useRecoilState(nameState);
  const [rrm, setRrm] = useRecoilState(rrmState);
  const history = useHistory();

  const trySelfCertification = async (name, rrm) => {
    await AuthApi.selfCertification(name, rrm)
      .then((res) => {
        console.log(res.data);
        if (res.data.data === true) {
          toast.success(res.data.message);
          history.push("/makecard/nick");
        } else {
          toast.warning("이름 또는 주민등록번호가 잘못되었습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.warn("서버 에러");
      });
  };

  return (
    <>
      <MakeCardInfo
        name={name}
        setName={setName}
        rrm={rrm}
        setRrm={setRrm}
        trySelfCertification={trySelfCertification}
      />
    </>
  );
};

export default MakeCardInfoContainer;
