import React from "react";
import Login from "../../components/Login/Login";
import { useState } from "react";
import AuthApi from "../../assets/api/AuthApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const LoginContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const tryLogin = async (id, password) => {
    await AuthApi.login(id, password)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.data.token);
        toast.success(res.data.message);
        history.push("/main");
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.warning(err.response.data.message);
      });
  };

  return (
    <>
      <Login
        id={id}
        setId={setId}
        password={password}
        setPassword={setPassword}
        tryLogin={tryLogin}
      />
    </>
  );
};

export default LoginContainer;
