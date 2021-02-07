(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"],{

/***/ "./assets/js/react/components/CustomAlert.js":
/*!***************************************************!*\
  !*** ./assets/js/react/components/CustomAlert.js ***!
  \***************************************************/
/*! exports provided: CustomAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAlert", function() { return CustomAlert; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var CustomAlert = function CustomAlert(_ref) {
  var text = _ref.text;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var classNames = visible ? "custom-alert custom-alert-visible" : "custom-alert";
  Object(react__WEBPACK_IMPORTED_MODULE_13__["useEffect"])(function () {
    setVisible(true);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: classNames
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", null, "OK")));
};

/***/ }),

/***/ "./assets/js/react/components/Footer.js":
/*!**********************************************!*\
  !*** ./assets/js/react/components/Footer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Footer = /*#__PURE__*/function (_React$Component) {
  _inherits(Footer, _React$Component);

  var _super = _createSuper(Footer);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _super.call(this, props);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var githubLink = "https://github.com/JanSopko/design-helper-tool";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        id: "footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        key: "1",
        className: "clickable",
        onClick: function onClick() {
          return window.open(githubLink);
        }
      }, "GitHub")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("small", null, "J\xE1n Sopko, Mat\xFA\u0161 \u010Ci\u017Em\xE1r \xA92020"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);



/***/ }),

/***/ "./assets/js/react/components/LogoutLink.js":
/*!**************************************************!*\
  !*** ./assets/js/react/components/LogoutLink.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogoutLink; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var LogoutLink = /*#__PURE__*/function (_React$Component) {
  _inherits(LogoutLink, _React$Component);

  var _super = _createSuper(LogoutLink);

  function LogoutLink(props) {
    _classCallCheck(this, LogoutLink);

    return _super.call(this, props);
  }

  _createClass(LogoutLink, [{
    key: "onLogout",
    value: function onLogout(e) {
      e.preventDefault();

      if (confirm("Are you sure you want to logout?")) {
        axios__WEBPACK_IMPORTED_MODULE_15___default.a.post(this.props.path, {}).then(function (res) {
          if (res.data.success !== undefined && res.data.success) {
            window.location.href = '/';
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
        href: this.props.path,
        onClick: function onClick(e) {
          return _this.onLogout(e);
        }
      }, this.props.text);
    }
  }]);

  return LogoutLink;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);



/***/ }),

/***/ "./assets/js/react/components/Navigation.js":
/*!**************************************************!*\
  !*** ./assets/js/react/components/Navigation.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _LogoutLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./LogoutLink */ "./assets/js/react/components/LogoutLink.js");
/* harmony import */ var _homepage_HomepageWrapper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./homepage/HomepageWrapper */ "./assets/js/react/components/homepage/HomepageWrapper.js");

















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Navigation = /*#__PURE__*/function (_React$Component) {
  _inherits(Navigation, _React$Component);

  var _super = _createSuper(Navigation);

  function Navigation() {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _super.call(this);
    _this.language = window.localStorage.getItem(_homepage_HomepageWrapper__WEBPACK_IMPORTED_MODULE_19__["LANGUAGE_KEY"]) || _homepage_HomepageWrapper__WEBPACK_IMPORTED_MODULE_19__["ENGLISH"];
    _this.navbarDataUrl = '/ui-data/navbar';
    _this.state = {
      navItems: []
    };
    console.log(_this.language);
    return _this;
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_17___default.a.get(this.navbarDataUrl).then(function (res) {
        _this2.setState({
          navItems: res.data
        });
      });
      window.document.getElementsByTagName('body')[0].addEventListener('click', function (e) {
        if (e.target.id !== "menu-list" && !e.target.classList.contains("hamburger") && !e.target.classList.contains("hamburger-bar")) {
          e.preventDefault();
          document.getElementById("menu-list").classList.remove("active");
          document.getElementById("bar1").classList.remove('rotate1');
          document.getElementById("bar3").classList.remove('rotate2');
        }
      });
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      document.getElementById("menu-list").classList.toggle('active');
      document.getElementById("bar1").classList.toggle('rotate1');
      document.getElementById("bar3").classList.toggle('rotate2');
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        id: "navbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
        className: "hamburger",
        id: "menu-hamburger",
        onClick: this.toggleMenu
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
        className: "hamburger-bar",
        id: "bar1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
        className: "hamburger-bar",
        id: "bar2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("span", {
        className: "hamburger-bar",
        id: "bar3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("ul", {
        id: "menu-list"
      }, this.state.navItems.map(function (item) {
        if (item.id !== undefined) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("li", {
            key: item.id,
            onClick: function onClick() {
              return window.location.href = item.link;
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("a", {
            href: item.link
          }, item[_this3.language]));
        } else if (item.logout !== undefined) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("li", {
            key: item.logout
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_LogoutLink__WEBPACK_IMPORTED_MODULE_18__["default"], {
            path: item.path,
            text: item.logout
          }));
        }
      })));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component);



