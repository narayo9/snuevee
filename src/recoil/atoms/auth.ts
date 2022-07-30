import { atom } from "recoil";

export interface BasicAuth {
  id: string
  password: string
}

export interface LoginInfoState {
  localStorageLoaded: boolean
  everytime: BasicAuth | null
  snulife: BasicAuth | null
}

export const loginInfoAtom = atom<LoginInfoState>({
  key: "loginState",
  default: {
    localStorageLoaded: false,
    everytime: null,
    snulife: null
  },
});
