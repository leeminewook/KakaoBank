import React from "react";
import { useRecoilState } from "recoil";
import SimpleRegister from "../../components/SimpleRegister/SimpleRegister";
import { registerSimpleNumber } from "../../stores/AuthStore";
const SimpleRegisterContainer = () => {
  const [simpleNum, setSimpleNum] = useRecoilState(registerSimpleNumber);

  return (
    <>
      <SimpleRegister simpleNum={simpleNum} setSimpleNum={setSimpleNum} />
    </>
  );
};

export default SimpleRegisterContainer;
