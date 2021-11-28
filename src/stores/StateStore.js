import { atom } from "recoil";

const isModalState = atom({
  key: "isModal",
  default: false,
});
const modalNameState = atom({
  key: "modalName",
  default: "",
});

export { isModalState, modalNameState };
