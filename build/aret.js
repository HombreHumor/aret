(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Aret"] = factory(require("react"));
	else
		root["Aret"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (false) {
  var ReactIs = require('react-is'); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(3)();
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external___root___React___commonjs2___react___commonjs___react___amd___react__ = __webpack_require__(0);
var external___root___React___commonjs2___react___commonjs___react___amd___react___default = /*#__PURE__*/__webpack_require__.n(external___root___React___commonjs2___react___commonjs___react___amd___react__);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(1);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./src/constants.js
var STYLE_ID = {
  INIT: "styleWithCSS",
  BOLD: "bold",
  UNDERLINE: "underline",
  ITALIC: "italic",
  STRIKETHROUGH: "strikeThrough",
  TEXT_ALIGN: {
    LEFT: "justifyLeft",
    RIGHT: "justifyRight",
    CENTER: "justifyCenter",
    JUSTIFY: "justifyFull"
  },
  FONT_SIZE_ADD: "FONT_SIZE_ADD",
  FONT_SIZE_DECIDE: "FONT_SIZE_DECIDE"
};
var CSS_STYLES = {
  BOLD: "bold",
  UNDERLINE: "underline",
  ITALIC: "italic",
  STRIKETHROUGH: "line-through",
  TEXT_ALIGN: {
    LEFT: "left",
    RIGHT: "right",
    CENTER: "center",
    JUSTIFY: "justify"
  }
};
// CONCATENATED MODULE: ./src/utils/selection.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var getWordAtCaretPosition = function getWordAtCaretPosition(text, caretPos) {
  var preText = text.substring(0, caretPos);
  var postText = text.substring(caretPos, text.length);
  var currentWordArray = [];

  if (preText.indexOf(" ") > 0) {
    var words = preText.split(" ");
    currentWordArray.push(words[words.length - 1]);
  } else {
    currentWordArray.push(preText);
  }

  if (postText.indexOf(" ") > 0) {
    var _words = postText.split(" ");

    currentWordArray.push(_words[0]);
  } else {
    currentWordArray.push(postText);
  }

  return currentWordArray.join("");
};
var findAllIncoming = function findAllIncoming(substring, string) {
  var a = [],
      i = -1;

  while ((i = string.indexOf(substring, i + 1)) >= 0) {
    a.push(i);
  }

  return a;
};
var findNearestNumber = function findNearestNumber(counts, goal) {
  return counts.reduce(function (prev, curr) {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });
};
var getWordPositionInText = function getWordPositionInText(text, word, caretPos) {
  var allIncoming = findAllIncoming(word, text);
  var start = findNearestNumber(allIncoming, caretPos);
  var end = start + word.length;
  return {
    start: start,
    end: end
  };
};
var selection_buildStyleArray = function buildStyleArray(node) {
  if (node.style.cssText) {
    var nodeStyles = node.style.cssText.split(";");
    var styleArr = [];
    nodeStyles.forEach(function (style) {
      if (style) {
        var styleProperty = style.split(": ")[1];
        Object.values(CSS_STYLES).forEach(function (cssStyle, index) {
          if (styleProperty.includes(cssStyle)) {
            styleArr.push(STYLE_ID[Object.keys(CSS_STYLES)[index]]);
          }
        });
        Object.values(CSS_STYLES.TEXT_ALIGN).forEach(function (cssStyle, index) {
          if (styleProperty.includes(cssStyle)) {
            styleArr.push(STYLE_ID.TEXT_ALIGN[Object.keys(CSS_STYLES.TEXT_ALIGN)[index]]);
          }
        });
      }
    });
    return styleArr;
  }

  return [];
};
var getTextNodeStyles = function getTextNodeStyles(node) {
  var parentStyles = selection_buildStyleArray(node.parentElement);
  var grandParentStyles = selection_buildStyleArray(node.parentElement.parentElement);
  var styles = [].concat(_toConsumableArray(parentStyles), _toConsumableArray(grandParentStyles));
  return styles;
};
// CONCATENATED MODULE: ./src/services/SelectionService.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var SelectionService_SelectionService = function SelectionService() {
  var _this = this;

  _classCallCheck(this, SelectionService);

  _selection.set(this, {
    writable: true,
    value: void 0
  });

  _focusNode.set(this, {
    writable: true,
    value: void 0
  });

  _focusOffset.set(this, {
    writable: true,
    value: void 0
  });

  _textContent.set(this, {
    writable: true,
    value: void 0
  });

  _range.set(this, {
    writable: true,
    value: void 0
  });

  _selectedWord.set(this, {
    writable: true,
    value: void 0
  });

  _selectedWordPosition.set(this, {
    writable: true,
    value: void 0
  });

  _fontSize.set(this, {
    writable: true,
    value: void 0
  });

  _setSelectedWord.set(this, {
    writable: true,
    value: function value() {
      _classPrivateFieldSet(_this, _selectedWord, getWordAtCaretPosition(_classPrivateFieldGet(_this, _textContent), _classPrivateFieldGet(_this, _focusOffset)));
    }
  });

  _setSelectedWordPosition.set(this, {
    writable: true,
    value: function value() {
      _classPrivateFieldSet(_this, _selectedWordPosition, getWordPositionInText(_classPrivateFieldGet(_this, _textContent), _classPrivateFieldGet(_this, _selectedWord), _classPrivateFieldGet(_this, _focusOffset)));
    }
  });

  _setCurrentRange.set(this, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _range).setStart(_classPrivateFieldGet(_this, _focusNode), _classPrivateFieldGet(_this, _selectedWordPosition).start);

      _classPrivateFieldGet(_this, _range).setEnd(_classPrivateFieldGet(_this, _focusNode), _classPrivateFieldGet(_this, _selectedWordPosition).end);
    }
  });

  _addRangeToSelection.set(this, {
    writable: true,
    value: function value() {
      _classPrivateFieldGet(_this, _selection).removeAllRanges();

      _classPrivateFieldGet(_this, _selection).addRange(_classPrivateFieldGet(_this, _range));
    }
  });

  _checkIsAlreadySelect.set(this, {
    writable: true,
    value: function value() {
      return !!_classPrivateFieldGet(_this, _selection).toString();
    }
  });

  _setFontSizeOfSelection.set(this, {
    writable: true,
    value: function value() {
      var inlineFontSize = _classPrivateFieldGet(_this, _focusNode).parentElement.style.fontSize;

      if (inlineFontSize) {
        _classPrivateFieldSet(_this, _fontSize, parseInt(inlineFontSize));
      }
    }
  });

  _defineProperty(this, "getFontSize", function () {
    return _classPrivateFieldGet(_this, _fontSize);
  });

  _defineProperty(this, "getSelectedText", function () {
    return _classPrivateFieldGet(_this, _selection).toString() || _classPrivateFieldGet(_this, _selectedWord);
  });

  _defineProperty(this, "getStyleOfSelectedTextForChangeFontSize", function () {
    var parentStyles = _classPrivateFieldGet(_this, _focusNode).parentElement.style.cssText;

    var grandparentStyles = _classPrivateFieldGet(_this, _focusNode).parentElement.parentElement.style.cssText;

    return "".concat(parentStyles, " ").concat(grandparentStyles);
  });

  _defineProperty(this, "isPossibleExecCommand", function () {
    return !!_classPrivateFieldGet(_this, _focusNode) && (!!_classPrivateFieldGet(_this, _selection).toString() || !!_classPrivateFieldGet(_this, _focusNode).textContent);
  });

  _defineProperty(this, "init", function () {
    if (!_classPrivateFieldGet(_this, _checkIsAlreadySelect).call(_this)) {
      _classPrivateFieldGet(_this, _setSelectedWord).call(_this);

      _classPrivateFieldGet(_this, _setSelectedWordPosition).call(_this);

      _classPrivateFieldGet(_this, _setCurrentRange).call(_this);

      _classPrivateFieldGet(_this, _setFontSizeOfSelection).call(_this);

      _classPrivateFieldGet(_this, _addRangeToSelection).call(_this);
    }
  });

  _defineProperty(this, "getSelectionStyle", function () {
    return getTextNodeStyles(_classPrivateFieldGet(_this, _focusNode));
  });

  _classPrivateFieldSet(this, _selection, document.getSelection());

  _classPrivateFieldSet(this, _focusNode, _classPrivateFieldGet(this, _selection).focusNode);

  _classPrivateFieldSet(this, _focusOffset, _classPrivateFieldGet(this, _selection).focusOffset);

  _classPrivateFieldSet(this, _textContent, _classPrivateFieldGet(this, _focusNode) ? _classPrivateFieldGet(this, _focusNode).textContent : '');

  _classPrivateFieldSet(this, _range, document.createRange());

  _classPrivateFieldSet(this, _selectedWord, '');

  _classPrivateFieldSet(this, _selectedWordPosition, {
    start: 0,
    end: 0
  });

  _classPrivateFieldSet(this, _fontSize, 16);
};

var _selection = new WeakMap();

var _focusNode = new WeakMap();

var _focusOffset = new WeakMap();

var _textContent = new WeakMap();

var _range = new WeakMap();

var _selectedWord = new WeakMap();

var _selectedWordPosition = new WeakMap();

var _fontSize = new WeakMap();

var _setSelectedWord = new WeakMap();

var _setSelectedWordPosition = new WeakMap();

var _setCurrentRange = new WeakMap();

var _addRangeToSelection = new WeakMap();

var _checkIsAlreadySelect = new WeakMap();

var _setFontSizeOfSelection = new WeakMap();


// CONCATENATED MODULE: ./src/services/StyleCommandsService.js
function StyleCommandsService__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StyleCommandsService__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function StyleCommandsService__classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function StyleCommandsService__classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




var StyleCommandsService_StyleCommandsService = function StyleCommandsService() {
  var _this = this;

  StyleCommandsService__classCallCheck(this, StyleCommandsService);

  StyleCommandsService__defineProperty(this, "afterStyleCommandAction", void 0);

  _maxFontSize.set(this, {
    writable: true,
    value: void 0
  });

  _minFontSize.set(this, {
    writable: true,
    value: void 0
  });

  _styleCommand.set(this, {
    writable: true,
    value: function value(styleId) {
      var showUI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var _value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var selection = new SelectionService_SelectionService();

      if (selection.isPossibleExecCommand()) {
        selection.init();
        document.execCommand(styleId, showUI, _value);

        if (_this.afterStyleCommandAction) {
          _this.afterStyleCommandAction();
        }
      }

      selection = null;
    }
  });

  _changeFontSize.set(this, {
    writable: true,
    value: function value(isAdd) {
      var selection = new SelectionService_SelectionService();

      if (selection.isPossibleExecCommand()) {
        selection.init();
        var spanString = document.createElement('span');
        var selectionText = document.createTextNode(selection.getSelectedText());
        spanString.appendChild(selectionText);
        var selectionTextStyles = selection.getStyleOfSelectedTextForChangeFontSize();
        spanString.style.cssText = selectionTextStyles;
        var initialFontSize = selection.getFontSize();
        var increment = isAdd ? initialFontSize < StyleCommandsService__classPrivateFieldGet(_this, _maxFontSize) ? 1 : 0 : initialFontSize > StyleCommandsService__classPrivateFieldGet(_this, _minFontSize) ? -1 : 0;
        spanString.style.setProperty('font-size', "".concat(initialFontSize + increment, "px"));
        var temp = document.createElement('div');
        temp.appendChild(spanString);
        document.execCommand('insertHTML', false, temp.innerHTML);
        temp.remove();

        if (_this.afterStyleCommandAction) {
          _this.afterStyleCommandAction();
        }
      }

      selection = null;
    }
  });

  StyleCommandsService__defineProperty(this, "init", function (_ref) {
    var afterStyleCommandAction = _ref.afterStyleCommandAction,
        maxFontSize = _ref.maxFontSize,
        minFontSize = _ref.minFontSize;
    document.execCommand(STYLE_ID.INIT, false, null);

    if (afterStyleCommandAction) {
      _this.afterStyleCommandAction = afterStyleCommandAction;
    }

    StyleCommandsService__classPrivateFieldSet(_this, _maxFontSize, maxFontSize || 30);

    StyleCommandsService__classPrivateFieldSet(_this, _minFontSize, minFontSize || 12);
  });

  StyleCommandsService__defineProperty(this, "toggleBold", function () {
    StyleCommandsService__classPrivateFieldGet(_this, _styleCommand).call(_this, STYLE_ID.BOLD);
  });

  StyleCommandsService__defineProperty(this, "toggleItalic", function () {
    StyleCommandsService__classPrivateFieldGet(_this, _styleCommand).call(_this, STYLE_ID.ITALIC);
  });

  StyleCommandsService__defineProperty(this, "toggleUnderline", function () {
    StyleCommandsService__classPrivateFieldGet(_this, _styleCommand).call(_this, STYLE_ID.UNDERLINE);
  });

  StyleCommandsService__defineProperty(this, "toggleStrikeThrough", function () {
    StyleCommandsService__classPrivateFieldGet(_this, _styleCommand).call(_this, STYLE_ID.STRIKETHROUGH);
  });

  StyleCommandsService__defineProperty(this, "setTextAlignDirectly", function (align) {
    if (Object.values(STYLE_ID.TEXT_ALIGN).includes(align)) {
      StyleCommandsService__classPrivateFieldGet(_this, _styleCommand).call(_this, align);
    }
  });

  StyleCommandsService__defineProperty(this, "setTextAlign", {
    left: function left() {
      return StyleCommandsService__classPrivateFieldGet(_this, _styleCommand).call(_this, STYLE_ID.TEXT_ALIGN.LEFT);
    },
    center: function center() {
      return StyleCommandsService__classPrivateFieldGet(_this, _styleCommand).call(_this, STYLE_ID.TEXT_ALIGN.CENTER);
    },
    right: function right() {
      return StyleCommandsService__classPrivateFieldGet(_this, _styleCommand).call(_this, STYLE_ID.TEXT_ALIGN.RIGHT);
    },
    justify: function justify() {
      return StyleCommandsService__classPrivateFieldGet(_this, _styleCommand).call(_this, STYLE_ID.TEXT_ALIGN.JUSTIFY);
    }
  });

  StyleCommandsService__defineProperty(this, "toggleFontSize", {
    add: function add() {
      return StyleCommandsService__classPrivateFieldGet(_this, _changeFontSize).call(_this, true);
    },
    decide: function decide() {
      return StyleCommandsService__classPrivateFieldGet(_this, _changeFontSize).call(_this, false);
    }
  });

  this.afterStyleCommandAction = function () {};
};

