import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CardApi from "../../assets/api/CardApi";
import MakeCardPassword from "../../components/MakeCardPassword/MakeCardPassword";
import { passwordState, nickNameState } from "../../stores/CardStore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

const MakeCardPasswordContainer = () => {
  const [password, setPassowrd] = useRecoilState(passwordState);
  const nickName = useRecoilValue(nickNameState);
  const history = useHistory();

  const tryMakeCard = async () => {
    await CardApi.makeCard(nickName, password)
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);
        history.push("/makecard/success");
      })
      .catch((err) => {
        console.log(err);
        toast.warning("계좌개설 실패");
      });
  };

  return (
    <>
      <MakeCardPassword
        password={password}
        setPassowrd={setPassowrd}
        tryMakeCard={tryMakeCard}
      />
    </>
  );
};

export default MakeCardPasswordContainer;
