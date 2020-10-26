(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browse~create~homepage~myThemes~sign"],{

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
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _LogoutLink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./LogoutLink */ "./assets/js/react/components/LogoutLink.js");
/* harmony import */ var _CustomAlert__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CustomAlert */ "./assets/js/react/components/CustomAlert.js");


















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
    _this.navbarDataUrl = '/ui-data/navbar';
    _this.state = {
      navItems: [],
      active: false
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default.a.get(this.navbarDataUrl).then(function (res) {
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
      var newState = !this.state.active;
      this.setState({
        active: newState
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        id: "navbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        className: "hamburger",
        id: "menu-hamburger",
        onClick: this.toggleMenu
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", {
        className: "hamburger-bar",
        id: "bar1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", {
        className: "hamburger-bar",
        id: "bar2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("span", {
        className: "hamburger-bar",
        id: "bar3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("ul", {
        id: "menu-list"
      }, this.state.navItems.map(function (item) {
        if (item.id !== undefined) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("li", {
            key: item.id,
            onClick: function onClick() {
              return window.location.href = item.link;
            }
          }, item.link === '/' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("img", {
            src: "favicon.png",
            alt: "logo",
            id: "navbar-logo"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("a", {
            href: item.link
          }, item.name));
        } else if (item.logout !== undefined) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("li", {
            key: item.logout
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_LogoutLink__WEBPACK_IMPORTED_MODULE_19__["default"], {
            path: item.path,
            text: item.logout
          }));
        }
      })));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_17___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9DdXN0b21BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvTG9nb3V0TGluay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIkN1c3RvbUFsZXJ0IiwidGV4dCIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJjbGFzc05hbWVzIiwidXNlRWZmZWN0IiwiRm9vdGVyIiwicHJvcHMiLCJnaXRodWJMaW5rIiwid2luZG93Iiwib3BlbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiTG9nb3V0TGluayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm0iLCJheGlvcyIsInBvc3QiLCJwYXRoIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwidW5kZWZpbmVkIiwibG9jYXRpb24iLCJocmVmIiwib25Mb2dvdXQiLCJOYXZpZ2F0aW9uIiwibmF2YmFyRGF0YVVybCIsInN0YXRlIiwibmF2SXRlbXMiLCJhY3RpdmUiLCJnZXQiLCJzZXRTdGF0ZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwiaWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlIiwidG9nZ2xlIiwibmV3U3RhdGUiLCJ0b2dnbGVNZW51IiwibWFwIiwiaXRlbSIsImxpbmsiLCJuYW1lIiwibG9nb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1BLFdBQVcsR0FB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QUFBSSxlQUFHLEVBQUV3QixJQUFJLENBQUNHO0FBQWQsMEJBQ0UsNERBQUMsb0RBQUQ7QUFBWSxnQkFBSSxFQUFFSCxJQUFJLENBQUM3QixJQUF2QjtBQUE2QixnQkFBSSxFQUFFNkIsSUFBSSxDQUFDRztBQUF4QyxZQURGLENBREo7QUFNSDtBQUNGLE9BbkJBLENBREQsQ0FOSixDQURKO0FBK0JIOzs7O0VBMUVtQ3hDLDZDQUFLLENBQUNDLFMiLCJmaWxlIjoiYnJvd3NlfmNyZWF0ZX5ob21lcGFnZX5teVRoZW1lc35zaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IEN1c3RvbUFsZXJ0ID0gKHt0ZXh0fSkgPT4ge1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBjbGFzc05hbWVzID0gdmlzaWJsZSA/IFwiY3VzdG9tLWFsZXJ0IGN1c3RvbS1hbGVydC12aXNpYmxlXCIgOiBcImN1c3RvbS1hbGVydFwiO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBnaXRodWJMaW5rID0gXCJodHRwczovL2dpdGh1Yi5jb20vSmFuU29wa28vZGVzaWduLWhlbHBlci10b29sXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PVwiMVwiIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGdpdGh1YkxpbmspfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHNtYWxsPkrDoW4gU29wa28sIE1hdMO6xaEgxIxpxb5tw6FyIMKpMjAyMDwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ291dExpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBvbkxvZ291dChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbG9nb3V0P1wiKSkge1xuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLnByb3BzLnBhdGgsIHt9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgIT09IHVuZGVmaW5lZCAmJiByZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9wcy5wYXRofSBvbkNsaWNrPXtlID0+IHRoaXMub25Mb2dvdXQoZSl9Pnt0aGlzLnByb3BzLnRleHR9PC9hPlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMb2dvdXRMaW5rIGZyb20gXCIuL0xvZ291dExpbmtcIjtcbmltcG9ydCB7IEN1c3RvbUFsZXJ0IH0gZnJvbSBcIi4vQ3VzdG9tQWxlcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubmF2YmFyRGF0YVVybCA9ICcvdWktZGF0YS9uYXZiYXInO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmF2SXRlbXM6IFtdLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldCh0aGlzLm5hdmJhckRhdGFVcmwpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG5hdkl0ZW1zOiByZXMuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgIT09IFwibWVudS1saXN0XCJcbiAgICAgICAgICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFtYnVyZ2VyXCIpXG4gICAgICAgICAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhhbWJ1cmdlci1iYXJcIikpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1saXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXIxXCIpLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdGF0ZTEnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhcjNcIikuY2xhc3NMaXN0LnJlbW92ZSgncm90YXRlMicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b2dnbGVNZW51KCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtbGlzdFwiKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXIxXCIpLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZTEnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXIzXCIpLmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZTInKTtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSAhdGhpcy5zdGF0ZS5hY3RpdmU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlOiBuZXdTdGF0ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlclwiIGlkPVwibWVudS1oYW1idXJnZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1lbnV9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYmFyXCIgaWQ9XCJiYXIxXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYmFyXCIgaWQ9XCJiYXIyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYW1idXJnZXItYmFyXCIgaWQ9XCJiYXIzXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBpZD1cIm1lbnUtbGlzdFwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLm5hdkl0ZW1zLm1hcChpdGVtID0+IHtcblxuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9IG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaXRlbS5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxpbmsgPT09ICcvJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJmYXZpY29uLnBuZ1wiIGFsdD1cImxvZ29cIiBpZD1cIm5hdmJhci1sb2dvXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aXRlbS5saW5rfT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmxvZ291dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5sb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvdXRMaW5rIHBhdGg9e2l0ZW0ucGF0aH0gdGV4dD17aXRlbS5sb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9nb3V0TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==