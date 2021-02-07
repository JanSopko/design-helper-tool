(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create"],{

/***/ "./assets/js/functions/elementOrParentHasClass.js":
/*!********************************************************!*\
  !*** ./assets/js/functions/elementOrParentHasClass.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var elementOrParentHasClass = function elementOrParentHasClass(element, className) {
  if (element.classList.contains(className)) {
    return true;
  } else if (element.parentElement) {
    return elementOrParentHasClass(element.parentElement, className);
  }

  return false;
};

/* harmony default export */ __webpack_exports__["default"] = (elementOrParentHasClass);

/***/ }),

/***/ "./assets/js/react/components/FloatingWindow.js":
/*!******************************************************!*\
  !*** ./assets/js/react/components/FloatingWindow.js ***!
  \******************************************************/
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
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var FloatingWindow = function FloatingWindow(_ref) {
  var _ref$initActive = _ref.initActive,
      initActive = _ref$initActive === void 0 ? false : _ref$initActive,
      _ref$initContents = _ref.initContents,
      initContents = _ref$initContents === void 0 ? [] : _ref$initContents,
      _ref$needsWide = _ref.needsWide,
      needsWide = _ref$needsWide === void 0 ? false : _ref$needsWide;
  var windowClassName = "floating-window";
  var overTopClassName = "over-top";
  var wideClassName = ' window-wide';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    return setActive(initActive);
  }, []);
  var className = active ? windowClassName : "".concat(windowClassName, " ").concat(overTopClassName);
  if (needsWide) className += wideClassName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("span", {
    className: "exit-button button-red",
    onClick: function onClick() {
      setActive(false);
    },
    style: {
      color: 'white'
    }
  }, "X")), initContents.map(function (item) {
    return item;
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FloatingWindow);

/***/ }),

/***/ "./assets/js/react/components/create/CreatePageWrapper.js":
/*!****************************************************************!*\
  !*** ./assets/js/react/components/create/CreatePageWrapper.js ***!
  \****************************************************************/
/*! exports provided: ACTIONS, INIT_STYLE, savePage, CreatePageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_STYLE", function() { return INIT_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePage", function() { return savePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageWrapper", function() { return CreatePageWrapper; });
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
/* harmony import */ var _CreationDesk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CreationDesk */ "./assets/js/react/components/create/CreationDesk.js");
/* harmony import */ var _menu_CreateMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menu/CreateMenu */ "./assets/js/react/components/create/menu/CreateMenu.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reducer */ "./assets/js/react/components/create/reducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ACTIONS = {
  NAVBAR_HEIGHT: 'setNavbarHeight',
  NAVBAR_BACKGROUND_COLOR: 'setNavbarBackgroundColor',
  NAVBAR_TEXT_COLOR: 'setNavbarTextColor',
  NAVBAR_TEXT_SIZE: 'setNavbarTextSize',
  NAVBAR_SPACING_OPTION: 'setNavbarSpacingOption',
  NAVBAR_ITEM_TEXT_UPDATED: 'setNavbarItemText',
  NAVBAR_ITEM_URL_UPDATED: 'setNavbarItemUrl',
  NAVBAR_ITEM_ITEM_DELETED: 'deleteNavbarItem',
  NAVBAR_ITEM_ADDED: 'addedNavbarItem',
  BODY_BACKGROUND_COLOR: 'setBodyBackroundColor',
  BODY_TEXT_COLOR: 'setBodyTextColor',
  BODY_FONT_SIZE: 'setBodyFontSize',
  BODY_FONT: 'setBodyFont',
  BODY_PADDING: 'setBodyPadding',
  FOOTER_BACKGROUND_COLOR: 'setFooterBackgroundColor',
  FOOTER_TEXT_COLOR: 'setFooterTextColor',
  FOOTER_FONT_SIZE: 'setFooterFontSize',
  FOOTER_HEIGHT: 'setFooterHeight'
};
var INIT_STYLE = {
  navbar: {
    backgroundColor: '#aaaaaa',
    color: '#000000',
    height: 5
  }
};

var init = function init() {
  return layoutData.pageStructure;
};

var savePage = function savePage(payload) {
  payload.navbar.height = payload.navbar.height || INIT_STYLE.navbar.height; //@todo refactor!

  axios__WEBPACK_IMPORTED_MODULE_18___default.a.post("/data/update_page/".concat(layoutData.pageHash), {
    payload: payload
  }).then(function (res) {
    if (res.data.message) {
      alert(res.data.message);
    }
  });
};
var CreatePageWrapper = function CreatePageWrapper() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_13__["useReducer"])(_reducer__WEBPACK_IMPORTED_MODULE_17__["default"], {}, init),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  console.log(state);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_menu_CreateMenu__WEBPACK_IMPORTED_MODULE_16__["CreateMenu"], {
    store: state,
    dispatch: dispatch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_CreationDesk__WEBPACK_IMPORTED_MODULE_15__["CreationDesk"], {
    store: state
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], null));
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
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CreatePageWrapper */ "./assets/js/react/components/create/CreatePageWrapper.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var availableSpacingOptions = {
  flexStart: 1,
  flexEnd: 2,
  spaceAround: 3
};

var navItemsNeedMargin = function navItemsNeedMargin(spacingOption) {
  return spacingOption !== availableSpacingOptions.spaceAround;
};

var getSpacingStyle = function getSpacingStyle(spacingOption) {
  switch (spacingOption) {
    case availableSpacingOptions.flexEnd:
      return {
        display: 'flex',
        justifyContent: 'flex-end'
      };

    case availableSpacingOptions.spaceAround:
      return {
        display: 'flex',
        justifyContent: 'space-around'
      };

    case availableSpacingOptions.flexStart:
    default:
      return {
        display: 'flex',
        justifyContent: 'flex-start'
      };
  }
};

var getNavItemsStyle = function getNavItemsStyle(spacingOption) {
  var style = {
    textDecoration: 'none',
    color: 'inherit'
  };

  if (navItemsNeedMargin(spacingOption)) {
    style.margin = '0 2rem';
  }

  return style;
};

var CreationDesk = function CreationDesk(_ref) {
  var _ref$store = _ref.store,
      store = _ref$store === void 0 ? {} : _ref$store;
  store.navbar = store.navbar || _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_11__["INIT_STYLE"].navbar;
  var bodyStyle = store.body || {};
  var navItems = store.navbar.items || [];
  var contentStyle = store.body.content || {};
  contentStyle = _objectSpread(_objectSpread({}, contentStyle), {}, {
    padding: "30px ".concat(contentStyle.padding, "px")
  });
  var spacing = getSpacingStyle(store.navbar.spacingOption);

  var navStyle = _objectSpread(_objectSpread({}, store.navbar), {}, {
    height: "".concat(store.navbar.height || 5, "rem")
  }, spacing);

  var footerStyle = _objectSpread(_objectSpread({}, store.footer), {}, {
    height: "".concat(store.footer.height || 0, "rem")
  }); // navStyle.display = 'flex';
  // navStyle.justifyContent = 'space-around';


  var navItemsStyle = getNavItemsStyle(store.navbar.spacingOption);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    id: "creation-desk",
    style: bodyStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("nav", {
    style: navStyle
  }, navItems.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
      style: navItemsStyle,
      href: item.url
    }, item.text);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    style: contentStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Heading"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu erat lobortis, varius ante at, accumsan tellus. Curabitur varius, neque id dictum ullamcorper, nisi libero egestas est, vel venenatis ex ipsum at est. Ut in lacus ante. Curabitur faucibus risus mauris, a tincidunt metus mollis eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque a est facilisis, egestas urna et, pharetra arcu. Nam imperdiet dictum nulla in volutpat. Cras tempus ut orci in condimentum. Fusce luctus, dui eget blandit mattis, lacus purus consectetur lorem, nec molestie neque est luctus felis. In hac habitasse platea dictumst. Vivamus magna nunc, accumsan in malesuada id, gravida feugiat tellus. Phasellus a est vitae risus interdum gravida. Ut semper tellus et felis maximus, sit amet tincidunt metus lacinia. Pellentesque vel ligula ornare, dignissim risus accumsan, posuere augue. Integer orci libero, placerat eget auctor ac, aliquet eu turpis. Donec sit amet interdum justo. Integer volutpat et mauris et efficitur. Integer efficitur sapien eu malesuada consectetur. Phasellus tincidunt, urna id efficitur facilisis, diam felis facilisis enim, ac consequat dolor purus ut urna. Nam at maximus mauris. Praesent tortor odio, malesuada vel diam ut, sollicitudin placerat ligula. Etiam et sodales nisi. Donec eu risus aliquam, posuere justo nec, hendrerit nunc. Suspendisse hendrerit commodo leo non pretium. Sed dignissim imperdiet leo sed porta. Nulla blandit arcu id nunc eleifend imperdiet eu sed nisi. Sed ligula massa, convallis tincidunt nunc quis, semper consectetur lacus. Maecenas vel nulla velit. Aliquam sed quam libero. Proin at aliquet nisl, eu efficitur ligula. Curabitur a tincidunt velit. Praesent accumsan, orci in mollis semper, diam tellus euismod quam, vestibulum gravida orci felis sit amet ex. Mauris molestie ex id sapien elementum ullamcorper. Curabitur neque risus, fringilla vel posuere et, bibendum ut dolor. Praesent ex mi, mollis in tincidunt sit amet, sodales nec dui. Ut dictum imperdiet justo id suscipit. Cras cursus, quam vitae ultricies finibus, massa justo pretium sem, in vehicula magna ante vel enim. Donec finibus eros a laoreet consectetur. Aenean augue orci, gravida id mattis quis, feugiat pellentesque mi. Vestibulum bibendum pellentesque mi cursus sodales. Nulla ut lacinia tellus, vitae ullamcorper nibh. Mauris vitae pharetra leo. Morbi in diam eu augue tempus pharetra. Mauris iaculis nulla non risus placerat aliquam a vitae mauris. Morbi nec nunc vitae quam auctor tempus. Maecenas lacinia sollicitudin leo. Sed odio felis, feugiat vitae ullamcorper ullamcorper, mattis laoreet magna. Morbi convallis aliquam facilisis. Pellentesque ac velit nisl. Pellentesque ornare ut lacus nec malesuada. Curabitur finibus, felis quis dapibus maximus, diam nisl finibus velit, vel ornare quam massa ut lectus. Proin metus augue, scelerisque vel ex nec, porttitor commodo elit. Pellentesque a orci turpis. Pellentesque imperdiet luctus nisl, in scelerisque ex consequat id. Donec sollicitudin, erat non scelerisque molestie, mauris eros faucibus lorem, sed bibendum mauris nisi sed sem. Mauris at dignissim ipsum. Ut tristique, arcu non volutpat eleifend, risus est porttitor nunc, quis lacinia dui diam et lectus. Donec dignissim eleifend aliquam. Nunc tempor laoreet enim, ut iaculis nibh tempor sit amet. Nunc laoreet lorem velit, eu lobortis turpis ultricies eget. Sed accumsan facilisis velit, vulputate varius ex dapibus non. Nam aliquet ultrices efficitur. Ut nec sapien posuere, accumsan ligula non, luctus augue. Vestibulum tincidunt iaculis nunc sit amet tristique. Nullam id arcu vitae arcu finibus sodales. Etiam sed aliquet elit, eget fringilla lectus. Sed iaculis justo eu justo egestas, nec posuere eros cursus. Morbi mauris nibh, accumsan sit amet est sit amet, fringilla molestie neque. Nunc et turpis quis diam pharetra rutrum. Aenean id neque diam. Donec nibh augue, venenatis in lobortis vel, ultricies finibus ante. Donec id cursus leo. Sed dignissim ipsum at mollis rhoncus. Suspendisse porttitor scelerisque libero, in aliquam sem eleifend sed. Mauris vitae pharetra leo. Praesent fringilla metus eget ante mattis, eget imperdiet elit dignissim. Donec eu volutpat nisi. Nam egestas ipsum purus, non aliquet orci pellentesque non. Sed ut vehicula urna, non fermentum risus. Nam non feugiat ligula, vel consequat felis. Suspendisse in vestibulum ante. Sed ornare auctor leo, sit amet molestie ipsum cursus quis. Cras sed sollicitudin purus. Nulla eget ultricies orci, quis gravida nisl. Vestibulum vulputate lacinia commodo. Ut placerat ante at suscipit finibus. Nunc gravida nulla quis tellus convallis, nec eleifend sem pretium. Aliquam eleifend facilisis porttitor. In ante enim, cursus vitae sodales ac, semper id dui. Suspendisse et nisl ut dui ullamcorper bibendum et ut eros. Nullam ipsum metus, consectetur vitae bibendum a, aliquam sed neque. Suspendisse semper nibh risus, quis porttitor tortor lobortis sit amet. Donec interdum mi et lacinia elementum. Quisque tristique, lectus nec condimentum sagittis, nunc odio egestas purus, quis efficitur leo diam eget sem. Donec in urna nec sapien tincidunt rutrum. Nunc vehicula lectus nec magna consectetur, a pulvinar nisl fringilla. Quisque sed mattis lectus. Sed at pellentesque metus. Nullam sollicitudin facilisis egestas. Maecenas hendrerit eu tellus mattis ultricies. Phasellus dapibus eu nisi quis lobortis. Etiam imperdiet tincidunt mi, sed viverra sapien interdum sed. Phasellus eu iaculis quam, vel varius diam. Vivamus at eros ullamcorper, vehicula nulla et, vestibulum massa. Donec mi lacus, euismod id leo a, dapibus condimentum libero. Ut vitae neque sit amet massa fringilla sagittis. Fusce porttitor tristique turpis, dictum vestibulum justo. Nam ac auctor purus. Aenean rhoncus risus in turpis consequat, quis egestas eros molestie. Nulla aliquet, orci eu ultrices molestie, lorem nisi pulvinar nisi, id bibendum quam justo quis nulla. Praesent nec est et tellus rutrum tristique. Suspendisse in arcu dui. Maecenas facilisis mauris in enim tristique bibendum. Nunc ullamcorper vehicula mi, sed rutrum magna sodales vitae. Donec ligula turpis, lobortis sed porttitor quis, faucibus ac turpis. Nullam cursus volutpat congue. Sed tempus arcu et bibendum semper. Donec at tincidunt erat, vitae sagittis urna. Aliquam blandit imperdiet justo eget ultrices. Donec vitae nulla quis felis laoreet fermentum quis vel leo. Phasellus vulputate, nulla vel vestibulum sollicitudin, justo neque aliquam ex, ac maximus arcu velit sed nisi. Pellentesque lorem magna, cursus sed magna in, sodales volutpat diam. Integer posuere ante ante, in porttitor tortor maximus sed. Nunc ac nulla fermentum, maximus urna quis, convallis erat. Integer euismod rutrum nisi, nec molestie nibh euismod in. Nullam id massa in massa laoreet commodo in vitae nunc. Nunc accumsan odio a nunc iaculis pharetra. Phasellus mollis finibus lectus sed mollis. Donec et augue quis mi eleifend egestas. Sed quis accumsan turpis. Duis tellus quam, convallis tincidunt nibh nec, efficitur sollicitudin nisl. Suspendisse blandit eget erat ut dignissim. Fusce sed enim ac lorem iaculis pellentesque eget vitae odio. Aliquam dignissim enim turpis, sed facilisis erat volutpat tempor. Vestibulum luctus lacus sodales, ultrices nulla id, sollicitudin turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sit amet ligula ante. Maecenas pretium id purus elementum dapibus. Sed enim lacus, molestie id tortor eu, gravida gravida sapien. Ut auctor sollicitudin urna et dictum. Nulla maximus mi sed porttitor maximus. Sed volutpat dolor nec lectus ornare varius. Vivamus aliquet purus nibh, eu condimentum magna tincidunt id. Sed hendrerit risus a ornare bibendum. Proin nec turpis auctor, rutrum augue sit amet, feugiat dui. Integer in finibus magna. Vivamus eu lobortis metus, non scelerisque neque. Aenean convallis erat ligula, vel bibendum nunc rhoncus at. Aenean felis magna, rhoncus non sollicitudin et, pulvinar et purus. Nunc sed augue vulputate, tristique orci at, laoreet metus. Ut ullamcorper finibus odio, sed fringilla urna interdum sed. Morbi id viverra ante, quis semper metus. Phasellus dui diam, tristique in vulputate id, sodales vel neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis varius enim nec ligula sodales malesuada. Mauris metus nulla, eleifend nec nisi in, maximus tempor dolor. Curabitur pretium ac eros non facilisis. Quisque mollis volutpat rhoncus. Curabitur eu imperdiet sapien. Praesent accumsan, nibh vitae mattis pretium, ipsum ex consectetur orci, efficitur finibus quam ex eu leo. Nulla sodales lobortis diam vel dignissim. Proin dictum, nisi sed sagittis pharetra, ex leo luctus mauris, id consequat elit ligula a sem. In pellentesque urna lacus, ac consectetur nunc condimentum a. Aenean rutrum ornare nulla in consectetur. Nam odio urna, faucibus vel nisi a, pretium tincidunt tortor. Cras tincidunt blandit sapien eu lacinia. Phasellus consequat lectus at varius rutrum. Maecenas euismod nisl sodales sollicitudin semper. Curabitur gravida urna libero, et laoreet turpis accumsan ut. Suspendisse faucibus mauris sit amet libero pretium lacinia. Pellentesque gravida, metus elementum iaculis convallis, elit turpis pretium enim, molestie tempor ante ipsum sit amet tellus. Donec commodo nisl at dapibus tincidunt. Nam mollis nibh quis porttitor blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus eu tincidunt nunc. Etiam sit amet dolor consequat, rutrum odio a, iaculis velit. Donec aliquet nisi magna, vitae porta ligula condimentum et. Curabitur sollicitudin lorem urna, quis vestibulum justo fermentum vitae. Vestibulum aliquam tincidunt sapien, gravida hendrerit ex bibendum ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sit amet nunc et lorem congue volutpat ut quis dui. Nullam pharetra malesuada metus, sit amet molestie dolor pulvinar quis. Fusce in elit elementum, facilisis nunc at, scelerisque enim. Ut fermentum molestie accumsan. Sed nunc mauris, euismod id enim eget, pretium commodo turpis. Mauris quis placerat neque. Nam vitae mi id diam gravida semper. Nam molestie at purus sit amet tincidunt. Donec sed nisl aliquam, sodales sem at, facilisis orci. Curabitur id sapien sit amet ante dapibus maximus. Vivamus odio velit, venenatis vitae ante eu, feugiat ultrices mauris. Praesent vestibulum feugiat tortor quis ullamcorper. Quisque dapibus mi id libero gravida ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec finibus dui. Suspendisse feugiat placerat tellus, et condimentum quam facilisis aliquam. Curabitur erat leo, laoreet non eros non, volutpat hendrerit ex. Proin eu magna sagittis, aliquam ligula quis, convallis justo. Phasellus nulla ante, dictum sagittis eros et, pulvinar tempus massa. Ut tortor odio, vehicula a felis vel, viverra posuere elit. Nunc non posuere nisl. Sed facilisis lectus at est malesuada, porta mattis augue finibus. Ut aliquet bibendum iaculis. Duis sit amet congue magna. Maecenas congue dictum euismod. Aenean nibh velit, auctor vitae tortor quis, congue pellentesque nisi. Integer laoreet magna quis ligula rutrum efficitur. Sed ligula ex, elementum sit amet neque at, dictum feugiat purus. Sed bibendum, magna a suscipit ultricies, quam felis dapibus augue, nec efficitur tellus mauris vel nisl. Integer sed arcu erat. Curabitur arcu odio, gravida rutrum facilisis in, euismod quis ipsum. In cursus diam eu iaculis facilisis. Pellentesque id nunc nisi. Duis eu nisi dignissim, rhoncus magna vitae, gravida mi. Maecenas sagittis sagittis dolor a luctus. Aliquam sagittis elit nunc, vitae dapibus nunc pellentesque quis. Vivamus porttitor magna nec urna viverra, ac scelerisque leo laoreet. In accumsan euismod luctus. Maecenas sollicitudin eu tortor sed iaculis. Phasellus quis facilisis nisl, nec ullamcorper metus. Aenean accumsan quam velit, id convallis diam maximus consequat. Donec lobortis commodo molestie. Maecenas quis sapien volutpat, rhoncus leo in, venenatis quam. Phasellus vitae rhoncus nunc, a rutrum mi. Mauris aliquet, urna ac dignissim maximus, magna tortor rutrum nibh, a consequat massa ligula ut orci. Sed maximus, neque a euismod facilisis, lectus est ultrices risus, quis condimentum sem ex non lacus. Aliquam ante lectus, interdum in ullamcorper sit amet, euismod id libero. Morbi posuere lacinia venenatis. Integer rutrum, tellus sit amet vulputate pulvinar, ex magna sodales velit, ac imperdiet libero quam at nunc. Sed venenatis nulla lacus, eu rhoncus diam auctor non. Quisque pellentesque mi sed tortor ullamcorper condimentum. Cras sem lorem, sagittis in auctor quis, consectetur in sem. Nullam vitae vulputate tortor, a tincidunt eros. Nulla aliquam dui non odio hendrerit, vel ullamcorper dui tempor. Sed laoreet turpis quam, et mollis mi tristique sit amet. Curabitur non lacus pharetra, viverra sapien vitae, sagittis risus. Nullam feugiat orci neque, sed semper libero consectetur at. Vivamus blandit justo a velit dictum iaculis. Morbi porttitor nisl non felis gravida, sit amet consequat lectus vulputate. Proin sodales, urna non pulvinar consequat, sapien velit gravida massa, ornare consequat orci est porta justo. Quisque non ligula ligula. Aliquam erat volutpat. Donec quis sagittis mauris. Vivamus at ante a dui tristique semper vel ac lectus. Cras sed tortor odio. Curabitur at porta nibh. Suspendisse commodo tortor ac rutrum fringilla. Suspendisse ut dolor vitae felis sodales faucibus. Vestibulum semper, metus vitae tempus tempus, diam justo gravida tellus, sit amet posuere quam ipsum sit amet tortor. Maecenas eros augue, placerat a nulla non, feugiat rhoncus diam. Vivamus sed pretium sem. Etiam scelerisque, erat in porttitor mollis, dolor lacus porttitor lacus, vel rutrum urna dolor vitae justo. Donec bibendum viverra varius. Donec feugiat magna id magna pharetra, non venenatis lectus porta. In arcu nibh, hendrerit eu est nec, vehicula euismod lectus. Nullam a molestie tellus. Maecenas gravida sollicitudin faucibus. Curabitur vitae vestibulum metus. Nulla eget lectus at orci bibendum pulvinar. Donec pretium magna a massa scelerisque elementum. Suspendisse ac gravida est. Maecenas ornare dui enim, sed sodales tellus suscipit quis. Proin feugiat lacus ut libero tempus cursus. Duis egestas, augue quis dapibus ultricies, mi nunc condimentum sapien, et tincidunt est tortor sit amet dolor. Phasellus eu lacus viverra, ornare urna vel, consequat purus. Curabitur at ornare neque, quis facilisis elit. Sed vel mauris in diam commodo sollicitudin. Nunc a cursus nisl, at rhoncus ex. Duis ornare urna non nibh gravida, nec accumsan turpis sodales. Pellentesque sit amet ultricies urna. Mauris vel fermentum lorem. Curabitur laoreet, purus vel feugiat feugiat, velit justo luctus mi, a mollis sem leo vitae mauris. Vestibulum dignissim tempus ex eu faucibus. Aliquam eget leo eu arcu dictum blandit. Pellentesque ullamcorper lacus pulvinar turpis venenatis volutpat. Nulla efficitur pellentesque tellus, vitae ornare odio facilisis id. Praesent eget justo turpis. Curabitur condimentum, lacus ut varius mollis, neque risus faucibus mi, sit amet lobortis leo ipsum eget odio. Sed semper vestibulum libero, ac feugiat nibh tristique id. In aliquam eget tellus in commodo. Cras sodales semper nisl, nec euismod leo ullamcorper et. Etiam sed placerat mi. In pellentesque cursus eros in hendrerit. In facilisis, metus at vulputate pulvinar, felis enim efficitur ante, a laoreet augue diam ut ligula. Maecenas lectus tortor, placerat eu tincidunt sit amet, consectetur a odio. Donec vel lorem eros. Morbi et efficitur tortor, vitae viverra lorem. Cras elit ante, auctor eget turpis sit amet, accumsan laoreet arcu. Donec vel dictum velit. Fusce ut venenatis magna. Cras lacinia urna a lacinia feugiat. Ut at odio ut neque tincidunt malesuada quis nec lacus. Donec euismod felis id consectetur eleifend. Etiam nec ipsum eu nibh maximus aliquet. Aenean nec interdum tortor."), store.footer && store.footer.height && store.footer.height > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "creation-desk-footer",
    style: footerStyle
  }, "text"));
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
/* harmony import */ var _MenuOption__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MenuOption */ "./assets/js/react/components/create/menu/MenuOption.js");
/* harmony import */ var _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../CreatePageWrapper */ "./assets/js/react/components/create/CreatePageWrapper.js");
/* harmony import */ var _ElementEditors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ElementEditors */ "./assets/js/react/components/create/menu/ElementEditors.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var menuTexts = {
  navbar: 'Navbar',
  body: 'Body',
  sidebar: 'Sidebar',
  sections: 'Sections',
  footer: 'Footer'
};
var menuOptionActive = '';

