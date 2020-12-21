/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!./":
/*!************************************************************************************************************!*\
  !*** ./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1 ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports=function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&\"object\"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,\"default\",{enumerable:!0,value:e}),2&r&&\"string\"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,\"a\",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p=\"\",n(n.s=19)}({1:function(e,r){e.exports=__webpack_require__(/*! path */ \"path\")},17:function(e,r){e.exports=__webpack_require__(/*! electron */ \"electron\")},19:function(e,r,n){\"use strict\";n.r(r);var t=n(17),o=n(2),u=n.n(o),i=n(1),c=n.n(i),f=[];t.app.on(\"browser-window-created\",(e,r)=>{f.push(r),r.on(\"closed\",()=>{console.log(f.indexOf(r)),f.splice(f.indexOf(r),1)})}),u.a.watch(c.a.resolve(__dirname,\"..\",\"renderer\"),{},()=>{Object.values(f).forEach(e=>{e&&e.webContents.reloadIgnoringCache()})})},2:function(e,r){e.exports=__webpack_require__(/*! fs */ \"fs\")}});\n\n//# sourceURL=webpack:///./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?");

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_2__);\n// In this file you can include the rest of your app's specific main process\n// code. You can also put them in separate files and require them here.\n\n\n\n\nelectron__WEBPACK_IMPORTED_MODULE_2__[\"ipcMain\"].on('asynchronous-message', (event, arg) => {\n  const user = JSON.parse(JSON.stringify(arg))\n  Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"appendFile\"])(\n      `c:/res.json`,\n      `${user.date} ${user.name} сдавал блок ${user.base}, количество правильных ответов: ${user.score} \\n`,\n      'utf8',\n      (error) => {\n    if (error) throw new Error('error');\n  })\n})\n\nelectron__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].setApplicationMenu(null)\n\nconst createWindow = () => {\n  // Create the browser window.\n  let win = new electron__WEBPACK_IMPORTED_MODULE_2__[\"BrowserWindow\"]({\n    title: {\"width\":786,\"height\":1024,\"reload\":true,\"devTools\":true,\"icon\":\".ico\",\"name\":\"QuizKonv\",\"version\":\"0.1.0\"}.name,\n    width: {\"width\":786,\"height\":1024,\"reload\":true,\"devTools\":true,\"icon\":\".ico\",\"name\":\"QuizKonv\",\"version\":\"0.1.0\"}.width,\n    height: {\"width\":786,\"height\":1024,\"reload\":true,\"devTools\":true,\"icon\":\".ico\",\"name\":\"QuizKonv\",\"version\":\"0.1.0\"}.height,\n    minWidth: {\"width\":786,\"height\":1024,\"reload\":true,\"devTools\":true,\"icon\":\".ico\",\"name\":\"QuizKonv\",\"version\":\"0.1.0\"}.width,\n    minHeight: {\"width\":786,\"height\":1024,\"reload\":true,\"devTools\":true,\"icon\":\".ico\",\"name\":\"QuizKonv\",\"version\":\"0.1.0\"}.height,\n    maxWidth: {\"width\":786,\"height\":1024,\"reload\":true,\"devTools\":true,\"icon\":\".ico\",\"name\":\"QuizKonv\",\"version\":\"0.1.0\"}.width,\n    maxHeight: {\"width\":786,\"height\":1024,\"reload\":true,\"devTools\":true,\"icon\":\".ico\",\"name\":\"QuizKonv\",\"version\":\"0.1.0\"}.height,\n    webPreferences: {\n      nodeIntegration: true,\n      enableRemoteModule: true\n      // contextIsolation: true,\n      // sandbox: true,\n      // worldSafeExecuteJavaScript: true,\n      // preload: path.join(app.getAppPath(), 'preload', 'index.js')\n    }\n  })\n\n  // and load the index.html of the app.\n  win.loadFile('renderer/index.html')\n\n  // win.webContents.openDevTools()\n\n  // send data to renderer process\n  win.webContents.on('did-finish-load', () => {\n    win.webContents.send('loaded', {\n      appName: {\"width\":786,\"height\":1024,\"reload\":true,\"devTools\":true,\"icon\":\".ico\",\"name\":\"QuizKonv\",\"version\":\"0.1.0\"}.name,\n      electronVersion: process.versions.electron,\n      nodeVersion: process.versions.node,\n      chromiumVersion: process.versions.chrome\n    })\n  })\n\n  win.on('closed', () => {\n    win = null\n  })\n}\n\n\n\n// This method will be called when Electron has finished\n// initialization and is ready to create browser windows.\n// Some APIs can only be used after this event occurs.\nelectron__WEBPACK_IMPORTED_MODULE_2__[\"app\"].whenReady().then(createWindow)\n\n// Quit when all windows are closed.\nelectron__WEBPACK_IMPORTED_MODULE_2__[\"app\"].on('window-all-closed', () => {\n  // On macOS it is common for applications and their menu bar\n  // to stay active until the user quits explicitly with Cmd + Q\n\n  if (process.platform !== 'darwin') {\n    electron__WEBPACK_IMPORTED_MODULE_2__[\"app\"].quit()\n  }\n})\n\nelectron__WEBPACK_IMPORTED_MODULE_2__[\"app\"].on('activate', () => {\n  // On macOS it's common to re-create a window in the app when the\n  // dock icon is clicked and there are no other windows open.\n  if (electron__WEBPACK_IMPORTED_MODULE_2__[\"BrowserWindow\"].getAllWindows().length === 0) {\n    createWindow()\n  }\n})\n\n\n\n\n//# sourceURL=webpack:///./src/main/index.js?");

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************!*\
  !*** multi ./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader?id=webpack-inject-module-1 ./src/main/index.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! E:\\project\\quiz_konv\\node_modules\\webpack-inject-plugin\\dist\\webpack-inject-plugin.loader?id=webpack-inject-module-1! */\"./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!./\");\nmodule.exports = __webpack_require__(/*! ./src/main/index.js */\"./src/main/index.js\");\n\n\n//# sourceURL=webpack:///multi_./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });