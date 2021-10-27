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

export {
  idState,
  pwState,
  phoneState,
  nameState,
  residentRegistrationNumberState,
  nickNameState,
};
