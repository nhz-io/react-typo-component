module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactTypoComponent = undefined;

	var _ReactTypoComponent = __webpack_require__(1);

	var _ReactTypoComponent2 = _interopRequireDefault(_ReactTypoComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ReactTypoComponent = _ReactTypoComponent2.default;
	exports.default = _ReactTypoComponent2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ctx = document.createElement('canvas').getContext('2d');
	var div = document.createElement('div');
	var measureTextWidth = function measureTextWidth(text) {
	  var font = arguments.length <= 1 || arguments[1] === undefined ? '16px Arial' : arguments[1];

	  ctx.font = font;
	  return ctx.measureText(text).width;
	};
	var max = function max(arr) {
	  return Math.max.apply(Math, arr);
	};
	var MAXITERATIONS = 100;
	var CONTAINERPROPS = ['font-style', 'font-weight', 'width', 'line-height', 'height', 'font-family', 'font-size'];
	var FONTPROPS = ['font-style', 'font-weight', 'height', 'font-family'];

	var ReactTypoComponent = function (_React$Component) {
	  _inherits(ReactTypoComponent, _React$Component);

	  function ReactTypoComponent() {
	    _classCallCheck(this, ReactTypoComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactTypoComponent).apply(this, arguments));
	  }

	  _createClass(ReactTypoComponent, [{
	    key: 'getContainerComputedStyle',
	    value: function getContainerComputedStyle() {
	      var container = arguments.length <= 0 || arguments[0] === undefined ? this.refs.container : arguments[0];
	      var properties = arguments.length <= 1 || arguments[1] === undefined ? CONTAINERPROPS : arguments[1];

	      if (container) {
	        var _ret = function () {
	          var style = getComputedStyle(container);
	          var result = {};
	          properties.forEach(function (p) {
	            return result[p] = style.getPropertyValue(p);
	          });
	          return {
	            v: result
	          };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	    }
	  }, {
	    key: 'calculateFontSize',
	    value: function calculateFontSize(text, style) {
	      if (!style) {
	        style = this.getContainerComputedStyle();
	      }
	      if (text && style) {
	        var width = parseFloat(style.width) || 0;
	        var ratio = parseFloat(style['font-size']) / (parseFloat(style['line-height']) || 1);
	        var height = (parseFloat(style.height) || 0) * ratio;
	        if (width && height && ratio) {
	          style.height = height + 'px';
	          var font = FONTPROPS.reduce(function (a, b, i) {
	            return (i < 2 ? style[a] : a) + ' ' + style[b];
	          });
	          var textWidth = measureTextWidth(text, font);
	          var count = 0;
	          while (textWidth > width) {
	            count++;
	            if (count > MAXITERATIONS) {
	              break;
	            }
	            height = height * width / (textWidth * 1.01);
	            style.height = height + 'px';
	            font = FONTPROPS.reduce(function (a, b, i) {
	              return (i < 2 ? style[a] : a) + ' ' + style[b];
	            });
	            textWidth = measureTextWidth(text, font);
	          }
	          return parseFloat(height) || null;
	        }
	      }
	      return null;
	    }
	  }, {
	    key: 'calculate',
	    value: function calculate(content) {
	      if (content) {
	        var lines = content.split(/\n/);
	        var style = this.getContainerComputedStyle();
	        style.height = parseFloat(style.height) / lines.length + 'px';
	        var measurements = lines.map(function (l) {
	          return measureTextWidth(l);
	        });
	        var text = lines[measurements.indexOf(max(measurements))];
	        return this.calculateFontSize(text, style);
	      }
	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var refs = this.refs;
	      var content = props.content;
	      var norender = props.norender;
	      var raw = props.raw;
	      var wrap = props.wrap;

	      var _content = content;
	      var container = refs.container;

	      var style = null,
	          fontSize = null;
	      if (container) {
	        if (!content) {
	          content = container.innerHTML;
	          raw = false;
	        }
	        if (content && raw) {
	          fontSize = this.calculate(content);
	        } else if (content) {
	          div.innerHTML = content;
	          if (content && !div.innerText) {
	            div.innerHTML = content.replace(/\<br[^\>]*?(\/\>|\>(.*?\(<\/br\>)?)/gmi, '\n<br></br>');
	          }
	          fontSize = this.calculate(div.innerText || div.textContent);
	        }
	        style = { fontSize: fontSize };
	      }
	      if (norender && _content) {
	        return _react2.default.createElement(
	          'p',
	          _extends({ ref: 'container' }, props, { style: style }),
	          props.children
	        );
	      } else if (_content) {
	        return _react2.default.createElement('p', _extends({
	          ref: 'container'
	        }, props, {
	          style: style,
	          dangerouslySetInnerHTML: this.renderRawContent(_content)
	        }));
	      }
	      return _react2.default.createElement(
	        'p',
	        _extends({ ref: 'container' }, props, { style: style }),
	        props.children
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.forceUpdate();
	    }
	  }, {
	    key: 'renderRawContent',
	    value: function renderRawContent(content) {
	      return { __html: content || '' };
	    }
	  }]);

	  return ReactTypoComponent;
	}(_react2.default.Component);

	exports.default = ReactTypoComponent;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);