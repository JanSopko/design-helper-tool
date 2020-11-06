(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create"],{

/***/ "./assets/js/functions/elementOrParentHasClass.js":
/*!********************************************************!*\
  !*** ./assets/js/functions/elementOrParentHasClass.js ***!
  \********************************************************/
/*! exports provided: elementOrParentHasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementOrParentHasClass", function() { return elementOrParentHasClass; });
var elementOrParentHasClass = function elementOrParentHasClass(element, className) {
  if (element.classList.contains(className)) {
    return true;
  } else if (element.parentElement) {
    return elementOrParentHasClass(element.parentElement, className);
  }

  return false;
};

/***/ }),

/***/ "./assets/js/react/components/create/CreatePageWrapper.js":
/*!****************************************************************!*\
  !*** ./assets/js/react/components/create/CreatePageWrapper.js ***!
  \****************************************************************/
/*! exports provided: CreatePageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageWrapper", function() { return CreatePageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _CreationDesk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreationDesk */ "./assets/js/react/components/create/CreationDesk.js");
/* harmony import */ var _menu_CreateMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/CreateMenu */ "./assets/js/react/components/create/menu/CreateMenu.js");




var CreatePageWrapper = function CreatePageWrapper() {
  console.log(layoutData.pageHash);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_CreateMenu__WEBPACK_IMPORTED_MODULE_3__["CreateMenu"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreationDesk__WEBPACK_IMPORTED_MODULE_2__["CreationDesk"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/***/ }),

/***/ "./assets/js/react/components/create/CreationDesk.js":
/*!***********************************************************!*\
  !*** ./assets/js/react/components/create/CreationDesk.js ***!
  \***********************************************************/
/*! exports provided: CreationDesk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreationDesk", function() { return CreationDesk; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CreationDesk = function CreationDesk() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "creation-desk"
  });
};

/***/ }),

/***/ "./assets/js/react/components/create/menu/CreateMenu.js":
/*!**************************************************************!*\
  !*** ./assets/js/react/components/create/menu/CreateMenu.js ***!
  \**************************************************************/
/*! exports provided: CreateMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMenu", function() { return CreateMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuOptions */ "./assets/js/react/components/create/menu/MenuOptions.js");


var CreateMenu = function CreateMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "create-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOptions__WEBPACK_IMPORTED_MODULE_1__["OptionNavbar"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOptions__WEBPACK_IMPORTED_MODULE_1__["OptionFooter"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOptions__WEBPACK_IMPORTED_MODULE_1__["OptionSideBar"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOptions__WEBPACK_IMPORTED_MODULE_1__["OptionSection"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOptions__WEBPACK_IMPORTED_MODULE_1__["OptionTable"], null));
};

/***/ }),

/***/ "./assets/js/react/components/create/menu/MenuOptions.js":
/*!***************************************************************!*\
  !*** ./assets/js/react/components/create/menu/MenuOptions.js ***!
  \***************************************************************/
/*! exports provided: OptionNavbar, OptionFooter, OptionSideBar, OptionTable, OptionSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionNavbar", function() { return OptionNavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionFooter", function() { return OptionFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionSideBar", function() { return OptionSideBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionTable", function() { return OptionTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionSection", function() { return OptionSection; });
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_input_color__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-input-color */ "./node_modules/react-input-color/dist/index.esm.js");
/* harmony import */ var _functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../functions/elementOrParentHasClass */ "./assets/js/functions/elementOrParentHasClass.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var OptionNavbar = function OptionNavbar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])('white'),
      _useState4 = _slicedToArray(_useState3, 2),
      color = _useState4[0],
      setColor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(100),
      _useState6 = _slicedToArray(_useState5, 2),
      height = _useState6[0],
      setHeight = _useState6[1];

  var classname = active ? "navbar-ui-menu" : "navbar-ui-menu invis";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "menu-option",
    onClick: function onClick(e) {
      if (!Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_16__["elementOrParentHasClass"])(e.target, "navbar-ui-menu")) setActive(!active);
    }
  }, "Navbar", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: classname
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_15__["default"], {
    initialValue: "#ffffff",
    onChange: function onChange(color, height) {
      setColor;
      showNavbar(color, height);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
    type: "number",
    value: height,
    onChange: function onChange(event, color) {
      setHeight(event.target.value);
      showNavbar(color, event.target.value);
    }
  })));
};

function showNavbar(color, height) {
  if (height < 50) {
    height = 50;
  }

  if (height > 200) {
    height = 200;
  }

  var navStyle = {
    backgroundColor: color.hex,
    width: "100%",
    height: "".concat(height, "px"),
    position: "absolute",
    top: 0
  };
  var newElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    style: navStyle
  });
  react_dom__WEBPACK_IMPORTED_MODULE_14___default.a.render(newElement, document.getElementById("creation-desk"));
}

