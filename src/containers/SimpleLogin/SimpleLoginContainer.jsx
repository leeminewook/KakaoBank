import React, { useState } from "react";
import AuthApi from "../../assets/api/AuthApi";
import SimpleLogin from "../../components/SimpleLogin/SimpleLogin";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
const SimpleLoginContainer = () => {
  const [simpleNum, setSimpleNum] = useState("");
  const history = useHistory();
  const trySimpleLogin = async (simpleNum) => {
    await AuthApi.simpleLogin(simpleNum)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
        history.push("/main");
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data.status === 401) {
          toast.warning(err.response.data.message);
        } else {
          toast.warning("잘못된 형식의 값 입력");
        }
      });
  };

  return (
    <>
      <SimpleLogin
        simpleNum={simpleNum}
        setSimpleNum={setSimpleNum}
        trySimpleLogin={trySimpleLogin}
      />
    </>
  );
};

export default SimpleLoginContainer;
