import { atom } from "recoil";

export interface BasicCrawlerState {
  status: 'BOOTING_UP' | 'LOGIN_PAGE' | 'MAIN_PAGE'
}

export interface CrawlerState {
  everytime: BasicCrawlerState
  snulife: BasicCrawlerState
}

export const crawlerAtom = atom<CrawlerState>({
  key: "crawlerState",
  default: {
    everytime: {
      status: 'BOOTING_UP',
    },
    snulife: {
      status: 'BOOTING_UP',
    },
  },
});
