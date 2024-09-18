/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/memory_game.js":
/*!****************************!*\
  !*** ./src/memory_game.js ***!
  \****************************/
/***/ ((module) => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar symbols = [\"🍎\", \"🍌\", \"🍇\", \"🍒\", \"🍍\", \"🍉\", \"🍓\", \"🍑\"];\nvar MemoryGame = /*#__PURE__*/function () {\n  function MemoryGame(document) {\n    _classCallCheck(this, MemoryGame);\n    this.document = document;\n    this.winPopupMessage = null;\n    this.container = null;\n    this.gameBoard = null;\n    this.startButton = null;\n    this.restartButton = null;\n    this.playAgainButton = null;\n    this.startGameMessage = null;\n    this.cards = [];\n    this.firstCard = null;\n    this.secondCard = null;\n    this.matchedPairs = 0;\n    this.setupDom();\n  }\n  return _createClass(MemoryGame, [{\n    key: \"setupDom\",\n    value: function setupDom() {\n      this.winPopupMessage = this.document.querySelector(\".win-popup-message\");\n      this.container = this.document.querySelector(\".container\");\n      this.gameBoard = this.document.querySelector(\"#game-board\");\n      this.startButton = this.document.querySelector(\"#start-button\");\n      this.restartButton = this.document.querySelector(\"#restart-button\");\n      this.playAgainButton = this.document.querySelector(\"#play-again-button\");\n      this.startGameMessage = this.document.querySelector(\".start-game-message\");\n      this.setStartButtonClickEvent();\n      this.setRestartButtonClickEvent();\n      this.setPlayAgainButtonClickEvent();\n      this.createBoard();\n    }\n  }, {\n    key: \"createBoard\",\n    value: function createBoard() {\n      var _this = this;\n      if (!this.gameBoard) return;\n      var cardSymbols = this.shuffle([].concat(symbols, symbols));\n      cardSymbols.forEach(function (symbol) {\n        var newCard = _this.document.createElement(\"div\");\n        newCard.classList.add(\"hidden\", \"card\");\n        newCard.dataset.symbol = symbol;\n        newCard.addEventListener(\"click\", function () {\n          _this.flipCard(newCard);\n          _this.displayRestartButton();\n        });\n        _this.gameBoard.appendChild(newCard);\n        _this.cards.push(newCard);\n      });\n      this.disableCards();\n    }\n  }, {\n    key: \"setStartButtonClickEvent\",\n    value: function setStartButtonClickEvent() {\n      var _this2 = this;\n      this.startButton.addEventListener(\"click\", function () {\n        _this2.enableCards();\n        _this2.startGameMessage.style.display = \"none\";\n        _this2.container.classList.add(\"fully-bright-container\");\n      });\n    }\n  }, {\n    key: \"setRestartButtonClickEvent\",\n    value: function setRestartButtonClickEvent() {\n      var _this3 = this;\n      this.restartButton.addEventListener(\"click\", function () {\n        _this3.startGame();\n        _this3.startGameMessage.style.display = \"block\";\n        _this3.container.classList.remove(\"fully-bright-container\");\n        _this3.restartButton.style.display = \"none\";\n      });\n    }\n  }, {\n    key: \"setPlayAgainButtonClickEvent\",\n    value: function setPlayAgainButtonClickEvent() {\n      var _this4 = this;\n      this.playAgainButton.addEventListener(\"click\", function () {\n        _this4.startGame();\n        _this4.winPopupMessage.style.display = \"none\";\n        _this4.startGameMessage.style.display = \"block\";\n      });\n    }\n  }, {\n    key: \"shuffle\",\n    value: function shuffle(array) {\n      for (var i = array.length - 1; i > 0; i--) {\n        var j = Math.floor(Math.random() * (i + 1));\n        var _ref = [array[j], array[i]];\n        array[i] = _ref[0];\n        array[j] = _ref[1];\n      }\n      return array;\n    }\n  }, {\n    key: \"disableCards\",\n    value: function disableCards() {\n      this.cards.forEach(function (card) {\n        card.classList.add(\"disabled\");\n      });\n    }\n  }, {\n    key: \"enableCards\",\n    value: function enableCards() {\n      this.cards.forEach(function (card) {\n        card.classList.remove(\"disabled\");\n      });\n    }\n  }, {\n    key: \"flipCard\",\n    value: function flipCard(card) {\n      if (card.classList.contains(\"matched\") || card === this.firstCard || this.secondCard) {\n        return;\n      }\n      card.classList.remove(\"hidden\");\n      card.textContent = card.dataset.symbol;\n      if (!this.firstCard) {\n        this.firstCard = card;\n      } else if (!this.secondCard) {\n        this.secondCard = card;\n        this.checkMatch();\n      }\n    }\n  }, {\n    key: \"displayRestartButton\",\n    value: function displayRestartButton() {\n      if (this.restartButton.style.display !== \"block\" && this.matchedPairs !== symbols.length) {\n        this.restartButton.style.display = \"block\";\n      }\n    }\n  }, {\n    key: \"checkMatch\",\n    value: function checkMatch() {\n      var _this5 = this;\n      if (this.firstCard.dataset.symbol === this.secondCard.dataset.symbol) {\n        this.firstCard.classList.add(\"matched\");\n        this.secondCard.classList.add(\"matched\");\n        this.matchedPairs += 1;\n        this.displayWinMessage();\n        this.resetFlippedCards();\n      } else {\n        setTimeout(function () {\n          _this5.firstCard.classList.add(\"hidden\");\n          _this5.secondCard.classList.add(\"hidden\");\n          _this5.firstCard.textContent = \"\";\n          _this5.secondCard.textContent = \"\";\n          _this5.resetFlippedCards();\n        }, 1000);\n      }\n    }\n  }, {\n    key: \"displayWinMessage\",\n    value: function displayWinMessage() {\n      var _this6 = this;\n      if (this.matchedPairs === symbols.length) {\n        setTimeout(function () {\n          _this6.restartButton.style.display = \"none\";\n          _this6.winPopupMessage.style.display = \"block\";\n          _this6.container.classList.remove(\"fully-bright-container\");\n        }, 500);\n      }\n    }\n  }, {\n    key: \"resetFlippedCards\",\n    value: function resetFlippedCards() {\n      this.firstCard = null;\n      this.secondCard = null;\n    }\n  }, {\n    key: \"startGame\",\n    value: function startGame() {\n      this.gameBoard.innerHTML = \"\";\n      this.matchedPairs = 0;\n      this.firstCard = null;\n      this.secondCard = null;\n      this.cards = [];\n      this.createBoard();\n    }\n  }]);\n}();\nif (typeof document !== \"undefined\") {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var memoryGame = new MemoryGame(document);\n  });\n}\nmodule.exports = MemoryGame;\n\n//# sourceURL=webpack://sulaiman-ndlovu-222-memory-game-in-vanilla-js-javascript/./src/memory_game.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/memory_game.js");
/******/ 	
/******/ })()
;