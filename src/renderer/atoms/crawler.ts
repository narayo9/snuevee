import { atom } from "recoil";

export interface BasicCrawlerState {
  status: 'PIE_INITIALIZING' | 'PIE_READY' | 'MAIN_PAGE_LOADED'
  window: null
}

export interface CrawlerState {
  everytime: BasicCrawlerState
  snulife: BasicCrawlerState
}

export const crawlerAtom = atom<CrawlerState>({
  key: "loginState",
  default: {
    everytime: {
      status: 'PIE_INITIALIZING',
      window: null
    },
    snulife: {
      status: 'PIE_INITIALIZING',
      window: null
    },
  },
});
