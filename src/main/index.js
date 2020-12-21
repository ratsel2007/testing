// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
import path from 'path'
import {appendFile} from 'fs'
import { app, BrowserWindow, Menu, ipcMain } from 'electron'

ipcMain.on('asynchronous-message', (event, arg) => {
  const user = JSON.parse(JSON.stringify(arg))
  appendFile(
      `c:/res.json`,
      `${user.date} ${user.name} сдавал блок ${user.base}, количество правильных ответов: ${user.score} \n`,
      'utf8',
      (error) => {
    if (error) throw new Error('error');
  })
})

Menu.setApplicationMenu(null)

const createWindow = () => {
  // Create the browser window.
  let win = new BrowserWindow({
    title: CONFIG.name,
    width: CONFIG.width,
    height: CONFIG.height,
    minWidth: CONFIG.width,
    minHeight: CONFIG.height,
    maxWidth: CONFIG.width,
    maxHeight: CONFIG.height,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
      // contextIsolation: true,
      // sandbox: true,
      // worldSafeExecuteJavaScript: true,
      // preload: path.join(app.getAppPath(), 'preload', 'index.js')
    }
  })

  // and load the index.html of the app.
  win.loadFile('renderer/index.html')

  // win.webContents.openDevTools()

  // send data to renderer process
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('loaded', {
      appName: CONFIG.name,
      electronVersion: process.versions.electron,
      nodeVersion: process.versions.node,
      chromiumVersion: process.versions.chrome
    })
  })

  win.on('closed', () => {
    win = null
  })
}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


