import React from "react";
import Modal from "../../components/Modal/Modal";

const ModalContainer = ({ isModal, modalName, onClose }) => {
  return (
    <>
      <Modal isModal={isModal} modalName={modalName} onClose={onClose} />
    </>
  );
};

export default ModalContainer;
