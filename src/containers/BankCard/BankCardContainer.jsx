import React from "react";
import BankCard from "../../components/BankCard/BankCard";

const BankCardContainer = ({ checkBank }) => {
  return (
    <>
      <BankCard checkBank={checkBank} />
    </>
  );
};

export default BankCardContainer;