var OptionFooter = function OptionFooter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "menu-option"
  }, "Footer");
};
var OptionSideBar = function OptionSideBar() {
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      active = _useState8[0],
      setActive = _useState8[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "menu-option",
    onClick: function onClick() {
      return setActive(function (active) {
        return !active;
      });
    }
  }, "Side Bar", active && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("h1", null, "Helloo"));
};

var showOptionSideBar = function showOptionSideBar() {
  window.document.getElementById('side-bar-choice').classList.toggle('invis');
};

var OptionTable = function OptionTable() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "menu-option"
  }, "Table");
};
var OptionSection = function OptionSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "menu-option"
  }, "Section");
};

/***/ }),

/***/ "./assets/js/react/containers/createPageContainer.js":
/*!***********************************************************!*\
  !*** ./assets/js/react/containers/createPageContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreatePageContainer; });
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
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Navigation */ "./assets/js/react/components/Navigation.js");
/* harmony import */ var _components_create_CreatePageWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/create/CreatePageWrapper */ "./assets/js/react/components/create/CreatePageWrapper.js");















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





var CreatePageContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(CreatePageContainer, _React$Component);

  var _super = _createSuper(CreatePageContainer);

  function CreatePageContainer() {
    _classCallCheck(this, CreatePageContainer);

    return _super.call(this);
  }

  _createClass(CreatePageContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_create_CreatePageWrapper__WEBPACK_IMPORTED_MODULE_16__["CreatePageWrapper"], null));
    }
  }]);

  return CreatePageContainer;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);



/***/ }),

/***/ "./assets/js/react/pages/create.js":
/*!*****************************************!*\
  !*** ./assets/js/react/pages/create.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_createPageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/createPageContainer */ "./assets/js/react/containers/createPageContainer.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_createPageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), window.document.getElementById('root'));

