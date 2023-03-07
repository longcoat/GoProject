import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {},
});

export const globalSearch = atom({
  key: "globalSearch",
  default: "",
});
