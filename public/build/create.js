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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", null, "Abasdnqwjkq qejkfnqjfkqnd qifubqjfjkqwf"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu erat lobortis, varius ante at, accumsan tellus. Curabitur varius, neque id dictum ullamcorper, nisi libero egestas est, vel venenatis ex ipsum at est. Ut in lacus ante. Curabitur faucibus risus mauris, a tincidunt metus mollis eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque a est facilisis, egestas urna et, pharetra arcu. Nam imperdiet dictum nulla in volutpat. Cras tempus ut orci in condimentum. Fusce luctus, dui eget blandit mattis, lacus purus consectetur lorem, nec molestie neque est luctus felis. In hac habitasse platea dictumst. Vivamus magna nunc, accumsan in malesuada id, gravida feugiat tellus. Phasellus a est vitae risus interdum gravida. Ut semper tellus et felis maximus, sit amet tincidunt metus lacinia. Pellentesque vel ligula ornare, dignissim risus accumsan, posuere augue. Integer orci libero, placerat eget auctor ac, aliquet eu turpis. Donec sit amet interdum justo. Integer volutpat et mauris et efficitur. Integer efficitur sapien eu malesuada consectetur. Phasellus tincidunt, urna id efficitur facilisis, diam felis facilisis enim, ac consequat dolor purus ut urna. Nam at maximus mauris. Praesent tortor odio, malesuada vel diam ut, sollicitudin placerat ligula. Etiam et sodales nisi. Donec eu risus aliquam, posuere justo nec, hendrerit nunc. Suspendisse hendrerit commodo leo non pretium. Sed dignissim imperdiet leo sed porta. Nulla blandit arcu id nunc eleifend imperdiet eu sed nisi. Sed ligula massa, convallis tincidunt nunc quis, semper consectetur lacus. Maecenas vel nulla velit. Aliquam sed quam libero. Proin at aliquet nisl, eu efficitur ligula. Curabitur a tincidunt velit. Praesent accumsan, orci in mollis semper, diam tellus euismod quam, vestibulum gravida orci felis sit amet ex. Mauris molestie ex id sapien elementum ullamcorper. Curabitur neque risus, fringilla vel posuere et, bibendum ut dolor. Praesent ex mi, mollis in tincidunt sit amet, sodales nec dui. Ut dictum imperdiet justo id suscipit. Cras cursus, quam vitae ultricies finibus, massa justo pretium sem, in vehicula magna ante vel enim. Donec finibus eros a laoreet consectetur. Aenean augue orci, gravida id mattis quis, feugiat pellentesque mi. Vestibulum bibendum pellentesque mi cursus sodales. Nulla ut lacinia tellus, vitae ullamcorper nibh. Mauris vitae pharetra leo. Morbi in diam eu augue tempus pharetra. Mauris iaculis nulla non risus placerat aliquam a vitae mauris. Morbi nec nunc vitae quam auctor tempus. Maecenas lacinia sollicitudin leo. Sed odio felis, feugiat vitae ullamcorper ullamcorper, mattis laoreet magna. Morbi convallis aliquam facilisis. Pellentesque ac velit nisl. Pellentesque ornare ut lacus nec malesuada. Curabitur finibus, felis quis dapibus maximus, diam nisl finibus velit, vel ornare quam massa ut lectus. Proin metus augue, scelerisque vel ex nec, porttitor commodo elit. Pellentesque a orci turpis. Pellentesque imperdiet luctus nisl, in scelerisque ex consequat id. Donec sollicitudin, erat non scelerisque molestie, mauris eros faucibus lorem, sed bibendum mauris nisi sed sem. Mauris at dignissim ipsum. Ut tristique, arcu non volutpat eleifend, risus est porttitor nunc, quis lacinia dui diam et lectus. Donec dignissim eleifend aliquam. Nunc tempor laoreet enim, ut iaculis nibh tempor sit amet. Nunc laoreet lorem velit, eu lobortis turpis ultricies eget. Sed accumsan facilisis velit, vulputate varius ex dapibus non. Nam aliquet ultrices efficitur. Ut nec sapien posuere, accumsan ligula non, luctus augue. Vestibulum tincidunt iaculis nunc sit amet tristique. Nullam id arcu vitae arcu finibus sodales. Etiam sed aliquet elit, eget fringilla lectus. Sed iaculis justo eu justo egestas, nec posuere eros cursus. Morbi mauris nibh, accumsan sit amet est sit amet, fringilla molestie neque. Nunc et turpis quis diam pharetra rutrum. Aenean id neque diam. Donec nibh augue, venenatis in lobortis vel, ultricies finibus ante. Donec id cursus leo. Sed dignissim ipsum at mollis rhoncus. Suspendisse porttitor scelerisque libero, in aliquam sem eleifend sed. Mauris vitae pharetra leo. Praesent fringilla metus eget ante mattis, eget imperdiet elit dignissim. Donec eu volutpat nisi. Nam egestas ipsum purus, non aliquet orci pellentesque non. Sed ut vehicula urna, non fermentum risus. Nam non feugiat ligula, vel consequat felis. Suspendisse in vestibulum ante. Sed ornare auctor leo, sit amet molestie ipsum cursus quis. Cras sed sollicitudin purus. Nulla eget ultricies orci, quis gravida nisl. Vestibulum vulputate lacinia commodo. Ut placerat ante at suscipit finibus. Nunc gravida nulla quis tellus convallis, nec eleifend sem pretium. Aliquam eleifend facilisis porttitor. In ante enim, cursus vitae sodales ac, semper id dui. Suspendisse et nisl ut dui ullamcorper bibendum et ut eros. Nullam ipsum metus, consectetur vitae bibendum a, aliquam sed neque. Suspendisse semper nibh risus, quis porttitor tortor lobortis sit amet. Donec interdum mi et lacinia elementum. Quisque tristique, lectus nec condimentum sagittis, nunc odio egestas purus, quis efficitur leo diam eget sem. Donec in urna nec sapien tincidunt rutrum. Nunc vehicula lectus nec magna consectetur, a pulvinar nisl fringilla. Quisque sed mattis lectus. Sed at pellentesque metus. Nullam sollicitudin facilisis egestas. Maecenas hendrerit eu tellus mattis ultricies. Phasellus dapibus eu nisi quis lobortis. Etiam imperdiet tincidunt mi, sed viverra sapien interdum sed. Phasellus eu iaculis quam, vel varius diam. Vivamus at eros ullamcorper, vehicula nulla et, vestibulum massa. Donec mi lacus, euismod id leo a, dapibus condimentum libero. Ut vitae neque sit amet massa fringilla sagittis. Fusce porttitor tristique turpis, dictum vestibulum justo. Nam ac auctor purus. Aenean rhoncus risus in turpis consequat, quis egestas eros molestie. Nulla aliquet, orci eu ultrices molestie, lorem nisi pulvinar nisi, id bibendum quam justo quis nulla. Praesent nec est et tellus rutrum tristique. Suspendisse in arcu dui. Maecenas facilisis mauris in enim tristique bibendum. Nunc ullamcorper vehicula mi, sed rutrum magna sodales vitae. Donec ligula turpis, lobortis sed porttitor quis, faucibus ac turpis. Nullam cursus volutpat congue. Sed tempus arcu et bibendum semper. Donec at tincidunt erat, vitae sagittis urna. Aliquam blandit imperdiet justo eget ultrices. Donec vitae nulla quis felis laoreet fermentum quis vel leo. Phasellus vulputate, nulla vel vestibulum sollicitudin, justo neque aliquam ex, ac maximus arcu velit sed nisi. Pellentesque lorem magna, cursus sed magna in, sodales volutpat diam. Integer posuere ante ante, in porttitor tortor maximus sed. Nunc ac nulla fermentum, maximus urna quis, convallis erat. Integer euismod rutrum nisi, nec molestie nibh euismod in. Nullam id massa in massa laoreet commodo in vitae nunc. Nunc accumsan odio a nunc iaculis pharetra. Phasellus mollis finibus lectus sed mollis. Donec et augue quis mi eleifend egestas. Sed quis accumsan turpis. Duis tellus quam, convallis tincidunt nibh nec, efficitur sollicitudin nisl. Suspendisse blandit eget erat ut dignissim. Fusce sed enim ac lorem iaculis pellentesque eget vitae odio. Aliquam dignissim enim turpis, sed facilisis erat volutpat tempor. Vestibulum luctus lacus sodales, ultrices nulla id, sollicitudin turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sit amet ligula ante. Maecenas pretium id purus elementum dapibus. Sed enim lacus, molestie id tortor eu, gravida gravida sapien. Ut auctor sollicitudin urna et dictum. Nulla maximus mi sed porttitor maximus. Sed volutpat dolor nec lectus ornare varius. Vivamus aliquet purus nibh, eu condimentum magna tincidunt id. Sed hendrerit risus a ornare bibendum. Proin nec turpis auctor, rutrum augue sit amet, feugiat dui. Integer in finibus magna. Vivamus eu lobortis metus, non scelerisque neque. Aenean convallis erat ligula, vel bibendum nunc rhoncus at. Aenean felis magna, rhoncus non sollicitudin et, pulvinar et purus. Nunc sed augue vulputate, tristique orci at, laoreet metus. Ut ullamcorper finibus odio, sed fringilla urna interdum sed. Morbi id viverra ante, quis semper metus. Phasellus dui diam, tristique in vulputate id, sodales vel neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis varius enim nec ligula sodales malesuada. Mauris metus nulla, eleifend nec nisi in, maximus tempor dolor. Curabitur pretium ac eros non facilisis. Quisque mollis volutpat rhoncus. Curabitur eu imperdiet sapien. Praesent accumsan, nibh vitae mattis pretium, ipsum ex consectetur orci, efficitur finibus quam ex eu leo. Nulla sodales lobortis diam vel dignissim. Proin dictum, nisi sed sagittis pharetra, ex leo luctus mauris, id consequat elit ligula a sem. In pellentesque urna lacus, ac consectetur nunc condimentum a. Aenean rutrum ornare nulla in consectetur. Nam odio urna, faucibus vel nisi a, pretium tincidunt tortor. Cras tincidunt blandit sapien eu lacinia. Phasellus consequat lectus at varius rutrum. Maecenas euismod nisl sodales sollicitudin semper. Curabitur gravida urna libero, et laoreet turpis accumsan ut. Suspendisse faucibus mauris sit amet libero pretium lacinia. Pellentesque gravida, metus elementum iaculis convallis, elit turpis pretium enim, molestie tempor ante ipsum sit amet tellus. Donec commodo nisl at dapibus tincidunt. Nam mollis nibh quis porttitor blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus eu tincidunt nunc. Etiam sit amet dolor consequat, rutrum odio a, iaculis velit. Donec aliquet nisi magna, vitae porta ligula condimentum et. Curabitur sollicitudin lorem urna, quis vestibulum justo fermentum vitae. Vestibulum aliquam tincidunt sapien, gravida hendrerit ex bibendum ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sit amet nunc et lorem congue volutpat ut quis dui. Nullam pharetra malesuada metus, sit amet molestie dolor pulvinar quis. Fusce in elit elementum, facilisis nunc at, scelerisque enim. Ut fermentum molestie accumsan. Sed nunc mauris, euismod id enim eget, pretium commodo turpis. Mauris quis placerat neque. Nam vitae mi id diam gravida semper. Nam molestie at purus sit amet tincidunt. Donec sed nisl aliquam, sodales sem at, facilisis orci. Curabitur id sapien sit amet ante dapibus maximus. Vivamus odio velit, venenatis vitae ante eu, feugiat ultrices mauris. Praesent vestibulum feugiat tortor quis ullamcorper. Quisque dapibus mi id libero gravida ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec finibus dui. Suspendisse feugiat placerat tellus, et condimentum quam facilisis aliquam. Curabitur erat leo, laoreet non eros non, volutpat hendrerit ex. Proin eu magna sagittis, aliquam ligula quis, convallis justo. Phasellus nulla ante, dictum sagittis eros et, pulvinar tempus massa. Ut tortor odio, vehicula a felis vel, viverra posuere elit. Nunc non posuere nisl. Sed facilisis lectus at est malesuada, porta mattis augue finibus. Ut aliquet bibendum iaculis. Duis sit amet congue magna. Maecenas congue dictum euismod. Aenean nibh velit, auctor vitae tortor quis, congue pellentesque nisi. Integer laoreet magna quis ligula rutrum efficitur. Sed ligula ex, elementum sit amet neque at, dictum feugiat purus. Sed bibendum, magna a suscipit ultricies, quam felis dapibus augue, nec efficitur tellus mauris vel nisl. Integer sed arcu erat. Curabitur arcu odio, gravida rutrum facilisis in, euismod quis ipsum. In cursus diam eu iaculis facilisis. Pellentesque id nunc nisi. Duis eu nisi dignissim, rhoncus magna vitae, gravida mi. Maecenas sagittis sagittis dolor a luctus. Aliquam sagittis elit nunc, vitae dapibus nunc pellentesque quis. Vivamus porttitor magna nec urna viverra, ac scelerisque leo laoreet. In accumsan euismod luctus. Maecenas sollicitudin eu tortor sed iaculis. Phasellus quis facilisis nisl, nec ullamcorper metus. Aenean accumsan quam velit, id convallis diam maximus consequat. Donec lobortis commodo molestie. Maecenas quis sapien volutpat, rhoncus leo in, venenatis quam. Phasellus vitae rhoncus nunc, a rutrum mi. Mauris aliquet, urna ac dignissim maximus, magna tortor rutrum nibh, a consequat massa ligula ut orci. Sed maximus, neque a euismod facilisis, lectus est ultrices risus, quis condimentum sem ex non lacus. Aliquam ante lectus, interdum in ullamcorper sit amet, euismod id libero. Morbi posuere lacinia venenatis. Integer rutrum, tellus sit amet vulputate pulvinar, ex magna sodales velit, ac imperdiet libero quam at nunc. Sed venenatis nulla lacus, eu rhoncus diam auctor non. Quisque pellentesque mi sed tortor ullamcorper condimentum. Cras sem lorem, sagittis in auctor quis, consectetur in sem. Nullam vitae vulputate tortor, a tincidunt eros. Nulla aliquam dui non odio hendrerit, vel ullamcorper dui tempor. Sed laoreet turpis quam, et mollis mi tristique sit amet. Curabitur non lacus pharetra, viverra sapien vitae, sagittis risus. Nullam feugiat orci neque, sed semper libero consectetur at. Vivamus blandit justo a velit dictum iaculis. Morbi porttitor nisl non felis gravida, sit amet consequat lectus vulputate. Proin sodales, urna non pulvinar consequat, sapien velit gravida massa, ornare consequat orci est porta justo. Quisque non ligula ligula. Aliquam erat volutpat. Donec quis sagittis mauris. Vivamus at ante a dui tristique semper vel ac lectus. Cras sed tortor odio. Curabitur at porta nibh. Suspendisse commodo tortor ac rutrum fringilla. Suspendisse ut dolor vitae felis sodales faucibus. Vestibulum semper, metus vitae tempus tempus, diam justo gravida tellus, sit amet posuere quam ipsum sit amet tortor. Maecenas eros augue, placerat a nulla non, feugiat rhoncus diam. Vivamus sed pretium sem. Etiam scelerisque, erat in porttitor mollis, dolor lacus porttitor lacus, vel rutrum urna dolor vitae justo. Donec bibendum viverra varius. Donec feugiat magna id magna pharetra, non venenatis lectus porta. In arcu nibh, hendrerit eu est nec, vehicula euismod lectus. Nullam a molestie tellus. Maecenas gravida sollicitudin faucibus. Curabitur vitae vestibulum metus. Nulla eget lectus at orci bibendum pulvinar. Donec pretium magna a massa scelerisque elementum. Suspendisse ac gravida est. Maecenas ornare dui enim, sed sodales tellus suscipit quis. Proin feugiat lacus ut libero tempus cursus. Duis egestas, augue quis dapibus ultricies, mi nunc condimentum sapien, et tincidunt est tortor sit amet dolor. Phasellus eu lacus viverra, ornare urna vel, consequat purus. Curabitur at ornare neque, quis facilisis elit. Sed vel mauris in diam commodo sollicitudin. Nunc a cursus nisl, at rhoncus ex. Duis ornare urna non nibh gravida, nec accumsan turpis sodales. Pellentesque sit amet ultricies urna. Mauris vel fermentum lorem. Curabitur laoreet, purus vel feugiat feugiat, velit justo luctus mi, a mollis sem leo vitae mauris. Vestibulum dignissim tempus ex eu faucibus. Aliquam eget leo eu arcu dictum blandit. Pellentesque ullamcorper lacus pulvinar turpis venenatis volutpat. Nulla efficitur pellentesque tellus, vitae ornare odio facilisis id. Praesent eget justo turpis. Curabitur condimentum, lacus ut varius mollis, neque risus faucibus mi, sit amet lobortis leo ipsum eget odio. Sed semper vestibulum libero, ac feugiat nibh tristique id. In aliquam eget tellus in commodo. Cras sodales semper nisl, nec euismod leo ullamcorper et. Etiam sed placerat mi. In pellentesque cursus eros in hendrerit. In facilisis, metus at vulputate pulvinar, felis enim efficitur ante, a laoreet augue diam ut ligula. Maecenas lectus tortor, placerat eu tincidunt sit amet, consectetur a odio. Donec vel lorem eros. Morbi et efficitur tortor, vitae viverra lorem. Cras elit ante, auctor eget turpis sit amet, accumsan laoreet arcu. Donec vel dictum velit. Fusce ut venenatis magna. Cras lacinia urna a lacinia feugiat. Ut at odio ut neque tincidunt malesuada quis nec lacus. Donec euismod felis id consectetur eleifend. Etiam nec ipsum eu nibh maximus aliquet. Aenean nec interdum tortor."), store.footer && store.footer.height && store.footer.height > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
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

},[["./assets/js/react/pages/create.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","vendors~browse~create~theme","vendors~create","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL0Zsb2F0aW5nV2luZG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvRWxlbWVudEVkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvbWVudS9OYXZiYXJJdGVtc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvY3JlYXRlUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImVsZW1lbnRPclBhcmVudEhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsIkZsb2F0aW5nV2luZG93IiwiaW5pdEFjdGl2ZSIsImluaXRDb250ZW50cyIsIm5lZWRzV2lkZSIsIndpbmRvd0NsYXNzTmFtZSIsIm92ZXJUb3BDbGFzc05hbWUiLCJ3aWRlQ2xhc3NOYW1lIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VFZmZlY3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm1hcCIsIml0ZW0iLCJBQ1RJT05TIiwiTkFWQkFSX0hFSUdIVCIsIk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SIiwiTkFWQkFSX1RFWFRfQ09MT1IiLCJOQVZCQVJfVEVYVF9TSVpFIiwiTkFWQkFSX1NQQUNJTkdfT1BUSU9OIiwiTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEIiwiTkFWQkFSX0lURU1fVVJMX1VQREFURUQiLCJOQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQiLCJOQVZCQVJfSVRFTV9BRERFRCIsIkJPRFlfQkFDS0dST1VORF9DT0xPUiIsIkJPRFlfVEVYVF9DT0xPUiIsIkJPRFlfRk9OVF9TSVpFIiwiQk9EWV9QQURESU5HIiwiRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1IiLCJGT09URVJfVEVYVF9DT0xPUiIsIkZPT1RFUl9GT05UX1NJWkUiLCJGT09URVJfSEVJR0hUIiwiSU5JVF9TVFlMRSIsIm5hdmJhciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImluaXQiLCJsYXlvdXREYXRhIiwicGFnZVN0cnVjdHVyZSIsInNhdmVQYWdlIiwicGF5bG9hZCIsImF4aW9zIiwicG9zdCIsInBhZ2VIYXNoIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwiYWxlcnQiLCJDcmVhdGVQYWdlV3JhcHBlciIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhdmFpbGFibGVTcGFjaW5nT3B0aW9ucyIsImZsZXhTdGFydCIsImZsZXhFbmQiLCJzcGFjZUFyb3VuZCIsIm5hdkl0ZW1zTmVlZE1hcmdpbiIsInNwYWNpbmdPcHRpb24iLCJnZXRTcGFjaW5nU3R5bGUiLCJnZXROYXZJdGVtc1N0eWxlIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpbiIsIkNyZWF0aW9uRGVzayIsInN0b3JlIiwiYm9keVN0eWxlIiwiYm9keSIsIm5hdkl0ZW1zIiwiaXRlbXMiLCJjb250ZW50U3R5bGUiLCJjb250ZW50IiwicGFkZGluZyIsInNwYWNpbmciLCJuYXZTdHlsZSIsImZvb3RlclN0eWxlIiwiZm9vdGVyIiwibmF2SXRlbXNTdHlsZSIsInVybCIsInRleHQiLCJtZW51VGV4dHMiLCJzaWRlYmFyIiwic2VjdGlvbnMiLCJtZW51T3B0aW9uQWN0aXZlIiwiZ2V0TWVudU9wdGlvbkFjdGl2ZSIsIm1lbnVSZWR1Y2VyIiwiY3VycmVudEl0ZW0iLCJhY3RpdmVPcHRpb24iLCJDcmVhdGVNZW51IiwiYWN0aXZlTWVudU9wdGlvbiIsIm1lbnVEaXNwYXRjaCIsIk5hdmJhckVkaXRvciIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwidGV4dENvbG9yIiwic2V0VGV4dENvbG9yIiwic2V0SGVpZ2h0IiwibmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlIiwic2V0TmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlIiwiY2xvc2VOYXZJdGVtc01vZGFsIiwiZSIsInRhcmdldCIsIndpbmRvdyIsIm9uY2xpY2siLCJ0eXBlIiwiaGV4IiwidmFsdWUiLCJmb250U2l6ZSIsIk51bWJlciIsInBhcnNlSW50IiwiQm9keUVkaXRvciIsInNldEJhY2tncm91bmRDb2xvciIsInNldENvbG9yIiwiZmxleEZsb3ciLCJTaWRlYmFyRWRpdG9yIiwiRm9vdGVyRWRpdG9yIiwiU2VjdGlvbnNFZGl0b3IiLCJNZW51T3B0aW9uIiwiY2hldnJvbkNsYXNzIiwiaGFuZGxlQ2xpY2siLCJOYXZiYXJJdGVtc01hbmFnZXIiLCJuZWdhdGl2ZUlkIiwic2V0TmVnYXRpdmVJZCIsIml0ZW1zSW5wdXRzIiwiaWQiLCJuZXdJdGVtIiwiYWN0aW9uIiwibmV3TmF2YmFySCIsIm5ld05hdmJhckJnIiwibmV3TmF2YmFyVGMiLCJuZXdOYXZiYXJTcGFjaW5nIiwibmV3TmF2YmFyRm9udFNpemUiLCJuZXdOYXZiYXJJdGVtc1RleHQiLCJmb3JFYWNoIiwidW5kZWZpbmVkIiwibmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVGV4dCIsIm5ld05hdmJhckl0ZW1zVXJsIiwibmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVXJsIiwib2xkTmF2YmFySXRlbXMiLCJuZXdOYXZiYXJJdGVtc0FmdGVyRGVsZXRpbmciLCJmaWx0ZXIiLCJuZXdOYXZiYXJBZnRlckRlbGV0aW9uIiwibmV3TmF2SXRlbXMiLCJwdXNoIiwibmV3TmF2YmFyQWZ0ZXJBZGRpbmciLCJuZXdCb2R5IiwibmV3Qm9keVRjIiwibmV3Qm9keUZzIiwibmV3Qm9keUNvbnRlbnRQYWRkaW5nIiwibmV3Rm9vdGVyQmciLCJuZXdGb290ZXJIZWlnaHQiLCJuZXdGb290ZXJUYyIsIm5ld0Zvb3RlckZzIiwiQ3JlYXRlUGFnZUNvbnRhaW5lciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLE9BQUQsRUFBVUMsU0FBVixFQUF3QjtBQUNwRCxNQUFJRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCRixTQUEzQixDQUFKLEVBQTJDO0FBQ3ZDLFdBQU8sSUFBUDtBQUNILEdBRkQsTUFFTyxJQUFJRCxPQUFPLENBQUNJLGFBQVosRUFBMkI7QUFDOUIsV0FBT0wsdUJBQXVCLENBQUNDLE9BQU8sQ0FBQ0ksYUFBVCxFQUF3QkgsU0FBeEIsQ0FBOUI7QUFDSDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDQVBEOztBQVNlRixzRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRUEsSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFnRTtB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NkNBQVcxRCxLQUFYO0FBQWtCMkIsY0FBTSxFQUFFNEU7QUFBMUI7QUExRlI7QUE0RkgsQ0E3RkQ7O0FBK0ZleEcsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBOztJQUVxQnlHLG1COzs7OztBQUNqQixpQ0FBYztBQUFBOztBQUFBO0FBRWI7Ozs7NkJBRVE7QUFDTCwwQkFDSSxzRkFDSSw0REFBQywrREFBRCxPQURKLGVBRUksNERBQUMsdUZBQUQsT0FGSixDQURKO0FBTUg7Ozs7RUFaNENDLDZDQUFLLENBQUNDLFM7Ozs7Ozs7Ozs7Ozs7O0FDSnZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBQyxnREFBUSxDQUFDQyxNQUFULGVBQ0ksMkRBQUMsdUVBQUQsT0FESixFQUVJdkQsTUFBTSxDQUFDd0QsUUFBUCxDQUFnQkMsY0FBaEIsQ0FBK0IsTUFBL0IsQ0FGSixFIiwiZmlsZSI6ImNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LnBhcmVudEVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRmxvYXRpbmdXaW5kb3cgPSAoe2luaXRBY3RpdmUgPSBmYWxzZSwgaW5pdENvbnRlbnRzID0gW10sIG5lZWRzV2lkZSA9IGZhbHNlfSkgPT4ge1xuICAgIGNvbnN0IHdpbmRvd0NsYXNzTmFtZSA9IFwiZmxvYXRpbmctd2luZG93XCI7XG4gICAgY29uc3Qgb3ZlclRvcENsYXNzTmFtZSA9IFwib3Zlci10b3BcIjtcbiAgICBjb25zdCB3aWRlQ2xhc3NOYW1lID0gJyB3aW5kb3ctd2lkZSc7XG5cbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KFxuICAgICAgICAoKSA9PiBzZXRBY3RpdmUoaW5pdEFjdGl2ZSksXG4gICAgICAgIFtdXG4gICAgKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBhY3RpdmUgPyB3aW5kb3dDbGFzc05hbWUgOiBgJHt3aW5kb3dDbGFzc05hbWV9ICR7b3ZlclRvcENsYXNzTmFtZX1gO1xuICAgIGlmIChuZWVkc1dpZGUpIGNsYXNzTmFtZSArPSB3aWRlQ2xhc3NOYW1lO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJ319PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4aXQtYnV0dG9uIGJ1dHRvbi1yZWRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0QWN0aXZlKGZhbHNlKX19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J3doaXRlJ319XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluaXRDb250ZW50cy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ1dpbmRvdzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IHsgQ3JlYXRpb25EZXNrIH0gZnJvbSBcIi4vQ3JlYXRpb25EZXNrXCI7XG5pbXBvcnQgeyBDcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudS9DcmVhdGVNZW51XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgQUNUSU9OUyA9IHtcbiAgICBOQVZCQVJfSEVJR0hUOiAnc2V0TmF2YmFySGVpZ2h0JyxcbiAgICBOQVZCQVJfQkFDS0dST1VORF9DT0xPUjogJ3NldE5hdmJhckJhY2tncm91bmRDb2xvcicsXG4gICAgTkFWQkFSX1RFWFRfQ09MT1I6ICdzZXROYXZiYXJUZXh0Q29sb3InLFxuICAgIE5BVkJBUl9URVhUX1NJWkU6ICdzZXROYXZiYXJUZXh0U2l6ZScsXG4gICAgTkFWQkFSX1NQQUNJTkdfT1BUSU9OOiAnc2V0TmF2YmFyU3BhY2luZ09wdGlvbicsXG4gICAgTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEOiAnc2V0TmF2YmFySXRlbVRleHQnLFxuICAgIE5BVkJBUl9JVEVNX1VSTF9VUERBVEVEOiAnc2V0TmF2YmFySXRlbVVybCcsXG4gICAgTkFWQkFSX0lURU1fSVRFTV9ERUxFVEVEOiAnZGVsZXRlTmF2YmFySXRlbScsXG4gICAgTkFWQkFSX0lURU1fQURERUQ6ICdhZGRlZE5hdmJhckl0ZW0nLFxuXG4gICAgQk9EWV9CQUNLR1JPVU5EX0NPTE9SOiAnc2V0Qm9keUJhY2tyb3VuZENvbG9yJyxcbiAgICBCT0RZX1RFWFRfQ09MT1I6ICdzZXRCb2R5VGV4dENvbG9yJyxcbiAgICBCT0RZX0ZPTlRfU0laRTogJ3NldEJvZHlGb250U2l6ZScsXG4gICAgQk9EWV9QQURESU5HOiAnc2V0Qm9keVBhZGRpbmcnLFxuXG4gICAgRk9PVEVSX0JBQ0tHUk9VTkRfQ09MT1I6ICdzZXRGb290ZXJCYWNrZ3JvdW5kQ29sb3InLFxuICAgIEZPT1RFUl9URVhUX0NPTE9SOiAnc2V0Rm9vdGVyVGV4dENvbG9yJyxcbiAgICBGT09URVJfRk9OVF9TSVpFOiAnc2V0Rm9vdGVyRm9udFNpemUnLFxuICAgIEZPT1RFUl9IRUlHSFQ6ICdzZXRGb290ZXJIZWlnaHQnXG59O1xuXG5leHBvcnQgY29uc3QgSU5JVF9TVFlMRSA9IHtcbiAgICBuYXZiYXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2FhYWFhYScsXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIGhlaWdodDogNVxuICAgIH1cbn07XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxheW91dERhdGEucGFnZVN0cnVjdHVyZTtcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVQYWdlID0gcGF5bG9hZCA9PiB7XG4gICAgcGF5bG9hZC5uYXZiYXIuaGVpZ2h0ID0gcGF5bG9hZC5uYXZiYXIuaGVpZ2h0IHx8IElOSVRfU1RZTEUubmF2YmFyLmhlaWdodDsgLy9AdG9kbyByZWZhY3RvciFcbiAgICBheGlvcy5wb3N0KGAvZGF0YS91cGRhdGVfcGFnZS8ke2xheW91dERhdGEucGFnZUhhc2h9YCwge3BheWxvYWR9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVQYWdlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge30sIGluaXQpO1xuXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cblxuICAgICAgICAgICAgPENyZWF0ZU1lbnUgc3RvcmU9e3N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgICAgIDxDcmVhdGlvbkRlc2sgc3RvcmU9e3N0YXRlfS8+XG4gICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSU5JVF9TVFlMRSB9IGZyb20gXCIuL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zID0ge1xuICAgIGZsZXhTdGFydDogMSxcbiAgICBmbGV4RW5kOiAyLFxuICAgIHNwYWNlQXJvdW5kOiAzXG59O1xuXG5jb25zdCBuYXZJdGVtc05lZWRNYXJnaW4gPSBzcGFjaW5nT3B0aW9uID0+IHtcbiAgICByZXR1cm4gc3BhY2luZ09wdGlvbiAhPT0gYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuc3BhY2VBcm91bmQ7XG59XG5cbmNvbnN0IGdldFNwYWNpbmdTdHlsZSA9IHNwYWNpbmdPcHRpb24gPT4ge1xuICAgIHN3aXRjaCAoc3BhY2luZ09wdGlvbikge1xuICAgICAgICBjYXNlIGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLmZsZXhFbmQ6XG4gICAgICAgICAgICByZXR1cm4ge2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCd9O1xuICAgICAgICBjYXNlIGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLnNwYWNlQXJvdW5kOlxuICAgICAgICAgICAgcmV0dXJuIHtkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ307XG4gICAgICAgIGNhc2UgYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuZmxleFN0YXJ0OlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCd9O1xuICAgIH1cbn07XG5cbmNvbnN0IGdldE5hdkl0ZW1zU3R5bGUgPSBzcGFjaW5nT3B0aW9uID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHt0ZXh0RGVjb3JhdGlvbjonbm9uZScsY29sb3I6J2luaGVyaXQnfTtcbiAgICBpZiAobmF2SXRlbXNOZWVkTWFyZ2luKHNwYWNpbmdPcHRpb24pKSB7XG4gICAgICAgIHN0eWxlLm1hcmdpbiA9ICcwIDJyZW0nO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGlvbkRlc2sgPSAoe3N0b3JlID0ge319KSA9PiB7XG5cbiAgICBzdG9yZS5uYXZiYXIgPSBzdG9yZS5uYXZiYXIgfHwgSU5JVF9TVFlMRS5uYXZiYXI7XG4gICAgbGV0IGJvZHlTdHlsZSA9IHN0b3JlLmJvZHkgfHwge307XG4gICAgbGV0IG5hdkl0ZW1zID0gc3RvcmUubmF2YmFyLml0ZW1zIHx8IFtdO1xuICAgIGxldCBjb250ZW50U3R5bGUgPSBzdG9yZS5ib2R5LmNvbnRlbnQgfHwge307XG4gICAgY29udGVudFN0eWxlID0gey4uLmNvbnRlbnRTdHlsZSwgcGFkZGluZzpgMzBweCAke2NvbnRlbnRTdHlsZS5wYWRkaW5nfXB4YH07XG4gICAgY29uc3Qgc3BhY2luZyA9IGdldFNwYWNpbmdTdHlsZShzdG9yZS5uYXZiYXIuc3BhY2luZ09wdGlvbik7XG4gICAgY29uc3QgbmF2U3R5bGUgPSB7Li4uc3RvcmUubmF2YmFyLCBoZWlnaHQ6IGAke3N0b3JlLm5hdmJhci5oZWlnaHQgfHwgNX1yZW1gLCAuLi5zcGFjaW5nfTtcbiAgICBsZXQgZm9vdGVyU3R5bGUgPSB7Li4uc3RvcmUuZm9vdGVyLCBoZWlnaHQ6IGAke3N0b3JlLmZvb3Rlci5oZWlnaHQgfHwgMH1yZW1gfTtcbiAgICAvLyBuYXZTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIC8vIG5hdlN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWFyb3VuZCc7XG4gICAgY29uc3QgbmF2SXRlbXNTdHlsZSA9IGdldE5hdkl0ZW1zU3R5bGUoc3RvcmUubmF2YmFyLnNwYWNpbmdPcHRpb24pO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNyZWF0aW9uLWRlc2tcIiBzdHlsZT17Ym9keVN0eWxlfT5cbiAgICAgICAgICAgIDxuYXYgc3R5bGU9e25hdlN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAge25hdkl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtuYXZJdGVtc1N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+O1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGVudFN0eWxlfT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgQWJhc2RucXdqa3EgcWVqa2ZucWpma3FuZCBxaWZ1YnFqZmprcXdmXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZXUgZXJhdCBsb2JvcnRpcywgdmFyaXVzIGFudGUgYXQsIGFjY3Vtc2FuIHRlbGx1cy4gQ3VyYWJpdHVyIHZhcml1cywgbmVxdWUgaWQgZGljdHVtIHVsbGFtY29ycGVyLCBuaXNpIGxpYmVybyBlZ2VzdGFzIGVzdCwgdmVsIHZlbmVuYXRpcyBleCBpcHN1bSBhdCBlc3QuIFV0IGluIGxhY3VzIGFudGUuIEN1cmFiaXR1ciBmYXVjaWJ1cyByaXN1cyBtYXVyaXMsIGEgdGluY2lkdW50IG1ldHVzIG1vbGxpcyBldS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBlbGxlbnRlc3F1ZSBhIGVzdCBmYWNpbGlzaXMsIGVnZXN0YXMgdXJuYSBldCwgcGhhcmV0cmEgYXJjdS4gTmFtIGltcGVyZGlldCBkaWN0dW0gbnVsbGEgaW4gdm9sdXRwYXQuIENyYXMgdGVtcHVzIHV0IG9yY2kgaW4gY29uZGltZW50dW0uIEZ1c2NlIGx1Y3R1cywgZHVpIGVnZXQgYmxhbmRpdCBtYXR0aXMsIGxhY3VzIHB1cnVzIGNvbnNlY3RldHVyIGxvcmVtLCBuZWMgbW9sZXN0aWUgbmVxdWUgZXN0IGx1Y3R1cyBmZWxpcy4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIFZpdmFtdXMgbWFnbmEgbnVuYywgYWNjdW1zYW4gaW4gbWFsZXN1YWRhIGlkLCBncmF2aWRhIGZldWdpYXQgdGVsbHVzLiBQaGFzZWxsdXMgYSBlc3Qgdml0YWUgcmlzdXMgaW50ZXJkdW0gZ3JhdmlkYS4gVXQgc2VtcGVyIHRlbGx1cyBldCBmZWxpcyBtYXhpbXVzLCBzaXQgYW1ldCB0aW5jaWR1bnQgbWV0dXMgbGFjaW5pYS5cblxuICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSB2ZWwgbGlndWxhIG9ybmFyZSwgZGlnbmlzc2ltIHJpc3VzIGFjY3Vtc2FuLCBwb3N1ZXJlIGF1Z3VlLiBJbnRlZ2VyIG9yY2kgbGliZXJvLCBwbGFjZXJhdCBlZ2V0IGF1Y3RvciBhYywgYWxpcXVldCBldSB0dXJwaXMuIERvbmVjIHNpdCBhbWV0IGludGVyZHVtIGp1c3RvLiBJbnRlZ2VyIHZvbHV0cGF0IGV0IG1hdXJpcyBldCBlZmZpY2l0dXIuIEludGVnZXIgZWZmaWNpdHVyIHNhcGllbiBldSBtYWxlc3VhZGEgY29uc2VjdGV0dXIuIFBoYXNlbGx1cyB0aW5jaWR1bnQsIHVybmEgaWQgZWZmaWNpdHVyIGZhY2lsaXNpcywgZGlhbSBmZWxpcyBmYWNpbGlzaXMgZW5pbSwgYWMgY29uc2VxdWF0IGRvbG9yIHB1cnVzIHV0IHVybmEuIE5hbSBhdCBtYXhpbXVzIG1hdXJpcy4gUHJhZXNlbnQgdG9ydG9yIG9kaW8sIG1hbGVzdWFkYSB2ZWwgZGlhbSB1dCwgc29sbGljaXR1ZGluIHBsYWNlcmF0IGxpZ3VsYS4gRXRpYW0gZXQgc29kYWxlcyBuaXNpLiBEb25lYyBldSByaXN1cyBhbGlxdWFtLCBwb3N1ZXJlIGp1c3RvIG5lYywgaGVuZHJlcml0IG51bmMuIFN1c3BlbmRpc3NlIGhlbmRyZXJpdCBjb21tb2RvIGxlbyBub24gcHJldGl1bS4gU2VkIGRpZ25pc3NpbSBpbXBlcmRpZXQgbGVvIHNlZCBwb3J0YS4gTnVsbGEgYmxhbmRpdCBhcmN1IGlkIG51bmMgZWxlaWZlbmQgaW1wZXJkaWV0IGV1IHNlZCBuaXNpLiBTZWQgbGlndWxhIG1hc3NhLCBjb252YWxsaXMgdGluY2lkdW50IG51bmMgcXVpcywgc2VtcGVyIGNvbnNlY3RldHVyIGxhY3VzLiBNYWVjZW5hcyB2ZWwgbnVsbGEgdmVsaXQuXG5cbiAgICAgICAgICAgICAgICBBbGlxdWFtIHNlZCBxdWFtIGxpYmVyby4gUHJvaW4gYXQgYWxpcXVldCBuaXNsLCBldSBlZmZpY2l0dXIgbGlndWxhLiBDdXJhYml0dXIgYSB0aW5jaWR1bnQgdmVsaXQuIFByYWVzZW50IGFjY3Vtc2FuLCBvcmNpIGluIG1vbGxpcyBzZW1wZXIsIGRpYW0gdGVsbHVzIGV1aXNtb2QgcXVhbSwgdmVzdGlidWx1bSBncmF2aWRhIG9yY2kgZmVsaXMgc2l0IGFtZXQgZXguIE1hdXJpcyBtb2xlc3RpZSBleCBpZCBzYXBpZW4gZWxlbWVudHVtIHVsbGFtY29ycGVyLiBDdXJhYml0dXIgbmVxdWUgcmlzdXMsIGZyaW5naWxsYSB2ZWwgcG9zdWVyZSBldCwgYmliZW5kdW0gdXQgZG9sb3IuIFByYWVzZW50IGV4IG1pLCBtb2xsaXMgaW4gdGluY2lkdW50IHNpdCBhbWV0LCBzb2RhbGVzIG5lYyBkdWkuIFV0IGRpY3R1bSBpbXBlcmRpZXQganVzdG8gaWQgc3VzY2lwaXQuIENyYXMgY3Vyc3VzLCBxdWFtIHZpdGFlIHVsdHJpY2llcyBmaW5pYnVzLCBtYXNzYSBqdXN0byBwcmV0aXVtIHNlbSwgaW4gdmVoaWN1bGEgbWFnbmEgYW50ZSB2ZWwgZW5pbS4gRG9uZWMgZmluaWJ1cyBlcm9zIGEgbGFvcmVldCBjb25zZWN0ZXR1ci4gQWVuZWFuIGF1Z3VlIG9yY2ksIGdyYXZpZGEgaWQgbWF0dGlzIHF1aXMsIGZldWdpYXQgcGVsbGVudGVzcXVlIG1pLlxuXG4gICAgICAgICAgICAgICAgVmVzdGlidWx1bSBiaWJlbmR1bSBwZWxsZW50ZXNxdWUgbWkgY3Vyc3VzIHNvZGFsZXMuIE51bGxhIHV0IGxhY2luaWEgdGVsbHVzLCB2aXRhZSB1bGxhbWNvcnBlciBuaWJoLiBNYXVyaXMgdml0YWUgcGhhcmV0cmEgbGVvLiBNb3JiaSBpbiBkaWFtIGV1IGF1Z3VlIHRlbXB1cyBwaGFyZXRyYS4gTWF1cmlzIGlhY3VsaXMgbnVsbGEgbm9uIHJpc3VzIHBsYWNlcmF0IGFsaXF1YW0gYSB2aXRhZSBtYXVyaXMuIE1vcmJpIG5lYyBudW5jIHZpdGFlIHF1YW0gYXVjdG9yIHRlbXB1cy4gTWFlY2VuYXMgbGFjaW5pYSBzb2xsaWNpdHVkaW4gbGVvLlxuXG4gICAgICAgICAgICAgICAgU2VkIG9kaW8gZmVsaXMsIGZldWdpYXQgdml0YWUgdWxsYW1jb3JwZXIgdWxsYW1jb3JwZXIsIG1hdHRpcyBsYW9yZWV0IG1hZ25hLiBNb3JiaSBjb252YWxsaXMgYWxpcXVhbSBmYWNpbGlzaXMuIFBlbGxlbnRlc3F1ZSBhYyB2ZWxpdCBuaXNsLiBQZWxsZW50ZXNxdWUgb3JuYXJlIHV0IGxhY3VzIG5lYyBtYWxlc3VhZGEuIEN1cmFiaXR1ciBmaW5pYnVzLCBmZWxpcyBxdWlzIGRhcGlidXMgbWF4aW11cywgZGlhbSBuaXNsIGZpbmlidXMgdmVsaXQsIHZlbCBvcm5hcmUgcXVhbSBtYXNzYSB1dCBsZWN0dXMuIFByb2luIG1ldHVzIGF1Z3VlLCBzY2VsZXJpc3F1ZSB2ZWwgZXggbmVjLCBwb3J0dGl0b3IgY29tbW9kbyBlbGl0LiBQZWxsZW50ZXNxdWUgYSBvcmNpIHR1cnBpcy4gUGVsbGVudGVzcXVlIGltcGVyZGlldCBsdWN0dXMgbmlzbCwgaW4gc2NlbGVyaXNxdWUgZXggY29uc2VxdWF0IGlkLlxuXG4gICAgICAgICAgICAgICAgRG9uZWMgc29sbGljaXR1ZGluLCBlcmF0IG5vbiBzY2VsZXJpc3F1ZSBtb2xlc3RpZSwgbWF1cmlzIGVyb3MgZmF1Y2lidXMgbG9yZW0sIHNlZCBiaWJlbmR1bSBtYXVyaXMgbmlzaSBzZWQgc2VtLiBNYXVyaXMgYXQgZGlnbmlzc2ltIGlwc3VtLiBVdCB0cmlzdGlxdWUsIGFyY3Ugbm9uIHZvbHV0cGF0IGVsZWlmZW5kLCByaXN1cyBlc3QgcG9ydHRpdG9yIG51bmMsIHF1aXMgbGFjaW5pYSBkdWkgZGlhbSBldCBsZWN0dXMuIERvbmVjIGRpZ25pc3NpbSBlbGVpZmVuZCBhbGlxdWFtLiBOdW5jIHRlbXBvciBsYW9yZWV0IGVuaW0sIHV0IGlhY3VsaXMgbmliaCB0ZW1wb3Igc2l0IGFtZXQuIE51bmMgbGFvcmVldCBsb3JlbSB2ZWxpdCwgZXUgbG9ib3J0aXMgdHVycGlzIHVsdHJpY2llcyBlZ2V0LiBTZWQgYWNjdW1zYW4gZmFjaWxpc2lzIHZlbGl0LCB2dWxwdXRhdGUgdmFyaXVzIGV4IGRhcGlidXMgbm9uLiBOYW0gYWxpcXVldCB1bHRyaWNlcyBlZmZpY2l0dXIuIFV0IG5lYyBzYXBpZW4gcG9zdWVyZSwgYWNjdW1zYW4gbGlndWxhIG5vbiwgbHVjdHVzIGF1Z3VlLiBWZXN0aWJ1bHVtIHRpbmNpZHVudCBpYWN1bGlzIG51bmMgc2l0IGFtZXQgdHJpc3RpcXVlLiBOdWxsYW0gaWQgYXJjdSB2aXRhZSBhcmN1IGZpbmlidXMgc29kYWxlcy4gRXRpYW0gc2VkIGFsaXF1ZXQgZWxpdCwgZWdldCBmcmluZ2lsbGEgbGVjdHVzLlxuXG4gICAgICAgICAgICAgICAgU2VkIGlhY3VsaXMganVzdG8gZXUganVzdG8gZWdlc3RhcywgbmVjIHBvc3VlcmUgZXJvcyBjdXJzdXMuIE1vcmJpIG1hdXJpcyBuaWJoLCBhY2N1bXNhbiBzaXQgYW1ldCBlc3Qgc2l0IGFtZXQsIGZyaW5naWxsYSBtb2xlc3RpZSBuZXF1ZS4gTnVuYyBldCB0dXJwaXMgcXVpcyBkaWFtIHBoYXJldHJhIHJ1dHJ1bS4gQWVuZWFuIGlkIG5lcXVlIGRpYW0uIERvbmVjIG5pYmggYXVndWUsIHZlbmVuYXRpcyBpbiBsb2JvcnRpcyB2ZWwsIHVsdHJpY2llcyBmaW5pYnVzIGFudGUuIERvbmVjIGlkIGN1cnN1cyBsZW8uIFNlZCBkaWduaXNzaW0gaXBzdW0gYXQgbW9sbGlzIHJob25jdXMuXG5cbiAgICAgICAgICAgICAgICBTdXNwZW5kaXNzZSBwb3J0dGl0b3Igc2NlbGVyaXNxdWUgbGliZXJvLCBpbiBhbGlxdWFtIHNlbSBlbGVpZmVuZCBzZWQuIE1hdXJpcyB2aXRhZSBwaGFyZXRyYSBsZW8uIFByYWVzZW50IGZyaW5naWxsYSBtZXR1cyBlZ2V0IGFudGUgbWF0dGlzLCBlZ2V0IGltcGVyZGlldCBlbGl0IGRpZ25pc3NpbS4gRG9uZWMgZXUgdm9sdXRwYXQgbmlzaS4gTmFtIGVnZXN0YXMgaXBzdW0gcHVydXMsIG5vbiBhbGlxdWV0IG9yY2kgcGVsbGVudGVzcXVlIG5vbi4gU2VkIHV0IHZlaGljdWxhIHVybmEsIG5vbiBmZXJtZW50dW0gcmlzdXMuIE5hbSBub24gZmV1Z2lhdCBsaWd1bGEsIHZlbCBjb25zZXF1YXQgZmVsaXMuIFN1c3BlbmRpc3NlIGluIHZlc3RpYnVsdW0gYW50ZS4gU2VkIG9ybmFyZSBhdWN0b3IgbGVvLCBzaXQgYW1ldCBtb2xlc3RpZSBpcHN1bSBjdXJzdXMgcXVpcy4gQ3JhcyBzZWQgc29sbGljaXR1ZGluIHB1cnVzLiBOdWxsYSBlZ2V0IHVsdHJpY2llcyBvcmNpLCBxdWlzIGdyYXZpZGEgbmlzbC4gVmVzdGlidWx1bSB2dWxwdXRhdGUgbGFjaW5pYSBjb21tb2RvLiBVdCBwbGFjZXJhdCBhbnRlIGF0IHN1c2NpcGl0IGZpbmlidXMuXG5cbiAgICAgICAgICAgICAgICBOdW5jIGdyYXZpZGEgbnVsbGEgcXVpcyB0ZWxsdXMgY29udmFsbGlzLCBuZWMgZWxlaWZlbmQgc2VtIHByZXRpdW0uIEFsaXF1YW0gZWxlaWZlbmQgZmFjaWxpc2lzIHBvcnR0aXRvci4gSW4gYW50ZSBlbmltLCBjdXJzdXMgdml0YWUgc29kYWxlcyBhYywgc2VtcGVyIGlkIGR1aS4gU3VzcGVuZGlzc2UgZXQgbmlzbCB1dCBkdWkgdWxsYW1jb3JwZXIgYmliZW5kdW0gZXQgdXQgZXJvcy4gTnVsbGFtIGlwc3VtIG1ldHVzLCBjb25zZWN0ZXR1ciB2aXRhZSBiaWJlbmR1bSBhLCBhbGlxdWFtIHNlZCBuZXF1ZS4gU3VzcGVuZGlzc2Ugc2VtcGVyIG5pYmggcmlzdXMsIHF1aXMgcG9ydHRpdG9yIHRvcnRvciBsb2JvcnRpcyBzaXQgYW1ldC4gRG9uZWMgaW50ZXJkdW0gbWkgZXQgbGFjaW5pYSBlbGVtZW50dW0uXG5cbiAgICAgICAgICAgICAgICBRdWlzcXVlIHRyaXN0aXF1ZSwgbGVjdHVzIG5lYyBjb25kaW1lbnR1bSBzYWdpdHRpcywgbnVuYyBvZGlvIGVnZXN0YXMgcHVydXMsIHF1aXMgZWZmaWNpdHVyIGxlbyBkaWFtIGVnZXQgc2VtLiBEb25lYyBpbiB1cm5hIG5lYyBzYXBpZW4gdGluY2lkdW50IHJ1dHJ1bS4gTnVuYyB2ZWhpY3VsYSBsZWN0dXMgbmVjIG1hZ25hIGNvbnNlY3RldHVyLCBhIHB1bHZpbmFyIG5pc2wgZnJpbmdpbGxhLiBRdWlzcXVlIHNlZCBtYXR0aXMgbGVjdHVzLiBTZWQgYXQgcGVsbGVudGVzcXVlIG1ldHVzLiBOdWxsYW0gc29sbGljaXR1ZGluIGZhY2lsaXNpcyBlZ2VzdGFzLiBNYWVjZW5hcyBoZW5kcmVyaXQgZXUgdGVsbHVzIG1hdHRpcyB1bHRyaWNpZXMuIFBoYXNlbGx1cyBkYXBpYnVzIGV1IG5pc2kgcXVpcyBsb2JvcnRpcy4gRXRpYW0gaW1wZXJkaWV0IHRpbmNpZHVudCBtaSwgc2VkIHZpdmVycmEgc2FwaWVuIGludGVyZHVtIHNlZC4gUGhhc2VsbHVzIGV1IGlhY3VsaXMgcXVhbSwgdmVsIHZhcml1cyBkaWFtLiBWaXZhbXVzIGF0IGVyb3MgdWxsYW1jb3JwZXIsIHZlaGljdWxhIG51bGxhIGV0LCB2ZXN0aWJ1bHVtIG1hc3NhLiBEb25lYyBtaSBsYWN1cywgZXVpc21vZCBpZCBsZW8gYSwgZGFwaWJ1cyBjb25kaW1lbnR1bSBsaWJlcm8uIFV0IHZpdGFlIG5lcXVlIHNpdCBhbWV0IG1hc3NhIGZyaW5naWxsYSBzYWdpdHRpcy4gRnVzY2UgcG9ydHRpdG9yIHRyaXN0aXF1ZSB0dXJwaXMsIGRpY3R1bSB2ZXN0aWJ1bHVtIGp1c3RvLlxuXG4gICAgICAgICAgICAgICAgTmFtIGFjIGF1Y3RvciBwdXJ1cy4gQWVuZWFuIHJob25jdXMgcmlzdXMgaW4gdHVycGlzIGNvbnNlcXVhdCwgcXVpcyBlZ2VzdGFzIGVyb3MgbW9sZXN0aWUuIE51bGxhIGFsaXF1ZXQsIG9yY2kgZXUgdWx0cmljZXMgbW9sZXN0aWUsIGxvcmVtIG5pc2kgcHVsdmluYXIgbmlzaSwgaWQgYmliZW5kdW0gcXVhbSBqdXN0byBxdWlzIG51bGxhLiBQcmFlc2VudCBuZWMgZXN0IGV0IHRlbGx1cyBydXRydW0gdHJpc3RpcXVlLiBTdXNwZW5kaXNzZSBpbiBhcmN1IGR1aS4gTWFlY2VuYXMgZmFjaWxpc2lzIG1hdXJpcyBpbiBlbmltIHRyaXN0aXF1ZSBiaWJlbmR1bS4gTnVuYyB1bGxhbWNvcnBlciB2ZWhpY3VsYSBtaSwgc2VkIHJ1dHJ1bSBtYWduYSBzb2RhbGVzIHZpdGFlLiBEb25lYyBsaWd1bGEgdHVycGlzLCBsb2JvcnRpcyBzZWQgcG9ydHRpdG9yIHF1aXMsIGZhdWNpYnVzIGFjIHR1cnBpcy4gTnVsbGFtIGN1cnN1cyB2b2x1dHBhdCBjb25ndWUuIFNlZCB0ZW1wdXMgYXJjdSBldCBiaWJlbmR1bSBzZW1wZXIuIERvbmVjIGF0IHRpbmNpZHVudCBlcmF0LCB2aXRhZSBzYWdpdHRpcyB1cm5hLlxuXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBibGFuZGl0IGltcGVyZGlldCBqdXN0byBlZ2V0IHVsdHJpY2VzLiBEb25lYyB2aXRhZSBudWxsYSBxdWlzIGZlbGlzIGxhb3JlZXQgZmVybWVudHVtIHF1aXMgdmVsIGxlby4gUGhhc2VsbHVzIHZ1bHB1dGF0ZSwgbnVsbGEgdmVsIHZlc3RpYnVsdW0gc29sbGljaXR1ZGluLCBqdXN0byBuZXF1ZSBhbGlxdWFtIGV4LCBhYyBtYXhpbXVzIGFyY3UgdmVsaXQgc2VkIG5pc2kuIFBlbGxlbnRlc3F1ZSBsb3JlbSBtYWduYSwgY3Vyc3VzIHNlZCBtYWduYSBpbiwgc29kYWxlcyB2b2x1dHBhdCBkaWFtLiBJbnRlZ2VyIHBvc3VlcmUgYW50ZSBhbnRlLCBpbiBwb3J0dGl0b3IgdG9ydG9yIG1heGltdXMgc2VkLiBOdW5jIGFjIG51bGxhIGZlcm1lbnR1bSwgbWF4aW11cyB1cm5hIHF1aXMsIGNvbnZhbGxpcyBlcmF0LiBJbnRlZ2VyIGV1aXNtb2QgcnV0cnVtIG5pc2ksIG5lYyBtb2xlc3RpZSBuaWJoIGV1aXNtb2QgaW4uIE51bGxhbSBpZCBtYXNzYSBpbiBtYXNzYSBsYW9yZWV0IGNvbW1vZG8gaW4gdml0YWUgbnVuYy4gTnVuYyBhY2N1bXNhbiBvZGlvIGEgbnVuYyBpYWN1bGlzIHBoYXJldHJhLiBQaGFzZWxsdXMgbW9sbGlzIGZpbmlidXMgbGVjdHVzIHNlZCBtb2xsaXMuIERvbmVjIGV0IGF1Z3VlIHF1aXMgbWkgZWxlaWZlbmQgZWdlc3Rhcy4gU2VkIHF1aXMgYWNjdW1zYW4gdHVycGlzLlxuXG4gICAgICAgICAgICAgICAgRHVpcyB0ZWxsdXMgcXVhbSwgY29udmFsbGlzIHRpbmNpZHVudCBuaWJoIG5lYywgZWZmaWNpdHVyIHNvbGxpY2l0dWRpbiBuaXNsLiBTdXNwZW5kaXNzZSBibGFuZGl0IGVnZXQgZXJhdCB1dCBkaWduaXNzaW0uIEZ1c2NlIHNlZCBlbmltIGFjIGxvcmVtIGlhY3VsaXMgcGVsbGVudGVzcXVlIGVnZXQgdml0YWUgb2Rpby4gQWxpcXVhbSBkaWduaXNzaW0gZW5pbSB0dXJwaXMsIHNlZCBmYWNpbGlzaXMgZXJhdCB2b2x1dHBhdCB0ZW1wb3IuIFZlc3RpYnVsdW0gbHVjdHVzIGxhY3VzIHNvZGFsZXMsIHVsdHJpY2VzIG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gdHVycGlzLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgQWVuZWFuIHNpdCBhbWV0IGxpZ3VsYSBhbnRlLiBNYWVjZW5hcyBwcmV0aXVtIGlkIHB1cnVzIGVsZW1lbnR1bSBkYXBpYnVzLiBTZWQgZW5pbSBsYWN1cywgbW9sZXN0aWUgaWQgdG9ydG9yIGV1LCBncmF2aWRhIGdyYXZpZGEgc2FwaWVuLiBVdCBhdWN0b3Igc29sbGljaXR1ZGluIHVybmEgZXQgZGljdHVtLlxuXG4gICAgICAgICAgICAgICAgTnVsbGEgbWF4aW11cyBtaSBzZWQgcG9ydHRpdG9yIG1heGltdXMuIFNlZCB2b2x1dHBhdCBkb2xvciBuZWMgbGVjdHVzIG9ybmFyZSB2YXJpdXMuIFZpdmFtdXMgYWxpcXVldCBwdXJ1cyBuaWJoLCBldSBjb25kaW1lbnR1bSBtYWduYSB0aW5jaWR1bnQgaWQuIFNlZCBoZW5kcmVyaXQgcmlzdXMgYSBvcm5hcmUgYmliZW5kdW0uIFByb2luIG5lYyB0dXJwaXMgYXVjdG9yLCBydXRydW0gYXVndWUgc2l0IGFtZXQsIGZldWdpYXQgZHVpLiBJbnRlZ2VyIGluIGZpbmlidXMgbWFnbmEuIFZpdmFtdXMgZXUgbG9ib3J0aXMgbWV0dXMsIG5vbiBzY2VsZXJpc3F1ZSBuZXF1ZS4gQWVuZWFuIGNvbnZhbGxpcyBlcmF0IGxpZ3VsYSwgdmVsIGJpYmVuZHVtIG51bmMgcmhvbmN1cyBhdC4gQWVuZWFuIGZlbGlzIG1hZ25hLCByaG9uY3VzIG5vbiBzb2xsaWNpdHVkaW4gZXQsIHB1bHZpbmFyIGV0IHB1cnVzLiBOdW5jIHNlZCBhdWd1ZSB2dWxwdXRhdGUsIHRyaXN0aXF1ZSBvcmNpIGF0LCBsYW9yZWV0IG1ldHVzLiBVdCB1bGxhbWNvcnBlciBmaW5pYnVzIG9kaW8sIHNlZCBmcmluZ2lsbGEgdXJuYSBpbnRlcmR1bSBzZWQuIE1vcmJpIGlkIHZpdmVycmEgYW50ZSwgcXVpcyBzZW1wZXIgbWV0dXMuIFBoYXNlbGx1cyBkdWkgZGlhbSwgdHJpc3RpcXVlIGluIHZ1bHB1dGF0ZSBpZCwgc29kYWxlcyB2ZWwgbmVxdWUuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gRHVpcyB2YXJpdXMgZW5pbSBuZWMgbGlndWxhIHNvZGFsZXMgbWFsZXN1YWRhLiBNYXVyaXMgbWV0dXMgbnVsbGEsIGVsZWlmZW5kIG5lYyBuaXNpIGluLCBtYXhpbXVzIHRlbXBvciBkb2xvci5cblxuICAgICAgICAgICAgICAgIEN1cmFiaXR1ciBwcmV0aXVtIGFjIGVyb3Mgbm9uIGZhY2lsaXNpcy4gUXVpc3F1ZSBtb2xsaXMgdm9sdXRwYXQgcmhvbmN1cy4gQ3VyYWJpdHVyIGV1IGltcGVyZGlldCBzYXBpZW4uIFByYWVzZW50IGFjY3Vtc2FuLCBuaWJoIHZpdGFlIG1hdHRpcyBwcmV0aXVtLCBpcHN1bSBleCBjb25zZWN0ZXR1ciBvcmNpLCBlZmZpY2l0dXIgZmluaWJ1cyBxdWFtIGV4IGV1IGxlby4gTnVsbGEgc29kYWxlcyBsb2JvcnRpcyBkaWFtIHZlbCBkaWduaXNzaW0uIFByb2luIGRpY3R1bSwgbmlzaSBzZWQgc2FnaXR0aXMgcGhhcmV0cmEsIGV4IGxlbyBsdWN0dXMgbWF1cmlzLCBpZCBjb25zZXF1YXQgZWxpdCBsaWd1bGEgYSBzZW0uIEluIHBlbGxlbnRlc3F1ZSB1cm5hIGxhY3VzLCBhYyBjb25zZWN0ZXR1ciBudW5jIGNvbmRpbWVudHVtIGEuIEFlbmVhbiBydXRydW0gb3JuYXJlIG51bGxhIGluIGNvbnNlY3RldHVyLiBOYW0gb2RpbyB1cm5hLCBmYXVjaWJ1cyB2ZWwgbmlzaSBhLCBwcmV0aXVtIHRpbmNpZHVudCB0b3J0b3IuIENyYXMgdGluY2lkdW50IGJsYW5kaXQgc2FwaWVuIGV1IGxhY2luaWEuIFBoYXNlbGx1cyBjb25zZXF1YXQgbGVjdHVzIGF0IHZhcml1cyBydXRydW0uIE1hZWNlbmFzIGV1aXNtb2QgbmlzbCBzb2RhbGVzIHNvbGxpY2l0dWRpbiBzZW1wZXIuIEN1cmFiaXR1ciBncmF2aWRhIHVybmEgbGliZXJvLCBldCBsYW9yZWV0IHR1cnBpcyBhY2N1bXNhbiB1dC5cblxuICAgICAgICAgICAgICAgIFN1c3BlbmRpc3NlIGZhdWNpYnVzIG1hdXJpcyBzaXQgYW1ldCBsaWJlcm8gcHJldGl1bSBsYWNpbmlhLiBQZWxsZW50ZXNxdWUgZ3JhdmlkYSwgbWV0dXMgZWxlbWVudHVtIGlhY3VsaXMgY29udmFsbGlzLCBlbGl0IHR1cnBpcyBwcmV0aXVtIGVuaW0sIG1vbGVzdGllIHRlbXBvciBhbnRlIGlwc3VtIHNpdCBhbWV0IHRlbGx1cy4gRG9uZWMgY29tbW9kbyBuaXNsIGF0IGRhcGlidXMgdGluY2lkdW50LiBOYW0gbW9sbGlzIG5pYmggcXVpcyBwb3J0dGl0b3IgYmxhbmRpdC4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBoYXNlbGx1cyBldSB0aW5jaWR1bnQgbnVuYy4gRXRpYW0gc2l0IGFtZXQgZG9sb3IgY29uc2VxdWF0LCBydXRydW0gb2RpbyBhLCBpYWN1bGlzIHZlbGl0LiBEb25lYyBhbGlxdWV0IG5pc2kgbWFnbmEsIHZpdGFlIHBvcnRhIGxpZ3VsYSBjb25kaW1lbnR1bSBldC4gQ3VyYWJpdHVyIHNvbGxpY2l0dWRpbiBsb3JlbSB1cm5hLCBxdWlzIHZlc3RpYnVsdW0ganVzdG8gZmVybWVudHVtIHZpdGFlLiBWZXN0aWJ1bHVtIGFsaXF1YW0gdGluY2lkdW50IHNhcGllbiwgZ3JhdmlkYSBoZW5kcmVyaXQgZXggYmliZW5kdW0gYWMuIE9yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFN1c3BlbmRpc3NlIHNpdCBhbWV0IG51bmMgZXQgbG9yZW0gY29uZ3VlIHZvbHV0cGF0IHV0IHF1aXMgZHVpLlxuXG4gICAgICAgICAgICAgICAgTnVsbGFtIHBoYXJldHJhIG1hbGVzdWFkYSBtZXR1cywgc2l0IGFtZXQgbW9sZXN0aWUgZG9sb3IgcHVsdmluYXIgcXVpcy4gRnVzY2UgaW4gZWxpdCBlbGVtZW50dW0sIGZhY2lsaXNpcyBudW5jIGF0LCBzY2VsZXJpc3F1ZSBlbmltLiBVdCBmZXJtZW50dW0gbW9sZXN0aWUgYWNjdW1zYW4uIFNlZCBudW5jIG1hdXJpcywgZXVpc21vZCBpZCBlbmltIGVnZXQsIHByZXRpdW0gY29tbW9kbyB0dXJwaXMuIE1hdXJpcyBxdWlzIHBsYWNlcmF0IG5lcXVlLiBOYW0gdml0YWUgbWkgaWQgZGlhbSBncmF2aWRhIHNlbXBlci4gTmFtIG1vbGVzdGllIGF0IHB1cnVzIHNpdCBhbWV0IHRpbmNpZHVudC4gRG9uZWMgc2VkIG5pc2wgYWxpcXVhbSwgc29kYWxlcyBzZW0gYXQsIGZhY2lsaXNpcyBvcmNpLiBDdXJhYml0dXIgaWQgc2FwaWVuIHNpdCBhbWV0IGFudGUgZGFwaWJ1cyBtYXhpbXVzLlxuXG4gICAgICAgICAgICAgICAgVml2YW11cyBvZGlvIHZlbGl0LCB2ZW5lbmF0aXMgdml0YWUgYW50ZSBldSwgZmV1Z2lhdCB1bHRyaWNlcyBtYXVyaXMuIFByYWVzZW50IHZlc3RpYnVsdW0gZmV1Z2lhdCB0b3J0b3IgcXVpcyB1bGxhbWNvcnBlci4gUXVpc3F1ZSBkYXBpYnVzIG1pIGlkIGxpYmVybyBncmF2aWRhIHVsbGFtY29ycGVyLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBJbnRlZ2VyIG5lYyBmaW5pYnVzIGR1aS4gU3VzcGVuZGlzc2UgZmV1Z2lhdCBwbGFjZXJhdCB0ZWxsdXMsIGV0IGNvbmRpbWVudHVtIHF1YW0gZmFjaWxpc2lzIGFsaXF1YW0uIEN1cmFiaXR1ciBlcmF0IGxlbywgbGFvcmVldCBub24gZXJvcyBub24sIHZvbHV0cGF0IGhlbmRyZXJpdCBleC4gUHJvaW4gZXUgbWFnbmEgc2FnaXR0aXMsIGFsaXF1YW0gbGlndWxhIHF1aXMsIGNvbnZhbGxpcyBqdXN0by4gUGhhc2VsbHVzIG51bGxhIGFudGUsIGRpY3R1bSBzYWdpdHRpcyBlcm9zIGV0LCBwdWx2aW5hciB0ZW1wdXMgbWFzc2EuIFV0IHRvcnRvciBvZGlvLCB2ZWhpY3VsYSBhIGZlbGlzIHZlbCwgdml2ZXJyYSBwb3N1ZXJlIGVsaXQuIE51bmMgbm9uIHBvc3VlcmUgbmlzbC4gU2VkIGZhY2lsaXNpcyBsZWN0dXMgYXQgZXN0IG1hbGVzdWFkYSwgcG9ydGEgbWF0dGlzIGF1Z3VlIGZpbmlidXMuIFV0IGFsaXF1ZXQgYmliZW5kdW0gaWFjdWxpcy5cblxuICAgICAgICAgICAgICAgIER1aXMgc2l0IGFtZXQgY29uZ3VlIG1hZ25hLiBNYWVjZW5hcyBjb25ndWUgZGljdHVtIGV1aXNtb2QuIEFlbmVhbiBuaWJoIHZlbGl0LCBhdWN0b3Igdml0YWUgdG9ydG9yIHF1aXMsIGNvbmd1ZSBwZWxsZW50ZXNxdWUgbmlzaS4gSW50ZWdlciBsYW9yZWV0IG1hZ25hIHF1aXMgbGlndWxhIHJ1dHJ1bSBlZmZpY2l0dXIuIFNlZCBsaWd1bGEgZXgsIGVsZW1lbnR1bSBzaXQgYW1ldCBuZXF1ZSBhdCwgZGljdHVtIGZldWdpYXQgcHVydXMuIFNlZCBiaWJlbmR1bSwgbWFnbmEgYSBzdXNjaXBpdCB1bHRyaWNpZXMsIHF1YW0gZmVsaXMgZGFwaWJ1cyBhdWd1ZSwgbmVjIGVmZmljaXR1ciB0ZWxsdXMgbWF1cmlzIHZlbCBuaXNsLiBJbnRlZ2VyIHNlZCBhcmN1IGVyYXQuIEN1cmFiaXR1ciBhcmN1IG9kaW8sIGdyYXZpZGEgcnV0cnVtIGZhY2lsaXNpcyBpbiwgZXVpc21vZCBxdWlzIGlwc3VtLiBJbiBjdXJzdXMgZGlhbSBldSBpYWN1bGlzIGZhY2lsaXNpcy4gUGVsbGVudGVzcXVlIGlkIG51bmMgbmlzaS4gRHVpcyBldSBuaXNpIGRpZ25pc3NpbSwgcmhvbmN1cyBtYWduYSB2aXRhZSwgZ3JhdmlkYSBtaS4gTWFlY2VuYXMgc2FnaXR0aXMgc2FnaXR0aXMgZG9sb3IgYSBsdWN0dXMuIEFsaXF1YW0gc2FnaXR0aXMgZWxpdCBudW5jLCB2aXRhZSBkYXBpYnVzIG51bmMgcGVsbGVudGVzcXVlIHF1aXMuIFZpdmFtdXMgcG9ydHRpdG9yIG1hZ25hIG5lYyB1cm5hIHZpdmVycmEsIGFjIHNjZWxlcmlzcXVlIGxlbyBsYW9yZWV0LiBJbiBhY2N1bXNhbiBldWlzbW9kIGx1Y3R1cy4gTWFlY2VuYXMgc29sbGljaXR1ZGluIGV1IHRvcnRvciBzZWQgaWFjdWxpcy5cblxuICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBxdWlzIGZhY2lsaXNpcyBuaXNsLCBuZWMgdWxsYW1jb3JwZXIgbWV0dXMuIEFlbmVhbiBhY2N1bXNhbiBxdWFtIHZlbGl0LCBpZCBjb252YWxsaXMgZGlhbSBtYXhpbXVzIGNvbnNlcXVhdC4gRG9uZWMgbG9ib3J0aXMgY29tbW9kbyBtb2xlc3RpZS4gTWFlY2VuYXMgcXVpcyBzYXBpZW4gdm9sdXRwYXQsIHJob25jdXMgbGVvIGluLCB2ZW5lbmF0aXMgcXVhbS4gUGhhc2VsbHVzIHZpdGFlIHJob25jdXMgbnVuYywgYSBydXRydW0gbWkuIE1hdXJpcyBhbGlxdWV0LCB1cm5hIGFjIGRpZ25pc3NpbSBtYXhpbXVzLCBtYWduYSB0b3J0b3IgcnV0cnVtIG5pYmgsIGEgY29uc2VxdWF0IG1hc3NhIGxpZ3VsYSB1dCBvcmNpLiBTZWQgbWF4aW11cywgbmVxdWUgYSBldWlzbW9kIGZhY2lsaXNpcywgbGVjdHVzIGVzdCB1bHRyaWNlcyByaXN1cywgcXVpcyBjb25kaW1lbnR1bSBzZW0gZXggbm9uIGxhY3VzLlxuXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBhbnRlIGxlY3R1cywgaW50ZXJkdW0gaW4gdWxsYW1jb3JwZXIgc2l0IGFtZXQsIGV1aXNtb2QgaWQgbGliZXJvLiBNb3JiaSBwb3N1ZXJlIGxhY2luaWEgdmVuZW5hdGlzLiBJbnRlZ2VyIHJ1dHJ1bSwgdGVsbHVzIHNpdCBhbWV0IHZ1bHB1dGF0ZSBwdWx2aW5hciwgZXggbWFnbmEgc29kYWxlcyB2ZWxpdCwgYWMgaW1wZXJkaWV0IGxpYmVybyBxdWFtIGF0IG51bmMuIFNlZCB2ZW5lbmF0aXMgbnVsbGEgbGFjdXMsIGV1IHJob25jdXMgZGlhbSBhdWN0b3Igbm9uLiBRdWlzcXVlIHBlbGxlbnRlc3F1ZSBtaSBzZWQgdG9ydG9yIHVsbGFtY29ycGVyIGNvbmRpbWVudHVtLiBDcmFzIHNlbSBsb3JlbSwgc2FnaXR0aXMgaW4gYXVjdG9yIHF1aXMsIGNvbnNlY3RldHVyIGluIHNlbS4gTnVsbGFtIHZpdGFlIHZ1bHB1dGF0ZSB0b3J0b3IsIGEgdGluY2lkdW50IGVyb3MuIE51bGxhIGFsaXF1YW0gZHVpIG5vbiBvZGlvIGhlbmRyZXJpdCwgdmVsIHVsbGFtY29ycGVyIGR1aSB0ZW1wb3IuIFNlZCBsYW9yZWV0IHR1cnBpcyBxdWFtLCBldCBtb2xsaXMgbWkgdHJpc3RpcXVlIHNpdCBhbWV0LiBDdXJhYml0dXIgbm9uIGxhY3VzIHBoYXJldHJhLCB2aXZlcnJhIHNhcGllbiB2aXRhZSwgc2FnaXR0aXMgcmlzdXMuIE51bGxhbSBmZXVnaWF0IG9yY2kgbmVxdWUsIHNlZCBzZW1wZXIgbGliZXJvIGNvbnNlY3RldHVyIGF0LiBWaXZhbXVzIGJsYW5kaXQganVzdG8gYSB2ZWxpdCBkaWN0dW0gaWFjdWxpcy4gTW9yYmkgcG9ydHRpdG9yIG5pc2wgbm9uIGZlbGlzIGdyYXZpZGEsIHNpdCBhbWV0IGNvbnNlcXVhdCBsZWN0dXMgdnVscHV0YXRlLiBQcm9pbiBzb2RhbGVzLCB1cm5hIG5vbiBwdWx2aW5hciBjb25zZXF1YXQsIHNhcGllbiB2ZWxpdCBncmF2aWRhIG1hc3NhLCBvcm5hcmUgY29uc2VxdWF0IG9yY2kgZXN0IHBvcnRhIGp1c3RvLiBRdWlzcXVlIG5vbiBsaWd1bGEgbGlndWxhLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXG5cbiAgICAgICAgICAgICAgICBEb25lYyBxdWlzIHNhZ2l0dGlzIG1hdXJpcy4gVml2YW11cyBhdCBhbnRlIGEgZHVpIHRyaXN0aXF1ZSBzZW1wZXIgdmVsIGFjIGxlY3R1cy4gQ3JhcyBzZWQgdG9ydG9yIG9kaW8uIEN1cmFiaXR1ciBhdCBwb3J0YSBuaWJoLiBTdXNwZW5kaXNzZSBjb21tb2RvIHRvcnRvciBhYyBydXRydW0gZnJpbmdpbGxhLiBTdXNwZW5kaXNzZSB1dCBkb2xvciB2aXRhZSBmZWxpcyBzb2RhbGVzIGZhdWNpYnVzLiBWZXN0aWJ1bHVtIHNlbXBlciwgbWV0dXMgdml0YWUgdGVtcHVzIHRlbXB1cywgZGlhbSBqdXN0byBncmF2aWRhIHRlbGx1cywgc2l0IGFtZXQgcG9zdWVyZSBxdWFtIGlwc3VtIHNpdCBhbWV0IHRvcnRvci4gTWFlY2VuYXMgZXJvcyBhdWd1ZSwgcGxhY2VyYXQgYSBudWxsYSBub24sIGZldWdpYXQgcmhvbmN1cyBkaWFtLiBWaXZhbXVzIHNlZCBwcmV0aXVtIHNlbS4gRXRpYW0gc2NlbGVyaXNxdWUsIGVyYXQgaW4gcG9ydHRpdG9yIG1vbGxpcywgZG9sb3IgbGFjdXMgcG9ydHRpdG9yIGxhY3VzLCB2ZWwgcnV0cnVtIHVybmEgZG9sb3Igdml0YWUganVzdG8uIERvbmVjIGJpYmVuZHVtIHZpdmVycmEgdmFyaXVzLiBEb25lYyBmZXVnaWF0IG1hZ25hIGlkIG1hZ25hIHBoYXJldHJhLCBub24gdmVuZW5hdGlzIGxlY3R1cyBwb3J0YS4gSW4gYXJjdSBuaWJoLCBoZW5kcmVyaXQgZXUgZXN0IG5lYywgdmVoaWN1bGEgZXVpc21vZCBsZWN0dXMuIE51bGxhbSBhIG1vbGVzdGllIHRlbGx1cy4gTWFlY2VuYXMgZ3JhdmlkYSBzb2xsaWNpdHVkaW4gZmF1Y2lidXMuIEN1cmFiaXR1ciB2aXRhZSB2ZXN0aWJ1bHVtIG1ldHVzLlxuXG4gICAgICAgICAgICAgICAgTnVsbGEgZWdldCBsZWN0dXMgYXQgb3JjaSBiaWJlbmR1bSBwdWx2aW5hci4gRG9uZWMgcHJldGl1bSBtYWduYSBhIG1hc3NhIHNjZWxlcmlzcXVlIGVsZW1lbnR1bS4gU3VzcGVuZGlzc2UgYWMgZ3JhdmlkYSBlc3QuIE1hZWNlbmFzIG9ybmFyZSBkdWkgZW5pbSwgc2VkIHNvZGFsZXMgdGVsbHVzIHN1c2NpcGl0IHF1aXMuIFByb2luIGZldWdpYXQgbGFjdXMgdXQgbGliZXJvIHRlbXB1cyBjdXJzdXMuIER1aXMgZWdlc3RhcywgYXVndWUgcXVpcyBkYXBpYnVzIHVsdHJpY2llcywgbWkgbnVuYyBjb25kaW1lbnR1bSBzYXBpZW4sIGV0IHRpbmNpZHVudCBlc3QgdG9ydG9yIHNpdCBhbWV0IGRvbG9yLiBQaGFzZWxsdXMgZXUgbGFjdXMgdml2ZXJyYSwgb3JuYXJlIHVybmEgdmVsLCBjb25zZXF1YXQgcHVydXMuXG5cbiAgICAgICAgICAgICAgICBDdXJhYml0dXIgYXQgb3JuYXJlIG5lcXVlLCBxdWlzIGZhY2lsaXNpcyBlbGl0LiBTZWQgdmVsIG1hdXJpcyBpbiBkaWFtIGNvbW1vZG8gc29sbGljaXR1ZGluLiBOdW5jIGEgY3Vyc3VzIG5pc2wsIGF0IHJob25jdXMgZXguIER1aXMgb3JuYXJlIHVybmEgbm9uIG5pYmggZ3JhdmlkYSwgbmVjIGFjY3Vtc2FuIHR1cnBpcyBzb2RhbGVzLiBQZWxsZW50ZXNxdWUgc2l0IGFtZXQgdWx0cmljaWVzIHVybmEuIE1hdXJpcyB2ZWwgZmVybWVudHVtIGxvcmVtLiBDdXJhYml0dXIgbGFvcmVldCwgcHVydXMgdmVsIGZldWdpYXQgZmV1Z2lhdCwgdmVsaXQganVzdG8gbHVjdHVzIG1pLCBhIG1vbGxpcyBzZW0gbGVvIHZpdGFlIG1hdXJpcy4gVmVzdGlidWx1bSBkaWduaXNzaW0gdGVtcHVzIGV4IGV1IGZhdWNpYnVzLiBBbGlxdWFtIGVnZXQgbGVvIGV1IGFyY3UgZGljdHVtIGJsYW5kaXQuIFBlbGxlbnRlc3F1ZSB1bGxhbWNvcnBlciBsYWN1cyBwdWx2aW5hciB0dXJwaXMgdmVuZW5hdGlzIHZvbHV0cGF0LiBOdWxsYSBlZmZpY2l0dXIgcGVsbGVudGVzcXVlIHRlbGx1cywgdml0YWUgb3JuYXJlIG9kaW8gZmFjaWxpc2lzIGlkLiBQcmFlc2VudCBlZ2V0IGp1c3RvIHR1cnBpcy4gQ3VyYWJpdHVyIGNvbmRpbWVudHVtLCBsYWN1cyB1dCB2YXJpdXMgbW9sbGlzLCBuZXF1ZSByaXN1cyBmYXVjaWJ1cyBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgbGVvIGlwc3VtIGVnZXQgb2Rpby4gU2VkIHNlbXBlciB2ZXN0aWJ1bHVtIGxpYmVybywgYWMgZmV1Z2lhdCBuaWJoIHRyaXN0aXF1ZSBpZC4gSW4gYWxpcXVhbSBlZ2V0IHRlbGx1cyBpbiBjb21tb2RvLiBDcmFzIHNvZGFsZXMgc2VtcGVyIG5pc2wsIG5lYyBldWlzbW9kIGxlbyB1bGxhbWNvcnBlciBldC5cblxuICAgICAgICAgICAgICAgIEV0aWFtIHNlZCBwbGFjZXJhdCBtaS4gSW4gcGVsbGVudGVzcXVlIGN1cnN1cyBlcm9zIGluIGhlbmRyZXJpdC4gSW4gZmFjaWxpc2lzLCBtZXR1cyBhdCB2dWxwdXRhdGUgcHVsdmluYXIsIGZlbGlzIGVuaW0gZWZmaWNpdHVyIGFudGUsIGEgbGFvcmVldCBhdWd1ZSBkaWFtIHV0IGxpZ3VsYS4gTWFlY2VuYXMgbGVjdHVzIHRvcnRvciwgcGxhY2VyYXQgZXUgdGluY2lkdW50IHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhIG9kaW8uIERvbmVjIHZlbCBsb3JlbSBlcm9zLiBNb3JiaSBldCBlZmZpY2l0dXIgdG9ydG9yLCB2aXRhZSB2aXZlcnJhIGxvcmVtLiBDcmFzIGVsaXQgYW50ZSwgYXVjdG9yIGVnZXQgdHVycGlzIHNpdCBhbWV0LCBhY2N1bXNhbiBsYW9yZWV0IGFyY3UuIERvbmVjIHZlbCBkaWN0dW0gdmVsaXQuIEZ1c2NlIHV0IHZlbmVuYXRpcyBtYWduYS4gQ3JhcyBsYWNpbmlhIHVybmEgYSBsYWNpbmlhIGZldWdpYXQuIFV0IGF0IG9kaW8gdXQgbmVxdWUgdGluY2lkdW50IG1hbGVzdWFkYSBxdWlzIG5lYyBsYWN1cy4gRG9uZWMgZXVpc21vZCBmZWxpcyBpZCBjb25zZWN0ZXR1ciBlbGVpZmVuZC4gRXRpYW0gbmVjIGlwc3VtIGV1IG5pYmggbWF4aW11cyBhbGlxdWV0LiBBZW5lYW4gbmVjIGludGVyZHVtIHRvcnRvci5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyAgIChzdG9yZS5mb290ZXIgJiYgc3RvcmUuZm9vdGVyLmhlaWdodCAmJiBzdG9yZS5mb290ZXIuaGVpZ2h0ID4gMCkgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0aW9uLWRlc2stZm9vdGVyXCIgc3R5bGU9e2Zvb3RlclN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSBcIi4vTWVudU9wdGlvblwiO1xuaW1wb3J0IHsgSU5JVF9TVFlMRSwgc2F2ZVBhZ2UgfSBmcm9tIFwiLi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcbmltcG9ydCB7XG4gICAgTmF2YmFyRWRpdG9yLFxuICAgIEJvZHlFZGl0b3IsXG4gICAgU2lkZWJhckVkaXRvcixcbiAgICBTZWN0aW9uc0VkaXRvcixcbiAgICBGb290ZXJFZGl0b3Jcbn0gZnJvbSBcIi4vRWxlbWVudEVkaXRvcnNcIjtcblxuY29uc3QgbWVudVRleHRzID0ge1xuICAgIG5hdmJhcjogJ05hdmJhcicsXG4gICAgYm9keTogJ0JvZHknLFxuICAgIHNpZGViYXI6ICdTaWRlYmFyJyxcbiAgICBzZWN0aW9uczogJ1NlY3Rpb25zJyxcbiAgICBmb290ZXI6ICdGb290ZXInXG59O1xuXG5jb25zdCBtZW51T3B0aW9uQWN0aXZlID0gJyc7XG5cbmNvbnN0IGdldE1lbnVPcHRpb25BY3RpdmUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG1lbnVPcHRpb25BY3RpdmU7XG59XG5cbmNvbnN0IG1lbnVSZWR1Y2VyID0gKGN1cnJlbnRJdGVtLCBhY3RpdmVPcHRpb24pID0+IHtcbiAgICByZXR1cm4gYWN0aXZlT3B0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgQ3JlYXRlTWVudSA9ICh7c3RvcmUsIGRpc3BhdGNofSkgPT4ge1xuICAgIGNvbnN0IFthY3RpdmVNZW51T3B0aW9uLCBtZW51RGlzcGF0Y2hdID0gdXNlUmVkdWNlcihtZW51UmVkdWNlciwge30sIGdldE1lbnVPcHRpb25BY3RpdmUpO1xuICAgIHN0b3JlLm5hdmJhciA9IHN0b3JlLm5hdmJhciB8fCB7fTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVhdGUtbWVudVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIiBvbkNsaWNrPXsoKSA9PiBzYXZlUGFnZShzdG9yZSl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAgaW5pdEFjdGl2ZT17YWN0aXZlTWVudU9wdGlvbiA9PT0gbWVudVRleHRzLm5hdmJhcn1cbiAgICAgICAgICAgICAgICBtZW51RGlzcGF0Y2g9e21lbnVEaXNwYXRjaH1cbiAgICAgICAgICAgICAgICB0ZXh0PXttZW51VGV4dHMubmF2YmFyfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxOYXZiYXJFZGl0b3IgbmF2YmFyPXtzdG9yZS5uYXZiYXIgfHwgSU5JVF9TVFlMRS5uYXZiYXJ9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgICAgICAgIGluaXRBY3RpdmU9e2FjdGl2ZU1lbnVPcHRpb24gPT09IG1lbnVUZXh0cy5ib2R5fVxuICAgICAgICAgICAgICAgIG1lbnVEaXNwYXRjaD17bWVudURpc3BhdGNofVxuICAgICAgICAgICAgICAgIHRleHQ9e21lbnVUZXh0cy5ib2R5fVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxCb2R5RWRpdG9yIGJvZHk9e3N0b3JlLmJvZHkgfHwge319IGRpc3BhdGNoPXtkaXNwYXRjaH0vPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWVudU9wdGlvblxuICAgICAgICAgICAgICAgIGluaXRBY3RpdmU9e2FjdGl2ZU1lbnVPcHRpb24gPT09IG1lbnVUZXh0cy5zaWRlYmFyfVxuICAgICAgICAgICAgICAgIG1lbnVEaXNwYXRjaD17bWVudURpc3BhdGNofVxuICAgICAgICAgICAgICAgIHRleHQ9e21lbnVUZXh0cy5zaWRlYmFyfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxTaWRlYmFyRWRpdG9yLz59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1lbnVPcHRpb25cbiAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXthY3RpdmVNZW51T3B0aW9uID09PSBtZW51VGV4dHMuc2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgbWVudURpc3BhdGNoPXttZW51RGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgdGV4dD17bWVudVRleHRzLnNlY3Rpb25zfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxTZWN0aW9uc0VkaXRvci8+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAgaW5pdEFjdGl2ZT17YWN0aXZlTWVudU9wdGlvbiA9PT0gbWVudVRleHRzLmZvb3Rlcn1cbiAgICAgICAgICAgICAgICBtZW51RGlzcGF0Y2g9e21lbnVEaXNwYXRjaH1cbiAgICAgICAgICAgICAgICB0ZXh0PXttZW51VGV4dHMuZm9vdGVyfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9ezxGb290ZXJFZGl0b3IgZm9vdGVyPXtzdG9yZS5mb290ZXJ9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXRDb2xvciBmcm9tICdyZWFjdC1pbnB1dC1jb2xvcic7XG5pbXBvcnQgTmF2YmFySXRlbXNNYW5hZ2VyIGZyb20gXCIuL05hdmJhckl0ZW1zTWFuYWdlclwiO1xuaW1wb3J0IHsgQUNUSU9OUywgSU5JVF9TVFlMRSB9IGZyb20gXCIuLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuaW1wb3J0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzIGZyb20gXCIuLi8uLi8uLi8uLi9mdW5jdGlvbnMvZWxlbWVudE9yUGFyZW50SGFzQ2xhc3NcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmJhckVkaXRvciA9ICh7XG4gICAgICAgIG5hdmJhcixcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JnQ29sb3IsIHNldEJnQ29sb3JdID0gdXNlU3RhdGUobmF2YmFyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZicpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZShuYXZiYXIuY29sb3IgfHwgJyMwMDAwMDAnKTtcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUobmF2YmFyLmhlaWdodCB8fCA1KTtcbiAgICBjb25zdCBbbmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlLCBzZXROYXZiYXJJdGVtc01hbmFnZXJBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBjbG9zZU5hdkl0ZW1zTW9kYWwgPSBlID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2V4aXQtYnV0dG9uJylcbiAgICAgICAgICAgIHx8ICghZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2Zsb2F0aW5nLXdpbmRvdycpXG4gICAgICAgICAgICAgICAgJiYgIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdtYW5hZ2UtbmF2LWl0ZW1zJykpXG4gICAgICAgICAgICAgICAgJiYgIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdkZWxldGUtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAmJiAhZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2FkZC1idXR0b24nKSkge1xuICAgICAgICAgICAgc2V0TmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gY2xvc2VOYXZJdGVtc01vZGFsO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvciBuYXZiYXItZWRpdG9yXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlICYmXG4gICAgICAgICAgICAgICAgPE5hdmJhckl0ZW1zTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXtuYXZiYXJJdGVtc01hbmFnZXJBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtuYXZiYXIuaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCZ0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgdGV4dCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5jb2xvciB8fCAnIzAwMDAwMCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfVEVYVF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSEVJR0hULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2UudGFyZ2V0LnZhbHVlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBmb250IHNpemU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmF2YmFyLmZvbnRTaXplfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfVEVYVF9TSVpFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3BhY2luZy1zZWxlY3RcIj5TcGFjaW5nPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGFjaW5nT3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzcGFjaW5nLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYXZiYXIuc3BhY2luZ09wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX1NQQUNJTkdfT1BUSU9OLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2luZ09wdGlvbjogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5mbGV4LXN0YXJ0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+ZmxleC1lbmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5zcGFjZS1hcm91bmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW0gaG92ZXJhYmxlIG1hbmFnZS1uYXYtaXRlbXNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6JyNjZGRjMzknfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUodHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTWFuYWdlIG5hdmJhciBpdGVtc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBCb2R5RWRpdG9yID0gKHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JhY2tncm91bmRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yXSA9IHVzZVN0YXRlKGJvZHkuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJyk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShib2R5LmNvbG9yIHx8ICcjMDAwMDAwJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICBiYWNrZ3JvdW5kIGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Ym9keS5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5CT0RZX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgdGV4dCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2JvZHkuY29sb3IgfHwgJyMwMDAwMDAnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5CT0RZX1RFWFRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBmb250IHNpemU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MjR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5LmZvbnRTaXplfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5CT0RZX0ZPTlRfU0laRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsZmxleEZsb3c6J2NvbHVtbiB3cmFwJ319XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgcGFkZGluZzpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCI0MFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5LmNvbnRlbnQucGFkZGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuQk9EWV9QQURESU5HLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNpZGViYXJFZGl0b3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgU0lERUJBUiBFRElUT1IgUExBQ0VIT0xERVJcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEZvb3RlckVkaXRvciA9ICh7Zm9vdGVyLCBkaXNwYXRjaH0pID0+IHtcblxuICAgIGNvbnN0IFtiYWNrZ3JvdW5kQ29sb3IsIHNldEJhY2tncm91bmRDb2xvcl0gPSB1c2VTdGF0ZShmb290ZXIuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJyk7XG4gICAgY29uc3QgW3RleHRDb2xvciwgc2V0VGV4dENvbG9yXSA9IHVzZVN0YXRlKGZvb3Rlci5jb2xvciB8fCAnIzAwMDAwMCcpO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2Zvb3Rlci5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GT09URVJfQkFDS0dST1VORF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIHRleHQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtmb290ZXIuY29sb3IgfHwgJyMwMDAwMDAnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5GT09URVJfVEVYVF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiNVwiXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuRk9PVEVSX0hFSUdIVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIGZvbnQgc2l6ZTpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIyNFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb290ZXIuZm9udFNpemUgfHwgMTR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLkZPT1RFUl9GT05UX1NJWkUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNlY3Rpb25zRWRpdG9yID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIFNFQ1RJT05TIEVESVRPUiBQTEFDRUhPTERFUlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgZnJvbSBcIi4uLy4uLy4uLy4uL2Z1bmN0aW9ucy9lbGVtZW50T3JQYXJlbnRIYXNDbGFzc1wiO1xuXG5jb25zdCBNZW51T3B0aW9uID0gKHt0ZXh0LCBjb250ZW50LCBtZW51RGlzcGF0Y2gsIGluaXRBY3RpdmUgPSBmYWxzZX0pID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoaW5pdEFjdGl2ZSk7XG5cbiAgICBsZXQgY2hldnJvbkNsYXNzID0gaW5pdEFjdGl2ZSAmJiBhY3RpdmUgPyAnY2hldnJvbiBjaGV2cm9uLXJldmVyc2UnIDogJ2NoZXZyb24nO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgaWYgKCFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlLnRhcmdldCwgJ2Rlc2lnbi1tZW51LWVkaXRvcicpKSB7XG4gICAgICAgICAgICBtZW51RGlzcGF0Y2godGV4dCk7XG4gICAgICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtb3B0aW9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NoZXZyb24ucG5nXCIgYWx0PVwiY2hldnJvblwiIGNsYXNzTmFtZT17Y2hldnJvbkNsYXNzfS8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB7KGluaXRBY3RpdmUgJiYgYWN0aXZlKSAmJiBjb250ZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51T3B0aW9uOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGbG9hdGluZ1dpbmRvdyBmcm9tIFwiLi4vLi4vRmxvYXRpbmdXaW5kb3dcIjtcbmltcG9ydCB7IEFDVElPTlMgfSBmcm9tIFwiLi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuY29uc3QgTmF2YmFySXRlbXNNYW5hZ2VyID0gKHtpbml0QWN0aXZlLCBpdGVtcywgZGlzcGF0Y2h9KSA9PiB7XG4gICAgY29uc3QgW25lZ2F0aXZlSWQsIHNldE5lZ2F0aXZlSWRdID0gdXNlU3RhdGUoLTEpO1xuXG4gICAgY29uc3QgaXRlbXNJbnB1dHMgPSBpdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHRleHQtJHtpdGVtLmlkfWB9PlRleHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2B0ZXh0LSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICBpZD17YHRleHQtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46JzAgLjRyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSVRFTV9URVhUX1VQREFURUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YHVybC0ke2l0ZW0uaWR9YH0+VVJMPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgdXJsLSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICBpZD17YHVybC0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOicwIC40cmVtJ319XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0lURU1fVVJMX1VQREFURUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXJlZCBkZWxldGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaXRlbS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybihcbiAgICAgICAgPEZsb2F0aW5nV2luZG93XG4gICAgICAgICAgICBpbml0QWN0aXZlPXtpbml0QWN0aXZlfVxuICAgICAgICAgICAgbmVlZHNXaWRlPXt0cnVlfVxuICAgICAgICAgICAgaW5pdENvbnRlbnRzPXtbXG4gICAgICAgICAgICAgICAgLi4uaXRlbXNJbnB1dHMsXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZGFyay1ncmVlbiBhZGQtYnV0dG9uIGhvdmVyYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0lURU1fQURERUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbmVnYXRpdmVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmVnYXRpdmVJZChuZWdhdGl2ZUlkIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZGQgbmV3IGl0ZW1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFySXRlbXNNYW5hZ2VyIiwiaW1wb3J0IHtBQ1RJT05TfSBmcm9tIFwiLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSEVJR0hUOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFySCA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFySC5oZWlnaHQgPSBhY3Rpb24ucGF5bG9hZC5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckh9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJCZyA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyQmcuYmFja2dyb3VuZENvbG9yID0gYWN0aW9uLnBheWxvYWQuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJCZ307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfVEVYVF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhclRjID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJUYy5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJUY307XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfU1BBQ0lOR19PUFRJT046XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJTcGFjaW5nID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJTcGFjaW5nLnNwYWNpbmdPcHRpb24gPSBhY3Rpb24ucGF5bG9hZC5zcGFjaW5nT3B0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJTcGFjaW5nfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9URVhUX1NJWkU6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJGb250U2l6ZSA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyRm9udFNpemUuZm9udFNpemUgPSBhY3Rpb24ucGF5bG9hZC5mb250U2l6ZTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyRm9udFNpemV9XG5cbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9JVEVNX1RFWFRfVVBEQVRFRDpcbiAgICAgICAgICAgIGxldCBuZXdOYXZiYXJJdGVtc1RleHQgPSBzdGF0ZS5uYXZiYXIuaXRlbXM7XG4gICAgICAgICAgICBuZXdOYXZiYXJJdGVtc1RleHQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udGV4dCA9IGFjdGlvbi5wYXlsb2FkLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJDaGFuZ2VkSXRlbXNUZXh0ID0gey4uLnN0YXRlLm5hdmJhciwgaXRlbXM6IG5ld05hdmJhckl0ZW1zVGV4dH07XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckNoYW5nZWRJdGVtc1RleHR9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0lURU1fVVJMX1VQREFURUQ6XG4gICAgICAgICAgICBsZXQgbmV3TmF2YmFySXRlbXNVcmwgPSBzdGF0ZS5uYXZiYXIuaXRlbXM7XG4gICAgICAgICAgICBuZXdOYXZiYXJJdGVtc1VybCA9IG5ld05hdmJhckl0ZW1zVXJsLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gdW5kZWZpbmVkICYmIGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbSwgdXJsOiBhY3Rpb24ucGF5bG9hZC51cmx9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVXJsID0gey4uLnN0YXRlLm5hdmJhciwgaXRlbXM6IG5ld05hdmJhckl0ZW1zVXJsfTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVXJsfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9JVEVNX0lURU1fREVMRVRFRDpcbiAgICAgICAgICAgIGNvbnN0IG9sZE5hdmJhckl0ZW1zID0gc3RhdGUubmF2YmFyLml0ZW1zO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFySXRlbXNBZnRlckRlbGV0aW5nID0gb2xkTmF2YmFySXRlbXMuZmlsdGVyKGl0ZW0gPT5cbiAgICAgICAgICAgICAgICBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckFmdGVyRGVsZXRpb24gPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckFmdGVyRGVsZXRpb24uaXRlbXMgPSBuZXdOYXZiYXJJdGVtc0FmdGVyRGVsZXRpbmc7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckFmdGVyRGVsZXRpb259O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0lURU1fQURERUQ6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZJdGVtcyA9IHN0YXRlLm5hdmJhci5pdGVtcztcbiAgICAgICAgICAgIG5ld05hdkl0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQubmV3SXRlbSk7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJBZnRlckFkZGluZyA9IHsuLi5zdGF0ZS5uYXZiYXIsIGl0ZW1zOiBuZXdOYXZJdGVtc307XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckFmdGVyQWRkaW5nfTtcblxuICAgICAgICBjYXNlIEFDVElPTlMuQk9EWV9CQUNLR1JPVU5EX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3Qm9keSA9IHsuLi5zdGF0ZS5ib2R5fTtcbiAgICAgICAgICAgIG5ld0JvZHkuYmFja2dyb3VuZENvbG9yID0gYWN0aW9uLnBheWxvYWQuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogbmV3Qm9keX07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5CT0RZX1RFWFRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5VGMgPSB7Li4uc3RhdGUuYm9keX07XG4gICAgICAgICAgICBuZXdCb2R5VGMuY29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGJvZHk6IG5ld0JvZHlUY307XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIGNhc2UgQUNUSU9OUy5CT0RZX0ZPTlRfU0laRTpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHlGcyA9IHsuLi5zdGF0ZS5ib2R5fTtcbiAgICAgICAgICAgIG5ld0JvZHlGcy5mb250U2l6ZSA9IGFjdGlvbi5wYXlsb2FkLmZvbnRTaXplO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogbmV3Qm9keUZzfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfUEFERElORzpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHlDb250ZW50UGFkZGluZyA9IHsuLi5zdGF0ZS5ib2R5LmNvbnRlbnR9O1xuICAgICAgICAgICAgbmV3Qm9keUNvbnRlbnRQYWRkaW5nLnBhZGRpbmcgPSBhY3Rpb24ucGF5bG9hZC5wYWRkaW5nO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogey4uLnN0YXRlLmJvZHksIGNvbnRlbnQ6IG5ld0JvZHlDb250ZW50UGFkZGluZ319O1xuXG4gICAgICAgIGNhc2UgQUNUSU9OUy5GT09URVJfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0Zvb3RlckJnID0gey4uLnN0YXRlLmZvb3Rlcn07XG4gICAgICAgICAgICBuZXdGb290ZXJCZy5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBmb290ZXI6IG5ld0Zvb3RlckJnfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkZPT1RFUl9IRUlHSFQ6XG4gICAgICAgICAgICBjb25zdCBuZXdGb290ZXJIZWlnaHQgPSB7Li4uc3RhdGUuZm9vdGVyfTtcbiAgICAgICAgICAgIG5ld0Zvb3RlckhlaWdodC5oZWlnaHQgPSBhY3Rpb24ucGF5bG9hZC5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBmb290ZXI6IG5ld0Zvb3RlckhlaWdodH1cbiAgICAgICAgY2FzZSBBQ1RJT05TLkZPT1RFUl9URVhUX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3Rm9vdGVyVGMgPSB7Li4uc3RhdGUuZm9vdGVyfTtcbiAgICAgICAgICAgIG5ld0Zvb3RlclRjLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBmb290ZXI6IG5ld0Zvb3RlclRjfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkZPT1RFUl9GT05UX1NJWkU6XG4gICAgICAgICAgICBjb25zdCBuZXdGb290ZXJGcyA9IHsuLi5zdGF0ZS5mb290ZXJ9O1xuICAgICAgICAgICAgbmV3Rm9vdGVyRnMuZm9udFNpemUgPSBhY3Rpb24ucGF5bG9hZC5mb250U2l6ZTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGZvb3RlcjogbmV3Rm9vdGVyRnN9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgQ3JlYXRlUGFnZVdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlUGFnZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICA8Q3JlYXRlUGFnZVdyYXBwZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDcmVhdGVQYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL2NyZWF0ZVBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxDcmVhdGVQYWdlQ29udGFpbmVyIC8+LFxuICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=