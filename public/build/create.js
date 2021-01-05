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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu erat lobortis, varius ante at, accumsan tellus. Curabitur varius, neque id dictum ullamcorper, nisi libero egestas est, vel venenatis ex ipsum at est. Ut in lacus ante. Curabitur faucibus risus mauris, a tincidunt metus mollis eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque a est facilisis, egestas urna et, pharetra arcu. Nam imperdiet dictum nulla in volutpat. Cras tempus ut orci in condimentum. Fusce luctus, dui eget blandit mattis, lacus purus consectetur lorem, nec molestie neque est luctus felis. In hac habitasse platea dictumst. Vivamus magna nunc, accumsan in malesuada id, gravida feugiat tellus. Phasellus a est vitae risus interdum gravida. Ut semper tellus et felis maximus, sit amet tincidunt metus lacinia. Pellentesque vel ligula ornare, dignissim risus accumsan, posuere augue. Integer orci libero, placerat eget auctor ac, aliquet eu turpis. Donec sit amet interdum justo. Integer volutpat et mauris et efficitur. Integer efficitur sapien eu malesuada consectetur. Phasellus tincidunt, urna id efficitur facilisis, diam felis facilisis enim, ac consequat dolor purus ut urna. Nam at maximus mauris. Praesent tortor odio, malesuada vel diam ut, sollicitudin placerat ligula. Etiam et sodales nisi. Donec eu risus aliquam, posuere justo nec, hendrerit nunc. Suspendisse hendrerit commodo leo non pretium. Sed dignissim imperdiet leo sed porta. Nulla blandit arcu id nunc eleifend imperdiet eu sed nisi. Sed ligula massa, convallis tincidunt nunc quis, semper consectetur lacus. Maecenas vel nulla velit. Aliquam sed quam libero. Proin at aliquet nisl, eu efficitur ligula. Curabitur a tincidunt velit. Praesent accumsan, orci in mollis semper, diam tellus euismod quam, vestibulum gravida orci felis sit amet ex. Mauris molestie ex id sapien elementum ullamcorper. Curabitur neque risus, fringilla vel posuere et, bibendum ut dolor. Praesent ex mi, mollis in tincidunt sit amet, sodales nec dui. Ut dictum imperdiet justo id suscipit. Cras cursus, quam vitae ultricies finibus, massa justo pretium sem, in vehicula magna ante vel enim. Donec finibus eros a laoreet consectetur. Aenean augue orci, gravida id mattis quis, feugiat pellentesque mi. Vestibulum bibendum pellentesque mi cursus sodales. Nulla ut lacinia tellus, vitae ullamcorper nibh. Mauris vitae pharetra leo. Morbi in diam eu augue tempus pharetra. Mauris iaculis nulla non risus placerat aliquam a vitae mauris. Morbi nec nunc vitae quam auctor tempus. Maecenas lacinia sollicitudin leo. Sed odio felis, feugiat vitae ullamcorper ullamcorper, mattis laoreet magna. Morbi convallis aliquam facilisis. Pellentesque ac velit nisl. Pellentesque ornare ut lacus nec malesuada. Curabitur finibus, felis quis dapibus maximus, diam nisl finibus velit, vel ornare quam massa ut lectus. Proin metus augue, scelerisque vel ex nec, porttitor commodo elit. Pellentesque a orci turpis. Pellentesque imperdiet luctus nisl, in scelerisque ex consequat id. Donec sollicitudin, erat non scelerisque molestie, mauris eros faucibus lorem, sed bibendum mauris nisi sed sem. Mauris at dignissim ipsum. Ut tristique, arcu non volutpat eleifend, risus est porttitor nunc, quis lacinia dui diam et lectus. Donec dignissim eleifend aliquam. Nunc tempor laoreet enim, ut iaculis nibh tempor sit amet. Nunc laoreet lorem velit, eu lobortis turpis ultricies eget. Sed accumsan facilisis velit, vulputate varius ex dapibus non. Nam aliquet ultrices efficitur. Ut nec sapien posuere, accumsan ligula non, luctus augue. Vestibulum tincidunt iaculis nunc sit amet tristique. Nullam id arcu vitae arcu finibus sodales. Etiam sed aliquet elit, eget fringilla lectus. Sed iaculis justo eu justo egestas, nec posuere eros cursus. Morbi mauris nibh, accumsan sit amet est sit amet, fringilla molestie neque. Nunc et turpis quis diam pharetra rutrum. Aenean id neque diam. Donec nibh augue, venenatis in lobortis vel, ultricies finibus ante. Donec id cursus leo. Sed dignissim ipsum at mollis rhoncus. Suspendisse porttitor scelerisque libero, in aliquam sem eleifend sed. Mauris vitae pharetra leo. Praesent fringilla metus eget ante mattis, eget imperdiet elit dignissim. Donec eu volutpat nisi. Nam egestas ipsum purus, non aliquet orci pellentesque non. Sed ut vehicula urna, non fermentum risus. Nam non feugiat ligula, vel consequat felis. Suspendisse in vestibulum ante. Sed ornare auctor leo, sit amet molestie ipsum cursus quis. Cras sed sollicitudin purus. Nulla eget ultricies orci, quis gravida nisl. Vestibulum vulputate lacinia commodo. Ut placerat ante at suscipit finibus. Nunc gravida nulla quis tellus convallis, nec eleifend sem pretium. Aliquam eleifend facilisis porttitor. In ante enim, cursus vitae sodales ac, semper id dui. Suspendisse et nisl ut dui ullamcorper bibendum et ut eros. Nullam ipsum metus, consectetur vitae bibendum a, aliquam sed neque. Suspendisse semper nibh risus, quis porttitor tortor lobortis sit amet. Donec interdum mi et lacinia elementum. Quisque tristique, lectus nec condimentum sagittis, nunc odio egestas purus, quis efficitur leo diam eget sem. Donec in urna nec sapien tincidunt rutrum. Nunc vehicula lectus nec magna consectetur, a pulvinar nisl fringilla. Quisque sed mattis lectus. Sed at pellentesque metus. Nullam sollicitudin facilisis egestas. Maecenas hendrerit eu tellus mattis ultricies. Phasellus dapibus eu nisi quis lobortis. Etiam imperdiet tincidunt mi, sed viverra sapien interdum sed. Phasellus eu iaculis quam, vel varius diam. Vivamus at eros ullamcorper, vehicula nulla et, vestibulum massa. Donec mi lacus, euismod id leo a, dapibus condimentum libero. Ut vitae neque sit amet massa fringilla sagittis. Fusce porttitor tristique turpis, dictum vestibulum justo. Nam ac auctor purus. Aenean rhoncus risus in turpis consequat, quis egestas eros molestie. Nulla aliquet, orci eu ultrices molestie, lorem nisi pulvinar nisi, id bibendum quam justo quis nulla. Praesent nec est et tellus rutrum tristique. Suspendisse in arcu dui. Maecenas facilisis mauris in enim tristique bibendum. Nunc ullamcorper vehicula mi, sed rutrum magna sodales vitae. Donec ligula turpis, lobortis sed porttitor quis, faucibus ac turpis. Nullam cursus volutpat congue. Sed tempus arcu et bibendum semper. Donec at tincidunt erat, vitae sagittis urna. Aliquam blandit imperdiet justo eget ultrices. Donec vitae nulla quis felis laoreet fermentum quis vel leo. Phasellus vulputate, nulla vel vestibulum sollicitudin, justo neque aliquam ex, ac maximus arcu velit sed nisi. Pellentesque lorem magna, cursus sed magna in, sodales volutpat diam. Integer posuere ante ante, in porttitor tortor maximus sed. Nunc ac nulla fermentum, maximus urna quis, convallis erat. Integer euismod rutrum nisi, nec molestie nibh euismod in. Nullam id massa in massa laoreet commodo in vitae nunc. Nunc accumsan odio a nunc iaculis pharetra. Phasellus mollis finibus lectus sed mollis. Donec et augue quis mi eleifend egestas. Sed quis accumsan turpis. Duis tellus quam, convallis tincidunt nibh nec, efficitur sollicitudin nisl. Suspendisse blandit eget erat ut dignissim. Fusce sed enim ac lorem iaculis pellentesque eget vitae odio. Aliquam dignissim enim turpis, sed facilisis erat volutpat tempor. Vestibulum luctus lacus sodales, ultrices nulla id, sollicitudin turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sit amet ligula ante. Maecenas pretium id purus elementum dapibus. Sed enim lacus, molestie id tortor eu, gravida gravida sapien. Ut auctor sollicitudin urna et dictum. Nulla maximus mi sed porttitor maximus. Sed volutpat dolor nec lectus ornare varius. Vivamus aliquet purus nibh, eu condimentum magna tincidunt id. Sed hendrerit risus a ornare bibendum. Proin nec turpis auctor, rutrum augue sit amet, feugiat dui. Integer in finibus magna. Vivamus eu lobortis metus, non scelerisque neque. Aenean convallis erat ligula, vel bibendum nunc rhoncus at. Aenean felis magna, rhoncus non sollicitudin et, pulvinar et purus. Nunc sed augue vulputate, tristique orci at, laoreet metus. Ut ullamcorper finibus odio, sed fringilla urna interdum sed. Morbi id viverra ante, quis semper metus. Phasellus dui diam, tristique in vulputate id, sodales vel neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis varius enim nec ligula sodales malesuada. Mauris metus nulla, eleifend nec nisi in, maximus tempor dolor. Curabitur pretium ac eros non facilisis. Quisque mollis volutpat rhoncus. Curabitur eu imperdiet sapien. Praesent accumsan, nibh vitae mattis pretium, ipsum ex consectetur orci, efficitur finibus quam ex eu leo. Nulla sodales lobortis diam vel dignissim. Proin dictum, nisi sed sagittis pharetra, ex leo luctus mauris, id consequat elit ligula a sem. In pellentesque urna lacus, ac consectetur nunc condimentum a. Aenean rutrum ornare nulla in consectetur. Nam odio urna, faucibus vel nisi a, pretium tincidunt tortor. Cras tincidunt blandit sapien eu lacinia. Phasellus consequat lectus at varius rutrum. Maecenas euismod nisl sodales sollicitudin semper. Curabitur gravida urna libero, et laoreet turpis accumsan ut. Suspendisse faucibus mauris sit amet libero pretium lacinia. Pellentesque gravida, metus elementum iaculis convallis, elit turpis pretium enim, molestie tempor ante ipsum sit amet tellus. Donec commodo nisl at dapibus tincidunt. Nam mollis nibh quis porttitor blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus eu tincidunt nunc. Etiam sit amet dolor consequat, rutrum odio a, iaculis velit. Donec aliquet nisi magna, vitae porta ligula condimentum et. Curabitur sollicitudin lorem urna, quis vestibulum justo fermentum vitae. Vestibulum aliquam tincidunt sapien, gravida hendrerit ex bibendum ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sit amet nunc et lorem congue volutpat ut quis dui. Nullam pharetra malesuada metus, sit amet molestie dolor pulvinar quis. Fusce in elit elementum, facilisis nunc at, scelerisque enim. Ut fermentum molestie accumsan. Sed nunc mauris, euismod id enim eget, pretium commodo turpis. Mauris quis placerat neque. Nam vitae mi id diam gravida semper. Nam molestie at purus sit amet tincidunt. Donec sed nisl aliquam, sodales sem at, facilisis orci. Curabitur id sapien sit amet ante dapibus maximus. Vivamus odio velit, venenatis vitae ante eu, feugiat ultrices mauris. Praesent vestibulum feugiat tortor quis ullamcorper. Quisque dapibus mi id libero gravida ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec finibus dui. Suspendisse feugiat placerat tellus, et condimentum quam facilisis aliquam. Curabitur erat leo, laoreet non eros non, volutpat hendrerit ex. Proin eu magna sagittis, aliquam ligula quis, convallis justo. Phasellus nulla ante, dictum sagittis eros et, pulvinar tempus massa. Ut tortor odio, vehicula a felis vel, viverra posuere elit. Nunc non posuere nisl. Sed facilisis lectus at est malesuada, porta mattis augue finibus. Ut aliquet bibendum iaculis. Duis sit amet congue magna. Maecenas congue dictum euismod. Aenean nibh velit, auctor vitae tortor quis, congue pellentesque nisi. Integer laoreet magna quis ligula rutrum efficitur. Sed ligula ex, elementum sit amet neque at, dictum feugiat purus. Sed bibendum, magna a suscipit ultricies, quam felis dapibus augue, nec efficitur tellus mauris vel nisl. Integer sed arcu erat. Curabitur arcu odio, gravida rutrum facilisis in, euismod quis ipsum. In cursus diam eu iaculis facilisis. Pellentesque id nunc nisi. Duis eu nisi dignissim, rhoncus magna vitae, gravida mi. Maecenas sagittis sagittis dolor a luctus. Aliquam sagittis elit nunc, vitae dapibus nunc pellentesque quis. Vivamus porttitor magna nec urna viverra, ac scelerisque leo laoreet. In accumsan euismod luctus. Maecenas sollicitudin eu tortor sed iaculis. Phasellus quis facilisis nisl, nec ullamcorper metus. Aenean accumsan quam velit, id convallis diam maximus consequat. Donec lobortis commodo molestie. Maecenas quis sapien volutpat, rhoncus leo in, venenatis quam. Phasellus vitae rhoncus nunc, a rutrum mi. Mauris aliquet, urna ac dignissim maximus, magna tortor rutrum nibh, a consequat massa ligula ut orci. Sed maximus, neque a euismod facilisis, lectus est ultrices risus, quis condimentum sem ex non lacus. Aliquam ante lectus, interdum in ullamcorper sit amet, euismod id libero. Morbi posuere lacinia venenatis. Integer rutrum, tellus sit amet vulputate pulvinar, ex magna sodales velit, ac imperdiet libero quam at nunc. Sed venenatis nulla lacus, eu rhoncus diam auctor non. Quisque pellentesque mi sed tortor ullamcorper condimentum. Cras sem lorem, sagittis in auctor quis, consectetur in sem. Nullam vitae vulputate tortor, a tincidunt eros. Nulla aliquam dui non odio hendrerit, vel ullamcorper dui tempor. Sed laoreet turpis quam, et mollis mi tristique sit amet. Curabitur non lacus pharetra, viverra sapien vitae, sagittis risus. Nullam feugiat orci neque, sed semper libero consectetur at. Vivamus blandit justo a velit dictum iaculis. Morbi porttitor nisl non felis gravida, sit amet consequat lectus vulputate. Proin sodales, urna non pulvinar consequat, sapien velit gravida massa, ornare consequat orci est porta justo. Quisque non ligula ligula. Aliquam erat volutpat. Donec quis sagittis mauris. Vivamus at ante a dui tristique semper vel ac lectus. Cras sed tortor odio. Curabitur at porta nibh. Suspendisse commodo tortor ac rutrum fringilla. Suspendisse ut dolor vitae felis sodales faucibus. Vestibulum semper, metus vitae tempus tempus, diam justo gravida tellus, sit amet posuere quam ipsum sit amet tortor. Maecenas eros augue, placerat a nulla non, feugiat rhoncus diam. Vivamus sed pretium sem. Etiam scelerisque, erat in porttitor mollis, dolor lacus porttitor lacus, vel rutrum urna dolor vitae justo. Donec bibendum viverra varius. Donec feugiat magna id magna pharetra, non venenatis lectus porta. In arcu nibh, hendrerit eu est nec, vehicula euismod lectus. Nullam a molestie tellus. Maecenas gravida sollicitudin faucibus. Curabitur vitae vestibulum metus. Nulla eget lectus at orci bibendum pulvinar. Donec pretium magna a massa scelerisque elementum. Suspendisse ac gravida est. Maecenas ornare dui enim, sed sodales tellus suscipit quis. Proin feugiat lacus ut libero tempus cursus. Duis egestas, augue quis dapibus ultricies, mi nunc condimentum sapien, et tincidunt est tortor sit amet dolor. Phasellus eu lacus viverra, ornare urna vel, consequat purus. Curabitur at ornare neque, quis facilisis elit. Sed vel mauris in diam commodo sollicitudin. Nunc a cursus nisl, at rhoncus ex. Duis ornare urna non nibh gravida, nec accumsan turpis sodales. Pellentesque sit amet ultricies urna. Mauris vel fermentum lorem. Curabitur laoreet, purus vel feugiat feugiat, velit justo luctus mi, a mollis sem leo vitae mauris. Vestibulum dignissim tempus ex eu faucibus. Aliquam eget leo eu arcu dictum blandit. Pellentesque ullamcorper lacus pulvinar turpis venenatis volutpat. Nulla efficitur pellentesque tellus, vitae ornare odio facilisis id. Praesent eget justo turpis. Curabitur condimentum, lacus ut varius mollis, neque risus faucibus mi, sit amet lobortis leo ipsum eget odio. Sed semper vestibulum libero, ac feugiat nibh tristique id. In aliquam eget tellus in commodo. Cras sodales semper nisl, nec euismod leo ullamcorper et. Etiam sed placerat mi. In pellentesque cursus eros in hendrerit. In facilisis, metus at vulputate pulvinar, felis enim efficitur ante, a laoreet augue diam ut ligula. Maecenas lectus tortor, placerat eu tincidunt sit amet, consectetur a odio. Donec vel lorem eros. Morbi et efficitur tortor, vitae viverra lorem. Cras elit ante, auctor eget turpis sit amet, accumsan laoreet arcu. Donec vel dictum velit. Fusce ut venenatis magna. Cras lacinia urna a lacinia feugiat. Ut at odio ut neque tincidunt malesuada quis nec lacus. Donec euismod felis id consectetur eleifend. Etiam nec ipsum eu nibh maximus aliquet. Aenean nec interdum tortor."), store.footer && store.footer.height && store.footer.height > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuOption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuOption */ "./assets/js/react/components/create/menu/MenuOption.js");
/* harmony import */ var _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CreatePageWrapper */ "./assets/js/react/components/create/CreatePageWrapper.js");
/* harmony import */ var _ElementEditors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ElementEditors */ "./assets/js/react/components/create/menu/ElementEditors.js");




