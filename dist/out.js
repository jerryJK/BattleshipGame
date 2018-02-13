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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Event {\n    constructor(sender) {\n        this._sender = sender;\n        this._listeners = [];\n    }\n\n    attach(listener) {\n        this._listeners.push(listener);\n    }\n\n    notify(args) {\n        for (let i = 0; i < this._listeners.length; i++) {\n            console.log(this._listeners[i]);\n\n            this._listeners[i](this.sender, args);\n        }\n    }\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Event;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9FdmVudERpc3BhdGNoZXIuanM/MDJhMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudCB7XG4gICAgY29uc3RydWN0b3Ioc2VuZGVyKSB7XG4gICAgICAgIHRoaXMuX3NlbmRlciA9IHNlbmRlcjtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW107XG4gICAgfVxuXG4gICAgYXR0YWNoKGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBub3RpZnkoYXJncykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fbGlzdGVuZXJzW2ldKTtcblxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW2ldKHRoaXMuc2VuZGVyLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvRXZlbnREaXNwYXRjaGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("class Controller  {\n  constructor(model,view) {\n    this._model = model;\n    this._view = view;\n\n    var _this = this;\n\n    this._view.cellClicked.attach(function(context,target) {\n        _this.showResult(target);\n    });\n\n    this._view.startButtonClicked.attach(function() {\n        _this.startGame();\n    });\n\n  }\n\n  showResult(target) {\n    console.log(target);\n    this._model.fireShip(target);\n    this._model.addTarget(target);\n    //this._view.displayHit(target);\n  }\n\n  startGame() {\n    this._model.startGame();\n  }\n\n\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Controller;\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Db250cm9sbGVyLmpzPzM2ZDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9sbGVyICB7XG4gIGNvbnN0cnVjdG9yKG1vZGVsLHZpZXcpIHtcbiAgICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuX3ZpZXcgPSB2aWV3O1xuXG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX3ZpZXcuY2VsbENsaWNrZWQuYXR0YWNoKGZ1bmN0aW9uKGNvbnRleHQsdGFyZ2V0KSB7XG4gICAgICAgIF90aGlzLnNob3dSZXN1bHQodGFyZ2V0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX3ZpZXcuc3RhcnRCdXR0b25DbGlja2VkLmF0dGFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuc3RhcnRHYW1lKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHNob3dSZXN1bHQodGFyZ2V0KSB7XG4gICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICB0aGlzLl9tb2RlbC5maXJlU2hpcCh0YXJnZXQpO1xuICAgIHRoaXMuX21vZGVsLmFkZFRhcmdldCh0YXJnZXQpO1xuICAgIC8vdGhpcy5fdmlldy5kaXNwbGF5SGl0KHRhcmdldCk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy5fbW9kZWwuc3RhcnRHYW1lKCk7XG4gIH1cblxuXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__ = __webpack_require__(0);\n\n\nclass Model  {\n  constructor(items) {\n      this._gameStart = false;\n      this._timer = 0;\n      this._intervalId;\n      this._targets = [];\n      this._boardSize = 10;\n    \tthis._numShips = 5;\n    \tthis._shipLength = 3;\n    \tthis._shipsSunk = 0;\n      this._ships = [\n          { locations: [0, 0, 0], hits: [\"\", \"\", \"\"] },\n          { locations: [0, 0, 0], hits: [\"\", \"\", \"\"] },\n          { locations: [0, 0, 0], hits: [\"\", \"\", \"\"] },\n          { locations: [0, 0, 0], hits: [\"\", \"\", \"\"] },\n          { locations: [0, 0, 0], hits: [\"\", \"\", \"\"] }\n    \t];\n\n      this.targetAdded = new __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__[\"a\" /* default */](this);\n      this.showMessage = new __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__[\"a\" /* default */](this);\n      this.showHit = new __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__[\"a\" /* default */](this);\n      this.showMiss = new __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__[\"a\" /* default */](this);\n      this.gameStart = new __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__[\"a\" /* default */](this);\n      this.handleTimer = new __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__[\"a\" /* default */](this);\n      this.handleShipsLeft = new __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__[\"a\" /* default */](this);\n\n  }\n\n  fireShip(guess) {\n    console.log(guess);\n    if(this._gameStart && this._shipsSunk < this._numShips) {\n\t\tfor (let i = 0; i < this._numShips; i++) {\n\t\t\tlet ship = this._ships[i];\n\t\t\tlet index = ship.locations.indexOf(guess);\n\n\t\t\tif (ship.hits[index] === \"hit\") {\n\t\t\t\tthis.showMessage.notify(\"Ups, You hit this field before!\");\n\t\t\t\treturn true;\n\t\t\t} else if (index >= 0) {\n\t\t\t\tship.hits[index] = \"hit\";\n\t\t\t\tthis.showHit.notify(guess);\n\t\t\t\tthis.showMessage.notify(\"YOU HIT!\");\n\n\t\t\t\tif (this.isSunk(ship)) {\n\t\t\t\t\tthis.showMessage.notify(\"SHIP SUNK!\");\n\t\t\t\t\tthis._shipsSunk++;\n\n          let numbShipsLeft = this._numShips - this._shipsSunk;\n          this.handleShipsLeft.notify(numbShipsLeft);\n\t\t\t\t}\n        if (this._shipsSunk === this._numShips) {\n          this.showMessage.notify(\"Congratulations, you have sunk all the ships!\");\n          this._gameStart = false;\n        }\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\tthis.showMiss.notify(guess);\n\t\tthis.showMessage.notify(\"YOU MISS!\");\n  }\n\n\t\treturn false;\n\t}\n\n  isSunk(ship) {\n    for (let i = 0; i < this._shipLength; i++)  {\n      if (ship.hits[i] !== \"hit\") {\n        return false;\n      }\n    }\n      return true;\n  }\n\n  startGame() {\n    this._timer = 0;\n    this._targets = [];\n    this._shipsSunk = 0;\n    this._gameStart = true;\n    this.showMessage.notify(\"Sink all ships, Good Luck!\");\n    this.gameStart.notify();\n    this.handleTimer.notify(0);\n    clearInterval(this._intervalId);\n    this.generateShipLocations();\n\n    for (let i = 0; i < this._numShips; i++) {\n\t\t\tlet ship = this._ships[i];\n      ship.hits = [];\n    }\n\n    this._intervalId\t=\tsetInterval(()\t=>\t{\n        this._timer++;\n        this.handleTimer.notify(this._timer);\n        if(!this._gameStart) {\n          clearInterval(this._intervalId);\n        }\n        console.log(this._timer);\n    },1000);\n\n  }\n\n  generateShipLocations() {\n    let locations;\n    for (let i = 0; i < this._numShips; i++) {\n      do {\n        locations = this.generateShip();\n      } while (this.collision(locations));\n      this._ships[i].locations = locations;\n    }\n    console.log(this._ships);\n  }\n\n  generateShip() {\n    let direction = Math.floor(Math.random() * 2);\n    let row, col;\n\n    if (direction === 1) { // horizontal\n      row = Math.floor(Math.random() * this._boardSize);\n      col = Math.floor(Math.random() * (this._boardSize - this._shipLength));\n    } else { // vertical\n      row = Math.floor(Math.random() * (this._boardSize - this._shipLength));\n      col = Math.floor(Math.random() * this._boardSize);\n    }\n\n    let newShipLocations = [];\n    for (let i = 0; i < this._shipLength; i++) {\n      if (direction === 1) {\n        newShipLocations.push(row + \"\" + (col + i));\n      } else {\n        newShipLocations.push((row + i) + \"\" + col);\n      }\n    }\n    return newShipLocations;\n  }\n\n  collision(locations) {\n    for (let i = 0; i < this._numShips; i++) {\n      let ship = this._ships[i];\n      for (let j = 0; j < locations.length; j++) {\n        if (ship.locations.indexOf(locations[j]) >= 0) {\n          return true;\n        }\n      }\n    }\n    return false;\n  }\n\n  addTarget(target) {\n    this._targets= [...this._targets, target];\n    this.targetAdded.notify(target);\n  }\n\n  getTargets() {\n      return [...this._targets];\n  }\n\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = Model;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9Nb2RlbC5qcz9mMDI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQ0FBMkM7QUFDdEQsV0FBVywyQ0FBMkM7QUFDdEQsV0FBVywyQ0FBMkM7QUFDdEQsV0FBVywyQ0FBMkM7QUFDdEQsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsS0FBSyxPQUFPO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnQgZnJvbSAnLi9FdmVudERpc3BhdGNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCAge1xuICBjb25zdHJ1Y3RvcihpdGVtcykge1xuICAgICAgdGhpcy5fZ2FtZVN0YXJ0ID0gZmFsc2U7XG4gICAgICB0aGlzLl90aW1lciA9IDA7XG4gICAgICB0aGlzLl9pbnRlcnZhbElkO1xuICAgICAgdGhpcy5fdGFyZ2V0cyA9IFtdO1xuICAgICAgdGhpcy5fYm9hcmRTaXplID0gMTA7XG4gICAgXHR0aGlzLl9udW1TaGlwcyA9IDU7XG4gICAgXHR0aGlzLl9zaGlwTGVuZ3RoID0gMztcbiAgICBcdHRoaXMuX3NoaXBzU3VuayA9IDA7XG4gICAgICB0aGlzLl9zaGlwcyA9IFtcbiAgICAgICAgICB7IGxvY2F0aW9uczogWzAsIDAsIDBdLCBoaXRzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfSxcbiAgICAgICAgICB7IGxvY2F0aW9uczogWzAsIDAsIDBdLCBoaXRzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfSxcbiAgICAgICAgICB7IGxvY2F0aW9uczogWzAsIDAsIDBdLCBoaXRzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfSxcbiAgICAgICAgICB7IGxvY2F0aW9uczogWzAsIDAsIDBdLCBoaXRzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfSxcbiAgICAgICAgICB7IGxvY2F0aW9uczogWzAsIDAsIDBdLCBoaXRzOiBbXCJcIiwgXCJcIiwgXCJcIl0gfVxuICAgIFx0XTtcblxuICAgICAgdGhpcy50YXJnZXRBZGRlZCA9IG5ldyBFdmVudCh0aGlzKTtcbiAgICAgIHRoaXMuc2hvd01lc3NhZ2UgPSBuZXcgRXZlbnQodGhpcyk7XG4gICAgICB0aGlzLnNob3dIaXQgPSBuZXcgRXZlbnQodGhpcyk7XG4gICAgICB0aGlzLnNob3dNaXNzID0gbmV3IEV2ZW50KHRoaXMpO1xuICAgICAgdGhpcy5nYW1lU3RhcnQgPSBuZXcgRXZlbnQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZVRpbWVyID0gbmV3IEV2ZW50KHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVTaGlwc0xlZnQgPSBuZXcgRXZlbnQodGhpcyk7XG5cbiAgfVxuXG4gIGZpcmVTaGlwKGd1ZXNzKSB7XG4gICAgY29uc29sZS5sb2coZ3Vlc3MpO1xuICAgIGlmKHRoaXMuX2dhbWVTdGFydCAmJiB0aGlzLl9zaGlwc1N1bmsgPCB0aGlzLl9udW1TaGlwcykge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtU2hpcHM7IGkrKykge1xuXHRcdFx0bGV0IHNoaXAgPSB0aGlzLl9zaGlwc1tpXTtcblx0XHRcdGxldCBpbmRleCA9IHNoaXAubG9jYXRpb25zLmluZGV4T2YoZ3Vlc3MpO1xuXG5cdFx0XHRpZiAoc2hpcC5oaXRzW2luZGV4XSA9PT0gXCJoaXRcIikge1xuXHRcdFx0XHR0aGlzLnNob3dNZXNzYWdlLm5vdGlmeShcIlVwcywgWW91IGhpdCB0aGlzIGZpZWxkIGJlZm9yZSFcIik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSBlbHNlIGlmIChpbmRleCA+PSAwKSB7XG5cdFx0XHRcdHNoaXAuaGl0c1tpbmRleF0gPSBcImhpdFwiO1xuXHRcdFx0XHR0aGlzLnNob3dIaXQubm90aWZ5KGd1ZXNzKTtcblx0XHRcdFx0dGhpcy5zaG93TWVzc2FnZS5ub3RpZnkoXCJZT1UgSElUIVwiKTtcblxuXHRcdFx0XHRpZiAodGhpcy5pc1N1bmsoc2hpcCkpIHtcblx0XHRcdFx0XHR0aGlzLnNob3dNZXNzYWdlLm5vdGlmeShcIlNISVAgU1VOSyFcIik7XG5cdFx0XHRcdFx0dGhpcy5fc2hpcHNTdW5rKys7XG5cbiAgICAgICAgICBsZXQgbnVtYlNoaXBzTGVmdCA9IHRoaXMuX251bVNoaXBzIC0gdGhpcy5fc2hpcHNTdW5rO1xuICAgICAgICAgIHRoaXMuaGFuZGxlU2hpcHNMZWZ0Lm5vdGlmeShudW1iU2hpcHNMZWZ0KTtcblx0XHRcdFx0fVxuICAgICAgICBpZiAodGhpcy5fc2hpcHNTdW5rID09PSB0aGlzLl9udW1TaGlwcykge1xuICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2Uubm90aWZ5KFwiQ29uZ3JhdHVsYXRpb25zLCB5b3UgaGF2ZSBzdW5rIGFsbCB0aGUgc2hpcHMhXCIpO1xuICAgICAgICAgIHRoaXMuX2dhbWVTdGFydCA9IGZhbHNlO1xuICAgICAgICB9XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnNob3dNaXNzLm5vdGlmeShndWVzcyk7XG5cdFx0dGhpcy5zaG93TWVzc2FnZS5ub3RpZnkoXCJZT1UgTUlTUyFcIik7XG4gIH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG4gIGlzU3VuayhzaGlwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaGlwTGVuZ3RoOyBpKyspICB7XG4gICAgICBpZiAoc2hpcC5oaXRzW2ldICE9PSBcImhpdFwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLl90aW1lciA9IDA7XG4gICAgdGhpcy5fdGFyZ2V0cyA9IFtdO1xuICAgIHRoaXMuX3NoaXBzU3VuayA9IDA7XG4gICAgdGhpcy5fZ2FtZVN0YXJ0ID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dNZXNzYWdlLm5vdGlmeShcIlNpbmsgYWxsIHNoaXBzLCBHb29kIEx1Y2shXCIpO1xuICAgIHRoaXMuZ2FtZVN0YXJ0Lm5vdGlmeSgpO1xuICAgIHRoaXMuaGFuZGxlVGltZXIubm90aWZ5KDApO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5nZW5lcmF0ZVNoaXBMb2NhdGlvbnMoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtU2hpcHM7IGkrKykge1xuXHRcdFx0bGV0IHNoaXAgPSB0aGlzLl9zaGlwc1tpXTtcbiAgICAgIHNoaXAuaGl0cyA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuX2ludGVydmFsSWRcdD1cdHNldEludGVydmFsKCgpXHQ9Plx0e1xuICAgICAgICB0aGlzLl90aW1lcisrO1xuICAgICAgICB0aGlzLmhhbmRsZVRpbWVyLm5vdGlmeSh0aGlzLl90aW1lcik7XG4gICAgICAgIGlmKCF0aGlzLl9nYW1lU3RhcnQpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3RpbWVyKTtcbiAgICB9LDEwMDApO1xuXG4gIH1cblxuICBnZW5lcmF0ZVNoaXBMb2NhdGlvbnMoKSB7XG4gICAgbGV0IGxvY2F0aW9ucztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bVNoaXBzOyBpKyspIHtcbiAgICAgIGRvIHtcbiAgICAgICAgbG9jYXRpb25zID0gdGhpcy5nZW5lcmF0ZVNoaXAoKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMuY29sbGlzaW9uKGxvY2F0aW9ucykpO1xuICAgICAgdGhpcy5fc2hpcHNbaV0ubG9jYXRpb25zID0gbG9jYXRpb25zO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLl9zaGlwcyk7XG4gIH1cblxuICBnZW5lcmF0ZVNoaXAoKSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIGxldCByb3csIGNvbDtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHsgLy8gaG9yaXpvbnRhbFxuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fYm9hcmRTaXplKTtcbiAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLl9ib2FyZFNpemUgLSB0aGlzLl9zaGlwTGVuZ3RoKSk7XG4gICAgfSBlbHNlIHsgLy8gdmVydGljYWxcbiAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLl9ib2FyZFNpemUgLSB0aGlzLl9zaGlwTGVuZ3RoKSk7XG4gICAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9ib2FyZFNpemUpO1xuICAgIH1cblxuICAgIGxldCBuZXdTaGlwTG9jYXRpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgbmV3U2hpcExvY2F0aW9ucy5wdXNoKHJvdyArIFwiXCIgKyAoY29sICsgaSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U2hpcExvY2F0aW9ucy5wdXNoKChyb3cgKyBpKSArIFwiXCIgKyBjb2wpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3U2hpcExvY2F0aW9ucztcbiAgfVxuXG4gIGNvbGxpc2lvbihsb2NhdGlvbnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bVNoaXBzOyBpKyspIHtcbiAgICAgIGxldCBzaGlwID0gdGhpcy5fc2hpcHNbaV07XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxvY2F0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAoc2hpcC5sb2NhdGlvbnMuaW5kZXhPZihsb2NhdGlvbnNbal0pID49IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhZGRUYXJnZXQodGFyZ2V0KSB7XG4gICAgdGhpcy5fdGFyZ2V0cz0gWy4uLnRoaXMuX3RhcmdldHMsIHRhcmdldF07XG4gICAgdGhpcy50YXJnZXRBZGRlZC5ub3RpZnkodGFyZ2V0KTtcbiAgfVxuXG4gIGdldFRhcmdldHMoKSB7XG4gICAgICByZXR1cm4gWy4uLnRoaXMuX3RhcmdldHNdO1xuICB9XG5cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvTW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__ = __webpack_require__(0);\n\n\nclass View  {\n  constructor(model,elements) {\n    this._model = model;\n    this._elements = elements;\n    this.startButtonClicked = new __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__[\"a\" /* default */](this);\n    this.cellClicked = new __WEBPACK_IMPORTED_MODULE_0__EventDispatcher__[\"a\" /* default */](this);\n\n    let _this = this;\n\n    // add listeners\n    this._elements.gameBoard.find('td').on('click',function (event) {\n        _this.cellClicked.notify(event.target.id);\n    });\n\n    this._model.handleTimer.attach((context, time) => {\n        this._elements.timer.text(time);\n    });\n\n    this._model.handleShipsLeft.attach((context, numb) => {\n        this._elements.numbShips.text(numb);\n    });\n\n    this._model.showMessage.attach(function (context, msg) {\n        _this.displayMessage(msg);\n    });\n\n    this._model.showHit.attach(function (context, location) {\n        _this.displayHit(location);\n    });\n\n    this._model.showMiss.attach(function (context, location) {\n        _this.displayMiss(location);\n    });\n\n    this._model.gameStart.attach(function() {\n        _this.clearView();\n    });\n\n\n\n    this._model.targetAdded.attach((context, target) => {\n        let targets = this._model.getTargets();\n        console.log(targets);\n      });\n\n    this._elements.startButton.on('click',function () {\n        _this.startButtonClicked.notify();\n    });\n  }\n\n  displayMessage(msg) {\n\t\tthis._elements.messageWrapper.text(msg);\n\t}\n\n\tdisplayHit(location) {\n    let elem = $(`#${location}`);\n    elem.addClass('hit');\n\t}\n\n\tdisplayMiss(location) {\n\t\tlet elem = $(`#${location}`);\n\t\telem.addClass('miss');\n\t}\n\n  clearView() {\n    this._elements.gameBoard.find('td').removeClass();\n  }\n\n}\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = View;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9WaWV3LmpzP2RlYTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOzs7O0FBSUw7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudCBmcm9tICcuL0V2ZW50RGlzcGF0Y2hlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgIHtcbiAgY29uc3RydWN0b3IobW9kZWwsZWxlbWVudHMpIHtcbiAgICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuX2VsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgdGhpcy5zdGFydEJ1dHRvbkNsaWNrZWQgPSBuZXcgRXZlbnQodGhpcyk7XG4gICAgdGhpcy5jZWxsQ2xpY2tlZCA9IG5ldyBFdmVudCh0aGlzKTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXJzXG4gICAgdGhpcy5fZWxlbWVudHMuZ2FtZUJvYXJkLmZpbmQoJ3RkJykub24oJ2NsaWNrJyxmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgX3RoaXMuY2VsbENsaWNrZWQubm90aWZ5KGV2ZW50LnRhcmdldC5pZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tb2RlbC5oYW5kbGVUaW1lci5hdHRhY2goKGNvbnRleHQsIHRpbWUpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudHMudGltZXIudGV4dCh0aW1lKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX21vZGVsLmhhbmRsZVNoaXBzTGVmdC5hdHRhY2goKGNvbnRleHQsIG51bWIpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudHMubnVtYlNoaXBzLnRleHQobnVtYik7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tb2RlbC5zaG93TWVzc2FnZS5hdHRhY2goZnVuY3Rpb24gKGNvbnRleHQsIG1zZykge1xuICAgICAgICBfdGhpcy5kaXNwbGF5TWVzc2FnZShtc2cpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fbW9kZWwuc2hvd0hpdC5hdHRhY2goZnVuY3Rpb24gKGNvbnRleHQsIGxvY2F0aW9uKSB7XG4gICAgICAgIF90aGlzLmRpc3BsYXlIaXQobG9jYXRpb24pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fbW9kZWwuc2hvd01pc3MuYXR0YWNoKGZ1bmN0aW9uIChjb250ZXh0LCBsb2NhdGlvbikge1xuICAgICAgICBfdGhpcy5kaXNwbGF5TWlzcyhsb2NhdGlvbik7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9tb2RlbC5nYW1lU3RhcnQuYXR0YWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5jbGVhclZpZXcoKTtcbiAgICB9KTtcblxuXG5cbiAgICB0aGlzLl9tb2RlbC50YXJnZXRBZGRlZC5hdHRhY2goKGNvbnRleHQsIHRhcmdldCkgPT4ge1xuICAgICAgICBsZXQgdGFyZ2V0cyA9IHRoaXMuX21vZGVsLmdldFRhcmdldHMoKTtcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0cyk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2VsZW1lbnRzLnN0YXJ0QnV0dG9uLm9uKCdjbGljaycsZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zdGFydEJ1dHRvbkNsaWNrZWQubm90aWZ5KCk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNwbGF5TWVzc2FnZShtc2cpIHtcblx0XHR0aGlzLl9lbGVtZW50cy5tZXNzYWdlV3JhcHBlci50ZXh0KG1zZyk7XG5cdH1cblxuXHRkaXNwbGF5SGl0KGxvY2F0aW9uKSB7XG4gICAgbGV0IGVsZW0gPSAkKGAjJHtsb2NhdGlvbn1gKTtcbiAgICBlbGVtLmFkZENsYXNzKCdoaXQnKTtcblx0fVxuXG5cdGRpc3BsYXlNaXNzKGxvY2F0aW9uKSB7XG5cdFx0bGV0IGVsZW0gPSAkKGAjJHtsb2NhdGlvbn1gKTtcblx0XHRlbGVtLmFkZENsYXNzKCdtaXNzJyk7XG5cdH1cblxuICBjbGVhclZpZXcoKSB7XG4gICAgdGhpcy5fZWxlbWVudHMuZ2FtZUJvYXJkLmZpbmQoJ3RkJykucmVtb3ZlQ2xhc3MoKTtcbiAgfVxuXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL1ZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3M/MjM0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__View__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Controller__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_style_scss__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__scss_style_scss__);\n\n\n\n\n\n$(() => {\n\n  let model = new __WEBPACK_IMPORTED_MODULE_1__Model__[\"a\" /* default */]([]);\n  let view = new __WEBPACK_IMPORTED_MODULE_0__View__[\"a\" /* default */](model, {\n          'gameBoard': $('#game-board'),\n          'messageWrapper': $('.message-wrapper'),\n          'startButton': $('.btn-start'),\n          'timer': $('.timer'),\n          'numbShips': $('.numbShips')\n\n  });\n  let controller = new __WEBPACK_IMPORTED_MODULE_2__Controller__[\"a\" /* default */](model,view);\n\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcz83YzBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDs7QUFFQSxDQUFDIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlldyAgZnJvbSBcIi4vVmlld1wiO1xuaW1wb3J0IE1vZGVsICBmcm9tIFwiLi9Nb2RlbFwiO1xuaW1wb3J0IENvbnRyb2xsZXIgIGZyb20gXCIuL0NvbnRyb2xsZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc2Nzcy9zdHlsZS5zY3NzJztcblxuJCgoKSA9PiB7XG5cbiAgbGV0IG1vZGVsID0gbmV3IE1vZGVsKFtdKTtcbiAgbGV0IHZpZXcgPSBuZXcgVmlldyhtb2RlbCwge1xuICAgICAgICAgICdnYW1lQm9hcmQnOiAkKCcjZ2FtZS1ib2FyZCcpLFxuICAgICAgICAgICdtZXNzYWdlV3JhcHBlcic6ICQoJy5tZXNzYWdlLXdyYXBwZXInKSxcbiAgICAgICAgICAnc3RhcnRCdXR0b24nOiAkKCcuYnRuLXN0YXJ0JyksXG4gICAgICAgICAgJ3RpbWVyJzogJCgnLnRpbWVyJyksXG4gICAgICAgICAgJ251bWJTaGlwcyc6ICQoJy5udW1iU2hpcHMnKVxuXG4gIH0pO1xuICBsZXQgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKG1vZGVsLHZpZXcpO1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);