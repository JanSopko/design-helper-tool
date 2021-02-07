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

},[["./assets/js/react/pages/create.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","vendors~create","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL0Zsb2F0aW5nV2luZG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvRWxlbWVudEVkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvbWVudS9OYXZiYXJJdGVtc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvY3JlYXRlUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImVsZW1lbnRPclBhcmVudEhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsIkZsb2F0aW5nV2luZG93IiwiaW5pdEFjdGl2ZSIsImluaXRDb250ZW50cyIsIm5lZWRzV2lkZSIsIndpbmRvd0NsYXNzTmFtZSIsIm92ZXJUb3BDbGFzc05hbWUiLCJ3aWRlQ2xhc3NOYW1lIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VFZmZlY3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm1hcCIsIml0ZW0iLCJBQ1RJT05TIiwiTkFWQkFSX0hFSUdIVCIsIk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SIiwiTkFWQkFSX1RFWFRfQ09MT1IiLCJOQVZCQVJfVEVYVF9TSVpFIiwiTkFWQkFSX1NQQUNJTkdfT1BUSU9OIiwiTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEIiwiTkFWQkFSX0lURU1fVVJMX1VQREFURUQiLCJOQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQiLCJOQVZCQVJfSVRFTV9BRERFRCIsIkJPRFlfQkFDS0dST1VORF9DT0xPUiIsIkJPRFlfVEVYVF9DT0xPUiIsIkJPRFlfRk9OVF9TSVpFIiwiQk9EWV9QQURESU5HIiwiRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1IiLCJGT09URVJfVEVYVF9DT0xPUiIsIkZPT1RFUl9GT05UX1NJWkUiLCJGT09URVJfSEVJR0hUIiwiSU5JVF9TVFlMRSIsIm5hdmJhciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImluaXQiLCJsYXlvdXREYXRhIiwicGFnZVN0cnVjdHVyZSIsInNhdmVQYWdlIiwicGF5bG9hZCIsImF4aW9zIiwicG9zdCIsInBhZ2VIYXNoIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwiYWxlcnQiLCJDcmVhdGVQYWdlV3JhcHBlciIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhdmFpbGFibGVTcGFjaW5nT3B0aW9ucyIsImZsZXhTdGFydCIsImZsZXhFbmQiLCJzcGFjZUFyb3VuZCIsIm5hdkl0ZW1zTmVlZE1hcmdpbiIsInNwYWNpbmdPcHRpb24iLCJnZXRTcGFjaW5nU3R5bGUiLCJnZXROYXZJdGVtc1N0eWxlIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpbiIsIkNyZWF0aW9uRGVzayIsInN0b3JlIiwiYm9keVN0eWxlIiwiYm9keSIsIm5hdkl0ZW1zIiwiaXRlbXMiLCJjb250ZW50U3R5bGUiLCJjb250ZW50IiwicGFkZGluZyIsInNwYWNpbmciLCJuYXZTdHlsZSIsImZvb3RlclN0eWxlIiwiZm9vdGVyIiwibmF2SXRlbXNTdHlsZSIsInVybCIsInRleHQiLCJtZW51VGV4dHMiLCJzaWRlYmFyIiwic2VjdGlvbnMiLCJtZW51T3B0aW9uQWN0aXZlIiwiZ2V0TWVudU9wdGlvbkFjdGl2ZSIsIm1lbnVSZWR1Y2VyIiwiY3VycmVudEl0ZW0iLCJhY3RpdmVPcHRpb24iLCJDcmVhdGVNZW51IiwiYWN0aXZlTWVudU9wdGlvbiIsIm1lbnVEaXNwYXRjaCIsIk5hdmJhckVkaXRvciIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwidGV4dENvbG9yIiwic2V0VGV4dENvbG9yIiwic2V0SGVpZ2h0IiwibmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlIiwic2V0TmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlIiwiY2xvc2VOYXZJdGVtc01vZGFsIiwiZSIsInRhcmdldCIsIndpbmRvdyIsIm9uY2xpY2siLCJ0eXBlIiwiaGV4IiwidmFsdWUiLCJmb250U2l6ZSIsIk51bWJlciIsInBhcnNlSW50IiwiQm9keUVkaXRvciIsInNldEJhY2tncm91bmRDb2xvciIsInNldENvbG9yIiwiZmxleEZsb3ciLCJTaWRlYmFyRWRpdG9yIiwiRm9vdGVyRWRpdG9yIiwiU2VjdGlvbnNFZGl0b3IiLCJNZW51T3B0aW9uIiwiY2hldnJvbkNsYXNzIiwiaGFuZGxlQ2xpY2siLCJOYXZiYXJJdGVtc01hbmFnZXIiLCJuZWdhdGl2ZUlkIiwic2V0TmVnYXRpdmVJZCIsIml0ZW1zSW5wdXRzIiwibGVuZ3RoIiwiaWQiLCJuZXdJdGVtIiwiYWN0aW9uIiwibmV3TmF2YmFySCIsIm5ld05hdmJhckJnIiwibmV3TmF2YmFyVGMiLCJuZXdOYXZiYXJTcGFjaW5nIiwibmV3TmF2YmFyRm9udFNpemUiLCJuZXdOYXZiYXJJdGVtc1RleHQiLCJmb3JFYWNoIiwidW5kZWZpbmVkIiwibmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVGV4dCIsIm5ld05hdmJhckl0ZW1zVXJsIiwibmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVXJsIiwib2xkTmF2YmFySXRlbXMiLCJuZXdOYXZiYXJJdGVtc0FmdGVyRGVsZXRpbmciLCJmaWx0ZXIiLCJuZXdOYXZiYXJBZnRlckRlbGV0aW9uIiwibmV3TmF2SXRlbXMiLCJwdXNoIiwibmV3TmF2YmFyQWZ0ZXJBZGRpbmciLCJuZXdCb2R5IiwibmV3Qm9keVRjIiwibmV3Qm9keUZzIiwibmV3Qm9keUNvbnRlbnRQYWRkaW5nIiwibmV3Rm9vdGVyQmciLCJuZXdGb290ZXJIZWlnaHQiLCJuZXdGb290ZXJUYyIsIm5ld0Zvb3RlckZzIiwiQ3JlYXRlUGFnZUNvbnRhaW5lciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLE9BQUQsRUFBVUMsU0FBVixFQUF3QjtBQUNwRCxNQUFJRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCRixTQUEzQixDQUFKLEVBQTJDO0FBQ3ZDLFdBQU8sSUFBUDtBQUNILEdBRkQsTUFFTyxJQUFJRCxPQUFPLENBQUNJLGFBQVosRUFBMkI7QUFDOUIsV0FBT0wsdUJBQXVCLENBQUNDLE9BQU8sQ0FBQ0ksYUFBVCxFQUF3QkgsU0FBeEIsQ0FBOUI7QUFDSDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDQVBEOztBQVNlRixzRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRUEsSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFp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Q0FBQ2dCLGdCQUFiO0FBQ0ksVUFBTThILFdBQVcscUJBQU94RyxLQUFLLENBQUMyQixNQUFiLENBQWpCOztBQUNBNkUsaUJBQVcsQ0FBQzlDLFFBQVosR0FBdUJvQixNQUFNLENBQUMxRixPQUFQLENBQWVzRSxRQUF0QztBQUNBLDZDQUFXMUQsS0FBWDtBQUFrQjJCLGNBQU0sRUFBRTZFO0FBQTFCO0FBMUZSO0FBNEZILENBN0ZEOztBQStGZXpHLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTs7SUFFcUIwRyxtQjs7Ozs7QUFDakIsaUNBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVRO0FBQ0wsMEJBQ0ksc0ZBQ0ksNERBQUMsK0RBQUQsT0FESixlQUVJLDREQUFDLHVGQUFELE9BRkosQ0FESjtBQU1IOzs7O0VBWjRDQyw2Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7OztBQ0p2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLHVFQUFELE9BREosRUFFSXhELE1BQU0sQ0FBQ3lELFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLE1BQS9CLENBRkosRSIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZsb2F0aW5nV2luZG93ID0gKHtpbml0QWN0aXZlID0gZmFsc2UsIGluaXRDb250ZW50cyA9IFtdLCBuZWVkc1dpZGUgPSBmYWxzZX0pID0+IHtcbiAgICBjb25zdCB3aW5kb3dDbGFzc05hbWUgPSBcImZsb2F0aW5nLXdpbmRvd1wiO1xuICAgIGNvbnN0IG92ZXJUb3BDbGFzc05hbWUgPSBcIm92ZXItdG9wXCI7XG4gICAgY29uc3Qgd2lkZUNsYXNzTmFtZSA9ICcgd2luZG93LXdpZGUnO1xuXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdChcbiAgICAgICAgKCkgPT4gc2V0QWN0aXZlKGluaXRBY3RpdmUpLFxuICAgICAgICBbXVxuICAgICk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYWN0aXZlID8gd2luZG93Q2xhc3NOYW1lIDogYCR7d2luZG93Q2xhc3NOYW1lfSAke292ZXJUb3BDbGFzc05hbWV9YDtcbiAgICBpZiAobmVlZHNXaWRlKSBjbGFzc05hbWUgKz0gd2lkZUNsYXNzTmFtZTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidmbGV4LWVuZCd9fT5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGl0LWJ1dHRvbiBidXR0b24tcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldEFjdGl2ZShmYWxzZSl9fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbml0Q29udGVudHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxvYXRpbmdXaW5kb3c7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCB7IENyZWF0aW9uRGVzayB9IGZyb20gXCIuL0NyZWF0aW9uRGVza1wiO1xuaW1wb3J0IHsgQ3JlYXRlTWVudSB9IGZyb20gXCIuL21lbnUvQ3JlYXRlTWVudVwiO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IEFDVElPTlMgPSB7XG4gICAgTkFWQkFSX0hFSUdIVDogJ3NldE5hdmJhckhlaWdodCcsXG4gICAgTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1I6ICdzZXROYXZiYXJCYWNrZ3JvdW5kQ29sb3InLFxuICAgIE5BVkJBUl9URVhUX0NPTE9SOiAnc2V0TmF2YmFyVGV4dENvbG9yJyxcbiAgICBOQVZCQVJfVEVYVF9TSVpFOiAnc2V0TmF2YmFyVGV4dFNpemUnLFxuICAgIE5BVkJBUl9TUEFDSU5HX09QVElPTjogJ3NldE5hdmJhclNwYWNpbmdPcHRpb24nLFxuICAgIE5BVkJBUl9JVEVNX1RFWFRfVVBEQVRFRDogJ3NldE5hdmJhckl0ZW1UZXh0JyxcbiAgICBOQVZCQVJfSVRFTV9VUkxfVVBEQVRFRDogJ3NldE5hdmJhckl0ZW1VcmwnLFxuICAgIE5BVkJBUl9JVEVNX0lURU1fREVMRVRFRDogJ2RlbGV0ZU5hdmJhckl0ZW0nLFxuICAgIE5BVkJBUl9JVEVNX0FEREVEOiAnYWRkZWROYXZiYXJJdGVtJyxcblxuICAgIEJPRFlfQkFDS0dST1VORF9DT0xPUjogJ3NldEJvZHlCYWNrcm91bmRDb2xvcicsXG4gICAgQk9EWV9URVhUX0NPTE9SOiAnc2V0Qm9keVRleHRDb2xvcicsXG4gICAgQk9EWV9GT05UX1NJWkU6ICdzZXRCb2R5Rm9udFNpemUnLFxuICAgIEJPRFlfUEFERElORzogJ3NldEJvZHlQYWRkaW5nJyxcblxuICAgIEZPT1RFUl9CQUNLR1JPVU5EX0NPTE9SOiAnc2V0Rm9vdGVyQmFja2dyb3VuZENvbG9yJyxcbiAgICBGT09URVJfVEVYVF9DT0xPUjogJ3NldEZvb3RlclRleHRDb2xvcicsXG4gICAgRk9PVEVSX0ZPTlRfU0laRTogJ3NldEZvb3RlckZvbnRTaXplJyxcbiAgICBGT09URVJfSEVJR0hUOiAnc2V0Rm9vdGVySGVpZ2h0J1xufTtcblxuZXhwb3J0IGNvbnN0IElOSVRfU1RZTEUgPSB7XG4gICAgbmF2YmFyOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhYWFhYWEnLFxuICAgICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICBoZWlnaHQ6IDVcbiAgICB9XG59O1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIHJldHVybiBsYXlvdXREYXRhLnBhZ2VTdHJ1Y3R1cmU7XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlUGFnZSA9IHBheWxvYWQgPT4ge1xuICAgIHBheWxvYWQubmF2YmFyLmhlaWdodCA9IHBheWxvYWQubmF2YmFyLmhlaWdodCB8fCBJTklUX1NUWUxFLm5hdmJhci5oZWlnaHQ7IC8vQHRvZG8gcmVmYWN0b3IhXG4gICAgYXhpb3MucG9zdChgL2RhdGEvdXBkYXRlX3BhZ2UvJHtsYXlvdXREYXRhLnBhZ2VIYXNofWAsIHtwYXlsb2FkfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgQ3JlYXRlUGFnZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHt9LCBpbml0KTtcblxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cbiAgICAgICAgICAgIDxDcmVhdGVNZW51IHN0b3JlPXtzdGF0ZX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+XG4gICAgICAgICAgICA8Q3JlYXRpb25EZXNrIHN0b3JlPXtzdGF0ZX0vPlxuICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElOSVRfU1RZTEUgfSBmcm9tIFwiLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuXG5jb25zdCBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucyA9IHtcbiAgICBmbGV4U3RhcnQ6IDEsXG4gICAgZmxleEVuZDogMixcbiAgICBzcGFjZUFyb3VuZDogM1xufTtcblxuY29uc3QgbmF2SXRlbXNOZWVkTWFyZ2luID0gc3BhY2luZ09wdGlvbiA9PiB7XG4gICAgcmV0dXJuIHNwYWNpbmdPcHRpb24gIT09IGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLnNwYWNlQXJvdW5kO1xufVxuXG5jb25zdCBnZXRTcGFjaW5nU3R5bGUgPSBzcGFjaW5nT3B0aW9uID0+IHtcbiAgICBzd2l0Y2ggKHNwYWNpbmdPcHRpb24pIHtcbiAgICAgICAgY2FzZSBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucy5mbGV4RW5kOlxuICAgICAgICAgICAgcmV0dXJuIHtkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnfTtcbiAgICAgICAgY2FzZSBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucy5zcGFjZUFyb3VuZDpcbiAgICAgICAgICAgIHJldHVybiB7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCd9O1xuICAgICAgICBjYXNlIGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLmZsZXhTdGFydDpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnfTtcbiAgICB9XG59O1xuXG5jb25zdCBnZXROYXZJdGVtc1N0eWxlID0gc3BhY2luZ09wdGlvbiA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSB7dGV4dERlY29yYXRpb246J25vbmUnLGNvbG9yOidpbmhlcml0J307XG4gICAgaWYgKG5hdkl0ZW1zTmVlZE1hcmdpbihzcGFjaW5nT3B0aW9uKSkge1xuICAgICAgICBzdHlsZS5tYXJnaW4gPSAnMCAycmVtJztcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xufVxuXG5leHBvcnQgY29uc3QgQ3JlYXRpb25EZXNrID0gKHtzdG9yZSA9IHt9fSkgPT4ge1xuXG4gICAgc3RvcmUubmF2YmFyID0gc3RvcmUubmF2YmFyIHx8IElOSVRfU1RZTEUubmF2YmFyO1xuICAgIGxldCBib2R5U3R5bGUgPSBzdG9yZS5ib2R5IHx8IHt9O1xuICAgIGxldCBuYXZJdGVtcyA9IHN0b3JlLm5hdmJhci5pdGVtcyB8fCBbXTtcbiAgICBsZXQgY29udGVudFN0eWxlID0gc3RvcmUuYm9keS5jb250ZW50IHx8IHt9O1xuICAgIGNvbnRlbnRTdHlsZSA9IHsuLi5jb250ZW50U3R5bGUsIHBhZGRpbmc6YDMwcHggJHtjb250ZW50U3R5bGUucGFkZGluZ31weGB9O1xuICAgIGNvbnN0IHNwYWNpbmcgPSBnZXRTcGFjaW5nU3R5bGUoc3RvcmUubmF2YmFyLnNwYWNpbmdPcHRpb24pO1xuICAgIGNvbnN0IG5hdlN0eWxlID0gey4uLnN0b3JlLm5hdmJhciwgaGVpZ2h0OiBgJHtzdG9yZS5uYXZiYXIuaGVpZ2h0IHx8IDV9cmVtYCwgLi4uc3BhY2luZ307XG4gICAgbGV0IGZvb3RlclN0eWxlID0gey4uLnN0b3JlLmZvb3RlciwgaGVpZ2h0OiBgJHtzdG9yZS5mb290ZXIuaGVpZ2h0IHx8IDB9cmVtYH07XG4gICAgLy8gbmF2U3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAvLyBuYXZTdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xuICAgIGNvbnN0IG5hdkl0ZW1zU3R5bGUgPSBnZXROYXZJdGVtc1N0eWxlKHN0b3JlLm5hdmJhci5zcGFjaW5nT3B0aW9uKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVhdGlvbi1kZXNrXCIgc3R5bGU9e2JvZHlTdHlsZX0+XG4gICAgICAgICAgICA8bmF2IHN0eWxlPXtuYXZTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17bmF2SXRlbXNTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPjtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2NvbnRlbnRTdHlsZX0+XG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICBIZWFkaW5nXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGV1IGVyYXQgbG9ib3J0aXMsIHZhcml1cyBhbnRlIGF0LCBhY2N1bXNhbiB0ZWxsdXMuIEN1cmFiaXR1ciB2YXJpdXMsIG5lcXVlIGlkIGRpY3R1bSB1bGxhbWNvcnBlciwgbmlzaSBsaWJlcm8gZWdlc3RhcyBlc3QsIHZlbCB2ZW5lbmF0aXMgZXggaXBzdW0gYXQgZXN0LiBVdCBpbiBsYWN1cyBhbnRlLiBDdXJhYml0dXIgZmF1Y2lidXMgcmlzdXMgbWF1cmlzLCBhIHRpbmNpZHVudCBtZXR1cyBtb2xsaXMgZXUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBQZWxsZW50ZXNxdWUgYSBlc3QgZmFjaWxpc2lzLCBlZ2VzdGFzIHVybmEgZXQsIHBoYXJldHJhIGFyY3UuIE5hbSBpbXBlcmRpZXQgZGljdHVtIG51bGxhIGluIHZvbHV0cGF0LiBDcmFzIHRlbXB1cyB1dCBvcmNpIGluIGNvbmRpbWVudHVtLiBGdXNjZSBsdWN0dXMsIGR1aSBlZ2V0IGJsYW5kaXQgbWF0dGlzLCBsYWN1cyBwdXJ1cyBjb25zZWN0ZXR1ciBsb3JlbSwgbmVjIG1vbGVzdGllIG5lcXVlIGVzdCBsdWN0dXMgZmVsaXMuIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBWaXZhbXVzIG1hZ25hIG51bmMsIGFjY3Vtc2FuIGluIG1hbGVzdWFkYSBpZCwgZ3JhdmlkYSBmZXVnaWF0IHRlbGx1cy4gUGhhc2VsbHVzIGEgZXN0IHZpdGFlIHJpc3VzIGludGVyZHVtIGdyYXZpZGEuIFV0IHNlbXBlciB0ZWxsdXMgZXQgZmVsaXMgbWF4aW11cywgc2l0IGFtZXQgdGluY2lkdW50IG1ldHVzIGxhY2luaWEuXG5cbiAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgdmVsIGxpZ3VsYSBvcm5hcmUsIGRpZ25pc3NpbSByaXN1cyBhY2N1bXNhbiwgcG9zdWVyZSBhdWd1ZS4gSW50ZWdlciBvcmNpIGxpYmVybywgcGxhY2VyYXQgZWdldCBhdWN0b3IgYWMsIGFsaXF1ZXQgZXUgdHVycGlzLiBEb25lYyBzaXQgYW1ldCBpbnRlcmR1bSBqdXN0by4gSW50ZWdlciB2b2x1dHBhdCBldCBtYXVyaXMgZXQgZWZmaWNpdHVyLiBJbnRlZ2VyIGVmZmljaXR1ciBzYXBpZW4gZXUgbWFsZXN1YWRhIGNvbnNlY3RldHVyLiBQaGFzZWxsdXMgdGluY2lkdW50LCB1cm5hIGlkIGVmZmljaXR1ciBmYWNpbGlzaXMsIGRpYW0gZmVsaXMgZmFjaWxpc2lzIGVuaW0sIGFjIGNvbnNlcXVhdCBkb2xvciBwdXJ1cyB1dCB1cm5hLiBOYW0gYXQgbWF4aW11cyBtYXVyaXMuIFByYWVzZW50IHRvcnRvciBvZGlvLCBtYWxlc3VhZGEgdmVsIGRpYW0gdXQsIHNvbGxpY2l0dWRpbiBwbGFjZXJhdCBsaWd1bGEuIEV0aWFtIGV0IHNvZGFsZXMgbmlzaS4gRG9uZWMgZXUgcmlzdXMgYWxpcXVhbSwgcG9zdWVyZSBqdXN0byBuZWMsIGhlbmRyZXJpdCBudW5jLiBTdXNwZW5kaXNzZSBoZW5kcmVyaXQgY29tbW9kbyBsZW8gbm9uIHByZXRpdW0uIFNlZCBkaWduaXNzaW0gaW1wZXJkaWV0IGxlbyBzZWQgcG9ydGEuIE51bGxhIGJsYW5kaXQgYXJjdSBpZCBudW5jIGVsZWlmZW5kIGltcGVyZGlldCBldSBzZWQgbmlzaS4gU2VkIGxpZ3VsYSBtYXNzYSwgY29udmFsbGlzIHRpbmNpZHVudCBudW5jIHF1aXMsIHNlbXBlciBjb25zZWN0ZXR1ciBsYWN1cy4gTWFlY2VuYXMgdmVsIG51bGxhIHZlbGl0LlxuXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBzZWQgcXVhbSBsaWJlcm8uIFByb2luIGF0IGFsaXF1ZXQgbmlzbCwgZXUgZWZmaWNpdHVyIGxpZ3VsYS4gQ3VyYWJpdHVyIGEgdGluY2lkdW50IHZlbGl0LiBQcmFlc2VudCBhY2N1bXNhbiwgb3JjaSBpbiBtb2xsaXMgc2VtcGVyLCBkaWFtIHRlbGx1cyBldWlzbW9kIHF1YW0sIHZlc3RpYnVsdW0gZ3JhdmlkYSBvcmNpIGZlbGlzIHNpdCBhbWV0IGV4LiBNYXVyaXMgbW9sZXN0aWUgZXggaWQgc2FwaWVuIGVsZW1lbnR1bSB1bGxhbWNvcnBlci4gQ3VyYWJpdHVyIG5lcXVlIHJpc3VzLCBmcmluZ2lsbGEgdmVsIHBvc3VlcmUgZXQsIGJpYmVuZHVtIHV0IGRvbG9yLiBQcmFlc2VudCBleCBtaSwgbW9sbGlzIGluIHRpbmNpZHVudCBzaXQgYW1ldCwgc29kYWxlcyBuZWMgZHVpLiBVdCBkaWN0dW0gaW1wZXJkaWV0IGp1c3RvIGlkIHN1c2NpcGl0LiBDcmFzIGN1cnN1cywgcXVhbSB2aXRhZSB1bHRyaWNpZXMgZmluaWJ1cywgbWFzc2EganVzdG8gcHJldGl1bSBzZW0sIGluIHZlaGljdWxhIG1hZ25hIGFudGUgdmVsIGVuaW0uIERvbmVjIGZpbmlidXMgZXJvcyBhIGxhb3JlZXQgY29uc2VjdGV0dXIuIEFlbmVhbiBhdWd1ZSBvcmNpLCBncmF2aWRhIGlkIG1hdHRpcyBxdWlzLCBmZXVnaWF0IHBlbGxlbnRlc3F1ZSBtaS5cblxuICAgICAgICAgICAgICAgIFZlc3RpYnVsdW0gYmliZW5kdW0gcGVsbGVudGVzcXVlIG1pIGN1cnN1cyBzb2RhbGVzLiBOdWxsYSB1dCBsYWNpbmlhIHRlbGx1cywgdml0YWUgdWxsYW1jb3JwZXIgbmliaC4gTWF1cmlzIHZpdGFlIHBoYXJldHJhIGxlby4gTW9yYmkgaW4gZGlhbSBldSBhdWd1ZSB0ZW1wdXMgcGhhcmV0cmEuIE1hdXJpcyBpYWN1bGlzIG51bGxhIG5vbiByaXN1cyBwbGFjZXJhdCBhbGlxdWFtIGEgdml0YWUgbWF1cmlzLiBNb3JiaSBuZWMgbnVuYyB2aXRhZSBxdWFtIGF1Y3RvciB0ZW1wdXMuIE1hZWNlbmFzIGxhY2luaWEgc29sbGljaXR1ZGluIGxlby5cblxuICAgICAgICAgICAgICAgIFNlZCBvZGlvIGZlbGlzLCBmZXVnaWF0IHZpdGFlIHVsbGFtY29ycGVyIHVsbGFtY29ycGVyLCBtYXR0aXMgbGFvcmVldCBtYWduYS4gTW9yYmkgY29udmFsbGlzIGFsaXF1YW0gZmFjaWxpc2lzLiBQZWxsZW50ZXNxdWUgYWMgdmVsaXQgbmlzbC4gUGVsbGVudGVzcXVlIG9ybmFyZSB1dCBsYWN1cyBuZWMgbWFsZXN1YWRhLiBDdXJhYml0dXIgZmluaWJ1cywgZmVsaXMgcXVpcyBkYXBpYnVzIG1heGltdXMsIGRpYW0gbmlzbCBmaW5pYnVzIHZlbGl0LCB2ZWwgb3JuYXJlIHF1YW0gbWFzc2EgdXQgbGVjdHVzLiBQcm9pbiBtZXR1cyBhdWd1ZSwgc2NlbGVyaXNxdWUgdmVsIGV4IG5lYywgcG9ydHRpdG9yIGNvbW1vZG8gZWxpdC4gUGVsbGVudGVzcXVlIGEgb3JjaSB0dXJwaXMuIFBlbGxlbnRlc3F1ZSBpbXBlcmRpZXQgbHVjdHVzIG5pc2wsIGluIHNjZWxlcmlzcXVlIGV4IGNvbnNlcXVhdCBpZC5cblxuICAgICAgICAgICAgICAgIERvbmVjIHNvbGxpY2l0dWRpbiwgZXJhdCBub24gc2NlbGVyaXNxdWUgbW9sZXN0aWUsIG1hdXJpcyBlcm9zIGZhdWNpYnVzIGxvcmVtLCBzZWQgYmliZW5kdW0gbWF1cmlzIG5pc2kgc2VkIHNlbS4gTWF1cmlzIGF0IGRpZ25pc3NpbSBpcHN1bS4gVXQgdHJpc3RpcXVlLCBhcmN1IG5vbiB2b2x1dHBhdCBlbGVpZmVuZCwgcmlzdXMgZXN0IHBvcnR0aXRvciBudW5jLCBxdWlzIGxhY2luaWEgZHVpIGRpYW0gZXQgbGVjdHVzLiBEb25lYyBkaWduaXNzaW0gZWxlaWZlbmQgYWxpcXVhbS4gTnVuYyB0ZW1wb3IgbGFvcmVldCBlbmltLCB1dCBpYWN1bGlzIG5pYmggdGVtcG9yIHNpdCBhbWV0LiBOdW5jIGxhb3JlZXQgbG9yZW0gdmVsaXQsIGV1IGxvYm9ydGlzIHR1cnBpcyB1bHRyaWNpZXMgZWdldC4gU2VkIGFjY3Vtc2FuIGZhY2lsaXNpcyB2ZWxpdCwgdnVscHV0YXRlIHZhcml1cyBleCBkYXBpYnVzIG5vbi4gTmFtIGFsaXF1ZXQgdWx0cmljZXMgZWZmaWNpdHVyLiBVdCBuZWMgc2FwaWVuIHBvc3VlcmUsIGFjY3Vtc2FuIGxpZ3VsYSBub24sIGx1Y3R1cyBhdWd1ZS4gVmVzdGlidWx1bSB0aW5jaWR1bnQgaWFjdWxpcyBudW5jIHNpdCBhbWV0IHRyaXN0aXF1ZS4gTnVsbGFtIGlkIGFyY3Ugdml0YWUgYXJjdSBmaW5pYnVzIHNvZGFsZXMuIEV0aWFtIHNlZCBhbGlxdWV0IGVsaXQsIGVnZXQgZnJpbmdpbGxhIGxlY3R1cy5cblxuICAgICAgICAgICAgICAgIFNlZCBpYWN1bGlzIGp1c3RvIGV1IGp1c3RvIGVnZXN0YXMsIG5lYyBwb3N1ZXJlIGVyb3MgY3Vyc3VzLiBNb3JiaSBtYXVyaXMgbmliaCwgYWNjdW1zYW4gc2l0IGFtZXQgZXN0IHNpdCBhbWV0LCBmcmluZ2lsbGEgbW9sZXN0aWUgbmVxdWUuIE51bmMgZXQgdHVycGlzIHF1aXMgZGlhbSBwaGFyZXRyYSBydXRydW0uIEFlbmVhbiBpZCBuZXF1ZSBkaWFtLiBEb25lYyBuaWJoIGF1Z3VlLCB2ZW5lbmF0aXMgaW4gbG9ib3J0aXMgdmVsLCB1bHRyaWNpZXMgZmluaWJ1cyBhbnRlLiBEb25lYyBpZCBjdXJzdXMgbGVvLiBTZWQgZGlnbmlzc2ltIGlwc3VtIGF0IG1vbGxpcyByaG9uY3VzLlxuXG4gICAgICAgICAgICAgICAgU3VzcGVuZGlzc2UgcG9ydHRpdG9yIHNjZWxlcmlzcXVlIGxpYmVybywgaW4gYWxpcXVhbSBzZW0gZWxlaWZlbmQgc2VkLiBNYXVyaXMgdml0YWUgcGhhcmV0cmEgbGVvLiBQcmFlc2VudCBmcmluZ2lsbGEgbWV0dXMgZWdldCBhbnRlIG1hdHRpcywgZWdldCBpbXBlcmRpZXQgZWxpdCBkaWduaXNzaW0uIERvbmVjIGV1IHZvbHV0cGF0IG5pc2kuIE5hbSBlZ2VzdGFzIGlwc3VtIHB1cnVzLCBub24gYWxpcXVldCBvcmNpIHBlbGxlbnRlc3F1ZSBub24uIFNlZCB1dCB2ZWhpY3VsYSB1cm5hLCBub24gZmVybWVudHVtIHJpc3VzLiBOYW0gbm9uIGZldWdpYXQgbGlndWxhLCB2ZWwgY29uc2VxdWF0IGZlbGlzLiBTdXNwZW5kaXNzZSBpbiB2ZXN0aWJ1bHVtIGFudGUuIFNlZCBvcm5hcmUgYXVjdG9yIGxlbywgc2l0IGFtZXQgbW9sZXN0aWUgaXBzdW0gY3Vyc3VzIHF1aXMuIENyYXMgc2VkIHNvbGxpY2l0dWRpbiBwdXJ1cy4gTnVsbGEgZWdldCB1bHRyaWNpZXMgb3JjaSwgcXVpcyBncmF2aWRhIG5pc2wuIFZlc3RpYnVsdW0gdnVscHV0YXRlIGxhY2luaWEgY29tbW9kby4gVXQgcGxhY2VyYXQgYW50ZSBhdCBzdXNjaXBpdCBmaW5pYnVzLlxuXG4gICAgICAgICAgICAgICAgTnVuYyBncmF2aWRhIG51bGxhIHF1aXMgdGVsbHVzIGNvbnZhbGxpcywgbmVjIGVsZWlmZW5kIHNlbSBwcmV0aXVtLiBBbGlxdWFtIGVsZWlmZW5kIGZhY2lsaXNpcyBwb3J0dGl0b3IuIEluIGFudGUgZW5pbSwgY3Vyc3VzIHZpdGFlIHNvZGFsZXMgYWMsIHNlbXBlciBpZCBkdWkuIFN1c3BlbmRpc3NlIGV0IG5pc2wgdXQgZHVpIHVsbGFtY29ycGVyIGJpYmVuZHVtIGV0IHV0IGVyb3MuIE51bGxhbSBpcHN1bSBtZXR1cywgY29uc2VjdGV0dXIgdml0YWUgYmliZW5kdW0gYSwgYWxpcXVhbSBzZWQgbmVxdWUuIFN1c3BlbmRpc3NlIHNlbXBlciBuaWJoIHJpc3VzLCBxdWlzIHBvcnR0aXRvciB0b3J0b3IgbG9ib3J0aXMgc2l0IGFtZXQuIERvbmVjIGludGVyZHVtIG1pIGV0IGxhY2luaWEgZWxlbWVudHVtLlxuXG4gICAgICAgICAgICAgICAgUXVpc3F1ZSB0cmlzdGlxdWUsIGxlY3R1cyBuZWMgY29uZGltZW50dW0gc2FnaXR0aXMsIG51bmMgb2RpbyBlZ2VzdGFzIHB1cnVzLCBxdWlzIGVmZmljaXR1ciBsZW8gZGlhbSBlZ2V0IHNlbS4gRG9uZWMgaW4gdXJuYSBuZWMgc2FwaWVuIHRpbmNpZHVudCBydXRydW0uIE51bmMgdmVoaWN1bGEgbGVjdHVzIG5lYyBtYWduYSBjb25zZWN0ZXR1ciwgYSBwdWx2aW5hciBuaXNsIGZyaW5naWxsYS4gUXVpc3F1ZSBzZWQgbWF0dGlzIGxlY3R1cy4gU2VkIGF0IHBlbGxlbnRlc3F1ZSBtZXR1cy4gTnVsbGFtIHNvbGxpY2l0dWRpbiBmYWNpbGlzaXMgZWdlc3Rhcy4gTWFlY2VuYXMgaGVuZHJlcml0IGV1IHRlbGx1cyBtYXR0aXMgdWx0cmljaWVzLiBQaGFzZWxsdXMgZGFwaWJ1cyBldSBuaXNpIHF1aXMgbG9ib3J0aXMuIEV0aWFtIGltcGVyZGlldCB0aW5jaWR1bnQgbWksIHNlZCB2aXZlcnJhIHNhcGllbiBpbnRlcmR1bSBzZWQuIFBoYXNlbGx1cyBldSBpYWN1bGlzIHF1YW0sIHZlbCB2YXJpdXMgZGlhbS4gVml2YW11cyBhdCBlcm9zIHVsbGFtY29ycGVyLCB2ZWhpY3VsYSBudWxsYSBldCwgdmVzdGlidWx1bSBtYXNzYS4gRG9uZWMgbWkgbGFjdXMsIGV1aXNtb2QgaWQgbGVvIGEsIGRhcGlidXMgY29uZGltZW50dW0gbGliZXJvLiBVdCB2aXRhZSBuZXF1ZSBzaXQgYW1ldCBtYXNzYSBmcmluZ2lsbGEgc2FnaXR0aXMuIEZ1c2NlIHBvcnR0aXRvciB0cmlzdGlxdWUgdHVycGlzLCBkaWN0dW0gdmVzdGlidWx1bSBqdXN0by5cblxuICAgICAgICAgICAgICAgIE5hbSBhYyBhdWN0b3IgcHVydXMuIEFlbmVhbiByaG9uY3VzIHJpc3VzIGluIHR1cnBpcyBjb25zZXF1YXQsIHF1aXMgZWdlc3RhcyBlcm9zIG1vbGVzdGllLiBOdWxsYSBhbGlxdWV0LCBvcmNpIGV1IHVsdHJpY2VzIG1vbGVzdGllLCBsb3JlbSBuaXNpIHB1bHZpbmFyIG5pc2ksIGlkIGJpYmVuZHVtIHF1YW0ganVzdG8gcXVpcyBudWxsYS4gUHJhZXNlbnQgbmVjIGVzdCBldCB0ZWxsdXMgcnV0cnVtIHRyaXN0aXF1ZS4gU3VzcGVuZGlzc2UgaW4gYXJjdSBkdWkuIE1hZWNlbmFzIGZhY2lsaXNpcyBtYXVyaXMgaW4gZW5pbSB0cmlzdGlxdWUgYmliZW5kdW0uIE51bmMgdWxsYW1jb3JwZXIgdmVoaWN1bGEgbWksIHNlZCBydXRydW0gbWFnbmEgc29kYWxlcyB2aXRhZS4gRG9uZWMgbGlndWxhIHR1cnBpcywgbG9ib3J0aXMgc2VkIHBvcnR0aXRvciBxdWlzLCBmYXVjaWJ1cyBhYyB0dXJwaXMuIE51bGxhbSBjdXJzdXMgdm9sdXRwYXQgY29uZ3VlLiBTZWQgdGVtcHVzIGFyY3UgZXQgYmliZW5kdW0gc2VtcGVyLiBEb25lYyBhdCB0aW5jaWR1bnQgZXJhdCwgdml0YWUgc2FnaXR0aXMgdXJuYS5cblxuICAgICAgICAgICAgICAgIEFsaXF1YW0gYmxhbmRpdCBpbXBlcmRpZXQganVzdG8gZWdldCB1bHRyaWNlcy4gRG9uZWMgdml0YWUgbnVsbGEgcXVpcyBmZWxpcyBsYW9yZWV0IGZlcm1lbnR1bSBxdWlzIHZlbCBsZW8uIFBoYXNlbGx1cyB2dWxwdXRhdGUsIG51bGxhIHZlbCB2ZXN0aWJ1bHVtIHNvbGxpY2l0dWRpbiwganVzdG8gbmVxdWUgYWxpcXVhbSBleCwgYWMgbWF4aW11cyBhcmN1IHZlbGl0IHNlZCBuaXNpLiBQZWxsZW50ZXNxdWUgbG9yZW0gbWFnbmEsIGN1cnN1cyBzZWQgbWFnbmEgaW4sIHNvZGFsZXMgdm9sdXRwYXQgZGlhbS4gSW50ZWdlciBwb3N1ZXJlIGFudGUgYW50ZSwgaW4gcG9ydHRpdG9yIHRvcnRvciBtYXhpbXVzIHNlZC4gTnVuYyBhYyBudWxsYSBmZXJtZW50dW0sIG1heGltdXMgdXJuYSBxdWlzLCBjb252YWxsaXMgZXJhdC4gSW50ZWdlciBldWlzbW9kIHJ1dHJ1bSBuaXNpLCBuZWMgbW9sZXN0aWUgbmliaCBldWlzbW9kIGluLiBOdWxsYW0gaWQgbWFzc2EgaW4gbWFzc2EgbGFvcmVldCBjb21tb2RvIGluIHZpdGFlIG51bmMuIE51bmMgYWNjdW1zYW4gb2RpbyBhIG51bmMgaWFjdWxpcyBwaGFyZXRyYS4gUGhhc2VsbHVzIG1vbGxpcyBmaW5pYnVzIGxlY3R1cyBzZWQgbW9sbGlzLiBEb25lYyBldCBhdWd1ZSBxdWlzIG1pIGVsZWlmZW5kIGVnZXN0YXMuIFNlZCBxdWlzIGFjY3Vtc2FuIHR1cnBpcy5cblxuICAgICAgICAgICAgICAgIER1aXMgdGVsbHVzIHF1YW0sIGNvbnZhbGxpcyB0aW5jaWR1bnQgbmliaCBuZWMsIGVmZmljaXR1ciBzb2xsaWNpdHVkaW4gbmlzbC4gU3VzcGVuZGlzc2UgYmxhbmRpdCBlZ2V0IGVyYXQgdXQgZGlnbmlzc2ltLiBGdXNjZSBzZWQgZW5pbSBhYyBsb3JlbSBpYWN1bGlzIHBlbGxlbnRlc3F1ZSBlZ2V0IHZpdGFlIG9kaW8uIEFsaXF1YW0gZGlnbmlzc2ltIGVuaW0gdHVycGlzLCBzZWQgZmFjaWxpc2lzIGVyYXQgdm9sdXRwYXQgdGVtcG9yLiBWZXN0aWJ1bHVtIGx1Y3R1cyBsYWN1cyBzb2RhbGVzLCB1bHRyaWNlcyBudWxsYSBpZCwgc29sbGljaXR1ZGluIHR1cnBpcy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IEFlbmVhbiBzaXQgYW1ldCBsaWd1bGEgYW50ZS4gTWFlY2VuYXMgcHJldGl1bSBpZCBwdXJ1cyBlbGVtZW50dW0gZGFwaWJ1cy4gU2VkIGVuaW0gbGFjdXMsIG1vbGVzdGllIGlkIHRvcnRvciBldSwgZ3JhdmlkYSBncmF2aWRhIHNhcGllbi4gVXQgYXVjdG9yIHNvbGxpY2l0dWRpbiB1cm5hIGV0IGRpY3R1bS5cblxuICAgICAgICAgICAgICAgIE51bGxhIG1heGltdXMgbWkgc2VkIHBvcnR0aXRvciBtYXhpbXVzLiBTZWQgdm9sdXRwYXQgZG9sb3IgbmVjIGxlY3R1cyBvcm5hcmUgdmFyaXVzLiBWaXZhbXVzIGFsaXF1ZXQgcHVydXMgbmliaCwgZXUgY29uZGltZW50dW0gbWFnbmEgdGluY2lkdW50IGlkLiBTZWQgaGVuZHJlcml0IHJpc3VzIGEgb3JuYXJlIGJpYmVuZHVtLiBQcm9pbiBuZWMgdHVycGlzIGF1Y3RvciwgcnV0cnVtIGF1Z3VlIHNpdCBhbWV0LCBmZXVnaWF0IGR1aS4gSW50ZWdlciBpbiBmaW5pYnVzIG1hZ25hLiBWaXZhbXVzIGV1IGxvYm9ydGlzIG1ldHVzLCBub24gc2NlbGVyaXNxdWUgbmVxdWUuIEFlbmVhbiBjb252YWxsaXMgZXJhdCBsaWd1bGEsIHZlbCBiaWJlbmR1bSBudW5jIHJob25jdXMgYXQuIEFlbmVhbiBmZWxpcyBtYWduYSwgcmhvbmN1cyBub24gc29sbGljaXR1ZGluIGV0LCBwdWx2aW5hciBldCBwdXJ1cy4gTnVuYyBzZWQgYXVndWUgdnVscHV0YXRlLCB0cmlzdGlxdWUgb3JjaSBhdCwgbGFvcmVldCBtZXR1cy4gVXQgdWxsYW1jb3JwZXIgZmluaWJ1cyBvZGlvLCBzZWQgZnJpbmdpbGxhIHVybmEgaW50ZXJkdW0gc2VkLiBNb3JiaSBpZCB2aXZlcnJhIGFudGUsIHF1aXMgc2VtcGVyIG1ldHVzLiBQaGFzZWxsdXMgZHVpIGRpYW0sIHRyaXN0aXF1ZSBpbiB2dWxwdXRhdGUgaWQsIHNvZGFsZXMgdmVsIG5lcXVlLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIER1aXMgdmFyaXVzIGVuaW0gbmVjIGxpZ3VsYSBzb2RhbGVzIG1hbGVzdWFkYS4gTWF1cmlzIG1ldHVzIG51bGxhLCBlbGVpZmVuZCBuZWMgbmlzaSBpbiwgbWF4aW11cyB0ZW1wb3IgZG9sb3IuXG5cbiAgICAgICAgICAgICAgICBDdXJhYml0dXIgcHJldGl1bSBhYyBlcm9zIG5vbiBmYWNpbGlzaXMuIFF1aXNxdWUgbW9sbGlzIHZvbHV0cGF0IHJob25jdXMuIEN1cmFiaXR1ciBldSBpbXBlcmRpZXQgc2FwaWVuLiBQcmFlc2VudCBhY2N1bXNhbiwgbmliaCB2aXRhZSBtYXR0aXMgcHJldGl1bSwgaXBzdW0gZXggY29uc2VjdGV0dXIgb3JjaSwgZWZmaWNpdHVyIGZpbmlidXMgcXVhbSBleCBldSBsZW8uIE51bGxhIHNvZGFsZXMgbG9ib3J0aXMgZGlhbSB2ZWwgZGlnbmlzc2ltLiBQcm9pbiBkaWN0dW0sIG5pc2kgc2VkIHNhZ2l0dGlzIHBoYXJldHJhLCBleCBsZW8gbHVjdHVzIG1hdXJpcywgaWQgY29uc2VxdWF0IGVsaXQgbGlndWxhIGEgc2VtLiBJbiBwZWxsZW50ZXNxdWUgdXJuYSBsYWN1cywgYWMgY29uc2VjdGV0dXIgbnVuYyBjb25kaW1lbnR1bSBhLiBBZW5lYW4gcnV0cnVtIG9ybmFyZSBudWxsYSBpbiBjb25zZWN0ZXR1ci4gTmFtIG9kaW8gdXJuYSwgZmF1Y2lidXMgdmVsIG5pc2kgYSwgcHJldGl1bSB0aW5jaWR1bnQgdG9ydG9yLiBDcmFzIHRpbmNpZHVudCBibGFuZGl0IHNhcGllbiBldSBsYWNpbmlhLiBQaGFzZWxsdXMgY29uc2VxdWF0IGxlY3R1cyBhdCB2YXJpdXMgcnV0cnVtLiBNYWVjZW5hcyBldWlzbW9kIG5pc2wgc29kYWxlcyBzb2xsaWNpdHVkaW4gc2VtcGVyLiBDdXJhYml0dXIgZ3JhdmlkYSB1cm5hIGxpYmVybywgZXQgbGFvcmVldCB0dXJwaXMgYWNjdW1zYW4gdXQuXG5cbiAgICAgICAgICAgICAgICBTdXNwZW5kaXNzZSBmYXVjaWJ1cyBtYXVyaXMgc2l0IGFtZXQgbGliZXJvIHByZXRpdW0gbGFjaW5pYS4gUGVsbGVudGVzcXVlIGdyYXZpZGEsIG1ldHVzIGVsZW1lbnR1bSBpYWN1bGlzIGNvbnZhbGxpcywgZWxpdCB0dXJwaXMgcHJldGl1bSBlbmltLCBtb2xlc3RpZSB0ZW1wb3IgYW50ZSBpcHN1bSBzaXQgYW1ldCB0ZWxsdXMuIERvbmVjIGNvbW1vZG8gbmlzbCBhdCBkYXBpYnVzIHRpbmNpZHVudC4gTmFtIG1vbGxpcyBuaWJoIHF1aXMgcG9ydHRpdG9yIGJsYW5kaXQuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBQaGFzZWxsdXMgZXUgdGluY2lkdW50IG51bmMuIEV0aWFtIHNpdCBhbWV0IGRvbG9yIGNvbnNlcXVhdCwgcnV0cnVtIG9kaW8gYSwgaWFjdWxpcyB2ZWxpdC4gRG9uZWMgYWxpcXVldCBuaXNpIG1hZ25hLCB2aXRhZSBwb3J0YSBsaWd1bGEgY29uZGltZW50dW0gZXQuIEN1cmFiaXR1ciBzb2xsaWNpdHVkaW4gbG9yZW0gdXJuYSwgcXVpcyB2ZXN0aWJ1bHVtIGp1c3RvIGZlcm1lbnR1bSB2aXRhZS4gVmVzdGlidWx1bSBhbGlxdWFtIHRpbmNpZHVudCBzYXBpZW4sIGdyYXZpZGEgaGVuZHJlcml0IGV4IGJpYmVuZHVtIGFjLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBTdXNwZW5kaXNzZSBzaXQgYW1ldCBudW5jIGV0IGxvcmVtIGNvbmd1ZSB2b2x1dHBhdCB1dCBxdWlzIGR1aS5cblxuICAgICAgICAgICAgICAgIE51bGxhbSBwaGFyZXRyYSBtYWxlc3VhZGEgbWV0dXMsIHNpdCBhbWV0IG1vbGVzdGllIGRvbG9yIHB1bHZpbmFyIHF1aXMuIEZ1c2NlIGluIGVsaXQgZWxlbWVudHVtLCBmYWNpbGlzaXMgbnVuYyBhdCwgc2NlbGVyaXNxdWUgZW5pbS4gVXQgZmVybWVudHVtIG1vbGVzdGllIGFjY3Vtc2FuLiBTZWQgbnVuYyBtYXVyaXMsIGV1aXNtb2QgaWQgZW5pbSBlZ2V0LCBwcmV0aXVtIGNvbW1vZG8gdHVycGlzLiBNYXVyaXMgcXVpcyBwbGFjZXJhdCBuZXF1ZS4gTmFtIHZpdGFlIG1pIGlkIGRpYW0gZ3JhdmlkYSBzZW1wZXIuIE5hbSBtb2xlc3RpZSBhdCBwdXJ1cyBzaXQgYW1ldCB0aW5jaWR1bnQuIERvbmVjIHNlZCBuaXNsIGFsaXF1YW0sIHNvZGFsZXMgc2VtIGF0LCBmYWNpbGlzaXMgb3JjaS4gQ3VyYWJpdHVyIGlkIHNhcGllbiBzaXQgYW1ldCBhbnRlIGRhcGlidXMgbWF4aW11cy5cblxuICAgICAgICAgICAgICAgIFZpdmFtdXMgb2RpbyB2ZWxpdCwgdmVuZW5hdGlzIHZpdGFlIGFudGUgZXUsIGZldWdpYXQgdWx0cmljZXMgbWF1cmlzLiBQcmFlc2VudCB2ZXN0aWJ1bHVtIGZldWdpYXQgdG9ydG9yIHF1aXMgdWxsYW1jb3JwZXIuIFF1aXNxdWUgZGFwaWJ1cyBtaSBpZCBsaWJlcm8gZ3JhdmlkYSB1bGxhbWNvcnBlci4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gSW50ZWdlciBuZWMgZmluaWJ1cyBkdWkuIFN1c3BlbmRpc3NlIGZldWdpYXQgcGxhY2VyYXQgdGVsbHVzLCBldCBjb25kaW1lbnR1bSBxdWFtIGZhY2lsaXNpcyBhbGlxdWFtLiBDdXJhYml0dXIgZXJhdCBsZW8sIGxhb3JlZXQgbm9uIGVyb3Mgbm9uLCB2b2x1dHBhdCBoZW5kcmVyaXQgZXguIFByb2luIGV1IG1hZ25hIHNhZ2l0dGlzLCBhbGlxdWFtIGxpZ3VsYSBxdWlzLCBjb252YWxsaXMganVzdG8uIFBoYXNlbGx1cyBudWxsYSBhbnRlLCBkaWN0dW0gc2FnaXR0aXMgZXJvcyBldCwgcHVsdmluYXIgdGVtcHVzIG1hc3NhLiBVdCB0b3J0b3Igb2RpbywgdmVoaWN1bGEgYSBmZWxpcyB2ZWwsIHZpdmVycmEgcG9zdWVyZSBlbGl0LiBOdW5jIG5vbiBwb3N1ZXJlIG5pc2wuIFNlZCBmYWNpbGlzaXMgbGVjdHVzIGF0IGVzdCBtYWxlc3VhZGEsIHBvcnRhIG1hdHRpcyBhdWd1ZSBmaW5pYnVzLiBVdCBhbGlxdWV0IGJpYmVuZHVtIGlhY3VsaXMuXG5cbiAgICAgICAgICAgICAgICBEdWlzIHNpdCBhbWV0IGNvbmd1ZSBtYWduYS4gTWFlY2VuYXMgY29uZ3VlIGRpY3R1bSBldWlzbW9kLiBBZW5lYW4gbmliaCB2ZWxpdCwgYXVjdG9yIHZpdGFlIHRvcnRvciBxdWlzLCBjb25ndWUgcGVsbGVudGVzcXVlIG5pc2kuIEludGVnZXIgbGFvcmVldCBtYWduYSBxdWlzIGxpZ3VsYSBydXRydW0gZWZmaWNpdHVyLiBTZWQgbGlndWxhIGV4LCBlbGVtZW50dW0gc2l0IGFtZXQgbmVxdWUgYXQsIGRpY3R1bSBmZXVnaWF0IHB1cnVzLiBTZWQgYmliZW5kdW0sIG1hZ25hIGEgc3VzY2lwaXQgdWx0cmljaWVzLCBxdWFtIGZlbGlzIGRhcGlidXMgYXVndWUsIG5lYyBlZmZpY2l0dXIgdGVsbHVzIG1hdXJpcyB2ZWwgbmlzbC4gSW50ZWdlciBzZWQgYXJjdSBlcmF0LiBDdXJhYml0dXIgYXJjdSBvZGlvLCBncmF2aWRhIHJ1dHJ1bSBmYWNpbGlzaXMgaW4sIGV1aXNtb2QgcXVpcyBpcHN1bS4gSW4gY3Vyc3VzIGRpYW0gZXUgaWFjdWxpcyBmYWNpbGlzaXMuIFBlbGxlbnRlc3F1ZSBpZCBudW5jIG5pc2kuIER1aXMgZXUgbmlzaSBkaWduaXNzaW0sIHJob25jdXMgbWFnbmEgdml0YWUsIGdyYXZpZGEgbWkuIE1hZWNlbmFzIHNhZ2l0dGlzIHNhZ2l0dGlzIGRvbG9yIGEgbHVjdHVzLiBBbGlxdWFtIHNhZ2l0dGlzIGVsaXQgbnVuYywgdml0YWUgZGFwaWJ1cyBudW5jIHBlbGxlbnRlc3F1ZSBxdWlzLiBWaXZhbXVzIHBvcnR0aXRvciBtYWduYSBuZWMgdXJuYSB2aXZlcnJhLCBhYyBzY2VsZXJpc3F1ZSBsZW8gbGFvcmVldC4gSW4gYWNjdW1zYW4gZXVpc21vZCBsdWN0dXMuIE1hZWNlbmFzIHNvbGxpY2l0dWRpbiBldSB0b3J0b3Igc2VkIGlhY3VsaXMuXG5cbiAgICAgICAgICAgICAgICBQaGFzZWxsdXMgcXVpcyBmYWNpbGlzaXMgbmlzbCwgbmVjIHVsbGFtY29ycGVyIG1ldHVzLiBBZW5lYW4gYWNjdW1zYW4gcXVhbSB2ZWxpdCwgaWQgY29udmFsbGlzIGRpYW0gbWF4aW11cyBjb25zZXF1YXQuIERvbmVjIGxvYm9ydGlzIGNvbW1vZG8gbW9sZXN0aWUuIE1hZWNlbmFzIHF1aXMgc2FwaWVuIHZvbHV0cGF0LCByaG9uY3VzIGxlbyBpbiwgdmVuZW5hdGlzIHF1YW0uIFBoYXNlbGx1cyB2aXRhZSByaG9uY3VzIG51bmMsIGEgcnV0cnVtIG1pLiBNYXVyaXMgYWxpcXVldCwgdXJuYSBhYyBkaWduaXNzaW0gbWF4aW11cywgbWFnbmEgdG9ydG9yIHJ1dHJ1bSBuaWJoLCBhIGNvbnNlcXVhdCBtYXNzYSBsaWd1bGEgdXQgb3JjaS4gU2VkIG1heGltdXMsIG5lcXVlIGEgZXVpc21vZCBmYWNpbGlzaXMsIGxlY3R1cyBlc3QgdWx0cmljZXMgcmlzdXMsIHF1aXMgY29uZGltZW50dW0gc2VtIGV4IG5vbiBsYWN1cy5cblxuICAgICAgICAgICAgICAgIEFsaXF1YW0gYW50ZSBsZWN0dXMsIGludGVyZHVtIGluIHVsbGFtY29ycGVyIHNpdCBhbWV0LCBldWlzbW9kIGlkIGxpYmVyby4gTW9yYmkgcG9zdWVyZSBsYWNpbmlhIHZlbmVuYXRpcy4gSW50ZWdlciBydXRydW0sIHRlbGx1cyBzaXQgYW1ldCB2dWxwdXRhdGUgcHVsdmluYXIsIGV4IG1hZ25hIHNvZGFsZXMgdmVsaXQsIGFjIGltcGVyZGlldCBsaWJlcm8gcXVhbSBhdCBudW5jLiBTZWQgdmVuZW5hdGlzIG51bGxhIGxhY3VzLCBldSByaG9uY3VzIGRpYW0gYXVjdG9yIG5vbi4gUXVpc3F1ZSBwZWxsZW50ZXNxdWUgbWkgc2VkIHRvcnRvciB1bGxhbWNvcnBlciBjb25kaW1lbnR1bS4gQ3JhcyBzZW0gbG9yZW0sIHNhZ2l0dGlzIGluIGF1Y3RvciBxdWlzLCBjb25zZWN0ZXR1ciBpbiBzZW0uIE51bGxhbSB2aXRhZSB2dWxwdXRhdGUgdG9ydG9yLCBhIHRpbmNpZHVudCBlcm9zLiBOdWxsYSBhbGlxdWFtIGR1aSBub24gb2RpbyBoZW5kcmVyaXQsIHZlbCB1bGxhbWNvcnBlciBkdWkgdGVtcG9yLiBTZWQgbGFvcmVldCB0dXJwaXMgcXVhbSwgZXQgbW9sbGlzIG1pIHRyaXN0aXF1ZSBzaXQgYW1ldC4gQ3VyYWJpdHVyIG5vbiBsYWN1cyBwaGFyZXRyYSwgdml2ZXJyYSBzYXBpZW4gdml0YWUsIHNhZ2l0dGlzIHJpc3VzLiBOdWxsYW0gZmV1Z2lhdCBvcmNpIG5lcXVlLCBzZWQgc2VtcGVyIGxpYmVybyBjb25zZWN0ZXR1ciBhdC4gVml2YW11cyBibGFuZGl0IGp1c3RvIGEgdmVsaXQgZGljdHVtIGlhY3VsaXMuIE1vcmJpIHBvcnR0aXRvciBuaXNsIG5vbiBmZWxpcyBncmF2aWRhLCBzaXQgYW1ldCBjb25zZXF1YXQgbGVjdHVzIHZ1bHB1dGF0ZS4gUHJvaW4gc29kYWxlcywgdXJuYSBub24gcHVsdmluYXIgY29uc2VxdWF0LCBzYXBpZW4gdmVsaXQgZ3JhdmlkYSBtYXNzYSwgb3JuYXJlIGNvbnNlcXVhdCBvcmNpIGVzdCBwb3J0YSBqdXN0by4gUXVpc3F1ZSBub24gbGlndWxhIGxpZ3VsYS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlxuXG4gICAgICAgICAgICAgICAgRG9uZWMgcXVpcyBzYWdpdHRpcyBtYXVyaXMuIFZpdmFtdXMgYXQgYW50ZSBhIGR1aSB0cmlzdGlxdWUgc2VtcGVyIHZlbCBhYyBsZWN0dXMuIENyYXMgc2VkIHRvcnRvciBvZGlvLiBDdXJhYml0dXIgYXQgcG9ydGEgbmliaC4gU3VzcGVuZGlzc2UgY29tbW9kbyB0b3J0b3IgYWMgcnV0cnVtIGZyaW5naWxsYS4gU3VzcGVuZGlzc2UgdXQgZG9sb3Igdml0YWUgZmVsaXMgc29kYWxlcyBmYXVjaWJ1cy4gVmVzdGlidWx1bSBzZW1wZXIsIG1ldHVzIHZpdGFlIHRlbXB1cyB0ZW1wdXMsIGRpYW0ganVzdG8gZ3JhdmlkYSB0ZWxsdXMsIHNpdCBhbWV0IHBvc3VlcmUgcXVhbSBpcHN1bSBzaXQgYW1ldCB0b3J0b3IuIE1hZWNlbmFzIGVyb3MgYXVndWUsIHBsYWNlcmF0IGEgbnVsbGEgbm9uLCBmZXVnaWF0IHJob25jdXMgZGlhbS4gVml2YW11cyBzZWQgcHJldGl1bSBzZW0uIEV0aWFtIHNjZWxlcmlzcXVlLCBlcmF0IGluIHBvcnR0aXRvciBtb2xsaXMsIGRvbG9yIGxhY3VzIHBvcnR0aXRvciBsYWN1cywgdmVsIHJ1dHJ1bSB1cm5hIGRvbG9yIHZpdGFlIGp1c3RvLiBEb25lYyBiaWJlbmR1bSB2aXZlcnJhIHZhcml1cy4gRG9uZWMgZmV1Z2lhdCBtYWduYSBpZCBtYWduYSBwaGFyZXRyYSwgbm9uIHZlbmVuYXRpcyBsZWN0dXMgcG9ydGEuIEluIGFyY3UgbmliaCwgaGVuZHJlcml0IGV1IGVzdCBuZWMsIHZlaGljdWxhIGV1aXNtb2QgbGVjdHVzLiBOdWxsYW0gYSBtb2xlc3RpZSB0ZWxsdXMuIE1hZWNlbmFzIGdyYXZpZGEgc29sbGljaXR1ZGluIGZhdWNpYnVzLiBDdXJhYml0dXIgdml0YWUgdmVzdGlidWx1bSBtZXR1cy5cblxuICAgICAgICAgICAgICAgIE51bGxhIGVnZXQgbGVjdHVzIGF0IG9yY2kgYmliZW5kdW0gcHVsdmluYXIuIERvbmVjIHByZXRpdW0gbWFnbmEgYSBtYXNzYSBzY2VsZXJpc3F1ZSBlbGVtZW50dW0uIFN1c3BlbmRpc3NlIGFjIGdyYXZpZGEgZXN0LiBNYWVjZW5hcyBvcm5hcmUgZHVpIGVuaW0sIHNlZCBzb2RhbGVzIHRlbGx1cyBzdXNjaXBpdCBxdWlzLiBQcm9pbiBmZXVnaWF0IGxhY3VzIHV0IGxpYmVybyB0ZW1wdXMgY3Vyc3VzLiBEdWlzIGVnZXN0YXMsIGF1Z3VlIHF1aXMgZGFwaWJ1cyB1bHRyaWNpZXMsIG1pIG51bmMgY29uZGltZW50dW0gc2FwaWVuLCBldCB0aW5jaWR1bnQgZXN0IHRvcnRvciBzaXQgYW1ldCBkb2xvci4gUGhhc2VsbHVzIGV1IGxhY3VzIHZpdmVycmEsIG9ybmFyZSB1cm5hIHZlbCwgY29uc2VxdWF0IHB1cnVzLlxuXG4gICAgICAgICAgICAgICAgQ3VyYWJpdHVyIGF0IG9ybmFyZSBuZXF1ZSwgcXVpcyBmYWNpbGlzaXMgZWxpdC4gU2VkIHZlbCBtYXVyaXMgaW4gZGlhbSBjb21tb2RvIHNvbGxpY2l0dWRpbi4gTnVuYyBhIGN1cnN1cyBuaXNsLCBhdCByaG9uY3VzIGV4LiBEdWlzIG9ybmFyZSB1cm5hIG5vbiBuaWJoIGdyYXZpZGEsIG5lYyBhY2N1bXNhbiB0dXJwaXMgc29kYWxlcy4gUGVsbGVudGVzcXVlIHNpdCBhbWV0IHVsdHJpY2llcyB1cm5hLiBNYXVyaXMgdmVsIGZlcm1lbnR1bSBsb3JlbS4gQ3VyYWJpdHVyIGxhb3JlZXQsIHB1cnVzIHZlbCBmZXVnaWF0IGZldWdpYXQsIHZlbGl0IGp1c3RvIGx1Y3R1cyBtaSwgYSBtb2xsaXMgc2VtIGxlbyB2aXRhZSBtYXVyaXMuIFZlc3RpYnVsdW0gZGlnbmlzc2ltIHRlbXB1cyBleCBldSBmYXVjaWJ1cy4gQWxpcXVhbSBlZ2V0IGxlbyBldSBhcmN1IGRpY3R1bSBibGFuZGl0LiBQZWxsZW50ZXNxdWUgdWxsYW1jb3JwZXIgbGFjdXMgcHVsdmluYXIgdHVycGlzIHZlbmVuYXRpcyB2b2x1dHBhdC4gTnVsbGEgZWZmaWNpdHVyIHBlbGxlbnRlc3F1ZSB0ZWxsdXMsIHZpdGFlIG9ybmFyZSBvZGlvIGZhY2lsaXNpcyBpZC4gUHJhZXNlbnQgZWdldCBqdXN0byB0dXJwaXMuIEN1cmFiaXR1ciBjb25kaW1lbnR1bSwgbGFjdXMgdXQgdmFyaXVzIG1vbGxpcywgbmVxdWUgcmlzdXMgZmF1Y2lidXMgbWksIHNpdCBhbWV0IGxvYm9ydGlzIGxlbyBpcHN1bSBlZ2V0IG9kaW8uIFNlZCBzZW1wZXIgdmVzdGlidWx1bSBsaWJlcm8sIGFjIGZldWdpYXQgbmliaCB0cmlzdGlxdWUgaWQuIEluIGFsaXF1YW0gZWdldCB0ZWxsdXMgaW4gY29tbW9kby4gQ3JhcyBzb2RhbGVzIHNlbXBlciBuaXNsLCBuZWMgZXVpc21vZCBsZW8gdWxsYW1jb3JwZXIgZXQuXG5cbiAgICAgICAgICAgICAgICBFdGlhbSBzZWQgcGxhY2VyYXQgbWkuIEluIHBlbGxlbnRlc3F1ZSBjdXJzdXMgZXJvcyBpbiBoZW5kcmVyaXQuIEluIGZhY2lsaXNpcywgbWV0dXMgYXQgdnVscHV0YXRlIHB1bHZpbmFyLCBmZWxpcyBlbmltIGVmZmljaXR1ciBhbnRlLCBhIGxhb3JlZXQgYXVndWUgZGlhbSB1dCBsaWd1bGEuIE1hZWNlbmFzIGxlY3R1cyB0b3J0b3IsIHBsYWNlcmF0IGV1IHRpbmNpZHVudCBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYSBvZGlvLiBEb25lYyB2ZWwgbG9yZW0gZXJvcy4gTW9yYmkgZXQgZWZmaWNpdHVyIHRvcnRvciwgdml0YWUgdml2ZXJyYSBsb3JlbS4gQ3JhcyBlbGl0IGFudGUsIGF1Y3RvciBlZ2V0IHR1cnBpcyBzaXQgYW1ldCwgYWNjdW1zYW4gbGFvcmVldCBhcmN1LiBEb25lYyB2ZWwgZGljdHVtIHZlbGl0LiBGdXNjZSB1dCB2ZW5lbmF0aXMgbWFnbmEuIENyYXMgbGFjaW5pYSB1cm5hIGEgbGFjaW5pYSBmZXVnaWF0LiBVdCBhdCBvZGlvIHV0IG5lcXVlIHRpbmNpZHVudCBtYWxlc3VhZGEgcXVpcyBuZWMgbGFjdXMuIERvbmVjIGV1aXNtb2QgZmVsaXMgaWQgY29uc2VjdGV0dXIgZWxlaWZlbmQuIEV0aWFtIG5lYyBpcHN1bSBldSBuaWJoIG1heGltdXMgYWxpcXVldC4gQWVuZWFuIG5lYyBpbnRlcmR1bSB0b3J0b3IuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsgICAoc3RvcmUuZm9vdGVyICYmIHN0b3JlLmZvb3Rlci5oZWlnaHQgJiYgc3RvcmUuZm9vdGVyLmhlaWdodCA+IDApICYmXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGlvbi1kZXNrLWZvb3RlclwiIHN0eWxlPXtmb290ZXJTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gXCIuL01lbnVPcHRpb25cIjtcbmltcG9ydCB7IElOSVRfU1RZTEUsIHNhdmVQYWdlIH0gZnJvbSBcIi4uL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5pbXBvcnQge1xuICAgIE5hdmJhckVkaXRvcixcbiAgICBCb2R5RWRpdG9yLFxuICAgIFNpZGViYXJFZGl0b3IsXG4gICAgU2VjdGlvbnNFZGl0b3IsXG4gICAgRm9vdGVyRWRpdG9yXG59IGZyb20gXCIuL0VsZW1lbnRFZGl0b3JzXCI7XG5cbmNvbnN0IG1lbnVUZXh0cyA9IHtcbiAgICBuYXZiYXI6ICdOYXZiYXInLFxuICAgIGJvZHk6ICdCb2R5JyxcbiAgICBzaWRlYmFyOiAnU2lkZWJhcicsXG4gICAgc2VjdGlvbnM6ICdTZWN0aW9ucycsXG4gICAgZm9vdGVyOiAnRm9vdGVyJ1xufTtcblxuY29uc3QgbWVudU9wdGlvbkFjdGl2ZSA9ICcnO1xuXG5jb25zdCBnZXRNZW51T3B0aW9uQWN0aXZlID0gKCkgPT4ge1xuICAgIHJldHVybiBtZW51T3B0aW9uQWN0aXZlO1xufVxuXG5jb25zdCBtZW51UmVkdWNlciA9IChjdXJyZW50SXRlbSwgYWN0aXZlT3B0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGFjdGl2ZU9wdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IENyZWF0ZU1lbnUgPSAoe3N0b3JlLCBkaXNwYXRjaH0pID0+IHtcbiAgICBjb25zdCBbYWN0aXZlTWVudU9wdGlvbiwgbWVudURpc3BhdGNoXSA9IHVzZVJlZHVjZXIobWVudVJlZHVjZXIsIHt9LCBnZXRNZW51T3B0aW9uQWN0aXZlKTtcbiAgICBzdG9yZS5uYXZiYXIgPSBzdG9yZS5uYXZiYXIgfHwge307XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY3JlYXRlLW1lbnVcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCIgb25DbGljaz17KCkgPT4gc2F2ZVBhZ2Uoc3RvcmUpfT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgICAgICAgIGluaXRBY3RpdmU9e2FjdGl2ZU1lbnVPcHRpb24gPT09IG1lbnVUZXh0cy5uYXZiYXJ9XG4gICAgICAgICAgICAgICAgbWVudURpc3BhdGNoPXttZW51RGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgdGV4dD17bWVudVRleHRzLm5hdmJhcn1cbiAgICAgICAgICAgICAgICBjb250ZW50PXs8TmF2YmFyRWRpdG9yIG5hdmJhcj17c3RvcmUubmF2YmFyIHx8IElOSVRfU1RZTEUubmF2YmFyfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXthY3RpdmVNZW51T3B0aW9uID09PSBtZW51VGV4dHMuYm9keX1cbiAgICAgICAgICAgICAgICBtZW51RGlzcGF0Y2g9e21lbnVEaXNwYXRjaH1cbiAgICAgICAgICAgICAgICB0ZXh0PXttZW51VGV4dHMuYm9keX1cbiAgICAgICAgICAgICAgICBjb250ZW50PXs8Qm9keUVkaXRvciBib2R5PXtzdG9yZS5ib2R5IHx8IHt9fSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXthY3RpdmVNZW51T3B0aW9uID09PSBtZW51VGV4dHMuc2lkZWJhcn1cbiAgICAgICAgICAgICAgICBtZW51RGlzcGF0Y2g9e21lbnVEaXNwYXRjaH1cbiAgICAgICAgICAgICAgICB0ZXh0PXttZW51VGV4dHMuc2lkZWJhcn1cbiAgICAgICAgICAgICAgICBjb250ZW50PXs8U2lkZWJhckVkaXRvci8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAgaW5pdEFjdGl2ZT17YWN0aXZlTWVudU9wdGlvbiA9PT0gbWVudVRleHRzLnNlY3Rpb25zfVxuICAgICAgICAgICAgICAgIG1lbnVEaXNwYXRjaD17bWVudURpc3BhdGNofVxuICAgICAgICAgICAgICAgIHRleHQ9e21lbnVUZXh0cy5zZWN0aW9uc31cbiAgICAgICAgICAgICAgICBjb250ZW50PXs8U2VjdGlvbnNFZGl0b3IvPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgICAgICAgIGluaXRBY3RpdmU9e2FjdGl2ZU1lbnVPcHRpb24gPT09IG1lbnVUZXh0cy5mb290ZXJ9XG4gICAgICAgICAgICAgICAgbWVudURpc3BhdGNoPXttZW51RGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgdGV4dD17bWVudVRleHRzLmZvb3Rlcn1cbiAgICAgICAgICAgICAgICBjb250ZW50PXs8Rm9vdGVyRWRpdG9yIGZvb3Rlcj17c3RvcmUuZm9vdGVyfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz59XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0Q29sb3IgZnJvbSAncmVhY3QtaW5wdXQtY29sb3InO1xuaW1wb3J0IE5hdmJhckl0ZW1zTWFuYWdlciBmcm9tIFwiLi9OYXZiYXJJdGVtc01hbmFnZXJcIjtcbmltcG9ydCB7IEFDVElPTlMsIElOSVRfU1RZTEUgfSBmcm9tIFwiLi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcbmltcG9ydCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyBmcm9tIFwiLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXJFZGl0b3IgPSAoe1xuICAgICAgICBuYXZiYXIsXG4gICAgICAgIGRpc3BhdGNoXG4gICAgfSkgPT4ge1xuICAgIGNvbnN0IFtiZ0NvbG9yLCBzZXRCZ0NvbG9yXSA9IHVzZVN0YXRlKG5hdmJhci5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnKTtcbiAgICBjb25zdCBbdGV4dENvbG9yLCBzZXRUZXh0Q29sb3JdID0gdXNlU3RhdGUobmF2YmFyLmNvbG9yIHx8ICcjMDAwMDAwJyk7XG4gICAgY29uc3QgW2hlaWdodCwgc2V0SGVpZ2h0XSA9IHVzZVN0YXRlKG5hdmJhci5oZWlnaHQgfHwgNSk7XG4gICAgY29uc3QgW25hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZSwgc2V0TmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3QgY2xvc2VOYXZJdGVtc01vZGFsID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKGVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdleGl0LWJ1dHRvbicpXG4gICAgICAgICAgICB8fCAoIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdmbG9hdGluZy13aW5kb3cnKVxuICAgICAgICAgICAgICAgICYmICFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnbWFuYWdlLW5hdi1pdGVtcycpKVxuICAgICAgICAgICAgICAgICYmICFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnZGVsZXRlLWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgJiYgIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdhZGQtYnV0dG9uJykpIHtcbiAgICAgICAgICAgIHNldE5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cub25jbGljayA9IGNsb3NlTmF2SXRlbXNNb2RhbDtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3IgbmF2YmFyLWVkaXRvclwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZSAmJlxuICAgICAgICAgICAgICAgIDxOYXZiYXJJdGVtc01hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgaW5pdEFjdGl2ZT17bmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17bmF2YmFyLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtuYXZiYXIuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIHRleHQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtuYXZiYXIuY29sb3IgfHwgJyMwMDAwMDAnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRleHRDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX1RFWFRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2hlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0hFSUdIVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtlLnRhcmdldC52YWx1ZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIZWlnaHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgZm9udCBzaXplOlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjQwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hdmJhci5mb250U2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX1RFWFRfU0laRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNwYWNpbmctc2VsZWN0XCI+U3BhY2luZzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3BhY2luZ09wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3BhY2luZy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmF2YmFyLnNwYWNpbmdPcHRpb259XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9TUEFDSU5HX09QVElPTixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNpbmdPcHRpb246IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+ZmxleC1zdGFydDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPmZsZXgtZW5kPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+c3BhY2UtYXJvdW5kPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtIGhvdmVyYWJsZSBtYW5hZ2UtbmF2LWl0ZW1zXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2NvbG9yOicjY2RkYzM5J319XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlKHRydWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1hbmFnZSBuYXZiYXIgaXRlbXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgQm9keUVkaXRvciA9ICh7XG4gICAgICAgIGJvZHksXG4gICAgICAgIGRpc3BhdGNoXG4gICAgfSkgPT4ge1xuICAgIGNvbnN0IFtiYWNrZ3JvdW5kQ29sb3IsIHNldEJhY2tncm91bmRDb2xvcl0gPSB1c2VTdGF0ZShib2R5LmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZicpO1xuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoYm9keS5jb2xvciB8fCAnIzAwMDAwMCcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2JvZHkuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuQk9EWV9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIHRleHQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtib2R5LmNvbG9yIHx8ICcjMDAwMDAwJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuQk9EWV9URVhUX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgZm9udCBzaXplOlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49ezEyfVxuICAgICAgICAgICAgICAgICAgICBtYXg9ezI0fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keS5mb250U2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuQk9EWV9GT05UX1NJWkUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGZsZXhGbG93Oidjb2x1bW4gd3JhcCd9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHBhZGRpbmc6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Ym9keS5jb250ZW50LnBhZGRpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkJPRFlfUEFERElORyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyRWRpdG9yID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIFNJREVCQVIgRURJVE9SIFBMQUNFSE9MREVSXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXJFZGl0b3IgPSAoe2Zvb3RlciwgZGlzcGF0Y2h9KSA9PiB7XG5cbiAgICBjb25zdCBbYmFja2dyb3VuZENvbG9yLCBzZXRCYWNrZ3JvdW5kQ29sb3JdID0gdXNlU3RhdGUoZm9vdGVyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZicpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZShmb290ZXIuY29sb3IgfHwgJyMwMDAwMDAnKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtmb290ZXIuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICB0ZXh0IGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Zm9vdGVyLmNvbG9yIHx8ICcjMDAwMDAwJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRk9PVEVSX1RFWFRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjVcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkZPT1RFUl9IRUlHSFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBmb250IHNpemU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMjRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9vdGVyLmZvbnRTaXplIHx8IDE0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GT09URVJfRk9OVF9TSVpFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uc0VkaXRvciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yXCI+XG4gICAgICAgICAgICBTRUNUSU9OUyBFRElUT1IgUExBQ0VIT0xERVJcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzIGZyb20gXCIuLi8uLi8uLi8uLi9mdW5jdGlvbnMvZWxlbWVudE9yUGFyZW50SGFzQ2xhc3NcIjtcblxuY29uc3QgTWVudU9wdGlvbiA9ICh7dGV4dCwgY29udGVudCwgbWVudURpc3BhdGNoLCBpbml0QWN0aXZlID0gZmFsc2V9KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGluaXRBY3RpdmUpO1xuXG4gICAgbGV0IGNoZXZyb25DbGFzcyA9IGluaXRBY3RpdmUgJiYgYWN0aXZlID8gJ2NoZXZyb24gY2hldnJvbi1yZXZlcnNlJyA6ICdjaGV2cm9uJztcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgICAgIGlmICghZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZS50YXJnZXQsICdkZXNpZ24tbWVudS1lZGl0b3InKSkge1xuICAgICAgICAgICAgbWVudURpc3BhdGNoKHRleHQpO1xuICAgICAgICAgICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LW9wdGlvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IGhhbmRsZUNsaWNrKGUpfVxuICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9jaGV2cm9uLnBuZ1wiIGFsdD1cImNoZXZyb25cIiBjbGFzc05hbWU9e2NoZXZyb25DbGFzc30vPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgeyhpbml0QWN0aXZlICYmIGFjdGl2ZSkgJiYgY29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudU9wdGlvbjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmxvYXRpbmdXaW5kb3cgZnJvbSBcIi4uLy4uL0Zsb2F0aW5nV2luZG93XCI7XG5pbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSBcIi4uL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IE5hdmJhckl0ZW1zTWFuYWdlciA9ICh7aW5pdEFjdGl2ZSwgaXRlbXMsIGRpc3BhdGNofSkgPT4ge1xuICAgIGNvbnN0IFtuZWdhdGl2ZUlkLCBzZXROZWdhdGl2ZUlkXSA9IHVzZVN0YXRlKC0xKTtcbiAgICBsZXQgaXRlbXNJbnB1dHMgPSBbXTtcbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtc0lucHV0cyA9IGl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHRleHQtJHtpdGVtLmlkfWB9PlRleHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHRleHQtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YHRleHQtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46ICcwIC40cmVtJ319XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0lURU1fVEVYVF9VUERBVEVELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHVybC0ke2l0ZW0uaWR9YH0+VVJMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2B1cmwtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YHVybC0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAnMCAuNHJlbSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9JVEVNX1VSTF9VUERBVEVELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1yZWQgZGVsZXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0lURU1fSVRFTV9ERUxFVEVELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxGbG9hdGluZ1dpbmRvd1xuICAgICAgICAgICAgaW5pdEFjdGl2ZT17aW5pdEFjdGl2ZX1cbiAgICAgICAgICAgIG5lZWRzV2lkZT17dHJ1ZX1cbiAgICAgICAgICAgIGluaXRDb250ZW50cz17W1xuICAgICAgICAgICAgICAgIC4uLml0ZW1zSW5wdXRzLFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWRhcmstZ3JlZW4gYWRkLWJ1dHRvbiBob3ZlcmFibGVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9JVEVNX0FEREVELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG5lZ2F0aXZlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5lZ2F0aXZlSWQobmVnYXRpdmVJZCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWRkIG5ldyBpdGVtXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBdfVxuICAgICAgICAvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhckl0ZW1zTWFuYWdlciIsImltcG9ydCB7QUNUSU9OU30gZnJvbSBcIi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0hFSUdIVDpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckggPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckguaGVpZ2h0ID0gYWN0aW9uLnBheWxvYWQuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJIfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQmcgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckJnLmJhY2tncm91bmRDb2xvciA9IGFjdGlvbi5wYXlsb2FkLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQmd9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX1RFWFRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJUYyA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyVGMuY29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyVGN9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX1NQQUNJTkdfT1BUSU9OOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyU3BhY2luZyA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyU3BhY2luZy5zcGFjaW5nT3B0aW9uID0gYWN0aW9uLnBheWxvYWQuc3BhY2luZ09wdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyU3BhY2luZ307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfVEVYVF9TSVpFOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyRm9udFNpemUgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckZvbnRTaXplLmZvbnRTaXplID0gYWN0aW9uLnBheWxvYWQuZm9udFNpemU7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckZvbnRTaXplfVxuXG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSVRFTV9URVhUX1VQREFURUQ6XG4gICAgICAgICAgICBsZXQgbmV3TmF2YmFySXRlbXNUZXh0ID0gc3RhdGUubmF2YmFyLml0ZW1zO1xuICAgICAgICAgICAgbmV3TmF2YmFySXRlbXNUZXh0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IHVuZGVmaW5lZCAmJiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHQgPSBhY3Rpb24ucGF5bG9hZC50ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVGV4dCA9IHsuLi5zdGF0ZS5uYXZiYXIsIGl0ZW1zOiBuZXdOYXZiYXJJdGVtc1RleHR9O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJDaGFuZ2VkSXRlbXNUZXh0fTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9JVEVNX1VSTF9VUERBVEVEOlxuICAgICAgICAgICAgbGV0IG5ld05hdmJhckl0ZW1zVXJsID0gc3RhdGUubmF2YmFyLml0ZW1zO1xuICAgICAgICAgICAgbmV3TmF2YmFySXRlbXNVcmwgPSBuZXdOYXZiYXJJdGVtc1VybC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IHVuZGVmaW5lZCAmJiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLml0ZW0sIHVybDogYWN0aW9uLnBheWxvYWQudXJsfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckNoYW5nZWRJdGVtc1VybCA9IHsuLi5zdGF0ZS5uYXZiYXIsIGl0ZW1zOiBuZXdOYXZiYXJJdGVtc1VybH07XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckNoYW5nZWRJdGVtc1VybH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQ6XG4gICAgICAgICAgICBjb25zdCBvbGROYXZiYXJJdGVtcyA9IHN0YXRlLm5hdmJhci5pdGVtcztcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckl0ZW1zQWZ0ZXJEZWxldGluZyA9IG9sZE5hdmJhckl0ZW1zLmZpbHRlcihpdGVtID0+XG4gICAgICAgICAgICAgICAgaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJBZnRlckRlbGV0aW9uID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJBZnRlckRlbGV0aW9uLml0ZW1zID0gbmV3TmF2YmFySXRlbXNBZnRlckRlbGV0aW5nO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJBZnRlckRlbGV0aW9ufTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9JVEVNX0FEREVEOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2SXRlbXMgPSBzdGF0ZS5uYXZiYXIuaXRlbXMgPz8gW107XG4gICAgICAgICAgICBuZXdOYXZJdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkLm5ld0l0ZW0pO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQWZ0ZXJBZGRpbmcgPSB7Li4uc3RhdGUubmF2YmFyLCBpdGVtczogbmV3TmF2SXRlbXN9O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJBZnRlckFkZGluZ307XG5cbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHkgPSB7Li4uc3RhdGUuYm9keX07XG4gICAgICAgICAgICBuZXdCb2R5LmJhY2tncm91bmRDb2xvciA9IGFjdGlvbi5wYXlsb2FkLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGJvZHk6IG5ld0JvZHl9O1xuICAgICAgICBjYXNlIEFDVElPTlMuQk9EWV9URVhUX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3Qm9keVRjID0gey4uLnN0YXRlLmJvZHl9O1xuICAgICAgICAgICAgbmV3Qm9keVRjLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBib2R5OiBuZXdCb2R5VGN9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICBjYXNlIEFDVElPTlMuQk9EWV9GT05UX1NJWkU6XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5RnMgPSB7Li4uc3RhdGUuYm9keX07XG4gICAgICAgICAgICBuZXdCb2R5RnMuZm9udFNpemUgPSBhY3Rpb24ucGF5bG9hZC5mb250U2l6ZTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGJvZHk6IG5ld0JvZHlGc307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5CT0RZX1BBRERJTkc6XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5Q29udGVudFBhZGRpbmcgPSB7Li4uc3RhdGUuYm9keS5jb250ZW50fTtcbiAgICAgICAgICAgIG5ld0JvZHlDb250ZW50UGFkZGluZy5wYWRkaW5nID0gYWN0aW9uLnBheWxvYWQucGFkZGluZztcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGJvZHk6IHsuLi5zdGF0ZS5ib2R5LCBjb250ZW50OiBuZXdCb2R5Q29udGVudFBhZGRpbmd9fTtcblxuICAgICAgICBjYXNlIEFDVElPTlMuRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdGb290ZXJCZyA9IHsuLi5zdGF0ZS5mb290ZXJ9O1xuICAgICAgICAgICAgbmV3Rm9vdGVyQmcuYmFja2dyb3VuZENvbG9yID0gYWN0aW9uLnBheWxvYWQuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZm9vdGVyOiBuZXdGb290ZXJCZ307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5GT09URVJfSEVJR0hUOlxuICAgICAgICAgICAgY29uc3QgbmV3Rm9vdGVySGVpZ2h0ID0gey4uLnN0YXRlLmZvb3Rlcn07XG4gICAgICAgICAgICBuZXdGb290ZXJIZWlnaHQuaGVpZ2h0ID0gYWN0aW9uLnBheWxvYWQuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZm9vdGVyOiBuZXdGb290ZXJIZWlnaHR9XG4gICAgICAgIGNhc2UgQUNUSU9OUy5GT09URVJfVEVYVF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0Zvb3RlclRjID0gey4uLnN0YXRlLmZvb3Rlcn07XG4gICAgICAgICAgICBuZXdGb290ZXJUYy5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZm9vdGVyOiBuZXdGb290ZXJUY307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5GT09URVJfRk9OVF9TSVpFOlxuICAgICAgICAgICAgY29uc3QgbmV3Rm9vdGVyRnMgPSB7Li4uc3RhdGUuZm9vdGVyfTtcbiAgICAgICAgICAgIG5ld0Zvb3RlckZzLmZvbnRTaXplID0gYWN0aW9uLnBheWxvYWQuZm9udFNpemU7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBmb290ZXI6IG5ld0Zvb3RlckZzfTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IENyZWF0ZVBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAgPENyZWF0ZVBhZ2VXcmFwcGVyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3JlYXRlUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9jcmVhdGVQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q3JlYXRlUGFnZUNvbnRhaW5lciAvPixcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXSwic291cmNlUm9vdCI6IiJ9