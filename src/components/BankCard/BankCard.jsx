import React from "react";
import "./BankCard.css";
const BankCard = ({ checkBank }) => {
  return (
    <>
      <div
        className={
          checkBank === "list" ? "bankCardForm list" : "bankCardForm check"
        }
      >
        <div className="bankCardForm-title">카카오뱅크</div>
      </div>
    </>
  );
};

export default BankCard;
