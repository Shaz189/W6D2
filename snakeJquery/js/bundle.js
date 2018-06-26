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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/board.js":
/*!*********************!*\
  !*** ./js/board.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Snake = __webpack_require__(/*! ./snake.js */ \"./js/snake.js\");\n\n\nclass Board {\n  constructor () {\n    this.snake = new Snake();\n    const grid = Array(20);\n    for (let i = 0; i < grid.length; i++) {\n      grid[i] = Array(20);\n      for (let j = 0; j < grid[i].length; j++) {\n        grid[i][j] = 1;\n      }\n    }\n    this.grid = grid;\n    this.apples = null;\n  }\n  \n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./js/board.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const Board = require('./board.js');\nconst SnakeView = __webpack_require__(/*! ./snake-view.js */ \"./js/snake-view.js\");\n\n$(() => {\n  const root = $('figure');\n  // const board = new Board();\n  const snakeview = new SnakeView(root);\n  \n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/snake-view.js":
/*!**************************!*\
  !*** ./js/snake-view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board.js */ \"./js/board.js\");\n\nclass View {\n  constructor (rootEl) {\n    this.rootEl = rootEl;\n    this.board = new Board();\n    this.setup();\n    this.render();\n    $(window).on('keydown', this.changedirection.bind(this));\n    setInterval(this.render.bind(this), 5);\n  }\n  \n  changedirection(e) {\n    if(e.key===\"ArrowLeft\") {\n      this.snake().turn(\"W\");\n    } else if(e.key===\"ArrowRight\") {\n      this.snake().turn(\"E\");\n    } else if(e.key===\"ArrowUp\") {\n      this.snake().turn(\"N\");\n    } else if(e.key===\"ArrowDown\") {\n      this.snake().turn(\"S\");\n    }\n    this.render();\n  }\n  \n  snake() {\n    return this.board.snake;\n  }\n  \n  setup() {\n    for (let i = 0; i < 20; i++) {\n      this.rootEl.append(`<ul class='row${i}'></ul>`);\n    }\n    for (let j = 0; j < 20; j++) {\n      $('ul').append(`<li class='col${j}'></li>`);\n    }\n  }\n  \n  render() {\n    // const that = this;\n    // const segments = that.board.snake.segments;\n    $('li').removeClass('snaked');\n    for (let i = 0; i < this.board.snake.segments.length; i++) {\n      $(`ul.row${this.board.snake.segments[i][0]} > li.col${this.board.snake.segments[i][1]}`).addClass(\"snaked\");\n    }\n  }\n}\n\nmodule.exports = View;\n\n//# sourceURL=webpack:///./js/snake-view.js?");

/***/ }),

/***/ "./js/snake.js":
/*!*********************!*\
  !*** ./js/snake.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Snake {\n  constructor (){\n    this.direction = \"N\";\n    this.segments = [[10,10]];\n    setInterval(this.move.bind(this), 50);\n  }\n  \n  move(){\n    const head  = this.segments[0];\n    if(this.direction === \"N\"){\n      head[0] = head[0] - 1;\n      this.segments.pop();\n      this.segments.unshift(head);\n    } else if (this.direction === \"S\") {\n      head[0] = head[0] + 1;\n      this.segments.pop();\n      this.segments.unshift(head);\n    } else if (this.direction === \"W\") {\n      head[1] = head[1]-1;\n      this.segments.pop();\n      this.segments.unshift(head);\n    } else if (this.direction === \"E\") {\n      head[1] = head[1]+1;\n      this.segments.pop();\n      this.segments.unshift(head);\n    }\n  }\n  \n  turn(direction) {\n    this.direction = direction;\n  }\n  \n}\n\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack:///./js/snake.js?");

/***/ })

/******/ });