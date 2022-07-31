import { app, BrowserWindow, ipcMain } from 'electron'
import { getMainWindow } from "@main/mainWindow";

let everytimeWindow: BrowserWindow

export const getEverytimeWindow = () => {
  if (everytimeWindow) return everytimeWindow
  everytimeWindow = new BrowserWindow({
    show: !app.isPackaged,
  })
  return everytimeWindow
}

export const initializeEverytime = async () => {
  await everytimeWindow.loadURL('https://everytime.kr/login')
}

const onPing = async () => {
  getMainWindow().webContents.send('everytime:pong', {
    result: 'success',
    content: everytimeWindow.getTitle(),
  })
}

export const setEverytimeHandlers = () => {
  ipcMain.handle('everytime:ping', onPing)
}
