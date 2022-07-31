import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('crawlerAPI', {
  pingEverytime: () => ipcRenderer.invoke('everytime:ping'),
  pingSnulife: () => ipcRenderer.invoke('snulife:ping'),
  onEverytimePong: (callback) =>
    ipcRenderer.on('everytime:pong', callback),
  onSnulifePong: (callback) =>
    ipcRenderer.on('snulife:pong', callback),
})
