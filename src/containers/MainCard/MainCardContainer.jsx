import React from "react";
import MainCard from "../../components/MainCard/MainCard";

const MainCardContainer = ({
  main,
  accountNumber,
  kindOfBank,
  money,
  nickname,
}) => {
  return (
    <>
      <MainCard
        main={main}
        accountNumber={accountNumber}
        kindOfBank={kindOfBank}
        money={money}
        nickname={nickname}
      />
    </>
  );
};

export default MainCardContainer;
