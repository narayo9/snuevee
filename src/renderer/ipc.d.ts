import type { IpcMainEvent } from 'electron'

interface Response {
  result: 'success' | 'fail'
}

declare global {
  interface Window {
    crawlerAPI: {
      pingEverytime: () => Promise<void>
      pingSnulife: () => Promise<void>
      onEverytimePong: (
        callback: (event: IpcMainEvent, value: Response) => void
      ) => void
      onSnulifePong: (
        callback: (event: IpcMainEvent, value: Response) => void
      ) => void
    }
  }
}