/***/ }),

/***/ "./assets/js/react/components/homepage/EnglishContent.js":
/*!***************************************************************!*\
  !*** ./assets/js/react/components/homepage/EnglishContent.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var EnglishContent = function EnglishContent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Introduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This web application was created as a school project at University of Zilina. The purpose of this application is to make creation of themes for static websites easier for people without programming skills. By no means can it compete with tools like WordPress, but on the other hand, it is much easier to use."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "How to use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 1
  }, "In order to create a web theme, you must be ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "logged"), " into a user ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "account"), ". You can either log into an existing account or create a new one in the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Sign in/up"), " section."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 2
  }, "Continue to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Create"), " section and choose to either create a new theme or continue designing some of your existing themes."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 3
  }, "If you choose yo create a new ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Theme"), ", a form will be displayed. Fill out the name of your new theme (same user can't have multiple themes with the same name), choose ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "privacy level"), "of your theme and optionally ad a description. You can change these properties any time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 4
  }, "There are 3 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Privacy levels"), " of themes.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Private"), " (visible only for the owner)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Visible for logged users only")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Public"), " (visible for everyone)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 5
  }, "Each theme can have multiple pages, you can add them by clicking on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Add page"), " button."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "You can edit pages by clicking on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Edit"), " button in the pages list. After that, a menu with GUI will be displayed to you, as you can see on the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#showcase-video",
    onClick: function onClick() {
      return window.location = '#showcase-video';
    }
  }, "video below"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 6
  }, "Finally, when you're all done, you can download your theme by clicking the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Download"), " button in the theme section."))));
};

/* harmony default export */ __webpack_exports__["default"] = (EnglishContent);

/***/ }),

/***/ "./assets/js/react/components/homepage/HomepageWrapper.js":
/*!****************************************************************!*\
  !*** ./assets/js/react/components/homepage/HomepageWrapper.js ***!
  \****************************************************************/
/*! exports provided: ENGLISH, SLOVAK, LANGUAGE_KEY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENGLISH", function() { return ENGLISH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLOVAK", function() { return SLOVAK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_KEY", function() { return LANGUAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomepageWrapper; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _EnglishContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./EnglishContent */ "./assets/js/react/components/homepage/EnglishContent.js");
/* harmony import */ var _SlovakContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SlovakContent */ "./assets/js/react/components/homepage/SlovakContent.js");
/* harmony import */ var _LanguageSwitch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LanguageSwitch */ "./assets/js/react/components/homepage/LanguageSwitch.js");
/* harmony import */ var _CustomAlert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../CustomAlert */ "./assets/js/react/components/CustomAlert.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ENGLISH = 'EN';
var SLOVAK = 'SK';
var LANGUAGE_KEY = 'lang';
function HomepageWrapper() {
  var languageChoice = window.localStorage.getItem(LANGUAGE_KEY) || ENGLISH;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(languageChoice),
      _useState2 = _slicedToArray(_useState, 2),
      currentLanguage = _useState2[0],
      setCurrentLanguage = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_LanguageSwitch__WEBPACK_IMPORTED_MODULE_17__["default"], {
    lang: currentLanguage,
    setGlobalLang: setCurrentLanguage
  }), currentLanguage === ENGLISH ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_EnglishContent__WEBPACK_IMPORTED_MODULE_15__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_SlovakContent__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    style: {
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      marginTop: 100
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("video", {
    width: "95%",
    height: "90%",
    autoPlay: true,
    loop: true,
    muted: true,
    id: "showcase-video"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("source", {
    src: "../img/video1.mov",
    type: "video/mp4"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], null));
}

/***/ }),

