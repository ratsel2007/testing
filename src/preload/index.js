// https://electronjs.org/docs/tutorial/security
// Preload File that should be loaded into browser window instead of
// setting nodeIntegration: true for browser window
//
import { ipcRenderer } from 'electron'

window.onLoaded = callback => {
  ipcRenderer.on('loaded', callback)
}

// const electron = require('electron');
//
// process.once('loaded', () => {
//   global.ipcRenderer = electron.ipcRenderer;
// });
//
// const { ipcRenderer } = require('electron');
//
// process.once('loaded', () => {
//     window.addEventListener('message', event => {
//         // do something with custom event
//         const message = event.data;
//
//         if (message.myTypeField === 'my-custom-message') {
//             ipcRenderer.send('custom-message', message);
//         }
//     });
// });