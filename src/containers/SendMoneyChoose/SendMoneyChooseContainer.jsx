import React from "react";
import { useRecoilState } from "recoil";
import SendMoneyChoose from "../../components/SendMoneyChoose/SendMoneyChoose";
import { isModalState, modalNameState } from "../../stores/StateStore";
const SendMoneyChooseContainer = () => {
  const [isModal, setIsModal] = useRecoilState(isModalState);
  const [modalName, setModalName] = useRecoilState(modalNameState);
  return (
    <>
      <SendMoneyChoose
        isModal={isModal}
        setIsModal={setIsModal}
        modalName={modalName}
        setModalName={setModalName}
      />
    </>
  );
};

export default SendMoneyChooseContainer;