/***/ "./assets/js/react/components/homepage/LanguageSwitch.js":
/*!***************************************************************!*\
  !*** ./assets/js/react/components/homepage/LanguageSwitch.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _HomepageWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./HomepageWrapper */ "./assets/js/react/components/homepage/HomepageWrapper.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var LanguageSwitch = function LanguageSwitch(_ref) {
  var lang = _ref.lang,
      setGlobalLang = _ref.setGlobalLang;
  var languages = [_HomepageWrapper__WEBPACK_IMPORTED_MODULE_16__["ENGLISH"], _HomepageWrapper__WEBPACK_IMPORTED_MODULE_16__["SLOVAK"]];
  var flags = [{
    language: _HomepageWrapper__WEBPACK_IMPORTED_MODULE_16__["ENGLISH"],
    flag: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/joypixels/275/flag-united-kingdom_1f1ec-1f1e7.png'
  }, {
    language: _HomepageWrapper__WEBPACK_IMPORTED_MODULE_16__["SLOVAK"],
    flag: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/257/flag-slovakia_1f1f8-1f1f0.png'
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(lang),
      _useState2 = _slicedToArray(_useState, 2),
      language = _useState2[0],
      setLanguage = _useState2[1];

  var selectLanguage = function selectLanguage(lng) {
    window.localStorage.setItem(_HomepageWrapper__WEBPACK_IMPORTED_MODULE_16__["LANGUAGE_KEY"], lng);
    setLanguage(lng);
    setGlobalLang(lng);
    location.reload();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    style: {
      height: 30,
      width: 280,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid lightgray',
      boxShadow: '0px 0px 3px 3px rgba(180, 230, 250, 0.2)',
      borderRadius: 5,
      backgroundColor: '#fdfefd',
      padding: '3px 0 3px 7px',
      position: 'absolute',
      right: 50,
      top: 80,
      fontFamily: 'Ubuntu'
    }
  }, language === _HomepageWrapper__WEBPACK_IMPORTED_MODULE_16__["ENGLISH"] ? 'Select language: ' : 'Vyberte si jazyk: ', languages.map(function (l) {
    var currentStyle = getCurrentLangStyle(l === language);
    var flagSrc = flags.find(function (flag) {
      return flag.language === l;
    }).flag;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("span", {
      style: currentStyle,
      className: "lang-choice",
      onClick: function onClick() {
        selectLanguage(l);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("img", {
      src: flagSrc,
      alt: l + '-flag',
      style: {
        height: 25,
        width: 30,
        marginRight: 3
      }
    }), l);
  }));
};

var getCurrentLangStyle = function getCurrentLangStyle(isSelected) {
  var currentStyle = isSelected ? {
    fontWeight: 'bolder',
    boxShadow: '0px 0px 3px 1px rgba(100,180,200,0.8)',
    backgroundColor: 'white'
  } : {
    opacity: 0.75
  };
  currentStyle.cursor = 'pointer';
  currentStyle.height = '100%';
  currentStyle.padding = 3;
  currentStyle.borderRadius = 3;
  currentStyle.display = 'flex';
  currentStyle.alignItems = 'center';
  return currentStyle;
};

/* harmony default export */ __webpack_exports__["default"] = (LanguageSwitch);

/***/ }),