var _maxFontSize = new WeakMap();

var _minFontSize = new WeakMap();

var _styleCommand = new WeakMap();

var _changeFontSize = new WeakMap();


// CONCATENATED MODULE: ./src/services/StyleStateService.js
function StyleStateService__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StyleStateService__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function StyleStateService__classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function StyleStateService__classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }



var StyleStateService_StyleStateService = function StyleStateService() {
  var _this = this;

  StyleStateService__classCallCheck(this, StyleStateService);

  _activeStyles.set(this, {
    writable: true,
    value: void 0
  });

  _setActiveStyles.set(this, {
    writable: true,
    value: function value() {
      var selection = new SelectionService_SelectionService();

      StyleStateService__classPrivateFieldSet(_this, _activeStyles, selection.getSelectionStyle());

      selection = null;
    }
  });

  StyleStateService__defineProperty(this, "updateActiveStyles", function (stateUpdater) {
    return function () {
      StyleStateService__classPrivateFieldGet(_this, _setActiveStyles).call(_this);

      stateUpdater && stateUpdater(StyleStateService__classPrivateFieldGet(_this, _activeStyles));
    };
  });

  StyleStateService__classPrivateFieldSet(this, _activeStyles, []);
};

var _activeStyles = new WeakMap();

var _setActiveStyles = new WeakMap();


// CONCATENATED MODULE: ./src/services/ContentService.js
function ContentService__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ContentService__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ContentService__classPrivateFieldGet(receiver, privateMap) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function ContentService__classPrivateFieldSet(receiver, privateMap, value) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to set private field on non-instance"); } var descriptor = privateMap.get(receiver); if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var ContentService = function ContentService() {
  var _this = this;

  ContentService__classCallCheck(this, ContentService);

  _content.set(this, {
    writable: true,
    value: void 0
  });

  ContentService__textContent.set(this, {
    writable: true,
    value: void 0
  });

  _getCurrentContent.set(this, {
    writable: true,
    value: function value() {
      var aret = document.querySelector('.aret');
      var editor = aret.querySelector('.textarea');

      ContentService__classPrivateFieldSet(_this, _content, editor.innerHTML);

      ContentService__classPrivateFieldSet(_this, ContentService__textContent, editor.textContent);
    }
  });

  ContentService__defineProperty(this, "checkIsTextContent", function () {
    ContentService__classPrivateFieldGet(_this, _getCurrentContent).call(_this);

    return ContentService__classPrivateFieldGet(_this, ContentService__textContent) === ' ' ? false : !!ContentService__classPrivateFieldGet(_this, ContentService__textContent);
  });

  ContentService__defineProperty(this, "updateState", function (stateUpdater) {
    ContentService__classPrivateFieldGet(_this, _getCurrentContent).call(_this);

    stateUpdater ? stateUpdater(_this.checkIsTextContent() ? ContentService__classPrivateFieldGet(_this, _content) : ' ') : null;
  });

  ContentService__classPrivateFieldSet(this, _content, '');

  ContentService__classPrivateFieldSet(this, ContentService__textContent, '');
};

var _content = new WeakMap();

var ContentService__textContent = new WeakMap();

var _getCurrentContent = new WeakMap();


// CONCATENATED MODULE: ./src/components/EditableArea/EditableArea.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function EditableArea__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function EditableArea__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var propTypes = {
  placeholder: prop_types_default.a.string,
  initialContent: prop_types_default.a.string,
  onClick: prop_types_default.a.func.isRequired,
  onBlur: prop_types_default.a.func,
  onFocus: prop_types_default.a.func
};

var EditableArea_EditableArea =
/*#__PURE__*/
function (_Component) {
  _inherits(EditableArea, _Component);

  function EditableArea(props) {
    var _this;

    EditableArea__classCallCheck(this, EditableArea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditableArea).call(this, props));

    EditableArea__defineProperty(_assertThisInitialized(_this), "checkForPlaceholder", function () {
      if (_this.contentService.checkIsTextContent()) {
        _this.setState({
          isPlaceholder: false
        });
      } else {
        _this.setState({
          isPlaceholder: true
        });
      }
    });

    EditableArea__defineProperty(_assertThisInitialized(_this), "onKeyUp", function () {
      _this.props.onClick();

      _this.checkForPlaceholder();
    });

    EditableArea__defineProperty(_assertThisInitialized(_this), "onClickPlaceholder", function () {
      _this.textarea.focus();
    });

    _this.contentService = new ContentService();
    _this.state = {
      initialContent: '',
      isPlaceholder: false
    };
    return _this;
  }

  _createClass(EditableArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        initialContent: this.props.initialContent
      }, this.checkForPlaceholder);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          onClick = _this$props.onClick,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus;
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.Fragment, null, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
        ref: function ref(c) {
          return _this2.textarea = c;
        },
        className: "textarea",
        contentEditable: true,
        onKeyUp: this.onKeyUp,
        onClick: onClick,
        onBlur: onBlur,
        onFocus: onFocus,
        dangerouslySetInnerHTML: {
          __html: this.state.initialContent
        }
      }), this.state.isPlaceholder && !!placeholder && external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
        className: "placeholder",
        onClick: this.onClickPlaceholder
      }, placeholder));
    }
  }]);

  return EditableArea;
}(external___root___React___commonjs2___react___commonjs___react___amd___react__["Component"]);

EditableArea_EditableArea.propTypes = propTypes;
/* harmony default export */ var components_EditableArea_EditableArea = (EditableArea_EditableArea);
// CONCATENATED MODULE: ./src/components/EditableArea/index.js

// CONCATENATED MODULE: ./src/Aret.js
function Aret__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Aret__typeof = function _typeof(obj) { return typeof obj; }; } else { Aret__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Aret__typeof(obj); }

function Aret__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Aret__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Aret__createClass(Constructor, protoProps, staticProps) { if (protoProps) Aret__defineProperties(Constructor.prototype, protoProps); if (staticProps) Aret__defineProperties(Constructor, staticProps); return Constructor; }

function Aret__possibleConstructorReturn(self, call) { if (call && (Aret__typeof(call) === "object" || typeof call === "function")) { return call; } return Aret__assertThisInitialized(self); }

function Aret__getPrototypeOf(o) { Aret__getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Aret__getPrototypeOf(o); }

function Aret__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Aret__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Aret__setPrototypeOf(subClass, superClass); }

function Aret__setPrototypeOf(o, p) { Aret__setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Aret__setPrototypeOf(o, p); }

function Aret__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Aret is the Awesome Rich Editor of Text






var Aret_propTypes = {
  placeholder: prop_types_default.a.string,
  initialContent: prop_types_default.a.string,
  renderStyleButtons: prop_types_default.a.func,
  renderToolbarWrapper: prop_types_default.a.func,
  onChange: prop_types_default.a.func,
  onFocus: prop_types_default.a.func,
  onBlur: prop_types_default.a.func,
  maxFontSize: prop_types_default.a.number,
  minFontSize: prop_types_default.a.number
};

var Aret_Aret =
/*#__PURE__*/
function (_Component) {
  Aret__inherits(Aret, _Component);

  function Aret(props) {
    var _this;

    Aret__classCallCheck(this, Aret);

    _this = Aret__possibleConstructorReturn(this, Aret__getPrototypeOf(Aret).call(this, props));

    Aret__defineProperty(Aret__assertThisInitialized(_this), "updateActiveStyles", function (activeStyles) {
      _this.setState({
        activeStyles: activeStyles
      });

      _this.contentService.updateState(_this.props.onChange);
    });

    Aret__defineProperty(Aret__assertThisInitialized(_this), "renderToolbar", function () {
      var renderToolbarWrapper = _this.props.renderToolbarWrapper;

      if (renderToolbarWrapper) {
        return renderToolbarWrapper({
          activeStyles: _this.state.activeStyles,
          styleCommandService: _this.styleCommand
        });
      }

      return null;
    });

    _this.styleCommand = new StyleCommandsService_StyleCommandsService();
    _this.styleState = new StyleStateService_StyleStateService();
    _this.contentService = new ContentService();
    _this.state = {
      activeStyles: []
    };
    return _this;
  }

  Aret__createClass(Aret, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.styleCommand.init({
        afterStyleCommandAction: this.styleState.updateActiveStyles(this.updateActiveStyles),
        maxFontSize: this.props.maxFontSize,
        minFontSize: this.props.minFontSize
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          initialContent = _this$props.initialContent,
          onBlur = _this$props.onBlur,
          onFocus = _this$props.onFocus;
      return external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement("div", {
        className: "aret"
      }, external___root___React___commonjs2___react___commonjs___react___amd___react___default.a.createElement(components_EditableArea_EditableArea, {
        onClick: this.styleState.updateActiveStyles(this.updateActiveStyles),
        initialContent: initialContent || "",
        placeholder: placeholder,
        onBlur: onBlur,
        onFocus: onFocus
      }), this.renderToolbar());
    }
  }]);

  return Aret;
}(external___root___React___commonjs2___react___commonjs___react___amd___react__["Component"]);