var getMenuOptionActive = function getMenuOptionActive() {
  return menuOptionActive;
};

var menuReducer = function menuReducer(currentItem, activeOption) {
  return activeOption;
};

var CreateMenu = function CreateMenu(_ref) {
  var store = _ref.store,
      dispatch = _ref.dispatch;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_13__["useReducer"])(menuReducer, {}, getMenuOptionActive),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      activeMenuOption = _useReducer2[0],
      menuDispatch = _useReducer2[1];

  store.navbar = store.navbar || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    id: "create-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("button", {
    className: "button-green",
    onClick: function onClick() {
      return Object(_CreatePageWrapper__WEBPACK_IMPORTED_MODULE_15__["savePage"])(store);
    }
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initActive: activeMenuOption === menuTexts.navbar,
    menuDispatch: menuDispatch,
    text: menuTexts.navbar,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_16__["NavbarEditor"], {
      navbar: store.navbar || _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_15__["INIT_STYLE"].navbar,
      dispatch: dispatch
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initActive: activeMenuOption === menuTexts.body,
    menuDispatch: menuDispatch,
    text: menuTexts.body,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_16__["BodyEditor"], {
      body: store.body || {},
      dispatch: dispatch
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initActive: activeMenuOption === menuTexts.sidebar,
    menuDispatch: menuDispatch,
    text: menuTexts.sidebar,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_16__["SidebarEditor"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initActive: activeMenuOption === menuTexts.sections,
    menuDispatch: menuDispatch,
    text: menuTexts.sections,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_16__["SectionsEditor"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initActive: activeMenuOption === menuTexts.footer,
    menuDispatch: menuDispatch,
    text: menuTexts.footer,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_16__["FooterEditor"], {
      footer: store.footer,
      dispatch: dispatch
    })
  }));
};

/***/ }),

/***/ "./assets/js/react/components/create/menu/ElementEditors.js":
/*!******************************************************************!*\
  !*** ./assets/js/react/components/create/menu/ElementEditors.js ***!
  \******************************************************************/
/*! exports provided: NavbarEditor, BodyEditor, SidebarEditor, FooterEditor, SectionsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarEditor", function() { return NavbarEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyEditor", function() { return BodyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarEditor", function() { return SidebarEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterEditor", function() { return FooterEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsEditor", function() { return SectionsEditor; });
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
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_10__);
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
/* harmony import */ var react_input_color__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-input-color */ "./node_modules/react-input-color/dist/index.esm.js");
/* harmony import */ var _NavbarItemsManager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NavbarItemsManager */ "./assets/js/react/components/create/menu/NavbarItemsManager.js");
/* harmony import */ var _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../CreatePageWrapper */ "./assets/js/react/components/create/CreatePageWrapper.js");
/* harmony import */ var _functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../functions/elementOrParentHasClass */ "./assets/js/functions/elementOrParentHasClass.js");
















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var availableFonts = ['Arial, sans-serif', 'Verdana, sans-serif', 'Helvetica, sans-serif', 'Tahoma, sans-serif'];
var NavbarEditor = function NavbarEditor(_ref) {
  var navbar = _ref.navbar,
      dispatch = _ref.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(navbar.backgroundColor || '#ffffff'),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(navbar.color || '#000000'),
      _useState4 = _slicedToArray(_useState3, 2),
      textColor = _useState4[0],
      setTextColor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(navbar.height || 5),
      _useState6 = _slicedToArray(_useState5, 2),
      height = _useState6[0],
      setHeight = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(true),
      _useState8 = _slicedToArray(_useState7, 2),
      navbarItemsManagerActive = _useState8[0],
      setNavbarItemsManagerActive = _useState8[1];

  var closeNavItemsModal = function closeNavItemsModal(e) {
    var element = e.target;

    if (Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_19__["default"])(element, 'exit-button') || !Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_19__["default"])(element, 'floating-window') && !Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_19__["default"])(element, 'manage-nav-items') && !Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_19__["default"])(element, 'delete-button') && !Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_19__["default"])(element, 'add-button')) {
      setNavbarItemsManagerActive(false);
    }
  };

  window.onclick = closeNavItemsModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "design-menu-editor navbar-editor"
  }, navbarItemsManagerActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_NavbarItemsManager__WEBPACK_IMPORTED_MODULE_17__["default"], {
    initActive: navbarItemsManagerActive,
    items: navbar.items,
    dispatch: dispatch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "background color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_16__["default"], {
    initialValue: navbar.backgroundColor || '#ffffff',
    onChange: function onChange(e) {
      setBgColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].NAVBAR_BACKGROUND_COLOR,
        payload: {
          backgroundColor: e.hex
        }
      });
    },
    placement: "right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "text color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_16__["default"], {
    initialValue: navbar.color || '#000000',
    onChange: function onChange(e) {
      setTextColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].NAVBAR_TEXT_COLOR,
        payload: {
          color: e.hex
        }
      });
    },
    placement: "right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "height:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
    type: "range",
    min: "3",
    max: "10",
    value: height,
    onChange: function onChange(e) {
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].NAVBAR_HEIGHT,
        payload: {
          height: "".concat(e.target.value)
        }
      });
      setHeight(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "font size:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
    type: "range",
    min: "16",
    max: "40",
    value: navbar.fontSize,
    onChange: function onChange(e) {
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].NAVBAR_TEXT_SIZE,
        payload: {
          fontSize: Number.parseInt(e.target.value)
        }
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
    htmlFor: "spacing-select"
  }, "Spacing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("select", {
    name: "spacingOption",
    id: "spacing-select",
    value: navbar.spacingOption,
    onChange: function onChange(e) {
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].NAVBAR_SPACING_OPTION,
        payload: {
          spacingOption: Number.parseInt(e.target.value)
        }
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("option", {
    value: "1"
  }, "flex-start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("option", {
    value: "2"
  }, "flex-end"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("option", {
    value: "3"
  }, "space-around"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item hoverable manage-nav-items",
    style: {
      color: '#cddc39'
    },
    onClick: function onClick() {
      return setNavbarItemsManagerActive(true);
    }
  }, "Manage navbar items"));
};
var BodyEditor = function BodyEditor(_ref2) {
  var body = _ref2.body,
      dispatch = _ref2.dispatch;

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(body.backgroundColor || '#ffffff'),
      _useState10 = _slicedToArray(_useState9, 2),
      backgroundColor = _useState10[0],
      setBackgroundColor = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(body.color || '#000000'),
      _useState12 = _slicedToArray(_useState11, 2),
      color = _useState12[0],
      setColor = _useState12[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "design-menu-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "background color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_16__["default"], {
    initialValue: body.backgroundColor || '#ffffff',
    onChange: function onChange(e) {
      setBackgroundColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].BODY_BACKGROUND_COLOR,
        payload: {
          backgroundColor: e.hex
        }
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "text color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_16__["default"], {
    initialValue: body.color || '#000000',
    onChange: function onChange(e) {
      setBackgroundColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].BODY_TEXT_COLOR,
        payload: {
          color: e.hex
        }
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "font size:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
    type: "range",
    min: 12,
    max: 24,
    value: body.fontSize,
    onChange: function onChange(e) {
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].BODY_FONT_SIZE,
        payload: {
          fontSize: Number.parseInt(e.target.value)
        }
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item",
    style: {
      display: 'flex',
      flexFlow: 'column wrap'
    }
  }, "padding:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
    type: "range",
    min: "20",
    max: "40",
    value: body.content.padding,
    onChange: function onChange(e) {
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].BODY_PADDING,
        payload: {
          padding: Number.parseInt(e.target.value)
        }
      });
    }
  })));
};
var SidebarEditor = function SidebarEditor() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "design-menu-editor"
  }, "SIDEBAR EDITOR PLACEHOLDER");
};
var FooterEditor = function FooterEditor(_ref3) {
  var footer = _ref3.footer,
      dispatch = _ref3.dispatch;

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(footer.backgroundColor || '#ffffff'),
      _useState14 = _slicedToArray(_useState13, 2),
      backgroundColor = _useState14[0],
      setBackgroundColor = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(footer.color || '#000000'),
      _useState16 = _slicedToArray(_useState15, 2),
      textColor = _useState16[0],
      setTextColor = _useState16[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "design-menu-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "background color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_16__["default"], {
    initialValue: footer.backgroundColor || '#ffffff',
    onChange: function onChange(e) {
      setBackgroundColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].FOOTER_BACKGROUND_COLOR,
        payload: {
          backgroundColor: e.hex
        }
      });
    },
    placement: "right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "text color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_16__["default"], {
    initialValue: footer.color || '#000000',
    onChange: function onChange(e) {
      setTextColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].FOOTER_TEXT_COLOR,
        payload: {
          color: e.hex
        }
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "height:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
    type: "range",
    min: "5",
    max: "15",
    onChange: function onChange(e) {
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].FOOTER_HEIGHT,
        payload: {
          height: Number.parseInt(e.target.value)
        }
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "element-editor-item"
  }, "font size:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
    type: "range",
    min: "12",
    max: "24",
    value: footer.fontSize || 14,
    onChange: function onChange(e) {
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_18__["ACTIONS"].FOOTER_FONT_SIZE,
        payload: {
          fontSize: Number.parseInt(e.target.value)
        }
      });
    }
  })));
};
var SectionsEditor = function SectionsEditor() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "design-menu-editor"
  }, "SECTIONS EDITOR PLACEHOLDER");
};

