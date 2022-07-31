import { getMainWindow } from '@main/mainWindow'
import { app, BrowserWindow, ipcMain } from 'electron'

let snulifeWindow: BrowserWindow

export const getSnulifeWindow = () => {
  if (snulifeWindow) return snulifeWindow
  snulifeWindow = new BrowserWindow({
    show: !app.isPackaged,
  })
  return snulifeWindow
}

export const initializeSnulife = async () => {
  await snulifeWindow.loadURL('https://www.snulife.com/login/')
}

const onPing = async () => {
  getMainWindow().webContents.send('snulife:pong', {
    result: 'success',
    content: snulifeWindow.getTitle(),
  })
}

export const setSnulifeHandlers = () => {
  ipcMain.handle('snulife:ping', onPing)
}
