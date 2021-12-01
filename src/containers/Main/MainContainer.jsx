import React, { useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import CardApi from "../../assets/api/CardApi";

const MainContainer = () => {
  const [cardList, setCardList] = useState([]);
  const tryGetCardList = async () => {
    const token = localStorage.getItem("accessToken");

    await CardApi.getCardList(token).then((res) => {
      console.log(res);
      setCardList(res.data.data);
    });
  };
  useEffect(() => {
    tryGetCardList();
  }, []);
  return (
    <>
      <Main cardList={cardList} />
    </>
  );
};

export default MainContainer;
