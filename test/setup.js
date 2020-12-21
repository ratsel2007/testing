const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'QuizKonv.app', 'Contents', 'MacOS', 'QuizKonv')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'QuizKonv')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'QuizKonv.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
