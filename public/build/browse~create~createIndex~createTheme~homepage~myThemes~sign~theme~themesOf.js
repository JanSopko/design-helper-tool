(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browse~create~createIndex~createTheme~homepage~myThemes~sign~theme~themesOf"],{

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
      backgroundColor: 'rgba(255,255,255,1)',
      display: 'flex',
      justifyContent: 'center',
      marginTop: 100,
      boxShadow: '0px 0px 3px 3px rgba(180, 230, 250, 0.2)',
      border: '1px solid lightgray'
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
  }, "K vytvoreniu vlastnej webovej t\xE9my mus\xEDte by\u0165 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "prihl\xE1sen\xFD"), " do pou\u017E\xEDvate\u013Esk\xE9ho ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\xFA\u010Dtu"), ". M\xF4\u017Eete sa bu\u010F prihl\xE1si\u0165 do existuj\xFAceho \xFA\u010Dtu, alebo si vytvori\u0165 nov\xFD v sekcii ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Prihl\xE1senie")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9DdXN0b21BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvTG9nb3V0TGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2hvbWVwYWdlL0VuZ2xpc2hDb250ZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2hvbWVwYWdlL0hvbWVwYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9ob21lcGFnZS9MYW5ndWFnZVN3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9ob21lcGFnZS9TbG92YWtDb250ZW50LmpzIl0sIm5hbWVzIjpbIkN1c3RvbUFsZXJ0IiwidGV4dCIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJjbGFzc05hbWVzIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwicHJvcHMiLCJnaXRodWJMaW5rIiwid2luZG93Iiwib3BlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTG9nb3V0TGluayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm0iLCJheGlvcyIsInBvc3QiLCJwYXRoIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJocmVmIiwib25Mb2dvdXQiLCJOYXZpZ2F0aW9uIiwibGFuZ3VhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiTEFOR1VBR0VfS0VZIiwiRU5HTElTSCIsIm5hdmJhckRhdGFVcmwiLCJzdGF0ZSIsIm5hdkl0ZW1zIiwiZ2V0Iiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImlkIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsInRvZ2dsZSIsInRvZ2dsZU1lbnUiLCJtYXAiLCJpdGVtIiwibGluayIsImxvZ291dCIsIkVuZ2xpc2hDb250ZW50IiwiU0xPVkFLIiwiSG9tZXBhZ2VXcmFwcGVyIiwibGFuZ3VhZ2VDaG9pY2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJzZXRDdXJyZW50TGFuZ3VhZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJib3hTaGFkb3ciLCJib3JkZXIiLCJMYW5ndWFnZVN3aXRjaCIsImxhbmciLCJzZXRHbG9iYWxMYW5nIiwibGFuZ3VhZ2VzIiwiZmxhZ3MiLCJmbGFnIiwic2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxuZyIsInNldEl0ZW0iLCJyZWxvYWQiLCJoZWlnaHQiLCJ3aWR0aCIsImFsaWduSXRlbXMiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImZvbnRGYW1pbHkiLCJsIiwiY3VycmVudFN0eWxlIiwiZ2V0Q3VycmVudExhbmdTdHlsZSIsImZsYWdTcmMiLCJmaW5kIiwibWFyZ2luUmlnaHQiLCJpc1NlbGVjdGVkIiwiZm9udFdlaWdodCIsIm9wYWNpdHkiLCJjdXJzb3IiLCJTbG92YWtDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsa0JBQ0xDLHVEQUFR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ZWF0ZUluZGV4fmNyZWF0ZVRoZW1lfmhvbWVwYWdlfm15VGhlbWVzfnNpZ25+dGhlbWV+dGhlbWVzT2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgY29uc3QgQ3VzdG9tQWxlcnQgPSAoe3RleHR9KSA9PiB7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgbGV0IGNsYXNzTmFtZXMgPSB2aXNpYmxlID8gXCJjdXN0b20tYWxlcnQgY3VzdG9tLWFsZXJ0LXZpc2libGVcIiA6IFwiY3VzdG9tLWFsZXJ0XCI7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgT0tcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9KYW5Tb3Brby9kZXNpZ24taGVscGVyLXRvb2xcIjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9XCIxXCIgY2xhc3NOYW1lPVwiY2xpY2thYmxlXCIgb25DbGljaz17KCkgPT4gd2luZG93Lm9wZW4oZ2l0aHViTGluayl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgR2l0SHViXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8c21hbGw+SsOhbiBTb3BrbywgTWF0w7rFoSDEjGnFvm3DoXIgwqkyMDIwPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nb3V0TGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIG9uTG9nb3V0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsb2dvdXQ/XCIpKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KHRoaXMucHJvcHMucGF0aCwge30pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2VzcyAhPT0gdW5kZWZpbmVkICYmIHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBocmVmPXt0aGlzLnByb3BzLnBhdGh9IG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkxvZ291dChlKX0+e3RoaXMucHJvcHMudGV4dH08L2E+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExvZ291dExpbmsgZnJvbSBcIi4vTG9nb3V0TGlua1wiO1xuaW1wb3J0IHsgTEFOR1VBR0VfS0VZLCBFTkdMSVNIIH0gZnJvbSBcIi4vaG9tZXBhZ2UvSG9tZXBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShMQU5HVUFHRV9LRVkpIHx8IEVOR0xJU0g7XG4gICAgICAgIHRoaXMubmF2YmFyRGF0YVVybCA9ICcvdWktZGF0YS9uYXZiYXInO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmF2SXRlbXM6IFtdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KHRoaXMubmF2YmFyRGF0YVVybCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbmF2SXRlbXM6IHJlcy5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCAhPT0gXCJtZW51LWxpc3RcIlxuICAgICAgICAgICAgICAgICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoYW1idXJnZXJcIilcbiAgICAgICAgICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFtYnVyZ2VyLWJhclwiKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWxpc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhcjFcIikuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlMScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFyM1wiKS5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRvZ2dsZU1lbnUoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1saXN0XCIpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhcjFcIikuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlMScpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhcjNcIikuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlMicpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyXCIgaWQ9XCJtZW51LWhhbWJ1cmdlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWVudX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1iYXJcIiBpZD1cImJhcjFcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1iYXJcIiBpZD1cImJhcjJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhbWJ1cmdlci1iYXJcIiBpZD1cImJhcjNcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGlkPVwibWVudS1saXN0XCI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubmF2SXRlbXMubWFwKGl0ZW0gPT4ge1xuXG4gICAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBpdGVtLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfT57aXRlbVt0aGlzLmxhbmd1YWdlXX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5sb2dvdXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubG9nb3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb3V0TGluayBwYXRoPXtpdGVtLnBhdGh9IHRleHQ9e2l0ZW0ubG9nb3V0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xvZ291dExpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEVuZ2xpc2hDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMT5JbnRyb2R1Y3Rpb248L2gxPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBUaGlzIHdlYiBhcHBsaWNhdGlvbiB3YXMgY3JlYXRlZCBhcyBhIHNjaG9vbCBwcm9qZWN0IGF0IFVuaXZlcnNpdHkgb2YgWmlsaW5hLlxuICAgICAgICAgICAgICAgICAgICBUaGUgcHVycG9zZSBvZiB0aGlzIGFwcGxpY2F0aW9uIGlzIHRvIG1ha2UgY3JlYXRpb24gb2YgdGhlbWVzIGZvciBzdGF0aWMgd2Vic2l0ZXMgZWFzaWVyIGZvciBwZW9wbGUgd2l0aG91dCBwcm9ncmFtbWluZyBza2lsbHMuXG4gICAgICAgICAgICAgICAgICAgIEJ5IG5vIG1lYW5zIGNhbiBpdCBjb21wZXRlIHdpdGggdG9vbHMgbGlrZSBXb3JkUHJlc3MsIGJ1dCBvbiB0aGUgb3RoZXIgaGFuZCwgaXQgaXMgbXVjaCBlYXNpZXIgdG8gdXNlLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxoMT5Ib3cgdG8gdXNlPC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgSW4gb3JkZXIgdG8gY3JlYXRlIGEgd2ViIHRoZW1lLCB5b3UgbXVzdCBiZSA8Yj5sb2dnZWQ8L2I+IGludG8gYSB1c2VyIDxiPmFjY291bnQ8L2I+LlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBlaXRoZXIgbG9nIGludG8gYW4gZXhpc3RpbmcgYWNjb3VudCBvciBjcmVhdGUgYSBuZXcgb25lIGluIHRoZSA8Yj5TaWduIGluL3VwPC9iPiBzZWN0aW9uLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29udGludWUgdG8gPGI+Q3JlYXRlPC9iPiBzZWN0aW9uIGFuZCBjaG9vc2UgdG8gZWl0aGVyIGNyZWF0ZSBhIG5ldyB0aGVtZSBvciBjb250aW51ZSBkZXNpZ25pbmcgc29tZSBvZiB5b3VyIGV4aXN0aW5nIHRoZW1lcy5cbiAgICAgICAgICAgICAgICAgICAgPC9saT48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIElmIHlvdSBjaG9vc2UgeW8gY3JlYXRlIGEgbmV3IDxiPlRoZW1lPC9iPiwgYSBmb3JtIHdpbGwgYmUgZGlzcGxheWVkLiBGaWxsIG91dCB0aGUgbmFtZSBvZlxuICAgICAgICAgICAgICAgICAgICAgICAgeW91ciBuZXcgdGhlbWUgKHNhbWUgdXNlciBjYW4ndCBoYXZlIG11bHRpcGxlIHRoZW1lcyB3aXRoIHRoZSBzYW1lIG5hbWUpLCBjaG9vc2UgPGI+cHJpdmFjeSBsZXZlbDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIG9mIHlvdXIgdGhlbWUgYW5kIG9wdGlvbmFsbHkgYWQgYSBkZXNjcmlwdGlvbi4gWW91IGNhbiBjaGFuZ2UgdGhlc2UgcHJvcGVydGllcyBhbnkgdGltZS5cbiAgICAgICAgICAgICAgICAgICAgPC9saT48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZXJlIGFyZSAzIDxiPlByaXZhY3kgbGV2ZWxzPC9iPiBvZiB0aGVtZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPlByaXZhdGU8L2I+ICh2aXNpYmxlIG9ubHkgZm9yIHRoZSBvd25lcik8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5WaXNpYmxlIGZvciBsb2dnZWQgdXNlcnMgb25seTwvYj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5QdWJsaWM8L2I+ICh2aXNpYmxlIGZvciBldmVyeW9uZSk8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT48YnIvPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXs1fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggdGhlbWUgY2FuIGhhdmUgbXVsdGlwbGUgcGFnZXMsIHlvdSBjYW4gYWRkIHRoZW0gYnkgY2xpY2tpbmcgb24gPGI+QWRkIHBhZ2U8L2I+IGJ1dHRvbi5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBlZGl0IHBhZ2VzIGJ5IGNsaWNraW5nIG9uIDxiPkVkaXQ8L2I+IGJ1dHRvbiBpbiB0aGUgcGFnZXMgbGlzdC4gQWZ0ZXIgdGhhdCwgYSBtZW51IHdpdGggR1VJXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWxsIGJlIGRpc3BsYXllZCB0byB5b3UsIGFzIHlvdSBjYW4gc2VlIG9uIHRoZSA8YSBocmVmPVwiI3Nob3djYXNlLXZpZGVvXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uPScjc2hvd2Nhc2UtdmlkZW8nfT52aWRlbyBiZWxvdzwvYT4uXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRmluYWxseSwgd2hlbiB5b3UncmUgYWxsIGRvbmUsIHlvdSBjYW4gZG93bmxvYWQgeW91ciB0aGVtZSBieSBjbGlja2luZyB0aGUgPGI+RG93bmxvYWQ8L2I+IGJ1dHRvbiBpbiB0aGUgdGhlbWUgc2VjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbmdsaXNoQ29udGVudDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCBFbmdsaXNoQ29udGVudCBmcm9tIFwiLi9FbmdsaXNoQ29udGVudFwiO1xuaW1wb3J0IFNsb3Zha0NvbnRlbnQgZnJvbSBcIi4vU2xvdmFrQ29udGVudFwiO1xuaW1wb3J0IExhbmd1YWdlU3dpdGNoIGZyb20gXCIuL0xhbmd1YWdlU3dpdGNoXCI7XG5pbXBvcnQgeyBDdXN0b21BbGVydCB9IGZyb20gXCIuLi9DdXN0b21BbGVydFwiO1xuXG5leHBvcnQgY29uc3QgRU5HTElTSCA9ICdFTic7XG5leHBvcnQgY29uc3QgU0xPVkFLID0gJ1NLJztcbmV4cG9ydCBjb25zdCBMQU5HVUFHRV9LRVkgPSAnbGFuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlV3JhcHBlcigpIHtcbiAgICBsZXQgbGFuZ3VhZ2VDaG9pY2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oTEFOR1VBR0VfS0VZKSB8fCBFTkdMSVNIO1xuICAgIGNvbnN0IFtjdXJyZW50TGFuZ3VhZ2UsIHNldEN1cnJlbnRMYW5ndWFnZV0gPSB1c2VTdGF0ZShsYW5ndWFnZUNob2ljZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPExhbmd1YWdlU3dpdGNoIGxhbmc9e2N1cnJlbnRMYW5ndWFnZX0gc2V0R2xvYmFsTGFuZz17c2V0Q3VycmVudExhbmd1YWdlfS8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID09PSBFTkdMSVNIID9cbiAgICAgICAgICAgICAgICAgICAgPEVuZ2xpc2hDb250ZW50IC8+IDogPFNsb3Zha0NvbnRlbnQgLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOidyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTonZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAzcHggM3B4IHJnYmEoMTgwLCAyMzAsIDI1MCwgMC4yKScsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknLFxuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjk1JVwiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjkwJVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaG93Y2FzZS12aWRlb1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIi4uL2ltZy92aWRlbzEubW92XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgICBFTkdMSVNILFxuICAgIFNMT1ZBSyxcbiAgICBMQU5HVUFHRV9LRVlcbn0gZnJvbSBcIi4vSG9tZXBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IExhbmd1YWdlU3dpdGNoID0gKHtsYW5nLCBzZXRHbG9iYWxMYW5nfSkgPT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlcyA9IFtFTkdMSVNILCBTTE9WQUtdO1xuICAgIGNvbnN0IGZsYWdzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYW5ndWFnZTogRU5HTElTSCxcbiAgICAgICAgICAgIGZsYWc6ICdodHRwczovL2Vtb2ppcGVkaWEtdXMuczMuZHVhbHN0YWNrLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3RodW1icy8zMjAvam95cGl4ZWxzLzI3NS9mbGFnLXVuaXRlZC1raW5nZG9tXzFmMWVjLTFmMWU3LnBuZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFuZ3VhZ2U6IFNMT1ZBSyxcbiAgICAgICAgICAgIGZsYWc6ICdodHRwczovL2Vtb2ppcGVkaWEtdXMuczMuZHVhbHN0YWNrLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3RodW1icy8xMjAvam95cGl4ZWxzLzI1Ny9mbGFnLXNsb3Zha2lhXzFmMWY4LTFmMWYwLnBuZydcbiAgICAgICAgfVxuICAgIF07XG4gICAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShsYW5nKTtcblxuICAgIGNvbnN0IHNlbGVjdExhbmd1YWdlID0gbG5nID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKExBTkdVQUdFX0tFWSwgbG5nKTtcbiAgICAgICAgc2V0TGFuZ3VhZ2UobG5nKTtcbiAgICAgICAgc2V0R2xvYmFsTGFuZyhsbmcpO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgIHdpZHRoOiAyODAsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRncmF5JyxcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggM3B4IDNweCByZ2JhKDE4MCwgMjMwLCAyNTAsIDAuMiknLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZkZmVmZCcsXG4gICAgICAgICAgICBwYWRkaW5nOiAnM3B4IDAgM3B4IDdweCcsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHJpZ2h0OiA1MCxcbiAgICAgICAgICAgIHRvcDogODAsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnVWJ1bnR1J1xuICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09IEVOR0xJU0ggP1xuICAgICAgICAgICAgICAgICAgICAnU2VsZWN0IGxhbmd1YWdlOiAnIDpcbiAgICAgICAgICAgICAgICAgICAgJ1Z5YmVydGUgc2kgamF6eWs6ICdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlcy5tYXAobCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTdHlsZSA9IGdldEN1cnJlbnRMYW5nU3R5bGUobCA9PT0gbGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmbGFnU3JjID0gZmxhZ3MuZmluZChmbGFnID0+IGZsYWcubGFuZ3VhZ2UgPT09IGwpLmZsYWc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e2N1cnJlbnRTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xhbmctY2hvaWNlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZWxlY3RMYW5ndWFnZShsKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZsYWdTcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bCArICctZmxhZyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBnZXRDdXJyZW50TGFuZ1N0eWxlID0gaXNTZWxlY3RlZCA9PiB7XG4gICAgY29uc3QgY3VycmVudFN0eWxlID0gaXNTZWxlY3RlZCA/XG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxuICAgICAgICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAzcHggMXB4IHJnYmEoMTAwLDE4MCwyMDAsMC44KScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbiAgICAgICAgfSA6XG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzVcbiAgICAgICAgfTtcbiAgICBjdXJyZW50U3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgIGN1cnJlbnRTdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgY3VycmVudFN0eWxlLnBhZGRpbmcgPSAzO1xuICAgIGN1cnJlbnRTdHlsZS5ib3JkZXJSYWRpdXMgPSAzO1xuICAgIGN1cnJlbnRTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGN1cnJlbnRTdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG5cbiAgICByZXR1cm4gY3VycmVudFN0eWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVN3aXRjaDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTbG92YWtDb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aDE+w5p2b2Q8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBUw6F0byB3ZWJvdsOhIGFwbGlrw6FjaWEgYm9sYSB2eXR2b3JlbsOhIGFrbyDFoWtvbHNrw70gcHJvamVrdCBuYSDFvWlsaW5za2VqIFVuaXZlcnppdGUgdiDFvWlsaW5lLlxuICAgICAgICAgICAgICAgICAgICBabXlzZWwgdGVqdG8gYXBsaWvDoWNpZSBqZSB1xL5haMSNacWlIHR2b3JidSBzdGF0aWNrw71jaCB3ZWJvdsO9Y2ggdml6dcOhbG55Y2ggdMOpbSBwcmUgxL51ZMOtIGJleiBwcm9ncmFtw6F0b3Jza8O9Y2ggem5hbG9zdMOtLlxuICAgICAgICAgICAgICAgICAgICBUbyBzYW1venJlam1lIG5lem5hbWVuw6EsIMW+ZSBzYSBtw7TFvmUgcG9yb3Zuw6F2YcWlIHMgbsOhc3Ryb2ptaSBha28gV29yZFByZXNzLiBWw71ob2RvdSB2xaFhayBqZSwgxb5lIGplXG4gICAgICAgICAgICAgICAgICAgIG9tbm9obyDEvmFoxaFpYSBuYSBwb3XFvsOtdmFuaWUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGgxPk7DoXZvZCBuYSBwb3XFvml0aWU8L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBLIHZ5dHZvcmVuaXUgdmxhc3RuZWogd2Vib3ZlaiB0w6lteSBtdXPDrXRlIGJ5xaUgPGI+cHJpaGzDoXNlbsO9PC9iPiBkbyBwb3XFvsOtdmF0ZcS+c2vDqWhvIDxiPsO6xI10dTwvYj4uXG4gICAgICAgICAgICAgICAgICAgICAgICBNw7TFvmV0ZSBzYSBidcSPIHByaWhsw6FzacWlIGRvIGV4aXN0dWrDumNlaG8gw7rEjXR1LCBhbGVibyBzaSB2eXR2b3JpxaUgbm92w70gdiBzZWtjaWkgPGI+UHJpaGzDoXNlbmllPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgUG9rcmHEjXVqdGUgZG8gc2VrY2llIDxiPlZ5dHZvcmnFpTwvYj4gYSB2eWJlcnRlIHNpIMSNaSBjaGNldGUgdnl0dm9yacWlIG5vdsO6IHTDqW11IGFsZWJvIHBva3JhxI1vdmHFpSB2XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXpham5vdmFuw60gbmVqYWtlaiB6IHZhxaFpY2ggZXhpc3R1asO6Y2ljaCB0w6ltLlxuICAgICAgICAgICAgICAgICAgICA8L2xpPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQWsgc3RlIHNpIHp2b2xpbGkgdnl0dm9yZW5pZSBub3ZlaiA8Yj50w6lteTwvYj4sIHpvYnJhesOtIHNhIFbDoW0gZm9ybXVsw6FyLiBWeXBsxYh0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgbsOhem92IFZhxaFlaiBub3ZlaiB0w6lteSAocm92bmFrw70gcG91xb7DrXZhdGXEviBuZXNtaWUgbWHFpSB2aWFjZXJvIHJvdm5ha28gcG9tZW5vdmFuw71jaCB0w6ltKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZ5YmVydGUgc2kgPGI+w7pyb3ZlxYggemRpZcS+YW5pYTwvYj4gYSBuZXBvdmlubmUgbcO0xb5ldGUgcHJpZGHFpSBwb3Bpcy4gVGlldG8gdmxhc3Rub3N0aSBtw7TFvmV0ZSBrZWR5a2/EvnZlayBlZGl0b3ZhxaUuXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeGlzdHVqw7ogMyA8Yj7DunJvdm5lIHpkaWXEvmFuaWE8L2I+IHTDqW0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPlPDumtyb21uw6E8L2I+ICh2aWRpdGXEvm7DoSBsZW4gcHJlIHZsYXN0bsOta2EpPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGI+VmlkaXRlxL5uw6EgbGVuIHByZSBwcmlobMOhc2Vuw71jaDwvYj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48Yj5WZXJlam7DoTwvYj4gKHZpZGl0ZcS+bsOhIHByZSBrYcW+ZMOpaG8pPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17NX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBLYcW+ZMOhIHTDqW1hIG3DtMW+ZSBtYcWlIHZpYWNlcm8gc3Ryw6Fub2ssIG3DtMW+ZXRlIGljaCBwcmlkYcWlIGtsaWtudXTDrW0gbmEgdGxhxI1pZGxvIDxiPlByaWRhxaUgc3Ryw6Fua3U8L2I+LlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBNw7TFvmV0ZSBlZGl0b3ZhxaUgc3Ryw6Fua3kga2xpa251dMOtbSBuYSB0bGHEjWlkbG8gPGI+RWRpdDwvYj4gdiB6b3puYW1lIHN0csOhbm9rLiBQb3RvbSBzYSBWw6FtIHpvYnJhesOtIG1lbnUgcyBHVUlcbiAgICAgICAgICAgICAgICAgICAgICAgIGFrbyBtw7TFvmV0ZSB2aWRpZcWlIG5hIDxhIGhyZWY9XCIjc2hvd2Nhc2UtdmlkZW9cIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb249JyNzaG93Y2FzZS12aWRlbyd9PnZpZGV1IGRvbGU8L2E+LlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEtlxI8gbcOhdGUgZG9rb27EjWVuw7ogc3ZvanUgdMOpbXUsIG3DtMW+ZXRlIGp1IHN0aWFobnXFpSBrbGlrbnV0w61tIG5hIHRsYcSNaWRsbyA8Yj5Eb3dubG9hZDwvYj4uXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xvdmFrQ29udGVudDsiXSwic291cmNlUm9vdCI6IiJ9