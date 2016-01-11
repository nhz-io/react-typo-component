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

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ctx = document.createElement('canvas').getContext('2d');
	var fontProps = ['font-style', 'font-weight', 'height', 'font-family'];

	var ReactTypoComponent = (function (_React$Component) {
	  _inherits(ReactTypoComponent, _React$Component);

	  function ReactTypoComponent() {
	    _classCallCheck(this, ReactTypoComponent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactTypoComponent).apply(this, arguments));
	  }

	  _createClass(ReactTypoComponent, [{
	    key: 'calculate',
	    value: function calculate() {
	      var container = this.refs.container;
	      var children = this.props.children;

	      var text = children && children.toString();
	      if (text && container) {
	        var _ret = (function () {
	          var style = getComputedStyle(container);
	          var width = parseFloat(style.getPropertyValue('width'));
	          var height = parseFloat(style.getPropertyValue('height'));
	          ctx.font = fontProps.map(function (p) {
	            return style.getPropertyValue(p);
	          }).join(' ');
	          var ratio = width / ctx.measureText(text).width;
	          return {
	            v: ratio <= 1 ? height * ratio : height
	          };
	        })();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	      return 0;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;

	      var fontSize = this.calculate();
	      var style = { fontSize: fontSize, lineHeight: fontSize + 'px' };
	      return _react2.default.createElement(
	        'div',
	        _extends({ ref: 'container' }, props, { style: style }),
	        props.children
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.forceUpdate();
	    }
	  }]);

	  return ReactTypoComponent;
	})(_react2.default.Component);

	exports.default = ReactTypoComponent;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);