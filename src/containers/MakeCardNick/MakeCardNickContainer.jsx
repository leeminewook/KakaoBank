import React from "react";
import { useRecoilState } from "recoil";
import MakeCardNick from "../../components/MakeCardNick/MakeCardNick";
import { nameState, rrmState, nickNameState } from "../../stores/CardStore";
const MakeCardNickContainer = () => {
  const [name, setName] = useRecoilState(nameState);
  const [rrm, setRrm] = useRecoilState(rrmState);
  const [nickName, setNickName] = useRecoilState(nickNameState);

  return (
    <>
      <MakeCardNick
        name={name}
        setName={setName}
        rrm={rrm}
        setRrm={setRrm}
        nickName={nickName}
        setNickName={setNickName}
      />
    </>
  );
};

export default MakeCardNickContainer;
