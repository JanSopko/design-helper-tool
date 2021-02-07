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
      width: 'auto',
      display: 'inline-block',
      border: '1px solid gray',
      borderRadius: 5,
      backgroundColor: '#fdfefd',
      padding: 3,
      position: 'absolute',
      right: 50,
      top: 80
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
        marginBottom: -5,
        marginRight: 3
      }
    }), l);
  }));
};

var getCurrentLangStyle = function getCurrentLangStyle(isSelected) {
  var currentStyle = isSelected ? {
    fontWeight: 'bold',
    boxShadow: '0px 0px 3px 1px rgba(200,230,250,0.8)',
    backgroundColor: 'white'
  } : {
    opacity: 0.75
  };
  currentStyle.margin = '0 15px';
  currentStyle.cursor = 'pointer';
  currentStyle.height = '100%';
  currentStyle.padding = 3;
  currentStyle.borderRadius = 3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9DdXN0b21BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvTG9nb3V0TGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2hvbWVwYWdlL0VuZ2xpc2hDb250ZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2hvbWVwYWdlL0hvbWVwYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9ob21lcGFnZS9MYW5ndWFnZVN3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9ob21lcGFnZS9TbG92YWtDb250ZW50LmpzIl0sIm5hbWVzIjpbIkN1c3RvbUFsZXJ0IiwidGV4dCIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJjbGFzc05hbWVzIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwicHJvcHMiLCJnaXRodWJMaW5rIiwid2luZG93Iiwib3BlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTG9nb3V0TGluayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm0iLCJheGlvcyIsInBvc3QiLCJwYXRoIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJocmVmIiwib25Mb2dvdXQiLCJOYXZpZ2F0aW9uIiwibGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTEFOR1VBR0VfS0VZIiwiRU5HTElTSCIsIm5hdmJhckRhdGFVcmwiLCJzdGF0ZSIsIm5hdkl0ZW1zIiwiY29uc29sZSIsImxvZyIsImdldCIsInNldFN0YXRlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXJnZXQiLCJpZCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJ0b2dnbGUiLCJ0b2dnbGVNZW51IiwibWFwIiwiaXRlbSIsImxpbmsiLCJsb2dvdXQiLCJFbmdsaXNoQ29udGVudCIsIlNMT1ZBSyIsIkhvbWVwYWdlV3JhcHBlciIsImxhbmd1YWdlQ2hvaWNlIiwiY3VycmVudExhbmd1YWdlIiwic2V0Q3VycmVudExhbmd1YWdlIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwiTGFuZ3VhZ2VTd2l0Y2giLCJsYW5nIiwic2V0R2xvYmFsTGFuZyIsImxhbmd1YWdlcyIsImZsYWdzIiwiZmxhZyIsInNldExhbmd1YWdlIiwic2VsZWN0TGFuZ3VhZ2UiLCJsbmciLCJzZXRJdGVtIiwicmVsb2FkIiwiaGVpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImwiLCJjdXJyZW50U3R5bGUiLCJnZXRDdXJyZW50TGFuZ1N0eWxlIiwiZmxhZ1NyYyIsImZpbmQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImlzU2VsZWN0ZWQiLCJmb250V2VpZ2h0IiwiYm94U2hhZG93Iiwib3BhY2l0eSIsIm1hcmdpbiIsImN1cnNvciIsIlNsb3Zha0NvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBWTtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFB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QUFQO0FBQ0gsQ0FqQkQ7O0FBbUJlcEIsNkVBQWYsRTs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1nQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEIsc0JBQ0kscUZBQ0kseUZBQ0ksaUZBREosZUFFSSw0aEJBRkosZUFRSSxzRUFSSixlQVNJLG1HQVRKLGVBVUksb0ZBQ0k7QUFBSSxPQUFHLEVBQUU7QUFBVCwrRUFDa0QseUZBRGxELHVEQUN1RixxRkFEdkYsMklBRWtGLHdHQUZsRixDQURKLGVBSVMsc0VBSlQsZUFLSTtBQUFJLE9BQUcsRUFBRTtBQUFULGdEQUN5QixzRkFEekIseUpBTEosZUFRUyxzRUFSVCxlQVNJO0FBQUksT0FBRyxFQUFFO0FBQVQseURBQ3VDLGdGQUR2Qyw4TUFHZSxzR0FIZixrSEFUSixlQWFTLHNFQWJULGVBY0k7QUFBSSxPQUFHLEVBQUU7QUFBVCxvQ0FDZSxpR0FEZiwyQkFFSSxvRkFDSSxvRkFBSSx1RkFBSiw4Q0FESixlQUVJLG9GQUFJLHFIQUFKLENBRkosZUFHSSxvRkFBSSxtRkFBSiw2Q0FISixDQUZKLENBZEosZUFxQlMsc0VBckJULGVBc0JJO0FBQUksT0FBRyxFQUFFO0FBQVQsbUpBQ2lGLCtGQURqRixNQXRCSixlQXlCSSw4SkFDa0QsNkVBRGxELGtIQUV5QjtBQUFHLFFBQUksRUFBQyxpQkFBUjtBQUEwQixXQUFPLEVBQUU7QUFBQSxhQUFNekYsTUFBTSxDQUFDZ0IsUUFBUCxHQUFnQixpQkFBdEI7QUFBQTtBQUFuQyxrQkFGekIsTUF6QkosZUE2Qkk7QUFBSSxPQUFHLEVBQUU7QUFBVCxzSUFDNEUsaUZBRDVFLE1BN0JKLENBVkosQ0FESixDQURKO0FBZ0RILENBakREOztBQW1EZXlFLDRFQUFmLEUiLCJmaWxlIjoiYnJvd3NlfmNyZWF0ZX5jcmVhdGVJbmRleH5jcmVhdGVUaGVtZX5ob21lcGFnZX5teVRoZW1lc35zaWdufnRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUFsZXJ0ID0gKHt0ZXh0fSkgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBjbGFzc05hbWVzID0gdmlzaWJsZSA/IFwiY3VzdG9tLWFsZXJ0IGN1c3RvbS1hbGVydC12aXNpYmxlXCIgOiBcImN1c3RvbS1hbGVydFwiO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBnaXRodWJMaW5rID0gXCJodHRwczovL2dpdGh1Yi5jb20vSmFuU29wa28vZGVzaWduLWhlbHBlci10b29sXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PVwiMVwiIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGdpdGh1YkxpbmspfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHNtYWxsPkrDoW4gU29wa28sIE1hdMO6xaEgxIxpxb5tw6FyIMKpMjAyMDwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ291dExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBvbkxvZ291dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbG9nb3V0P1wiKSkge1xuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLnByb3BzLnBhdGgsIHt9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgIT09IHVuZGVmaW5lZCAmJiByZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5wYXRofSBvbkNsaWNrPXtlID0+IHRoaXMub25Mb2dvdXQoZSl9Pnt0aGlzLnByb3BzLnRleHR9PC9hPlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMb2dvdXRMaW5rIGZyb20gXCIuL0xvZ291dExpbmtcIjtcbmltcG9ydCB7IExBTkdVQUdFX0tFWSwgRU5HTElTSCB9IGZyb20gXCIuL2hvbWVwYWdlL0hvbWVwYWdlV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oTEFOR1VBR0VfS0VZKSB8fCBFTkdMSVNIO1xuICAgICAgICB0aGlzLm5hdmJhckRhdGFVcmwgPSAnL3VpLWRhdGEvbmF2YmFyJztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hdkl0ZW1zOiBbXVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBheGlvcy5nZXQodGhpcy5uYXZiYXJEYXRhVXJsKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBuYXZJdGVtczogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkICE9PSBcIm1lbnUtbGlzdFwiXG4gICAgICAgICAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhhbWJ1cmdlclwiKVxuICAgICAgICAgICAgICAgICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoYW1idXJnZXItYmFyXCIpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtbGlzdFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyMVwiKS5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUxJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXIzXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZTInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlTWVudSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWxpc3RcIikuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyMVwiKS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUxJyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyM1wiKS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUyJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGlkPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBpZD1cIm1lbnUtaGFtYnVyZ2VyXCIgb25DbGljaz17dGhpcy50b2dnbGVNZW51fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJhclwiIGlkPVwiYmFyMVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJhclwiIGlkPVwiYmFyMlwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJhclwiIGlkPVwiYmFyM1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWwgaWQ9XCJtZW51LWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5uYXZJdGVtcy5tYXAoaXRlbSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGl0ZW0ubGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtpdGVtLmxpbmt9PntpdGVtW3RoaXMubGFuZ3VhZ2VdfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmxvZ291dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5sb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvdXRMaW5rIHBhdGg9e2l0ZW0ucGF0aH0gdGV4dD17aXRlbS5sb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9nb3V0TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRW5nbGlzaENvbnRlbnQgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGgxPkludHJvZHVjdGlvbjwvaDE+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRoaXMgd2ViIGFwcGxpY2F0aW9uIHdhcyBjcmVhdGVkIGFzIGEgc2Nob29sIHByb2plY3QgYXQgVW5pdmVyc2l0eSBvZiBaaWxpbmEuXG4gICAgICAgICAgICAgICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgYXBwbGljYXRpb24gaXMgdG8gbWFrZSBjcmVhdGlvbiBvZiB0aGVtZXMgZm9yIHN0YXRpYyB3ZWJzaXRlcyBlYXNpZXIgZm9yIHBlb3BsZSB3aXRob3V0IHByb2dyYW1taW5nIHNraWxscy5cbiAgICAgICAgICAgICAgICAgICAgQnkgbm8gbWVhbnMgY2FuIGl0IGNvbXBldGUgd2l0aCB0b29scyBsaWtlIFdvcmRQcmVzcywgYnV0IG9uIHRoZSBvdGhlciBoYW5kLCBpdCBpcyBtdWNoIGVhc2llciB0byB1c2UuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGgxPkhvdyB0byB1c2U8L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbiBvcmRlciB0byBjcmVhdGUgYSB3ZWIgdGhlbWUsIHlvdSBtdXN0IGJlIDxiPmxvZ2dlZDwvYj4gaW50byBhIHVzZXIgPGI+YWNjb3VudDwvYj4uXG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGVpdGhlciBsb2cgaW50byBhbiBleGlzdGluZyBhY2NvdW50IG9yIGNyZWF0ZSBhIG5ldyBvbmUgaW4gdGhlIDxiPlNpZ24gaW4vdXA8L2I+IHNlY3Rpb24uXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZSB0byA8Yj5DcmVhdGU8L2I+IHNlY3Rpb24gYW5kIGNob29zZSB0byBlaXRoZXIgY3JlYXRlIGEgbmV3IHRoZW1lIG9yIGNvbnRpbnVlIGRlc2lnbmluZyBzb21lIG9mIHlvdXIgZXhpc3RpbmcgdGhlbWVzLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgSWYgeW91IGNob29zZSB5byBjcmVhdGUgYSBuZXcgPGI+VGhlbWU8L2I+LCBhIGZvcm0gd2lsbCBiZSBkaXNwbGF5ZWQuIEZpbGwgb3V0IHRoZSBuYW1lIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3VyIG5ldyB0aGVtZSAoc2FtZSB1c2VyIGNhbid0IGhhdmUgbXVsdGlwbGUgdGhlbWVzIHdpdGggdGhlIHNhbWUgbmFtZSksIGNob29zZSA8Yj5wcml2YWN5IGxldmVsPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgb2YgeW91ciB0aGVtZSBhbmQgb3B0aW9uYWxseSBhZCBhIGRlc2NyaXB0aW9uLiBZb3UgY2FuIGNoYW5nZSB0aGVzZSBwcm9wZXJ0aWVzIGFueSB0aW1lLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgYXJlIDMgPGI+UHJpdmFjeSBsZXZlbHM8L2I+IG9mIHRoZW1lcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGI+UHJpdmF0ZTwvYj4gKHZpc2libGUgb25seSBmb3IgdGhlIG93bmVyKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPlZpc2libGUgZm9yIGxvZ2dlZCB1c2VycyBvbmx5PC9iPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPlB1YmxpYzwvYj4gKHZpc2libGUgZm9yIGV2ZXJ5b25lKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRWFjaCB0aGVtZSBjYW4gaGF2ZSBtdWx0aXBsZSBwYWdlcywgeW91IGNhbiBhZGQgdGhlbSBieSBjbGlja2luZyBvbiA8Yj5BZGQgcGFnZTwvYj4gYnV0dG9uLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGVkaXQgcGFnZXMgYnkgY2xpY2tpbmcgb24gPGI+RWRpdDwvYj4gYnV0dG9uIGluIHRoZSBwYWdlcyBsaXN0LiBBZnRlciB0aGF0LCBhIG1lbnUgd2l0aCBHVUlcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbGwgYmUgZGlzcGxheWVkIHRvIHlvdSwgYXMgeW91IGNhbiBzZWUgb24gdGhlIDxhIGhyZWY9XCIjc2hvd2Nhc2UtdmlkZW9cIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb249JyNzaG93Y2FzZS12aWRlbyd9PnZpZGVvIGJlbG93PC9hPi5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5hbGx5LCB3aGVuIHlvdSdyZSBhbGwgZG9uZSwgeW91IGNhbiBkb3dubG9hZCB5b3VyIHRoZW1lIGJ5IGNsaWNraW5nIHRoZSA8Yj5Eb3dubG9hZDwvYj4gYnV0dG9uIGluIHRoZSB0aGVtZSBzZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVuZ2xpc2hDb250ZW50OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IEVuZ2xpc2hDb250ZW50IGZyb20gXCIuL0VuZ2xpc2hDb250ZW50XCI7XG5pbXBvcnQgU2xvdmFrQ29udGVudCBmcm9tIFwiLi9TbG92YWtDb250ZW50XCI7XG5pbXBvcnQgTGFuZ3VhZ2VTd2l0Y2ggZnJvbSBcIi4vTGFuZ3VhZ2VTd2l0Y2hcIjtcbmltcG9ydCB7IEN1c3RvbUFsZXJ0IH0gZnJvbSBcIi4uL0N1c3RvbUFsZXJ0XCI7XG5cbmV4cG9ydCBjb25zdCBFTkdMSVNIID0gJ0VOJztcbmV4cG9ydCBjb25zdCBTTE9WQUsgPSAnU0snO1xuZXhwb3J0IGNvbnN0IExBTkdVQUdFX0tFWSA9ICdsYW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2VXcmFwcGVyKCkge1xuICAgIGxldCBsYW5ndWFnZUNob2ljZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShMQU5HVUFHRV9LRVkpIHx8IEVOR0xJU0g7XG4gICAgY29uc3QgW2N1cnJlbnRMYW5ndWFnZSwgc2V0Q3VycmVudExhbmd1YWdlXSA9IHVzZVN0YXRlKGxhbmd1YWdlQ2hvaWNlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2ggbGFuZz17Y3VycmVudExhbmd1YWdlfSBzZXRHbG9iYWxMYW5nPXtzZXRDdXJyZW50TGFuZ3VhZ2V9Lz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50TGFuZ3VhZ2UgPT09IEVOR0xJU0ggP1xuICAgICAgICAgICAgICAgICAgICA8RW5nbGlzaENvbnRlbnQgLz4gOiA8U2xvdmFrQ29udGVudCAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6J2JsYWNrJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwMFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjk1JVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjkwJVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaG93Y2FzZS12aWRlb1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIi4uL2ltZy92aWRlbzEubW92XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgICBFTkdMSVNILFxuICAgIFNMT1ZBSyxcbiAgICBMQU5HVUFHRV9LRVlcbn0gZnJvbSBcIi4vSG9tZXBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IExhbmd1YWdlU3dpdGNoID0gKHtsYW5nLCBzZXRHbG9iYWxMYW5nfSkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlcyA9IFtFTkdMSVNILCBTTE9WQUtdO1xuICAgIGNvbnN0IGZsYWdzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYW5ndWFnZTogRU5HTElTSCxcbiAgICAgICAgICAgIGZsYWc6ICdodHRwczovL2Vtb2ppcGVkaWEtdXMuczMuZHVhbHN0YWNrLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3RodW1icy8zMjAvam95cGl4ZWxzLzI3NS9mbGFnLXVuaXRlZC1raW5nZG9tXzFmMWVjLTFmMWU3LnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFuZ3VhZ2U6IFNMT1ZBSyxcbiAgICAgICAgICAgIGZsYWc6ICdodHRwczovL2Vtb2ppcGVkaWEtdXMuczMuZHVhbHN0YWNrLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3RodW1icy8xMjAvam95cGl4ZWxzLzI1Ny9mbGFnLXNsb3Zha2lhXzFmMWY4LTFmMWYwLnBuZydcbiAgICAgICAgfVxuICAgIF07XG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShsYW5nKTtcblxuICAgIGNvbnN0IHNlbGVjdExhbmd1YWdlID0gbG5nID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKExBTkdVQUdFX0tFWSwgbG5nKTtcbiAgICAgICAgc2V0TGFuZ3VhZ2UobG5nKTtcbiAgICAgICAgc2V0R2xvYmFsTGFuZyhsbmcpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZGZlZmQnLFxuICAgICAgICAgICAgcGFkZGluZzogMyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgcmlnaHQ6IDUwLFxuICAgICAgICAgICAgdG9wOiA4MFxuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09IEVOR0xJU0ggP1xuICAgICAgICAgICAgICAgICAgICAnU2VsZWN0IGxhbmd1YWdlOiAnIDpcbiAgICAgICAgICAgICAgICAgICAgJ1Z5YmVydGUgc2kgamF6eWs6ICdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlcy5tYXAobCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdHlsZSA9IGdldEN1cnJlbnRMYW5nU3R5bGUobCA9PT0gbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbGFnU3JjID0gZmxhZ3MuZmluZChmbGFnID0+IGZsYWcubGFuZ3VhZ2UgPT09IGwpLmZsYWc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2N1cnJlbnRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xhbmctY2hvaWNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZWxlY3RMYW5ndWFnZShsKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZsYWdTcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bCArICctZmxhZyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAtNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuY29uc3QgZ2V0Q3VycmVudExhbmdTdHlsZSA9IGlzU2VsZWN0ZWQgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRTdHlsZSA9IGlzU2VsZWN0ZWQgP1xuICAgICAgICB7XG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICBib3hTaGFkb3c6ICcwcHggMHB4IDNweCAxcHggcmdiYSgyMDAsMjMwLDI1MCwwLjgpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJ1xuICAgICAgICB9IDpcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43NVxuICAgICAgICB9O1xuICAgIGN1cnJlbnRTdHlsZS5tYXJnaW4gPSAnMCAxNXB4JztcbiAgICBjdXJyZW50U3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIGN1cnJlbnRTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgY3VycmVudFN0eWxlLnBhZGRpbmcgPSAzO1xuICAgIGN1cnJlbnRTdHlsZS5ib3JkZXJSYWRpdXMgPSAzO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRTdHlsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZ3VhZ2VTd2l0Y2g7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2xvdmFrQ29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGgxPsOadm9kPC9oMT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVMOhdG8gd2Vib3bDoSBhcGxpa8OhY2lhIGJvbGEgdnl0dm9yZW7DoSBha28gxaFrb2xza8O9IHByb2pla3QgbmEgxb1pbGluc2tlaiBVbml2ZXJ6aXRlIHYgxb1pbGluZS5cbiAgICAgICAgICAgICAgICAgICAgWm15c2VsIHRlanRvIGFwbGlrw6FjaWUgamUgdcS+YWjEjWnFpSB0dm9yYnUgc3RhdGlja8O9Y2ggd2Vib3bDvWNoIHZpenXDoWxueWNoIHTDqW0gcHJlIMS+dWTDrSBiZXogcHJvZ3JhbcOhdG9yc2vDvWNoIHpuYWxvc3TDrS5cbiAgICAgICAgICAgICAgICAgICAgVG8gc2Ftb3pyZWptZSBuZXpuYW1lbsOhLCDFvmUgc2EgbcO0xb5lIHBvcm92bsOhdmHFpSBzIG7DoXN0cm9qbWkgYWtvIFdvcmRQcmVzcy4gVsO9aG9kb3UgdsWhYWsgamUsIMW+ZSBqZVxuICAgICAgICAgICAgICAgICAgICBvbW5vaG8gxL5haMWhaWEgbmEgcG91xb7DrXZhbmllLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxoMT5Ow6F2b2QgbmEgcG91xb5pdGllPC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgSyB2eXR2b3Jlbml1IHZsYXN0bmVqIHdlYm92ZWogdMOpbXkgbXVzw610ZSBiecWlIDxiPnByaWhsw6FzZW7DvTwvYj4gZG8gcG91xb7DrXZhdGXEvnNrw6lobyA8Yj7DusSNdHU8L2I+LlxuICAgICAgICAgICAgICAgICAgICAgICAgTcO0xb5ldGUgc2EgYnXEjyBwcmlobMOhc2nFpSBkbyBleGlzdHVqw7pjZWhvIMO6xI10dSwgYWxlYm8gc2kgdnl0dm9yacWlIG5vdsO9IHYgc2VrY2lpIDxiPlByaWhsw6FzZW5pZSAvIHJlZ2lzdHLDoWNpYTwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBva3JhxI11anRlIGRvIHNla2NpZSA8Yj5WeXR2b3JpxaU8L2I+IGEgdnliZXJ0ZSBzaSDEjWkgY2hjZXRlIHZ5dHZvcmnFpSBub3bDuiB0w6ltdSBhbGVibyBwb2tyYcSNb3ZhxaUgdlxuICAgICAgICAgICAgICAgICAgICAgICAgZGl6YWpub3ZhbsOtIG5lamFrZWogeiB2YcWhaWNoIGV4aXN0dWrDumNpY2ggdMOpbS5cbiAgICAgICAgICAgICAgICAgICAgPC9saT48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFrIHN0ZSBzaSB6dm9saWxpIHZ5dHZvcmVuaWUgbm92ZWogPGI+dMOpbXk8L2I+LCB6b2JyYXrDrSBzYSBWw6FtIGZvcm11bMOhci4gVnlwbMWIdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG7DoXpvdiBWYcWhZWogbm92ZWogdMOpbXkgKHJvdm5ha8O9IHBvdcW+w612YXRlxL4gbmVzbWllIG1hxaUgdmlhY2VybyByb3ZuYWtvIHBvbWVub3ZhbsO9Y2ggdMOpbSksXG4gICAgICAgICAgICAgICAgICAgICAgICB2eWJlcnRlIHNpIDxiPsO6cm92ZcWIIHpkaWXEvmFuaWE8L2I+IGEgbmVwb3Zpbm5lIG3DtMW+ZXRlIHByaWRhxaUgcG9waXMuIFRpZXRvIHZsYXN0bm9zdGkgbcO0xb5ldGUga2VkeWtvxL52ZWsgZWRpdG92YcWlLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRXhpc3R1asO6IDMgPGI+w7pyb3ZuZSB6ZGllxL5hbmlhPC9iPiB0w6ltLlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5Tw7prcm9tbsOhPC9iPiAodmlkaXRlxL5uw6EgbGVuIHByZSB2bGFzdG7DrWthKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPlZpZGl0ZcS+bsOhIGxlbiBwcmUgcHJpaGzDoXNlbsO9Y2g8L2I+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGI+VmVyZWpuw6E8L2I+ICh2aWRpdGXEvm7DoSBwcmUga2HFvmTDqWhvKTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgS2HFvmTDoSB0w6ltYSBtw7TFvmUgbWHFpSB2aWFjZXJvIHN0csOhbm9rLCBtw7TFvmV0ZSBpY2ggcHJpZGHFpSBrbGlrbnV0w61tIG5hIHRsYcSNaWRsbyA8Yj5QcmlkYcWlIHN0csOhbmt1PC9iPi5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgTcO0xb5ldGUgZWRpdG92YcWlIHN0csOhbmt5IGtsaWtudXTDrW0gbmEgdGxhxI1pZGxvIDxiPkVkaXQ8L2I+IHYgem96bmFtZSBzdHLDoW5vay4gUG90b20gc2EgVsOhbSB6b2JyYXrDrSBtZW51IHMgR1VJXG4gICAgICAgICAgICAgICAgICAgICAgICBha28gbcO0xb5ldGUgdmlkaWXFpSBuYSA8YSBocmVmPVwiI3Nob3djYXNlLXZpZGVvXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uPScjc2hvd2Nhc2UtdmlkZW8nfT52aWRldSBkb2xlPC9hPi5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICBLZcSPIG3DoXRlIGRva29uxI1lbsO6IHN2b2p1IHTDqW11LCBtw7TFvmV0ZSBqdSBzdGlhaG51xaUga2xpa251dMOtbSBuYSB0bGHEjWlkbG8gPGI+RG93bmxvYWQ8L2I+LlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsb3Zha0NvbnRlbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==