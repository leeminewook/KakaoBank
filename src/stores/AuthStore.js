import { atom } from "recoil";

const idState = atom({
  key: "idState",
  default: "",
});

const pwState = atom({
  key: "pwState",
  default: "",
});

const phoneState = atom({
  key: "phoneState",
  default: "",
});
const nameState = atom({
  key: "nameState",
  default: "",
});
const residentRegistrationNumberState = atom({
  key: "residentRegistrationNumberState",
  default: "",
});
const nickNameState = atom({
  key: "nickNameState",
  default: "",
});

const checkState = atom({
  keyL: "checkState",
  default: false,
});
const imgBase64State = atom({
  key: "imgBase64State",
  default: [],
});
const imgFileState = atom({
  key: "imgFileState",
  default: null,
});
const registerSimpleNumber = atom({
  key: "registerSimpleNumber",
  default: "",
});
export {
  idState,
  pwState,
  phoneState,
  nameState,
  residentRegistrationNumberState,
  nickNameState,
  checkState,
  imgBase64State,
  imgFileState,
  registerSimpleNumber,
};