var CreateMenu = function CreateMenu(_ref) {
  var store = _ref.store,
      dispatch = _ref.dispatch;
  store.navbar = store.navbar || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "create-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button-green",
    onClick: function onClick() {
      return Object(_CreatePageWrapper__WEBPACK_IMPORTED_MODULE_2__["savePage"])(store);
    }
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Navbar",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_3__["NavbarEditor"], {
      navbar: store.navbar || _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_2__["INIT_STYLE"].navbar,
      dispatch: dispatch
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Body",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_3__["BodyEditor"], {
      body: store.body || {},
      dispatch: dispatch
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Sidebar",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_3__["SidebarEditor"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Sections",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_3__["SectionsEditor"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Footer",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_3__["FooterEditor"], {
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
      content = _ref.content;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var chevronClass = active ? 'chevron chevron-reverse' : 'chevron';

  var handleClick = function handleClick(e) {
    if (!Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_14__["default"])(e.target, 'design-menu-editor')) {
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
  })), active && content);
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

  var itemsInputs = items.map(function (item) {
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
      var newNavItems = state.navbar.items;
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

},[["./assets/js/react/pages/create.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","vendors~browse~create~theme","vendors~create","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL0Zsb2F0aW5nV2luZG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvRWxlbWVudEVkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvbWVudS9OYXZiYXJJdGVtc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvY3JlYXRlUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImVsZW1lbnRPclBhcmVudEhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsIkZsb2F0aW5nV2luZG93IiwiaW5pdEFjdGl2ZSIsImluaXRDb250ZW50cyIsIm5lZWRzV2lkZSIsIndpbmRvd0NsYXNzTmFtZSIsIm92ZXJUb3BDbGFzc05hbWUiLCJ3aWRlQ2xhc3NOYW1lIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VFZmZlY3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm1hcCIsIml0ZW0iLCJBQ1RJT05TIiwiTkFWQkFSX0hFSUdIVCIsIk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SIiwiTkFWQkFSX1RFWFRfQ09MT1IiLCJOQVZCQVJfVEVYVF9TSVpFIiwiTkFWQkFSX1NQQUNJTkdfT1BUSU9OIiwiTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEIiwiTkFWQkFSX0lURU1fVVJMX1VQREFURUQiLCJOQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQiLCJOQVZCQVJfSVRFTV9BRERFRCIsIkJPRFlfQkFDS0dST1VORF9DT0xPUiIsIkJPRFlfVEVYVF9DT0xPUiIsIkJPRFlfRk9OVF9TSVpFIiwiRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1IiLCJGT09URVJfVEVYVF9DT0xPUiIsIkZPT1RFUl9GT05UX1NJWkUiLCJGT09URVJfSEVJR0hUIiwiSU5JVF9TVFlMRSIsIm5hdmJhciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImluaXQiLCJsYXlvdXREYXRhIiwicGFnZVN0cnVjdHVyZSIsInNhdmVQYWdlIiwicGF5bG9hZCIsImF4aW9zIiwicG9zdCIsInBhZ2VIYXNoIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwiYWxlcnQiLCJDcmVhdGVQYWdlV3JhcHBlciIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhdmFpbGFibGVTcGFjaW5nT3B0aW9ucyIsImZsZXhTdGFydCIsImZsZXhFbmQiLCJzcGFjZUFyb3VuZCIsIm5hdkl0ZW1zTmVlZE1hcmdpbiIsInNwYWNpbmdPcHRpb24iLCJnZXRTcGFjaW5nU3R5bGUiLCJnZXROYXZJdGVtc1N0eWxlIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpbiIsIkNyZWF0aW9uRGVzayIsInN0b3JlIiwiYm9keVN0eWxlIiwiYm9keSIsIm5hdkl0ZW1zIiwiaXRlbXMiLCJzcGFjaW5nIiwibmF2U3R5bGUiLCJmb290ZXJTdHlsZSIsImZvb3RlciIsIm5hdkl0ZW1zU3R5bGUiLCJ1cmwiLCJ0ZXh0IiwiQ3JlYXRlTWVudSIsIk5hdmJhckVkaXRvciIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwidGV4dENvbG9yIiwic2V0VGV4dENvbG9yIiwic2V0SGVpZ2h0IiwibmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlIiwic2V0TmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlIiwiY2xvc2VOYXZJdGVtc01vZGFsIiwiZSIsInRhcmdldCIsIndpbmRvdyIsIm9uY2xpY2siLCJ0eXBlIiwiaGV4IiwidmFsdWUiLCJmb250U2l6ZSIsIk51bWJlciIsInBhcnNlSW50IiwiQm9keUVkaXRvciIsInNldEJhY2tncm91bmRDb2xvciIsInNldENvbG9yIiwiU2lkZWJhckVkaXRvciIsIkZvb3RlckVkaXRvciIsIlNlY3Rpb25zRWRpdG9yIiwiTWVudU9wdGlvbiIsImNvbnRlbnQiLCJjaGV2cm9uQ2xhc3MiLCJoYW5kbGVDbGljayIsIk5hdmJhckl0ZW1zTWFuYWdlciIsIm5lZ2F0aXZlSWQiLCJzZXROZWdhdGl2ZUlkIiwiaXRlbXNJbnB1dHMiLCJpZCIsIm5ld0l0ZW0iLCJhY3Rpb24iLCJuZXdOYXZiYXJIIiwibmV3TmF2YmFyQmciLCJuZXdOYXZiYXJUYyIsIm5ld05hdmJhclNwYWNpbmciLCJuZXdOYXZiYXJGb250U2l6ZSIsIm5ld05hdmJhckl0ZW1zVGV4dCIsImZvckVhY2giLCJ1bmRlZmluZWQiLCJuZXdOYXZiYXJDaGFuZ2VkSXRlbXNUZXh0IiwibmV3TmF2YmFySXRlbXNVcmwiLCJuZXdOYXZiYXJDaGFuZ2VkSXRlbXNVcmwiLCJvbGROYXZiYXJJdGVtcyIsIm5ld05hdmJhckl0ZW1zQWZ0ZXJEZWxldGluZyIsImZpbHRlciIsIm5ld05hdmJhckFmdGVyRGVsZXRpb24iLCJuZXdOYXZJdGVtcyIsInB1c2giLCJuZXdOYXZiYXJBZnRlckFkZGluZyIsIm5ld0JvZHkiLCJuZXdCb2R5VGMiLCJuZXdCb2R5RnMiLCJuZXdGb290ZXJCZyIsIm5ld0Zvb3RlckhlaWdodCIsIm5ld0Zvb3RlclRjIiwibmV3Rm9vdGVyRnMiLCJDcmVhdGVQYWdlQ29udGFpbmVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXdCO0FBQ3BELE1BQUlELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkJGLFNBQTNCLENBQUosRUFBMkM7QUFDdkMsV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlELE9BQU8sQ0FBQ0ksYUFBWixFQUEyQjtBQUM5QixXQUFPTCx1QkFBdUIsQ0FBQ0MsT0FBTyxDQUFDSSxhQUFULEVBQXdCSCxTQUF4QixDQUE5QjtBQUNIOztBQUNELFNBQU8sS0FBUDtBQUNILENBUEQ7O0FBU2VGLHNGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7QUFFQSxJQUFNTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWdFO0FBQUEsNkJBQTlEQyxVQUE4RDtBQUFBLE1BQTlEQSxVQUE4RCxnQ0FBakQsS0FBaUQ7QUFBQSwrQkFBMUNDLFlBQTBDO0FBQUEsTUFBMUNBLFlBQTBDLGtDQUEzQixFQUEyQjtBQUFBLDRCQUF2QkMsU0FBdUI7QUFBQSxNQUF2QkEsU0FBdUIsK0JBQVgsS0FBVztBQUNuRixNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUcsVUFBekI7QUFDQSxNQUFNQyxhQUFhLEdBQUcs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OztFQVo0Q0MsNkNBQUssQ0FBQ0MsUzs7Ozs7Ozs7Ozs7Ozs7QUNKdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFDLGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyx1RUFBRCxPQURKLEVBRUl0RCxNQUFNLENBQUN1RCxRQUFQLENBQWdCQyxjQUFoQixDQUErQixNQUEvQixDQUZKLEUiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQucGFyZW50RWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGbG9hdGluZ1dpbmRvdyA9ICh7aW5pdEFjdGl2ZSA9IGZhbHNlLCBpbml0Q29udGVudHMgPSBbXSwgbmVlZHNXaWRlID0gZmFsc2V9KSA9PiB7XG4gICAgY29uc3Qgd2luZG93Q2xhc3NOYW1lID0gXCJmbG9hdGluZy13aW5kb3dcIjtcbiAgICBjb25zdCBvdmVyVG9wQ2xhc3NOYW1lID0gXCJvdmVyLXRvcFwiO1xuICAgIGNvbnN0IHdpZGVDbGFzc05hbWUgPSAnIHdpbmRvdy13aWRlJztcblxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoXG4gICAgICAgICgpID0+IHNldEFjdGl2ZShpbml0QWN0aXZlKSxcbiAgICAgICAgW11cbiAgICApO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IGFjdGl2ZSA/IHdpbmRvd0NsYXNzTmFtZSA6IGAke3dpbmRvd0NsYXNzTmFtZX0gJHtvdmVyVG9wQ2xhc3NOYW1lfWA7XG4gICAgaWYgKG5lZWRzV2lkZSkgY2xhc3NOYW1lICs9IHdpZGVDbGFzc05hbWU7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonZmxleC1lbmQnfX0+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXhpdC1idXR0b24gYnV0dG9uLXJlZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRBY3RpdmUoZmFsc2UpfX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjond2hpdGUnfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5pdENvbnRlbnRzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsb2F0aW5nV2luZG93OyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgeyBDcmVhdGlvbkRlc2sgfSBmcm9tIFwiLi9DcmVhdGlvbkRlc2tcIjtcbmltcG9ydCB7IENyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51L0NyZWF0ZU1lbnVcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xuICAgIE5BVkJBUl9IRUlHSFQ6ICdzZXROYXZiYXJIZWlnaHQnLFxuICAgIE5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SOiAnc2V0TmF2YmFyQmFja2dyb3VuZENvbG9yJyxcbiAgICBOQVZCQVJfVEVYVF9DT0xPUjogJ3NldE5hdmJhclRleHRDb2xvcicsXG4gICAgTkFWQkFSX1RFWFRfU0laRTogJ3NldE5hdmJhclRleHRTaXplJyxcbiAgICBOQVZCQVJfU1BBQ0lOR19PUFRJT046ICdzZXROYXZiYXJTcGFjaW5nT3B0aW9uJyxcbiAgICBOQVZCQVJfSVRFTV9URVhUX1VQREFURUQ6ICdzZXROYXZiYXJJdGVtVGV4dCcsXG4gICAgTkFWQkFSX0lURU1fVVJMX1VQREFURUQ6ICdzZXROYXZiYXJJdGVtVXJsJyxcbiAgICBOQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQ6ICdkZWxldGVOYXZiYXJJdGVtJyxcbiAgICBOQVZCQVJfSVRFTV9BRERFRDogJ2FkZGVkTmF2YmFySXRlbScsXG5cbiAgICBCT0RZX0JBQ0tHUk9VTkRfQ09MT1I6ICdzZXRCb2R5QmFja3JvdW5kQ29sb3InLFxuICAgIEJPRFlfVEVYVF9DT0xPUjogJ3NldEJvZHlUZXh0Q29sb3InLFxuICAgIEJPRFlfRk9OVF9TSVpFOiAnc2V0Qm9keUZvbnRTaXplJyxcblxuICAgIEZPT1RFUl9CQUNLR1JPVU5EX0NPTE9SOiAnc2V0Rm9vdGVyQmFja2dyb3VuZENvbG9yJyxcbiAgICBGT09URVJfVEVYVF9DT0xPUjogJ3NldEZvb3RlclRleHRDb2xvcicsXG4gICAgRk9PVEVSX0ZPTlRfU0laRTogJ3NldEZvb3RlckZvbnRTaXplJyxcbiAgICBGT09URVJfSEVJR0hUOiAnc2V0Rm9vdGVySGVpZ2h0J1xufTtcblxuZXhwb3J0IGNvbnN0IElOSVRfU1RZTEUgPSB7XG4gICAgbmF2YmFyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhYWFhYWEnLFxuICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICBoZWlnaHQ6IDVcbiAgICB9XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHJldHVybiBsYXlvdXREYXRhLnBhZ2VTdHJ1Y3R1cmU7XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlUGFnZSA9IHBheWxvYWQgPT4ge1xuICAgIHBheWxvYWQubmF2YmFyLmhlaWdodCA9IHBheWxvYWQubmF2YmFyLmhlaWdodCB8fCBJTklUX1NUWUxFLm5hdmJhci5oZWlnaHQ7IC8vQHRvZG8gcmVmYWN0b3IhXG4gICAgYXhpb3MucG9zdChgL2RhdGEvdXBkYXRlX3BhZ2UvJHtsYXlvdXREYXRhLnBhZ2VIYXNofWAsIHtwYXlsb2FkfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgQ3JlYXRlUGFnZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHt9LCBpbml0KTtcblxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cbiAgICAgICAgICAgIDxDcmVhdGVNZW51IHN0b3JlPXtzdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgICAgICA8Q3JlYXRpb25EZXNrIHN0b3JlPXtzdGF0ZX0vPlxuICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElOSVRfU1RZTEUgfSBmcm9tIFwiLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuXG5jb25zdCBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucyA9IHtcbiAgICBmbGV4U3RhcnQ6IDEsXG4gICAgZmxleEVuZDogMixcbiAgICBzcGFjZUFyb3VuZDogM1xufTtcblxuY29uc3QgbmF2SXRlbXNOZWVkTWFyZ2luID0gc3BhY2luZ09wdGlvbiA9PiB7XG4gICAgcmV0dXJuIHNwYWNpbmdPcHRpb24gIT09IGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLnNwYWNlQXJvdW5kO1xufVxuXG5jb25zdCBnZXRTcGFjaW5nU3R5bGUgPSBzcGFjaW5nT3B0aW9uID0+IHtcbiAgICBzd2l0Y2ggKHNwYWNpbmdPcHRpb24pIHtcbiAgICAgICAgY2FzZSBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucy5mbGV4RW5kOlxuICAgICAgICAgICAgcmV0dXJuIHtkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnfTtcbiAgICAgICAgY2FzZSBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucy5zcGFjZUFyb3VuZDpcbiAgICAgICAgICAgIHJldHVybiB7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCd9O1xuICAgICAgICBjYXNlIGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLmZsZXhTdGFydDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnfTtcbiAgICB9XG59O1xuXG5jb25zdCBnZXROYXZJdGVtc1N0eWxlID0gc3BhY2luZ09wdGlvbiA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSB7dGV4dERlY29yYXRpb246J25vbmUnLGNvbG9yOidpbmhlcml0J307XG4gICAgaWYgKG5hdkl0ZW1zTmVlZE1hcmdpbihzcGFjaW5nT3B0aW9uKSkge1xuICAgICAgICBzdHlsZS5tYXJnaW4gPSAnMCAycmVtJztcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xufVxuXG5leHBvcnQgY29uc3QgQ3JlYXRpb25EZXNrID0gKHtzdG9yZSA9IHt9fSkgPT4ge1xuXG4gICAgc3RvcmUubmF2YmFyID0gc3RvcmUubmF2YmFyIHx8IElOSVRfU1RZTEUubmF2YmFyO1xuICAgIGxldCBib2R5U3R5bGUgPSBzdG9yZS5ib2R5IHx8IHt9O1xuICAgIGxldCBuYXZJdGVtcyA9IHN0b3JlLm5hdmJhci5pdGVtcyB8fCBbXTtcbiAgICBjb25zdCBzcGFjaW5nID0gZ2V0U3BhY2luZ1N0eWxlKHN0b3JlLm5hdmJhci5zcGFjaW5nT3B0aW9uKTtcbiAgICBjb25zdCBuYXZTdHlsZSA9IHsuLi5zdG9yZS5uYXZiYXIsIGhlaWdodDogYCR7c3RvcmUubmF2YmFyLmhlaWdodCB8fCA1fXJlbWAsIC4uLnNwYWNpbmd9O1xuICAgIGxldCBmb290ZXJTdHlsZSA9IHsuLi5zdG9yZS5mb290ZXIsIGhlaWdodDogYCR7c3RvcmUuZm9vdGVyLmhlaWdodCB8fCAwfXJlbWB9O1xuICAgIC8vIG5hdlN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgLy8gbmF2U3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcbiAgICBjb25zdCBuYXZJdGVtc1N0eWxlID0gZ2V0TmF2SXRlbXNTdHlsZShzdG9yZS5uYXZiYXIuc3BhY2luZ09wdGlvbik7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY3JlYXRpb24tZGVza1wiIHN0eWxlPXtib2R5U3R5bGV9PlxuICAgICAgICAgICAgPG5hdiBzdHlsZT17bmF2U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7bmF2SXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e25hdkl0ZW1zU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT47XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZXUgZXJhdCBsb2JvcnRpcywgdmFyaXVzIGFudGUgYXQsIGFjY3Vtc2FuIHRlbGx1cy4gQ3VyYWJpdHVyIHZhcml1cywgbmVxdWUgaWQgZGljdHVtIHVsbGFtY29ycGVyLCBuaXNpIGxpYmVybyBlZ2VzdGFzIGVzdCwgdmVsIHZlbmVuYXRpcyBleCBpcHN1bSBhdCBlc3QuIFV0IGluIGxhY3VzIGFudGUuIEN1cmFiaXR1ciBmYXVjaWJ1cyByaXN1cyBtYXVyaXMsIGEgdGluY2lkdW50IG1ldHVzIG1vbGxpcyBldS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBlbGxlbnRlc3F1ZSBhIGVzdCBmYWNpbGlzaXMsIGVnZXN0YXMgdXJuYSBldCwgcGhhcmV0cmEgYXJjdS4gTmFtIGltcGVyZGlldCBkaWN0dW0gbnVsbGEgaW4gdm9sdXRwYXQuIENyYXMgdGVtcHVzIHV0IG9yY2kgaW4gY29uZGltZW50dW0uIEZ1c2NlIGx1Y3R1cywgZHVpIGVnZXQgYmxhbmRpdCBtYXR0aXMsIGxhY3VzIHB1cnVzIGNvbnNlY3RldHVyIGxvcmVtLCBuZWMgbW9sZXN0aWUgbmVxdWUgZXN0IGx1Y3R1cyBmZWxpcy4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIFZpdmFtdXMgbWFnbmEgbnVuYywgYWNjdW1zYW4gaW4gbWFsZXN1YWRhIGlkLCBncmF2aWRhIGZldWdpYXQgdGVsbHVzLiBQaGFzZWxsdXMgYSBlc3Qgdml0YWUgcmlzdXMgaW50ZXJkdW0gZ3JhdmlkYS4gVXQgc2VtcGVyIHRlbGx1cyBldCBmZWxpcyBtYXhpbXVzLCBzaXQgYW1ldCB0aW5jaWR1bnQgbWV0dXMgbGFjaW5pYS5cblxuICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSB2ZWwgbGlndWxhIG9ybmFyZSwgZGlnbmlzc2ltIHJpc3VzIGFjY3Vtc2FuLCBwb3N1ZXJlIGF1Z3VlLiBJbnRlZ2VyIG9yY2kgbGliZXJvLCBwbGFjZXJhdCBlZ2V0IGF1Y3RvciBhYywgYWxpcXVldCBldSB0dXJwaXMuIERvbmVjIHNpdCBhbWV0IGludGVyZHVtIGp1c3RvLiBJbnRlZ2VyIHZvbHV0cGF0IGV0IG1hdXJpcyBldCBlZmZpY2l0dXIuIEludGVnZXIgZWZmaWNpdHVyIHNhcGllbiBldSBtYWxlc3VhZGEgY29uc2VjdGV0dXIuIFBoYXNlbGx1cyB0aW5jaWR1bnQsIHVybmEgaWQgZWZmaWNpdHVyIGZhY2lsaXNpcywgZGlhbSBmZWxpcyBmYWNpbGlzaXMgZW5pbSwgYWMgY29uc2VxdWF0IGRvbG9yIHB1cnVzIHV0IHVybmEuIE5hbSBhdCBtYXhpbXVzIG1hdXJpcy4gUHJhZXNlbnQgdG9ydG9yIG9kaW8sIG1hbGVzdWFkYSB2ZWwgZGlhbSB1dCwgc29sbGljaXR1ZGluIHBsYWNlcmF0IGxpZ3VsYS4gRXRpYW0gZXQgc29kYWxlcyBuaXNpLiBEb25lYyBldSByaXN1cyBhbGlxdWFtLCBwb3N1ZXJlIGp1c3RvIG5lYywgaGVuZHJlcml0IG51bmMuIFN1c3BlbmRpc3NlIGhlbmRyZXJpdCBjb21tb2RvIGxlbyBub24gcHJldGl1bS4gU2VkIGRpZ25pc3NpbSBpbXBlcmRpZXQgbGVvIHNlZCBwb3J0YS4gTnVsbGEgYmxhbmRpdCBhcmN1IGlkIG51bmMgZWxlaWZlbmQgaW1wZXJkaWV0IGV1IHNlZCBuaXNpLiBTZWQgbGlndWxhIG1hc3NhLCBjb252YWxsaXMgdGluY2lkdW50IG51bmMgcXVpcywgc2VtcGVyIGNvbnNlY3RldHVyIGxhY3VzLiBNYWVjZW5hcyB2ZWwgbnVsbGEgdmVsaXQuXG5cbiAgICAgICAgICAgICAgICBBbGlxdWFtIHNlZCBxdWFtIGxpYmVyby4gUHJvaW4gYXQgYWxpcXVldCBuaXNsLCBldSBlZmZpY2l0dXIgbGlndWxhLiBDdXJhYml0dXIgYSB0aW5jaWR1bnQgdmVsaXQuIFByYWVzZW50IGFjY3Vtc2FuLCBvcmNpIGluIG1vbGxpcyBzZW1wZXIsIGRpYW0gdGVsbHVzIGV1aXNtb2QgcXVhbSwgdmVzdGlidWx1bSBncmF2aWRhIG9yY2kgZmVsaXMgc2l0IGFtZXQgZXguIE1hdXJpcyBtb2xlc3RpZSBleCBpZCBzYXBpZW4gZWxlbWVudHVtIHVsbGFtY29ycGVyLiBDdXJhYml0dXIgbmVxdWUgcmlzdXMsIGZyaW5naWxsYSB2ZWwgcG9zdWVyZSBldCwgYmliZW5kdW0gdXQgZG9sb3IuIFByYWVzZW50IGV4IG1pLCBtb2xsaXMgaW4gdGluY2lkdW50IHNpdCBhbWV0LCBzb2RhbGVzIG5lYyBkdWkuIFV0IGRpY3R1bSBpbXBlcmRpZXQganVzdG8gaWQgc3VzY2lwaXQuIENyYXMgY3Vyc3VzLCBxdWFtIHZpdGFlIHVsdHJpY2llcyBmaW5pYnVzLCBtYXNzYSBqdXN0byBwcmV0aXVtIHNlbSwgaW4gdmVoaWN1bGEgbWFnbmEgYW50ZSB2ZWwgZW5pbS4gRG9uZWMgZmluaWJ1cyBlcm9zIGEgbGFvcmVldCBjb25zZWN0ZXR1ci4gQWVuZWFuIGF1Z3VlIG9yY2ksIGdyYXZpZGEgaWQgbWF0dGlzIHF1aXMsIGZldWdpYXQgcGVsbGVudGVzcXVlIG1pLlxuXG4gICAgICAgICAgICAgICAgVmVzdGlidWx1bSBiaWJlbmR1bSBwZWxsZW50ZXNxdWUgbWkgY3Vyc3VzIHNvZGFsZXMuIE51bGxhIHV0IGxhY2luaWEgdGVsbHVzLCB2aXRhZSB1bGxhbWNvcnBlciBuaWJoLiBNYXVyaXMgdml0YWUgcGhhcmV0cmEgbGVvLiBNb3JiaSBpbiBkaWFtIGV1IGF1Z3VlIHRlbXB1cyBwaGFyZXRyYS4gTWF1cmlzIGlhY3VsaXMgbnVsbGEgbm9uIHJpc3VzIHBsYWNlcmF0IGFsaXF1YW0gYSB2aXRhZSBtYXVyaXMuIE1vcmJpIG5lYyBudW5jIHZpdGFlIHF1YW0gYXVjdG9yIHRlbXB1cy4gTWFlY2VuYXMgbGFjaW5pYSBzb2xsaWNpdHVkaW4gbGVvLlxuXG4gICAgICAgICAgICAgICAgU2VkIG9kaW8gZmVsaXMsIGZldWdpYXQgdml0YWUgdWxsYW1jb3JwZXIgdWxsYW1jb3JwZXIsIG1hdHRpcyBsYW9yZWV0IG1hZ25hLiBNb3JiaSBjb252YWxsaXMgYWxpcXVhbSBmYWNpbGlzaXMuIFBlbGxlbnRlc3F1ZSBhYyB2ZWxpdCBuaXNsLiBQZWxsZW50ZXNxdWUgb3JuYXJlIHV0IGxhY3VzIG5lYyBtYWxlc3VhZGEuIEN1cmFiaXR1ciBmaW5pYnVzLCBmZWxpcyBxdWlzIGRhcGlidXMgbWF4aW11cywgZGlhbSBuaXNsIGZpbmlidXMgdmVsaXQsIHZlbCBvcm5hcmUgcXVhbSBtYXNzYSB1dCBsZWN0dXMuIFByb2luIG1ldHVzIGF1Z3VlLCBzY2VsZXJpc3F1ZSB2ZWwgZXggbmVjLCBwb3J0dGl0b3IgY29tbW9kbyBlbGl0LiBQZWxsZW50ZXNxdWUgYSBvcmNpIHR1cnBpcy4gUGVsbGVudGVzcXVlIGltcGVyZGlldCBsdWN0dXMgbmlzbCwgaW4gc2NlbGVyaXNxdWUgZXggY29uc2VxdWF0IGlkLlxuXG4gICAgICAgICAgICAgICAgRG9uZWMgc29sbGljaXR1ZGluLCBlcmF0IG5vbiBzY2VsZXJpc3F1ZSBtb2xlc3RpZSwgbWF1cmlzIGVyb3MgZmF1Y2lidXMgbG9yZW0sIHNlZCBiaWJlbmR1bSBtYXVyaXMgbmlzaSBzZWQgc2VtLiBNYXVyaXMgYXQgZGlnbmlzc2ltIGlwc3VtLiBVdCB0cmlzdGlxdWUsIGFyY3Ugbm9uIHZvbHV0cGF0IGVsZWlmZW5kLCByaXN1cyBlc3QgcG9ydHRpdG9yIG51bmMsIHF1aXMgbGFjaW5pYSBkdWkgZGlhbSBldCBsZWN0dXMuIERvbmVjIGRpZ25pc3NpbSBlbGVpZmVuZCBhbGlxdWFtLiBOdW5jIHRlbXBvciBsYW9yZWV0IGVuaW0sIHV0IGlhY3VsaXMgbmliaCB0ZW1wb3Igc2l0IGFtZXQuIE51bmMgbGFvcmVldCBsb3JlbSB2ZWxpdCwgZXUgbG9ib3J0aXMgdHVycGlzIHVsdHJpY2llcyBlZ2V0LiBTZWQgYWNjdW1zYW4gZmFjaWxpc2lzIHZlbGl0LCB2dWxwdXRhdGUgdmFyaXVzIGV4IGRhcGlidXMgbm9uLiBOYW0gYWxpcXVldCB1bHRyaWNlcyBlZmZpY2l0dXIuIFV0IG5lYyBzYXBpZW4gcG9zdWVyZSwgYWNjdW1zYW4gbGlndWxhIG5vbiwgbHVjdHVzIGF1Z3VlLiBWZXN0aWJ1bHVtIHRpbmNpZHVudCBpYWN1bGlzIG51bmMgc2l0IGFtZXQgdHJpc3RpcXVlLiBOdWxsYW0gaWQgYXJjdSB2aXRhZSBhcmN1IGZpbmlidXMgc29kYWxlcy4gRXRpYW0gc2VkIGFsaXF1ZXQgZWxpdCwgZWdldCBmcmluZ2lsbGEgbGVjdHVzLlxuXG4gICAgICAgICAgICAgICAgU2VkIGlhY3VsaXMganVzdG8gZXUganVzdG8gZWdlc3RhcywgbmVjIHBvc3VlcmUgZXJvcyBjdXJzdXMuIE1vcmJpIG1hdXJpcyBuaWJoLCBhY2N1bXNhbiBzaXQgYW1ldCBlc3Qgc2l0IGFtZXQsIGZyaW5naWxsYSBtb2xlc3RpZSBuZXF1ZS4gTnVuYyBldCB0dXJwaXMgcXVpcyBkaWFtIHBoYXJldHJhIHJ1dHJ1bS4gQWVuZWFuIGlkIG5lcXVlIGRpYW0uIERvbmVjIG5pYmggYXVndWUsIHZlbmVuYXRpcyBpbiBsb2JvcnRpcyB2ZWwsIHVsdHJpY2llcyBmaW5pYnVzIGFudGUuIERvbmVjIGlkIGN1cnN1cyBsZW8uIFNlZCBkaWduaXNzaW0gaXBzdW0gYXQgbW9sbGlzIHJob25jdXMuXG5cbiAgICAgICAgICAgICAgICBTdXNwZW5kaXNzZSBwb3J0dGl0b3Igc2NlbGVyaXNxdWUgbGliZXJvLCBpbiBhbGlxdWFtIHNlbSBlbGVpZmVuZCBzZWQuIE1hdXJpcyB2aXRhZSBwaGFyZXRyYSBsZW8uIFByYWVzZW50IGZyaW5naWxsYSBtZXR1cyBlZ2V0IGFudGUgbWF0dGlzLCBlZ2V0IGltcGVyZGlldCBlbGl0IGRpZ25pc3NpbS4gRG9uZWMgZXUgdm9sdXRwYXQgbmlzaS4gTmFtIGVnZXN0YXMgaXBzdW0gcHVydXMsIG5vbiBhbGlxdWV0IG9yY2kgcGVsbGVudGVzcXVlIG5vbi4gU2VkIHV0IHZlaGljdWxhIHVybmEsIG5vbiBmZXJtZW50dW0gcmlzdXMuIE5hbSBub24gZmV1Z2lhdCBsaWd1bGEsIHZlbCBjb25zZXF1YXQgZmVsaXMuIFN1c3BlbmRpc3NlIGluIHZlc3RpYnVsdW0gYW50ZS4gU2VkIG9ybmFyZSBhdWN0b3IgbGVvLCBzaXQgYW1ldCBtb2xlc3RpZSBpcHN1bSBjdXJzdXMgcXVpcy4gQ3JhcyBzZWQgc29sbGljaXR1ZGluIHB1cnVzLiBOdWxsYSBlZ2V0IHVsdHJpY2llcyBvcmNpLCBxdWlzIGdyYXZpZGEgbmlzbC4gVmVzdGlidWx1bSB2dWxwdXRhdGUgbGFjaW5pYSBjb21tb2RvLiBVdCBwbGFjZXJhdCBhbnRlIGF0IHN1c2NpcGl0IGZpbmlidXMuXG5cbiAgICAgICAgICAgICAgICBOdW5jIGdyYXZpZGEgbnVsbGEgcXVpcyB0ZWxsdXMgY29udmFsbGlzLCBuZWMgZWxlaWZlbmQgc2VtIHByZXRpdW0uIEFsaXF1YW0gZWxlaWZlbmQgZmFjaWxpc2lzIHBvcnR0aXRvci4gSW4gYW50ZSBlbmltLCBjdXJzdXMgdml0YWUgc29kYWxlcyBhYywgc2VtcGVyIGlkIGR1aS4gU3VzcGVuZGlzc2UgZXQgbmlzbCB1dCBkdWkgdWxsYW1jb3JwZXIgYmliZW5kdW0gZXQgdXQgZXJvcy4gTnVsbGFtIGlwc3VtIG1ldHVzLCBjb25zZWN0ZXR1ciB2aXRhZSBiaWJlbmR1bSBhLCBhbGlxdWFtIHNlZCBuZXF1ZS4gU3VzcGVuZGlzc2Ugc2VtcGVyIG5pYmggcmlzdXMsIHF1aXMgcG9ydHRpdG9yIHRvcnRvciBsb2JvcnRpcyBzaXQgYW1ldC4gRG9uZWMgaW50ZXJkdW0gbWkgZXQgbGFjaW5pYSBlbGVtZW50dW0uXG5cbiAgICAgICAgICAgICAgICBRdWlzcXVlIHRyaXN0aXF1ZSwgbGVjdHVzIG5lYyBjb25kaW1lbnR1bSBzYWdpdHRpcywgbnVuYyBvZGlvIGVnZXN0YXMgcHVydXMsIHF1aXMgZWZmaWNpdHVyIGxlbyBkaWFtIGVnZXQgc2VtLiBEb25lYyBpbiB1cm5hIG5lYyBzYXBpZW4gdGluY2lkdW50IHJ1dHJ1bS4gTnVuYyB2ZWhpY3VsYSBsZWN0dXMgbmVjIG1hZ25hIGNvbnNlY3RldHVyLCBhIHB1bHZpbmFyIG5pc2wgZnJpbmdpbGxhLiBRdWlzcXVlIHNlZCBtYXR0aXMgbGVjdHVzLiBTZWQgYXQgcGVsbGVudGVzcXVlIG1ldHVzLiBOdWxsYW0gc29sbGljaXR1ZGluIGZhY2lsaXNpcyBlZ2VzdGFzLiBNYWVjZW5hcyBoZW5kcmVyaXQgZXUgdGVsbHVzIG1hdHRpcyB1bHRyaWNpZXMuIFBoYXNlbGx1cyBkYXBpYnVzIGV1IG5pc2kgcXVpcyBsb2JvcnRpcy4gRXRpYW0gaW1wZXJkaWV0IHRpbmNpZHVudCBtaSwgc2VkIHZpdmVycmEgc2FwaWVuIGludGVyZHVtIHNlZC4gUGhhc2VsbHVzIGV1IGlhY3VsaXMgcXVhbSwgdmVsIHZhcml1cyBkaWFtLiBWaXZhbXVzIGF0IGVyb3MgdWxsYW1jb3JwZXIsIHZlaGljdWxhIG51bGxhIGV0LCB2ZXN0aWJ1bHVtIG1hc3NhLiBEb25lYyBtaSBsYWN1cywgZXVpc21vZCBpZCBsZW8gYSwgZGFwaWJ1cyBjb25kaW1lbnR1bSBsaWJlcm8uIFV0IHZpdGFlIG5lcXVlIHNpdCBhbWV0IG1hc3NhIGZyaW5naWxsYSBzYWdpdHRpcy4gRnVzY2UgcG9ydHRpdG9yIHRyaXN0aXF1ZSB0dXJwaXMsIGRpY3R1bSB2ZXN0aWJ1bHVtIGp1c3RvLlxuXG4gICAgICAgICAgICAgICAgTmFtIGFjIGF1Y3RvciBwdXJ1cy4gQWVuZWFuIHJob25jdXMgcmlzdXMgaW4gdHVycGlzIGNvbnNlcXVhdCwgcXVpcyBlZ2VzdGFzIGVyb3MgbW9sZXN0aWUuIE51bGxhIGFsaXF1ZXQsIG9yY2kgZXUgdWx0cmljZXMgbW9sZXN0aWUsIGxvcmVtIG5pc2kgcHVsdmluYXIgbmlzaSwgaWQgYmliZW5kdW0gcXVhbSBqdXN0byBxdWlzIG51bGxhLiBQcmFlc2VudCBuZWMgZXN0IGV0IHRlbGx1cyBydXRydW0gdHJpc3RpcXVlLiBTdXNwZW5kaXNzZSBpbiBhcmN1IGR1aS4gTWFlY2VuYXMgZmFjaWxpc2lzIG1hdXJpcyBpbiBlbmltIHRyaXN0aXF1ZSBiaWJlbmR1bS4gTnVuYyB1bGxhbWNvcnBlciB2ZWhpY3VsYSBtaSwgc2VkIHJ1dHJ1bSBtYWduYSBzb2RhbGVzIHZpdGFlLiBEb25lYyBsaWd1bGEgdHVycGlzLCBsb2JvcnRpcyBzZWQgcG9ydHRpdG9yIHF1aXMsIGZhdWNpYnVzIGFjIHR1cnBpcy4gTnVsbGFtIGN1cnN1cyB2b2x1dHBhdCBjb25ndWUuIFNlZCB0ZW1wdXMgYXJjdSBldCBiaWJlbmR1bSBzZW1wZXIuIERvbmVjIGF0IHRpbmNpZHVudCBlcmF0LCB2aXRhZSBzYWdpdHRpcyB1cm5hLlxuXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBibGFuZGl0IGltcGVyZGlldCBqdXN0byBlZ2V0IHVsdHJpY2VzLiBEb25lYyB2aXRhZSBudWxsYSBxdWlzIGZlbGlzIGxhb3JlZXQgZmVybWVudHVtIHF1aXMgdmVsIGxlby4gUGhhc2VsbHVzIHZ1bHB1dGF0ZSwgbnVsbGEgdmVsIHZlc3RpYnVsdW0gc29sbGljaXR1ZGluLCBqdXN0byBuZXF1ZSBhbGlxdWFtIGV4LCBhYyBtYXhpbXVzIGFyY3UgdmVsaXQgc2VkIG5pc2kuIFBlbGxlbnRlc3F1ZSBsb3JlbSBtYWduYSwgY3Vyc3VzIHNlZCBtYWduYSBpbiwgc29kYWxlcyB2b2x1dHBhdCBkaWFtLiBJbnRlZ2VyIHBvc3VlcmUgYW50ZSBhbnRlLCBpbiBwb3J0dGl0b3IgdG9ydG9yIG1heGltdXMgc2VkLiBOdW5jIGFjIG51bGxhIGZlcm1lbnR1bSwgbWF4aW11cyB1cm5hIHF1aXMsIGNvbnZhbGxpcyBlcmF0LiBJbnRlZ2VyIGV1aXNtb2QgcnV0cnVtIG5pc2ksIG5lYyBtb2xlc3RpZSBuaWJoIGV1aXNtb2QgaW4uIE51bGxhbSBpZCBtYXNzYSBpbiBtYXNzYSBsYW9yZWV0IGNvbW1vZG8gaW4gdml0YWUgbnVuYy4gTnVuYyBhY2N1bXNhbiBvZGlvIGEgbnVuYyBpYWN1bGlzIHBoYXJldHJhLiBQaGFzZWxsdXMgbW9sbGlzIGZpbmlidXMgbGVjdHVzIHNlZCBtb2xsaXMuIERvbmVjIGV0IGF1Z3VlIHF1aXMgbWkgZWxlaWZlbmQgZWdlc3Rhcy4gU2VkIHF1aXMgYWNjdW1zYW4gdHVycGlzLlxuXG4gICAgICAgICAgICAgICAgRHVpcyB0ZWxsdXMgcXVhbSwgY29udmFsbGlzIHRpbmNpZHVudCBuaWJoIG5lYywgZWZmaWNpdHVyIHNvbGxpY2l0dWRpbiBuaXNsLiBTdXNwZW5kaXNzZSBibGFuZGl0IGVnZXQgZXJhdCB1dCBkaWduaXNzaW0uIEZ1c2NlIHNlZCBlbmltIGFjIGxvcmVtIGlhY3VsaXMgcGVsbGVudGVzcXVlIGVnZXQgdml0YWUgb2Rpby4gQWxpcXVhbSBkaWduaXNzaW0gZW5pbSB0dXJwaXMsIHNlZCBmYWNpbGlzaXMgZXJhdCB2b2x1dHBhdCB0ZW1wb3IuIFZlc3RpYnVsdW0gbHVjdHVzIGxhY3VzIHNvZGFsZXMsIHVsdHJpY2VzIG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gdHVycGlzLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgQWVuZWFuIHNpdCBhbWV0IGxpZ3VsYSBhbnRlLiBNYWVjZW5hcyBwcmV0aXVtIGlkIHB1cnVzIGVsZW1lbnR1bSBkYXBpYnVzLiBTZWQgZW5pbSBsYWN1cywgbW9sZXN0aWUgaWQgdG9ydG9yIGV1LCBncmF2aWRhIGdyYXZpZGEgc2FwaWVuLiBVdCBhdWN0b3Igc29sbGljaXR1ZGluIHVybmEgZXQgZGljdHVtLlxuXG4gICAgICAgICAgICAgICAgTnVsbGEgbWF4aW11cyBtaSBzZWQgcG9ydHRpdG9yIG1heGltdXMuIFNlZCB2b2x1dHBhdCBkb2xvciBuZWMgbGVjdHVzIG9ybmFyZSB2YXJpdXMuIFZpdmFtdXMgYWxpcXVldCBwdXJ1cyBuaWJoLCBldSBjb25kaW1lbnR1bSBtYWduYSB0aW5jaWR1bnQgaWQuIFNlZCBoZW5kcmVyaXQgcmlzdXMgYSBvcm5hcmUgYmliZW5kdW0uIFByb2luIG5lYyB0dXJwaXMgYXVjdG9yLCBydXRydW0gYXVndWUgc2l0IGFtZXQsIGZldWdpYXQgZHVpLiBJbnRlZ2VyIGluIGZpbmlidXMgbWFnbmEuIFZpdmFtdXMgZXUgbG9ib3J0aXMgbWV0dXMsIG5vbiBzY2VsZXJpc3F1ZSBuZXF1ZS4gQWVuZWFuIGNvbnZhbGxpcyBlcmF0IGxpZ3VsYSwgdmVsIGJpYmVuZHVtIG51bmMgcmhvbmN1cyBhdC4gQWVuZWFuIGZlbGlzIG1hZ25hLCByaG9uY3VzIG5vbiBzb2xsaWNpdHVkaW4gZXQsIHB1bHZpbmFyIGV0IHB1cnVzLiBOdW5jIHNlZCBhdWd1ZSB2dWxwdXRhdGUsIHRyaXN0aXF1ZSBvcmNpIGF0LCBsYW9yZWV0IG1ldHVzLiBVdCB1bGxhbWNvcnBlciBmaW5pYnVzIG9kaW8sIHNlZCBmcmluZ2lsbGEgdXJuYSBpbnRlcmR1bSBzZWQuIE1vcmJpIGlkIHZpdmVycmEgYW50ZSwgcXVpcyBzZW1wZXIgbWV0dXMuIFBoYXNlbGx1cyBkdWkgZGlhbSwgdHJpc3RpcXVlIGluIHZ1bHB1dGF0ZSBpZCwgc29kYWxlcyB2ZWwgbmVxdWUuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gRHVpcyB2YXJpdXMgZW5pbSBuZWMgbGlndWxhIHNvZGFsZXMgbWFsZXN1YWRhLiBNYXVyaXMgbWV0dXMgbnVsbGEsIGVsZWlmZW5kIG5lYyBuaXNpIGluLCBtYXhpbXVzIHRlbXBvciBkb2xvci5cblxuICAgICAgICAgICAgICAgIEN1cmFiaXR1ciBwcmV0aXVtIGFjIGVyb3Mgbm9uIGZhY2lsaXNpcy4gUXVpc3F1ZSBtb2xsaXMgdm9sdXRwYXQgcmhvbmN1cy4gQ3VyYWJpdHVyIGV1IGltcGVyZGlldCBzYXBpZW4uIFByYWVzZW50IGFjY3Vtc2FuLCBuaWJoIHZpdGFlIG1hdHRpcyBwcmV0aXVtLCBpcHN1bSBleCBjb25zZWN0ZXR1ciBvcmNpLCBlZmZpY2l0dXIgZmluaWJ1cyBxdWFtIGV4IGV1IGxlby4gTnVsbGEgc29kYWxlcyBsb2JvcnRpcyBkaWFtIHZlbCBkaWduaXNzaW0uIFByb2luIGRpY3R1bSwgbmlzaSBzZWQgc2FnaXR0aXMgcGhhcmV0cmEsIGV4IGxlbyBsdWN0dXMgbWF1cmlzLCBpZCBjb25zZXF1YXQgZWxpdCBsaWd1bGEgYSBzZW0uIEluIHBlbGxlbnRlc3F1ZSB1cm5hIGxhY3VzLCBhYyBjb25zZWN0ZXR1ciBudW5jIGNvbmRpbWVudHVtIGEuIEFlbmVhbiBydXRydW0gb3JuYXJlIG51bGxhIGluIGNvbnNlY3RldHVyLiBOYW0gb2RpbyB1cm5hLCBmYXVjaWJ1cyB2ZWwgbmlzaSBhLCBwcmV0aXVtIHRpbmNpZHVudCB0b3J0b3IuIENyYXMgdGluY2lkdW50IGJsYW5kaXQgc2FwaWVuIGV1IGxhY2luaWEuIFBoYXNlbGx1cyBjb25zZXF1YXQgbGVjdHVzIGF0IHZhcml1cyBydXRydW0uIE1hZWNlbmFzIGV1aXNtb2QgbmlzbCBzb2RhbGVzIHNvbGxpY2l0dWRpbiBzZW1wZXIuIEN1cmFiaXR1ciBncmF2aWRhIHVybmEgbGliZXJvLCBldCBsYW9yZWV0IHR1cnBpcyBhY2N1bXNhbiB1dC5cblxuICAgICAgICAgICAgICAgIFN1c3BlbmRpc3NlIGZhdWNpYnVzIG1hdXJpcyBzaXQgYW1ldCBsaWJlcm8gcHJldGl1bSBsYWNpbmlhLiBQZWxsZW50ZXNxdWUgZ3JhdmlkYSwgbWV0dXMgZWxlbWVudHVtIGlhY3VsaXMgY29udmFsbGlzLCBlbGl0IHR1cnBpcyBwcmV0aXVtIGVuaW0sIG1vbGVzdGllIHRlbXBvciBhbnRlIGlwc3VtIHNpdCBhbWV0IHRlbGx1cy4gRG9uZWMgY29tbW9kbyBuaXNsIGF0IGRhcGlidXMgdGluY2lkdW50LiBOYW0gbW9sbGlzIG5pYmggcXVpcyBwb3J0dGl0b3IgYmxhbmRpdC4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBoYXNlbGx1cyBldSB0aW5jaWR1bnQgbnVuYy4gRXRpYW0gc2l0IGFtZXQgZG9sb3IgY29uc2VxdWF0LCBydXRydW0gb2RpbyBhLCBpYWN1bGlzIHZlbGl0LiBEb25lYyBhbGlxdWV0IG5pc2kgbWFnbmEsIHZpdGFlIHBvcnRhIGxpZ3VsYSBjb25kaW1lbnR1bSBldC4gQ3VyYWJpdHVyIHNvbGxpY2l0dWRpbiBsb3JlbSB1cm5hLCBxdWlzIHZlc3RpYnVsdW0ganVzdG8gZmVybWVudHVtIHZpdGFlLiBWZXN0aWJ1bHVtIGFsaXF1YW0gdGluY2lkdW50IHNhcGllbiwgZ3JhdmlkYSBoZW5kcmVyaXQgZXggYmliZW5kdW0gYWMuIE9yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFN1c3BlbmRpc3NlIHNpdCBhbWV0IG51bmMgZXQgbG9yZW0gY29uZ3VlIHZvbHV0cGF0IHV0IHF1aXMgZHVpLlxuXG4gICAgICAgICAgICAgICAgTnVsbGFtIHBoYXJldHJhIG1hbGVzdWFkYSBtZXR1cywgc2l0IGFtZXQgbW9sZXN0aWUgZG9sb3IgcHVsdmluYXIgcXVpcy4gRnVzY2UgaW4gZWxpdCBlbGVtZW50dW0sIGZhY2lsaXNpcyBudW5jIGF0LCBzY2VsZXJpc3F1ZSBlbmltLiBVdCBmZXJtZW50dW0gbW9sZXN0aWUgYWNjdW1zYW4uIFNlZCBudW5jIG1hdXJpcywgZXVpc21vZCBpZCBlbmltIGVnZXQsIHByZXRpdW0gY29tbW9kbyB0dXJwaXMuIE1hdXJpcyBxdWlzIHBsYWNlcmF0IG5lcXVlLiBOYW0gdml0YWUgbWkgaWQgZGlhbSBncmF2aWRhIHNlbXBlci4gTmFtIG1vbGVzdGllIGF0IHB1cnVzIHNpdCBhbWV0IHRpbmNpZHVudC4gRG9uZWMgc2VkIG5pc2wgYWxpcXVhbSwgc29kYWxlcyBzZW0gYXQsIGZhY2lsaXNpcyBvcmNpLiBDdXJhYml0dXIgaWQgc2FwaWVuIHNpdCBhbWV0IGFudGUgZGFwaWJ1cyBtYXhpbXVzLlxuXG4gICAgICAgICAgICAgICAgVml2YW11cyBvZGlvIHZlbGl0LCB2ZW5lbmF0aXMgdml0YWUgYW50ZSBldSwgZmV1Z2lhdCB1bHRyaWNlcyBtYXVyaXMuIFByYWVzZW50IHZlc3RpYnVsdW0gZmV1Z2lhdCB0b3J0b3IgcXVpcyB1bGxhbWNvcnBlci4gUXVpc3F1ZSBkYXBpYnVzIG1pIGlkIGxpYmVybyBncmF2aWRhIHVsbGFtY29ycGVyLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBJbnRlZ2VyIG5lYyBmaW5pYnVzIGR1aS4gU3VzcGVuZGlzc2UgZmV1Z2lhdCBwbGFjZXJhdCB0ZWxsdXMsIGV0IGNvbmRpbWVudHVtIHF1YW0gZmFjaWxpc2lzIGFsaXF1YW0uIEN1cmFiaXR1ciBlcmF0IGxlbywgbGFvcmVldCBub24gZXJvcyBub24sIHZvbHV0cGF0IGhlbmRyZXJpdCBleC4gUHJvaW4gZXUgbWFnbmEgc2FnaXR0aXMsIGFsaXF1YW0gbGlndWxhIHF1aXMsIGNvbnZhbGxpcyBqdXN0by4gUGhhc2VsbHVzIG51bGxhIGFudGUsIGRpY3R1bSBzYWdpdHRpcyBlcm9zIGV0LCBwdWx2aW5hciB0ZW1wdXMgbWFzc2EuIFV0IHRvcnRvciBvZGlvLCB2ZWhpY3VsYSBhIGZlbGlzIHZlbCwgdml2ZXJyYSBwb3N1ZXJlIGVsaXQuIE51bmMgbm9uIHBvc3VlcmUgbmlzbC4gU2VkIGZhY2lsaXNpcyBsZWN0dXMgYXQgZXN0IG1hbGVzdWFkYSwgcG9ydGEgbWF0dGlzIGF1Z3VlIGZpbmlidXMuIFV0IGFsaXF1ZXQgYmliZW5kdW0gaWFjdWxpcy5cblxuICAgICAgICAgICAgICAgIER1aXMgc2l0IGFtZXQgY29uZ3VlIG1hZ25hLiBNYWVjZW5hcyBjb25ndWUgZGljdHVtIGV1aXNtb2QuIEFlbmVhbiBuaWJoIHZlbGl0LCBhdWN0b3Igdml0YWUgdG9ydG9yIHF1aXMsIGNvbmd1ZSBwZWxsZW50ZXNxdWUgbmlzaS4gSW50ZWdlciBsYW9yZWV0IG1hZ25hIHF1aXMgbGlndWxhIHJ1dHJ1bSBlZmZpY2l0dXIuIFNlZCBsaWd1bGEgZXgsIGVsZW1lbnR1bSBzaXQgYW1ldCBuZXF1ZSBhdCwgZGljdHVtIGZldWdpYXQgcHVydXMuIFNlZCBiaWJlbmR1bSwgbWFnbmEgYSBzdXNjaXBpdCB1bHRyaWNpZXMsIHF1YW0gZmVsaXMgZGFwaWJ1cyBhdWd1ZSwgbmVjIGVmZmljaXR1ciB0ZWxsdXMgbWF1cmlzIHZlbCBuaXNsLiBJbnRlZ2VyIHNlZCBhcmN1IGVyYXQuIEN1cmFiaXR1ciBhcmN1IG9kaW8sIGdyYXZpZGEgcnV0cnVtIGZhY2lsaXNpcyBpbiwgZXVpc21vZCBxdWlzIGlwc3VtLiBJbiBjdXJzdXMgZGlhbSBldSBpYWN1bGlzIGZhY2lsaXNpcy4gUGVsbGVudGVzcXVlIGlkIG51bmMgbmlzaS4gRHVpcyBldSBuaXNpIGRpZ25pc3NpbSwgcmhvbmN1cyBtYWduYSB2aXRhZSwgZ3JhdmlkYSBtaS4gTWFlY2VuYXMgc2FnaXR0aXMgc2FnaXR0aXMgZG9sb3IgYSBsdWN0dXMuIEFsaXF1YW0gc2FnaXR0aXMgZWxpdCBudW5jLCB2aXRhZSBkYXBpYnVzIG51bmMgcGVsbGVudGVzcXVlIHF1aXMuIFZpdmFtdXMgcG9ydHRpdG9yIG1hZ25hIG5lYyB1cm5hIHZpdmVycmEsIGFjIHNjZWxlcmlzcXVlIGxlbyBsYW9yZWV0LiBJbiBhY2N1bXNhbiBldWlzbW9kIGx1Y3R1cy4gTWFlY2VuYXMgc29sbGljaXR1ZGluIGV1IHRvcnRvciBzZWQgaWFjdWxpcy5cblxuICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBxdWlzIGZhY2lsaXNpcyBuaXNsLCBuZWMgdWxsYW1jb3JwZXIgbWV0dXMuIEFlbmVhbiBhY2N1bXNhbiBxdWFtIHZlbGl0LCBpZCBjb252YWxsaXMgZGlhbSBtYXhpbXVzIGNvbnNlcXVhdC4gRG9uZWMgbG9ib3J0aXMgY29tbW9kbyBtb2xlc3RpZS4gTWFlY2VuYXMgcXVpcyBzYXBpZW4gdm9sdXRwYXQsIHJob25jdXMgbGVvIGluLCB2ZW5lbmF0aXMgcXVhbS4gUGhhc2VsbHVzIHZpdGFlIHJob25jdXMgbnVuYywgYSBydXRydW0gbWkuIE1hdXJpcyBhbGlxdWV0LCB1cm5hIGFjIGRpZ25pc3NpbSBtYXhpbXVzLCBtYWduYSB0b3J0b3IgcnV0cnVtIG5pYmgsIGEgY29uc2VxdWF0IG1hc3NhIGxpZ3VsYSB1dCBvcmNpLiBTZWQgbWF4aW11cywgbmVxdWUgYSBldWlzbW9kIGZhY2lsaXNpcywgbGVjdHVzIGVzdCB1bHRyaWNlcyByaXN1cywgcXVpcyBjb25kaW1lbnR1bSBzZW0gZXggbm9uIGxhY3VzLlxuXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBhbnRlIGxlY3R1cywgaW50ZXJkdW0gaW4gdWxsYW1jb3JwZXIgc2l0IGFtZXQsIGV1aXNtb2QgaWQgbGliZXJvLiBNb3JiaSBwb3N1ZXJlIGxhY2luaWEgdmVuZW5hdGlzLiBJbnRlZ2VyIHJ1dHJ1bSwgdGVsbHVzIHNpdCBhbWV0IHZ1bHB1dGF0ZSBwdWx2aW5hciwgZXggbWFnbmEgc29kYWxlcyB2ZWxpdCwgYWMgaW1wZXJkaWV0IGxpYmVybyBxdWFtIGF0IG51bmMuIFNlZCB2ZW5lbmF0aXMgbnVsbGEgbGFjdXMsIGV1IHJob25jdXMgZGlhbSBhdWN0b3Igbm9uLiBRdWlzcXVlIHBlbGxlbnRlc3F1ZSBtaSBzZWQgdG9ydG9yIHVsbGFtY29ycGVyIGNvbmRpbWVudHVtLiBDcmFzIHNlbSBsb3JlbSwgc2FnaXR0aXMgaW4gYXVjdG9yIHF1aXMsIGNvbnNlY3RldHVyIGluIHNlbS4gTnVsbGFtIHZpdGFlIHZ1bHB1dGF0ZSB0b3J0b3IsIGEgdGluY2lkdW50IGVyb3MuIE51bGxhIGFsaXF1YW0gZHVpIG5vbiBvZGlvIGhlbmRyZXJpdCwgdmVsIHVsbGFtY29ycGVyIGR1aSB0ZW1wb3IuIFNlZCBsYW9yZWV0IHR1cnBpcyBxdWFtLCBldCBtb2xsaXMgbWkgdHJpc3RpcXVlIHNpdCBhbWV0LiBDdXJhYml0dXIgbm9uIGxhY3VzIHBoYXJldHJhLCB2aXZlcnJhIHNhcGllbiB2aXRhZSwgc2FnaXR0aXMgcmlzdXMuIE51bGxhbSBmZXVnaWF0IG9yY2kgbmVxdWUsIHNlZCBzZW1wZXIgbGliZXJvIGNvbnNlY3RldHVyIGF0LiBWaXZhbXVzIGJsYW5kaXQganVzdG8gYSB2ZWxpdCBkaWN0dW0gaWFjdWxpcy4gTW9yYmkgcG9ydHRpdG9yIG5pc2wgbm9uIGZlbGlzIGdyYXZpZGEsIHNpdCBhbWV0IGNvbnNlcXVhdCBsZWN0dXMgdnVscHV0YXRlLiBQcm9pbiBzb2RhbGVzLCB1cm5hIG5vbiBwdWx2aW5hciBjb25zZXF1YXQsIHNhcGllbiB2ZWxpdCBncmF2aWRhIG1hc3NhLCBvcm5hcmUgY29uc2VxdWF0IG9yY2kgZXN0IHBvcnRhIGp1c3RvLiBRdWlzcXVlIG5vbiBsaWd1bGEgbGlndWxhLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXG5cbiAgICAgICAgICAgICAgICBEb25lYyBxdWlzIHNhZ2l0dGlzIG1hdXJpcy4gVml2YW11cyBhdCBhbnRlIGEgZHVpIHRyaXN0aXF1ZSBzZW1wZXIgdmVsIGFjIGxlY3R1cy4gQ3JhcyBzZWQgdG9ydG9yIG9kaW8uIEN1cmFiaXR1ciBhdCBwb3J0YSBuaWJoLiBTdXNwZW5kaXNzZSBjb21tb2RvIHRvcnRvciBhYyBydXRydW0gZnJpbmdpbGxhLiBTdXNwZW5kaXNzZSB1dCBkb2xvciB2aXRhZSBmZWxpcyBzb2RhbGVzIGZhdWNpYnVzLiBWZXN0aWJ1bHVtIHNlbXBlciwgbWV0dXMgdml0YWUgdGVtcHVzIHRlbXB1cywgZGlhbSBqdXN0byBncmF2aWRhIHRlbGx1cywgc2l0IGFtZXQgcG9zdWVyZSBxdWFtIGlwc3VtIHNpdCBhbWV0IHRvcnRvci4gTWFlY2VuYXMgZXJvcyBhdWd1ZSwgcGxhY2VyYXQgYSBudWxsYSBub24sIGZldWdpYXQgcmhvbmN1cyBkaWFtLiBWaXZhbXVzIHNlZCBwcmV0aXVtIHNlbS4gRXRpYW0gc2NlbGVyaXNxdWUsIGVyYXQgaW4gcG9ydHRpdG9yIG1vbGxpcywgZG9sb3IgbGFjdXMgcG9ydHRpdG9yIGxhY3VzLCB2ZWwgcnV0cnVtIHVybmEgZG9sb3Igdml0YWUganVzdG8uIERvbmVjIGJpYmVuZHVtIHZpdmVycmEgdmFyaXVzLiBEb25lYyBmZXVnaWF0IG1hZ25hIGlkIG1hZ25hIHBoYXJldHJhLCBub24gdmVuZW5hdGlzIGxlY3R1cyBwb3J0YS4gSW4gYXJjdSBuaWJoLCBoZW5kcmVyaXQgZXUgZXN0IG5lYywgdmVoaWN1bGEgZXVpc21vZCBsZWN0dXMuIE51bGxhbSBhIG1vbGVzdGllIHRlbGx1cy4gTWFlY2VuYXMgZ3JhdmlkYSBzb2xsaWNpdHVkaW4gZmF1Y2lidXMuIEN1cmFiaXR1ciB2aXRhZSB2ZXN0aWJ1bHVtIG1ldHVzLlxuXG4gICAgICAgICAgICAgICAgTnVsbGEgZWdldCBsZWN0dXMgYXQgb3JjaSBiaWJlbmR1bSBwdWx2aW5hci4gRG9uZWMgcHJldGl1bSBtYWduYSBhIG1hc3NhIHNjZWxlcmlzcXVlIGVsZW1lbnR1bS4gU3VzcGVuZGlzc2UgYWMgZ3JhdmlkYSBlc3QuIE1hZWNlbmFzIG9ybmFyZSBkdWkgZW5pbSwgc2VkIHNvZGFsZXMgdGVsbHVzIHN1c2NpcGl0IHF1aXMuIFByb2luIGZldWdpYXQgbGFjdXMgdXQgbGliZXJvIHRlbXB1cyBjdXJzdXMuIER1aXMgZWdlc3RhcywgYXVndWUgcXVpcyBkYXBpYnVzIHVsdHJpY2llcywgbWkgbnVuYyBjb25kaW1lbnR1bSBzYXBpZW4sIGV0IHRpbmNpZHVudCBlc3QgdG9ydG9yIHNpdCBhbWV0IGRvbG9yLiBQaGFzZWxsdXMgZXUgbGFjdXMgdml2ZXJyYSwgb3JuYXJlIHVybmEgdmVsLCBjb25zZXF1YXQgcHVydXMuXG5cbiAgICAgICAgICAgICAgICBDdXJhYml0dXIgYXQgb3JuYXJlIG5lcXVlLCBxdWlzIGZhY2lsaXNpcyBlbGl0LiBTZWQgdmVsIG1hdXJpcyBpbiBkaWFtIGNvbW1vZG8gc29sbGljaXR1ZGluLiBOdW5jIGEgY3Vyc3VzIG5pc2wsIGF0IHJob25jdXMgZXguIER1aXMgb3JuYXJlIHVybmEgbm9uIG5pYmggZ3JhdmlkYSwgbmVjIGFjY3Vtc2FuIHR1cnBpcyBzb2RhbGVzLiBQZWxsZW50ZXNxdWUgc2l0IGFtZXQgdWx0cmljaWVzIHVybmEuIE1hdXJpcyB2ZWwgZmVybWVudHVtIGxvcmVtLiBDdXJhYml0dXIgbGFvcmVldCwgcHVydXMgdmVsIGZldWdpYXQgZmV1Z2lhdCwgdmVsaXQganVzdG8gbHVjdHVzIG1pLCBhIG1vbGxpcyBzZW0gbGVvIHZpdGFlIG1hdXJpcy4gVmVzdGlidWx1bSBkaWduaXNzaW0gdGVtcHVzIGV4IGV1IGZhdWNpYnVzLiBBbGlxdWFtIGVnZXQgbGVvIGV1IGFyY3UgZGljdHVtIGJsYW5kaXQuIFBlbGxlbnRlc3F1ZSB1bGxhbWNvcnBlciBsYWN1cyBwdWx2aW5hciB0dXJwaXMgdmVuZW5hdGlzIHZvbHV0cGF0LiBOdWxsYSBlZmZpY2l0dXIgcGVsbGVudGVzcXVlIHRlbGx1cywgdml0YWUgb3JuYXJlIG9kaW8gZmFjaWxpc2lzIGlkLiBQcmFlc2VudCBlZ2V0IGp1c3RvIHR1cnBpcy4gQ3VyYWJpdHVyIGNvbmRpbWVudHVtLCBsYWN1cyB1dCB2YXJpdXMgbW9sbGlzLCBuZXF1ZSByaXN1cyBmYXVjaWJ1cyBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgbGVvIGlwc3VtIGVnZXQgb2Rpby4gU2VkIHNlbXBlciB2ZXN0aWJ1bHVtIGxpYmVybywgYWMgZmV1Z2lhdCBuaWJoIHRyaXN0aXF1ZSBpZC4gSW4gYWxpcXVhbSBlZ2V0IHRlbGx1cyBpbiBjb21tb2RvLiBDcmFzIHNvZGFsZXMgc2VtcGVyIG5pc2wsIG5lYyBldWlzbW9kIGxlbyB1bGxhbWNvcnBlciBldC5cblxuICAgICAgICAgICAgICAgIEV0aWFtIHNlZCBwbGFjZXJhdCBtaS4gSW4gcGVsbGVudGVzcXVlIGN1cnN1cyBlcm9zIGluIGhlbmRyZXJpdC4gSW4gZmFjaWxpc2lzLCBtZXR1cyBhdCB2dWxwdXRhdGUgcHVsdmluYXIsIGZlbGlzIGVuaW0gZWZmaWNpdHVyIGFudGUsIGEgbGFvcmVldCBhdWd1ZSBkaWFtIHV0IGxpZ3VsYS4gTWFlY2VuYXMgbGVjdHVzIHRvcnRvciwgcGxhY2VyYXQgZXUgdGluY2lkdW50IHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhIG9kaW8uIERvbmVjIHZlbCBsb3JlbSBlcm9zLiBNb3JiaSBldCBlZmZpY2l0dXIgdG9ydG9yLCB2aXRhZSB2aXZlcnJhIGxvcmVtLiBDcmFzIGVsaXQgYW50ZSwgYXVjdG9yIGVnZXQgdHVycGlzIHNpdCBhbWV0LCBhY2N1bXNhbiBsYW9yZWV0IGFyY3UuIERvbmVjIHZlbCBkaWN0dW0gdmVsaXQuIEZ1c2NlIHV0IHZlbmVuYXRpcyBtYWduYS4gQ3JhcyBsYWNpbmlhIHVybmEgYSBsYWNpbmlhIGZldWdpYXQuIFV0IGF0IG9kaW8gdXQgbmVxdWUgdGluY2lkdW50IG1hbGVzdWFkYSBxdWlzIG5lYyBsYWN1cy4gRG9uZWMgZXVpc21vZCBmZWxpcyBpZCBjb25zZWN0ZXR1ciBlbGVpZmVuZC4gRXRpYW0gbmVjIGlwc3VtIGV1IG5pYmggbWF4aW11cyBhbGlxdWV0LiBBZW5lYW4gbmVjIGludGVyZHVtIHRvcnRvci5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyAgIChzdG9yZS5mb290ZXIgJiYgc3RvcmUuZm9vdGVyLmhlaWdodCAmJiBzdG9yZS5mb290ZXIuaGVpZ2h0ID4gMCkgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0aW9uLWRlc2stZm9vdGVyXCIgc3R5bGU9e2Zvb3RlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tIFwiLi9NZW51T3B0aW9uXCI7XG5pbXBvcnQgeyBJTklUX1NUWUxFLCBzYXZlUGFnZSB9IGZyb20gXCIuLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuaW1wb3J0IHtcbiAgICBOYXZiYXJFZGl0b3IsXG4gICAgQm9keUVkaXRvcixcbiAgICBTaWRlYmFyRWRpdG9yLFxuICAgIFNlY3Rpb25zRWRpdG9yLFxuICAgIEZvb3RlckVkaXRvclxufSBmcm9tIFwiLi9FbGVtZW50RWRpdG9yc1wiO1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlTWVudSA9ICh7c3RvcmUsIGRpc3BhdGNofSkgPT4ge1xuICAgIHN0b3JlLm5hdmJhciA9IHN0b3JlLm5hdmJhciB8fCB7fTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVhdGUtbWVudVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIiBvbkNsaWNrPXsoKSA9PiBzYXZlUGFnZShzdG9yZSl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uIHRleHQ9XCJOYXZiYXJcIiBjb250ZW50PXs8TmF2YmFyRWRpdG9yIG5hdmJhcj17c3RvcmUubmF2YmFyIHx8IElOSVRfU1RZTEUubmF2YmFyfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz59Lz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uIHRleHQ9XCJCb2R5XCIgY29udGVudD17PEJvZHlFZGl0b3IgYm9keT17c3RvcmUuYm9keSB8fCB7fX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fS8+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiU2lkZWJhclwiIGNvbnRlbnQ9ezxTaWRlYmFyRWRpdG9yLz59Lz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uIHRleHQ9XCJTZWN0aW9uc1wiIGNvbnRlbnQ9ezxTZWN0aW9uc0VkaXRvci8+fS8+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiRm9vdGVyXCIgY29udGVudD17PEZvb3RlckVkaXRvciBmb290ZXI9e3N0b3JlLmZvb3Rlcn0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dENvbG9yIGZyb20gJ3JlYWN0LWlucHV0LWNvbG9yJztcbmltcG9ydCBOYXZiYXJJdGVtc01hbmFnZXIgZnJvbSBcIi4vTmF2YmFySXRlbXNNYW5hZ2VyXCI7XG5pbXBvcnQgeyBBQ1RJT05TLCBJTklUX1NUWUxFIH0gZnJvbSBcIi4uL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5pbXBvcnQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgZnJvbSBcIi4uLy4uLy4uLy4uL2Z1bmN0aW9ucy9lbGVtZW50T3JQYXJlbnRIYXNDbGFzc1wiO1xuXG5leHBvcnQgY29uc3QgTmF2YmFyRWRpdG9yID0gKHtcbiAgICAgICAgbmF2YmFyLFxuICAgICAgICBkaXNwYXRjaFxuICAgIH0pID0+IHtcbiAgICBjb25zdCBbYmdDb2xvciwgc2V0QmdDb2xvcl0gPSB1c2VTdGF0ZShuYXZiYXIuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJyk7XG4gICAgY29uc3QgW3RleHRDb2xvciwgc2V0VGV4dENvbG9yXSA9IHVzZVN0YXRlKG5hdmJhci5jb2xvciB8fCAnIzAwMDAwMCcpO1xuICAgIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZShuYXZiYXIuaGVpZ2h0IHx8IDUpO1xuICAgIGNvbnN0IFtuYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUsIHNldE5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IGNsb3NlTmF2SXRlbXNNb2RhbCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnZXhpdC1idXR0b24nKVxuICAgICAgICAgICAgfHwgKCFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnZmxvYXRpbmctd2luZG93JylcbiAgICAgICAgICAgICAgICAmJiAhZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ21hbmFnZS1uYXYtaXRlbXMnKSlcbiAgICAgICAgICAgICAgICAmJiAhZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2RlbGV0ZS1idXR0b24nKVxuICAgICAgICAgICAgICAgICYmICFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnYWRkLWJ1dHRvbicpKSB7XG4gICAgICAgICAgICBzZXROYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBjbG9zZU5hdkl0ZW1zTW9kYWw7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yIG5hdmJhci1lZGl0b3JcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUgJiZcbiAgICAgICAgICAgICAgICA8TmF2YmFySXRlbXNNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIGluaXRBY3RpdmU9e25hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e25hdmJhci5pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kIGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17bmF2YmFyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZid9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJnQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfQkFDS0dST1VORF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICB0ZXh0IGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17bmF2YmFyLmNvbG9yIHx8ICcjMDAwMDAwJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9URVhUX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjNcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7ZS50YXJnZXQudmFsdWV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGVpZ2h0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGZvbnQgc2l6ZTpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYXZiYXIuZm9udFNpemV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9URVhUX1NJWkUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzcGFjaW5nLXNlbGVjdFwiPlNwYWNpbmc8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNwYWNpbmdPcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNwYWNpbmctc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hdmJhci5zcGFjaW5nT3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfU1BBQ0lOR19PUFRJT04sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nT3B0aW9uOiBOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPmZsZXgtc3RhcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5mbGV4LWVuZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPnNwYWNlLWFyb3VuZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbSBob3ZlcmFibGUgbWFuYWdlLW5hdi1pdGVtc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonI2NkZGMzOSd9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZSh0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNYW5hZ2UgbmF2YmFyIGl0ZW1zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJvZHlFZGl0b3IgPSAoe1xuICAgICAgICBib2R5LFxuICAgICAgICBkaXNwYXRjaFxuICAgIH0pID0+IHtcbiAgICBjb25zdCBbYmFja2dyb3VuZENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3JdID0gdXNlU3RhdGUoYm9keS5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnKTtcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKGJvZHkuY29sb3IgfHwgJyMwMDAwMDAnKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgIGJhY2tncm91bmQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtib2R5LmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZid9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkJPRFlfQkFDS0dST1VORF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICB0ZXh0IGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Ym9keS5jb2xvciB8fCAnIzAwMDAwMCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkJPRFlfVEVYVF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGZvbnQgc2l6ZTpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyNH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JvZHkuZm9udFNpemV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkJPRFlfRk9OVF9TSVpFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyRWRpdG9yID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIFNJREVCQVIgRURJVE9SIFBMQUNFSE9MREVSXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXJFZGl0b3IgPSAoe2Zvb3RlciwgZGlzcGF0Y2h9KSA9PiB7XG5cbiAgICBjb25zdCBbYmFja2dyb3VuZENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3JdID0gdXNlU3RhdGUoZm9vdGVyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZicpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZShmb290ZXIuY29sb3IgfHwgJyMwMDAwMDAnKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtmb290ZXIuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICB0ZXh0IGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Zm9vdGVyLmNvbG9yIHx8ICcjMDAwMDAwJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRk9PVEVSX1RFWFRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjVcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkZPT1RFUl9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBmb250IHNpemU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9vdGVyLmZvbnRTaXplIHx8IDE0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GT09URVJfRk9OVF9TSVpFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uc0VkaXRvciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yXCI+XG4gICAgICAgICAgICBTRUNUSU9OUyBFRElUT1IgUExBQ0VIT0xERVJcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzIGZyb20gXCIuLi8uLi8uLi8uLi9mdW5jdGlvbnMvZWxlbWVudE9yUGFyZW50SGFzQ2xhc3NcIjtcblxuY29uc3QgTWVudU9wdGlvbiA9ICh7dGV4dCwgY29udGVudH0pID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgbGV0IGNoZXZyb25DbGFzcyA9IGFjdGl2ZSA/ICdjaGV2cm9uIGNoZXZyb24tcmV2ZXJzZScgOiAnY2hldnJvbic7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGUudGFyZ2V0LCAnZGVzaWduLW1lbnUtZWRpdG9yJykpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1vcHRpb25cIlxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY2hldnJvbi5wbmdcIiBhbHQ9XCJjaGV2cm9uXCIgY2xhc3NOYW1lPXtjaGV2cm9uQ2xhc3N9Lz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHthY3RpdmUgJiYgY29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudU9wdGlvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmxvYXRpbmdXaW5kb3cgZnJvbSBcIi4uLy4uL0Zsb2F0aW5nV2luZG93XCI7XG5pbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSBcIi4uL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IE5hdmJhckl0ZW1zTWFuYWdlciA9ICh7aW5pdEFjdGl2ZSwgaXRlbXMsIGRpc3BhdGNofSkgPT4ge1xuICAgIGNvbnN0IFtuZWdhdGl2ZUlkLCBzZXROZWdhdGl2ZUlkXSA9IHVzZVN0YXRlKC0xKTtcblxuICAgIGNvbnN0IGl0ZW1zSW5wdXRzID0gaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2B0ZXh0LSR7aXRlbS5pZH1gfT5UZXh0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgdGV4dC0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2B0ZXh0LSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOicwIC40cmVtJ319XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0lURU1fVEVYVF9VUERBVEVELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2B1cmwtJHtpdGVtLmlkfWB9PlVSTDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGtleT17YHVybC0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2B1cmwtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udXJsfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjonMCAuNHJlbSd9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9JVEVNX1VSTF9VUERBVEVELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1yZWQgZGVsZXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0lURU1fSVRFTV9ERUxFVEVELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxGbG9hdGluZ1dpbmRvd1xuICAgICAgICAgICAgaW5pdEFjdGl2ZT17aW5pdEFjdGl2ZX1cbiAgICAgICAgICAgIG5lZWRzV2lkZT17dHJ1ZX1cbiAgICAgICAgICAgIGluaXRDb250ZW50cz17W1xuICAgICAgICAgICAgICAgIC4uLml0ZW1zSW5wdXRzLFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWRhcmstZ3JlZW4gYWRkLWJ1dHRvbiBob3ZlcmFibGVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9JVEVNX0FEREVELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG5lZ2F0aXZlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5lZ2F0aXZlSWQobmVnYXRpdmVJZCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkIG5ldyBpdGVtXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhckl0ZW1zTWFuYWdlciIsImltcG9ydCB7QUNUSU9OU30gZnJvbSBcIi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0hFSUdIVDpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckggPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckguaGVpZ2h0ID0gYWN0aW9uLnBheWxvYWQuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJIfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQmcgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckJnLmJhY2tncm91bmRDb2xvciA9IGFjdGlvbi5wYXlsb2FkLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQmd9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX1RFWFRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJUYyA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyVGMuY29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyVGN9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX1NQQUNJTkdfT1BUSU9OOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyU3BhY2luZyA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyU3BhY2luZy5zcGFjaW5nT3B0aW9uID0gYWN0aW9uLnBheWxvYWQuc3BhY2luZ09wdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyU3BhY2luZ307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfVEVYVF9TSVpFOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyRm9udFNpemUgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckZvbnRTaXplLmZvbnRTaXplID0gYWN0aW9uLnBheWxvYWQuZm9udFNpemU7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckZvbnRTaXplfVxuXG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSVRFTV9URVhUX1VQREFURUQ6XG4gICAgICAgICAgICBsZXQgbmV3TmF2YmFySXRlbXNUZXh0ID0gc3RhdGUubmF2YmFyLml0ZW1zO1xuICAgICAgICAgICAgbmV3TmF2YmFySXRlbXNUZXh0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IHVuZGVmaW5lZCAmJiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHQgPSBhY3Rpb24ucGF5bG9hZC50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVGV4dCA9IHsuLi5zdGF0ZS5uYXZiYXIsIGl0ZW1zOiBuZXdOYXZiYXJJdGVtc1RleHR9O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJDaGFuZ2VkSXRlbXNUZXh0fTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9JVEVNX1VSTF9VUERBVEVEOlxuICAgICAgICAgICAgbGV0IG5ld05hdmJhckl0ZW1zVXJsID0gc3RhdGUubmF2YmFyLml0ZW1zO1xuICAgICAgICAgICAgbmV3TmF2YmFySXRlbXNVcmwgPSBuZXdOYXZiYXJJdGVtc1VybC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IHVuZGVmaW5lZCAmJiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLml0ZW0sIHVybDogYWN0aW9uLnBheWxvYWQudXJsfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckNoYW5nZWRJdGVtc1VybCA9IHsuLi5zdGF0ZS5uYXZiYXIsIGl0ZW1zOiBuZXdOYXZiYXJJdGVtc1VybH07XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckNoYW5nZWRJdGVtc1VybH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQ6XG4gICAgICAgICAgICBjb25zdCBvbGROYXZiYXJJdGVtcyA9IHN0YXRlLm5hdmJhci5pdGVtcztcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckl0ZW1zQWZ0ZXJEZWxldGluZyA9IG9sZE5hdmJhckl0ZW1zLmZpbHRlcihpdGVtID0+XG4gICAgICAgICAgICAgICAgaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJBZnRlckRlbGV0aW9uID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJBZnRlckRlbGV0aW9uLml0ZW1zID0gbmV3TmF2YmFySXRlbXNBZnRlckRlbGV0aW5nO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJBZnRlckRlbGV0aW9ufTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9JVEVNX0FEREVEOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2SXRlbXMgPSBzdGF0ZS5uYXZiYXIuaXRlbXM7XG4gICAgICAgICAgICBuZXdOYXZJdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkLm5ld0l0ZW0pO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQWZ0ZXJBZGRpbmcgPSB7Li4uc3RhdGUubmF2YmFyLCBpdGVtczogbmV3TmF2SXRlbXN9O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJBZnRlckFkZGluZ307XG5cbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHkgPSB7Li4uc3RhdGUuYm9keX07XG4gICAgICAgICAgICBuZXdCb2R5LmJhY2tncm91bmRDb2xvciA9IGFjdGlvbi5wYXlsb2FkLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGJvZHk6IG5ld0JvZHl9O1xuICAgICAgICBjYXNlIEFDVElPTlMuQk9EWV9URVhUX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3Qm9keVRjID0gey4uLnN0YXRlLmJvZHl9O1xuICAgICAgICAgICAgbmV3Qm9keVRjLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBib2R5OiBuZXdCb2R5VGN9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlIEFDVElPTlMuQk9EWV9GT05UX1NJWkU6XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5RnMgPSB7Li4uc3RhdGUuYm9keX07XG4gICAgICAgICAgICBuZXdCb2R5RnMuZm9udFNpemUgPSBhY3Rpb24ucGF5bG9hZC5mb250U2l6ZTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGJvZHk6IG5ld0JvZHlGc307XG5cbiAgICAgICAgY2FzZSBBQ1RJT05TLkZPT1RFUl9CQUNLR1JPVU5EX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3Rm9vdGVyQmcgPSB7Li4uc3RhdGUuZm9vdGVyfTtcbiAgICAgICAgICAgIG5ld0Zvb3RlckJnLmJhY2tncm91bmRDb2xvciA9IGFjdGlvbi5wYXlsb2FkLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGZvb3RlcjogbmV3Rm9vdGVyQmd9O1xuICAgICAgICBjYXNlIEFDVElPTlMuRk9PVEVSX0hFSUdIVDpcbiAgICAgICAgICAgIGNvbnN0IG5ld0Zvb3RlckhlaWdodCA9IHsuLi5zdGF0ZS5mb290ZXJ9O1xuICAgICAgICAgICAgbmV3Rm9vdGVySGVpZ2h0LmhlaWdodCA9IGFjdGlvbi5wYXlsb2FkLmhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGZvb3RlcjogbmV3Rm9vdGVySGVpZ2h0fVxuICAgICAgICBjYXNlIEFDVElPTlMuRk9PVEVSX1RFWFRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdGb290ZXJUYyA9IHsuLi5zdGF0ZS5mb290ZXJ9O1xuICAgICAgICAgICAgbmV3Rm9vdGVyVGMuY29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGZvb3RlcjogbmV3Rm9vdGVyVGN9O1xuICAgICAgICBjYXNlIEFDVElPTlMuRk9PVEVSX0ZPTlRfU0laRTpcbiAgICAgICAgICAgIGNvbnN0IG5ld0Zvb3RlckZzID0gey4uLnN0YXRlLmZvb3Rlcn07XG4gICAgICAgICAgICBuZXdGb290ZXJGcy5mb250U2l6ZSA9IGFjdGlvbi5wYXlsb2FkLmZvbnRTaXplO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZm9vdGVyOiBuZXdGb290ZXJGc307XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBDcmVhdGVQYWdlV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVQYWdlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgICAgIDxDcmVhdGVQYWdlV3JhcHBlci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENyZWF0ZVBhZ2VDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvY3JlYXRlUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPENyZWF0ZVBhZ2VDb250YWluZXIgLz4sXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==