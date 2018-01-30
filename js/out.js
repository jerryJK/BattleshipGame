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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Game; });\n\nclass Game {\n    constructor(selectorName) {\n         this.name = selectorName;\n         this.$gameDOMElement = $(selectorName);\n         this.timer = 0;\n         this.initEvents();\n   }\n\n   initEvents() {\n        this.$gameDOMElement.find(\"td\").on('click', (event) =>  {\n             $(event.target).toggleClass('hit');\n        })\n        this.$gameDOMElement.find(\".btn-start\").on('click', () => this.startTimer());\n        this.$gameDOMElement.find(\".timer\").text(this.timer);\n   }\n\n   startTimer() {\n     this.intervalId\t=\tsetInterval(()=>{\n          this.timer++;\n          console.log(this.timer);\n          this.$gameDOMElement.find(\".timer\").text(this.timer);\n          //stop timer\n          if(this.timer === 10) {\n            clearInterval(this.intervalId);\n          }\n     },1000);\n\n\n   }\n\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9HYW1lLmpzP2MyMjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOOztBQUVBOztBQUVRIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yTmFtZSkge1xuICAgICAgICAgdGhpcy5uYW1lID0gc2VsZWN0b3JOYW1lO1xuICAgICAgICAgdGhpcy4kZ2FtZURPTUVsZW1lbnQgPSAkKHNlbGVjdG9yTmFtZSk7XG4gICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgfVxuXG4gICBpbml0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRnYW1lRE9NRWxlbWVudC5maW5kKFwidGRcIikub24oJ2NsaWNrJywgKGV2ZW50KSA9PiAge1xuICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS50b2dnbGVDbGFzcygnaGl0Jyk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuJGdhbWVET01FbGVtZW50LmZpbmQoXCIuYnRuLXN0YXJ0XCIpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc3RhcnRUaW1lcigpKTtcbiAgICAgICAgdGhpcy4kZ2FtZURPTUVsZW1lbnQuZmluZChcIi50aW1lclwiKS50ZXh0KHRoaXMudGltZXIpO1xuICAgfVxuXG4gICBzdGFydFRpbWVyKCkge1xuICAgICB0aGlzLmludGVydmFsSWRcdD1cdHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgdGhpcy50aW1lcisrO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGltZXIpO1xuICAgICAgICAgIHRoaXMuJGdhbWVET01FbGVtZW50LmZpbmQoXCIudGltZXJcIikudGV4dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAvL3N0b3AgdGltZXJcbiAgICAgICAgICBpZih0aGlzLnRpbWVyID09PSAxMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgIH1cbiAgICAgfSwxMDAwKTtcblxuXG4gICB9XG5cbn1cblxuZXhwb3J0IHsgR2FtZSB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9HYW1lLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3M/MjM0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Game_js__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_style_scss__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_style_scss__);\n\n\n\n$(() => {\n    const game = new __WEBPACK_IMPORTED_MODULE_0__Game_js__[\"a\" /* Game */](\"#game-board\");\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZSB9ICBmcm9tIFwiLi9HYW1lLmpzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3Njc3Mvc3R5bGUuc2Nzcyc7XG5cbiQoKCkgPT4ge1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShcIiNnYW1lLWJvYXJkXCIpO1xufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);