/***/ "./assets/js/react/components/homepage/SlovakContent.js":
/*!**************************************************************!*\
  !*** ./assets/js/react/components/homepage/SlovakContent.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var SlovakContent = function SlovakContent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\xDAvod"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "T\xE1to webov\xE1 aplik\xE1cia bola vytvoren\xE1 ako \u0161kolsk\xFD projekt na \u017Dilinskej Univerzite v \u017Diline. Zmysel tejto aplik\xE1cie je u\u013Eah\u010Di\u0165 tvorbu statick\xFDch webov\xFDch vizu\xE1lnych t\xE9m pre \u013Eud\xED bez program\xE1torsk\xFDch znalost\xED. To samozrejme neznamen\xE1, \u017Ee sa m\xF4\u017Ee porovn\xE1va\u0165 s n\xE1strojmi ako WordPress. V\xFDhodou v\u0161ak je, \u017Ee je omnoho \u013Eah\u0161ia na pou\u017E\xEDvanie."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "N\xE1vod na pou\u017Eitie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 1
  }, "K vytvoreniu vlastnej webovej t\xE9my mus\xEDte by\u0165 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "prihl\xE1sen\xFD"), " do pou\u017E\xEDvate\u013Esk\xE9ho ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\xFA\u010Dtu"), ". M\xF4\u017Eete sa bu\u010F prihl\xE1si\u0165 do existuj\xFAceho \xFA\u010Dtu, alebo si vytvori\u0165 nov\xFD v sekcii ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Prihl\xE1senie / registr\xE1cia")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 2
  }, "Pokra\u010Dujte do sekcie ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Vytvori\u0165"), " a vyberte si \u010Di chcete vytvori\u0165 nov\xFA t\xE9mu alebo pokra\u010Dova\u0165 v dizajnovan\xED nejakej z va\u0161ich existuj\xFAcich t\xE9m."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 3
  }, "Ak ste si zvolili vytvorenie novej ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "t\xE9my"), ", zobraz\xED sa V\xE1m formul\xE1r. Vypl\u0148te n\xE1zov Va\u0161ej novej t\xE9my (rovnak\xFD pou\u017E\xEDvate\u013E nesmie ma\u0165 viacero rovnako pomenovan\xFDch t\xE9m), vyberte si ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\xFArove\u0148 zdie\u013Eania"), " a nepovinne m\xF4\u017Eete prida\u0165 popis. Tieto vlastnosti m\xF4\u017Eete kedyko\u013Evek editova\u0165."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 4
  }, "Existuj\xFA 3 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\xFArovne zdie\u013Eania"), " t\xE9m.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "S\xFAkromn\xE1"), " (vidite\u013En\xE1 len pre vlastn\xEDka)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Vidite\u013En\xE1 len pre prihl\xE1sen\xFDch")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Verejn\xE1"), " (vidite\u013En\xE1 pre ka\u017Ed\xE9ho)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 5
  }, "Ka\u017Ed\xE1 t\xE9ma m\xF4\u017Ee ma\u0165 viacero str\xE1nok, m\xF4\u017Eete ich prida\u0165 kliknut\xEDm na tla\u010Didlo ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Prida\u0165 str\xE1nku"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "M\xF4\u017Eete editova\u0165 str\xE1nky kliknut\xEDm na tla\u010Didlo ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Edit"), " v zozname str\xE1nok. Potom sa V\xE1m zobraz\xED menu s GUI ako m\xF4\u017Eete vidie\u0165 na ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#showcase-video",
    onClick: function onClick() {
      return window.location = '#showcase-video';
    }
  }, "videu dole"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: 6
  }, "Ke\u010F m\xE1te dokon\u010Den\xFA svoju t\xE9mu, m\xF4\u017Eete ju stiahnu\u0165 kliknut\xEDm na tla\u010Didlo ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Download"), "."))));
};

/* harmony default export */ __webpack_exports__["default"] = (SlovakContent);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9DdXN0b21BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvTG9nb3V0TGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2hvbWVwYWdlL0VuZ2xpc2hDb250ZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2hvbWVwYWdlL0hvbWVwYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9ob21lcGFnZS9MYW5ndWFnZVN3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9ob21lcGFnZS9TbG92YWtDb250ZW50LmpzIl0sIm5hbWVzIjpbIkN1c3RvbUFsZXJ0IiwidGV4dCIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJjbGFzc05hbWVzIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwicHJvcHMiLCJnaXRodWJMaW5rIiwid2luZG93Iiwib3BlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTG9nb3V0TGluayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm0iLCJheGlvcyIsInBvc3QiLCJwYXRoIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJocmVmIiwib25Mb2dvdXQiLCJOYXZpZ2F0aW9uIiwibGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTEFOR1VBR0VfS0VZIiwiRU5HTElTSCIsIm5hdmJhckRhdGFVcmwiLCJzdGF0ZSIsIm5hdkl0ZW1zIiwiY29uc29sZSIsImxvZyIsImdldCIsInNldFN0YXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJpZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJ0b2dnbGVNZW51IiwibWFwIiwiaXRlbSIsImxpbmsiLCJsb2dvdXQiLCJFbmdsaXNoQ29udGVudCIsIlNMT1ZBSyIsIkhvbWVwYWdlV3JhcHBlciIsImxhbmd1YWdlQ2hvaWNlIiwiY3VycmVudExhbmd1YWdlIiwic2V0Q3VycmVudExhbmd1YWdlIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiTGFuZ3VhZ2VTd2l0Y2giLCJsYW5nIiwic2V0R2xvYmFsTGFuZyIsImxhbmd1YWdlcyIsImZsYWdzIiwiZmxhZyIsInNldExhbmd1YWdlIiwic2VsZWN0TGFuZ3VhZ2UiLCJsbmciLCJzZXRJdGVtIiwicmVsb2FkIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiYm9yZGVyIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsInBvc2l0aW9uIiwicmlnaHQiLCJ0b3AiLCJmb250RmFtaWx5IiwibCIsImN1cnJlbnRTdHlsZSIsImdldEN1cnJlbnRMYW5nU3R5bGUiLCJmbGFnU3JjIiwiZmluZCIsIm1hcmdpblJpZ2h0IiwiaXNTZWxlY3RlZCIsImZvbnRXZWlnaHQiLCJvcGFjaXR5IiwiY3Vyc29yIiwiU2xvdmFrQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFZO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztB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fmNyZWF0ZX5jcmVhdGVJbmRleH5jcmVhdGVUaGVtZX5ob21lcGFnZX5teVRoZW1lc35zaWdufnRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUFsZXJ0ID0gKHt0ZXh0fSkgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBjbGFzc05hbWVzID0gdmlzaWJsZSA/IFwiY3VzdG9tLWFsZXJ0IGN1c3RvbS1hbGVydC12aXNpYmxlXCIgOiBcImN1c3RvbS1hbGVydFwiO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBnaXRodWJMaW5rID0gXCJodHRwczovL2dpdGh1Yi5jb20vSmFuU29wa28vZGVzaWduLWhlbHBlci10b29sXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PVwiMVwiIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGdpdGh1YkxpbmspfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHNtYWxsPkrDoW4gU29wa28sIE1hdMO6xaEgxIxpxb5tw6FyIMKpMjAyMDwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ291dExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBvbkxvZ291dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbG9nb3V0P1wiKSkge1xuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLnByb3BzLnBhdGgsIHt9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgIT09IHVuZGVmaW5lZCAmJiByZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5wYXRofSBvbkNsaWNrPXtlID0+IHRoaXMub25Mb2dvdXQoZSl9Pnt0aGlzLnByb3BzLnRleHR9PC9hPlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMb2dvdXRMaW5rIGZyb20gXCIuL0xvZ291dExpbmtcIjtcbmltcG9ydCB7IExBTkdVQUdFX0tFWSwgRU5HTElTSCB9IGZyb20gXCIuL2hvbWVwYWdlL0hvbWVwYWdlV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oTEFOR1VBR0VfS0VZKSB8fCBFTkdMSVNIO1xuICAgICAgICB0aGlzLm5hdmJhckRhdGFVcmwgPSAnL3VpLWRhdGEvbmF2YmFyJztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hdkl0ZW1zOiBbXVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQodGhpcy5uYXZiYXJEYXRhVXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBuYXZJdGVtczogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkICE9PSBcIm1lbnUtbGlzdFwiXG4gICAgICAgICAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhhbWJ1cmdlclwiKVxuICAgICAgICAgICAgICAgICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoYW1idXJnZXItYmFyXCIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUxJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXIzXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZTInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWxpc3RcIikuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyMVwiKS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUxJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyM1wiKS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUyJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBpZD1cIm1lbnUtaGFtYnVyZ2VyXCIgb25DbGljaz17dGhpcy50b2dnbGVNZW51fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJhclwiIGlkPVwiYmFyMVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJhclwiIGlkPVwiYmFyMlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJhclwiIGlkPVwiYmFyM1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51LWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5uYXZJdGVtcy5tYXAoaXRlbSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGl0ZW0ubGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmxpbmt9PntpdGVtW3RoaXMubGFuZ3VhZ2VdfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmxvZ291dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5sb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvdXRMaW5rIHBhdGg9e2l0ZW0ucGF0aH0gdGV4dD17aXRlbS5sb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9nb3V0TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRW5nbGlzaENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGgxPkludHJvZHVjdGlvbjwvaDE+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRoaXMgd2ViIGFwcGxpY2F0aW9uIHdhcyBjcmVhdGVkIGFzIGEgc2Nob29sIHByb2plY3QgYXQgVW5pdmVyc2l0eSBvZiBaaWxpbmEuXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgYXBwbGljYXRpb24gaXMgdG8gbWFrZSBjcmVhdGlvbiBvZiB0aGVtZXMgZm9yIHN0YXRpYyB3ZWJzaXRlcyBlYXNpZXIgZm9yIHBlb3BsZSB3aXRob3V0IHByb2dyYW1taW5nIHNraWxscy5cbiAgICAgICAgICAgICAgICAgICAgQnkgbm8gbWVhbnMgY2FuIGl0IGNvbXBldGUgd2l0aCB0b29scyBsaWtlIFdvcmRQcmVzcywgYnV0IG9uIHRoZSBvdGhlciBoYW5kLCBpdCBpcyBtdWNoIGVhc2llciB0byB1c2UuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGgxPkhvdyB0byB1c2U8L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbiBvcmRlciB0byBjcmVhdGUgYSB3ZWIgdGhlbWUsIHlvdSBtdXN0IGJlIDxiPmxvZ2dlZDwvYj4gaW50byBhIHVzZXIgPGI+YWNjb3VudDwvYj4uXG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGVpdGhlciBsb2cgaW50byBhbiBleGlzdGluZyBhY2NvdW50IG9yIGNyZWF0ZSBhIG5ldyBvbmUgaW4gdGhlIDxiPlNpZ24gaW4vdXA8L2I+IHNlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZSB0byA8Yj5DcmVhdGU8L2I+IHNlY3Rpb24gYW5kIGNob29zZSB0byBlaXRoZXIgY3JlYXRlIGEgbmV3IHRoZW1lIG9yIGNvbnRpbnVlIGRlc2lnbmluZyBzb21lIG9mIHlvdXIgZXhpc3RpbmcgdGhlbWVzLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IGNob29zZSB5byBjcmVhdGUgYSBuZXcgPGI+VGhlbWU8L2I+LCBhIGZvcm0gd2lsbCBiZSBkaXNwbGF5ZWQuIEZpbGwgb3V0IHRoZSBuYW1lIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3VyIG5ldyB0aGVtZSAoc2FtZSB1c2VyIGNhbid0IGhhdmUgbXVsdGlwbGUgdGhlbWVzIHdpdGggdGhlIHNhbWUgbmFtZSksIGNob29zZSA8Yj5wcml2YWN5IGxldmVsPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgb2YgeW91ciB0aGVtZSBhbmQgb3B0aW9uYWxseSBhZCBhIGRlc2NyaXB0aW9uLiBZb3UgY2FuIGNoYW5nZSB0aGVzZSBwcm9wZXJ0aWVzIGFueSB0aW1lLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgYXJlIDMgPGI+UHJpdmFjeSBsZXZlbHM8L2I+IG9mIHRoZW1lcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGI+UHJpdmF0ZTwvYj4gKHZpc2libGUgb25seSBmb3IgdGhlIG93bmVyKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPlZpc2libGUgZm9yIGxvZ2dlZCB1c2VycyBvbmx5PC9iPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPlB1YmxpYzwvYj4gKHZpc2libGUgZm9yIGV2ZXJ5b25lKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCB0aGVtZSBjYW4gaGF2ZSBtdWx0aXBsZSBwYWdlcywgeW91IGNhbiBhZGQgdGhlbSBieSBjbGlja2luZyBvbiA8Yj5BZGQgcGFnZTwvYj4gYnV0dG9uLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGVkaXQgcGFnZXMgYnkgY2xpY2tpbmcgb24gPGI+RWRpdDwvYj4gYnV0dG9uIGluIHRoZSBwYWdlcyBsaXN0LiBBZnRlciB0aGF0LCBhIG1lbnUgd2l0aCBHVUlcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbGwgYmUgZGlzcGxheWVkIHRvIHlvdSwgYXMgeW91IGNhbiBzZWUgb24gdGhlIDxhIGhyZWY9XCIjc2hvd2Nhc2UtdmlkZW9cIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb249JyNzaG93Y2FzZS12aWRlbyd9PnZpZGVvIGJlbG93PC9hPi5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5hbGx5LCB3aGVuIHlvdSdyZSBhbGwgZG9uZSwgeW91IGNhbiBkb3dubG9hZCB5b3VyIHRoZW1lIGJ5IGNsaWNraW5nIHRoZSA8Yj5Eb3dubG9hZDwvYj4gYnV0dG9uIGluIHRoZSB0aGVtZSBzZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZ2xpc2hDb250ZW50OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IEVuZ2xpc2hDb250ZW50IGZyb20gXCIuL0VuZ2xpc2hDb250ZW50XCI7XG5pbXBvcnQgU2xvdmFrQ29udGVudCBmcm9tIFwiLi9TbG92YWtDb250ZW50XCI7XG5pbXBvcnQgTGFuZ3VhZ2VTd2l0Y2ggZnJvbSBcIi4vTGFuZ3VhZ2VTd2l0Y2hcIjtcbmltcG9ydCB7IEN1c3RvbUFsZXJ0IH0gZnJvbSBcIi4uL0N1c3RvbUFsZXJ0XCI7XG5cbmV4cG9ydCBjb25zdCBFTkdMSVNIID0gJ0VOJztcbmV4cG9ydCBjb25zdCBTTE9WQUsgPSAnU0snO1xuZXhwb3J0IGNvbnN0IExBTkdVQUdFX0tFWSA9ICdsYW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2VXcmFwcGVyKCkge1xuICAgIGxldCBsYW5ndWFnZUNob2ljZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShMQU5HVUFHRV9LRVkpIHx8IEVOR0xJU0g7XG4gICAgY29uc3QgW2N1cnJlbnRMYW5ndWFnZSwgc2V0Q3VycmVudExhbmd1YWdlXSA9IHVzZVN0YXRlKGxhbmd1YWdlQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2ggbGFuZz17Y3VycmVudExhbmd1YWdlfSBzZXRHbG9iYWxMYW5nPXtzZXRDdXJyZW50TGFuZ3VhZ2V9Lz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPT09IEVOR0xJU0ggP1xuICAgICAgICAgICAgICAgICAgICA8RW5nbGlzaENvbnRlbnQgLz4gOiA8U2xvdmFrQ29udGVudCAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwMFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjk1JVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjkwJVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaG93Y2FzZS12aWRlb1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIi4uL2ltZy92aWRlbzEubW92XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgICBFTkdMSVNILFxuICAgIFNMT1ZBSyxcbiAgICBMQU5HVUFHRV9LRVlcbn0gZnJvbSBcIi4vSG9tZXBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IExhbmd1YWdlU3dpdGNoID0gKHtsYW5nLCBzZXRHbG9iYWxMYW5nfSkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlcyA9IFtFTkdMSVNILCBTTE9WQUtdO1xuICAgIGNvbnN0IGZsYWdzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYW5ndWFnZTogRU5HTElTSCxcbiAgICAgICAgICAgIGZsYWc6ICdodHRwczovL2Vtb2ppcGVkaWEtdXMuczMuZHVhbHN0YWNrLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3RodW1icy8zMjAvam95cGl4ZWxzLzI3NS9mbGFnLXVuaXRlZC1raW5nZG9tXzFmMWVjLTFmMWU3LnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFuZ3VhZ2U6IFNMT1ZBSyxcbiAgICAgICAgICAgIGZsYWc6ICdodHRwczovL2Vtb2ppcGVkaWEtdXMuczMuZHVhbHN0YWNrLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3RodW1icy8xMjAvam95cGl4ZWxzLzI1Ny9mbGFnLXNsb3Zha2lhXzFmMWY4LTFmMWYwLnBuZydcbiAgICAgICAgfVxuICAgIF07XG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShsYW5nKTtcblxuICAgIGNvbnN0IHNlbGVjdExhbmd1YWdlID0gbG5nID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKExBTkdVQUdFX0tFWSwgbG5nKTtcbiAgICAgICAgc2V0TGFuZ3VhZ2UobG5nKTtcbiAgICAgICAgc2V0R2xvYmFsTGFuZyhsbmcpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgIHdpZHRoOiAyODAsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggM3B4IDNweCByZ2JhKDE4MCwgMjMwLCAyNTAsIDAuMiknLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZkZmVmZCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDAgM3B4IDdweCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHJpZ2h0OiA1MCxcbiAgICAgICAgICAgIHRvcDogODAsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnVWJ1bnR1J1xuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09IEVOR0xJU0ggP1xuICAgICAgICAgICAgICAgICAgICAnU2VsZWN0IGxhbmd1YWdlOiAnIDpcbiAgICAgICAgICAgICAgICAgICAgJ1Z5YmVydGUgc2kgamF6eWs6ICdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlcy5tYXAobCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdHlsZSA9IGdldEN1cnJlbnRMYW5nU3R5bGUobCA9PT0gbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbGFnU3JjID0gZmxhZ3MuZmluZChmbGFnID0+IGZsYWcubGFuZ3VhZ2UgPT09IGwpLmZsYWc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2N1cnJlbnRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xhbmctY2hvaWNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZWxlY3RMYW5ndWFnZShsKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZsYWdTcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bCArICctZmxhZyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBnZXRDdXJyZW50TGFuZ1N0eWxlID0gaXNTZWxlY3RlZCA9PiB7XG4gICAgY29uc3QgY3VycmVudFN0eWxlID0gaXNTZWxlY3RlZCA/XG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAzcHggMXB4IHJnYmEoMTAwLDE4MCwyMDAsMC44KScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbiAgICAgICAgfSA6XG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzVcbiAgICAgICAgfTtcbiAgICBjdXJyZW50U3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIGN1cnJlbnRTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgY3VycmVudFN0eWxlLnBhZGRpbmcgPSAzO1xuICAgIGN1cnJlbnRTdHlsZS5ib3JkZXJSYWRpdXMgPSAzO1xuICAgIGN1cnJlbnRTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGN1cnJlbnRTdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG5cbiAgICByZXR1cm4gY3VycmVudFN0eWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVN3aXRjaDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTbG92YWtDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aDE+w5p2b2Q8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBUw6F0byB3ZWJvdsOhIGFwbGlrw6FjaWEgYm9sYSB2eXR2b3JlbsOhIGFrbyDFoWtvbHNrw70gcHJvamVrdCBuYSDFvWlsaW5za2VqIFVuaXZlcnppdGUgdiDFvWlsaW5lLlxuICAgICAgICAgICAgICAgICAgICBabXlzZWwgdGVqdG8gYXBsaWvDoWNpZSBqZSB1xL5haMSNacWlIHR2b3JidSBzdGF0aWNrw71jaCB3ZWJvdsO9Y2ggdml6dcOhbG55Y2ggdMOpbSBwcmUgxL51ZMOtIGJleiBwcm9ncmFtw6F0b3Jza8O9Y2ggem5hbG9zdMOtLlxuICAgICAgICAgICAgICAgICAgICBUbyBzYW1venJlam1lIG5lem5hbWVuw6EsIMW+ZSBzYSBtw7TFvmUgcG9yb3Zuw6F2YcWlIHMgbsOhc3Ryb2ptaSBha28gV29yZFByZXNzLiBWw71ob2RvdSB2xaFhayBqZSwgxb5lIGplXG4gICAgICAgICAgICAgICAgICAgIG9tbm9obyDEvmFoxaFpYSBuYSBwb3XFvsOtdmFuaWUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGgxPk7DoXZvZCBuYSBwb3XFvml0aWU8L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBLIHZ5dHZvcmVuaXUgdmxhc3RuZWogd2Vib3ZlaiB0w6lteSBtdXPDrXRlIGJ5xaUgPGI+cHJpaGzDoXNlbsO9PC9iPiBkbyBwb3XFvsOtdmF0ZcS+c2vDqWhvIDxiPsO6xI10dTwvYj4uXG4gICAgICAgICAgICAgICAgICAgICAgICBNw7TFvmV0ZSBzYSBidcSPIHByaWhsw6FzacWlIGRvIGV4aXN0dWrDumNlaG8gw7rEjXR1LCBhbGVibyBzaSB2eXR2b3JpxaUgbm92w70gdiBzZWtjaWkgPGI+UHJpaGzDoXNlbmllIC8gcmVnaXN0csOhY2lhPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUG9rcmHEjXVqdGUgZG8gc2VrY2llIDxiPlZ5dHZvcmnFpTwvYj4gYSB2eWJlcnRlIHNpIMSNaSBjaGNldGUgdnl0dm9yacWlIG5vdsO6IHTDqW11IGFsZWJvIHBva3JhxI1vdmHFpSB2XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXpham5vdmFuw60gbmVqYWtlaiB6IHZhxaFpY2ggZXhpc3R1asO6Y2ljaCB0w6ltLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQWsgc3RlIHNpIHp2b2xpbGkgdnl0dm9yZW5pZSBub3ZlaiA8Yj50w6lteTwvYj4sIHpvYnJhesOtIHNhIFbDoW0gZm9ybXVsw6FyLiBWeXBsxYh0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgbsOhem92IFZhxaFlaiBub3ZlaiB0w6lteSAocm92bmFrw70gcG91xb7DrXZhdGXEviBuZXNtaWUgbWHFpSB2aWFjZXJvIHJvdm5ha28gcG9tZW5vdmFuw71jaCB0w6ltKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ5YmVydGUgc2kgPGI+w7pyb3ZlxYggemRpZcS+YW5pYTwvYj4gYSBuZXBvdmlubmUgbcO0xb5ldGUgcHJpZGHFpSBwb3Bpcy4gVGlldG8gdmxhc3Rub3N0aSBtw7TFvmV0ZSBrZWR5a2/EvnZlayBlZGl0b3ZhxaUuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeGlzdHVqw7ogMyA8Yj7DunJvdm5lIHpkaWXEvmFuaWE8L2I+IHTDqW0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPlPDumtyb21uw6E8L2I+ICh2aWRpdGXEvm7DoSBsZW4gcHJlIHZsYXN0bsOta2EpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGI+VmlkaXRlxL5uw6EgbGVuIHByZSBwcmlobMOhc2Vuw71jaDwvYj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5WZXJlam7DoTwvYj4gKHZpZGl0ZcS+bsOhIHByZSBrYcW+ZMOpaG8pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17NX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBLYcW+ZMOhIHTDqW1hIG3DtMW+ZSBtYcWlIHZpYWNlcm8gc3Ryw6Fub2ssIG3DtMW+ZXRlIGljaCBwcmlkYcWlIGtsaWtudXTDrW0gbmEgdGxhxI1pZGxvIDxiPlByaWRhxaUgc3Ryw6Fua3U8L2I+LlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBNw7TFvmV0ZSBlZGl0b3ZhxaUgc3Ryw6Fua3kga2xpa251dMOtbSBuYSB0bGHEjWlkbG8gPGI+RWRpdDwvYj4gdiB6b3puYW1lIHN0csOhbm9rLiBQb3RvbSBzYSBWw6FtIHpvYnJhesOtIG1lbnUgcyBHVUlcbiAgICAgICAgICAgICAgICAgICAgICAgIGFrbyBtw7TFvmV0ZSB2aWRpZcWlIG5hIDxhIGhyZWY9XCIjc2hvd2Nhc2UtdmlkZW9cIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb249JyNzaG93Y2FzZS12aWRlbyd9PnZpZGV1IGRvbGU8L2E+LlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEtlxI8gbcOhdGUgZG9rb27EjWVuw7ogc3ZvanUgdMOpbXUsIG3DtMW+ZXRlIGp1IHN0aWFobnXFpSBrbGlrbnV0w61tIG5hIHRsYcSNaWRsbyA8Yj5Eb3dubG9hZDwvYj4uXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xvdmFrQ29udGVudDsiXSwic291cmNlUm9vdCI6IiJ9