Aret_Aret.propTypes = Aret_propTypes;
/* harmony default export */ var src_Aret = (Aret_Aret);
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "default", function() { return src_Aret; });


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = __webpack_require__(4);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }

  ;
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }

  ; // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzYjA3Mzc1MTMyZWYzOTRmZThjYSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1NlbGVjdGlvblNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1N0eWxlQ29tbWFuZHNTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9TdHlsZVN0YXRlU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvQ29udGVudFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRWRpdGFibGVBcmVhL0VkaXRhYmxlQXJlYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXJldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiUmVhY3RJcyIsInJlcXVpcmUiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImlzRWxlbWVudCIsIlNUWUxFX0lEIiwiSU5JVCIsIkJPTEQiLCJVTkRFUkxJTkUiLCJJVEFMSUMiLCJTVFJJS0VUSFJPVUdIIiwiVEVYVF9BTElHTiIsIkxFRlQiLCJSSUdIVCIsIkNFTlRFUiIsIkpVU1RJRlkiLCJGT05UX1NJWkVfQUREIiwiRk9OVF9TSVpFX0RFQ0lERSIsIkNTU19TVFlMRVMiLCJnZXRXb3JkQXRDYXJldFBvc2l0aW9uIiwidGV4dCIsImNhcmV0UG9zIiwicHJlVGV4dCIsInN1YnN0cmluZyIsInBvc3RUZXh0IiwibGVuZ3RoIiwiY3VycmVudFdvcmRBcnJheSIsImluZGV4T2YiLCJ3b3JkcyIsInNwbGl0IiwicHVzaCIsImpvaW4iLCJmaW5kQWxsSW5jb21pbmciLCJzdHJpbmciLCJhIiwiaSIsImZpbmROZWFyZXN0TnVtYmVyIiwiY291bnRzIiwiZ29hbCIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiTWF0aCIsImFicyIsImdldFdvcmRQb3NpdGlvbkluVGV4dCIsIndvcmQiLCJhbGxJbmNvbWluZyIsInN0YXJ0IiwiZW5kIiwiYnVpbGRTdHlsZUFycmF5Iiwibm9kZSIsInN0eWxlIiwiY3NzVGV4dCIsIm5vZGVTdHlsZXMiLCJzdHlsZUFyciIsImZvckVhY2giLCJzdHlsZVByb3BlcnR5IiwiT2JqZWN0IiwidmFsdWVzIiwiY3NzU3R5bGUiLCJpbmRleCIsImluY2x1ZGVzIiwia2V5cyIsImdldFRleHROb2RlU3R5bGVzIiwicGFyZW50U3R5bGVzIiwicGFyZW50RWxlbWVudCIsImdyYW5kUGFyZW50U3R5bGVzIiwic3R5bGVzIiwiU2VsZWN0aW9uU2VydmljZSIsInNldFN0YXJ0Iiwic2V0RW5kIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJ0b1N0cmluZyIsImlubGluZUZvbnRTaXplIiwiZm9udFNpemUiLCJwYXJzZUludCIsImdyYW5kcGFyZW50U3R5bGVzIiwidGV4dENvbnRlbnQiLCJkb2N1bWVudCIsImdldFNlbGVjdGlvbiIsImZvY3VzTm9kZSIsImZvY3VzT2Zmc2V0IiwiY3JlYXRlUmFuZ2UiLCJTdHlsZUNvbW1hbmRzU2VydmljZSIsInN0eWxlSWQiLCJzaG93VUkiLCJ2YWx1ZSIsInNlbGVjdGlvbiIsImlzUG9zc2libGVFeGVjQ29tbWFuZCIsImluaXQiLCJleGVjQ29tbWFuZCIsImFmdGVyU3R5bGVDb21tYW5kQWN0aW9uIiwiaXNBZGQiLCJzcGFuU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsInNlbGVjdGlvblRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImdldFNlbGVjdGVkVGV4dCIsImFwcGVuZENoaWxkIiwic2VsZWN0aW9uVGV4dFN0eWxlcyIsImdldFN0eWxlT2ZTZWxlY3RlZFRleHRGb3JDaGFuZ2VGb250U2l6ZSIsImluaXRpYWxGb250U2l6ZSIsImdldEZvbnRTaXplIiwiaW5jcmVtZW50Iiwic2V0UHJvcGVydHkiLCJ0ZW1wIiwiaW5uZXJIVE1MIiwicmVtb3ZlIiwibWF4Rm9udFNpemUiLCJtaW5Gb250U2l6ZSIsImFsaWduIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwianVzdGlmeSIsImFkZCIsImRlY2lkZSIsIlN0eWxlU3RhdGVTZXJ2aWNlIiwiZ2V0U2VsZWN0aW9uU3R5bGUiLCJzdGF0ZVVwZGF0ZXIiLCJDb250ZW50U2VydmljZSIsImFyZXQiLCJxdWVyeVNlbGVjdG9yIiwiZWRpdG9yIiwiY2hlY2tJc1RleHRDb250ZW50IiwicHJvcFR5cGVzIiwicGxhY2Vob2xkZXIiLCJQcm9wVHlwZXMiLCJpbml0aWFsQ29udGVudCIsIm9uQ2xpY2siLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uQmx1ciIsIm9uRm9jdXMiLCJFZGl0YWJsZUFyZWEiLCJwcm9wcyIsImNvbnRlbnRTZXJ2aWNlIiwic2V0U3RhdGUiLCJpc1BsYWNlaG9sZGVyIiwiY2hlY2tGb3JQbGFjZWhvbGRlciIsInRleHRhcmVhIiwiZm9jdXMiLCJzdGF0ZSIsImMiLCJvbktleVVwIiwiX19odG1sIiwib25DbGlja1BsYWNlaG9sZGVyIiwiQ29tcG9uZW50IiwicmVuZGVyU3R5bGVCdXR0b25zIiwicmVuZGVyVG9vbGJhcldyYXBwZXIiLCJvbkNoYW5nZSIsIm51bWJlciIsIkFyZXQiLCJhY3RpdmVTdHlsZXMiLCJ1cGRhdGVTdGF0ZSIsInN0eWxlQ29tbWFuZFNlcnZpY2UiLCJzdHlsZUNvbW1hbmQiLCJTdHlsZUNvbW1hbmRTZXJ2aWNlIiwic3R5bGVTdGF0ZSIsInVwZGF0ZUFjdGl2ZVN0eWxlcyIsInJlbmRlclRvb2xiYXIiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsImVtcHR5RnVuY3Rpb24iLCJlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0IiwicmVzZXRXYXJuaW5nQ2FjaGUiLCJzaGltIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwibG9jYXRpb24iLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJlcnIiLCJFcnJvciIsIm5hbWUiLCJnZXRTaGltIiwiUmVhY3RQcm9wVHlwZXMiLCJhcnJheSIsImJvb2wiLCJvYmplY3QiLCJzeW1ib2wiLCJhbnkiLCJhcnJheU9mIiwiZWxlbWVudCIsImVsZW1lbnRUeXBlIiwiaW5zdGFuY2VPZiIsIm9iamVjdE9mIiwib25lT2YiLCJvbmVPZlR5cGUiLCJzaGFwZSIsImV4YWN0IiwiY2hlY2tQcm9wVHlwZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsK0M7Ozs7OztBQ0FBOzs7Ozs7QUFPQSxJQUFJQSxLQUFKLEVBQTJDO0FBQ3pDLE1BQUlDLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBckIsQ0FEeUMsQ0FHekM7QUFDQTs7O0FBQ0EsTUFBSUMsbUJBQW1CLEdBQUcsSUFBMUI7QUFDQUMsUUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxPQUFPLENBQUMsMkJBQUQsQ0FBUCxDQUFxQ0QsT0FBTyxDQUFDSyxTQUE3QyxFQUF3REgsbUJBQXhELENBQWpCO0FBQ0QsQ0FQRCxNQU9PO0FBQ0w7QUFDQTtBQUNBQyxRQUFNLENBQUNDLE9BQVAsR0FBaUJILG1CQUFPLENBQUMsQ0FBRCxDQUFQLEVBQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJNLElBQU1LLFFBQVEsR0FBRztBQUN0QkMsTUFBSSxFQUFFLGNBRGdCO0FBRXRCQyxNQUFJLEVBQUUsTUFGZ0I7QUFHdEJDLFdBQVMsRUFBRSxXQUhXO0FBSXRCQyxRQUFNLEVBQUUsUUFKYztBQUt0QkMsZUFBYSxFQUFFLGVBTE87QUFNdEJDLFlBQVUsRUFBRTtBQUNWQyxRQUFJLEVBQUUsYUFESTtBQUVWQyxTQUFLLEVBQUUsY0FGRztBQUdWQyxVQUFNLEVBQUUsZUFIRTtBQUlWQyxXQUFPLEVBQUU7QUFKQyxHQU5VO0FBWXRCQyxlQUFhLEVBQUUsZUFaTztBQWF0QkMsa0JBQWdCLEVBQUU7QUFiSSxDQUFqQjtBQWdCQSxJQUFNQyxVQUFVLEdBQUc7QUFDeEJYLE1BQUksRUFBRSxNQURrQjtBQUV4QkMsV0FBUyxFQUFFLFdBRmE7QUFHeEJDLFFBQU0sRUFBRSxRQUhnQjtBQUl4QkMsZUFBYSxFQUFFLGNBSlM7QUFLeEJDLFlBQVUsRUFBRTtBQUNWQyxRQUFJLEVBQUUsTUFESTtBQUVWQyxTQUFLLEVBQUUsT0FGRztBQUdWQyxVQUFNLEVBQUUsUUFIRTtBQUlWQyxXQUFPLEVBQUU7QUFKQztBQUxZLENBQW5CLEM7Ozs7Ozs7Ozs7QUNoQlA7QUFFTyxJQUFNSSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUN4RCxNQUFNQyxPQUFPLEdBQUdGLElBQUksQ0FBQ0csU0FBTCxDQUFlLENBQWYsRUFBa0JGLFFBQWxCLENBQWhCO0FBQ0EsTUFBTUcsUUFBUSxHQUFHSixJQUFJLENBQUNHLFNBQUwsQ0FBZUYsUUFBZixFQUF5QkQsSUFBSSxDQUFDSyxNQUE5QixDQUFqQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLEVBQXpCOztBQUNBLE1BQUlKLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQixHQUFoQixJQUF1QixDQUEzQixFQUE4QjtBQUM1QixRQUFNQyxLQUFLLEdBQUdOLE9BQU8sQ0FBQ08sS0FBUixDQUFjLEdBQWQsQ0FBZDtBQUNBSCxvQkFBZ0IsQ0FBQ0ksSUFBakIsQ0FBc0JGLEtBQUssQ0FBQ0EsS0FBSyxDQUFDSCxNQUFOLEdBQWUsQ0FBaEIsQ0FBM0I7QUFDRCxHQUhELE1BR087QUFDTEMsb0JBQWdCLENBQUNJLElBQWpCLENBQXNCUixPQUF0QjtBQUNEOztBQUNELE1BQUlFLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQixHQUFqQixJQUF3QixDQUE1QixFQUErQjtBQUM3QixRQUFNQyxNQUFLLEdBQUdKLFFBQVEsQ0FBQ0ssS0FBVCxDQUFlLEdBQWYsQ0FBZDs7QUFDQUgsb0JBQWdCLENBQUNJLElBQWpCLENBQXNCRixNQUFLLENBQUMsQ0FBRCxDQUEzQjtBQUNELEdBSEQsTUFHTztBQUNMRixvQkFBZ0IsQ0FBQ0ksSUFBakIsQ0FBc0JOLFFBQXRCO0FBQ0Q7O0FBQ0QsU0FBT0UsZ0JBQWdCLENBQUNLLElBQWpCLENBQXNCLEVBQXRCLENBQVA7QUFDRCxDQWpCTTtBQW1CQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNULFNBQUQsRUFBWVUsTUFBWixFQUF1QjtBQUNwRCxNQUFJQyxDQUFDLEdBQUcsRUFBUjtBQUFBLE1BQ0VDLENBQUMsR0FBRyxDQUFDLENBRFA7O0FBRUEsU0FBTyxDQUFDQSxDQUFDLEdBQUdGLE1BQU0sQ0FBQ04sT0FBUCxDQUFlSixTQUFmLEVBQTBCWSxDQUFDLEdBQUcsQ0FBOUIsQ0FBTCxLQUEwQyxDQUFqRDtBQUFvREQsS0FBQyxDQUFDSixJQUFGLENBQU9LLENBQVA7QUFBcEQ7O0FBQ0EsU0FBT0QsQ0FBUDtBQUNELENBTE07QUFPQSxJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLE1BQUQsRUFBU0MsSUFBVCxFQUFrQjtBQUNqRCxTQUFPRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDeEMsV0FBT0MsSUFBSSxDQUFDQyxHQUFMLENBQVNGLElBQUksR0FBR0gsSUFBaEIsSUFBd0JJLElBQUksQ0FBQ0MsR0FBTCxDQUFTSCxJQUFJLEdBQUdGLElBQWhCLENBQXhCLEdBQWdERyxJQUFoRCxHQUF1REQsSUFBOUQ7QUFDRCxHQUZNLENBQVA7QUFHRCxDQUpNO0FBTUEsSUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDeEIsSUFBRCxFQUFPeUIsSUFBUCxFQUFheEIsUUFBYixFQUEwQjtBQUM3RCxNQUFNeUIsV0FBVyxHQUFHZCxlQUFlLENBQUNhLElBQUQsRUFBT3pCLElBQVAsQ0FBbkM7QUFDQSxNQUFNMkIsS0FBSyxHQUFHWCxpQkFBaUIsQ0FBQ1UsV0FBRCxFQUFjekIsUUFBZCxDQUEvQjtBQUNBLE1BQU0yQixHQUFHLEdBQUdELEtBQUssR0FBR0YsSUFBSSxDQUFDcEIsTUFBekI7QUFDQSxTQUFPO0FBQ0xzQixTQUFLLEVBQUxBLEtBREs7QUFFTEMsT0FBRyxFQUFIQTtBQUZLLEdBQVA7QUFJRCxDQVJNO0FBVUEsSUFBTUMseUJBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsSUFBSSxFQUFJO0FBQ3JDLE1BQUlBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFmLEVBQXdCO0FBQ3RCLFFBQU1DLFVBQVUsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJ2QixLQUFuQixDQUF5QixHQUF6QixDQUFuQjtBQUNBLFFBQU15QixRQUFRLEdBQUcsRUFBakI7QUFDQUQsY0FBVSxDQUFDRSxPQUFYLENBQW1CLFVBQUFKLEtBQUssRUFBSTtBQUMxQixVQUFJQSxLQUFKLEVBQVc7QUFDVCxZQUFNSyxhQUFhLEdBQUdMLEtBQUssQ0FBQ3RCLEtBQU4sQ0FBWSxJQUFaLEVBQWtCLENBQWxCLENBQXRCO0FBQ0E0QixjQUFNLENBQUNDLE1BQVAsQ0FBY3hDLFVBQWQsRUFBMEJxQyxPQUExQixDQUFrQyxVQUFDSSxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDckQsY0FBSUosYUFBYSxDQUFDSyxRQUFkLENBQXVCRixRQUF2QixDQUFKLEVBQXNDO0FBQ3BDTCxvQkFBUSxDQUFDeEIsSUFBVCxDQUFjekIsUUFBUSxDQUFDb0QsTUFBTSxDQUFDSyxJQUFQLENBQVk1QyxVQUFaLEVBQXdCMEMsS0FBeEIsQ0FBRCxDQUF0QjtBQUNEO0FBQ0YsU0FKRDtBQUtBSCxjQUFNLENBQUNDLE1BQVAsQ0FBY3hDLFVBQVUsQ0FBQ1AsVUFBekIsRUFBcUM0QyxPQUFyQyxDQUE2QyxVQUFDSSxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDaEUsY0FBSUosYUFBYSxDQUFDSyxRQUFkLENBQXVCRixRQUF2QixDQUFKLEVBQXNDO0FBQ3BDTCxvQkFBUSxDQUFDeEIsSUFBVCxDQUNFekIsUUFBUSxDQUFDTSxVQUFULENBQW9COEMsTUFBTSxDQUFDSyxJQUFQLENBQVk1QyxVQUFVLENBQUNQLFVBQXZCLEVBQW1DaUQsS0FBbkMsQ0FBcEIsQ0FERjtBQUdEO0FBQ0YsU0FORDtBQU9EO0FBQ0YsS0FoQkQ7QUFpQkEsV0FBT04sUUFBUDtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNELENBeEJNO0FBMEJBLElBQU1TLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQWIsSUFBSSxFQUFJO0FBQ3ZDLE1BQU1jLFlBQVksR0FBR2YseUJBQWUsQ0FBQ0MsSUFBSSxDQUFDZSxhQUFOLENBQXBDO0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUdqQix5QkFBZSxDQUFDQyxJQUFJLENBQUNlLGFBQUwsQ0FBbUJBLGFBQXBCLENBQXpDO0FBQ0EsTUFBTUUsTUFBTSxnQ0FBT0gsWUFBUCxzQkFBd0JFLGlCQUF4QixFQUFaO0FBQ0EsU0FBT0MsTUFBUDtBQUNELENBTE0sQzs7Ozs7Ozs7OztBQ3RFUDs7SUFNcUJDLGlDLEdBVW5CLDRCQUFjO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBV0ssaUJBQU07QUFDdkIsaUNBQUksaUJBQWlCakQsc0JBQXNCLHVCQUN6QyxLQUR5Qyx1Q0FFekMsS0FGeUMsZ0JBQXZDLENBQUo7QUFJRDtBQWhCYTs7QUFBQTtBQUFBO0FBQUEsV0FrQmEsaUJBQU07QUFDL0IsaUNBQUkseUJBQXlCeUIscUJBQXFCLHVCQUNoRCxLQURnRCx1Q0FFaEQsS0FGZ0Qsd0NBR2hELEtBSGdELGdCQUE5QyxDQUFKO0FBS0Q7QUF4QmE7O0FBQUE7QUFBQTtBQUFBLFdBMEJLLGlCQUFNO0FBQ3ZCLGlDQUFJLFNBQUosQ0FBWXlCLFFBQVosdUJBQXFCLEtBQXJCLGVBQXNDLDJCQUFJLHdCQUFKLENBQTJCdEIsS0FBakU7O0FBQ0EsaUNBQUksU0FBSixDQUFZdUIsTUFBWix1QkFBbUIsS0FBbkIsZUFBb0MsMkJBQUksd0JBQUosQ0FBMkJ0QixHQUEvRDtBQUNEO0FBN0JhOztBQUFBO0FBQUE7QUFBQSxXQStCUyxpQkFBTTtBQUMzQixpQ0FBSSxhQUFKLENBQWdCdUIsZUFBaEI7O0FBQ0EsaUNBQUksYUFBSixDQUFnQkMsUUFBaEIsdUJBQXlCLEtBQXpCO0FBQ0Q7QUFsQ2E7O0FBQUE7QUFBQTtBQUFBLFdBb0NVLGlCQUFNO0FBQzVCLGFBQU8sQ0FBQyxDQUFDLDJCQUFJLGFBQUosQ0FBZ0JDLFFBQWhCLEVBQVQ7QUFDRDtBQXRDYTs7QUFBQTtBQUFBO0FBQUEsV0F3Q1ksaUJBQU07QUFDOUIsVUFBTUMsY0FBYyxHQUFHLDJCQUFJLGFBQUosQ0FBZ0JULGFBQWhCLENBQThCZCxLQUE5QixDQUFvQ3dCLFFBQTNEOztBQUNBLFVBQUlELGNBQUosRUFBb0I7QUFDbEIsbUNBQUksYUFBYUUsUUFBUSxDQUFDRixjQUFELENBQXJCLENBQUo7QUFDRDtBQUNGO0FBN0NhOztBQUFBLHVDQStDQSxZQUFNO0FBQ2xCLGlDQUFPLEtBQVA7QUFDRCxHQWpEYTs7QUFBQSwyQ0FtREksWUFBTTtBQUN0QixXQUFPLDJCQUFJLGFBQUosQ0FBZ0JELFFBQWhCLDRCQUE4QixLQUE5QixnQkFBUDtBQUNELEdBckRhOztBQUFBLG1FQXVENEIsWUFBTTtBQUM5QyxRQUFNVCxZQUFZLEdBQUcsMkJBQUksYUFBSixDQUFnQkMsYUFBaEIsQ0FBOEJkLEtBQTlCLENBQW9DQyxPQUF6RDs7QUFDQSxRQUFNeUIsaUJBQWlCLEdBQUcsMkJBQUksYUFBSixDQUFnQlosYUFBaEIsQ0FBOEJBLGFBQTlCLENBQTRDZCxLQUE1QyxDQUN2QkMsT0FESDs7QUFFQSxxQkFBVVksWUFBVixjQUEwQmEsaUJBQTFCO0FBQ0QsR0E1RGE7O0FBQUEsaURBOERVLFlBQU07QUFDNUIsV0FDRSxDQUFDLHVCQUFDLEtBQUQsYUFBRCxLQUNDLENBQUMsQ0FBQywyQkFBSSxhQUFKLENBQWdCSixRQUFoQixFQUFGLElBQWdDLENBQUMsQ0FBQywyQkFBSSxhQUFKLENBQWdCSyxXQURuRCxDQURGO0FBSUQsR0FuRWE7O0FBQUEsZ0NBcUVQLFlBQU07QUFDWCxRQUFJLHVCQUFDLEtBQUQsOEJBQUMsS0FBRCxDQUFKLEVBQW1DO0FBQ2pDLGlDQUFJLG1CQUFKLFdBQUk7O0FBQ0osaUNBQUksMkJBQUosV0FBSTs7QUFDSixpQ0FBSSxtQkFBSixXQUFJOztBQUNKLGlDQUFJLDBCQUFKLFdBQUk7O0FBQ0osaUNBQUksdUJBQUosV0FBSTtBQUNMO0FBQ0YsR0E3RWE7O0FBQUEsNkNBK0VNLFlBQU07QUFDeEIsV0FBT2YsaUJBQWlCLHVCQUFDLEtBQUQsY0FBeEI7QUFDRCxHQWpGYTs7QUFDWiwwQ0FBa0JnQixRQUFRLENBQUNDLFlBQVQsRUFBbEI7O0FBQ0EsMENBQWtCLHdDQUFnQkMsU0FBbEM7O0FBQ0EsNENBQW9CLHdDQUFnQkMsV0FBcEM7O0FBQ0EsNENBQW9CLDBDQUFrQix3Q0FBZ0JKLFdBQWxDLEdBQWdELEVBQXBFOztBQUNBLHNDQUFjQyxRQUFRLENBQUNJLFdBQVQsRUFBZDs7QUFDQSw2Q0FBcUIsRUFBckI7O0FBQ0EscURBQTZCO0FBQUVwQyxTQUFLLEVBQUUsQ0FBVDtBQUFZQyxPQUFHLEVBQUU7QUFBakIsR0FBN0I7O0FBQ0EseUNBQWlCLEVBQWpCO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCSDtBQUNBOztJQUVxQm9DLHlDLEdBS25CLGdDQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBSUUsZUFBQ0MsT0FBRCxFQUEyQztBQUFBLFVBQWpDQyxNQUFpQyx1RUFBeEIsS0FBd0I7O0FBQUEsVUFBakJDLE1BQWlCLHVFQUFULElBQVM7O0FBQ3pELFVBQUlDLFNBQVMsR0FBRyxJQUFJcEIsaUNBQUosRUFBaEI7O0FBQ0EsVUFBSW9CLFNBQVMsQ0FBQ0MscUJBQVYsRUFBSixFQUF1QztBQUNyQ0QsaUJBQVMsQ0FBQ0UsSUFBVjtBQUNBWCxnQkFBUSxDQUFDWSxXQUFULENBQXFCTixPQUFyQixFQUE4QkMsTUFBOUIsRUFBc0NDLE1BQXRDOztBQUNBLFlBQUksS0FBSSxDQUFDSyx1QkFBVCxFQUFrQztBQUNoQyxlQUFJLENBQUNBLHVCQUFMO0FBQ0Q7QUFDRjs7QUFDREosZUFBUyxHQUFHLElBQVo7QUFDRDtBQWRhOztBQUFBO0FBQUE7QUFBQSxXQWdCSSxlQUFBSyxLQUFLLEVBQUk7QUFDekIsVUFBSUwsU0FBUyxHQUFHLElBQUlwQixpQ0FBSixFQUFoQjs7QUFDQSxVQUFJb0IsU0FBUyxDQUFDQyxxQkFBVixFQUFKLEVBQXVDO0FBQ3JDRCxpQkFBUyxDQUFDRSxJQUFWO0FBQ0EsWUFBTUksVUFBVSxHQUFHZixRQUFRLENBQUNnQixhQUFULENBQXVCLE1BQXZCLENBQW5CO0FBQ0EsWUFBTUMsYUFBYSxHQUFHakIsUUFBUSxDQUFDa0IsY0FBVCxDQUNwQlQsU0FBUyxDQUFDVSxlQUFWLEVBRG9CLENBQXRCO0FBR0FKLGtCQUFVLENBQUNLLFdBQVgsQ0FBdUJILGFBQXZCO0FBQ0EsWUFBTUksbUJBQW1CLEdBQUdaLFNBQVMsQ0FBQ2EsdUNBQVYsRUFBNUI7QUFDQVAsa0JBQVUsQ0FBQzNDLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCZ0QsbUJBQTNCO0FBQ0EsWUFBTUUsZUFBZSxHQUFHZCxTQUFTLENBQUNlLFdBQVYsRUFBeEI7QUFDQSxZQUFNQyxTQUFTLEdBQUdYLEtBQUssR0FDbkJTLGVBQWUsR0FBRyxnREFBSCxlQUFmLEdBQ0UsQ0FERixHQUVFLENBSGlCLEdBSW5CQSxlQUFlLEdBQUcsZ0RBQUgsZUFBZixHQUNFLENBQUMsQ0FESCxHQUVFLENBTk47QUFPQVIsa0JBQVUsQ0FBQzNDLEtBQVgsQ0FBaUJzRCxXQUFqQixDQUNFLFdBREYsWUFFS0gsZUFBZSxHQUFHRSxTQUZ2QjtBQUlBLFlBQU1FLElBQUksR0FBRzNCLFFBQVEsQ0FBQ2dCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBVyxZQUFJLENBQUNQLFdBQUwsQ0FBaUJMLFVBQWpCO0FBQ0FmLGdCQUFRLENBQUNZLFdBQVQsQ0FBcUIsWUFBckIsRUFBbUMsS0FBbkMsRUFBMENlLElBQUksQ0FBQ0MsU0FBL0M7QUFDQUQsWUFBSSxDQUFDRSxNQUFMOztBQUNBLFlBQUksS0FBSSxDQUFDaEIsdUJBQVQsRUFBa0M7QUFDaEMsZUFBSSxDQUFDQSx1QkFBTDtBQUNEO0FBQ0Y7O0FBQ0RKLGVBQVMsR0FBRyxJQUFaO0FBQ0Q7QUFoRGE7O0FBQUEscURBa0RQLGdCQUEyRDtBQUFBLFFBQXhESSx1QkFBd0QsUUFBeERBLHVCQUF3RDtBQUFBLFFBQS9CaUIsV0FBK0IsUUFBL0JBLFdBQStCO0FBQUEsUUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUNoRS9CLFlBQVEsQ0FBQ1ksV0FBVCxDQUFxQnRGLFFBQVEsQ0FBQ0MsSUFBOUIsRUFBb0MsS0FBcEMsRUFBMkMsSUFBM0M7O0FBQ0EsUUFBSXNGLHVCQUFKLEVBQTZCO0FBQzNCLFdBQUksQ0FBQ0EsdUJBQUwsR0FBK0JBLHVCQUEvQjtBQUNEOztBQUNELG9EQUFJLGdCQUFnQmlCLFdBQVcsSUFBSSxFQUEvQixDQUFKOztBQUNBLG9EQUFJLGdCQUFnQkMsV0FBVyxJQUFJLEVBQS9CLENBQUo7QUFDRCxHQXpEYTs7QUFBQSwyREEyREQsWUFBTTtBQUNqQixvREFBSSxnQkFBSixXQUFJLEVBQWV6RyxRQUFRLENBQUNFLElBQXhCLENBQUo7QUFDRCxHQTdEYTs7QUFBQSw2REErREMsWUFBTTtBQUNuQixvREFBSSxnQkFBSixXQUFJLEVBQWVGLFFBQVEsQ0FBQ0ksTUFBeEIsQ0FBSjtBQUNELEdBakVhOztBQUFBLGdFQW1FSSxZQUFNO0FBQ3RCLG9EQUFJLGdCQUFKLFdBQUksRUFBZUosUUFBUSxDQUFDRyxTQUF4QixDQUFKO0FBQ0QsR0FyRWE7O0FBQUEsb0VBdUVRLFlBQU07QUFDMUIsb0RBQUksZ0JBQUosV0FBSSxFQUFlSCxRQUFRLENBQUNLLGFBQXhCLENBQUo7QUFDRCxHQXpFYTs7QUFBQSxxRUEyRVMsVUFBQXFHLEtBQUssRUFBSTtBQUM5QixRQUFJdEQsTUFBTSxDQUFDQyxNQUFQLENBQWNyRCxRQUFRLENBQUNNLFVBQXZCLEVBQW1Da0QsUUFBbkMsQ0FBNENrRCxLQUE1QyxDQUFKLEVBQXdEO0FBQ3RELHNEQUFJLGdCQUFKLFdBQUksRUFBZUEsS0FBZixDQUFKO0FBQ0Q7QUFDRixHQS9FYTs7QUFBQSw2REFpRkM7QUFDYkMsUUFBSSxFQUFFO0FBQUEsd0RBQU0sS0FBTixzQkFBTSxLQUFOLEVBQXlCM0csUUFBUSxDQUFDTSxVQUFULENBQW9CQyxJQUE3QztBQUFBLEtBRE87QUFFYnFHLFVBQU0sRUFBRTtBQUFBLHdEQUFNLEtBQU4sc0JBQU0sS0FBTixFQUF5QjVHLFFBQVEsQ0FBQ00sVUFBVCxDQUFvQkcsTUFBN0M7QUFBQSxLQUZLO0FBR2JvRyxTQUFLLEVBQUU7QUFBQSx3REFBTSxLQUFOLHNCQUFNLEtBQU4sRUFBeUI3RyxRQUFRLENBQUNNLFVBQVQsQ0FBb0JFLEtBQTdDO0FBQUEsS0FITTtBQUlic0csV0FBTyxFQUFFO0FBQUEsd0RBQU0sS0FBTixzQkFBTSxLQUFOLEVBQXlCOUcsUUFBUSxDQUFDTSxVQUFULENBQW9CSSxPQUE3QztBQUFBO0FBSkksR0FqRkQ7O0FBQUEsK0RBd0ZHO0FBQ2ZxRyxPQUFHLEVBQUU7QUFBQSx3REFBTSxLQUFOLHdCQUFNLEtBQU4sRUFBMkIsSUFBM0I7QUFBQSxLQURVO0FBRWZDLFVBQU0sRUFBRTtBQUFBLHdEQUFNLEtBQU4sd0JBQU0sS0FBTixFQUEyQixLQUEzQjtBQUFBO0FBRk8sR0F4Rkg7O0FBQ1osT0FBS3pCLHVCQUFMLEdBQStCLFlBQU0sQ0FBRSxDQUF2QztBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkg7O0lBRXFCMEIsbUMsR0FHbkIsNkJBQWM7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FJSyxpQkFBTTtBQUN2QixVQUFJOUIsU0FBUyxHQUFHLElBQUlwQixpQ0FBSixFQUFoQjs7QUFDQSxtREFBSSxpQkFBaUJvQixTQUFTLENBQUMrQixpQkFBVixFQUFqQixDQUFKOztBQUNBL0IsZUFBUyxHQUFHLElBQVo7QUFDRDtBQVJhOztBQUFBLGdFQVVPLFVBQUFnQyxZQUFZO0FBQUEsV0FBSSxZQUFNO0FBQ3pDLG1EQUFJLG1CQUFKLFdBQUk7O0FBQ0pBLGtCQUFZLElBQUlBLFlBQVksQ0FBQyw2Q0FBRCxpQkFBNUI7QUFDRCxLQUhnQztBQUFBLEdBVm5COztBQUNaLCtEQUFxQixFQUFyQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNQa0JDLGMsR0FJbkIsMEJBQWM7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsV0FLTyxpQkFBTTtBQUN6QixVQUFNQyxJQUFJLEdBQUczQyxRQUFRLENBQUM0QyxhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLElBQUksQ0FBQ0MsYUFBTCxDQUFtQixXQUFuQixDQUFmOztBQUNBLGdEQUFJLFlBQVlDLE1BQU0sQ0FBQ2pCLFNBQW5CLENBQUo7O0FBQ0EsZ0RBQUksK0JBQWdCaUIsTUFBTSxDQUFDOUMsV0FBdkIsQ0FBSjtBQUNEO0FBVmE7O0FBQUEsNkRBWU8sWUFBTTtBQUN6Qiw4Q0FBSSxxQkFBSixXQUFJOztBQUNKLFdBQU8sMENBQUksOEJBQUosS0FBc0IsR0FBdEIsR0FBNEIsS0FBNUIsR0FBb0MsQ0FBQyxDQUFDLDBDQUFELDhCQUE1QztBQUNELEdBZmE7O0FBQUEsc0RBaUJBLFVBQUEwQyxZQUFZLEVBQUk7QUFDNUIsOENBQUkscUJBQUosV0FBSTs7QUFDSkEsZ0JBQVksR0FDUkEsWUFBWSxDQUFDLEtBQUksQ0FBQ0ssa0JBQUwsMENBQTRCLEtBQTVCLGNBQTRDLEdBQTdDLENBREosR0FFUixJQUZKO0FBR0QsR0F0QmE7O0FBQ1osdURBQWdCLEVBQWhCOztBQUNBLDBFQUFvQixFQUFwQjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BIO0FBQ0E7QUFFQTtBQUVBLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsYUFBVyxFQUFFQyxvQkFBUyxDQUFDL0YsTUFEUDtBQUVoQmdHLGdCQUFjLEVBQUVELG9CQUFTLENBQUMvRixNQUZWO0FBR2hCaUcsU0FBTyxFQUFFRixvQkFBUyxDQUFDRyxJQUFWLENBQWVDLFVBSFI7QUFJaEJDLFFBQU0sRUFBRUwsb0JBQVMsQ0FBQ0csSUFKRjtBQUtoQkcsU0FBTyxFQUFFTixvQkFBUyxDQUFDRztBQUxILENBQWxCOztJQVFNSSx5Qjs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQixzRkFBTUEsS0FBTjs7QUFEaUIsdUZBU0csWUFBTTtBQUMxQixVQUFJLE1BQUtDLGNBQUwsQ0FBb0JaLGtCQUFwQixFQUFKLEVBQThDO0FBQzVDLGNBQUthLFFBQUwsQ0FBYztBQUFFQyx1QkFBYSxFQUFFO0FBQWpCLFNBQWQ7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLRCxRQUFMLENBQWM7QUFBRUMsdUJBQWEsRUFBRTtBQUFqQixTQUFkO0FBQ0Q7QUFDRixLQWZrQjs7QUFBQSwyRUF3QlQsWUFBTTtBQUNkLFlBQUtILEtBQUwsQ0FBV04sT0FBWDs7QUFDQSxZQUFLVSxtQkFBTDtBQUNELEtBM0JrQjs7QUFBQSxzRkE2QkUsWUFBTTtBQUN6QixZQUFLQyxRQUFMLENBQWNDLEtBQWQ7QUFDRCxLQS9Ca0I7O0FBRWpCLFVBQUtMLGNBQUwsR0FBc0IsSUFBSWhCLGNBQUosRUFBdEI7QUFDQSxVQUFLc0IsS0FBTCxHQUFhO0FBQ1hkLG9CQUFjLEVBQUUsRUFETDtBQUVYVSxtQkFBYSxFQUFFO0FBRkosS0FBYjtBQUhpQjtBQU9sQjs7Ozt3Q0FVbUI7QUFDbEIsV0FBS0QsUUFBTCxDQUNFO0FBQUVULHNCQUFjLEVBQUUsS0FBS08sS0FBTCxDQUFXUDtBQUE3QixPQURGLEVBRUUsS0FBS1csbUJBRlA7QUFJRDs7OzZCQVdRO0FBQUE7O0FBQUEsd0JBQzJDLEtBQUtKLEtBRGhEO0FBQUEsVUFDQ1QsV0FERCxlQUNDQSxXQUREO0FBQUEsVUFDY0csT0FEZCxlQUNjQSxPQURkO0FBQUEsVUFDdUJHLE1BRHZCLGVBQ3VCQSxNQUR2QjtBQUFBLFVBQytCQyxPQUQvQixlQUMrQkEsT0FEL0I7QUFFUCxhQUNFLHVHQUFDLHdGQUFELENBQU8sUUFBUCxRQUNFO0FBQ0UsV0FBRyxFQUFFLGFBQUFVLENBQUM7QUFBQSxpQkFBSyxNQUFJLENBQUNILFFBQUwsR0FBZ0JHLENBQXJCO0FBQUEsU0FEUjtBQUVFLGlCQUFTLEVBQUMsVUFGWjtBQUdFLHVCQUFlLE1BSGpCO0FBSUUsZUFBTyxFQUFFLEtBQUtDLE9BSmhCO0FBS0UsZUFBTyxFQUFFZixPQUxYO0FBTUUsY0FBTSxFQUFFRyxNQU5WO0FBT0UsZUFBTyxFQUFFQyxPQVBYO0FBUUUsK0JBQXVCLEVBQUU7QUFDdkJZLGdCQUFNLEVBQUUsS0FBS0gsS0FBTCxDQUFXZDtBQURJO0FBUjNCLFFBREYsRUFhRyxLQUFLYyxLQUFMLENBQVdKLGFBQVgsSUFBNEIsQ0FBQyxDQUFDWixXQUE5QixJQUNDO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLGVBQU8sRUFBRSxLQUFLb0I7QUFBM0MsU0FDR3BCLFdBREgsQ0FkSixDQURGO0FBcUJEOzs7O0VBekR3QnFCLDJGOztBQTREM0JiLHlCQUFZLENBQUNULFNBQWIsR0FBeUJBLFNBQXpCO0FBRWVTLGtHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1ULGNBQVMsR0FBRztBQUNoQkMsYUFBVyxFQUFFQyxvQkFBUyxDQUFDL0YsTUFEUDtBQUVoQmdHLGdCQUFjLEVBQUVELG9CQUFTLENBQUMvRixNQUZWO0FBR2hCb0gsb0JBQWtCLEVBQUVyQixvQkFBUyxDQUFDRyxJQUhkO0FBSWhCbUIsc0JBQW9CLEVBQUV0QixvQkFBUyxDQUFDRyxJQUpoQjtBQUtoQm9CLFVBQVEsRUFBRXZCLG9CQUFTLENBQUNHLElBTEo7QUFNaEJHLFNBQU8sRUFBRU4sb0JBQVMsQ0FBQ0csSUFOSDtBQU9oQkUsUUFBTSxFQUFFTCxvQkFBUyxDQUFDRyxJQVBGO0FBUWhCdEIsYUFBVyxFQUFFbUIsb0JBQVMsQ0FBQ3dCLE1BUlA7QUFTaEIxQyxhQUFXLEVBQUVrQixvQkFBUyxDQUFDd0I7QUFUUCxDQUFsQjs7SUFZTUMsUzs7Ozs7QUFDSixnQkFBWWpCLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsd0ZBQU1BLEtBQU47O0FBRGlCLG1GQXFCRSxVQUFBa0IsWUFBWSxFQUFJO0FBQ25DLFlBQUtoQixRQUFMLENBQWM7QUFBRWdCLG9CQUFZLEVBQVpBO0FBQUYsT0FBZDs7QUFDQSxZQUFLakIsY0FBTCxDQUFvQmtCLFdBQXBCLENBQWdDLE1BQUtuQixLQUFMLENBQVdlLFFBQTNDO0FBQ0QsS0F4QmtCOztBQUFBLDhFQTBCSCxZQUFNO0FBQUEsVUFDWkQsb0JBRFksR0FDYSxNQUFLZCxLQURsQixDQUNaYyxvQkFEWTs7QUFFcEIsVUFBSUEsb0JBQUosRUFBMEI7QUFDeEIsZUFBT0Esb0JBQW9CLENBQUM7QUFDMUJJLHNCQUFZLEVBQUUsTUFBS1gsS0FBTCxDQUFXVyxZQURDO0FBRTFCRSw2QkFBbUIsRUFBRSxNQUFLQztBQUZBLFNBQUQsQ0FBM0I7QUFJRDs7QUFDRCxhQUFPLElBQVA7QUFDRCxLQW5Da0I7O0FBRWpCLFVBQUtBLFlBQUwsR0FBb0IsSUFBSUMseUNBQUosRUFBcEI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLElBQUl6QyxtQ0FBSixFQUFsQjtBQUNBLFVBQUttQixjQUFMLEdBQXNCLElBQUloQixjQUFKLEVBQXRCO0FBRUEsVUFBS3NCLEtBQUwsR0FBYTtBQUNYVyxrQkFBWSxFQUFFO0FBREgsS0FBYjtBQU5pQjtBQVNsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0csWUFBTCxDQUFrQm5FLElBQWxCLENBQXVCO0FBQ3JCRSwrQkFBdUIsRUFBRSxLQUFLbUUsVUFBTCxDQUFnQkMsa0JBQWhCLENBQ3ZCLEtBQUtBLGtCQURrQixDQURKO0FBSXJCbkQsbUJBQVcsRUFBRSxLQUFLMkIsS0FBTCxDQUFXM0IsV0FKSDtBQUtyQkMsbUJBQVcsRUFBRSxLQUFLMEIsS0FBTCxDQUFXMUI7QUFMSCxPQUF2QjtBQU9EOzs7NkJBa0JRO0FBQUEsd0JBQ2tELEtBQUswQixLQUR2RDtBQUFBLFVBQ0NULFdBREQsZUFDQ0EsV0FERDtBQUFBLFVBQ2NFLGNBRGQsZUFDY0EsY0FEZDtBQUFBLFVBQzhCSSxNQUQ5QixlQUM4QkEsTUFEOUI7QUFBQSxVQUNzQ0MsT0FEdEMsZUFDc0NBLE9BRHRDO0FBRVAsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLHVHQUFDLG9DQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUt5QixVQUFMLENBQWdCQyxrQkFBaEIsQ0FBbUMsS0FBS0Esa0JBQXhDLENBRFg7QUFFRSxzQkFBYyxFQUFFL0IsY0FBYyxJQUFJLEVBRnBDO0FBR0UsbUJBQVcsRUFBRUYsV0FIZjtBQUlFLGNBQU0sRUFBRU0sTUFKVjtBQUtFLGVBQU8sRUFBRUM7QUFMWCxRQURGLEVBUUcsS0FBSzJCLGFBQUwsRUFSSCxDQURGO0FBWUQ7Ozs7RUFwRGdCYiwyRjs7QUF1RG5CSyxTQUFJLENBQUMzQixTQUFMLEdBQWlCQSxjQUFqQjtBQUVlMkIsc0RBQWYsRTs7QUNoRkE7Ozs7Ozs7O0FDQUE7Ozs7OztBQU9hOztBQUViLElBQUlTLG9CQUFvQixHQUFHbEssbUJBQU8sQ0FBQyxDQUFELENBQWxDOztBQUVBLFNBQVNtSyxhQUFULEdBQXlCLENBQUU7O0FBQzNCLFNBQVNDLHNCQUFULEdBQWtDLENBQUU7O0FBQ3BDQSxzQkFBc0IsQ0FBQ0MsaUJBQXZCLEdBQTJDRixhQUEzQzs7QUFFQWpLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixZQUFXO0FBQzFCLFdBQVNtSyxJQUFULENBQWM5QixLQUFkLEVBQXFCK0IsUUFBckIsRUFBK0JDLGFBQS9CLEVBQThDQyxRQUE5QyxFQUF3REMsWUFBeEQsRUFBc0VDLE1BQXRFLEVBQThFO0FBQzVFLFFBQUlBLE1BQU0sS0FBS1Qsb0JBQWYsRUFBcUM7QUFDbkM7QUFDQTtBQUNEOztBQUNELFFBQUlVLEdBQUcsR0FBRyxJQUFJQyxLQUFKLENBQ1IseUZBQ0EsK0NBREEsR0FFQSxnREFIUSxDQUFWO0FBS0FELE9BQUcsQ0FBQ0UsSUFBSixHQUFXLHFCQUFYO0FBQ0EsVUFBTUYsR0FBTjtBQUNEOztBQUFBO0FBQ0ROLE1BQUksQ0FBQ2xDLFVBQUwsR0FBa0JrQyxJQUFsQjs7QUFDQSxXQUFTUyxPQUFULEdBQW1CO0FBQ2pCLFdBQU9ULElBQVA7QUFDRDs7QUFBQSxHQWpCeUIsQ0FrQjFCO0FBQ0E7O0FBQ0EsTUFBSVUsY0FBYyxHQUFHO0FBQ25CQyxTQUFLLEVBQUVYLElBRFk7QUFFbkJZLFFBQUksRUFBRVosSUFGYTtBQUduQm5DLFFBQUksRUFBRW1DLElBSGE7QUFJbkJkLFVBQU0sRUFBRWMsSUFKVztBQUtuQmEsVUFBTSxFQUFFYixJQUxXO0FBTW5CckksVUFBTSxFQUFFcUksSUFOVztBQU9uQmMsVUFBTSxFQUFFZCxJQVBXO0FBU25CZSxPQUFHLEVBQUVmLElBVGM7QUFVbkJnQixXQUFPLEVBQUVQLE9BVlU7QUFXbkJRLFdBQU8sRUFBRWpCLElBWFU7QUFZbkJrQixlQUFXLEVBQUVsQixJQVpNO0FBYW5CbUIsY0FBVSxFQUFFVixPQWJPO0FBY25CN0gsUUFBSSxFQUFFb0gsSUFkYTtBQWVuQm9CLFlBQVEsRUFBRVgsT0FmUztBQWdCbkJZLFNBQUssRUFBRVosT0FoQlk7QUFpQm5CYSxhQUFTLEVBQUViLE9BakJRO0FBa0JuQmMsU0FBSyxFQUFFZCxPQWxCWTtBQW1CbkJlLFNBQUssRUFBRWYsT0FuQlk7QUFxQm5CZ0Isa0JBQWMsRUFBRTNCLHNCQXJCRztBQXNCbkJDLHFCQUFpQixFQUFFRjtBQXRCQSxHQUFyQjtBQXlCQWEsZ0JBQWMsQ0FBQ2hELFNBQWYsR0FBMkJnRCxjQUEzQjtBQUVBLFNBQU9BLGNBQVA7QUFDRCxDQWhERCxDOzs7Ozs7O0FDZkE7Ozs7OztBQU9hOztBQUViLElBQUlkLG9CQUFvQixHQUFHLDhDQUEzQjtBQUVBaEssTUFBTSxDQUFDQyxPQUFQLEdBQWlCK0osb0JBQWpCLEMiLCJmaWxlIjoiYXJldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkFyZXRcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQXJldFwiXSA9IGZhY3Rvcnkocm9vdFtcIlJlYWN0XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYjA3Mzc1MTMyZWYzOTRmZThjYSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBTVFlMRV9JRCA9IHtcbiAgSU5JVDogXCJzdHlsZVdpdGhDU1NcIixcbiAgQk9MRDogXCJib2xkXCIsXG4gIFVOREVSTElORTogXCJ1bmRlcmxpbmVcIixcbiAgSVRBTElDOiBcIml0YWxpY1wiLFxuICBTVFJJS0VUSFJPVUdIOiBcInN0cmlrZVRocm91Z2hcIixcbiAgVEVYVF9BTElHTjoge1xuICAgIExFRlQ6IFwianVzdGlmeUxlZnRcIixcbiAgICBSSUdIVDogXCJqdXN0aWZ5UmlnaHRcIixcbiAgICBDRU5URVI6IFwianVzdGlmeUNlbnRlclwiLFxuICAgIEpVU1RJRlk6IFwianVzdGlmeUZ1bGxcIlxuICB9LFxuICBGT05UX1NJWkVfQUREOiBcIkZPTlRfU0laRV9BRERcIixcbiAgRk9OVF9TSVpFX0RFQ0lERTogXCJGT05UX1NJWkVfREVDSURFXCJcbn07XG5cbmV4cG9ydCBjb25zdCBDU1NfU1RZTEVTID0ge1xuICBCT0xEOiBcImJvbGRcIixcbiAgVU5ERVJMSU5FOiBcInVuZGVybGluZVwiLFxuICBJVEFMSUM6IFwiaXRhbGljXCIsXG4gIFNUUklLRVRIUk9VR0g6IFwibGluZS10aHJvdWdoXCIsXG4gIFRFWFRfQUxJR046IHtcbiAgICBMRUZUOiBcImxlZnRcIixcbiAgICBSSUdIVDogXCJyaWdodFwiLFxuICAgIENFTlRFUjogXCJjZW50ZXJcIixcbiAgICBKVVNUSUZZOiBcImp1c3RpZnlcIlxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnN0YW50cy5qcyIsImltcG9ydCB7IFNUWUxFX0lELCBDU1NfU1RZTEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0V29yZEF0Q2FyZXRQb3NpdGlvbiA9ICh0ZXh0LCBjYXJldFBvcykgPT4ge1xuICBjb25zdCBwcmVUZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgY2FyZXRQb3MpO1xuICBjb25zdCBwb3N0VGV4dCA9IHRleHQuc3Vic3RyaW5nKGNhcmV0UG9zLCB0ZXh0Lmxlbmd0aCk7XG4gIGNvbnN0IGN1cnJlbnRXb3JkQXJyYXkgPSBbXTtcbiAgaWYgKHByZVRleHQuaW5kZXhPZihcIiBcIikgPiAwKSB7XG4gICAgY29uc3Qgd29yZHMgPSBwcmVUZXh0LnNwbGl0KFwiIFwiKTtcbiAgICBjdXJyZW50V29yZEFycmF5LnB1c2god29yZHNbd29yZHMubGVuZ3RoIC0gMV0pO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRXb3JkQXJyYXkucHVzaChwcmVUZXh0KTtcbiAgfVxuICBpZiAocG9zdFRleHQuaW5kZXhPZihcIiBcIikgPiAwKSB7XG4gICAgY29uc3Qgd29yZHMgPSBwb3N0VGV4dC5zcGxpdChcIiBcIik7XG4gICAgY3VycmVudFdvcmRBcnJheS5wdXNoKHdvcmRzWzBdKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50V29yZEFycmF5LnB1c2gocG9zdFRleHQpO1xuICB9XG4gIHJldHVybiBjdXJyZW50V29yZEFycmF5LmpvaW4oXCJcIik7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZEFsbEluY29taW5nID0gKHN1YnN0cmluZywgc3RyaW5nKSA9PiB7XG4gIHZhciBhID0gW10sXG4gICAgaSA9IC0xO1xuICB3aGlsZSAoKGkgPSBzdHJpbmcuaW5kZXhPZihzdWJzdHJpbmcsIGkgKyAxKSkgPj0gMCkgYS5wdXNoKGkpO1xuICByZXR1cm4gYTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kTmVhcmVzdE51bWJlciA9IChjb3VudHMsIGdvYWwpID0+IHtcbiAgcmV0dXJuIGNvdW50cy5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgY3Vycikge1xuICAgIHJldHVybiBNYXRoLmFicyhjdXJyIC0gZ29hbCkgPCBNYXRoLmFicyhwcmV2IC0gZ29hbCkgPyBjdXJyIDogcHJldjtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0V29yZFBvc2l0aW9uSW5UZXh0ID0gKHRleHQsIHdvcmQsIGNhcmV0UG9zKSA9PiB7XG4gIGNvbnN0IGFsbEluY29taW5nID0gZmluZEFsbEluY29taW5nKHdvcmQsIHRleHQpO1xuICBjb25zdCBzdGFydCA9IGZpbmROZWFyZXN0TnVtYmVyKGFsbEluY29taW5nLCBjYXJldFBvcyk7XG4gIGNvbnN0IGVuZCA9IHN0YXJ0ICsgd29yZC5sZW5ndGg7XG4gIHJldHVybiB7XG4gICAgc3RhcnQsXG4gICAgZW5kXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgYnVpbGRTdHlsZUFycmF5ID0gbm9kZSA9PiB7XG4gIGlmIChub2RlLnN0eWxlLmNzc1RleHQpIHtcbiAgICBjb25zdCBub2RlU3R5bGVzID0gbm9kZS5zdHlsZS5jc3NUZXh0LnNwbGl0KFwiO1wiKTtcbiAgICBjb25zdCBzdHlsZUFyciA9IFtdO1xuICAgIG5vZGVTdHlsZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgY29uc3Qgc3R5bGVQcm9wZXJ0eSA9IHN0eWxlLnNwbGl0KFwiOiBcIilbMV07XG4gICAgICAgIE9iamVjdC52YWx1ZXMoQ1NTX1NUWUxFUykuZm9yRWFjaCgoY3NzU3R5bGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKHN0eWxlUHJvcGVydHkuaW5jbHVkZXMoY3NzU3R5bGUpKSB7XG4gICAgICAgICAgICBzdHlsZUFyci5wdXNoKFNUWUxFX0lEW09iamVjdC5rZXlzKENTU19TVFlMRVMpW2luZGV4XV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXMoQ1NTX1NUWUxFUy5URVhUX0FMSUdOKS5mb3JFYWNoKChjc3NTdHlsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoc3R5bGVQcm9wZXJ0eS5pbmNsdWRlcyhjc3NTdHlsZSkpIHtcbiAgICAgICAgICAgIHN0eWxlQXJyLnB1c2goXG4gICAgICAgICAgICAgIFNUWUxFX0lELlRFWFRfQUxJR05bT2JqZWN0LmtleXMoQ1NTX1NUWUxFUy5URVhUX0FMSUdOKVtpbmRleF1dXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0eWxlQXJyO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUZXh0Tm9kZVN0eWxlcyA9IG5vZGUgPT4ge1xuICBjb25zdCBwYXJlbnRTdHlsZXMgPSBidWlsZFN0eWxlQXJyYXkobm9kZS5wYXJlbnRFbGVtZW50KTtcbiAgY29uc3QgZ3JhbmRQYXJlbnRTdHlsZXMgPSBidWlsZFN0eWxlQXJyYXkobm9kZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICBjb25zdCBzdHlsZXMgPSBbLi4ucGFyZW50U3R5bGVzLCAuLi5ncmFuZFBhcmVudFN0eWxlc107XG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3NlbGVjdGlvbi5qcyIsImltcG9ydCB7XG4gIGdldFdvcmRBdENhcmV0UG9zaXRpb24sXG4gIGdldFdvcmRQb3NpdGlvbkluVGV4dCxcbiAgZ2V0VGV4dE5vZGVTdHlsZXMsXG59IGZyb20gJy4uL3V0aWxzL3NlbGVjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdGlvblNlcnZpY2Uge1xuICAjc2VsZWN0aW9uO1xuICAjZm9jdXNOb2RlO1xuICAjZm9jdXNPZmZzZXQ7XG4gICN0ZXh0Q29udGVudDtcbiAgI3JhbmdlO1xuICAjc2VsZWN0ZWRXb3JkO1xuICAjc2VsZWN0ZWRXb3JkUG9zaXRpb247XG4gICNmb250U2l6ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNzZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRTZWxlY3Rpb24oKTtcbiAgICB0aGlzLiNmb2N1c05vZGUgPSB0aGlzLiNzZWxlY3Rpb24uZm9jdXNOb2RlO1xuICAgIHRoaXMuI2ZvY3VzT2Zmc2V0ID0gdGhpcy4jc2VsZWN0aW9uLmZvY3VzT2Zmc2V0O1xuICAgIHRoaXMuI3RleHRDb250ZW50ID0gdGhpcy4jZm9jdXNOb2RlID8gdGhpcy4jZm9jdXNOb2RlLnRleHRDb250ZW50IDogJyc7XG4gICAgdGhpcy4jcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICAgIHRoaXMuI3NlbGVjdGVkV29yZCA9ICcnO1xuICAgIHRoaXMuI3NlbGVjdGVkV29yZFBvc2l0aW9uID0geyBzdGFydDogMCwgZW5kOiAwIH07XG4gICAgdGhpcy4jZm9udFNpemUgPSAxNjtcbiAgfVxuXG4gICNzZXRTZWxlY3RlZFdvcmQgPSAoKSA9PiB7XG4gICAgdGhpcy4jc2VsZWN0ZWRXb3JkID0gZ2V0V29yZEF0Q2FyZXRQb3NpdGlvbihcbiAgICAgIHRoaXMuI3RleHRDb250ZW50LFxuICAgICAgdGhpcy4jZm9jdXNPZmZzZXRcbiAgICApO1xuICB9O1xuXG4gICNzZXRTZWxlY3RlZFdvcmRQb3NpdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLiNzZWxlY3RlZFdvcmRQb3NpdGlvbiA9IGdldFdvcmRQb3NpdGlvbkluVGV4dChcbiAgICAgIHRoaXMuI3RleHRDb250ZW50LFxuICAgICAgdGhpcy4jc2VsZWN0ZWRXb3JkLFxuICAgICAgdGhpcy4jZm9jdXNPZmZzZXRcbiAgICApO1xuICB9O1xuXG4gICNzZXRDdXJyZW50UmFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy4jcmFuZ2Uuc2V0U3RhcnQodGhpcy4jZm9jdXNOb2RlLCB0aGlzLiNzZWxlY3RlZFdvcmRQb3NpdGlvbi5zdGFydCk7XG4gICAgdGhpcy4jcmFuZ2Uuc2V0RW5kKHRoaXMuI2ZvY3VzTm9kZSwgdGhpcy4jc2VsZWN0ZWRXb3JkUG9zaXRpb24uZW5kKTtcbiAgfTtcblxuICAjYWRkUmFuZ2VUb1NlbGVjdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLiNzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgdGhpcy4jc2VsZWN0aW9uLmFkZFJhbmdlKHRoaXMuI3JhbmdlKTtcbiAgfTtcblxuICAjY2hlY2tJc0FscmVhZHlTZWxlY3QgPSAoKSA9PiB7XG4gICAgcmV0dXJuICEhdGhpcy4jc2VsZWN0aW9uLnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgI3NldEZvbnRTaXplT2ZTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgaW5saW5lRm9udFNpemUgPSB0aGlzLiNmb2N1c05vZGUucGFyZW50RWxlbWVudC5zdHlsZS5mb250U2l6ZTtcbiAgICBpZiAoaW5saW5lRm9udFNpemUpIHtcbiAgICAgIHRoaXMuI2ZvbnRTaXplID0gcGFyc2VJbnQoaW5saW5lRm9udFNpemUpO1xuICAgIH1cbiAgfTtcblxuICBnZXRGb250U2l6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy4jZm9udFNpemU7XG4gIH07XG5cbiAgZ2V0U2VsZWN0ZWRUZXh0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLiNzZWxlY3Rpb24udG9TdHJpbmcoKSB8fCB0aGlzLiNzZWxlY3RlZFdvcmQ7XG4gIH07XG5cbiAgZ2V0U3R5bGVPZlNlbGVjdGVkVGV4dEZvckNoYW5nZUZvbnRTaXplID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudFN0eWxlcyA9IHRoaXMuI2ZvY3VzTm9kZS5wYXJlbnRFbGVtZW50LnN0eWxlLmNzc1RleHQ7XG4gICAgY29uc3QgZ3JhbmRwYXJlbnRTdHlsZXMgPSB0aGlzLiNmb2N1c05vZGUucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlXG4gICAgICAuY3NzVGV4dDtcbiAgICByZXR1cm4gYCR7cGFyZW50U3R5bGVzfSAke2dyYW5kcGFyZW50U3R5bGVzfWA7XG4gIH07XG5cbiAgaXNQb3NzaWJsZUV4ZWNDb21tYW5kID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAhIXRoaXMuI2ZvY3VzTm9kZSAmJlxuICAgICAgKCEhdGhpcy4jc2VsZWN0aW9uLnRvU3RyaW5nKCkgfHwgISF0aGlzLiNmb2N1c05vZGUudGV4dENvbnRlbnQpXG4gICAgKTtcbiAgfTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy4jY2hlY2tJc0FscmVhZHlTZWxlY3QoKSkge1xuICAgICAgdGhpcy4jc2V0U2VsZWN0ZWRXb3JkKCk7XG4gICAgICB0aGlzLiNzZXRTZWxlY3RlZFdvcmRQb3NpdGlvbigpO1xuICAgICAgdGhpcy4jc2V0Q3VycmVudFJhbmdlKCk7XG4gICAgICB0aGlzLiNzZXRGb250U2l6ZU9mU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLiNhZGRSYW5nZVRvU2VsZWN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIGdldFNlbGVjdGlvblN0eWxlID0gKCkgPT4ge1xuICAgIHJldHVybiBnZXRUZXh0Tm9kZVN0eWxlcyh0aGlzLiNmb2N1c05vZGUpO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL1NlbGVjdGlvblNlcnZpY2UuanMiLCJpbXBvcnQgeyBTVFlMRV9JRCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgU2VsZWN0aW9uU2VydmljZSBmcm9tICcuL1NlbGVjdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZUNvbW1hbmRzU2VydmljZSB7XG4gIGFmdGVyU3R5bGVDb21tYW5kQWN0aW9uO1xuICAjbWF4Rm9udFNpemU7XG4gICNtaW5Gb250U2l6ZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFmdGVyU3R5bGVDb21tYW5kQWN0aW9uID0gKCkgPT4ge307XG4gIH1cblxuICAjc3R5bGVDb21tYW5kID0gKHN0eWxlSWQsIHNob3dVSSA9IGZhbHNlLCB2YWx1ZSA9IG51bGwpID0+IHtcbiAgICBsZXQgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvblNlcnZpY2UoKTtcbiAgICBpZiAoc2VsZWN0aW9uLmlzUG9zc2libGVFeGVjQ29tbWFuZCgpKSB7XG4gICAgICBzZWxlY3Rpb24uaW5pdCgpO1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoc3R5bGVJZCwgc2hvd1VJLCB2YWx1ZSk7XG4gICAgICBpZiAodGhpcy5hZnRlclN0eWxlQ29tbWFuZEFjdGlvbikge1xuICAgICAgICB0aGlzLmFmdGVyU3R5bGVDb21tYW5kQWN0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHNlbGVjdGlvbiA9IG51bGw7XG4gIH07XG5cbiAgI2NoYW5nZUZvbnRTaXplID0gaXNBZGQgPT4ge1xuICAgIGxldCBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uU2VydmljZSgpO1xuICAgIGlmIChzZWxlY3Rpb24uaXNQb3NzaWJsZUV4ZWNDb21tYW5kKCkpIHtcbiAgICAgIHNlbGVjdGlvbi5pbml0KCk7XG4gICAgICBjb25zdCBzcGFuU3RyaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICBzZWxlY3Rpb24uZ2V0U2VsZWN0ZWRUZXh0KClcbiAgICAgICk7XG4gICAgICBzcGFuU3RyaW5nLmFwcGVuZENoaWxkKHNlbGVjdGlvblRleHQpO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uVGV4dFN0eWxlcyA9IHNlbGVjdGlvbi5nZXRTdHlsZU9mU2VsZWN0ZWRUZXh0Rm9yQ2hhbmdlRm9udFNpemUoKTtcbiAgICAgIHNwYW5TdHJpbmcuc3R5bGUuY3NzVGV4dCA9IHNlbGVjdGlvblRleHRTdHlsZXM7XG4gICAgICBjb25zdCBpbml0aWFsRm9udFNpemUgPSBzZWxlY3Rpb24uZ2V0Rm9udFNpemUoKTtcbiAgICAgIGNvbnN0IGluY3JlbWVudCA9IGlzQWRkXG4gICAgICAgID8gaW5pdGlhbEZvbnRTaXplIDwgdGhpcy4jbWF4Rm9udFNpemVcbiAgICAgICAgICA/IDFcbiAgICAgICAgICA6IDBcbiAgICAgICAgOiBpbml0aWFsRm9udFNpemUgPiB0aGlzLiNtaW5Gb250U2l6ZVxuICAgICAgICAgID8gLTFcbiAgICAgICAgICA6IDA7XG4gICAgICBzcGFuU3RyaW5nLnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnZm9udC1zaXplJyxcbiAgICAgICAgYCR7aW5pdGlhbEZvbnRTaXplICsgaW5jcmVtZW50fXB4YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlbXAuYXBwZW5kQ2hpbGQoc3BhblN0cmluZyk7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCB0ZW1wLmlubmVySFRNTCk7XG4gICAgICB0ZW1wLnJlbW92ZSgpO1xuICAgICAgaWYgKHRoaXMuYWZ0ZXJTdHlsZUNvbW1hbmRBY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hZnRlclN0eWxlQ29tbWFuZEFjdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3Rpb24gPSBudWxsO1xuICB9O1xuXG4gIGluaXQgPSAoeyBhZnRlclN0eWxlQ29tbWFuZEFjdGlvbiwgbWF4Rm9udFNpemUsIG1pbkZvbnRTaXplIH0pID0+IHtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChTVFlMRV9JRC5JTklULCBmYWxzZSwgbnVsbCk7XG4gICAgaWYgKGFmdGVyU3R5bGVDb21tYW5kQWN0aW9uKSB7XG4gICAgICB0aGlzLmFmdGVyU3R5bGVDb21tYW5kQWN0aW9uID0gYWZ0ZXJTdHlsZUNvbW1hbmRBY3Rpb247XG4gICAgfVxuICAgIHRoaXMuI21heEZvbnRTaXplID0gbWF4Rm9udFNpemUgfHwgMzA7XG4gICAgdGhpcy4jbWluRm9udFNpemUgPSBtaW5Gb250U2l6ZSB8fCAxMjtcbiAgfTtcblxuICB0b2dnbGVCb2xkID0gKCkgPT4ge1xuICAgIHRoaXMuI3N0eWxlQ29tbWFuZChTVFlMRV9JRC5CT0xEKTtcbiAgfTtcblxuICB0b2dnbGVJdGFsaWMgPSAoKSA9PiB7XG4gICAgdGhpcy4jc3R5bGVDb21tYW5kKFNUWUxFX0lELklUQUxJQyk7XG4gIH07XG5cbiAgdG9nZ2xlVW5kZXJsaW5lID0gKCkgPT4ge1xuICAgIHRoaXMuI3N0eWxlQ29tbWFuZChTVFlMRV9JRC5VTkRFUkxJTkUpO1xuICB9O1xuXG4gIHRvZ2dsZVN0cmlrZVRocm91Z2ggPSAoKSA9PiB7XG4gICAgdGhpcy4jc3R5bGVDb21tYW5kKFNUWUxFX0lELlNUUklLRVRIUk9VR0gpO1xuICB9O1xuXG4gIHNldFRleHRBbGlnbkRpcmVjdGx5ID0gYWxpZ24gPT4ge1xuICAgIGlmIChPYmplY3QudmFsdWVzKFNUWUxFX0lELlRFWFRfQUxJR04pLmluY2x1ZGVzKGFsaWduKSkge1xuICAgICAgdGhpcy4jc3R5bGVDb21tYW5kKGFsaWduKTtcbiAgICB9XG4gIH07XG5cbiAgc2V0VGV4dEFsaWduID0ge1xuICAgIGxlZnQ6ICgpID0+IHRoaXMuI3N0eWxlQ29tbWFuZChTVFlMRV9JRC5URVhUX0FMSUdOLkxFRlQpLFxuICAgIGNlbnRlcjogKCkgPT4gdGhpcy4jc3R5bGVDb21tYW5kKFNUWUxFX0lELlRFWFRfQUxJR04uQ0VOVEVSKSxcbiAgICByaWdodDogKCkgPT4gdGhpcy4jc3R5bGVDb21tYW5kKFNUWUxFX0lELlRFWFRfQUxJR04uUklHSFQpLFxuICAgIGp1c3RpZnk6ICgpID0+IHRoaXMuI3N0eWxlQ29tbWFuZChTVFlMRV9JRC5URVhUX0FMSUdOLkpVU1RJRlkpLFxuICB9O1xuXG4gIHRvZ2dsZUZvbnRTaXplID0ge1xuICAgIGFkZDogKCkgPT4gdGhpcy4jY2hhbmdlRm9udFNpemUodHJ1ZSksXG4gICAgZGVjaWRlOiAoKSA9PiB0aGlzLiNjaGFuZ2VGb250U2l6ZShmYWxzZSksXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvU3R5bGVDb21tYW5kc1NlcnZpY2UuanMiLCJpbXBvcnQgU2VsZWN0aW9uU2VydmljZSBmcm9tICcuL1NlbGVjdGlvblNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZVN0YXRlU2VydmljZSB7XG4gICNhY3RpdmVTdHlsZXM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jYWN0aXZlU3R5bGVzID0gW107XG4gIH1cblxuICAjc2V0QWN0aXZlU3R5bGVzID0gKCkgPT4ge1xuICAgIGxldCBzZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uU2VydmljZSgpO1xuICAgIHRoaXMuI2FjdGl2ZVN0eWxlcyA9IHNlbGVjdGlvbi5nZXRTZWxlY3Rpb25TdHlsZSgpO1xuICAgIHNlbGVjdGlvbiA9IG51bGw7XG4gIH07XG5cbiAgdXBkYXRlQWN0aXZlU3R5bGVzID0gc3RhdGVVcGRhdGVyID0+ICgpID0+IHtcbiAgICB0aGlzLiNzZXRBY3RpdmVTdHlsZXMoKTtcbiAgICBzdGF0ZVVwZGF0ZXIgJiYgc3RhdGVVcGRhdGVyKHRoaXMuI2FjdGl2ZVN0eWxlcyk7XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvU3R5bGVTdGF0ZVNlcnZpY2UuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50U2VydmljZSB7XG4gICNjb250ZW50O1xuICAjdGV4dENvbnRlbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy4jY29udGVudCA9ICcnO1xuICAgIHRoaXMuI3RleHRDb250ZW50ID0gJyc7XG4gIH1cblxuICAjZ2V0Q3VycmVudENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcmV0Jyk7XG4gICAgY29uc3QgZWRpdG9yID0gYXJldC5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEnKTtcbiAgICB0aGlzLiNjb250ZW50ID0gZWRpdG9yLmlubmVySFRNTDtcbiAgICB0aGlzLiN0ZXh0Q29udGVudCA9IGVkaXRvci50ZXh0Q29udGVudDtcbiAgfTtcblxuICBjaGVja0lzVGV4dENvbnRlbnQgPSAoKSA9PiB7XG4gICAgdGhpcy4jZ2V0Q3VycmVudENvbnRlbnQoKTtcbiAgICByZXR1cm4gdGhpcy4jdGV4dENvbnRlbnQgPT09ICcgJyA/IGZhbHNlIDogISF0aGlzLiN0ZXh0Q29udGVudDtcbiAgfTtcblxuICB1cGRhdGVTdGF0ZSA9IHN0YXRlVXBkYXRlciA9PiB7XG4gICAgdGhpcy4jZ2V0Q3VycmVudENvbnRlbnQoKTtcbiAgICBzdGF0ZVVwZGF0ZXJcbiAgICAgID8gc3RhdGVVcGRhdGVyKHRoaXMuY2hlY2tJc1RleHRDb250ZW50KCkgPyB0aGlzLiNjb250ZW50IDogJyAnKVxuICAgICAgOiBudWxsO1xuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL0NvbnRlbnRTZXJ2aWNlLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb250ZW50U2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Db250ZW50U2VydmljZSc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluaXRpYWxDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmNsYXNzIEVkaXRhYmxlQXJlYSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY29udGVudFNlcnZpY2UgPSBuZXcgQ29udGVudFNlcnZpY2UoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5pdGlhbENvbnRlbnQ6ICcnLFxuICAgICAgaXNQbGFjZWhvbGRlcjogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNoZWNrRm9yUGxhY2Vob2xkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuY29udGVudFNlcnZpY2UuY2hlY2tJc1RleHRDb250ZW50KCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1BsYWNlaG9sZGVyOiBmYWxzZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUGxhY2Vob2xkZXI6IHRydWUgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7IGluaXRpYWxDb250ZW50OiB0aGlzLnByb3BzLmluaXRpYWxDb250ZW50IH0sXG4gICAgICB0aGlzLmNoZWNrRm9yUGxhY2Vob2xkZXJcbiAgICApO1xuICB9XG5cbiAgb25LZXlVcCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcbiAgICB0aGlzLmNoZWNrRm9yUGxhY2Vob2xkZXIoKTtcbiAgfTtcblxuICBvbkNsaWNrUGxhY2Vob2xkZXIgPSAoKSA9PiB7XG4gICAgdGhpcy50ZXh0YXJlYS5mb2N1cygpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCBvbkNsaWNrLCBvbkJsdXIsIG9uRm9jdXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHJlZj17YyA9PiAodGhpcy50ZXh0YXJlYSA9IGMpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhXCJcbiAgICAgICAgICBjb250ZW50RWRpdGFibGVcbiAgICAgICAgICBvbktleVVwPXt0aGlzLm9uS2V5VXB9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IHRoaXMuc3RhdGUuaW5pdGlhbENvbnRlbnQsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMuc3RhdGUuaXNQbGFjZWhvbGRlciAmJiAhIXBsYWNlaG9sZGVyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyXCIgb25DbGljaz17dGhpcy5vbkNsaWNrUGxhY2Vob2xkZXJ9PlxuICAgICAgICAgICAge3BsYWNlaG9sZGVyfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkVkaXRhYmxlQXJlYS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRhYmxlQXJlYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0VkaXRhYmxlQXJlYS9FZGl0YWJsZUFyZWEuanMiLCIvLyBBcmV0IGlzIHRoZSBBd2Vzb21lIFJpY2ggRWRpdG9yIG9mIFRleHRcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgU3R5bGVDb21tYW5kU2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9TdHlsZUNvbW1hbmRzU2VydmljZVwiO1xuaW1wb3J0IFN0eWxlU3RhdGVTZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VzL1N0eWxlU3RhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgQ29udGVudFNlcnZpY2UgZnJvbSBcIi4vc2VydmljZXMvQ29udGVudFNlcnZpY2VcIjtcblxuaW1wb3J0IEVkaXRhYmxlQXJlYSBmcm9tIFwiLi9jb21wb25lbnRzL0VkaXRhYmxlQXJlYVwiO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbml0aWFsQ29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVuZGVyU3R5bGVCdXR0b25zOiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVuZGVyVG9vbGJhcldyYXBwZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBtYXhGb250U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbWluRm9udFNpemU6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cbmNsYXNzIEFyZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0eWxlQ29tbWFuZCA9IG5ldyBTdHlsZUNvbW1hbmRTZXJ2aWNlKCk7XG4gICAgdGhpcy5zdHlsZVN0YXRlID0gbmV3IFN0eWxlU3RhdGVTZXJ2aWNlKCk7XG4gICAgdGhpcy5jb250ZW50U2VydmljZSA9IG5ldyBDb250ZW50U2VydmljZSgpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVN0eWxlczogW11cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zdHlsZUNvbW1hbmQuaW5pdCh7XG4gICAgICBhZnRlclN0eWxlQ29tbWFuZEFjdGlvbjogdGhpcy5zdHlsZVN0YXRlLnVwZGF0ZUFjdGl2ZVN0eWxlcyhcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVTdHlsZXNcbiAgICAgICksXG4gICAgICBtYXhGb250U2l6ZTogdGhpcy5wcm9wcy5tYXhGb250U2l6ZSxcbiAgICAgIG1pbkZvbnRTaXplOiB0aGlzLnByb3BzLm1pbkZvbnRTaXplXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVTdHlsZXMgPSBhY3RpdmVTdHlsZXMgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVTdHlsZXMgfSk7XG4gICAgdGhpcy5jb250ZW50U2VydmljZS51cGRhdGVTdGF0ZSh0aGlzLnByb3BzLm9uQ2hhbmdlKTtcbiAgfTtcblxuICByZW5kZXJUb29sYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVuZGVyVG9vbGJhcldyYXBwZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHJlbmRlclRvb2xiYXJXcmFwcGVyKSB7XG4gICAgICByZXR1cm4gcmVuZGVyVG9vbGJhcldyYXBwZXIoe1xuICAgICAgICBhY3RpdmVTdHlsZXM6IHRoaXMuc3RhdGUuYWN0aXZlU3R5bGVzLFxuICAgICAgICBzdHlsZUNvbW1hbmRTZXJ2aWNlOiB0aGlzLnN0eWxlQ29tbWFuZFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCBpbml0aWFsQ29udGVudCwgb25CbHVyLCBvbkZvY3VzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFyZXRcIj5cbiAgICAgICAgPEVkaXRhYmxlQXJlYVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3R5bGVTdGF0ZS51cGRhdGVBY3RpdmVTdHlsZXModGhpcy51cGRhdGVBY3RpdmVTdHlsZXMpfVxuICAgICAgICAgIGluaXRpYWxDb250ZW50PXtpbml0aWFsQ29udGVudCB8fCBcIlwifVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgICAvPlxuICAgICAgICB7dGhpcy5yZW5kZXJUb29sYmFyKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFyZXQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBBcmV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FyZXQuanMiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4vQXJldFwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyJdLCJzb3VyY2VSb290IjoiIn0=