import { atom } from "recoil";

const nameState = atom({
  key: "nameState",
  default: "",
});
const rrmState = atom({
  key: "rrmState",
  default: "",
});
const nickNameState = atom({
  key: "nickNameState",
  default: "",
});

const passwordState = atom({
  key: "passwordState",
  default: "",
});

export { nameState, rrmState, nickNameState, passwordState };