/***/ }),

/***/ "./assets/js/react/components/create/menu/MenuOption.js":
/*!**************************************************************!*\
  !*** ./assets/js/react/components/create/menu/MenuOption.js ***!
  \**************************************************************/
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
/* harmony import */ var _functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../functions/elementOrParentHasClass */ "./assets/js/functions/elementOrParentHasClass.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MenuOption = function MenuOption(_ref) {
  var text = _ref.text,
      content = _ref.content,
      menuDispatch = _ref.menuDispatch,
      _ref$initActive = _ref.initActive,
      initActive = _ref$initActive === void 0 ? false : _ref$initActive;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(initActive),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var chevronClass = initActive && active ? 'chevron chevron-reverse' : 'chevron';

  var handleClick = function handleClick(e) {
    if (!Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_14__["default"])(e.target, 'design-menu-editor')) {
      menuDispatch(text);
      setActive(!active);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "menu-option",
    onClick: function onClick(e) {
      return handleClick(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, text, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("img", {
    src: "../img/chevron.png",
    alt: "chevron",
    className: chevronClass
  })), initActive && active && content);
};

/* harmony default export */ __webpack_exports__["default"] = (MenuOption);

/***/ }),

/***/ "./assets/js/react/components/create/menu/NavbarItemsManager.js":
/*!**********************************************************************!*\
  !*** ./assets/js/react/components/create/menu/NavbarItemsManager.js ***!
  \**********************************************************************/
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
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var _FloatingWindow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../FloatingWindow */ "./assets/js/react/components/FloatingWindow.js");
/* harmony import */ var _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../CreatePageWrapper */ "./assets/js/react/components/create/CreatePageWrapper.js");
















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var NavbarItemsManager = function NavbarItemsManager(_ref) {
  var initActive = _ref.initActive,
      items = _ref.items,
      dispatch = _ref.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__["useState"])(-1),
      _useState2 = _slicedToArray(_useState, 2),
      negativeId = _useState2[0],
      setNegativeId = _useState2[1];

  var itemsInputs = [];

  if (items && items.length > 0) {
    itemsInputs = items.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "field-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "text-".concat(item.id)
      }, "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        key: "text-".concat(item.id),
        id: "text-".concat(item.id),
        type: "text",
        value: item.text,
        style: {
          margin: '0 .4rem'
        },
        onChange: function onChange(e) {
          return dispatch({
            type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_17__["ACTIONS"].NAVBAR_ITEM_TEXT_UPDATED,
            payload: {
              id: item.id,
              text: e.target.value
            }
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: "url-".concat(item.id)
      }, "URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        key: "url-".concat(item.id),
        id: "url-".concat(item.id),
        type: "text",
        value: item.url,
        style: {
          margin: '0 .4rem'
        },
        onChange: function onChange(e) {
          return dispatch({
            type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_17__["ACTIONS"].NAVBAR_ITEM_URL_UPDATED,
            payload: {
              id: item.id,
              url: e.target.value
            }
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("button", {
        className: "button-red delete-button",
        onClick: function onClick(e) {
          dispatch({
            type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_17__["ACTIONS"].NAVBAR_ITEM_ITEM_DELETED,
            payload: {
              id: item.id
            }
          });
        }
      }, "Delete"));
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_FloatingWindow__WEBPACK_IMPORTED_MODULE_16__["default"], {
    initActive: initActive,
    needsWide: true,
    initContents: [].concat(_toConsumableArray(itemsInputs), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("button", {
      className: "button-dark-green add-button hoverable",
      onClick: function onClick(e) {
        dispatch({
          type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_17__["ACTIONS"].NAVBAR_ITEM_ADDED,
          payload: {
            newItem: {
              id: negativeId,
              text: '',
              url: '/'
            }
          }
        });
        setNegativeId(negativeId - 1);
      }
    }, "Add new item")])
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NavbarItemsManager);

/***/ }),

/***/ "./assets/js/react/components/create/reducer.js":
/*!******************************************************!*\
  !*** ./assets/js/react/components/create/reducer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CreatePageWrapper */ "./assets/js/react/components/create/CreatePageWrapper.js");











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var reducer = function reducer(state, action) {
  var _state$navbar$items;

  switch (action.type) {
    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].NAVBAR_HEIGHT:
      var newNavbarH = _objectSpread({}, state.navbar);

      newNavbarH.height = action.payload.height;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarH
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].NAVBAR_BACKGROUND_COLOR:
      var newNavbarBg = _objectSpread({}, state.navbar);

      newNavbarBg.backgroundColor = action.payload.backgroundColor;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarBg
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].NAVBAR_TEXT_COLOR:
      var newNavbarTc = _objectSpread({}, state.navbar);

      newNavbarTc.color = action.payload.color;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarTc
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].NAVBAR_SPACING_OPTION:
      var newNavbarSpacing = _objectSpread({}, state.navbar);

      newNavbarSpacing.spacingOption = action.payload.spacingOption;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarSpacing
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].NAVBAR_TEXT_SIZE:
      var newNavbarFontSize = _objectSpread({}, state.navbar);

      newNavbarFontSize.fontSize = action.payload.fontSize;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarFontSize
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].NAVBAR_ITEM_TEXT_UPDATED:
      var newNavbarItemsText = state.navbar.items;
      newNavbarItemsText.forEach(function (item) {
        if (item.id !== undefined && item.id === action.payload.id) {
          item.text = action.payload.text;
        }
      });

      var newNavbarChangedItemsText = _objectSpread(_objectSpread({}, state.navbar), {}, {
        items: newNavbarItemsText
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarChangedItemsText
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].NAVBAR_ITEM_URL_UPDATED:
      var newNavbarItemsUrl = state.navbar.items;
      newNavbarItemsUrl = newNavbarItemsUrl.map(function (item) {
        if (item.id !== undefined && item.id === action.payload.id) {
          return _objectSpread(_objectSpread({}, item), {}, {
            url: action.payload.url
          });
        } else {
          return item;
        }
      });

      var newNavbarChangedItemsUrl = _objectSpread(_objectSpread({}, state.navbar), {}, {
        items: newNavbarItemsUrl
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarChangedItemsUrl
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].NAVBAR_ITEM_ITEM_DELETED:
      var oldNavbarItems = state.navbar.items;
      var newNavbarItemsAfterDeleting = oldNavbarItems.filter(function (item) {
        return item.id !== action.payload.id;
      });

      var newNavbarAfterDeletion = _objectSpread({}, state.navbar);

      newNavbarAfterDeletion.items = newNavbarItemsAfterDeleting;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarAfterDeletion
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].NAVBAR_ITEM_ADDED:
      var newNavItems = (_state$navbar$items = state.navbar.items) !== null && _state$navbar$items !== void 0 ? _state$navbar$items : [];
      newNavItems.push(action.payload.newItem);

      var newNavbarAfterAdding = _objectSpread(_objectSpread({}, state.navbar), {}, {
        items: newNavItems
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarAfterAdding
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].BODY_BACKGROUND_COLOR:
      var newBody = _objectSpread({}, state.body);

      newBody.backgroundColor = action.payload.backgroundColor;
      return _objectSpread(_objectSpread({}, state), {}, {
        body: newBody
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].BODY_TEXT_COLOR:
      var newBodyTc = _objectSpread({}, state.body);

      newBodyTc.color = action.payload.color;
      return _objectSpread(_objectSpread({}, state), {}, {
        body: newBodyTc
      });

    default:
      return state;

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].BODY_FONT_SIZE:
      var newBodyFs = _objectSpread({}, state.body);

      newBodyFs.fontSize = action.payload.fontSize;
      return _objectSpread(_objectSpread({}, state), {}, {
        body: newBodyFs
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].BODY_PADDING:
      var newBodyContentPadding = _objectSpread({}, state.body.content);

      newBodyContentPadding.padding = action.payload.padding;
      return _objectSpread(_objectSpread({}, state), {}, {
        body: _objectSpread(_objectSpread({}, state.body), {}, {
          content: newBodyContentPadding
        })
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].BODY_FONT:
      var newBodyFont = _objectSpread({}, state.body);

      newBodyFont.fontFamily = action.payload.fontFamily;
      return _objectSpread(_objectSpread({}, state), {}, {
        body: newBodyFont
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].FOOTER_BACKGROUND_COLOR:
      var newFooterBg = _objectSpread({}, state.footer);

      newFooterBg.backgroundColor = action.payload.backgroundColor;
      return _objectSpread(_objectSpread({}, state), {}, {
        footer: newFooterBg
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].FOOTER_HEIGHT:
      var newFooterHeight = _objectSpread({}, state.footer);

      newFooterHeight.height = action.payload.height;
      return _objectSpread(_objectSpread({}, state), {}, {
        footer: newFooterHeight
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].FOOTER_TEXT_COLOR:
      var newFooterTc = _objectSpread({}, state.footer);

      newFooterTc.color = action.payload.color;
      return _objectSpread(_objectSpread({}, state), {}, {
        footer: newFooterTc
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_10__["ACTIONS"].FOOTER_FONT_SIZE:
      var newFooterFs = _objectSpread({}, state.footer);

      newFooterFs.fontSize = action.payload.fontSize;
      return _objectSpread(_objectSpread({}, state), {}, {
        footer: newFooterFs
      });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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

},[["./assets/js/react/pages/create.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme~themesOf","vendors~create","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme~themesOf"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL0Zsb2F0aW5nV2luZG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvRWxlbWVudEVkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvbWVudS9OYXZiYXJJdGVtc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvY3JlYXRlUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImVsZW1lbnRPclBhcmVudEhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsIkZsb2F0aW5nV2luZG93IiwiaW5pdEFjdGl2ZSIsImluaXRDb250ZW50cyIsIm5lZWRzV2lkZSIsIndpbmRvd0NsYXNzTmFtZSIsIm92ZXJUb3BDbGFzc05hbWUiLCJ3aWRlQ2xhc3NOYW1lIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VFZmZlY3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm1hcCIsIml0ZW0iLCJBQ1RJT05TIiwiTkFWQkFSX0hFSUdIVCIsIk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SIiwiTkFWQkFSX1RFWFRfQ09MT1IiLCJOQVZCQVJfVEVYVF9TSVpFIiwiTkFWQkFSX1NQQUNJTkdfT1BUSU9OIiwiTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEIiwiTkFWQkFSX0lURU1fVVJMX1VQREFURUQiLCJOQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQiLCJOQVZCQVJfSVRFTV9BRERFRCIsIkJPRFlfQkFDS0dST1VORF9DT0xPUiIsIkJPRFlfVEVYVF9DT0xPUiIsIkJPRFlfRk9OVF9TSVpFIiwiQk9EWV9GT05UIiwiQk9EWV9QQURESU5HIiwiRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1IiLCJGT09URVJfVEVYVF9DT0xPUiIsIkZPT1RFUl9GT05UX1NJWkUiLCJGT09URVJfSEVJR0hUIiwiSU5JVF9TVFlMRSIsIm5hdmJhciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImluaXQiLCJsYXlvdXREYXRhIiwicGFnZVN0cnVjdHVyZSIsInNhdmVQYWdlIiwicGF5bG9hZCIsImF4aW9zIiwicG9zdCIsInBhZ2VIYXNoIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwiYWxlcnQiLCJDcmVhdGVQYWdlV3JhcHBlciIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhdmFpbGFibGVTcGFjaW5nT3B0aW9ucyIsImZsZXhTdGFydCIsImZsZXhFbmQiLCJzcGFjZUFyb3VuZCIsIm5hdkl0ZW1zTmVlZE1hcmdpbiIsInNwYWNpbmdPcHRpb24iLCJnZXRTcGFjaW5nU3R5bGUiLCJnZXROYXZJdGVtc1N0eWxlIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpbiIsIkNyZWF0aW9uRGVzayIsInN0b3JlIiwiYm9keVN0eWxlIiwiYm9keSIsIm5hdkl0ZW1zIiwiaXRlbXMiLCJjb250ZW50U3R5bGUiLCJjb250ZW50IiwicGFkZGluZyIsInNwYWNpbmciLCJuYXZTdHlsZSIsImZvb3RlclN0eWxlIiwiZm9vdGVyIiwibmF2SXRlbXNTdHlsZSIsInVybCIsInRleHQiLCJtZW51VGV4dHMiLCJzaWRlYmFyIiwic2VjdGlvbnMiLCJtZW51T3B0aW9uQWN0aXZlIiwiZ2V0TWVudU9wdGlvbkFjdGl2ZSIsIm1lbnVSZWR1Y2VyIiwiY3VycmVudEl0ZW0iLCJhY3RpdmVPcHRpb24iLCJDcmVhdGVNZW51IiwiYWN0aXZlTWVudU9wdGlvbiIsIm1lbnVEaXNwYXRjaCIsImF2YWlsYWJsZUZvbnRzIiwiTmF2YmFyRWRpdG9yIiwiYmdDb2xvciIsInNldEJnQ29sb3IiLCJ0ZXh0Q29sb3IiLCJzZXRUZXh0Q29sb3IiLCJzZXRIZWlnaHQiLCJuYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUiLCJzZXROYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUiLCJjbG9zZU5hdkl0ZW1zTW9kYWwiLCJlIiwidGFyZ2V0Iiwid2luZG93Iiwib25jbGljayIsInR5cGUiLCJoZXgiLCJ2YWx1ZSIsImZvbnRTaXplIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJCb2R5RWRpdG9yIiwic2V0QmFja2dyb3VuZENvbG9yIiwic2V0Q29sb3IiLCJmbGV4RmxvdyIsIlNpZGViYXJFZGl0b3IiLCJGb290ZXJFZGl0b3IiLCJTZWN0aW9uc0VkaXRvciIsIk1lbnVPcHRpb24iLCJjaGV2cm9uQ2xhc3MiLCJoYW5kbGVDbGljayIsIk5hdmJhckl0ZW1zTWFuYWdlciIsIm5lZ2F0aXZlSWQiLCJzZXROZWdhdGl2ZUlkIiwiaXRlbXNJbnB1dHMiLCJsZW5ndGgiLCJpZCIsIm5ld0l0ZW0iLCJhY3Rpb24iLCJuZXdOYXZiYXJIIiwibmV3TmF2YmFyQmciLCJuZXdOYXZiYXJUYyIsIm5ld05hdmJhclNwYWNpbmciLCJuZXdOYXZiYXJGb250U2l6ZSIsIm5ld05hdmJhckl0ZW1zVGV4dCIsImZvckVhY2giLCJ1bmRlZmluZWQiLCJuZXdOYXZiYXJDaGFuZ2VkSXRlbXNUZXh0IiwibmV3TmF2YmFySXRlbXNVcmwiLCJuZXdOYXZiYXJDaGFuZ2VkSXRlbXNVcmwiLCJvbGROYXZiYXJJdGVtcyIsIm5ld05hdmJhckl0ZW1zQWZ0ZXJEZWxldGluZyIsImZpbHRlciIsIm5ld05hdmJhckFmdGVyRGVsZXRpb24iLCJuZXdOYXZJdGVtcyIsInB1c2giLCJuZXdOYXZiYXJBZnRlckFkZGluZyIsIm5ld0JvZHkiLCJuZXdCb2R5VGMiLCJuZXdCb2R5RnMiLCJuZXdCb2R5Q29udGVudFBhZGRpbmciLCJuZXdCb2R5Rm9udCIsImZvbnRGYW1pbHkiLCJuZXdGb290ZXJCZyIsIm5ld0Zvb3RlckhlaWdodCIsIm5ld0Zvb3RlclRjIiwibmV3Rm9vdGVyRnMiLCJDcmVhdGVQYWdlQ29udGFpbmVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXdCO0FBQ3BELE1BQUlELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkJGLFNBQTNCLENBQUosRUFBMkM7QUFDdkMsV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlELE9BQU8sQ0FBQ0ksYUFBWixFQUEyQjtBQUM5QixXQUFPTCx1QkFBdUIsQ0FBQ0MsT0FBTyxDQUFDSSxhQUFULEVBQXdCSCxTQUF4QixDQUE5QjtBQUNIOztBQUNELFNBQU8sS0FBUDtBQUNILENBUEQ7O0FBU2VGLHNGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LE1BQU0sQ0FBQzJELFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLE1BQS9CLENBRkosRSIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZsb2F0aW5nV2luZG93ID0gKHtpbml0QWN0aXZlID0gZmFsc2UsIGluaXRDb250ZW50cyA9IFtdLCBuZWVkc1dpZGUgPSBmYWxzZX0pID0+IHtcbiAgICBjb25zdCB3aW5kb3dDbGFzc05hbWUgPSBcImZsb2F0aW5nLXdpbmRvd1wiO1xuICAgIGNvbnN0IG92ZXJUb3BDbGFzc05hbWUgPSBcIm92ZXItdG9wXCI7XG4gICAgY29uc3Qgd2lkZUNsYXNzTmFtZSA9ICcgd2luZG93LXdpZGUnO1xuXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdChcbiAgICAgICAgKCkgPT4gc2V0QWN0aXZlKGluaXRBY3RpdmUpLFxuICAgICAgICBbXVxuICAgICk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYWN0aXZlID8gd2luZG93Q2xhc3NOYW1lIDogYCR7d2luZG93Q2xhc3NOYW1lfSAke292ZXJUb3BDbGFzc05hbWV9YDtcbiAgICBpZiAobmVlZHNXaWRlKSBjbGFzc05hbWUgKz0gd2lkZUNsYXNzTmFtZTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCd9fT5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGl0LWJ1dHRvbiBidXR0b24tcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldEFjdGl2ZShmYWxzZSl9fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbml0Q29udGVudHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdXaW5kb3c7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCB7IENyZWF0aW9uRGVzayB9IGZyb20gXCIuL0NyZWF0aW9uRGVza1wiO1xuaW1wb3J0IHsgQ3JlYXRlTWVudSB9IGZyb20gXCIuL21lbnUvQ3JlYXRlTWVudVwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgTkFWQkFSX0hFSUdIVDogJ3NldE5hdmJhckhlaWdodCcsXG4gICAgTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1I6ICdzZXROYXZiYXJCYWNrZ3JvdW5kQ29sb3InLFxuICAgIE5BVkJBUl9URVhUX0NPTE9SOiAnc2V0TmF2YmFyVGV4dENvbG9yJyxcbiAgICBOQVZCQVJfVEVYVF9TSVpFOiAnc2V0TmF2YmFyVGV4dFNpemUnLFxuICAgIE5BVkJBUl9TUEFDSU5HX09QVElPTjogJ3NldE5hdmJhclNwYWNpbmdPcHRpb24nLFxuICAgIE5BVkJBUl9JVEVNX1RFWFRfVVBEQVRFRDogJ3NldE5hdmJhckl0ZW1UZXh0JyxcbiAgICBOQVZCQVJfSVRFTV9VUkxfVVBEQVRFRDogJ3NldE5hdmJhckl0ZW1VcmwnLFxuICAgIE5BVkJBUl9JVEVNX0lURU1fREVMRVRFRDogJ2RlbGV0ZU5hdmJhckl0ZW0nLFxuICAgIE5BVkJBUl9JVEVNX0FEREVEOiAnYWRkZWROYXZiYXJJdGVtJyxcblxuICAgIEJPRFlfQkFDS0dST1VORF9DT0xPUjogJ3NldEJvZHlCYWNrcm91bmRDb2xvcicsXG4gICAgQk9EWV9URVhUX0NPTE9SOiAnc2V0Qm9keVRleHRDb2xvcicsXG4gICAgQk9EWV9GT05UX1NJWkU6ICdzZXRCb2R5Rm9udFNpemUnLFxuICAgIEJPRFlfRk9OVDogJ3NldEJvZHlGb250JyxcbiAgICBCT0RZX1BBRERJTkc6ICdzZXRCb2R5UGFkZGluZycsXG5cbiAgICBGT09URVJfQkFDS0dST1VORF9DT0xPUjogJ3NldEZvb3RlckJhY2tncm91bmRDb2xvcicsXG4gICAgRk9PVEVSX1RFWFRfQ09MT1I6ICdzZXRGb290ZXJUZXh0Q29sb3InLFxuICAgIEZPT1RFUl9GT05UX1NJWkU6ICdzZXRGb290ZXJGb250U2l6ZScsXG4gICAgRk9PVEVSX0hFSUdIVDogJ3NldEZvb3RlckhlaWdodCdcbn07XG5cbmV4cG9ydCBjb25zdCBJTklUX1NUWUxFID0ge1xuICAgIG5hdmJhcjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYWFhYWFhJyxcbiAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgaGVpZ2h0OiA1XG4gICAgfVxufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICByZXR1cm4gbGF5b3V0RGF0YS5wYWdlU3RydWN0dXJlO1xufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVBhZ2UgPSBwYXlsb2FkID0+IHtcbiAgICBwYXlsb2FkLm5hdmJhci5oZWlnaHQgPSBwYXlsb2FkLm5hdmJhci5oZWlnaHQgfHwgSU5JVF9TVFlMRS5uYXZiYXIuaGVpZ2h0OyAvL0B0b2RvIHJlZmFjdG9yIVxuICAgIGF4aW9zLnBvc3QoYC9kYXRhL3VwZGF0ZV9wYWdlLyR7bGF5b3V0RGF0YS5wYWdlSGFzaH1gLCB7cGF5bG9hZH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IENyZWF0ZVBhZ2VXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7fSwgaW5pdCk7XG5cbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuXG4gICAgICAgICAgICA8Q3JlYXRlTWVudSBzdG9yZT17c3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICAgICAgPENyZWF0aW9uRGVzayBzdG9yZT17c3RhdGV9Lz5cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJTklUX1NUWUxFIH0gZnJvbSBcIi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuY29uc3QgYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMgPSB7XG4gICAgZmxleFN0YXJ0OiAxLFxuICAgIGZsZXhFbmQ6IDIsXG4gICAgc3BhY2VBcm91bmQ6IDNcbn07XG5cbmNvbnN0IG5hdkl0ZW1zTmVlZE1hcmdpbiA9IHNwYWNpbmdPcHRpb24gPT4ge1xuICAgIHJldHVybiBzcGFjaW5nT3B0aW9uICE9PSBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucy5zcGFjZUFyb3VuZDtcbn1cblxuY29uc3QgZ2V0U3BhY2luZ1N0eWxlID0gc3BhY2luZ09wdGlvbiA9PiB7XG4gICAgc3dpdGNoIChzcGFjaW5nT3B0aW9uKSB7XG4gICAgICAgIGNhc2UgYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuZmxleEVuZDpcbiAgICAgICAgICAgIHJldHVybiB7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ307XG4gICAgICAgIGNhc2UgYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuc3BhY2VBcm91bmQ6XG4gICAgICAgICAgICByZXR1cm4ge2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnfTtcbiAgICAgICAgY2FzZSBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucy5mbGV4U3RhcnQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0J307XG4gICAgfVxufTtcblxuY29uc3QgZ2V0TmF2SXRlbXNTdHlsZSA9IHNwYWNpbmdPcHRpb24gPT4ge1xuICAgIGNvbnN0IHN0eWxlID0ge3RleHREZWNvcmF0aW9uOidub25lJyxjb2xvcjonaW5oZXJpdCd9O1xuICAgIGlmIChuYXZJdGVtc05lZWRNYXJnaW4oc3BhY2luZ09wdGlvbikpIHtcbiAgICAgICAgc3R5bGUubWFyZ2luID0gJzAgMnJlbSc7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbn1cblxuZXhwb3J0IGNvbnN0IENyZWF0aW9uRGVzayA9ICh7c3RvcmUgPSB7fX0pID0+IHtcblxuICAgIHN0b3JlLm5hdmJhciA9IHN0b3JlLm5hdmJhciB8fCBJTklUX1NUWUxFLm5hdmJhcjtcbiAgICBsZXQgYm9keVN0eWxlID0gc3RvcmUuYm9keSB8fCB7fTtcbiAgICBsZXQgbmF2SXRlbXMgPSBzdG9yZS5uYXZiYXIuaXRlbXMgfHwgW107XG4gICAgbGV0IGNvbnRlbnRTdHlsZSA9IHN0b3JlLmJvZHkuY29udGVudCB8fCB7fTtcbiAgICBjb250ZW50U3R5bGUgPSB7Li4uY29udGVudFN0eWxlLCBwYWRkaW5nOmAzMHB4ICR7Y29udGVudFN0eWxlLnBhZGRpbmd9cHhgfTtcbiAgICBjb25zdCBzcGFjaW5nID0gZ2V0U3BhY2luZ1N0eWxlKHN0b3JlLm5hdmJhci5zcGFjaW5nT3B0aW9uKTtcbiAgICBjb25zdCBuYXZTdHlsZSA9IHsuLi5zdG9yZS5uYXZiYXIsIGhlaWdodDogYCR7c3RvcmUubmF2YmFyLmhlaWdodCB8fCA1fXJlbWAsIC4uLnNwYWNpbmd9O1xuICAgIGxldCBmb290ZXJTdHlsZSA9IHsuLi5zdG9yZS5mb290ZXIsIGhlaWdodDogYCR7c3RvcmUuZm9vdGVyLmhlaWdodCB8fCAwfXJlbWB9O1xuICAgIC8vIG5hdlN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgLy8gbmF2U3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcbiAgICBjb25zdCBuYXZJdGVtc1N0eWxlID0gZ2V0TmF2SXRlbXNTdHlsZShzdG9yZS5uYXZiYXIuc3BhY2luZ09wdGlvbik7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY3JlYXRpb24tZGVza1wiIHN0eWxlPXtib2R5U3R5bGV9PlxuICAgICAgICAgICAgPG5hdiBzdHlsZT17bmF2U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7bmF2SXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e25hdkl0ZW1zU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT47XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250ZW50U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgSGVhZGluZ1xuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBldSBlcmF0IGxvYm9ydGlzLCB2YXJpdXMgYW50ZSBhdCwgYWNjdW1zYW4gdGVsbHVzLiBDdXJhYml0dXIgdmFyaXVzLCBuZXF1ZSBpZCBkaWN0dW0gdWxsYW1jb3JwZXIsIG5pc2kgbGliZXJvIGVnZXN0YXMgZXN0LCB2ZWwgdmVuZW5hdGlzIGV4IGlwc3VtIGF0IGVzdC4gVXQgaW4gbGFjdXMgYW50ZS4gQ3VyYWJpdHVyIGZhdWNpYnVzIHJpc3VzIG1hdXJpcywgYSB0aW5jaWR1bnQgbWV0dXMgbW9sbGlzIGV1LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgUGVsbGVudGVzcXVlIGEgZXN0IGZhY2lsaXNpcywgZWdlc3RhcyB1cm5hIGV0LCBwaGFyZXRyYSBhcmN1LiBOYW0gaW1wZXJkaWV0IGRpY3R1bSBudWxsYSBpbiB2b2x1dHBhdC4gQ3JhcyB0ZW1wdXMgdXQgb3JjaSBpbiBjb25kaW1lbnR1bS4gRnVzY2UgbHVjdHVzLCBkdWkgZWdldCBibGFuZGl0IG1hdHRpcywgbGFjdXMgcHVydXMgY29uc2VjdGV0dXIgbG9yZW0sIG5lYyBtb2xlc3RpZSBuZXF1ZSBlc3QgbHVjdHVzIGZlbGlzLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gVml2YW11cyBtYWduYSBudW5jLCBhY2N1bXNhbiBpbiBtYWxlc3VhZGEgaWQsIGdyYXZpZGEgZmV1Z2lhdCB0ZWxsdXMuIFBoYXNlbGx1cyBhIGVzdCB2aXRhZSByaXN1cyBpbnRlcmR1bSBncmF2aWRhLiBVdCBzZW1wZXIgdGVsbHVzIGV0IGZlbGlzIG1heGltdXMsIHNpdCBhbWV0IHRpbmNpZHVudCBtZXR1cyBsYWNpbmlhLlxuXG4gICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIHZlbCBsaWd1bGEgb3JuYXJlLCBkaWduaXNzaW0gcmlzdXMgYWNjdW1zYW4sIHBvc3VlcmUgYXVndWUuIEludGVnZXIgb3JjaSBsaWJlcm8sIHBsYWNlcmF0IGVnZXQgYXVjdG9yIGFjLCBhbGlxdWV0IGV1IHR1cnBpcy4gRG9uZWMgc2l0IGFtZXQgaW50ZXJkdW0ganVzdG8uIEludGVnZXIgdm9sdXRwYXQgZXQgbWF1cmlzIGV0IGVmZmljaXR1ci4gSW50ZWdlciBlZmZpY2l0dXIgc2FwaWVuIGV1IG1hbGVzdWFkYSBjb25zZWN0ZXR1ci4gUGhhc2VsbHVzIHRpbmNpZHVudCwgdXJuYSBpZCBlZmZpY2l0dXIgZmFjaWxpc2lzLCBkaWFtIGZlbGlzIGZhY2lsaXNpcyBlbmltLCBhYyBjb25zZXF1YXQgZG9sb3IgcHVydXMgdXQgdXJuYS4gTmFtIGF0IG1heGltdXMgbWF1cmlzLiBQcmFlc2VudCB0b3J0b3Igb2RpbywgbWFsZXN1YWRhIHZlbCBkaWFtIHV0LCBzb2xsaWNpdHVkaW4gcGxhY2VyYXQgbGlndWxhLiBFdGlhbSBldCBzb2RhbGVzIG5pc2kuIERvbmVjIGV1IHJpc3VzIGFsaXF1YW0sIHBvc3VlcmUganVzdG8gbmVjLCBoZW5kcmVyaXQgbnVuYy4gU3VzcGVuZGlzc2UgaGVuZHJlcml0IGNvbW1vZG8gbGVvIG5vbiBwcmV0aXVtLiBTZWQgZGlnbmlzc2ltIGltcGVyZGlldCBsZW8gc2VkIHBvcnRhLiBOdWxsYSBibGFuZGl0IGFyY3UgaWQgbnVuYyBlbGVpZmVuZCBpbXBlcmRpZXQgZXUgc2VkIG5pc2kuIFNlZCBsaWd1bGEgbWFzc2EsIGNvbnZhbGxpcyB0aW5jaWR1bnQgbnVuYyBxdWlzLCBzZW1wZXIgY29uc2VjdGV0dXIgbGFjdXMuIE1hZWNlbmFzIHZlbCBudWxsYSB2ZWxpdC5cblxuICAgICAgICAgICAgICAgIEFsaXF1YW0gc2VkIHF1YW0gbGliZXJvLiBQcm9pbiBhdCBhbGlxdWV0IG5pc2wsIGV1IGVmZmljaXR1ciBsaWd1bGEuIEN1cmFiaXR1ciBhIHRpbmNpZHVudCB2ZWxpdC4gUHJhZXNlbnQgYWNjdW1zYW4sIG9yY2kgaW4gbW9sbGlzIHNlbXBlciwgZGlhbSB0ZWxsdXMgZXVpc21vZCBxdWFtLCB2ZXN0aWJ1bHVtIGdyYXZpZGEgb3JjaSBmZWxpcyBzaXQgYW1ldCBleC4gTWF1cmlzIG1vbGVzdGllIGV4IGlkIHNhcGllbiBlbGVtZW50dW0gdWxsYW1jb3JwZXIuIEN1cmFiaXR1ciBuZXF1ZSByaXN1cywgZnJpbmdpbGxhIHZlbCBwb3N1ZXJlIGV0LCBiaWJlbmR1bSB1dCBkb2xvci4gUHJhZXNlbnQgZXggbWksIG1vbGxpcyBpbiB0aW5jaWR1bnQgc2l0IGFtZXQsIHNvZGFsZXMgbmVjIGR1aS4gVXQgZGljdHVtIGltcGVyZGlldCBqdXN0byBpZCBzdXNjaXBpdC4gQ3JhcyBjdXJzdXMsIHF1YW0gdml0YWUgdWx0cmljaWVzIGZpbmlidXMsIG1hc3NhIGp1c3RvIHByZXRpdW0gc2VtLCBpbiB2ZWhpY3VsYSBtYWduYSBhbnRlIHZlbCBlbmltLiBEb25lYyBmaW5pYnVzIGVyb3MgYSBsYW9yZWV0IGNvbnNlY3RldHVyLiBBZW5lYW4gYXVndWUgb3JjaSwgZ3JhdmlkYSBpZCBtYXR0aXMgcXVpcywgZmV1Z2lhdCBwZWxsZW50ZXNxdWUgbWkuXG5cbiAgICAgICAgICAgICAgICBWZXN0aWJ1bHVtIGJpYmVuZHVtIHBlbGxlbnRlc3F1ZSBtaSBjdXJzdXMgc29kYWxlcy4gTnVsbGEgdXQgbGFjaW5pYSB0ZWxsdXMsIHZpdGFlIHVsbGFtY29ycGVyIG5pYmguIE1hdXJpcyB2aXRhZSBwaGFyZXRyYSBsZW8uIE1vcmJpIGluIGRpYW0gZXUgYXVndWUgdGVtcHVzIHBoYXJldHJhLiBNYXVyaXMgaWFjdWxpcyBudWxsYSBub24gcmlzdXMgcGxhY2VyYXQgYWxpcXVhbSBhIHZpdGFlIG1hdXJpcy4gTW9yYmkgbmVjIG51bmMgdml0YWUgcXVhbSBhdWN0b3IgdGVtcHVzLiBNYWVjZW5hcyBsYWNpbmlhIHNvbGxpY2l0dWRpbiBsZW8uXG5cbiAgICAgICAgICAgICAgICBTZWQgb2RpbyBmZWxpcywgZmV1Z2lhdCB2aXRhZSB1bGxhbWNvcnBlciB1bGxhbWNvcnBlciwgbWF0dGlzIGxhb3JlZXQgbWFnbmEuIE1vcmJpIGNvbnZhbGxpcyBhbGlxdWFtIGZhY2lsaXNpcy4gUGVsbGVudGVzcXVlIGFjIHZlbGl0IG5pc2wuIFBlbGxlbnRlc3F1ZSBvcm5hcmUgdXQgbGFjdXMgbmVjIG1hbGVzdWFkYS4gQ3VyYWJpdHVyIGZpbmlidXMsIGZlbGlzIHF1aXMgZGFwaWJ1cyBtYXhpbXVzLCBkaWFtIG5pc2wgZmluaWJ1cyB2ZWxpdCwgdmVsIG9ybmFyZSBxdWFtIG1hc3NhIHV0IGxlY3R1cy4gUHJvaW4gbWV0dXMgYXVndWUsIHNjZWxlcmlzcXVlIHZlbCBleCBuZWMsIHBvcnR0aXRvciBjb21tb2RvIGVsaXQuIFBlbGxlbnRlc3F1ZSBhIG9yY2kgdHVycGlzLiBQZWxsZW50ZXNxdWUgaW1wZXJkaWV0IGx1Y3R1cyBuaXNsLCBpbiBzY2VsZXJpc3F1ZSBleCBjb25zZXF1YXQgaWQuXG5cbiAgICAgICAgICAgICAgICBEb25lYyBzb2xsaWNpdHVkaW4sIGVyYXQgbm9uIHNjZWxlcmlzcXVlIG1vbGVzdGllLCBtYXVyaXMgZXJvcyBmYXVjaWJ1cyBsb3JlbSwgc2VkIGJpYmVuZHVtIG1hdXJpcyBuaXNpIHNlZCBzZW0uIE1hdXJpcyBhdCBkaWduaXNzaW0gaXBzdW0uIFV0IHRyaXN0aXF1ZSwgYXJjdSBub24gdm9sdXRwYXQgZWxlaWZlbmQsIHJpc3VzIGVzdCBwb3J0dGl0b3IgbnVuYywgcXVpcyBsYWNpbmlhIGR1aSBkaWFtIGV0IGxlY3R1cy4gRG9uZWMgZGlnbmlzc2ltIGVsZWlmZW5kIGFsaXF1YW0uIE51bmMgdGVtcG9yIGxhb3JlZXQgZW5pbSwgdXQgaWFjdWxpcyBuaWJoIHRlbXBvciBzaXQgYW1ldC4gTnVuYyBsYW9yZWV0IGxvcmVtIHZlbGl0LCBldSBsb2JvcnRpcyB0dXJwaXMgdWx0cmljaWVzIGVnZXQuIFNlZCBhY2N1bXNhbiBmYWNpbGlzaXMgdmVsaXQsIHZ1bHB1dGF0ZSB2YXJpdXMgZXggZGFwaWJ1cyBub24uIE5hbSBhbGlxdWV0IHVsdHJpY2VzIGVmZmljaXR1ci4gVXQgbmVjIHNhcGllbiBwb3N1ZXJlLCBhY2N1bXNhbiBsaWd1bGEgbm9uLCBsdWN0dXMgYXVndWUuIFZlc3RpYnVsdW0gdGluY2lkdW50IGlhY3VsaXMgbnVuYyBzaXQgYW1ldCB0cmlzdGlxdWUuIE51bGxhbSBpZCBhcmN1IHZpdGFlIGFyY3UgZmluaWJ1cyBzb2RhbGVzLiBFdGlhbSBzZWQgYWxpcXVldCBlbGl0LCBlZ2V0IGZyaW5naWxsYSBsZWN0dXMuXG5cbiAgICAgICAgICAgICAgICBTZWQgaWFjdWxpcyBqdXN0byBldSBqdXN0byBlZ2VzdGFzLCBuZWMgcG9zdWVyZSBlcm9zIGN1cnN1cy4gTW9yYmkgbWF1cmlzIG5pYmgsIGFjY3Vtc2FuIHNpdCBhbWV0IGVzdCBzaXQgYW1ldCwgZnJpbmdpbGxhIG1vbGVzdGllIG5lcXVlLiBOdW5jIGV0IHR1cnBpcyBxdWlzIGRpYW0gcGhhcmV0cmEgcnV0cnVtLiBBZW5lYW4gaWQgbmVxdWUgZGlhbS4gRG9uZWMgbmliaCBhdWd1ZSwgdmVuZW5hdGlzIGluIGxvYm9ydGlzIHZlbCwgdWx0cmljaWVzIGZpbmlidXMgYW50ZS4gRG9uZWMgaWQgY3Vyc3VzIGxlby4gU2VkIGRpZ25pc3NpbSBpcHN1bSBhdCBtb2xsaXMgcmhvbmN1cy5cblxuICAgICAgICAgICAgICAgIFN1c3BlbmRpc3NlIHBvcnR0aXRvciBzY2VsZXJpc3F1ZSBsaWJlcm8sIGluIGFsaXF1YW0gc2VtIGVsZWlmZW5kIHNlZC4gTWF1cmlzIHZpdGFlIHBoYXJldHJhIGxlby4gUHJhZXNlbnQgZnJpbmdpbGxhIG1ldHVzIGVnZXQgYW50ZSBtYXR0aXMsIGVnZXQgaW1wZXJkaWV0IGVsaXQgZGlnbmlzc2ltLiBEb25lYyBldSB2b2x1dHBhdCBuaXNpLiBOYW0gZWdlc3RhcyBpcHN1bSBwdXJ1cywgbm9uIGFsaXF1ZXQgb3JjaSBwZWxsZW50ZXNxdWUgbm9uLiBTZWQgdXQgdmVoaWN1bGEgdXJuYSwgbm9uIGZlcm1lbnR1bSByaXN1cy4gTmFtIG5vbiBmZXVnaWF0IGxpZ3VsYSwgdmVsIGNvbnNlcXVhdCBmZWxpcy4gU3VzcGVuZGlzc2UgaW4gdmVzdGlidWx1bSBhbnRlLiBTZWQgb3JuYXJlIGF1Y3RvciBsZW8sIHNpdCBhbWV0IG1vbGVzdGllIGlwc3VtIGN1cnN1cyBxdWlzLiBDcmFzIHNlZCBzb2xsaWNpdHVkaW4gcHVydXMuIE51bGxhIGVnZXQgdWx0cmljaWVzIG9yY2ksIHF1aXMgZ3JhdmlkYSBuaXNsLiBWZXN0aWJ1bHVtIHZ1bHB1dGF0ZSBsYWNpbmlhIGNvbW1vZG8uIFV0IHBsYWNlcmF0IGFudGUgYXQgc3VzY2lwaXQgZmluaWJ1cy5cblxuICAgICAgICAgICAgICAgIE51bmMgZ3JhdmlkYSBudWxsYSBxdWlzIHRlbGx1cyBjb252YWxsaXMsIG5lYyBlbGVpZmVuZCBzZW0gcHJldGl1bS4gQWxpcXVhbSBlbGVpZmVuZCBmYWNpbGlzaXMgcG9ydHRpdG9yLiBJbiBhbnRlIGVuaW0sIGN1cnN1cyB2aXRhZSBzb2RhbGVzIGFjLCBzZW1wZXIgaWQgZHVpLiBTdXNwZW5kaXNzZSBldCBuaXNsIHV0IGR1aSB1bGxhbWNvcnBlciBiaWJlbmR1bSBldCB1dCBlcm9zLiBOdWxsYW0gaXBzdW0gbWV0dXMsIGNvbnNlY3RldHVyIHZpdGFlIGJpYmVuZHVtIGEsIGFsaXF1YW0gc2VkIG5lcXVlLiBTdXNwZW5kaXNzZSBzZW1wZXIgbmliaCByaXN1cywgcXVpcyBwb3J0dGl0b3IgdG9ydG9yIGxvYm9ydGlzIHNpdCBhbWV0LiBEb25lYyBpbnRlcmR1bSBtaSBldCBsYWNpbmlhIGVsZW1lbnR1bS5cblxuICAgICAgICAgICAgICAgIFF1aXNxdWUgdHJpc3RpcXVlLCBsZWN0dXMgbmVjIGNvbmRpbWVudHVtIHNhZ2l0dGlzLCBudW5jIG9kaW8gZWdlc3RhcyBwdXJ1cywgcXVpcyBlZmZpY2l0dXIgbGVvIGRpYW0gZWdldCBzZW0uIERvbmVjIGluIHVybmEgbmVjIHNhcGllbiB0aW5jaWR1bnQgcnV0cnVtLiBOdW5jIHZlaGljdWxhIGxlY3R1cyBuZWMgbWFnbmEgY29uc2VjdGV0dXIsIGEgcHVsdmluYXIgbmlzbCBmcmluZ2lsbGEuIFF1aXNxdWUgc2VkIG1hdHRpcyBsZWN0dXMuIFNlZCBhdCBwZWxsZW50ZXNxdWUgbWV0dXMuIE51bGxhbSBzb2xsaWNpdHVkaW4gZmFjaWxpc2lzIGVnZXN0YXMuIE1hZWNlbmFzIGhlbmRyZXJpdCBldSB0ZWxsdXMgbWF0dGlzIHVsdHJpY2llcy4gUGhhc2VsbHVzIGRhcGlidXMgZXUgbmlzaSBxdWlzIGxvYm9ydGlzLiBFdGlhbSBpbXBlcmRpZXQgdGluY2lkdW50IG1pLCBzZWQgdml2ZXJyYSBzYXBpZW4gaW50ZXJkdW0gc2VkLiBQaGFzZWxsdXMgZXUgaWFjdWxpcyBxdWFtLCB2ZWwgdmFyaXVzIGRpYW0uIFZpdmFtdXMgYXQgZXJvcyB1bGxhbWNvcnBlciwgdmVoaWN1bGEgbnVsbGEgZXQsIHZlc3RpYnVsdW0gbWFzc2EuIERvbmVjIG1pIGxhY3VzLCBldWlzbW9kIGlkIGxlbyBhLCBkYXBpYnVzIGNvbmRpbWVudHVtIGxpYmVyby4gVXQgdml0YWUgbmVxdWUgc2l0IGFtZXQgbWFzc2EgZnJpbmdpbGxhIHNhZ2l0dGlzLiBGdXNjZSBwb3J0dGl0b3IgdHJpc3RpcXVlIHR1cnBpcywgZGljdHVtIHZlc3RpYnVsdW0ganVzdG8uXG5cbiAgICAgICAgICAgICAgICBOYW0gYWMgYXVjdG9yIHB1cnVzLiBBZW5lYW4gcmhvbmN1cyByaXN1cyBpbiB0dXJwaXMgY29uc2VxdWF0LCBxdWlzIGVnZXN0YXMgZXJvcyBtb2xlc3RpZS4gTnVsbGEgYWxpcXVldCwgb3JjaSBldSB1bHRyaWNlcyBtb2xlc3RpZSwgbG9yZW0gbmlzaSBwdWx2aW5hciBuaXNpLCBpZCBiaWJlbmR1bSBxdWFtIGp1c3RvIHF1aXMgbnVsbGEuIFByYWVzZW50IG5lYyBlc3QgZXQgdGVsbHVzIHJ1dHJ1bSB0cmlzdGlxdWUuIFN1c3BlbmRpc3NlIGluIGFyY3UgZHVpLiBNYWVjZW5hcyBmYWNpbGlzaXMgbWF1cmlzIGluIGVuaW0gdHJpc3RpcXVlIGJpYmVuZHVtLiBOdW5jIHVsbGFtY29ycGVyIHZlaGljdWxhIG1pLCBzZWQgcnV0cnVtIG1hZ25hIHNvZGFsZXMgdml0YWUuIERvbmVjIGxpZ3VsYSB0dXJwaXMsIGxvYm9ydGlzIHNlZCBwb3J0dGl0b3IgcXVpcywgZmF1Y2lidXMgYWMgdHVycGlzLiBOdWxsYW0gY3Vyc3VzIHZvbHV0cGF0IGNvbmd1ZS4gU2VkIHRlbXB1cyBhcmN1IGV0IGJpYmVuZHVtIHNlbXBlci4gRG9uZWMgYXQgdGluY2lkdW50IGVyYXQsIHZpdGFlIHNhZ2l0dGlzIHVybmEuXG5cbiAgICAgICAgICAgICAgICBBbGlxdWFtIGJsYW5kaXQgaW1wZXJkaWV0IGp1c3RvIGVnZXQgdWx0cmljZXMuIERvbmVjIHZpdGFlIG51bGxhIHF1aXMgZmVsaXMgbGFvcmVldCBmZXJtZW50dW0gcXVpcyB2ZWwgbGVvLiBQaGFzZWxsdXMgdnVscHV0YXRlLCBudWxsYSB2ZWwgdmVzdGlidWx1bSBzb2xsaWNpdHVkaW4sIGp1c3RvIG5lcXVlIGFsaXF1YW0gZXgsIGFjIG1heGltdXMgYXJjdSB2ZWxpdCBzZWQgbmlzaS4gUGVsbGVudGVzcXVlIGxvcmVtIG1hZ25hLCBjdXJzdXMgc2VkIG1hZ25hIGluLCBzb2RhbGVzIHZvbHV0cGF0IGRpYW0uIEludGVnZXIgcG9zdWVyZSBhbnRlIGFudGUsIGluIHBvcnR0aXRvciB0b3J0b3IgbWF4aW11cyBzZWQuIE51bmMgYWMgbnVsbGEgZmVybWVudHVtLCBtYXhpbXVzIHVybmEgcXVpcywgY29udmFsbGlzIGVyYXQuIEludGVnZXIgZXVpc21vZCBydXRydW0gbmlzaSwgbmVjIG1vbGVzdGllIG5pYmggZXVpc21vZCBpbi4gTnVsbGFtIGlkIG1hc3NhIGluIG1hc3NhIGxhb3JlZXQgY29tbW9kbyBpbiB2aXRhZSBudW5jLiBOdW5jIGFjY3Vtc2FuIG9kaW8gYSBudW5jIGlhY3VsaXMgcGhhcmV0cmEuIFBoYXNlbGx1cyBtb2xsaXMgZmluaWJ1cyBsZWN0dXMgc2VkIG1vbGxpcy4gRG9uZWMgZXQgYXVndWUgcXVpcyBtaSBlbGVpZmVuZCBlZ2VzdGFzLiBTZWQgcXVpcyBhY2N1bXNhbiB0dXJwaXMuXG5cbiAgICAgICAgICAgICAgICBEdWlzIHRlbGx1cyBxdWFtLCBjb252YWxsaXMgdGluY2lkdW50IG5pYmggbmVjLCBlZmZpY2l0dXIgc29sbGljaXR1ZGluIG5pc2wuIFN1c3BlbmRpc3NlIGJsYW5kaXQgZWdldCBlcmF0IHV0IGRpZ25pc3NpbS4gRnVzY2Ugc2VkIGVuaW0gYWMgbG9yZW0gaWFjdWxpcyBwZWxsZW50ZXNxdWUgZWdldCB2aXRhZSBvZGlvLiBBbGlxdWFtIGRpZ25pc3NpbSBlbmltIHR1cnBpcywgc2VkIGZhY2lsaXNpcyBlcmF0IHZvbHV0cGF0IHRlbXBvci4gVmVzdGlidWx1bSBsdWN0dXMgbGFjdXMgc29kYWxlcywgdWx0cmljZXMgbnVsbGEgaWQsIHNvbGxpY2l0dWRpbiB0dXJwaXMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBBZW5lYW4gc2l0IGFtZXQgbGlndWxhIGFudGUuIE1hZWNlbmFzIHByZXRpdW0gaWQgcHVydXMgZWxlbWVudHVtIGRhcGlidXMuIFNlZCBlbmltIGxhY3VzLCBtb2xlc3RpZSBpZCB0b3J0b3IgZXUsIGdyYXZpZGEgZ3JhdmlkYSBzYXBpZW4uIFV0IGF1Y3RvciBzb2xsaWNpdHVkaW4gdXJuYSBldCBkaWN0dW0uXG5cbiAgICAgICAgICAgICAgICBOdWxsYSBtYXhpbXVzIG1pIHNlZCBwb3J0dGl0b3IgbWF4aW11cy4gU2VkIHZvbHV0cGF0IGRvbG9yIG5lYyBsZWN0dXMgb3JuYXJlIHZhcml1cy4gVml2YW11cyBhbGlxdWV0IHB1cnVzIG5pYmgsIGV1IGNvbmRpbWVudHVtIG1hZ25hIHRpbmNpZHVudCBpZC4gU2VkIGhlbmRyZXJpdCByaXN1cyBhIG9ybmFyZSBiaWJlbmR1bS4gUHJvaW4gbmVjIHR1cnBpcyBhdWN0b3IsIHJ1dHJ1bSBhdWd1ZSBzaXQgYW1ldCwgZmV1Z2lhdCBkdWkuIEludGVnZXIgaW4gZmluaWJ1cyBtYWduYS4gVml2YW11cyBldSBsb2JvcnRpcyBtZXR1cywgbm9uIHNjZWxlcmlzcXVlIG5lcXVlLiBBZW5lYW4gY29udmFsbGlzIGVyYXQgbGlndWxhLCB2ZWwgYmliZW5kdW0gbnVuYyByaG9uY3VzIGF0LiBBZW5lYW4gZmVsaXMgbWFnbmEsIHJob25jdXMgbm9uIHNvbGxpY2l0dWRpbiBldCwgcHVsdmluYXIgZXQgcHVydXMuIE51bmMgc2VkIGF1Z3VlIHZ1bHB1dGF0ZSwgdHJpc3RpcXVlIG9yY2kgYXQsIGxhb3JlZXQgbWV0dXMuIFV0IHVsbGFtY29ycGVyIGZpbmlidXMgb2Rpbywgc2VkIGZyaW5naWxsYSB1cm5hIGludGVyZHVtIHNlZC4gTW9yYmkgaWQgdml2ZXJyYSBhbnRlLCBxdWlzIHNlbXBlciBtZXR1cy4gUGhhc2VsbHVzIGR1aSBkaWFtLCB0cmlzdGlxdWUgaW4gdnVscHV0YXRlIGlkLCBzb2RhbGVzIHZlbCBuZXF1ZS4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBEdWlzIHZhcml1cyBlbmltIG5lYyBsaWd1bGEgc29kYWxlcyBtYWxlc3VhZGEuIE1hdXJpcyBtZXR1cyBudWxsYSwgZWxlaWZlbmQgbmVjIG5pc2kgaW4sIG1heGltdXMgdGVtcG9yIGRvbG9yLlxuXG4gICAgICAgICAgICAgICAgQ3VyYWJpdHVyIHByZXRpdW0gYWMgZXJvcyBub24gZmFjaWxpc2lzLiBRdWlzcXVlIG1vbGxpcyB2b2x1dHBhdCByaG9uY3VzLiBDdXJhYml0dXIgZXUgaW1wZXJkaWV0IHNhcGllbi4gUHJhZXNlbnQgYWNjdW1zYW4sIG5pYmggdml0YWUgbWF0dGlzIHByZXRpdW0sIGlwc3VtIGV4IGNvbnNlY3RldHVyIG9yY2ksIGVmZmljaXR1ciBmaW5pYnVzIHF1YW0gZXggZXUgbGVvLiBOdWxsYSBzb2RhbGVzIGxvYm9ydGlzIGRpYW0gdmVsIGRpZ25pc3NpbS4gUHJvaW4gZGljdHVtLCBuaXNpIHNlZCBzYWdpdHRpcyBwaGFyZXRyYSwgZXggbGVvIGx1Y3R1cyBtYXVyaXMsIGlkIGNvbnNlcXVhdCBlbGl0IGxpZ3VsYSBhIHNlbS4gSW4gcGVsbGVudGVzcXVlIHVybmEgbGFjdXMsIGFjIGNvbnNlY3RldHVyIG51bmMgY29uZGltZW50dW0gYS4gQWVuZWFuIHJ1dHJ1bSBvcm5hcmUgbnVsbGEgaW4gY29uc2VjdGV0dXIuIE5hbSBvZGlvIHVybmEsIGZhdWNpYnVzIHZlbCBuaXNpIGEsIHByZXRpdW0gdGluY2lkdW50IHRvcnRvci4gQ3JhcyB0aW5jaWR1bnQgYmxhbmRpdCBzYXBpZW4gZXUgbGFjaW5pYS4gUGhhc2VsbHVzIGNvbnNlcXVhdCBsZWN0dXMgYXQgdmFyaXVzIHJ1dHJ1bS4gTWFlY2VuYXMgZXVpc21vZCBuaXNsIHNvZGFsZXMgc29sbGljaXR1ZGluIHNlbXBlci4gQ3VyYWJpdHVyIGdyYXZpZGEgdXJuYSBsaWJlcm8sIGV0IGxhb3JlZXQgdHVycGlzIGFjY3Vtc2FuIHV0LlxuXG4gICAgICAgICAgICAgICAgU3VzcGVuZGlzc2UgZmF1Y2lidXMgbWF1cmlzIHNpdCBhbWV0IGxpYmVybyBwcmV0aXVtIGxhY2luaWEuIFBlbGxlbnRlc3F1ZSBncmF2aWRhLCBtZXR1cyBlbGVtZW50dW0gaWFjdWxpcyBjb252YWxsaXMsIGVsaXQgdHVycGlzIHByZXRpdW0gZW5pbSwgbW9sZXN0aWUgdGVtcG9yIGFudGUgaXBzdW0gc2l0IGFtZXQgdGVsbHVzLiBEb25lYyBjb21tb2RvIG5pc2wgYXQgZGFwaWJ1cyB0aW5jaWR1bnQuIE5hbSBtb2xsaXMgbmliaCBxdWlzIHBvcnR0aXRvciBibGFuZGl0LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgUGhhc2VsbHVzIGV1IHRpbmNpZHVudCBudW5jLiBFdGlhbSBzaXQgYW1ldCBkb2xvciBjb25zZXF1YXQsIHJ1dHJ1bSBvZGlvIGEsIGlhY3VsaXMgdmVsaXQuIERvbmVjIGFsaXF1ZXQgbmlzaSBtYWduYSwgdml0YWUgcG9ydGEgbGlndWxhIGNvbmRpbWVudHVtIGV0LiBDdXJhYml0dXIgc29sbGljaXR1ZGluIGxvcmVtIHVybmEsIHF1aXMgdmVzdGlidWx1bSBqdXN0byBmZXJtZW50dW0gdml0YWUuIFZlc3RpYnVsdW0gYWxpcXVhbSB0aW5jaWR1bnQgc2FwaWVuLCBncmF2aWRhIGhlbmRyZXJpdCBleCBiaWJlbmR1bSBhYy4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gU3VzcGVuZGlzc2Ugc2l0IGFtZXQgbnVuYyBldCBsb3JlbSBjb25ndWUgdm9sdXRwYXQgdXQgcXVpcyBkdWkuXG5cbiAgICAgICAgICAgICAgICBOdWxsYW0gcGhhcmV0cmEgbWFsZXN1YWRhIG1ldHVzLCBzaXQgYW1ldCBtb2xlc3RpZSBkb2xvciBwdWx2aW5hciBxdWlzLiBGdXNjZSBpbiBlbGl0IGVsZW1lbnR1bSwgZmFjaWxpc2lzIG51bmMgYXQsIHNjZWxlcmlzcXVlIGVuaW0uIFV0IGZlcm1lbnR1bSBtb2xlc3RpZSBhY2N1bXNhbi4gU2VkIG51bmMgbWF1cmlzLCBldWlzbW9kIGlkIGVuaW0gZWdldCwgcHJldGl1bSBjb21tb2RvIHR1cnBpcy4gTWF1cmlzIHF1aXMgcGxhY2VyYXQgbmVxdWUuIE5hbSB2aXRhZSBtaSBpZCBkaWFtIGdyYXZpZGEgc2VtcGVyLiBOYW0gbW9sZXN0aWUgYXQgcHVydXMgc2l0IGFtZXQgdGluY2lkdW50LiBEb25lYyBzZWQgbmlzbCBhbGlxdWFtLCBzb2RhbGVzIHNlbSBhdCwgZmFjaWxpc2lzIG9yY2kuIEN1cmFiaXR1ciBpZCBzYXBpZW4gc2l0IGFtZXQgYW50ZSBkYXBpYnVzIG1heGltdXMuXG5cbiAgICAgICAgICAgICAgICBWaXZhbXVzIG9kaW8gdmVsaXQsIHZlbmVuYXRpcyB2aXRhZSBhbnRlIGV1LCBmZXVnaWF0IHVsdHJpY2VzIG1hdXJpcy4gUHJhZXNlbnQgdmVzdGlidWx1bSBmZXVnaWF0IHRvcnRvciBxdWlzIHVsbGFtY29ycGVyLiBRdWlzcXVlIGRhcGlidXMgbWkgaWQgbGliZXJvIGdyYXZpZGEgdWxsYW1jb3JwZXIuIE9yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIEludGVnZXIgbmVjIGZpbmlidXMgZHVpLiBTdXNwZW5kaXNzZSBmZXVnaWF0IHBsYWNlcmF0IHRlbGx1cywgZXQgY29uZGltZW50dW0gcXVhbSBmYWNpbGlzaXMgYWxpcXVhbS4gQ3VyYWJpdHVyIGVyYXQgbGVvLCBsYW9yZWV0IG5vbiBlcm9zIG5vbiwgdm9sdXRwYXQgaGVuZHJlcml0IGV4LiBQcm9pbiBldSBtYWduYSBzYWdpdHRpcywgYWxpcXVhbSBsaWd1bGEgcXVpcywgY29udmFsbGlzIGp1c3RvLiBQaGFzZWxsdXMgbnVsbGEgYW50ZSwgZGljdHVtIHNhZ2l0dGlzIGVyb3MgZXQsIHB1bHZpbmFyIHRlbXB1cyBtYXNzYS4gVXQgdG9ydG9yIG9kaW8sIHZlaGljdWxhIGEgZmVsaXMgdmVsLCB2aXZlcnJhIHBvc3VlcmUgZWxpdC4gTnVuYyBub24gcG9zdWVyZSBuaXNsLiBTZWQgZmFjaWxpc2lzIGxlY3R1cyBhdCBlc3QgbWFsZXN1YWRhLCBwb3J0YSBtYXR0aXMgYXVndWUgZmluaWJ1cy4gVXQgYWxpcXVldCBiaWJlbmR1bSBpYWN1bGlzLlxuXG4gICAgICAgICAgICAgICAgRHVpcyBzaXQgYW1ldCBjb25ndWUgbWFnbmEuIE1hZWNlbmFzIGNvbmd1ZSBkaWN0dW0gZXVpc21vZC4gQWVuZWFuIG5pYmggdmVsaXQsIGF1Y3RvciB2aXRhZSB0b3J0b3IgcXVpcywgY29uZ3VlIHBlbGxlbnRlc3F1ZSBuaXNpLiBJbnRlZ2VyIGxhb3JlZXQgbWFnbmEgcXVpcyBsaWd1bGEgcnV0cnVtIGVmZmljaXR1ci4gU2VkIGxpZ3VsYSBleCwgZWxlbWVudHVtIHNpdCBhbWV0IG5lcXVlIGF0LCBkaWN0dW0gZmV1Z2lhdCBwdXJ1cy4gU2VkIGJpYmVuZHVtLCBtYWduYSBhIHN1c2NpcGl0IHVsdHJpY2llcywgcXVhbSBmZWxpcyBkYXBpYnVzIGF1Z3VlLCBuZWMgZWZmaWNpdHVyIHRlbGx1cyBtYXVyaXMgdmVsIG5pc2wuIEludGVnZXIgc2VkIGFyY3UgZXJhdC4gQ3VyYWJpdHVyIGFyY3Ugb2RpbywgZ3JhdmlkYSBydXRydW0gZmFjaWxpc2lzIGluLCBldWlzbW9kIHF1aXMgaXBzdW0uIEluIGN1cnN1cyBkaWFtIGV1IGlhY3VsaXMgZmFjaWxpc2lzLiBQZWxsZW50ZXNxdWUgaWQgbnVuYyBuaXNpLiBEdWlzIGV1IG5pc2kgZGlnbmlzc2ltLCByaG9uY3VzIG1hZ25hIHZpdGFlLCBncmF2aWRhIG1pLiBNYWVjZW5hcyBzYWdpdHRpcyBzYWdpdHRpcyBkb2xvciBhIGx1Y3R1cy4gQWxpcXVhbSBzYWdpdHRpcyBlbGl0IG51bmMsIHZpdGFlIGRhcGlidXMgbnVuYyBwZWxsZW50ZXNxdWUgcXVpcy4gVml2YW11cyBwb3J0dGl0b3IgbWFnbmEgbmVjIHVybmEgdml2ZXJyYSwgYWMgc2NlbGVyaXNxdWUgbGVvIGxhb3JlZXQuIEluIGFjY3Vtc2FuIGV1aXNtb2QgbHVjdHVzLiBNYWVjZW5hcyBzb2xsaWNpdHVkaW4gZXUgdG9ydG9yIHNlZCBpYWN1bGlzLlxuXG4gICAgICAgICAgICAgICAgUGhhc2VsbHVzIHF1aXMgZmFjaWxpc2lzIG5pc2wsIG5lYyB1bGxhbWNvcnBlciBtZXR1cy4gQWVuZWFuIGFjY3Vtc2FuIHF1YW0gdmVsaXQsIGlkIGNvbnZhbGxpcyBkaWFtIG1heGltdXMgY29uc2VxdWF0LiBEb25lYyBsb2JvcnRpcyBjb21tb2RvIG1vbGVzdGllLiBNYWVjZW5hcyBxdWlzIHNhcGllbiB2b2x1dHBhdCwgcmhvbmN1cyBsZW8gaW4sIHZlbmVuYXRpcyBxdWFtLiBQaGFzZWxsdXMgdml0YWUgcmhvbmN1cyBudW5jLCBhIHJ1dHJ1bSBtaS4gTWF1cmlzIGFsaXF1ZXQsIHVybmEgYWMgZGlnbmlzc2ltIG1heGltdXMsIG1hZ25hIHRvcnRvciBydXRydW0gbmliaCwgYSBjb25zZXF1YXQgbWFzc2EgbGlndWxhIHV0IG9yY2kuIFNlZCBtYXhpbXVzLCBuZXF1ZSBhIGV1aXNtb2QgZmFjaWxpc2lzLCBsZWN0dXMgZXN0IHVsdHJpY2VzIHJpc3VzLCBxdWlzIGNvbmRpbWVudHVtIHNlbSBleCBub24gbGFjdXMuXG5cbiAgICAgICAgICAgICAgICBBbGlxdWFtIGFudGUgbGVjdHVzLCBpbnRlcmR1bSBpbiB1bGxhbWNvcnBlciBzaXQgYW1ldCwgZXVpc21vZCBpZCBsaWJlcm8uIE1vcmJpIHBvc3VlcmUgbGFjaW5pYSB2ZW5lbmF0aXMuIEludGVnZXIgcnV0cnVtLCB0ZWxsdXMgc2l0IGFtZXQgdnVscHV0YXRlIHB1bHZpbmFyLCBleCBtYWduYSBzb2RhbGVzIHZlbGl0LCBhYyBpbXBlcmRpZXQgbGliZXJvIHF1YW0gYXQgbnVuYy4gU2VkIHZlbmVuYXRpcyBudWxsYSBsYWN1cywgZXUgcmhvbmN1cyBkaWFtIGF1Y3RvciBub24uIFF1aXNxdWUgcGVsbGVudGVzcXVlIG1pIHNlZCB0b3J0b3IgdWxsYW1jb3JwZXIgY29uZGltZW50dW0uIENyYXMgc2VtIGxvcmVtLCBzYWdpdHRpcyBpbiBhdWN0b3IgcXVpcywgY29uc2VjdGV0dXIgaW4gc2VtLiBOdWxsYW0gdml0YWUgdnVscHV0YXRlIHRvcnRvciwgYSB0aW5jaWR1bnQgZXJvcy4gTnVsbGEgYWxpcXVhbSBkdWkgbm9uIG9kaW8gaGVuZHJlcml0LCB2ZWwgdWxsYW1jb3JwZXIgZHVpIHRlbXBvci4gU2VkIGxhb3JlZXQgdHVycGlzIHF1YW0sIGV0IG1vbGxpcyBtaSB0cmlzdGlxdWUgc2l0IGFtZXQuIEN1cmFiaXR1ciBub24gbGFjdXMgcGhhcmV0cmEsIHZpdmVycmEgc2FwaWVuIHZpdGFlLCBzYWdpdHRpcyByaXN1cy4gTnVsbGFtIGZldWdpYXQgb3JjaSBuZXF1ZSwgc2VkIHNlbXBlciBsaWJlcm8gY29uc2VjdGV0dXIgYXQuIFZpdmFtdXMgYmxhbmRpdCBqdXN0byBhIHZlbGl0IGRpY3R1bSBpYWN1bGlzLiBNb3JiaSBwb3J0dGl0b3IgbmlzbCBub24gZmVsaXMgZ3JhdmlkYSwgc2l0IGFtZXQgY29uc2VxdWF0IGxlY3R1cyB2dWxwdXRhdGUuIFByb2luIHNvZGFsZXMsIHVybmEgbm9uIHB1bHZpbmFyIGNvbnNlcXVhdCwgc2FwaWVuIHZlbGl0IGdyYXZpZGEgbWFzc2EsIG9ybmFyZSBjb25zZXF1YXQgb3JjaSBlc3QgcG9ydGEganVzdG8uIFF1aXNxdWUgbm9uIGxpZ3VsYSBsaWd1bGEuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cblxuICAgICAgICAgICAgICAgIERvbmVjIHF1aXMgc2FnaXR0aXMgbWF1cmlzLiBWaXZhbXVzIGF0IGFudGUgYSBkdWkgdHJpc3RpcXVlIHNlbXBlciB2ZWwgYWMgbGVjdHVzLiBDcmFzIHNlZCB0b3J0b3Igb2Rpby4gQ3VyYWJpdHVyIGF0IHBvcnRhIG5pYmguIFN1c3BlbmRpc3NlIGNvbW1vZG8gdG9ydG9yIGFjIHJ1dHJ1bSBmcmluZ2lsbGEuIFN1c3BlbmRpc3NlIHV0IGRvbG9yIHZpdGFlIGZlbGlzIHNvZGFsZXMgZmF1Y2lidXMuIFZlc3RpYnVsdW0gc2VtcGVyLCBtZXR1cyB2aXRhZSB0ZW1wdXMgdGVtcHVzLCBkaWFtIGp1c3RvIGdyYXZpZGEgdGVsbHVzLCBzaXQgYW1ldCBwb3N1ZXJlIHF1YW0gaXBzdW0gc2l0IGFtZXQgdG9ydG9yLiBNYWVjZW5hcyBlcm9zIGF1Z3VlLCBwbGFjZXJhdCBhIG51bGxhIG5vbiwgZmV1Z2lhdCByaG9uY3VzIGRpYW0uIFZpdmFtdXMgc2VkIHByZXRpdW0gc2VtLiBFdGlhbSBzY2VsZXJpc3F1ZSwgZXJhdCBpbiBwb3J0dGl0b3IgbW9sbGlzLCBkb2xvciBsYWN1cyBwb3J0dGl0b3IgbGFjdXMsIHZlbCBydXRydW0gdXJuYSBkb2xvciB2aXRhZSBqdXN0by4gRG9uZWMgYmliZW5kdW0gdml2ZXJyYSB2YXJpdXMuIERvbmVjIGZldWdpYXQgbWFnbmEgaWQgbWFnbmEgcGhhcmV0cmEsIG5vbiB2ZW5lbmF0aXMgbGVjdHVzIHBvcnRhLiBJbiBhcmN1IG5pYmgsIGhlbmRyZXJpdCBldSBlc3QgbmVjLCB2ZWhpY3VsYSBldWlzbW9kIGxlY3R1cy4gTnVsbGFtIGEgbW9sZXN0aWUgdGVsbHVzLiBNYWVjZW5hcyBncmF2aWRhIHNvbGxpY2l0dWRpbiBmYXVjaWJ1cy4gQ3VyYWJpdHVyIHZpdGFlIHZlc3RpYnVsdW0gbWV0dXMuXG5cbiAgICAgICAgICAgICAgICBOdWxsYSBlZ2V0IGxlY3R1cyBhdCBvcmNpIGJpYmVuZHVtIHB1bHZpbmFyLiBEb25lYyBwcmV0aXVtIG1hZ25hIGEgbWFzc2Egc2NlbGVyaXNxdWUgZWxlbWVudHVtLiBTdXNwZW5kaXNzZSBhYyBncmF2aWRhIGVzdC4gTWFlY2VuYXMgb3JuYXJlIGR1aSBlbmltLCBzZWQgc29kYWxlcyB0ZWxsdXMgc3VzY2lwaXQgcXVpcy4gUHJvaW4gZmV1Z2lhdCBsYWN1cyB1dCBsaWJlcm8gdGVtcHVzIGN1cnN1cy4gRHVpcyBlZ2VzdGFzLCBhdWd1ZSBxdWlzIGRhcGlidXMgdWx0cmljaWVzLCBtaSBudW5jIGNvbmRpbWVudHVtIHNhcGllbiwgZXQgdGluY2lkdW50IGVzdCB0b3J0b3Igc2l0IGFtZXQgZG9sb3IuIFBoYXNlbGx1cyBldSBsYWN1cyB2aXZlcnJhLCBvcm5hcmUgdXJuYSB2ZWwsIGNvbnNlcXVhdCBwdXJ1cy5cblxuICAgICAgICAgICAgICAgIEN1cmFiaXR1ciBhdCBvcm5hcmUgbmVxdWUsIHF1aXMgZmFjaWxpc2lzIGVsaXQuIFNlZCB2ZWwgbWF1cmlzIGluIGRpYW0gY29tbW9kbyBzb2xsaWNpdHVkaW4uIE51bmMgYSBjdXJzdXMgbmlzbCwgYXQgcmhvbmN1cyBleC4gRHVpcyBvcm5hcmUgdXJuYSBub24gbmliaCBncmF2aWRhLCBuZWMgYWNjdW1zYW4gdHVycGlzIHNvZGFsZXMuIFBlbGxlbnRlc3F1ZSBzaXQgYW1ldCB1bHRyaWNpZXMgdXJuYS4gTWF1cmlzIHZlbCBmZXJtZW50dW0gbG9yZW0uIEN1cmFiaXR1ciBsYW9yZWV0LCBwdXJ1cyB2ZWwgZmV1Z2lhdCBmZXVnaWF0LCB2ZWxpdCBqdXN0byBsdWN0dXMgbWksIGEgbW9sbGlzIHNlbSBsZW8gdml0YWUgbWF1cmlzLiBWZXN0aWJ1bHVtIGRpZ25pc3NpbSB0ZW1wdXMgZXggZXUgZmF1Y2lidXMuIEFsaXF1YW0gZWdldCBsZW8gZXUgYXJjdSBkaWN0dW0gYmxhbmRpdC4gUGVsbGVudGVzcXVlIHVsbGFtY29ycGVyIGxhY3VzIHB1bHZpbmFyIHR1cnBpcyB2ZW5lbmF0aXMgdm9sdXRwYXQuIE51bGxhIGVmZmljaXR1ciBwZWxsZW50ZXNxdWUgdGVsbHVzLCB2aXRhZSBvcm5hcmUgb2RpbyBmYWNpbGlzaXMgaWQuIFByYWVzZW50IGVnZXQganVzdG8gdHVycGlzLiBDdXJhYml0dXIgY29uZGltZW50dW0sIGxhY3VzIHV0IHZhcml1cyBtb2xsaXMsIG5lcXVlIHJpc3VzIGZhdWNpYnVzIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBsZW8gaXBzdW0gZWdldCBvZGlvLiBTZWQgc2VtcGVyIHZlc3RpYnVsdW0gbGliZXJvLCBhYyBmZXVnaWF0IG5pYmggdHJpc3RpcXVlIGlkLiBJbiBhbGlxdWFtIGVnZXQgdGVsbHVzIGluIGNvbW1vZG8uIENyYXMgc29kYWxlcyBzZW1wZXIgbmlzbCwgbmVjIGV1aXNtb2QgbGVvIHVsbGFtY29ycGVyIGV0LlxuXG4gICAgICAgICAgICAgICAgRXRpYW0gc2VkIHBsYWNlcmF0IG1pLiBJbiBwZWxsZW50ZXNxdWUgY3Vyc3VzIGVyb3MgaW4gaGVuZHJlcml0LiBJbiBmYWNpbGlzaXMsIG1ldHVzIGF0IHZ1bHB1dGF0ZSBwdWx2aW5hciwgZmVsaXMgZW5pbSBlZmZpY2l0dXIgYW50ZSwgYSBsYW9yZWV0IGF1Z3VlIGRpYW0gdXQgbGlndWxhLiBNYWVjZW5hcyBsZWN0dXMgdG9ydG9yLCBwbGFjZXJhdCBldSB0aW5jaWR1bnQgc2l0IGFtZXQsIGNvbnNlY3RldHVyIGEgb2Rpby4gRG9uZWMgdmVsIGxvcmVtIGVyb3MuIE1vcmJpIGV0IGVmZmljaXR1ciB0b3J0b3IsIHZpdGFlIHZpdmVycmEgbG9yZW0uIENyYXMgZWxpdCBhbnRlLCBhdWN0b3IgZWdldCB0dXJwaXMgc2l0IGFtZXQsIGFjY3Vtc2FuIGxhb3JlZXQgYXJjdS4gRG9uZWMgdmVsIGRpY3R1bSB2ZWxpdC4gRnVzY2UgdXQgdmVuZW5hdGlzIG1hZ25hLiBDcmFzIGxhY2luaWEgdXJuYSBhIGxhY2luaWEgZmV1Z2lhdC4gVXQgYXQgb2RpbyB1dCBuZXF1ZSB0aW5jaWR1bnQgbWFsZXN1YWRhIHF1aXMgbmVjIGxhY3VzLiBEb25lYyBldWlzbW9kIGZlbGlzIGlkIGNvbnNlY3RldHVyIGVsZWlmZW5kLiBFdGlhbSBuZWMgaXBzdW0gZXUgbmliaCBtYXhpbXVzIGFsaXF1ZXQuIEFlbmVhbiBuZWMgaW50ZXJkdW0gdG9ydG9yLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ICAgKHN0b3JlLmZvb3RlciAmJiBzdG9yZS5mb290ZXIuaGVpZ2h0ICYmIHN0b3JlLmZvb3Rlci5oZWlnaHQgPiAwKSAmJlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRpb24tZGVzay1mb290ZXJcIiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tIFwiLi9NZW51T3B0aW9uXCI7XG5pbXBvcnQgeyBJTklUX1NUWUxFLCBzYXZlUGFnZSB9IGZyb20gXCIuLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuaW1wb3J0IHtcbiAgICBOYXZiYXJFZGl0b3IsXG4gICAgQm9keUVkaXRvcixcbiAgICBTaWRlYmFyRWRpdG9yLFxuICAgIFNlY3Rpb25zRWRpdG9yLFxuICAgIEZvb3RlckVkaXRvclxufSBmcm9tIFwiLi9FbGVtZW50RWRpdG9yc1wiO1xuXG5jb25zdCBtZW51VGV4dHMgPSB7XG4gICAgbmF2YmFyOiAnTmF2YmFyJyxcbiAgICBib2R5OiAnQm9keScsXG4gICAgc2lkZWJhcjogJ1NpZGViYXInLFxuICAgIHNlY3Rpb25zOiAnU2VjdGlvbnMnLFxuICAgIGZvb3RlcjogJ0Zvb3Rlcidcbn07XG5cbmNvbnN0IG1lbnVPcHRpb25BY3RpdmUgPSAnJztcblxuY29uc3QgZ2V0TWVudU9wdGlvbkFjdGl2ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbWVudU9wdGlvbkFjdGl2ZTtcbn1cblxuY29uc3QgbWVudVJlZHVjZXIgPSAoY3VycmVudEl0ZW0sIGFjdGl2ZU9wdGlvbikgPT4ge1xuICAgIHJldHVybiBhY3RpdmVPcHRpb247XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVNZW51ID0gKHtzdG9yZSwgZGlzcGF0Y2h9KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZU1lbnVPcHRpb24sIG1lbnVEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG1lbnVSZWR1Y2VyLCB7fSwgZ2V0TWVudU9wdGlvbkFjdGl2ZSk7XG4gICAgc3RvcmUubmF2YmFyID0gc3RvcmUubmF2YmFyIHx8IHt9O1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNyZWF0ZS1tZW51XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlblwiIG9uQ2xpY2s9eygpID0+IHNhdmVQYWdlKHN0b3JlKX0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXthY3RpdmVNZW51T3B0aW9uID09PSBtZW51VGV4dHMubmF2YmFyfVxuICAgICAgICAgICAgICAgIG1lbnVEaXNwYXRjaD17bWVudURpc3BhdGNofVxuICAgICAgICAgICAgICAgIHRleHQ9e21lbnVUZXh0cy5uYXZiYXJ9XG4gICAgICAgICAgICAgICAgY29udGVudD17PE5hdmJhckVkaXRvciBuYXZiYXI9e3N0b3JlLm5hdmJhciB8fCBJTklUX1NUWUxFLm5hdmJhcn0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAgaW5pdEFjdGl2ZT17YWN0aXZlTWVudU9wdGlvbiA9PT0gbWVudVRleHRzLmJvZHl9XG4gICAgICAgICAgICAgICAgbWVudURpc3BhdGNoPXttZW51RGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgdGV4dD17bWVudVRleHRzLmJvZHl9XG4gICAgICAgICAgICAgICAgY29udGVudD17PEJvZHlFZGl0b3IgYm9keT17c3RvcmUuYm9keSB8fCB7fX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAgaW5pdEFjdGl2ZT17YWN0aXZlTWVudU9wdGlvbiA9PT0gbWVudVRleHRzLnNpZGViYXJ9XG4gICAgICAgICAgICAgICAgbWVudURpc3BhdGNoPXttZW51RGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgdGV4dD17bWVudVRleHRzLnNpZGViYXJ9XG4gICAgICAgICAgICAgICAgY29udGVudD17PFNpZGViYXJFZGl0b3IvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgICAgICAgIGluaXRBY3RpdmU9e2FjdGl2ZU1lbnVPcHRpb24gPT09IG1lbnVUZXh0cy5zZWN0aW9uc31cbiAgICAgICAgICAgICAgICBtZW51RGlzcGF0Y2g9e21lbnVEaXNwYXRjaH1cbiAgICAgICAgICAgICAgICB0ZXh0PXttZW51VGV4dHMuc2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgY29udGVudD17PFNlY3Rpb25zRWRpdG9yLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXthY3RpdmVNZW51T3B0aW9uID09PSBtZW51VGV4dHMuZm9vdGVyfVxuICAgICAgICAgICAgICAgIG1lbnVEaXNwYXRjaD17bWVudURpc3BhdGNofVxuICAgICAgICAgICAgICAgIHRleHQ9e21lbnVUZXh0cy5mb290ZXJ9XG4gICAgICAgICAgICAgICAgY29udGVudD17PEZvb3RlckVkaXRvciBmb290ZXI9e3N0b3JlLmZvb3Rlcn0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dENvbG9yIGZyb20gJ3JlYWN0LWlucHV0LWNvbG9yJztcbmltcG9ydCBOYXZiYXJJdGVtc01hbmFnZXIgZnJvbSBcIi4vTmF2YmFySXRlbXNNYW5hZ2VyXCI7XG5pbXBvcnQgeyBBQ1RJT05TLCBJTklUX1NUWUxFIH0gZnJvbSBcIi4uL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5pbXBvcnQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgZnJvbSBcIi4uLy4uLy4uLy4uL2Z1bmN0aW9ucy9lbGVtZW50T3JQYXJlbnRIYXNDbGFzc1wiO1xuXG5jb25zdCBhdmFpbGFibGVGb250cyA9IFtcbiAgICAnQXJpYWwsIHNhbnMtc2VyaWYnLFxuICAgICdWZXJkYW5hLCBzYW5zLXNlcmlmJyxcbiAgICAnSGVsdmV0aWNhLCBzYW5zLXNlcmlmJyxcbiAgICAnVGFob21hLCBzYW5zLXNlcmlmJ1xuXTtcblxuZXhwb3J0IGNvbnN0IE5hdmJhckVkaXRvciA9ICh7XG4gICAgICAgIG5hdmJhcixcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JnQ29sb3IsIHNldEJnQ29sb3JdID0gdXNlU3RhdGUobmF2YmFyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZicpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZShuYXZiYXIuY29sb3IgfHwgJyMwMDAwMDAnKTtcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUobmF2YmFyLmhlaWdodCB8fCA1KTtcbiAgICBjb25zdCBbbmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlLCBzZXROYXZiYXJJdGVtc01hbmFnZXJBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBjbG9zZU5hdkl0ZW1zTW9kYWwgPSBlID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2V4aXQtYnV0dG9uJylcbiAgICAgICAgICAgIHx8ICghZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2Zsb2F0aW5nLXdpbmRvdycpXG4gICAgICAgICAgICAgICAgJiYgIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdtYW5hZ2UtbmF2LWl0ZW1zJykpXG4gICAgICAgICAgICAgICAgJiYgIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdkZWxldGUtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAmJiAhZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2FkZC1idXR0b24nKSkge1xuICAgICAgICAgICAgc2V0TmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gY2xvc2VOYXZJdGVtc01vZGFsO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvciBuYXZiYXItZWRpdG9yXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlICYmXG4gICAgICAgICAgICAgICAgPE5hdmJhckl0ZW1zTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXtuYXZiYXJJdGVtc01hbmFnZXJBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtuYXZiYXIuaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCZ0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgdGV4dCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5jb2xvciB8fCAnIzAwMDAwMCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfVEVYVF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSEVJR0hULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2UudGFyZ2V0LnZhbHVlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBmb250IHNpemU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmF2YmFyLmZvbnRTaXplfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfVEVYVF9TSVpFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3BhY2luZy1zZWxlY3RcIj5TcGFjaW5nPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGFjaW5nT3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzcGFjaW5nLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYXZiYXIuc3BhY2luZ09wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX1NQQUNJTkdfT1BUSU9OLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2luZ09wdGlvbjogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5mbGV4LXN0YXJ0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+ZmxleC1lbmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5zcGFjZS1hcm91bmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW0gaG92ZXJhYmxlIG1hbmFnZS1uYXYtaXRlbXNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6JyNjZGRjMzknfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUodHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTWFuYWdlIG5hdmJhciBpdGVtc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBCb2R5RWRpdG9yID0gKHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JhY2tncm91bmRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yXSA9IHVzZVN0YXRlKGJvZHkuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJyk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShib2R5LmNvbG9yIHx8ICcjMDAwMDAwJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICBiYWNrZ3JvdW5kIGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Ym9keS5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5CT0RZX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgdGV4dCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2JvZHkuY29sb3IgfHwgJyMwMDAwMDAnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5CT0RZX1RFWFRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBmb250IHNpemU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MjR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5LmZvbnRTaXplfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5CT0RZX0ZPTlRfU0laRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleEZsb3c6J2NvbHVtbiB3cmFwJ319XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5LmNvbnRlbnQucGFkZGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuQk9EWV9QQURESU5HLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNpZGViYXJFZGl0b3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgU0lERUJBUiBFRElUT1IgUExBQ0VIT0xERVJcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEZvb3RlckVkaXRvciA9ICh7Zm9vdGVyLCBkaXNwYXRjaH0pID0+IHtcblxuICAgIGNvbnN0IFtiYWNrZ3JvdW5kQ29sb3IsIHNldEJhY2tncm91bmRDb2xvcl0gPSB1c2VTdGF0ZShmb290ZXIuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJyk7XG4gICAgY29uc3QgW3RleHRDb2xvciwgc2V0VGV4dENvbG9yXSA9IHVzZVN0YXRlKGZvb3Rlci5jb2xvciB8fCAnIzAwMDAwMCcpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2Zvb3Rlci5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GT09URVJfQkFDS0dST1VORF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIHRleHQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtmb290ZXIuY29sb3IgfHwgJyMwMDAwMDAnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GT09URVJfVEVYVF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiNVwiXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRk9PVEVSX0hFSUdIVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGZvbnQgc2l6ZTpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb290ZXIuZm9udFNpemUgfHwgMTR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkZPT1RFUl9GT05UX1NJWkUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25zRWRpdG9yID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIFNFQ1RJT05TIEVESVRPUiBQTEFDRUhPTERFUlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgZnJvbSBcIi4uLy4uLy4uLy4uL2Z1bmN0aW9ucy9lbGVtZW50T3JQYXJlbnRIYXNDbGFzc1wiO1xuXG5jb25zdCBNZW51T3B0aW9uID0gKHt0ZXh0LCBjb250ZW50LCBtZW51RGlzcGF0Y2gsIGluaXRBY3RpdmUgPSBmYWxzZX0pID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoaW5pdEFjdGl2ZSk7XG5cbiAgICBsZXQgY2hldnJvbkNsYXNzID0gaW5pdEFjdGl2ZSAmJiBhY3RpdmUgPyAnY2hldnJvbiBjaGV2cm9uLXJldmVyc2UnIDogJ2NoZXZyb24nO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgaWYgKCFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlLnRhcmdldCwgJ2Rlc2lnbi1tZW51LWVkaXRvcicpKSB7XG4gICAgICAgICAgICBtZW51RGlzcGF0Y2godGV4dCk7XG4gICAgICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtb3B0aW9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NoZXZyb24ucG5nXCIgYWx0PVwiY2hldnJvblwiIGNsYXNzTmFtZT17Y2hldnJvbkNsYXNzfS8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB7KGluaXRBY3RpdmUgJiYgYWN0aXZlKSAmJiBjb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGbG9hdGluZ1dpbmRvdyBmcm9tIFwiLi4vLi4vRmxvYXRpbmdXaW5kb3dcIjtcbmltcG9ydCB7IEFDVElPTlMgfSBmcm9tIFwiLi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuY29uc3QgTmF2YmFySXRlbXNNYW5hZ2VyID0gKHtpbml0QWN0aXZlLCBpdGVtcywgZGlzcGF0Y2h9KSA9PiB7XG4gICAgY29uc3QgW25lZ2F0aXZlSWQsIHNldE5lZ2F0aXZlSWRdID0gdXNlU3RhdGUoLTEpO1xuICAgIGxldCBpdGVtc0lucHV0cyA9IFtdO1xuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGl0ZW1zSW5wdXRzID0gaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgdGV4dC0ke2l0ZW0uaWR9YH0+VGV4dDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgdGV4dC0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgdGV4dC0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogJzAgLjRyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSVRFTV9URVhUX1VQREFURUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgdXJsLSR7aXRlbS5pZH1gfT5VUkw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHVybC0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgdXJsLSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46ICcwIC40cmVtJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0lURU1fVVJMX1VQREFURUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXJlZCBkZWxldGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPEZsb2F0aW5nV2luZG93XG4gICAgICAgICAgICBpbml0QWN0aXZlPXtpbml0QWN0aXZlfVxuICAgICAgICAgICAgbmVlZHNXaWRlPXt0cnVlfVxuICAgICAgICAgICAgaW5pdENvbnRlbnRzPXtbXG4gICAgICAgICAgICAgICAgLi4uaXRlbXNJbnB1dHMsXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZGFyay1ncmVlbiBhZGQtYnV0dG9uIGhvdmVyYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0lURU1fQURERUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbmVnYXRpdmVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmVnYXRpdmVJZChuZWdhdGl2ZUlkIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgbmV3IGl0ZW1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFySXRlbXNNYW5hZ2VyIiwiaW1wb3J0IHtBQ1RJT05TfSBmcm9tIFwiLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSEVJR0hUOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFySCA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFySC5oZWlnaHQgPSBhY3Rpb24ucGF5bG9hZC5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckh9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJCZyA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyQmcuYmFja2dyb3VuZENvbG9yID0gYWN0aW9uLnBheWxvYWQuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJCZ307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfVEVYVF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhclRjID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJUYy5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJUY307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfU1BBQ0lOR19PUFRJT046XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJTcGFjaW5nID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJTcGFjaW5nLnNwYWNpbmdPcHRpb24gPSBhY3Rpb24ucGF5bG9hZC5zcGFjaW5nT3B0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJTcGFjaW5nfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9URVhUX1NJWkU6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJGb250U2l6ZSA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyRm9udFNpemUuZm9udFNpemUgPSBhY3Rpb24ucGF5bG9hZC5mb250U2l6ZTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyRm9udFNpemV9XG5cbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9JVEVNX1RFWFRfVVBEQVRFRDpcbiAgICAgICAgICAgIGxldCBuZXdOYXZiYXJJdGVtc1RleHQgPSBzdGF0ZS5uYXZiYXIuaXRlbXM7XG4gICAgICAgICAgICBuZXdOYXZiYXJJdGVtc1RleHQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dCA9IGFjdGlvbi5wYXlsb2FkLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJDaGFuZ2VkSXRlbXNUZXh0ID0gey4uLnN0YXRlLm5hdmJhciwgaXRlbXM6IG5ld05hdmJhckl0ZW1zVGV4dH07XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckNoYW5nZWRJdGVtc1RleHR9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0lURU1fVVJMX1VQREFURUQ6XG4gICAgICAgICAgICBsZXQgbmV3TmF2YmFySXRlbXNVcmwgPSBzdGF0ZS5uYXZiYXIuaXRlbXM7XG4gICAgICAgICAgICBuZXdOYXZiYXJJdGVtc1VybCA9IG5ld05hdmJhckl0ZW1zVXJsLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbSwgdXJsOiBhY3Rpb24ucGF5bG9hZC51cmx9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVXJsID0gey4uLnN0YXRlLm5hdmJhciwgaXRlbXM6IG5ld05hdmJhckl0ZW1zVXJsfTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVXJsfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9JVEVNX0lURU1fREVMRVRFRDpcbiAgICAgICAgICAgIGNvbnN0IG9sZE5hdmJhckl0ZW1zID0gc3RhdGUubmF2YmFyLml0ZW1zO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFySXRlbXNBZnRlckRlbGV0aW5nID0gb2xkTmF2YmFySXRlbXMuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgICAgICAgICBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckFmdGVyRGVsZXRpb24gPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckFmdGVyRGVsZXRpb24uaXRlbXMgPSBuZXdOYXZiYXJJdGVtc0FmdGVyRGVsZXRpbmc7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckFmdGVyRGVsZXRpb259O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0lURU1fQURERUQ6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZJdGVtcyA9IHN0YXRlLm5hdmJhci5pdGVtcyA/PyBbXTtcbiAgICAgICAgICAgIG5ld05hdkl0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQubmV3SXRlbSk7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJBZnRlckFkZGluZyA9IHsuLi5zdGF0ZS5uYXZiYXIsIGl0ZW1zOiBuZXdOYXZJdGVtc307XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckFmdGVyQWRkaW5nfTtcblxuICAgICAgICBjYXNlIEFDVElPTlMuQk9EWV9CQUNLR1JPVU5EX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3Qm9keSA9IHsuLi5zdGF0ZS5ib2R5fTtcbiAgICAgICAgICAgIG5ld0JvZHkuYmFja2dyb3VuZENvbG9yID0gYWN0aW9uLnBheWxvYWQuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogbmV3Qm9keX07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5CT0RZX1RFWFRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5VGMgPSB7Li4uc3RhdGUuYm9keX07XG4gICAgICAgICAgICBuZXdCb2R5VGMuY29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGJvZHk6IG5ld0JvZHlUY307XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgQUNUSU9OUy5CT0RZX0ZPTlRfU0laRTpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHlGcyA9IHsuLi5zdGF0ZS5ib2R5fTtcbiAgICAgICAgICAgIG5ld0JvZHlGcy5mb250U2l6ZSA9IGFjdGlvbi5wYXlsb2FkLmZvbnRTaXplO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogbmV3Qm9keUZzfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfUEFERElORzpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHlDb250ZW50UGFkZGluZyA9IHsuLi5zdGF0ZS5ib2R5LmNvbnRlbnR9O1xuICAgICAgICAgICAgbmV3Qm9keUNvbnRlbnRQYWRkaW5nLnBhZGRpbmcgPSBhY3Rpb24ucGF5bG9hZC5wYWRkaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogey4uLnN0YXRlLmJvZHksIGNvbnRlbnQ6IG5ld0JvZHlDb250ZW50UGFkZGluZ319O1xuICAgICAgICBjYXNlIEFDVElPTlMuQk9EWV9GT05UOlxuICAgICAgICAgICAgY29uc3QgbmV3Qm9keUZvbnQgPSB7Li4uc3RhdGUuYm9keX07XG4gICAgICAgICAgICBuZXdCb2R5Rm9udC5mb250RmFtaWx5ID0gYWN0aW9uLnBheWxvYWQuZm9udEZhbWlseTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGJvZHk6IG5ld0JvZHlGb250fTtcblxuICAgICAgICBjYXNlIEFDVElPTlMuRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdGb290ZXJCZyA9IHsuLi5zdGF0ZS5mb290ZXJ9O1xuICAgICAgICAgICAgbmV3Rm9vdGVyQmcuYmFja2dyb3VuZENvbG9yID0gYWN0aW9uLnBheWxvYWQuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZm9vdGVyOiBuZXdGb290ZXJCZ307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5GT09URVJfSEVJR0hUOlxuICAgICAgICAgICAgY29uc3QgbmV3Rm9vdGVySGVpZ2h0ID0gey4uLnN0YXRlLmZvb3Rlcn07XG4gICAgICAgICAgICBuZXdGb290ZXJIZWlnaHQuaGVpZ2h0ID0gYWN0aW9uLnBheWxvYWQuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZm9vdGVyOiBuZXdGb290ZXJIZWlnaHR9XG4gICAgICAgIGNhc2UgQUNUSU9OUy5GT09URVJfVEVYVF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0Zvb3RlclRjID0gey4uLnN0YXRlLmZvb3Rlcn07XG4gICAgICAgICAgICBuZXdGb290ZXJUYy5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZm9vdGVyOiBuZXdGb290ZXJUY307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5GT09URVJfRk9OVF9TSVpFOlxuICAgICAgICAgICAgY29uc3QgbmV3Rm9vdGVyRnMgPSB7Li4uc3RhdGUuZm9vdGVyfTtcbiAgICAgICAgICAgIG5ld0Zvb3RlckZzLmZvbnRTaXplID0gYWN0aW9uLnBheWxvYWQuZm9udFNpemU7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBmb290ZXI6IG5ld0Zvb3RlckZzfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IENyZWF0ZVBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAgPENyZWF0ZVBhZ2VXcmFwcGVyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3JlYXRlUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9jcmVhdGVQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q3JlYXRlUGFnZUNvbnRhaW5lciAvPixcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXSwic291cmNlUm9vdCI6IiJ9