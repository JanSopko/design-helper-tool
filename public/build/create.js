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
      content = _ref.content,
      menuDispatch = _ref.menuDispatch,
      _ref$initActive = _ref.initActive,
      initActive = _ref$initActive === void 0 ? false : _ref$initActive;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(false),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL0Zsb2F0aW5nV2luZG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvRWxlbWVudEVkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvbWVudS9OYXZiYXJJdGVtc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvY3JlYXRlUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImVsZW1lbnRPclBhcmVudEhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsIkZsb2F0aW5nV2luZG93IiwiaW5pdEFjdGl2ZSIsImluaXRDb250ZW50cyIsIm5lZWRzV2lkZSIsIndpbmRvd0NsYXNzTmFtZSIsIm92ZXJUb3BDbGFzc05hbWUiLCJ3aWRlQ2xhc3NOYW1lIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VFZmZlY3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm1hcCIsIml0ZW0iLCJBQ1RJT05TIiwiTkFWQkFSX0hFSUdIVCIsIk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SIiwiTkFWQkFSX1RFWFRfQ09MT1IiLCJOQVZCQVJfVEVYVF9TSVpFIiwiTkFWQkFSX1NQQUNJTkdfT1BUSU9OIiwiTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEIiwiTkFWQkFSX0lURU1fVVJMX1VQREFURUQiLCJOQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQiLCJOQVZCQVJfSVRFTV9BRERFRCIsIkJPRFlfQkFDS0dST1VORF9DT0xPUiIsIkJPRFlfVEVYVF9DT0xPUiIsIkJPRFlfRk9OVF9TSVpFIiwiRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1IiLCJGT09URVJfVEVYVF9DT0xPUiIsIkZPT1RFUl9GT05UX1NJWkUiLCJGT09URVJfSEVJR0hUIiwiSU5JVF9TVFlMRSIsIm5hdmJhciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImluaXQiLCJsYXlvdXREYXRhIiwicGFnZVN0cnVjdHVyZSIsInNhdmVQYWdlIiwicGF5bG9hZCIsImF4aW9zIiwicG9zdCIsInBhZ2VIYXNoIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwiYWxlcnQiLCJDcmVhdGVQYWdlV3JhcHBlciIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhdmFpbGFibGVTcGFjaW5nT3B0aW9ucyIsImZsZXhTdGFydCIsImZsZXhFbmQiLCJzcGFjZUFyb3VuZCIsIm5hdkl0ZW1zTmVlZE1hcmdpbiIsInNwYWNpbmdPcHRpb24iLCJnZXRTcGFjaW5nU3R5bGUiLCJnZXROYXZJdGVtc1N0eWxlIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpbiIsIkNyZWF0aW9uRGVzayIsInN0b3JlIiwiYm9keVN0eWxlIiwiYm9keSIsIm5hdkl0ZW1zIiwiaXRlbXMiLCJzcGFjaW5nIiwibmF2U3R5bGUiLCJmb290ZXJTdHlsZSIsImZvb3RlciIsIm5hdkl0ZW1zU3R5bGUiLCJ1cmwiLCJ0ZXh0IiwibWVudVRleHRzIiwic2lkZWJhciIsInNlY3Rpb25zIiwibWVudU9wdGlvbkFjdGl2ZSIsImdldE1lbnVPcHRpb25BY3RpdmUiLCJtZW51UmVkdWNlciIsImN1cnJlbnRJdGVtIiwiYWN0aXZlT3B0aW9uIiwiQ3JlYXRlTWVudSIsImFjdGl2ZU1lbnVPcHRpb24iLCJtZW51RGlzcGF0Y2giLCJOYXZiYXJFZGl0b3IiLCJiZ0NvbG9yIiwic2V0QmdDb2xvciIsInRleHRDb2xvciIsInNldFRleHRDb2xvciIsInNldEhlaWdodCIsIm5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZSIsInNldE5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZSIsImNsb3NlTmF2SXRlbXNNb2RhbCIsImUiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJvbmNsaWNrIiwidHlwZSIsImhleCIsInZhbHVlIiwiZm9udFNpemUiLCJOdW1iZXIiLCJwYXJzZUludCIsIkJvZHlFZGl0b3IiLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJzZXRDb2xvciIsIlNpZGViYXJFZGl0b3IiLCJGb290ZXJFZGl0b3IiLCJTZWN0aW9uc0VkaXRvciIsIk1lbnVPcHRpb24iLCJjb250ZW50IiwiY2hldnJvbkNsYXNzIiwiaGFuZGxlQ2xpY2siLCJOYXZiYXJJdGVtc01hbmFnZXIiLCJuZWdhdGl2ZUlkIiwic2V0TmVnYXRpdmVJZCIsIml0ZW1zSW5wdXRzIiwiaWQiLCJuZXdJdGVtIiwiYWN0aW9uIiwibmV3TmF2YmFySCIsIm5ld05hdmJhckJnIiwibmV3TmF2YmFyVGMiLCJuZXdOYXZiYXJTcGFjaW5nIiwibmV3TmF2YmFyRm9udFNpemUiLCJuZXdOYXZiYXJJdGVtc1RleHQiLCJmb3JFYWNoIiwidW5kZWZpbmVkIiwibmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVGV4dCIsIm5ld05hdmJhckl0ZW1zVXJsIiwibmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVXJsIiwib2xkTmF2YmFySXRlbXMiLCJuZXdOYXZiYXJJdGVtc0FmdGVyRGVsZXRpbmciLCJmaWx0ZXIiLCJuZXdOYXZiYXJBZnRlckRlbGV0aW9uIiwibmV3TmF2SXRlbXMiLCJwdXNoIiwibmV3TmF2YmFyQWZ0ZXJBZGRpbmciLCJuZXdCb2R5IiwibmV3Qm9keVRjIiwibmV3Qm9keUZzIiwibmV3Rm9vdGVyQmciLCJuZXdGb290ZXJIZWlnaHQiLCJuZXdGb290ZXJUYyIsIm5ld0Zvb3RlckZzIiwiQ3JlYXRlUGFnZUNvbnRhaW5lciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLE9BQUQsRUFBVUMsU0FBVixFQUF3QjtBQUNwRCxNQUFJRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCRixTQUEzQixDQUFKLEVBQTJDO0FBQ3ZDLFdBQU8sSUFBUDtBQUNILEdBRkQsTUFFTyxJQUFJRCxPQUFPLENBQUNJLGFBQVosRUFBMkI7QUFDOUIsV0FBT0wsdUJBQXVCLENBQUNDLE9BQU8sQ0FBQ0ksYUFBVCxFQUF3QkgsU0FBeEIsQ0FBOUI7QUFDSDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDQVBEOztBQVNlRixzRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRUEsSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFnRTtBQUFBLDZCQUE5REMsVUFBOEQ7QUFBQSxNQUE5REEsVUFBOEQsZ0NBQWpELEtBQWlEO0FBQUEsK0JBQTFDQyxZQUEwQztBQUFBLE1B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QTFCO0FBdEZSO0FBd0ZILENBekZEOztBQTJGZXBHLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTs7SUFFcUJxRyxtQjs7Ozs7QUFDakIsaUNBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVRO0FBQ0wsMEJBQ0ksc0ZBQ0ksNERBQUMsK0RBQUQsT0FESixlQUVJLDREQUFDLHVGQUFELE9BRkosQ0FESjtBQU1IOzs7O0VBWjRDQyw2Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7OztBQ0p2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLHVFQUFELE9BREosRUFFSXRELE1BQU0sQ0FBQ3VELFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLE1BQS9CLENBRkosRSIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZsb2F0aW5nV2luZG93ID0gKHtpbml0QWN0aXZlID0gZmFsc2UsIGluaXRDb250ZW50cyA9IFtdLCBuZWVkc1dpZGUgPSBmYWxzZX0pID0+IHtcbiAgICBjb25zdCB3aW5kb3dDbGFzc05hbWUgPSBcImZsb2F0aW5nLXdpbmRvd1wiO1xuICAgIGNvbnN0IG92ZXJUb3BDbGFzc05hbWUgPSBcIm92ZXItdG9wXCI7XG4gICAgY29uc3Qgd2lkZUNsYXNzTmFtZSA9ICcgd2luZG93LXdpZGUnO1xuXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdChcbiAgICAgICAgKCkgPT4gc2V0QWN0aXZlKGluaXRBY3RpdmUpLFxuICAgICAgICBbXVxuICAgICk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYWN0aXZlID8gd2luZG93Q2xhc3NOYW1lIDogYCR7d2luZG93Q2xhc3NOYW1lfSAke292ZXJUb3BDbGFzc05hbWV9YDtcbiAgICBpZiAobmVlZHNXaWRlKSBjbGFzc05hbWUgKz0gd2lkZUNsYXNzTmFtZTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCd9fT5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGl0LWJ1dHRvbiBidXR0b24tcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldEFjdGl2ZShmYWxzZSl9fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbml0Q29udGVudHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdXaW5kb3c7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCB7IENyZWF0aW9uRGVzayB9IGZyb20gXCIuL0NyZWF0aW9uRGVza1wiO1xuaW1wb3J0IHsgQ3JlYXRlTWVudSB9IGZyb20gXCIuL21lbnUvQ3JlYXRlTWVudVwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgTkFWQkFSX0hFSUdIVDogJ3NldE5hdmJhckhlaWdodCcsXG4gICAgTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1I6ICdzZXROYXZiYXJCYWNrZ3JvdW5kQ29sb3InLFxuICAgIE5BVkJBUl9URVhUX0NPTE9SOiAnc2V0TmF2YmFyVGV4dENvbG9yJyxcbiAgICBOQVZCQVJfVEVYVF9TSVpFOiAnc2V0TmF2YmFyVGV4dFNpemUnLFxuICAgIE5BVkJBUl9TUEFDSU5HX09QVElPTjogJ3NldE5hdmJhclNwYWNpbmdPcHRpb24nLFxuICAgIE5BVkJBUl9JVEVNX1RFWFRfVVBEQVRFRDogJ3NldE5hdmJhckl0ZW1UZXh0JyxcbiAgICBOQVZCQVJfSVRFTV9VUkxfVVBEQVRFRDogJ3NldE5hdmJhckl0ZW1VcmwnLFxuICAgIE5BVkJBUl9JVEVNX0lURU1fREVMRVRFRDogJ2RlbGV0ZU5hdmJhckl0ZW0nLFxuICAgIE5BVkJBUl9JVEVNX0FEREVEOiAnYWRkZWROYXZiYXJJdGVtJyxcblxuICAgIEJPRFlfQkFDS0dST1VORF9DT0xPUjogJ3NldEJvZHlCYWNrcm91bmRDb2xvcicsXG4gICAgQk9EWV9URVhUX0NPTE9SOiAnc2V0Qm9keVRleHRDb2xvcicsXG4gICAgQk9EWV9GT05UX1NJWkU6ICdzZXRCb2R5Rm9udFNpemUnLFxuXG4gICAgRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1I6ICdzZXRGb290ZXJCYWNrZ3JvdW5kQ29sb3InLFxuICAgIEZPT1RFUl9URVhUX0NPTE9SOiAnc2V0Rm9vdGVyVGV4dENvbG9yJyxcbiAgICBGT09URVJfRk9OVF9TSVpFOiAnc2V0Rm9vdGVyRm9udFNpemUnLFxuICAgIEZPT1RFUl9IRUlHSFQ6ICdzZXRGb290ZXJIZWlnaHQnXG59O1xuXG5leHBvcnQgY29uc3QgSU5JVF9TVFlMRSA9IHtcbiAgICBuYXZiYXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2FhYWFhYScsXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIGhlaWdodDogNVxuICAgIH1cbn07XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxheW91dERhdGEucGFnZVN0cnVjdHVyZTtcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVQYWdlID0gcGF5bG9hZCA9PiB7XG4gICAgcGF5bG9hZC5uYXZiYXIuaGVpZ2h0ID0gcGF5bG9hZC5uYXZiYXIuaGVpZ2h0IHx8IElOSVRfU1RZTEUubmF2YmFyLmhlaWdodDsgLy9AdG9kbyByZWZhY3RvciFcbiAgICBheGlvcy5wb3N0KGAvZGF0YS91cGRhdGVfcGFnZS8ke2xheW91dERhdGEucGFnZUhhc2h9YCwge3BheWxvYWR9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVQYWdlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge30sIGluaXQpO1xuXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cblxuICAgICAgICAgICAgPENyZWF0ZU1lbnUgc3RvcmU9e3N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgICAgIDxDcmVhdGlvbkRlc2sgc3RvcmU9e3N0YXRlfS8+XG4gICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSU5JVF9TVFlMRSB9IGZyb20gXCIuL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zID0ge1xuICAgIGZsZXhTdGFydDogMSxcbiAgICBmbGV4RW5kOiAyLFxuICAgIHNwYWNlQXJvdW5kOiAzXG59O1xuXG5jb25zdCBuYXZJdGVtc05lZWRNYXJnaW4gPSBzcGFjaW5nT3B0aW9uID0+IHtcbiAgICByZXR1cm4gc3BhY2luZ09wdGlvbiAhPT0gYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuc3BhY2VBcm91bmQ7XG59XG5cbmNvbnN0IGdldFNwYWNpbmdTdHlsZSA9IHNwYWNpbmdPcHRpb24gPT4ge1xuICAgIHN3aXRjaCAoc3BhY2luZ09wdGlvbikge1xuICAgICAgICBjYXNlIGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLmZsZXhFbmQ6XG4gICAgICAgICAgICByZXR1cm4ge2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCd9O1xuICAgICAgICBjYXNlIGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLnNwYWNlQXJvdW5kOlxuICAgICAgICAgICAgcmV0dXJuIHtkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ307XG4gICAgICAgIGNhc2UgYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuZmxleFN0YXJ0OlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCd9O1xuICAgIH1cbn07XG5cbmNvbnN0IGdldE5hdkl0ZW1zU3R5bGUgPSBzcGFjaW5nT3B0aW9uID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHt0ZXh0RGVjb3JhdGlvbjonbm9uZScsY29sb3I6J2luaGVyaXQnfTtcbiAgICBpZiAobmF2SXRlbXNOZWVkTWFyZ2luKHNwYWNpbmdPcHRpb24pKSB7XG4gICAgICAgIHN0eWxlLm1hcmdpbiA9ICcwIDJyZW0nO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGlvbkRlc2sgPSAoe3N0b3JlID0ge319KSA9PiB7XG5cbiAgICBzdG9yZS5uYXZiYXIgPSBzdG9yZS5uYXZiYXIgfHwgSU5JVF9TVFlMRS5uYXZiYXI7XG4gICAgbGV0IGJvZHlTdHlsZSA9IHN0b3JlLmJvZHkgfHwge307XG4gICAgbGV0IG5hdkl0ZW1zID0gc3RvcmUubmF2YmFyLml0ZW1zIHx8IFtdO1xuICAgIGNvbnN0IHNwYWNpbmcgPSBnZXRTcGFjaW5nU3R5bGUoc3RvcmUubmF2YmFyLnNwYWNpbmdPcHRpb24pO1xuICAgIGNvbnN0IG5hdlN0eWxlID0gey4uLnN0b3JlLm5hdmJhciwgaGVpZ2h0OiBgJHtzdG9yZS5uYXZiYXIuaGVpZ2h0IHx8IDV9cmVtYCwgLi4uc3BhY2luZ307XG4gICAgbGV0IGZvb3RlclN0eWxlID0gey4uLnN0b3JlLmZvb3RlciwgaGVpZ2h0OiBgJHtzdG9yZS5mb290ZXIuaGVpZ2h0IHx8IDB9cmVtYH07XG4gICAgLy8gbmF2U3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAvLyBuYXZTdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xuICAgIGNvbnN0IG5hdkl0ZW1zU3R5bGUgPSBnZXROYXZJdGVtc1N0eWxlKHN0b3JlLm5hdmJhci5zcGFjaW5nT3B0aW9uKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVhdGlvbi1kZXNrXCIgc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICA8bmF2IHN0eWxlPXtuYXZTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17bmF2SXRlbXNTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBldSBlcmF0IGxvYm9ydGlzLCB2YXJpdXMgYW50ZSBhdCwgYWNjdW1zYW4gdGVsbHVzLiBDdXJhYml0dXIgdmFyaXVzLCBuZXF1ZSBpZCBkaWN0dW0gdWxsYW1jb3JwZXIsIG5pc2kgbGliZXJvIGVnZXN0YXMgZXN0LCB2ZWwgdmVuZW5hdGlzIGV4IGlwc3VtIGF0IGVzdC4gVXQgaW4gbGFjdXMgYW50ZS4gQ3VyYWJpdHVyIGZhdWNpYnVzIHJpc3VzIG1hdXJpcywgYSB0aW5jaWR1bnQgbWV0dXMgbW9sbGlzIGV1LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgUGVsbGVudGVzcXVlIGEgZXN0IGZhY2lsaXNpcywgZWdlc3RhcyB1cm5hIGV0LCBwaGFyZXRyYSBhcmN1LiBOYW0gaW1wZXJkaWV0IGRpY3R1bSBudWxsYSBpbiB2b2x1dHBhdC4gQ3JhcyB0ZW1wdXMgdXQgb3JjaSBpbiBjb25kaW1lbnR1bS4gRnVzY2UgbHVjdHVzLCBkdWkgZWdldCBibGFuZGl0IG1hdHRpcywgbGFjdXMgcHVydXMgY29uc2VjdGV0dXIgbG9yZW0sIG5lYyBtb2xlc3RpZSBuZXF1ZSBlc3QgbHVjdHVzIGZlbGlzLiBJbiBoYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdC4gVml2YW11cyBtYWduYSBudW5jLCBhY2N1bXNhbiBpbiBtYWxlc3VhZGEgaWQsIGdyYXZpZGEgZmV1Z2lhdCB0ZWxsdXMuIFBoYXNlbGx1cyBhIGVzdCB2aXRhZSByaXN1cyBpbnRlcmR1bSBncmF2aWRhLiBVdCBzZW1wZXIgdGVsbHVzIGV0IGZlbGlzIG1heGltdXMsIHNpdCBhbWV0IHRpbmNpZHVudCBtZXR1cyBsYWNpbmlhLlxuXG4gICAgICAgICAgICAgICAgUGVsbGVudGVzcXVlIHZlbCBsaWd1bGEgb3JuYXJlLCBkaWduaXNzaW0gcmlzdXMgYWNjdW1zYW4sIHBvc3VlcmUgYXVndWUuIEludGVnZXIgb3JjaSBsaWJlcm8sIHBsYWNlcmF0IGVnZXQgYXVjdG9yIGFjLCBhbGlxdWV0IGV1IHR1cnBpcy4gRG9uZWMgc2l0IGFtZXQgaW50ZXJkdW0ganVzdG8uIEludGVnZXIgdm9sdXRwYXQgZXQgbWF1cmlzIGV0IGVmZmljaXR1ci4gSW50ZWdlciBlZmZpY2l0dXIgc2FwaWVuIGV1IG1hbGVzdWFkYSBjb25zZWN0ZXR1ci4gUGhhc2VsbHVzIHRpbmNpZHVudCwgdXJuYSBpZCBlZmZpY2l0dXIgZmFjaWxpc2lzLCBkaWFtIGZlbGlzIGZhY2lsaXNpcyBlbmltLCBhYyBjb25zZXF1YXQgZG9sb3IgcHVydXMgdXQgdXJuYS4gTmFtIGF0IG1heGltdXMgbWF1cmlzLiBQcmFlc2VudCB0b3J0b3Igb2RpbywgbWFsZXN1YWRhIHZlbCBkaWFtIHV0LCBzb2xsaWNpdHVkaW4gcGxhY2VyYXQgbGlndWxhLiBFdGlhbSBldCBzb2RhbGVzIG5pc2kuIERvbmVjIGV1IHJpc3VzIGFsaXF1YW0sIHBvc3VlcmUganVzdG8gbmVjLCBoZW5kcmVyaXQgbnVuYy4gU3VzcGVuZGlzc2UgaGVuZHJlcml0IGNvbW1vZG8gbGVvIG5vbiBwcmV0aXVtLiBTZWQgZGlnbmlzc2ltIGltcGVyZGlldCBsZW8gc2VkIHBvcnRhLiBOdWxsYSBibGFuZGl0IGFyY3UgaWQgbnVuYyBlbGVpZmVuZCBpbXBlcmRpZXQgZXUgc2VkIG5pc2kuIFNlZCBsaWd1bGEgbWFzc2EsIGNvbnZhbGxpcyB0aW5jaWR1bnQgbnVuYyBxdWlzLCBzZW1wZXIgY29uc2VjdGV0dXIgbGFjdXMuIE1hZWNlbmFzIHZlbCBudWxsYSB2ZWxpdC5cblxuICAgICAgICAgICAgICAgIEFsaXF1YW0gc2VkIHF1YW0gbGliZXJvLiBQcm9pbiBhdCBhbGlxdWV0IG5pc2wsIGV1IGVmZmljaXR1ciBsaWd1bGEuIEN1cmFiaXR1ciBhIHRpbmNpZHVudCB2ZWxpdC4gUHJhZXNlbnQgYWNjdW1zYW4sIG9yY2kgaW4gbW9sbGlzIHNlbXBlciwgZGlhbSB0ZWxsdXMgZXVpc21vZCBxdWFtLCB2ZXN0aWJ1bHVtIGdyYXZpZGEgb3JjaSBmZWxpcyBzaXQgYW1ldCBleC4gTWF1cmlzIG1vbGVzdGllIGV4IGlkIHNhcGllbiBlbGVtZW50dW0gdWxsYW1jb3JwZXIuIEN1cmFiaXR1ciBuZXF1ZSByaXN1cywgZnJpbmdpbGxhIHZlbCBwb3N1ZXJlIGV0LCBiaWJlbmR1bSB1dCBkb2xvci4gUHJhZXNlbnQgZXggbWksIG1vbGxpcyBpbiB0aW5jaWR1bnQgc2l0IGFtZXQsIHNvZGFsZXMgbmVjIGR1aS4gVXQgZGljdHVtIGltcGVyZGlldCBqdXN0byBpZCBzdXNjaXBpdC4gQ3JhcyBjdXJzdXMsIHF1YW0gdml0YWUgdWx0cmljaWVzIGZpbmlidXMsIG1hc3NhIGp1c3RvIHByZXRpdW0gc2VtLCBpbiB2ZWhpY3VsYSBtYWduYSBhbnRlIHZlbCBlbmltLiBEb25lYyBmaW5pYnVzIGVyb3MgYSBsYW9yZWV0IGNvbnNlY3RldHVyLiBBZW5lYW4gYXVndWUgb3JjaSwgZ3JhdmlkYSBpZCBtYXR0aXMgcXVpcywgZmV1Z2lhdCBwZWxsZW50ZXNxdWUgbWkuXG5cbiAgICAgICAgICAgICAgICBWZXN0aWJ1bHVtIGJpYmVuZHVtIHBlbGxlbnRlc3F1ZSBtaSBjdXJzdXMgc29kYWxlcy4gTnVsbGEgdXQgbGFjaW5pYSB0ZWxsdXMsIHZpdGFlIHVsbGFtY29ycGVyIG5pYmguIE1hdXJpcyB2aXRhZSBwaGFyZXRyYSBsZW8uIE1vcmJpIGluIGRpYW0gZXUgYXVndWUgdGVtcHVzIHBoYXJldHJhLiBNYXVyaXMgaWFjdWxpcyBudWxsYSBub24gcmlzdXMgcGxhY2VyYXQgYWxpcXVhbSBhIHZpdGFlIG1hdXJpcy4gTW9yYmkgbmVjIG51bmMgdml0YWUgcXVhbSBhdWN0b3IgdGVtcHVzLiBNYWVjZW5hcyBsYWNpbmlhIHNvbGxpY2l0dWRpbiBsZW8uXG5cbiAgICAgICAgICAgICAgICBTZWQgb2RpbyBmZWxpcywgZmV1Z2lhdCB2aXRhZSB1bGxhbWNvcnBlciB1bGxhbWNvcnBlciwgbWF0dGlzIGxhb3JlZXQgbWFnbmEuIE1vcmJpIGNvbnZhbGxpcyBhbGlxdWFtIGZhY2lsaXNpcy4gUGVsbGVudGVzcXVlIGFjIHZlbGl0IG5pc2wuIFBlbGxlbnRlc3F1ZSBvcm5hcmUgdXQgbGFjdXMgbmVjIG1hbGVzdWFkYS4gQ3VyYWJpdHVyIGZpbmlidXMsIGZlbGlzIHF1aXMgZGFwaWJ1cyBtYXhpbXVzLCBkaWFtIG5pc2wgZmluaWJ1cyB2ZWxpdCwgdmVsIG9ybmFyZSBxdWFtIG1hc3NhIHV0IGxlY3R1cy4gUHJvaW4gbWV0dXMgYXVndWUsIHNjZWxlcmlzcXVlIHZlbCBleCBuZWMsIHBvcnR0aXRvciBjb21tb2RvIGVsaXQuIFBlbGxlbnRlc3F1ZSBhIG9yY2kgdHVycGlzLiBQZWxsZW50ZXNxdWUgaW1wZXJkaWV0IGx1Y3R1cyBuaXNsLCBpbiBzY2VsZXJpc3F1ZSBleCBjb25zZXF1YXQgaWQuXG5cbiAgICAgICAgICAgICAgICBEb25lYyBzb2xsaWNpdHVkaW4sIGVyYXQgbm9uIHNjZWxlcmlzcXVlIG1vbGVzdGllLCBtYXVyaXMgZXJvcyBmYXVjaWJ1cyBsb3JlbSwgc2VkIGJpYmVuZHVtIG1hdXJpcyBuaXNpIHNlZCBzZW0uIE1hdXJpcyBhdCBkaWduaXNzaW0gaXBzdW0uIFV0IHRyaXN0aXF1ZSwgYXJjdSBub24gdm9sdXRwYXQgZWxlaWZlbmQsIHJpc3VzIGVzdCBwb3J0dGl0b3IgbnVuYywgcXVpcyBsYWNpbmlhIGR1aSBkaWFtIGV0IGxlY3R1cy4gRG9uZWMgZGlnbmlzc2ltIGVsZWlmZW5kIGFsaXF1YW0uIE51bmMgdGVtcG9yIGxhb3JlZXQgZW5pbSwgdXQgaWFjdWxpcyBuaWJoIHRlbXBvciBzaXQgYW1ldC4gTnVuYyBsYW9yZWV0IGxvcmVtIHZlbGl0LCBldSBsb2JvcnRpcyB0dXJwaXMgdWx0cmljaWVzIGVnZXQuIFNlZCBhY2N1bXNhbiBmYWNpbGlzaXMgdmVsaXQsIHZ1bHB1dGF0ZSB2YXJpdXMgZXggZGFwaWJ1cyBub24uIE5hbSBhbGlxdWV0IHVsdHJpY2VzIGVmZmljaXR1ci4gVXQgbmVjIHNhcGllbiBwb3N1ZXJlLCBhY2N1bXNhbiBsaWd1bGEgbm9uLCBsdWN0dXMgYXVndWUuIFZlc3RpYnVsdW0gdGluY2lkdW50IGlhY3VsaXMgbnVuYyBzaXQgYW1ldCB0cmlzdGlxdWUuIE51bGxhbSBpZCBhcmN1IHZpdGFlIGFyY3UgZmluaWJ1cyBzb2RhbGVzLiBFdGlhbSBzZWQgYWxpcXVldCBlbGl0LCBlZ2V0IGZyaW5naWxsYSBsZWN0dXMuXG5cbiAgICAgICAgICAgICAgICBTZWQgaWFjdWxpcyBqdXN0byBldSBqdXN0byBlZ2VzdGFzLCBuZWMgcG9zdWVyZSBlcm9zIGN1cnN1cy4gTW9yYmkgbWF1cmlzIG5pYmgsIGFjY3Vtc2FuIHNpdCBhbWV0IGVzdCBzaXQgYW1ldCwgZnJpbmdpbGxhIG1vbGVzdGllIG5lcXVlLiBOdW5jIGV0IHR1cnBpcyBxdWlzIGRpYW0gcGhhcmV0cmEgcnV0cnVtLiBBZW5lYW4gaWQgbmVxdWUgZGlhbS4gRG9uZWMgbmliaCBhdWd1ZSwgdmVuZW5hdGlzIGluIGxvYm9ydGlzIHZlbCwgdWx0cmljaWVzIGZpbmlidXMgYW50ZS4gRG9uZWMgaWQgY3Vyc3VzIGxlby4gU2VkIGRpZ25pc3NpbSBpcHN1bSBhdCBtb2xsaXMgcmhvbmN1cy5cblxuICAgICAgICAgICAgICAgIFN1c3BlbmRpc3NlIHBvcnR0aXRvciBzY2VsZXJpc3F1ZSBsaWJlcm8sIGluIGFsaXF1YW0gc2VtIGVsZWlmZW5kIHNlZC4gTWF1cmlzIHZpdGFlIHBoYXJldHJhIGxlby4gUHJhZXNlbnQgZnJpbmdpbGxhIG1ldHVzIGVnZXQgYW50ZSBtYXR0aXMsIGVnZXQgaW1wZXJkaWV0IGVsaXQgZGlnbmlzc2ltLiBEb25lYyBldSB2b2x1dHBhdCBuaXNpLiBOYW0gZWdlc3RhcyBpcHN1bSBwdXJ1cywgbm9uIGFsaXF1ZXQgb3JjaSBwZWxsZW50ZXNxdWUgbm9uLiBTZWQgdXQgdmVoaWN1bGEgdXJuYSwgbm9uIGZlcm1lbnR1bSByaXN1cy4gTmFtIG5vbiBmZXVnaWF0IGxpZ3VsYSwgdmVsIGNvbnNlcXVhdCBmZWxpcy4gU3VzcGVuZGlzc2UgaW4gdmVzdGlidWx1bSBhbnRlLiBTZWQgb3JuYXJlIGF1Y3RvciBsZW8sIHNpdCBhbWV0IG1vbGVzdGllIGlwc3VtIGN1cnN1cyBxdWlzLiBDcmFzIHNlZCBzb2xsaWNpdHVkaW4gcHVydXMuIE51bGxhIGVnZXQgdWx0cmljaWVzIG9yY2ksIHF1aXMgZ3JhdmlkYSBuaXNsLiBWZXN0aWJ1bHVtIHZ1bHB1dGF0ZSBsYWNpbmlhIGNvbW1vZG8uIFV0IHBsYWNlcmF0IGFudGUgYXQgc3VzY2lwaXQgZmluaWJ1cy5cblxuICAgICAgICAgICAgICAgIE51bmMgZ3JhdmlkYSBudWxsYSBxdWlzIHRlbGx1cyBjb252YWxsaXMsIG5lYyBlbGVpZmVuZCBzZW0gcHJldGl1bS4gQWxpcXVhbSBlbGVpZmVuZCBmYWNpbGlzaXMgcG9ydHRpdG9yLiBJbiBhbnRlIGVuaW0sIGN1cnN1cyB2aXRhZSBzb2RhbGVzIGFjLCBzZW1wZXIgaWQgZHVpLiBTdXNwZW5kaXNzZSBldCBuaXNsIHV0IGR1aSB1bGxhbWNvcnBlciBiaWJlbmR1bSBldCB1dCBlcm9zLiBOdWxsYW0gaXBzdW0gbWV0dXMsIGNvbnNlY3RldHVyIHZpdGFlIGJpYmVuZHVtIGEsIGFsaXF1YW0gc2VkIG5lcXVlLiBTdXNwZW5kaXNzZSBzZW1wZXIgbmliaCByaXN1cywgcXVpcyBwb3J0dGl0b3IgdG9ydG9yIGxvYm9ydGlzIHNpdCBhbWV0LiBEb25lYyBpbnRlcmR1bSBtaSBldCBsYWNpbmlhIGVsZW1lbnR1bS5cblxuICAgICAgICAgICAgICAgIFF1aXNxdWUgdHJpc3RpcXVlLCBsZWN0dXMgbmVjIGNvbmRpbWVudHVtIHNhZ2l0dGlzLCBudW5jIG9kaW8gZWdlc3RhcyBwdXJ1cywgcXVpcyBlZmZpY2l0dXIgbGVvIGRpYW0gZWdldCBzZW0uIERvbmVjIGluIHVybmEgbmVjIHNhcGllbiB0aW5jaWR1bnQgcnV0cnVtLiBOdW5jIHZlaGljdWxhIGxlY3R1cyBuZWMgbWFnbmEgY29uc2VjdGV0dXIsIGEgcHVsdmluYXIgbmlzbCBmcmluZ2lsbGEuIFF1aXNxdWUgc2VkIG1hdHRpcyBsZWN0dXMuIFNlZCBhdCBwZWxsZW50ZXNxdWUgbWV0dXMuIE51bGxhbSBzb2xsaWNpdHVkaW4gZmFjaWxpc2lzIGVnZXN0YXMuIE1hZWNlbmFzIGhlbmRyZXJpdCBldSB0ZWxsdXMgbWF0dGlzIHVsdHJpY2llcy4gUGhhc2VsbHVzIGRhcGlidXMgZXUgbmlzaSBxdWlzIGxvYm9ydGlzLiBFdGlhbSBpbXBlcmRpZXQgdGluY2lkdW50IG1pLCBzZWQgdml2ZXJyYSBzYXBpZW4gaW50ZXJkdW0gc2VkLiBQaGFzZWxsdXMgZXUgaWFjdWxpcyBxdWFtLCB2ZWwgdmFyaXVzIGRpYW0uIFZpdmFtdXMgYXQgZXJvcyB1bGxhbWNvcnBlciwgdmVoaWN1bGEgbnVsbGEgZXQsIHZlc3RpYnVsdW0gbWFzc2EuIERvbmVjIG1pIGxhY3VzLCBldWlzbW9kIGlkIGxlbyBhLCBkYXBpYnVzIGNvbmRpbWVudHVtIGxpYmVyby4gVXQgdml0YWUgbmVxdWUgc2l0IGFtZXQgbWFzc2EgZnJpbmdpbGxhIHNhZ2l0dGlzLiBGdXNjZSBwb3J0dGl0b3IgdHJpc3RpcXVlIHR1cnBpcywgZGljdHVtIHZlc3RpYnVsdW0ganVzdG8uXG5cbiAgICAgICAgICAgICAgICBOYW0gYWMgYXVjdG9yIHB1cnVzLiBBZW5lYW4gcmhvbmN1cyByaXN1cyBpbiB0dXJwaXMgY29uc2VxdWF0LCBxdWlzIGVnZXN0YXMgZXJvcyBtb2xlc3RpZS4gTnVsbGEgYWxpcXVldCwgb3JjaSBldSB1bHRyaWNlcyBtb2xlc3RpZSwgbG9yZW0gbmlzaSBwdWx2aW5hciBuaXNpLCBpZCBiaWJlbmR1bSBxdWFtIGp1c3RvIHF1aXMgbnVsbGEuIFByYWVzZW50IG5lYyBlc3QgZXQgdGVsbHVzIHJ1dHJ1bSB0cmlzdGlxdWUuIFN1c3BlbmRpc3NlIGluIGFyY3UgZHVpLiBNYWVjZW5hcyBmYWNpbGlzaXMgbWF1cmlzIGluIGVuaW0gdHJpc3RpcXVlIGJpYmVuZHVtLiBOdW5jIHVsbGFtY29ycGVyIHZlaGljdWxhIG1pLCBzZWQgcnV0cnVtIG1hZ25hIHNvZGFsZXMgdml0YWUuIERvbmVjIGxpZ3VsYSB0dXJwaXMsIGxvYm9ydGlzIHNlZCBwb3J0dGl0b3IgcXVpcywgZmF1Y2lidXMgYWMgdHVycGlzLiBOdWxsYW0gY3Vyc3VzIHZvbHV0cGF0IGNvbmd1ZS4gU2VkIHRlbXB1cyBhcmN1IGV0IGJpYmVuZHVtIHNlbXBlci4gRG9uZWMgYXQgdGluY2lkdW50IGVyYXQsIHZpdGFlIHNhZ2l0dGlzIHVybmEuXG5cbiAgICAgICAgICAgICAgICBBbGlxdWFtIGJsYW5kaXQgaW1wZXJkaWV0IGp1c3RvIGVnZXQgdWx0cmljZXMuIERvbmVjIHZpdGFlIG51bGxhIHF1aXMgZmVsaXMgbGFvcmVldCBmZXJtZW50dW0gcXVpcyB2ZWwgbGVvLiBQaGFzZWxsdXMgdnVscHV0YXRlLCBudWxsYSB2ZWwgdmVzdGlidWx1bSBzb2xsaWNpdHVkaW4sIGp1c3RvIG5lcXVlIGFsaXF1YW0gZXgsIGFjIG1heGltdXMgYXJjdSB2ZWxpdCBzZWQgbmlzaS4gUGVsbGVudGVzcXVlIGxvcmVtIG1hZ25hLCBjdXJzdXMgc2VkIG1hZ25hIGluLCBzb2RhbGVzIHZvbHV0cGF0IGRpYW0uIEludGVnZXIgcG9zdWVyZSBhbnRlIGFudGUsIGluIHBvcnR0aXRvciB0b3J0b3IgbWF4aW11cyBzZWQuIE51bmMgYWMgbnVsbGEgZmVybWVudHVtLCBtYXhpbXVzIHVybmEgcXVpcywgY29udmFsbGlzIGVyYXQuIEludGVnZXIgZXVpc21vZCBydXRydW0gbmlzaSwgbmVjIG1vbGVzdGllIG5pYmggZXVpc21vZCBpbi4gTnVsbGFtIGlkIG1hc3NhIGluIG1hc3NhIGxhb3JlZXQgY29tbW9kbyBpbiB2aXRhZSBudW5jLiBOdW5jIGFjY3Vtc2FuIG9kaW8gYSBudW5jIGlhY3VsaXMgcGhhcmV0cmEuIFBoYXNlbGx1cyBtb2xsaXMgZmluaWJ1cyBsZWN0dXMgc2VkIG1vbGxpcy4gRG9uZWMgZXQgYXVndWUgcXVpcyBtaSBlbGVpZmVuZCBlZ2VzdGFzLiBTZWQgcXVpcyBhY2N1bXNhbiB0dXJwaXMuXG5cbiAgICAgICAgICAgICAgICBEdWlzIHRlbGx1cyBxdWFtLCBjb252YWxsaXMgdGluY2lkdW50IG5pYmggbmVjLCBlZmZpY2l0dXIgc29sbGljaXR1ZGluIG5pc2wuIFN1c3BlbmRpc3NlIGJsYW5kaXQgZWdldCBlcmF0IHV0IGRpZ25pc3NpbS4gRnVzY2Ugc2VkIGVuaW0gYWMgbG9yZW0gaWFjdWxpcyBwZWxsZW50ZXNxdWUgZWdldCB2aXRhZSBvZGlvLiBBbGlxdWFtIGRpZ25pc3NpbSBlbmltIHR1cnBpcywgc2VkIGZhY2lsaXNpcyBlcmF0IHZvbHV0cGF0IHRlbXBvci4gVmVzdGlidWx1bSBsdWN0dXMgbGFjdXMgc29kYWxlcywgdWx0cmljZXMgbnVsbGEgaWQsIHNvbGxpY2l0dWRpbiB0dXJwaXMuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBBZW5lYW4gc2l0IGFtZXQgbGlndWxhIGFudGUuIE1hZWNlbmFzIHByZXRpdW0gaWQgcHVydXMgZWxlbWVudHVtIGRhcGlidXMuIFNlZCBlbmltIGxhY3VzLCBtb2xlc3RpZSBpZCB0b3J0b3IgZXUsIGdyYXZpZGEgZ3JhdmlkYSBzYXBpZW4uIFV0IGF1Y3RvciBzb2xsaWNpdHVkaW4gdXJuYSBldCBkaWN0dW0uXG5cbiAgICAgICAgICAgICAgICBOdWxsYSBtYXhpbXVzIG1pIHNlZCBwb3J0dGl0b3IgbWF4aW11cy4gU2VkIHZvbHV0cGF0IGRvbG9yIG5lYyBsZWN0dXMgb3JuYXJlIHZhcml1cy4gVml2YW11cyBhbGlxdWV0IHB1cnVzIG5pYmgsIGV1IGNvbmRpbWVudHVtIG1hZ25hIHRpbmNpZHVudCBpZC4gU2VkIGhlbmRyZXJpdCByaXN1cyBhIG9ybmFyZSBiaWJlbmR1bS4gUHJvaW4gbmVjIHR1cnBpcyBhdWN0b3IsIHJ1dHJ1bSBhdWd1ZSBzaXQgYW1ldCwgZmV1Z2lhdCBkdWkuIEludGVnZXIgaW4gZmluaWJ1cyBtYWduYS4gVml2YW11cyBldSBsb2JvcnRpcyBtZXR1cywgbm9uIHNjZWxlcmlzcXVlIG5lcXVlLiBBZW5lYW4gY29udmFsbGlzIGVyYXQgbGlndWxhLCB2ZWwgYmliZW5kdW0gbnVuYyByaG9uY3VzIGF0LiBBZW5lYW4gZmVsaXMgbWFnbmEsIHJob25jdXMgbm9uIHNvbGxpY2l0dWRpbiBldCwgcHVsdmluYXIgZXQgcHVydXMuIE51bmMgc2VkIGF1Z3VlIHZ1bHB1dGF0ZSwgdHJpc3RpcXVlIG9yY2kgYXQsIGxhb3JlZXQgbWV0dXMuIFV0IHVsbGFtY29ycGVyIGZpbmlidXMgb2Rpbywgc2VkIGZyaW5naWxsYSB1cm5hIGludGVyZHVtIHNlZC4gTW9yYmkgaWQgdml2ZXJyYSBhbnRlLCBxdWlzIHNlbXBlciBtZXR1cy4gUGhhc2VsbHVzIGR1aSBkaWFtLCB0cmlzdGlxdWUgaW4gdnVscHV0YXRlIGlkLCBzb2RhbGVzIHZlbCBuZXF1ZS4gSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBEdWlzIHZhcml1cyBlbmltIG5lYyBsaWd1bGEgc29kYWxlcyBtYWxlc3VhZGEuIE1hdXJpcyBtZXR1cyBudWxsYSwgZWxlaWZlbmQgbmVjIG5pc2kgaW4sIG1heGltdXMgdGVtcG9yIGRvbG9yLlxuXG4gICAgICAgICAgICAgICAgQ3VyYWJpdHVyIHByZXRpdW0gYWMgZXJvcyBub24gZmFjaWxpc2lzLiBRdWlzcXVlIG1vbGxpcyB2b2x1dHBhdCByaG9uY3VzLiBDdXJhYml0dXIgZXUgaW1wZXJkaWV0IHNhcGllbi4gUHJhZXNlbnQgYWNjdW1zYW4sIG5pYmggdml0YWUgbWF0dGlzIHByZXRpdW0sIGlwc3VtIGV4IGNvbnNlY3RldHVyIG9yY2ksIGVmZmljaXR1ciBmaW5pYnVzIHF1YW0gZXggZXUgbGVvLiBOdWxsYSBzb2RhbGVzIGxvYm9ydGlzIGRpYW0gdmVsIGRpZ25pc3NpbS4gUHJvaW4gZGljdHVtLCBuaXNpIHNlZCBzYWdpdHRpcyBwaGFyZXRyYSwgZXggbGVvIGx1Y3R1cyBtYXVyaXMsIGlkIGNvbnNlcXVhdCBlbGl0IGxpZ3VsYSBhIHNlbS4gSW4gcGVsbGVudGVzcXVlIHVybmEgbGFjdXMsIGFjIGNvbnNlY3RldHVyIG51bmMgY29uZGltZW50dW0gYS4gQWVuZWFuIHJ1dHJ1bSBvcm5hcmUgbnVsbGEgaW4gY29uc2VjdGV0dXIuIE5hbSBvZGlvIHVybmEsIGZhdWNpYnVzIHZlbCBuaXNpIGEsIHByZXRpdW0gdGluY2lkdW50IHRvcnRvci4gQ3JhcyB0aW5jaWR1bnQgYmxhbmRpdCBzYXBpZW4gZXUgbGFjaW5pYS4gUGhhc2VsbHVzIGNvbnNlcXVhdCBsZWN0dXMgYXQgdmFyaXVzIHJ1dHJ1bS4gTWFlY2VuYXMgZXVpc21vZCBuaXNsIHNvZGFsZXMgc29sbGljaXR1ZGluIHNlbXBlci4gQ3VyYWJpdHVyIGdyYXZpZGEgdXJuYSBsaWJlcm8sIGV0IGxhb3JlZXQgdHVycGlzIGFjY3Vtc2FuIHV0LlxuXG4gICAgICAgICAgICAgICAgU3VzcGVuZGlzc2UgZmF1Y2lidXMgbWF1cmlzIHNpdCBhbWV0IGxpYmVybyBwcmV0aXVtIGxhY2luaWEuIFBlbGxlbnRlc3F1ZSBncmF2aWRhLCBtZXR1cyBlbGVtZW50dW0gaWFjdWxpcyBjb252YWxsaXMsIGVsaXQgdHVycGlzIHByZXRpdW0gZW5pbSwgbW9sZXN0aWUgdGVtcG9yIGFudGUgaXBzdW0gc2l0IGFtZXQgdGVsbHVzLiBEb25lYyBjb21tb2RvIG5pc2wgYXQgZGFwaWJ1cyB0aW5jaWR1bnQuIE5hbSBtb2xsaXMgbmliaCBxdWlzIHBvcnR0aXRvciBibGFuZGl0LiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgUGhhc2VsbHVzIGV1IHRpbmNpZHVudCBudW5jLiBFdGlhbSBzaXQgYW1ldCBkb2xvciBjb25zZXF1YXQsIHJ1dHJ1bSBvZGlvIGEsIGlhY3VsaXMgdmVsaXQuIERvbmVjIGFsaXF1ZXQgbmlzaSBtYWduYSwgdml0YWUgcG9ydGEgbGlndWxhIGNvbmRpbWVudHVtIGV0LiBDdXJhYml0dXIgc29sbGljaXR1ZGluIGxvcmVtIHVybmEsIHF1aXMgdmVzdGlidWx1bSBqdXN0byBmZXJtZW50dW0gdml0YWUuIFZlc3RpYnVsdW0gYWxpcXVhbSB0aW5jaWR1bnQgc2FwaWVuLCBncmF2aWRhIGhlbmRyZXJpdCBleCBiaWJlbmR1bSBhYy4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gU3VzcGVuZGlzc2Ugc2l0IGFtZXQgbnVuYyBldCBsb3JlbSBjb25ndWUgdm9sdXRwYXQgdXQgcXVpcyBkdWkuXG5cbiAgICAgICAgICAgICAgICBOdWxsYW0gcGhhcmV0cmEgbWFsZXN1YWRhIG1ldHVzLCBzaXQgYW1ldCBtb2xlc3RpZSBkb2xvciBwdWx2aW5hciBxdWlzLiBGdXNjZSBpbiBlbGl0IGVsZW1lbnR1bSwgZmFjaWxpc2lzIG51bmMgYXQsIHNjZWxlcmlzcXVlIGVuaW0uIFV0IGZlcm1lbnR1bSBtb2xlc3RpZSBhY2N1bXNhbi4gU2VkIG51bmMgbWF1cmlzLCBldWlzbW9kIGlkIGVuaW0gZWdldCwgcHJldGl1bSBjb21tb2RvIHR1cnBpcy4gTWF1cmlzIHF1aXMgcGxhY2VyYXQgbmVxdWUuIE5hbSB2aXRhZSBtaSBpZCBkaWFtIGdyYXZpZGEgc2VtcGVyLiBOYW0gbW9sZXN0aWUgYXQgcHVydXMgc2l0IGFtZXQgdGluY2lkdW50LiBEb25lYyBzZWQgbmlzbCBhbGlxdWFtLCBzb2RhbGVzIHNlbSBhdCwgZmFjaWxpc2lzIG9yY2kuIEN1cmFiaXR1ciBpZCBzYXBpZW4gc2l0IGFtZXQgYW50ZSBkYXBpYnVzIG1heGltdXMuXG5cbiAgICAgICAgICAgICAgICBWaXZhbXVzIG9kaW8gdmVsaXQsIHZlbmVuYXRpcyB2aXRhZSBhbnRlIGV1LCBmZXVnaWF0IHVsdHJpY2VzIG1hdXJpcy4gUHJhZXNlbnQgdmVzdGlidWx1bSBmZXVnaWF0IHRvcnRvciBxdWlzIHVsbGFtY29ycGVyLiBRdWlzcXVlIGRhcGlidXMgbWkgaWQgbGliZXJvIGdyYXZpZGEgdWxsYW1jb3JwZXIuIE9yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIEludGVnZXIgbmVjIGZpbmlidXMgZHVpLiBTdXNwZW5kaXNzZSBmZXVnaWF0IHBsYWNlcmF0IHRlbGx1cywgZXQgY29uZGltZW50dW0gcXVhbSBmYWNpbGlzaXMgYWxpcXVhbS4gQ3VyYWJpdHVyIGVyYXQgbGVvLCBsYW9yZWV0IG5vbiBlcm9zIG5vbiwgdm9sdXRwYXQgaGVuZHJlcml0IGV4LiBQcm9pbiBldSBtYWduYSBzYWdpdHRpcywgYWxpcXVhbSBsaWd1bGEgcXVpcywgY29udmFsbGlzIGp1c3RvLiBQaGFzZWxsdXMgbnVsbGEgYW50ZSwgZGljdHVtIHNhZ2l0dGlzIGVyb3MgZXQsIHB1bHZpbmFyIHRlbXB1cyBtYXNzYS4gVXQgdG9ydG9yIG9kaW8sIHZlaGljdWxhIGEgZmVsaXMgdmVsLCB2aXZlcnJhIHBvc3VlcmUgZWxpdC4gTnVuYyBub24gcG9zdWVyZSBuaXNsLiBTZWQgZmFjaWxpc2lzIGxlY3R1cyBhdCBlc3QgbWFsZXN1YWRhLCBwb3J0YSBtYXR0aXMgYXVndWUgZmluaWJ1cy4gVXQgYWxpcXVldCBiaWJlbmR1bSBpYWN1bGlzLlxuXG4gICAgICAgICAgICAgICAgRHVpcyBzaXQgYW1ldCBjb25ndWUgbWFnbmEuIE1hZWNlbmFzIGNvbmd1ZSBkaWN0dW0gZXVpc21vZC4gQWVuZWFuIG5pYmggdmVsaXQsIGF1Y3RvciB2aXRhZSB0b3J0b3IgcXVpcywgY29uZ3VlIHBlbGxlbnRlc3F1ZSBuaXNpLiBJbnRlZ2VyIGxhb3JlZXQgbWFnbmEgcXVpcyBsaWd1bGEgcnV0cnVtIGVmZmljaXR1ci4gU2VkIGxpZ3VsYSBleCwgZWxlbWVudHVtIHNpdCBhbWV0IG5lcXVlIGF0LCBkaWN0dW0gZmV1Z2lhdCBwdXJ1cy4gU2VkIGJpYmVuZHVtLCBtYWduYSBhIHN1c2NpcGl0IHVsdHJpY2llcywgcXVhbSBmZWxpcyBkYXBpYnVzIGF1Z3VlLCBuZWMgZWZmaWNpdHVyIHRlbGx1cyBtYXVyaXMgdmVsIG5pc2wuIEludGVnZXIgc2VkIGFyY3UgZXJhdC4gQ3VyYWJpdHVyIGFyY3Ugb2RpbywgZ3JhdmlkYSBydXRydW0gZmFjaWxpc2lzIGluLCBldWlzbW9kIHF1aXMgaXBzdW0uIEluIGN1cnN1cyBkaWFtIGV1IGlhY3VsaXMgZmFjaWxpc2lzLiBQZWxsZW50ZXNxdWUgaWQgbnVuYyBuaXNpLiBEdWlzIGV1IG5pc2kgZGlnbmlzc2ltLCByaG9uY3VzIG1hZ25hIHZpdGFlLCBncmF2aWRhIG1pLiBNYWVjZW5hcyBzYWdpdHRpcyBzYWdpdHRpcyBkb2xvciBhIGx1Y3R1cy4gQWxpcXVhbSBzYWdpdHRpcyBlbGl0IG51bmMsIHZpdGFlIGRhcGlidXMgbnVuYyBwZWxsZW50ZXNxdWUgcXVpcy4gVml2YW11cyBwb3J0dGl0b3IgbWFnbmEgbmVjIHVybmEgdml2ZXJyYSwgYWMgc2NlbGVyaXNxdWUgbGVvIGxhb3JlZXQuIEluIGFjY3Vtc2FuIGV1aXNtb2QgbHVjdHVzLiBNYWVjZW5hcyBzb2xsaWNpdHVkaW4gZXUgdG9ydG9yIHNlZCBpYWN1bGlzLlxuXG4gICAgICAgICAgICAgICAgUGhhc2VsbHVzIHF1aXMgZmFjaWxpc2lzIG5pc2wsIG5lYyB1bGxhbWNvcnBlciBtZXR1cy4gQWVuZWFuIGFjY3Vtc2FuIHF1YW0gdmVsaXQsIGlkIGNvbnZhbGxpcyBkaWFtIG1heGltdXMgY29uc2VxdWF0LiBEb25lYyBsb2JvcnRpcyBjb21tb2RvIG1vbGVzdGllLiBNYWVjZW5hcyBxdWlzIHNhcGllbiB2b2x1dHBhdCwgcmhvbmN1cyBsZW8gaW4sIHZlbmVuYXRpcyBxdWFtLiBQaGFzZWxsdXMgdml0YWUgcmhvbmN1cyBudW5jLCBhIHJ1dHJ1bSBtaS4gTWF1cmlzIGFsaXF1ZXQsIHVybmEgYWMgZGlnbmlzc2ltIG1heGltdXMsIG1hZ25hIHRvcnRvciBydXRydW0gbmliaCwgYSBjb25zZXF1YXQgbWFzc2EgbGlndWxhIHV0IG9yY2kuIFNlZCBtYXhpbXVzLCBuZXF1ZSBhIGV1aXNtb2QgZmFjaWxpc2lzLCBsZWN0dXMgZXN0IHVsdHJpY2VzIHJpc3VzLCBxdWlzIGNvbmRpbWVudHVtIHNlbSBleCBub24gbGFjdXMuXG5cbiAgICAgICAgICAgICAgICBBbGlxdWFtIGFudGUgbGVjdHVzLCBpbnRlcmR1bSBpbiB1bGxhbWNvcnBlciBzaXQgYW1ldCwgZXVpc21vZCBpZCBsaWJlcm8uIE1vcmJpIHBvc3VlcmUgbGFjaW5pYSB2ZW5lbmF0aXMuIEludGVnZXIgcnV0cnVtLCB0ZWxsdXMgc2l0IGFtZXQgdnVscHV0YXRlIHB1bHZpbmFyLCBleCBtYWduYSBzb2RhbGVzIHZlbGl0LCBhYyBpbXBlcmRpZXQgbGliZXJvIHF1YW0gYXQgbnVuYy4gU2VkIHZlbmVuYXRpcyBudWxsYSBsYWN1cywgZXUgcmhvbmN1cyBkaWFtIGF1Y3RvciBub24uIFF1aXNxdWUgcGVsbGVudGVzcXVlIG1pIHNlZCB0b3J0b3IgdWxsYW1jb3JwZXIgY29uZGltZW50dW0uIENyYXMgc2VtIGxvcmVtLCBzYWdpdHRpcyBpbiBhdWN0b3IgcXVpcywgY29uc2VjdGV0dXIgaW4gc2VtLiBOdWxsYW0gdml0YWUgdnVscHV0YXRlIHRvcnRvciwgYSB0aW5jaWR1bnQgZXJvcy4gTnVsbGEgYWxpcXVhbSBkdWkgbm9uIG9kaW8gaGVuZHJlcml0LCB2ZWwgdWxsYW1jb3JwZXIgZHVpIHRlbXBvci4gU2VkIGxhb3JlZXQgdHVycGlzIHF1YW0sIGV0IG1vbGxpcyBtaSB0cmlzdGlxdWUgc2l0IGFtZXQuIEN1cmFiaXR1ciBub24gbGFjdXMgcGhhcmV0cmEsIHZpdmVycmEgc2FwaWVuIHZpdGFlLCBzYWdpdHRpcyByaXN1cy4gTnVsbGFtIGZldWdpYXQgb3JjaSBuZXF1ZSwgc2VkIHNlbXBlciBsaWJlcm8gY29uc2VjdGV0dXIgYXQuIFZpdmFtdXMgYmxhbmRpdCBqdXN0byBhIHZlbGl0IGRpY3R1bSBpYWN1bGlzLiBNb3JiaSBwb3J0dGl0b3IgbmlzbCBub24gZmVsaXMgZ3JhdmlkYSwgc2l0IGFtZXQgY29uc2VxdWF0IGxlY3R1cyB2dWxwdXRhdGUuIFByb2luIHNvZGFsZXMsIHVybmEgbm9uIHB1bHZpbmFyIGNvbnNlcXVhdCwgc2FwaWVuIHZlbGl0IGdyYXZpZGEgbWFzc2EsIG9ybmFyZSBjb25zZXF1YXQgb3JjaSBlc3QgcG9ydGEganVzdG8uIFF1aXNxdWUgbm9uIGxpZ3VsYSBsaWd1bGEuIEFsaXF1YW0gZXJhdCB2b2x1dHBhdC5cblxuICAgICAgICAgICAgICAgIERvbmVjIHF1aXMgc2FnaXR0aXMgbWF1cmlzLiBWaXZhbXVzIGF0IGFudGUgYSBkdWkgdHJpc3RpcXVlIHNlbXBlciB2ZWwgYWMgbGVjdHVzLiBDcmFzIHNlZCB0b3J0b3Igb2Rpby4gQ3VyYWJpdHVyIGF0IHBvcnRhIG5pYmguIFN1c3BlbmRpc3NlIGNvbW1vZG8gdG9ydG9yIGFjIHJ1dHJ1bSBmcmluZ2lsbGEuIFN1c3BlbmRpc3NlIHV0IGRvbG9yIHZpdGFlIGZlbGlzIHNvZGFsZXMgZmF1Y2lidXMuIFZlc3RpYnVsdW0gc2VtcGVyLCBtZXR1cyB2aXRhZSB0ZW1wdXMgdGVtcHVzLCBkaWFtIGp1c3RvIGdyYXZpZGEgdGVsbHVzLCBzaXQgYW1ldCBwb3N1ZXJlIHF1YW0gaXBzdW0gc2l0IGFtZXQgdG9ydG9yLiBNYWVjZW5hcyBlcm9zIGF1Z3VlLCBwbGFjZXJhdCBhIG51bGxhIG5vbiwgZmV1Z2lhdCByaG9uY3VzIGRpYW0uIFZpdmFtdXMgc2VkIHByZXRpdW0gc2VtLiBFdGlhbSBzY2VsZXJpc3F1ZSwgZXJhdCBpbiBwb3J0dGl0b3IgbW9sbGlzLCBkb2xvciBsYWN1cyBwb3J0dGl0b3IgbGFjdXMsIHZlbCBydXRydW0gdXJuYSBkb2xvciB2aXRhZSBqdXN0by4gRG9uZWMgYmliZW5kdW0gdml2ZXJyYSB2YXJpdXMuIERvbmVjIGZldWdpYXQgbWFnbmEgaWQgbWFnbmEgcGhhcmV0cmEsIG5vbiB2ZW5lbmF0aXMgbGVjdHVzIHBvcnRhLiBJbiBhcmN1IG5pYmgsIGhlbmRyZXJpdCBldSBlc3QgbmVjLCB2ZWhpY3VsYSBldWlzbW9kIGxlY3R1cy4gTnVsbGFtIGEgbW9sZXN0aWUgdGVsbHVzLiBNYWVjZW5hcyBncmF2aWRhIHNvbGxpY2l0dWRpbiBmYXVjaWJ1cy4gQ3VyYWJpdHVyIHZpdGFlIHZlc3RpYnVsdW0gbWV0dXMuXG5cbiAgICAgICAgICAgICAgICBOdWxsYSBlZ2V0IGxlY3R1cyBhdCBvcmNpIGJpYmVuZHVtIHB1bHZpbmFyLiBEb25lYyBwcmV0aXVtIG1hZ25hIGEgbWFzc2Egc2NlbGVyaXNxdWUgZWxlbWVudHVtLiBTdXNwZW5kaXNzZSBhYyBncmF2aWRhIGVzdC4gTWFlY2VuYXMgb3JuYXJlIGR1aSBlbmltLCBzZWQgc29kYWxlcyB0ZWxsdXMgc3VzY2lwaXQgcXVpcy4gUHJvaW4gZmV1Z2lhdCBsYWN1cyB1dCBsaWJlcm8gdGVtcHVzIGN1cnN1cy4gRHVpcyBlZ2VzdGFzLCBhdWd1ZSBxdWlzIGRhcGlidXMgdWx0cmljaWVzLCBtaSBudW5jIGNvbmRpbWVudHVtIHNhcGllbiwgZXQgdGluY2lkdW50IGVzdCB0b3J0b3Igc2l0IGFtZXQgZG9sb3IuIFBoYXNlbGx1cyBldSBsYWN1cyB2aXZlcnJhLCBvcm5hcmUgdXJuYSB2ZWwsIGNvbnNlcXVhdCBwdXJ1cy5cblxuICAgICAgICAgICAgICAgIEN1cmFiaXR1ciBhdCBvcm5hcmUgbmVxdWUsIHF1aXMgZmFjaWxpc2lzIGVsaXQuIFNlZCB2ZWwgbWF1cmlzIGluIGRpYW0gY29tbW9kbyBzb2xsaWNpdHVkaW4uIE51bmMgYSBjdXJzdXMgbmlzbCwgYXQgcmhvbmN1cyBleC4gRHVpcyBvcm5hcmUgdXJuYSBub24gbmliaCBncmF2aWRhLCBuZWMgYWNjdW1zYW4gdHVycGlzIHNvZGFsZXMuIFBlbGxlbnRlc3F1ZSBzaXQgYW1ldCB1bHRyaWNpZXMgdXJuYS4gTWF1cmlzIHZlbCBmZXJtZW50dW0gbG9yZW0uIEN1cmFiaXR1ciBsYW9yZWV0LCBwdXJ1cyB2ZWwgZmV1Z2lhdCBmZXVnaWF0LCB2ZWxpdCBqdXN0byBsdWN0dXMgbWksIGEgbW9sbGlzIHNlbSBsZW8gdml0YWUgbWF1cmlzLiBWZXN0aWJ1bHVtIGRpZ25pc3NpbSB0ZW1wdXMgZXggZXUgZmF1Y2lidXMuIEFsaXF1YW0gZWdldCBsZW8gZXUgYXJjdSBkaWN0dW0gYmxhbmRpdC4gUGVsbGVudGVzcXVlIHVsbGFtY29ycGVyIGxhY3VzIHB1bHZpbmFyIHR1cnBpcyB2ZW5lbmF0aXMgdm9sdXRwYXQuIE51bGxhIGVmZmljaXR1ciBwZWxsZW50ZXNxdWUgdGVsbHVzLCB2aXRhZSBvcm5hcmUgb2RpbyBmYWNpbGlzaXMgaWQuIFByYWVzZW50IGVnZXQganVzdG8gdHVycGlzLiBDdXJhYml0dXIgY29uZGltZW50dW0sIGxhY3VzIHV0IHZhcml1cyBtb2xsaXMsIG5lcXVlIHJpc3VzIGZhdWNpYnVzIG1pLCBzaXQgYW1ldCBsb2JvcnRpcyBsZW8gaXBzdW0gZWdldCBvZGlvLiBTZWQgc2VtcGVyIHZlc3RpYnVsdW0gbGliZXJvLCBhYyBmZXVnaWF0IG5pYmggdHJpc3RpcXVlIGlkLiBJbiBhbGlxdWFtIGVnZXQgdGVsbHVzIGluIGNvbW1vZG8uIENyYXMgc29kYWxlcyBzZW1wZXIgbmlzbCwgbmVjIGV1aXNtb2QgbGVvIHVsbGFtY29ycGVyIGV0LlxuXG4gICAgICAgICAgICAgICAgRXRpYW0gc2VkIHBsYWNlcmF0IG1pLiBJbiBwZWxsZW50ZXNxdWUgY3Vyc3VzIGVyb3MgaW4gaGVuZHJlcml0LiBJbiBmYWNpbGlzaXMsIG1ldHVzIGF0IHZ1bHB1dGF0ZSBwdWx2aW5hciwgZmVsaXMgZW5pbSBlZmZpY2l0dXIgYW50ZSwgYSBsYW9yZWV0IGF1Z3VlIGRpYW0gdXQgbGlndWxhLiBNYWVjZW5hcyBsZWN0dXMgdG9ydG9yLCBwbGFjZXJhdCBldSB0aW5jaWR1bnQgc2l0IGFtZXQsIGNvbnNlY3RldHVyIGEgb2Rpby4gRG9uZWMgdmVsIGxvcmVtIGVyb3MuIE1vcmJpIGV0IGVmZmljaXR1ciB0b3J0b3IsIHZpdGFlIHZpdmVycmEgbG9yZW0uIENyYXMgZWxpdCBhbnRlLCBhdWN0b3IgZWdldCB0dXJwaXMgc2l0IGFtZXQsIGFjY3Vtc2FuIGxhb3JlZXQgYXJjdS4gRG9uZWMgdmVsIGRpY3R1bSB2ZWxpdC4gRnVzY2UgdXQgdmVuZW5hdGlzIG1hZ25hLiBDcmFzIGxhY2luaWEgdXJuYSBhIGxhY2luaWEgZmV1Z2lhdC4gVXQgYXQgb2RpbyB1dCBuZXF1ZSB0aW5jaWR1bnQgbWFsZXN1YWRhIHF1aXMgbmVjIGxhY3VzLiBEb25lYyBldWlzbW9kIGZlbGlzIGlkIGNvbnNlY3RldHVyIGVsZWlmZW5kLiBFdGlhbSBuZWMgaXBzdW0gZXUgbmliaCBtYXhpbXVzIGFsaXF1ZXQuIEFlbmVhbiBuZWMgaW50ZXJkdW0gdG9ydG9yLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7ICAgKHN0b3JlLmZvb3RlciAmJiBzdG9yZS5mb290ZXIuaGVpZ2h0ICYmIHN0b3JlLmZvb3Rlci5oZWlnaHQgPiAwKSAmJlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRpb24tZGVzay1mb290ZXJcIiBzdHlsZT17Zm9vdGVyU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tIFwiLi9NZW51T3B0aW9uXCI7XG5pbXBvcnQgeyBJTklUX1NUWUxFLCBzYXZlUGFnZSB9IGZyb20gXCIuLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuaW1wb3J0IHtcbiAgICBOYXZiYXJFZGl0b3IsXG4gICAgQm9keUVkaXRvcixcbiAgICBTaWRlYmFyRWRpdG9yLFxuICAgIFNlY3Rpb25zRWRpdG9yLFxuICAgIEZvb3RlckVkaXRvclxufSBmcm9tIFwiLi9FbGVtZW50RWRpdG9yc1wiO1xuXG5jb25zdCBtZW51VGV4dHMgPSB7XG4gICAgbmF2YmFyOiAnTmF2YmFyJyxcbiAgICBib2R5OiAnQm9keScsXG4gICAgc2lkZWJhcjogJ1NpZGViYXInLFxuICAgIHNlY3Rpb25zOiAnU2VjdGlvbnMnLFxuICAgIGZvb3RlcjogJ0Zvb3Rlcidcbn07XG5cbmNvbnN0IG1lbnVPcHRpb25BY3RpdmUgPSAnJztcblxuY29uc3QgZ2V0TWVudU9wdGlvbkFjdGl2ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gbWVudU9wdGlvbkFjdGl2ZTtcbn1cblxuY29uc3QgbWVudVJlZHVjZXIgPSAoY3VycmVudEl0ZW0sIGFjdGl2ZU9wdGlvbikgPT4ge1xuICAgIHJldHVybiBhY3RpdmVPcHRpb247XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVNZW51ID0gKHtzdG9yZSwgZGlzcGF0Y2h9KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZU1lbnVPcHRpb24sIG1lbnVEaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKG1lbnVSZWR1Y2VyLCB7fSwgZ2V0TWVudU9wdGlvbkFjdGl2ZSk7XG4gICAgc3RvcmUubmF2YmFyID0gc3RvcmUubmF2YmFyIHx8IHt9O1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNyZWF0ZS1tZW51XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlblwiIG9uQ2xpY2s9eygpID0+IHNhdmVQYWdlKHN0b3JlKX0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXthY3RpdmVNZW51T3B0aW9uID09PSBtZW51VGV4dHMubmF2YmFyfVxuICAgICAgICAgICAgICAgIG1lbnVEaXNwYXRjaD17bWVudURpc3BhdGNofVxuICAgICAgICAgICAgICAgIHRleHQ9e21lbnVUZXh0cy5uYXZiYXJ9XG4gICAgICAgICAgICAgICAgY29udGVudD17PE5hdmJhckVkaXRvciBuYXZiYXI9e3N0b3JlLm5hdmJhciB8fCBJTklUX1NUWUxFLm5hdmJhcn0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAgaW5pdEFjdGl2ZT17YWN0aXZlTWVudU9wdGlvbiA9PT0gbWVudVRleHRzLmJvZHl9XG4gICAgICAgICAgICAgICAgbWVudURpc3BhdGNoPXttZW51RGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgdGV4dD17bWVudVRleHRzLmJvZHl9XG4gICAgICAgICAgICAgICAgY29udGVudD17PEJvZHlFZGl0b3IgYm9keT17c3RvcmUuYm9keSB8fCB7fX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAgaW5pdEFjdGl2ZT17YWN0aXZlTWVudU9wdGlvbiA9PT0gbWVudVRleHRzLnNpZGViYXJ9XG4gICAgICAgICAgICAgICAgbWVudURpc3BhdGNoPXttZW51RGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgdGV4dD17bWVudVRleHRzLnNpZGViYXJ9XG4gICAgICAgICAgICAgICAgY29udGVudD17PFNpZGViYXJFZGl0b3IvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgICAgICAgIGluaXRBY3RpdmU9e2FjdGl2ZU1lbnVPcHRpb24gPT09IG1lbnVUZXh0cy5zZWN0aW9uc31cbiAgICAgICAgICAgICAgICBtZW51RGlzcGF0Y2g9e21lbnVEaXNwYXRjaH1cbiAgICAgICAgICAgICAgICB0ZXh0PXttZW51VGV4dHMuc2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgY29udGVudD17PFNlY3Rpb25zRWRpdG9yLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXthY3RpdmVNZW51T3B0aW9uID09PSBtZW51VGV4dHMuZm9vdGVyfVxuICAgICAgICAgICAgICAgIG1lbnVEaXNwYXRjaD17bWVudURpc3BhdGNofVxuICAgICAgICAgICAgICAgIHRleHQ9e21lbnVUZXh0cy5mb290ZXJ9XG4gICAgICAgICAgICAgICAgY29udGVudD17PEZvb3RlckVkaXRvciBmb290ZXI9e3N0b3JlLmZvb3Rlcn0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dENvbG9yIGZyb20gJ3JlYWN0LWlucHV0LWNvbG9yJztcbmltcG9ydCBOYXZiYXJJdGVtc01hbmFnZXIgZnJvbSBcIi4vTmF2YmFySXRlbXNNYW5hZ2VyXCI7XG5pbXBvcnQgeyBBQ1RJT05TLCBJTklUX1NUWUxFIH0gZnJvbSBcIi4uL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5pbXBvcnQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgZnJvbSBcIi4uLy4uLy4uLy4uL2Z1bmN0aW9ucy9lbGVtZW50T3JQYXJlbnRIYXNDbGFzc1wiO1xuXG5leHBvcnQgY29uc3QgTmF2YmFyRWRpdG9yID0gKHtcbiAgICAgICAgbmF2YmFyLFxuICAgICAgICBkaXNwYXRjaFxuICAgIH0pID0+IHtcbiAgICBjb25zdCBbYmdDb2xvciwgc2V0QmdDb2xvcl0gPSB1c2VTdGF0ZShuYXZiYXIuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJyk7XG4gICAgY29uc3QgW3RleHRDb2xvciwgc2V0VGV4dENvbG9yXSA9IHVzZVN0YXRlKG5hdmJhci5jb2xvciB8fCAnIzAwMDAwMCcpO1xuICAgIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZShuYXZiYXIuaGVpZ2h0IHx8IDUpO1xuICAgIGNvbnN0IFtuYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUsIHNldE5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IGNsb3NlTmF2SXRlbXNNb2RhbCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnZXhpdC1idXR0b24nKVxuICAgICAgICAgICAgfHwgKCFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnZmxvYXRpbmctd2luZG93JylcbiAgICAgICAgICAgICAgICAmJiAhZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ21hbmFnZS1uYXYtaXRlbXMnKSlcbiAgICAgICAgICAgICAgICAmJiAhZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2RlbGV0ZS1idXR0b24nKVxuICAgICAgICAgICAgICAgICYmICFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnYWRkLWJ1dHRvbicpKSB7XG4gICAgICAgICAgICBzZXROYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93Lm9uY2xpY2sgPSBjbG9zZU5hdkl0ZW1zTW9kYWw7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yIG5hdmJhci1lZGl0b3JcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUgJiZcbiAgICAgICAgICAgICAgICA8TmF2YmFySXRlbXNNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIGluaXRBY3RpdmU9e25hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e25hdmJhci5pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kIGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17bmF2YmFyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZid9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJnQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfQkFDS0dST1VORF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICB0ZXh0IGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17bmF2YmFyLmNvbG9yIHx8ICcjMDAwMDAwJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9URVhUX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjNcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7ZS50YXJnZXQudmFsdWV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SGVpZ2h0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGZvbnQgc2l6ZTpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYXZiYXIuZm9udFNpemV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9URVhUX1NJWkUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzcGFjaW5nLXNlbGVjdFwiPlNwYWNpbmc8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNwYWNpbmdPcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInNwYWNpbmctc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hdmJhci5zcGFjaW5nT3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfU1BBQ0lOR19PUFRJT04sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjaW5nT3B0aW9uOiBOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPmZsZXgtc3RhcnQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5mbGV4LWVuZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPnNwYWNlLWFyb3VuZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbSBob3ZlcmFibGUgbWFuYWdlLW5hdi1pdGVtc1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tjb2xvcjonI2NkZGMzOSd9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZSh0cnVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNYW5hZ2UgbmF2YmFyIGl0ZW1zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEJvZHlFZGl0b3IgPSAoe1xuICAgICAgICBib2R5LFxuICAgICAgICBkaXNwYXRjaFxuICAgIH0pID0+IHtcbiAgICBjb25zdCBbYmFja2dyb3VuZENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3JdID0gdXNlU3RhdGUoYm9keS5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnKTtcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKGJvZHkuY29sb3IgfHwgJyMwMDAwMDAnKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgIGJhY2tncm91bmQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtib2R5LmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZid9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkJPRFlfQkFDS0dST1VORF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICB0ZXh0IGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Ym9keS5jb2xvciB8fCAnIzAwMDAwMCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkJPRFlfVEVYVF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGZvbnQgc2l6ZTpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPXsxMn1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyNH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JvZHkuZm9udFNpemV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkJPRFlfRk9OVF9TSVpFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyRWRpdG9yID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIFNJREVCQVIgRURJVE9SIFBMQUNFSE9MREVSXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXJFZGl0b3IgPSAoe2Zvb3RlciwgZGlzcGF0Y2h9KSA9PiB7XG5cbiAgICBjb25zdCBbYmFja2dyb3VuZENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3JdID0gdXNlU3RhdGUoZm9vdGVyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZicpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZShmb290ZXIuY29sb3IgfHwgJyMwMDAwMDAnKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtmb290ZXIuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICB0ZXh0IGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Zm9vdGVyLmNvbG9yIHx8ICcjMDAwMDAwJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRk9PVEVSX1RFWFRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjVcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkZPT1RFUl9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBmb250IHNpemU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9vdGVyLmZvbnRTaXplIHx8IDE0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GT09URVJfRk9OVF9TSVpFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uc0VkaXRvciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yXCI+XG4gICAgICAgICAgICBTRUNUSU9OUyBFRElUT1IgUExBQ0VIT0xERVJcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzIGZyb20gXCIuLi8uLi8uLi8uLi9mdW5jdGlvbnMvZWxlbWVudE9yUGFyZW50SGFzQ2xhc3NcIjtcblxuY29uc3QgTWVudU9wdGlvbiA9ICh7dGV4dCwgY29udGVudCwgbWVudURpc3BhdGNoLCBpbml0QWN0aXZlID0gZmFsc2V9KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBjaGV2cm9uQ2xhc3MgPSBpbml0QWN0aXZlICYmIGFjdGl2ZSA/ICdjaGV2cm9uIGNoZXZyb24tcmV2ZXJzZScgOiAnY2hldnJvbic7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGUudGFyZ2V0LCAnZGVzaWduLW1lbnUtZWRpdG9yJykpIHtcbiAgICAgICAgICAgIG1lbnVEaXNwYXRjaCh0ZXh0KTtcbiAgICAgICAgICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1vcHRpb25cIlxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY2hldnJvbi5wbmdcIiBhbHQ9XCJjaGV2cm9uXCIgY2xhc3NOYW1lPXtjaGV2cm9uQ2xhc3N9Lz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHsoaW5pdEFjdGl2ZSAmJiBhY3RpdmUpICYmIGNvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVPcHRpb247IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZsb2F0aW5nV2luZG93IGZyb20gXCIuLi8uLi9GbG9hdGluZ1dpbmRvd1wiO1xuaW1wb3J0IHsgQUNUSU9OUyB9IGZyb20gXCIuLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuXG5jb25zdCBOYXZiYXJJdGVtc01hbmFnZXIgPSAoe2luaXRBY3RpdmUsIGl0ZW1zLCBkaXNwYXRjaH0pID0+IHtcbiAgICBjb25zdCBbbmVnYXRpdmVJZCwgc2V0TmVnYXRpdmVJZF0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgICBjb25zdCBpdGVtc0lucHV0cyA9IGl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgdGV4dC0ke2l0ZW0uaWR9YH0+VGV4dDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGtleT17YHRleHQtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgdGV4dC0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjonMCAuNHJlbSd9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9JVEVNX1RFWFRfVVBEQVRFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgdXJsLSR7aXRlbS5pZH1gfT5VUkw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2B1cmwtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgdXJsLSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46JzAgLjRyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSVRFTV9VUkxfVVBEQVRFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tcmVkIGRlbGV0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9JVEVNX0lURU1fREVMRVRFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8RmxvYXRpbmdXaW5kb3dcbiAgICAgICAgICAgIGluaXRBY3RpdmU9e2luaXRBY3RpdmV9XG4gICAgICAgICAgICBuZWVkc1dpZGU9e3RydWV9XG4gICAgICAgICAgICBpbml0Q29udGVudHM9e1tcbiAgICAgICAgICAgICAgICAuLi5pdGVtc0lucHV0cyxcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1kYXJrLWdyZWVuIGFkZC1idXR0b24gaG92ZXJhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSVRFTV9BRERFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBuZWdhdGl2ZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZWdhdGl2ZUlkKG5lZ2F0aXZlSWQgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFkZCBuZXcgaXRlbVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJJdGVtc01hbmFnZXIiLCJpbXBvcnQge0FDVElPTlN9IGZyb20gXCIuL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9IRUlHSFQ6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJIID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJILmhlaWdodCA9IGFjdGlvbi5wYXlsb2FkLmhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFySH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckJnID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJCZy5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckJnfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9URVhUX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyVGMgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhclRjLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhclRjfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9TUEFDSU5HX09QVElPTjpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhclNwYWNpbmcgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhclNwYWNpbmcuc3BhY2luZ09wdGlvbiA9IGFjdGlvbi5wYXlsb2FkLnNwYWNpbmdPcHRpb247XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhclNwYWNpbmd9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX1RFWFRfU0laRTpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckZvbnRTaXplID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJGb250U2l6ZS5mb250U2l6ZSA9IGFjdGlvbi5wYXlsb2FkLmZvbnRTaXplO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJGb250U2l6ZX1cblxuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEOlxuICAgICAgICAgICAgbGV0IG5ld05hdmJhckl0ZW1zVGV4dCA9IHN0YXRlLm5hdmJhci5pdGVtcztcbiAgICAgICAgICAgIG5ld05hdmJhckl0ZW1zVGV4dC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSB1bmRlZmluZWQgJiYgaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0ID0gYWN0aW9uLnBheWxvYWQudGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckNoYW5nZWRJdGVtc1RleHQgPSB7Li4uc3RhdGUubmF2YmFyLCBpdGVtczogbmV3TmF2YmFySXRlbXNUZXh0fTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVGV4dH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSVRFTV9VUkxfVVBEQVRFRDpcbiAgICAgICAgICAgIGxldCBuZXdOYXZiYXJJdGVtc1VybCA9IHN0YXRlLm5hdmJhci5pdGVtcztcbiAgICAgICAgICAgIG5ld05hdmJhckl0ZW1zVXJsID0gbmV3TmF2YmFySXRlbXNVcmwubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSB1bmRlZmluZWQgJiYgaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCB1cmw6IGFjdGlvbi5wYXlsb2FkLnVybH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJDaGFuZ2VkSXRlbXNVcmwgPSB7Li4uc3RhdGUubmF2YmFyLCBpdGVtczogbmV3TmF2YmFySXRlbXNVcmx9O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJDaGFuZ2VkSXRlbXNVcmx9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0lURU1fSVRFTV9ERUxFVEVEOlxuICAgICAgICAgICAgY29uc3Qgb2xkTmF2YmFySXRlbXMgPSBzdGF0ZS5uYXZiYXIuaXRlbXM7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJJdGVtc0FmdGVyRGVsZXRpbmcgPSBvbGROYXZiYXJJdGVtcy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAgICAgICAgIGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQWZ0ZXJEZWxldGlvbiA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyQWZ0ZXJEZWxldGlvbi5pdGVtcyA9IG5ld05hdmJhckl0ZW1zQWZ0ZXJEZWxldGluZztcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQWZ0ZXJEZWxldGlvbn07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSVRFTV9BRERFRDpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdkl0ZW1zID0gc3RhdGUubmF2YmFyLml0ZW1zO1xuICAgICAgICAgICAgbmV3TmF2SXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZC5uZXdJdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckFmdGVyQWRkaW5nID0gey4uLnN0YXRlLm5hdmJhciwgaXRlbXM6IG5ld05hdkl0ZW1zfTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQWZ0ZXJBZGRpbmd9O1xuXG4gICAgICAgIGNhc2UgQUNUSU9OUy5CT0RZX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5ID0gey4uLnN0YXRlLmJvZHl9O1xuICAgICAgICAgICAgbmV3Qm9keS5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBib2R5OiBuZXdCb2R5fTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfVEVYVF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHlUYyA9IHsuLi5zdGF0ZS5ib2R5fTtcbiAgICAgICAgICAgIG5ld0JvZHlUYy5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogbmV3Qm9keVRjfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfRk9OVF9TSVpFOlxuICAgICAgICAgICAgY29uc3QgbmV3Qm9keUZzID0gey4uLnN0YXRlLmJvZHl9O1xuICAgICAgICAgICAgbmV3Qm9keUZzLmZvbnRTaXplID0gYWN0aW9uLnBheWxvYWQuZm9udFNpemU7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBib2R5OiBuZXdCb2R5RnN9O1xuXG4gICAgICAgIGNhc2UgQUNUSU9OUy5GT09URVJfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0Zvb3RlckJnID0gey4uLnN0YXRlLmZvb3Rlcn07XG4gICAgICAgICAgICBuZXdGb290ZXJCZy5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBmb290ZXI6IG5ld0Zvb3RlckJnfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkZPT1RFUl9IRUlHSFQ6XG4gICAgICAgICAgICBjb25zdCBuZXdGb290ZXJIZWlnaHQgPSB7Li4uc3RhdGUuZm9vdGVyfTtcbiAgICAgICAgICAgIG5ld0Zvb3RlckhlaWdodC5oZWlnaHQgPSBhY3Rpb24ucGF5bG9hZC5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBmb290ZXI6IG5ld0Zvb3RlckhlaWdodH1cbiAgICAgICAgY2FzZSBBQ1RJT05TLkZPT1RFUl9URVhUX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3Rm9vdGVyVGMgPSB7Li4uc3RhdGUuZm9vdGVyfTtcbiAgICAgICAgICAgIG5ld0Zvb3RlclRjLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBmb290ZXI6IG5ld0Zvb3RlclRjfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkZPT1RFUl9GT05UX1NJWkU6XG4gICAgICAgICAgICBjb25zdCBuZXdGb290ZXJGcyA9IHsuLi5zdGF0ZS5mb290ZXJ9O1xuICAgICAgICAgICAgbmV3Rm9vdGVyRnMuZm9udFNpemUgPSBhY3Rpb24ucGF5bG9hZC5mb250U2l6ZTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGZvb3RlcjogbmV3Rm9vdGVyRnN9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgQ3JlYXRlUGFnZVdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlUGFnZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICA8Q3JlYXRlUGFnZVdyYXBwZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDcmVhdGVQYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL2NyZWF0ZVBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxDcmVhdGVQYWdlQ29udGFpbmVyIC8+LFxuICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=