/***/ })

},[["./assets/js/react/pages/create.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","vendors~create","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvY3JlYXRlUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImVsZW1lbnRPclBhcmVudEhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsIkNyZWF0ZVBhZ2VXcmFwcGVyIiwiY29uc29sZSIsImxvZyIsImxheW91dERhdGEiLCJwYWdlSGFzaCIsIkNyZWF0aW9uRGVzayIsIkNyZWF0ZU1lbnUiLCJPcHRpb25OYXZiYXIiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNvbG9yIiwic2V0Q29sb3IiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJjbGFzc25hbWUiLCJlIiwidGFyZ2V0Iiwic2hvd05hdmJhciIsImV2ZW50IiwidmFsdWUiLCJuYXZTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhleCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJuZXdFbGVtZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiT3B0aW9uRm9vdGVyIiwiT3B0aW9uU2lkZUJhciIsInNob3dPcHRpb25TaWRlQmFyIiwid2luZG93IiwidG9nZ2xlIiwiT3B0aW9uVGFibGUiLCJPcHRpb25TZWN0aW9uIiwiQ3JlYXRlUGFnZUNvbnRhaW5lciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXdCO0FBQzNELE1BQUlELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkJGLFNBQTNCLENBQUosRUFBMkM7QUFDdkMsV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlELE9BQU8sQ0FBQ0ksYUFBWixFQUEyQjtBQUM5QixXQUFPTCx1QkFBdUIsQ0FBQ0MsT0FBTyxDQUFDSSxhQUFULEVBQXdCSCxTQUF4QixDQUE5QjtBQUNIOztBQUNELFNBQU8sS0FBUDtBQUNILENBUE0sQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQVUsQ0FBQ0MsUUFBdkI7QUFDQSxzQkFDSTtBQUFLLE1BQUUsRUFBQztBQUFSLGtCQUNJLDJEQUFDLDJEQUFELE9BREosZUFFSSwyREFBQywwREFBRCxPQUZKLGVBR0ksMkRBQUMsK0NBQUQsT0FISixDQURKO0FBT0gsQ0FUTSxDOzs7Ozs7Ozs7Ozs7QUNMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUM5QixzQkFDSTtBQUFLLE1BQUUsRUFBQztBQUFSLElBREo7QUFJSCxDQUxNLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QVAsQ0FBZ0JDLGNBQWhCLENBQStCLE1BQS9CLENBRkosRSIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQucGFyZW50RWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCB7IENyZWF0aW9uRGVzayB9IGZyb20gXCIuL0NyZWF0aW9uRGVza1wiO1xuaW1wb3J0IHsgQ3JlYXRlTWVudSB9IGZyb20gXCIuL21lbnUvQ3JlYXRlTWVudVwiO1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlUGFnZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobGF5b3V0RGF0YS5wYWdlSGFzaCk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPENyZWF0ZU1lbnUvPlxuICAgICAgICAgICAgPENyZWF0aW9uRGVzay8+XG4gICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQ3JlYXRpb25EZXNrID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNyZWF0aW9uLWRlc2tcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBPcHRpb25OYXZiYXIsXG4gICAgT3B0aW9uRm9vdGVyLFxuICAgIE9wdGlvblNpZGVCYXIsXG4gICAgT3B0aW9uU2VjdGlvbixcbiAgICBPcHRpb25UYWJsZVxufSBmcm9tIFwiLi9NZW51T3B0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVhdGUtbWVudVwiPlxuICAgICAgICAgICAgPE9wdGlvbk5hdmJhci8+XG4gICAgICAgICAgICA8T3B0aW9uRm9vdGVyLz5cbiAgICAgICAgICAgIDxPcHRpb25TaWRlQmFyLz5cbiAgICAgICAgICAgIDxPcHRpb25TZWN0aW9uLz5cbiAgICAgICAgICAgIDxPcHRpb25UYWJsZS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBJbnB1dENvbG9yIGZyb20gXCJyZWFjdC1pbnB1dC1jb2xvclwiO1xuaW1wb3J0IHtlbGVtZW50T3JQYXJlbnRIYXNDbGFzc30gZnJvbSBcIi4uLy4uLy4uLy4uL2Z1bmN0aW9ucy9lbGVtZW50T3JQYXJlbnRIYXNDbGFzc1wiO1xuXG5leHBvcnQgY29uc3QgT3B0aW9uTmF2YmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnd2hpdGUnKTtcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoMTAwKTtcbiAgICBjb25zdCBjbGFzc25hbWUgPSBhY3RpdmUgPyBcIm5hdmJhci11aS1tZW51XCIgOiBcIm5hdmJhci11aS1tZW51IGludmlzXCI7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtb3B0aW9uXCJcbiAgICAgICAgICAgICBvbkNsaWNrPVxuICAgICAgICAgICAgICAgICB7ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICBpZighZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZS50YXJnZXQsIFwibmF2YmFyLXVpLW1lbnVcIikpXG4gICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKCFhY3RpdmUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIE5hdmJhclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZX0+XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3IgaW5pdGlhbFZhbHVlPVwiI2ZmZmZmZlwiIG9uQ2hhbmdlPXsoY29sb3IsIGhlaWdodCkgPT4ge3NldENvbG9yO3Nob3dOYXZiYXIoY29sb3IsIGhlaWdodCk7fX0vPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2hlaWdodH0gb25DaGFuZ2U9eyhldmVudCwgY29sb3IpID0+IHtzZXRIZWlnaHQoZXZlbnQudGFyZ2V0LnZhbHVlKTtzaG93TmF2YmFyKGNvbG9yLCBldmVudC50YXJnZXQudmFsdWUpO319Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBzaG93TmF2YmFyKGNvbG9yLCBoZWlnaHQpIHtcbiAgICBpZiAoaGVpZ2h0IDwgNTApIHtcbiAgICAgICAgaGVpZ2h0ID0gNTA7XG4gICAgfVxuICAgIGlmIChoZWlnaHQgPiAyMDApIHtcbiAgICAgICAgaGVpZ2h0ID0gMjAwO1xuICAgIH1cbiAgICBjb25zdCBuYXZTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5oZXgsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICB0b3A6IDBcbiAgICB9O1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSA8ZGl2IHN0eWxlPXtuYXZTdHlsZX0vPjtcbiAgICBSZWFjdERPTS5yZW5kZXIobmV3RWxlbWVudCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGlvbi1kZXNrXCIpKTtcbn1cblxuZXhwb3J0IGNvbnN0IE9wdGlvbkZvb3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1vcHRpb25cIj5cbiAgICAgICAgICAgIEZvb3RlclxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgT3B0aW9uU2lkZUJhciA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LW9wdGlvblwiIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShhY3RpdmUgPT4gIWFjdGl2ZSl9PlxuICAgICAgICAgICAgU2lkZSBCYXJcbiAgICAgICAgICAgIHthY3RpdmUgJiYgPGgxPkhlbGxvbzwvaDE+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBzaG93T3B0aW9uU2lkZUJhciA9ICgpID0+IHtcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGUtYmFyLWNob2ljZScpLmNsYXNzTGlzdC50b2dnbGUoJ2ludmlzJyk7XG59XG5cbmV4cG9ydCBjb25zdCBPcHRpb25UYWJsZSA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1vcHRpb25cIj5cbiAgICAgICAgICAgIFRhYmxlXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBPcHRpb25TZWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LW9wdGlvblwiPlxuICAgICAgICAgICAgU2VjdGlvblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IENyZWF0ZVBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAgPENyZWF0ZVBhZ2VXcmFwcGVyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3JlYXRlUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9jcmVhdGVQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q3JlYXRlUGFnZUNvbnRhaW5lcj48L0NyZWF0ZVBhZ2VDb250YWluZXI+LFxuICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=