import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow

export const createWindow = (): BrowserWindow => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 800,
    width: 1280,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      devTools: !app.isPackaged,
    },
  })

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  return mainWindow
}

export const getMainWindow = () => {
  if (mainWindow) return mainWindow
  return createWindow()
}
