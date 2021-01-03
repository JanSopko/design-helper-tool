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
  if (needsWide) className += ' window-wide';
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
  BODY_FONT_SIZE: 'setBodyFontSize'
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
  }, spacing); // navStyle.display = 'flex';
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu erat lobortis, varius ante at, accumsan tellus. Curabitur varius, neque id dictum ullamcorper, nisi libero egestas est, vel venenatis ex ipsum at est. Ut in lacus ante. Curabitur faucibus risus mauris, a tincidunt metus mollis eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque a est facilisis, egestas urna et, pharetra arcu. Nam imperdiet dictum nulla in volutpat. Cras tempus ut orci in condimentum. Fusce luctus, dui eget blandit mattis, lacus purus consectetur lorem, nec molestie neque est luctus felis. In hac habitasse platea dictumst. Vivamus magna nunc, accumsan in malesuada id, gravida feugiat tellus. Phasellus a est vitae risus interdum gravida. Ut semper tellus et felis maximus, sit amet tincidunt metus lacinia. Pellentesque vel ligula ornare, dignissim risus accumsan, posuere augue. Integer orci libero, placerat eget auctor ac, aliquet eu turpis. Donec sit amet interdum justo. Integer volutpat et mauris et efficitur. Integer efficitur sapien eu malesuada consectetur. Phasellus tincidunt, urna id efficitur facilisis, diam felis facilisis enim, ac consequat dolor purus ut urna. Nam at maximus mauris. Praesent tortor odio, malesuada vel diam ut, sollicitudin placerat ligula. Etiam et sodales nisi. Donec eu risus aliquam, posuere justo nec, hendrerit nunc. Suspendisse hendrerit commodo leo non pretium. Sed dignissim imperdiet leo sed porta. Nulla blandit arcu id nunc eleifend imperdiet eu sed nisi. Sed ligula massa, convallis tincidunt nunc quis, semper consectetur lacus. Maecenas vel nulla velit. Aliquam sed quam libero. Proin at aliquet nisl, eu efficitur ligula. Curabitur a tincidunt velit. Praesent accumsan, orci in mollis semper, diam tellus euismod quam, vestibulum gravida orci felis sit amet ex. Mauris molestie ex id sapien elementum ullamcorper. Curabitur neque risus, fringilla vel posuere et, bibendum ut dolor. Praesent ex mi, mollis in tincidunt sit amet, sodales nec dui. Ut dictum imperdiet justo id suscipit. Cras cursus, quam vitae ultricies finibus, massa justo pretium sem, in vehicula magna ante vel enim. Donec finibus eros a laoreet consectetur. Aenean augue orci, gravida id mattis quis, feugiat pellentesque mi. Vestibulum bibendum pellentesque mi cursus sodales. Nulla ut lacinia tellus, vitae ullamcorper nibh. Mauris vitae pharetra leo. Morbi in diam eu augue tempus pharetra. Mauris iaculis nulla non risus placerat aliquam a vitae mauris. Morbi nec nunc vitae quam auctor tempus. Maecenas lacinia sollicitudin leo. Sed odio felis, feugiat vitae ullamcorper ullamcorper, mattis laoreet magna. Morbi convallis aliquam facilisis. Pellentesque ac velit nisl. Pellentesque ornare ut lacus nec malesuada. Curabitur finibus, felis quis dapibus maximus, diam nisl finibus velit, vel ornare quam massa ut lectus. Proin metus augue, scelerisque vel ex nec, porttitor commodo elit. Pellentesque a orci turpis. Pellentesque imperdiet luctus nisl, in scelerisque ex consequat id. Donec sollicitudin, erat non scelerisque molestie, mauris eros faucibus lorem, sed bibendum mauris nisi sed sem. Mauris at dignissim ipsum. Ut tristique, arcu non volutpat eleifend, risus est porttitor nunc, quis lacinia dui diam et lectus. Donec dignissim eleifend aliquam. Nunc tempor laoreet enim, ut iaculis nibh tempor sit amet. Nunc laoreet lorem velit, eu lobortis turpis ultricies eget. Sed accumsan facilisis velit, vulputate varius ex dapibus non. Nam aliquet ultrices efficitur. Ut nec sapien posuere, accumsan ligula non, luctus augue. Vestibulum tincidunt iaculis nunc sit amet tristique. Nullam id arcu vitae arcu finibus sodales. Etiam sed aliquet elit, eget fringilla lectus. Sed iaculis justo eu justo egestas, nec posuere eros cursus. Morbi mauris nibh, accumsan sit amet est sit amet, fringilla molestie neque. Nunc et turpis quis diam pharetra rutrum. Aenean id neque diam. Donec nibh augue, venenatis in lobortis vel, ultricies finibus ante. Donec id cursus leo. Sed dignissim ipsum at mollis rhoncus. Suspendisse porttitor scelerisque libero, in aliquam sem eleifend sed. Mauris vitae pharetra leo. Praesent fringilla metus eget ante mattis, eget imperdiet elit dignissim. Donec eu volutpat nisi. Nam egestas ipsum purus, non aliquet orci pellentesque non. Sed ut vehicula urna, non fermentum risus. Nam non feugiat ligula, vel consequat felis. Suspendisse in vestibulum ante. Sed ornare auctor leo, sit amet molestie ipsum cursus quis. Cras sed sollicitudin purus. Nulla eget ultricies orci, quis gravida nisl. Vestibulum vulputate lacinia commodo. Ut placerat ante at suscipit finibus. Nunc gravida nulla quis tellus convallis, nec eleifend sem pretium. Aliquam eleifend facilisis porttitor. In ante enim, cursus vitae sodales ac, semper id dui. Suspendisse et nisl ut dui ullamcorper bibendum et ut eros. Nullam ipsum metus, consectetur vitae bibendum a, aliquam sed neque. Suspendisse semper nibh risus, quis porttitor tortor lobortis sit amet. Donec interdum mi et lacinia elementum. Quisque tristique, lectus nec condimentum sagittis, nunc odio egestas purus, quis efficitur leo diam eget sem. Donec in urna nec sapien tincidunt rutrum. Nunc vehicula lectus nec magna consectetur, a pulvinar nisl fringilla. Quisque sed mattis lectus. Sed at pellentesque metus. Nullam sollicitudin facilisis egestas. Maecenas hendrerit eu tellus mattis ultricies. Phasellus dapibus eu nisi quis lobortis. Etiam imperdiet tincidunt mi, sed viverra sapien interdum sed. Phasellus eu iaculis quam, vel varius diam. Vivamus at eros ullamcorper, vehicula nulla et, vestibulum massa. Donec mi lacus, euismod id leo a, dapibus condimentum libero. Ut vitae neque sit amet massa fringilla sagittis. Fusce porttitor tristique turpis, dictum vestibulum justo. Nam ac auctor purus. Aenean rhoncus risus in turpis consequat, quis egestas eros molestie. Nulla aliquet, orci eu ultrices molestie, lorem nisi pulvinar nisi, id bibendum quam justo quis nulla. Praesent nec est et tellus rutrum tristique. Suspendisse in arcu dui. Maecenas facilisis mauris in enim tristique bibendum. Nunc ullamcorper vehicula mi, sed rutrum magna sodales vitae. Donec ligula turpis, lobortis sed porttitor quis, faucibus ac turpis. Nullam cursus volutpat congue. Sed tempus arcu et bibendum semper. Donec at tincidunt erat, vitae sagittis urna. Aliquam blandit imperdiet justo eget ultrices. Donec vitae nulla quis felis laoreet fermentum quis vel leo. Phasellus vulputate, nulla vel vestibulum sollicitudin, justo neque aliquam ex, ac maximus arcu velit sed nisi. Pellentesque lorem magna, cursus sed magna in, sodales volutpat diam. Integer posuere ante ante, in porttitor tortor maximus sed. Nunc ac nulla fermentum, maximus urna quis, convallis erat. Integer euismod rutrum nisi, nec molestie nibh euismod in. Nullam id massa in massa laoreet commodo in vitae nunc. Nunc accumsan odio a nunc iaculis pharetra. Phasellus mollis finibus lectus sed mollis. Donec et augue quis mi eleifend egestas. Sed quis accumsan turpis. Duis tellus quam, convallis tincidunt nibh nec, efficitur sollicitudin nisl. Suspendisse blandit eget erat ut dignissim. Fusce sed enim ac lorem iaculis pellentesque eget vitae odio. Aliquam dignissim enim turpis, sed facilisis erat volutpat tempor. Vestibulum luctus lacus sodales, ultrices nulla id, sollicitudin turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean sit amet ligula ante. Maecenas pretium id purus elementum dapibus. Sed enim lacus, molestie id tortor eu, gravida gravida sapien. Ut auctor sollicitudin urna et dictum. Nulla maximus mi sed porttitor maximus. Sed volutpat dolor nec lectus ornare varius. Vivamus aliquet purus nibh, eu condimentum magna tincidunt id. Sed hendrerit risus a ornare bibendum. Proin nec turpis auctor, rutrum augue sit amet, feugiat dui. Integer in finibus magna. Vivamus eu lobortis metus, non scelerisque neque. Aenean convallis erat ligula, vel bibendum nunc rhoncus at. Aenean felis magna, rhoncus non sollicitudin et, pulvinar et purus. Nunc sed augue vulputate, tristique orci at, laoreet metus. Ut ullamcorper finibus odio, sed fringilla urna interdum sed. Morbi id viverra ante, quis semper metus. Phasellus dui diam, tristique in vulputate id, sodales vel neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis varius enim nec ligula sodales malesuada. Mauris metus nulla, eleifend nec nisi in, maximus tempor dolor. Curabitur pretium ac eros non facilisis. Quisque mollis volutpat rhoncus. Curabitur eu imperdiet sapien. Praesent accumsan, nibh vitae mattis pretium, ipsum ex consectetur orci, efficitur finibus quam ex eu leo. Nulla sodales lobortis diam vel dignissim. Proin dictum, nisi sed sagittis pharetra, ex leo luctus mauris, id consequat elit ligula a sem. In pellentesque urna lacus, ac consectetur nunc condimentum a. Aenean rutrum ornare nulla in consectetur. Nam odio urna, faucibus vel nisi a, pretium tincidunt tortor. Cras tincidunt blandit sapien eu lacinia. Phasellus consequat lectus at varius rutrum. Maecenas euismod nisl sodales sollicitudin semper. Curabitur gravida urna libero, et laoreet turpis accumsan ut. Suspendisse faucibus mauris sit amet libero pretium lacinia. Pellentesque gravida, metus elementum iaculis convallis, elit turpis pretium enim, molestie tempor ante ipsum sit amet tellus. Donec commodo nisl at dapibus tincidunt. Nam mollis nibh quis porttitor blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus eu tincidunt nunc. Etiam sit amet dolor consequat, rutrum odio a, iaculis velit. Donec aliquet nisi magna, vitae porta ligula condimentum et. Curabitur sollicitudin lorem urna, quis vestibulum justo fermentum vitae. Vestibulum aliquam tincidunt sapien, gravida hendrerit ex bibendum ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sit amet nunc et lorem congue volutpat ut quis dui. Nullam pharetra malesuada metus, sit amet molestie dolor pulvinar quis. Fusce in elit elementum, facilisis nunc at, scelerisque enim. Ut fermentum molestie accumsan. Sed nunc mauris, euismod id enim eget, pretium commodo turpis. Mauris quis placerat neque. Nam vitae mi id diam gravida semper. Nam molestie at purus sit amet tincidunt. Donec sed nisl aliquam, sodales sem at, facilisis orci. Curabitur id sapien sit amet ante dapibus maximus. Vivamus odio velit, venenatis vitae ante eu, feugiat ultrices mauris. Praesent vestibulum feugiat tortor quis ullamcorper. Quisque dapibus mi id libero gravida ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer nec finibus dui. Suspendisse feugiat placerat tellus, et condimentum quam facilisis aliquam. Curabitur erat leo, laoreet non eros non, volutpat hendrerit ex. Proin eu magna sagittis, aliquam ligula quis, convallis justo. Phasellus nulla ante, dictum sagittis eros et, pulvinar tempus massa. Ut tortor odio, vehicula a felis vel, viverra posuere elit. Nunc non posuere nisl. Sed facilisis lectus at est malesuada, porta mattis augue finibus. Ut aliquet bibendum iaculis. Duis sit amet congue magna. Maecenas congue dictum euismod. Aenean nibh velit, auctor vitae tortor quis, congue pellentesque nisi. Integer laoreet magna quis ligula rutrum efficitur. Sed ligula ex, elementum sit amet neque at, dictum feugiat purus. Sed bibendum, magna a suscipit ultricies, quam felis dapibus augue, nec efficitur tellus mauris vel nisl. Integer sed arcu erat. Curabitur arcu odio, gravida rutrum facilisis in, euismod quis ipsum. In cursus diam eu iaculis facilisis. Pellentesque id nunc nisi. Duis eu nisi dignissim, rhoncus magna vitae, gravida mi. Maecenas sagittis sagittis dolor a luctus. Aliquam sagittis elit nunc, vitae dapibus nunc pellentesque quis. Vivamus porttitor magna nec urna viverra, ac scelerisque leo laoreet. In accumsan euismod luctus. Maecenas sollicitudin eu tortor sed iaculis. Phasellus quis facilisis nisl, nec ullamcorper metus. Aenean accumsan quam velit, id convallis diam maximus consequat. Donec lobortis commodo molestie. Maecenas quis sapien volutpat, rhoncus leo in, venenatis quam. Phasellus vitae rhoncus nunc, a rutrum mi. Mauris aliquet, urna ac dignissim maximus, magna tortor rutrum nibh, a consequat massa ligula ut orci. Sed maximus, neque a euismod facilisis, lectus est ultrices risus, quis condimentum sem ex non lacus. Aliquam ante lectus, interdum in ullamcorper sit amet, euismod id libero. Morbi posuere lacinia venenatis. Integer rutrum, tellus sit amet vulputate pulvinar, ex magna sodales velit, ac imperdiet libero quam at nunc. Sed venenatis nulla lacus, eu rhoncus diam auctor non. Quisque pellentesque mi sed tortor ullamcorper condimentum. Cras sem lorem, sagittis in auctor quis, consectetur in sem. Nullam vitae vulputate tortor, a tincidunt eros. Nulla aliquam dui non odio hendrerit, vel ullamcorper dui tempor. Sed laoreet turpis quam, et mollis mi tristique sit amet. Curabitur non lacus pharetra, viverra sapien vitae, sagittis risus. Nullam feugiat orci neque, sed semper libero consectetur at. Vivamus blandit justo a velit dictum iaculis. Morbi porttitor nisl non felis gravida, sit amet consequat lectus vulputate. Proin sodales, urna non pulvinar consequat, sapien velit gravida massa, ornare consequat orci est porta justo. Quisque non ligula ligula. Aliquam erat volutpat. Donec quis sagittis mauris. Vivamus at ante a dui tristique semper vel ac lectus. Cras sed tortor odio. Curabitur at porta nibh. Suspendisse commodo tortor ac rutrum fringilla. Suspendisse ut dolor vitae felis sodales faucibus. Vestibulum semper, metus vitae tempus tempus, diam justo gravida tellus, sit amet posuere quam ipsum sit amet tortor. Maecenas eros augue, placerat a nulla non, feugiat rhoncus diam. Vivamus sed pretium sem. Etiam scelerisque, erat in porttitor mollis, dolor lacus porttitor lacus, vel rutrum urna dolor vitae justo. Donec bibendum viverra varius. Donec feugiat magna id magna pharetra, non venenatis lectus porta. In arcu nibh, hendrerit eu est nec, vehicula euismod lectus. Nullam a molestie tellus. Maecenas gravida sollicitudin faucibus. Curabitur vitae vestibulum metus. Nulla eget lectus at orci bibendum pulvinar. Donec pretium magna a massa scelerisque elementum. Suspendisse ac gravida est. Maecenas ornare dui enim, sed sodales tellus suscipit quis. Proin feugiat lacus ut libero tempus cursus. Duis egestas, augue quis dapibus ultricies, mi nunc condimentum sapien, et tincidunt est tortor sit amet dolor. Phasellus eu lacus viverra, ornare urna vel, consequat purus. Curabitur at ornare neque, quis facilisis elit. Sed vel mauris in diam commodo sollicitudin. Nunc a cursus nisl, at rhoncus ex. Duis ornare urna non nibh gravida, nec accumsan turpis sodales. Pellentesque sit amet ultricies urna. Mauris vel fermentum lorem. Curabitur laoreet, purus vel feugiat feugiat, velit justo luctus mi, a mollis sem leo vitae mauris. Vestibulum dignissim tempus ex eu faucibus. Aliquam eget leo eu arcu dictum blandit. Pellentesque ullamcorper lacus pulvinar turpis venenatis volutpat. Nulla efficitur pellentesque tellus, vitae ornare odio facilisis id. Praesent eget justo turpis. Curabitur condimentum, lacus ut varius mollis, neque risus faucibus mi, sit amet lobortis leo ipsum eget odio. Sed semper vestibulum libero, ac feugiat nibh tristique id. In aliquam eget tellus in commodo. Cras sodales semper nisl, nec euismod leo ullamcorper et. Etiam sed placerat mi. In pellentesque cursus eros in hendrerit. In facilisis, metus at vulputate pulvinar, felis enim efficitur ante, a laoreet augue diam ut ligula. Maecenas lectus tortor, placerat eu tincidunt sit amet, consectetur a odio. Donec vel lorem eros. Morbi et efficitur tortor, vitae viverra lorem. Cras elit ante, auctor eget turpis sit amet, accumsan laoreet arcu. Donec vel dictum velit. Fusce ut venenatis magna. Cras lacinia urna a lacinia feugiat. Ut at odio ut neque tincidunt malesuada quis nec lacus. Donec euismod felis id consectetur eleifend. Etiam nec ipsum eu nibh maximus aliquet. Aenean nec interdum tortor."));
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
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_3__["FooterEditor"], null)
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
var FooterEditor = function FooterEditor() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
    className: "design-menu-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, "height:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
    type: "range",
    min: "6",
    max: "20",
    onChange: function onChange(e) {
      return console.log(e.target.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL0Zsb2F0aW5nV2luZG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvRWxlbWVudEVkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvbWVudS9OYXZiYXJJdGVtc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvY3JlYXRlUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbImVsZW1lbnRPclBhcmVudEhhc0NsYXNzIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicGFyZW50RWxlbWVudCIsIkZsb2F0aW5nV2luZG93IiwiaW5pdEFjdGl2ZSIsImluaXRDb250ZW50cyIsIm5lZWRzV2lkZSIsIndpbmRvd0NsYXNzTmFtZSIsIm92ZXJUb3BDbGFzc05hbWUiLCJ3aWRlQ2xhc3NOYW1lIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ1c2VFZmZlY3QiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIm1hcCIsIml0ZW0iLCJBQ1RJT05TIiwiTkFWQkFSX0hFSUdIVCIsIk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SIiwiTkFWQkFSX1RFWFRfQ09MT1IiLCJOQVZCQVJfVEVYVF9TSVpFIiwiTkFWQkFSX1NQQUNJTkdfT1BUSU9OIiwiTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEIiwiTkFWQkFSX0lURU1fVVJMX1VQREFURUQiLCJOQVZCQVJfSVRFTV9JVEVNX0RFTEVURUQiLCJOQVZCQVJfSVRFTV9BRERFRCIsIkJPRFlfQkFDS0dST1VORF9DT0xPUiIsIkJPRFlfVEVYVF9DT0xPUiIsIkJPRFlfRk9OVF9TSVpFIiwiSU5JVF9TVFlMRSIsIm5hdmJhciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImluaXQiLCJsYXlvdXREYXRhIiwicGFnZVN0cnVjdHVyZSIsInNhdmVQYWdlIiwicGF5bG9hZCIsImF4aW9zIiwicG9zdCIsInBhZ2VIYXNoIiwidGhlbiIsInJlcyIsImRhdGEiLCJtZXNzYWdlIiwiYWxlcnQiLCJDcmVhdGVQYWdlV3JhcHBlciIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJhdmFpbGFibGVTcGFjaW5nT3B0aW9ucyIsImZsZXhTdGFydCIsImZsZXhFbmQiLCJzcGFjZUFyb3VuZCIsIm5hdkl0ZW1zTmVlZE1hcmdpbiIsInNwYWNpbmdPcHRpb24iLCJnZXRTcGFjaW5nU3R5bGUiLCJnZXROYXZJdGVtc1N0eWxlIiwic3R5bGUiLCJ0ZXh0RGVjb3JhdGlvbiIsIm1hcmdpbiIsIkNyZWF0aW9uRGVzayIsInN0b3JlIiwiYm9keVN0eWxlIiwiYm9keSIsIm5hdkl0ZW1zIiwiaXRlbXMiLCJzcGFjaW5nIiwibmF2U3R5bGUiLCJuYXZJdGVtc1N0eWxlIiwidXJsIiwidGV4dCIsIkNyZWF0ZU1lbnUiLCJOYXZiYXJFZGl0b3IiLCJiZ0NvbG9yIiwic2V0QmdDb2xvciIsInRleHRDb2xvciIsInNldFRleHRDb2xvciIsInNldEhlaWdodCIsIm5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZSIsInNldE5hdmJhckl0ZW1zTWFuYWdlckFjdGl2ZSIsImNsb3NlTmF2SXRlbXNNb2RhbCIsImUiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJvbmNsaWNrIiwidHlwZSIsImhleCIsInZhbHVlIiwiZm9udFNpemUiLCJOdW1iZXIiLCJwYXJzZUludCIsIkJvZHlFZGl0b3IiLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJzZXRDb2xvciIsIlNpZGViYXJFZGl0b3IiLCJGb290ZXJFZGl0b3IiLCJTZWN0aW9uc0VkaXRvciIsIk1lbnVPcHRpb24iLCJjb250ZW50IiwiY2hldnJvbkNsYXNzIiwiaGFuZGxlQ2xpY2siLCJOYXZiYXJJdGVtc01hbmFnZXIiLCJuZWdhdGl2ZUlkIiwic2V0TmVnYXRpdmVJZCIsIml0ZW1zSW5wdXRzIiwiaWQiLCJuZXdJdGVtIiwiYWN0aW9uIiwibmV3TmF2YmFySCIsIm5ld05hdmJhckJnIiwibmV3TmF2YmFyVGMiLCJuZXdOYXZiYXJTcGFjaW5nIiwibmV3TmF2YmFyRm9udFNpemUiLCJuZXdOYXZiYXJJdGVtc1RleHQiLCJmb3JFYWNoIiwidW5kZWZpbmVkIiwibmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVGV4dCIsIm5ld05hdmJhckl0ZW1zVXJsIiwibmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVXJsIiwib2xkTmF2YmFySXRlbXMiLCJuZXdOYXZiYXJJdGVtc0FmdGVyRGVsZXRpbmciLCJmaWx0ZXIiLCJuZXdOYXZiYXJBZnRlckRlbGV0aW9uIiwibmV3TmF2SXRlbXMiLCJwdXNoIiwibmV3TmF2YmFyQWZ0ZXJBZGRpbmciLCJuZXdCb2R5IiwibmV3Qm9keVRjIiwibmV3Qm9keUZzIiwiQ3JlYXRlUGFnZUNvbnRhaW5lciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLE9BQUQsRUFBVUMsU0FBVixFQUF3QjtBQUNwRCxNQUFJRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCRixTQUEzQixDQUFKLEVBQTJDO0FBQ3ZDLFdBQU8sSUFBUDtBQUNILEdBRkQsTUFFTyxJQUFJRCxPQUFPLENBQUNJLGFBQVosRUFBMkI7QUFDOUIsV0FBT0wsdUJBQXVCLENBQUNDLE9BQU8sQ0FBQ0ksYUFBVCxFQUF3QkgsU0FBeEIsQ0FBOUI7QUFDSDs7QUFDRCxTQUFPLEtBQVA7QUFDSCxDQVBEOztBQVNlRixzRkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7O0FBRUEsSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFnRTtBQUFBLDZCQUE5REMsVUFBOEQ7QUFBQSxNQUE5REEsVUFBOEQsZ0NBQWpELEtBQWlEO0FBQUEsK0JBQTFDQyxZQUEwQztBQUFBLE1BQTFDQSxZQUEwQyxrQ0FBM0IsRUFBMkI7QUFBQSw0QkFBdkJDLFNBQXVCO0FBQUEsTUFBdkJBLFNBQXVCLCtCQUFYLEtBQVc7QUFDbkYsTUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLFVBQXpCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLGNBQXRCOztBQUhtRixrQkFLdkRDLHVEQUFRLENBQUMsS0FBRCxDQUwrQztBQUFBO0FBQUEsTUFLNUVDLE1BTDRFO0FBQUEsTUFLcEVDLFNBTG9FOztBQU9uRkMsMERBQVMsQ0FDTDtBQUFBLFdBQU1ELFNBQVMsQ0FBQ1IsVUFBRCxDQUFmO0FBQUEsR0FESyxFQUVMLEVBRkssQ0FBVDtBQUtB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ZUFFSSw0REFBQyx1RkFBRCxPQUZKLENBREo7QUFNSDs7OztFQVo0Q0MsNkNBQUssQ0FBQ0MsUzs7Ozs7Ozs7Ozs7Ozs7QUNKdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFDLGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyx1RUFBRCxPQURKLEVBRUlsRCxNQUFNLENBQUNtRCxRQUFQLENBQWdCQyxjQUFoQixDQUErQixNQUEvQixDQUZKLEUiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQucGFyZW50RWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGbG9hdGluZ1dpbmRvdyA9ICh7aW5pdEFjdGl2ZSA9IGZhbHNlLCBpbml0Q29udGVudHMgPSBbXSwgbmVlZHNXaWRlID0gZmFsc2V9KSA9PiB7XG4gICAgY29uc3Qgd2luZG93Q2xhc3NOYW1lID0gXCJmbG9hdGluZy13aW5kb3dcIjtcbiAgICBjb25zdCBvdmVyVG9wQ2xhc3NOYW1lID0gXCJvdmVyLXRvcFwiO1xuICAgIGNvbnN0IHdpZGVDbGFzc05hbWUgPSAnIHdpbmRvdy13aWRlJztcblxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoXG4gICAgICAgICgpID0+IHNldEFjdGl2ZShpbml0QWN0aXZlKSxcbiAgICAgICAgW11cbiAgICApO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IGFjdGl2ZSA/IHdpbmRvd0NsYXNzTmFtZSA6IGAke3dpbmRvd0NsYXNzTmFtZX0gJHtvdmVyVG9wQ2xhc3NOYW1lfWA7XG4gICAgaWYgKG5lZWRzV2lkZSkgY2xhc3NOYW1lICs9ICcgd2luZG93LXdpZGUnO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJ319PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4aXQtYnV0dG9uIGJ1dHRvbi1yZWRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0QWN0aXZlKGZhbHNlKX19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J3doaXRlJ319XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluaXRDb250ZW50cy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ1dpbmRvdzsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IHsgQ3JlYXRpb25EZXNrIH0gZnJvbSBcIi4vQ3JlYXRpb25EZXNrXCI7XG5pbXBvcnQgeyBDcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudS9DcmVhdGVNZW51XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9yZWR1Y2VyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgQUNUSU9OUyA9IHtcbiAgICBOQVZCQVJfSEVJR0hUOiAnc2V0TmF2YmFySGVpZ2h0JyxcbiAgICBOQVZCQVJfQkFDS0dST1VORF9DT0xPUjogJ3NldE5hdmJhckJhY2tncm91bmRDb2xvcicsXG4gICAgTkFWQkFSX1RFWFRfQ09MT1I6ICdzZXROYXZiYXJUZXh0Q29sb3InLFxuICAgIE5BVkJBUl9URVhUX1NJWkU6ICdzZXROYXZiYXJUZXh0U2l6ZScsXG4gICAgTkFWQkFSX1NQQUNJTkdfT1BUSU9OOiAnc2V0TmF2YmFyU3BhY2luZ09wdGlvbicsXG4gICAgTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEOiAnc2V0TmF2YmFySXRlbVRleHQnLFxuICAgIE5BVkJBUl9JVEVNX1VSTF9VUERBVEVEOiAnc2V0TmF2YmFySXRlbVVybCcsXG4gICAgTkFWQkFSX0lURU1fSVRFTV9ERUxFVEVEOiAnZGVsZXRlTmF2YmFySXRlbScsXG4gICAgTkFWQkFSX0lURU1fQURERUQ6ICdhZGRlZE5hdmJhckl0ZW0nLFxuXG4gICAgQk9EWV9CQUNLR1JPVU5EX0NPTE9SOiAnc2V0Qm9keUJhY2tyb3VuZENvbG9yJyxcbiAgICBCT0RZX1RFWFRfQ09MT1I6ICdzZXRCb2R5VGV4dENvbG9yJyxcbiAgICBCT0RZX0ZPTlRfU0laRTogJ3NldEJvZHlGb250U2l6ZSdcbn07XG5cbmV4cG9ydCBjb25zdCBJTklUX1NUWUxFID0ge1xuICAgIG5hdmJhcjoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYWFhYWFhJyxcbiAgICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgaGVpZ2h0OiA1XG4gICAgfVxufTtcblxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICByZXR1cm4gbGF5b3V0RGF0YS5wYWdlU3RydWN0dXJlO1xufVxuXG5leHBvcnQgY29uc3Qgc2F2ZVBhZ2UgPSBwYXlsb2FkID0+IHtcbiAgICBwYXlsb2FkLm5hdmJhci5oZWlnaHQgPSBwYXlsb2FkLm5hdmJhci5oZWlnaHQgfHwgSU5JVF9TVFlMRS5uYXZiYXIuaGVpZ2h0OyAvL0B0b2RvIHJlZmFjdG9yIVxuICAgIGF4aW9zLnBvc3QoYC9kYXRhL3VwZGF0ZV9wYWdlLyR7bGF5b3V0RGF0YS5wYWdlSGFzaH1gLCB7cGF5bG9hZH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IENyZWF0ZVBhZ2VXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7fSwgaW5pdCk7XG5cbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuXG4gICAgICAgICAgICA8Q3JlYXRlTWVudSBzdG9yZT17c3RhdGV9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPlxuICAgICAgICAgICAgPENyZWF0aW9uRGVzayBzdG9yZT17c3RhdGV9Lz5cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJTklUX1NUWUxFIH0gZnJvbSBcIi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuY29uc3QgYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMgPSB7XG4gICAgZmxleFN0YXJ0OiAxLFxuICAgIGZsZXhFbmQ6IDIsXG4gICAgc3BhY2VBcm91bmQ6IDNcbn07XG5cbmNvbnN0IG5hdkl0ZW1zTmVlZE1hcmdpbiA9IHNwYWNpbmdPcHRpb24gPT4ge1xuICAgIHJldHVybiBzcGFjaW5nT3B0aW9uICE9PSBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucy5zcGFjZUFyb3VuZDtcbn1cblxuY29uc3QgZ2V0U3BhY2luZ1N0eWxlID0gc3BhY2luZ09wdGlvbiA9PiB7XG4gICAgc3dpdGNoIChzcGFjaW5nT3B0aW9uKSB7XG4gICAgICAgIGNhc2UgYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuZmxleEVuZDpcbiAgICAgICAgICAgIHJldHVybiB7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ307XG4gICAgICAgIGNhc2UgYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuc3BhY2VBcm91bmQ6XG4gICAgICAgICAgICByZXR1cm4ge2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnfTtcbiAgICAgICAgY2FzZSBhdmFpbGFibGVTcGFjaW5nT3B0aW9ucy5mbGV4U3RhcnQ6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4ge2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0J307XG4gICAgfVxufTtcblxuY29uc3QgZ2V0TmF2SXRlbXNTdHlsZSA9IHNwYWNpbmdPcHRpb24gPT4ge1xuICAgIGNvbnN0IHN0eWxlID0ge3RleHREZWNvcmF0aW9uOidub25lJyxjb2xvcjonaW5oZXJpdCd9O1xuICAgIGlmIChuYXZJdGVtc05lZWRNYXJnaW4oc3BhY2luZ09wdGlvbikpIHtcbiAgICAgICAgc3R5bGUubWFyZ2luID0gJzAgMnJlbSc7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbn1cblxuZXhwb3J0IGNvbnN0IENyZWF0aW9uRGVzayA9ICh7c3RvcmUgPSB7fX0pID0+IHtcblxuICAgIHN0b3JlLm5hdmJhciA9IHN0b3JlLm5hdmJhciB8fCBJTklUX1NUWUxFLm5hdmJhcjtcbiAgICBsZXQgYm9keVN0eWxlID0gc3RvcmUuYm9keSB8fCB7fTtcbiAgICBsZXQgbmF2SXRlbXMgPSBzdG9yZS5uYXZiYXIuaXRlbXMgfHwgW107XG4gICAgY29uc3Qgc3BhY2luZyA9IGdldFNwYWNpbmdTdHlsZShzdG9yZS5uYXZiYXIuc3BhY2luZ09wdGlvbik7XG4gICAgY29uc3QgbmF2U3R5bGUgPSB7Li4uc3RvcmUubmF2YmFyLCBoZWlnaHQ6IGAke3N0b3JlLm5hdmJhci5oZWlnaHQgfHwgNX1yZW1gLCAuLi5zcGFjaW5nfTtcbiAgICAvLyBuYXZTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIC8vIG5hdlN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWFyb3VuZCc7XG4gICAgY29uc3QgbmF2SXRlbXNTdHlsZSA9IGdldE5hdkl0ZW1zU3R5bGUoc3RvcmUubmF2YmFyLnNwYWNpbmdPcHRpb24pO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNyZWF0aW9uLWRlc2tcIiBzdHlsZT17Ym9keVN0eWxlfT5cbiAgICAgICAgICAgIDxuYXYgc3R5bGU9e25hdlN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAge25hdkl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtuYXZJdGVtc1N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0udXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+O1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGV1IGVyYXQgbG9ib3J0aXMsIHZhcml1cyBhbnRlIGF0LCBhY2N1bXNhbiB0ZWxsdXMuIEN1cmFiaXR1ciB2YXJpdXMsIG5lcXVlIGlkIGRpY3R1bSB1bGxhbWNvcnBlciwgbmlzaSBsaWJlcm8gZWdlc3RhcyBlc3QsIHZlbCB2ZW5lbmF0aXMgZXggaXBzdW0gYXQgZXN0LiBVdCBpbiBsYWN1cyBhbnRlLiBDdXJhYml0dXIgZmF1Y2lidXMgcmlzdXMgbWF1cmlzLCBhIHRpbmNpZHVudCBtZXR1cyBtb2xsaXMgZXUuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBQZWxsZW50ZXNxdWUgYSBlc3QgZmFjaWxpc2lzLCBlZ2VzdGFzIHVybmEgZXQsIHBoYXJldHJhIGFyY3UuIE5hbSBpbXBlcmRpZXQgZGljdHVtIG51bGxhIGluIHZvbHV0cGF0LiBDcmFzIHRlbXB1cyB1dCBvcmNpIGluIGNvbmRpbWVudHVtLiBGdXNjZSBsdWN0dXMsIGR1aSBlZ2V0IGJsYW5kaXQgbWF0dGlzLCBsYWN1cyBwdXJ1cyBjb25zZWN0ZXR1ciBsb3JlbSwgbmVjIG1vbGVzdGllIG5lcXVlIGVzdCBsdWN0dXMgZmVsaXMuIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBWaXZhbXVzIG1hZ25hIG51bmMsIGFjY3Vtc2FuIGluIG1hbGVzdWFkYSBpZCwgZ3JhdmlkYSBmZXVnaWF0IHRlbGx1cy4gUGhhc2VsbHVzIGEgZXN0IHZpdGFlIHJpc3VzIGludGVyZHVtIGdyYXZpZGEuIFV0IHNlbXBlciB0ZWxsdXMgZXQgZmVsaXMgbWF4aW11cywgc2l0IGFtZXQgdGluY2lkdW50IG1ldHVzIGxhY2luaWEuXG5cbiAgICAgICAgICAgICAgICBQZWxsZW50ZXNxdWUgdmVsIGxpZ3VsYSBvcm5hcmUsIGRpZ25pc3NpbSByaXN1cyBhY2N1bXNhbiwgcG9zdWVyZSBhdWd1ZS4gSW50ZWdlciBvcmNpIGxpYmVybywgcGxhY2VyYXQgZWdldCBhdWN0b3IgYWMsIGFsaXF1ZXQgZXUgdHVycGlzLiBEb25lYyBzaXQgYW1ldCBpbnRlcmR1bSBqdXN0by4gSW50ZWdlciB2b2x1dHBhdCBldCBtYXVyaXMgZXQgZWZmaWNpdHVyLiBJbnRlZ2VyIGVmZmljaXR1ciBzYXBpZW4gZXUgbWFsZXN1YWRhIGNvbnNlY3RldHVyLiBQaGFzZWxsdXMgdGluY2lkdW50LCB1cm5hIGlkIGVmZmljaXR1ciBmYWNpbGlzaXMsIGRpYW0gZmVsaXMgZmFjaWxpc2lzIGVuaW0sIGFjIGNvbnNlcXVhdCBkb2xvciBwdXJ1cyB1dCB1cm5hLiBOYW0gYXQgbWF4aW11cyBtYXVyaXMuIFByYWVzZW50IHRvcnRvciBvZGlvLCBtYWxlc3VhZGEgdmVsIGRpYW0gdXQsIHNvbGxpY2l0dWRpbiBwbGFjZXJhdCBsaWd1bGEuIEV0aWFtIGV0IHNvZGFsZXMgbmlzaS4gRG9uZWMgZXUgcmlzdXMgYWxpcXVhbSwgcG9zdWVyZSBqdXN0byBuZWMsIGhlbmRyZXJpdCBudW5jLiBTdXNwZW5kaXNzZSBoZW5kcmVyaXQgY29tbW9kbyBsZW8gbm9uIHByZXRpdW0uIFNlZCBkaWduaXNzaW0gaW1wZXJkaWV0IGxlbyBzZWQgcG9ydGEuIE51bGxhIGJsYW5kaXQgYXJjdSBpZCBudW5jIGVsZWlmZW5kIGltcGVyZGlldCBldSBzZWQgbmlzaS4gU2VkIGxpZ3VsYSBtYXNzYSwgY29udmFsbGlzIHRpbmNpZHVudCBudW5jIHF1aXMsIHNlbXBlciBjb25zZWN0ZXR1ciBsYWN1cy4gTWFlY2VuYXMgdmVsIG51bGxhIHZlbGl0LlxuXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBzZWQgcXVhbSBsaWJlcm8uIFByb2luIGF0IGFsaXF1ZXQgbmlzbCwgZXUgZWZmaWNpdHVyIGxpZ3VsYS4gQ3VyYWJpdHVyIGEgdGluY2lkdW50IHZlbGl0LiBQcmFlc2VudCBhY2N1bXNhbiwgb3JjaSBpbiBtb2xsaXMgc2VtcGVyLCBkaWFtIHRlbGx1cyBldWlzbW9kIHF1YW0sIHZlc3RpYnVsdW0gZ3JhdmlkYSBvcmNpIGZlbGlzIHNpdCBhbWV0IGV4LiBNYXVyaXMgbW9sZXN0aWUgZXggaWQgc2FwaWVuIGVsZW1lbnR1bSB1bGxhbWNvcnBlci4gQ3VyYWJpdHVyIG5lcXVlIHJpc3VzLCBmcmluZ2lsbGEgdmVsIHBvc3VlcmUgZXQsIGJpYmVuZHVtIHV0IGRvbG9yLiBQcmFlc2VudCBleCBtaSwgbW9sbGlzIGluIHRpbmNpZHVudCBzaXQgYW1ldCwgc29kYWxlcyBuZWMgZHVpLiBVdCBkaWN0dW0gaW1wZXJkaWV0IGp1c3RvIGlkIHN1c2NpcGl0LiBDcmFzIGN1cnN1cywgcXVhbSB2aXRhZSB1bHRyaWNpZXMgZmluaWJ1cywgbWFzc2EganVzdG8gcHJldGl1bSBzZW0sIGluIHZlaGljdWxhIG1hZ25hIGFudGUgdmVsIGVuaW0uIERvbmVjIGZpbmlidXMgZXJvcyBhIGxhb3JlZXQgY29uc2VjdGV0dXIuIEFlbmVhbiBhdWd1ZSBvcmNpLCBncmF2aWRhIGlkIG1hdHRpcyBxdWlzLCBmZXVnaWF0IHBlbGxlbnRlc3F1ZSBtaS5cblxuICAgICAgICAgICAgICAgIFZlc3RpYnVsdW0gYmliZW5kdW0gcGVsbGVudGVzcXVlIG1pIGN1cnN1cyBzb2RhbGVzLiBOdWxsYSB1dCBsYWNpbmlhIHRlbGx1cywgdml0YWUgdWxsYW1jb3JwZXIgbmliaC4gTWF1cmlzIHZpdGFlIHBoYXJldHJhIGxlby4gTW9yYmkgaW4gZGlhbSBldSBhdWd1ZSB0ZW1wdXMgcGhhcmV0cmEuIE1hdXJpcyBpYWN1bGlzIG51bGxhIG5vbiByaXN1cyBwbGFjZXJhdCBhbGlxdWFtIGEgdml0YWUgbWF1cmlzLiBNb3JiaSBuZWMgbnVuYyB2aXRhZSBxdWFtIGF1Y3RvciB0ZW1wdXMuIE1hZWNlbmFzIGxhY2luaWEgc29sbGljaXR1ZGluIGxlby5cblxuICAgICAgICAgICAgICAgIFNlZCBvZGlvIGZlbGlzLCBmZXVnaWF0IHZpdGFlIHVsbGFtY29ycGVyIHVsbGFtY29ycGVyLCBtYXR0aXMgbGFvcmVldCBtYWduYS4gTW9yYmkgY29udmFsbGlzIGFsaXF1YW0gZmFjaWxpc2lzLiBQZWxsZW50ZXNxdWUgYWMgdmVsaXQgbmlzbC4gUGVsbGVudGVzcXVlIG9ybmFyZSB1dCBsYWN1cyBuZWMgbWFsZXN1YWRhLiBDdXJhYml0dXIgZmluaWJ1cywgZmVsaXMgcXVpcyBkYXBpYnVzIG1heGltdXMsIGRpYW0gbmlzbCBmaW5pYnVzIHZlbGl0LCB2ZWwgb3JuYXJlIHF1YW0gbWFzc2EgdXQgbGVjdHVzLiBQcm9pbiBtZXR1cyBhdWd1ZSwgc2NlbGVyaXNxdWUgdmVsIGV4IG5lYywgcG9ydHRpdG9yIGNvbW1vZG8gZWxpdC4gUGVsbGVudGVzcXVlIGEgb3JjaSB0dXJwaXMuIFBlbGxlbnRlc3F1ZSBpbXBlcmRpZXQgbHVjdHVzIG5pc2wsIGluIHNjZWxlcmlzcXVlIGV4IGNvbnNlcXVhdCBpZC5cblxuICAgICAgICAgICAgICAgIERvbmVjIHNvbGxpY2l0dWRpbiwgZXJhdCBub24gc2NlbGVyaXNxdWUgbW9sZXN0aWUsIG1hdXJpcyBlcm9zIGZhdWNpYnVzIGxvcmVtLCBzZWQgYmliZW5kdW0gbWF1cmlzIG5pc2kgc2VkIHNlbS4gTWF1cmlzIGF0IGRpZ25pc3NpbSBpcHN1bS4gVXQgdHJpc3RpcXVlLCBhcmN1IG5vbiB2b2x1dHBhdCBlbGVpZmVuZCwgcmlzdXMgZXN0IHBvcnR0aXRvciBudW5jLCBxdWlzIGxhY2luaWEgZHVpIGRpYW0gZXQgbGVjdHVzLiBEb25lYyBkaWduaXNzaW0gZWxlaWZlbmQgYWxpcXVhbS4gTnVuYyB0ZW1wb3IgbGFvcmVldCBlbmltLCB1dCBpYWN1bGlzIG5pYmggdGVtcG9yIHNpdCBhbWV0LiBOdW5jIGxhb3JlZXQgbG9yZW0gdmVsaXQsIGV1IGxvYm9ydGlzIHR1cnBpcyB1bHRyaWNpZXMgZWdldC4gU2VkIGFjY3Vtc2FuIGZhY2lsaXNpcyB2ZWxpdCwgdnVscHV0YXRlIHZhcml1cyBleCBkYXBpYnVzIG5vbi4gTmFtIGFsaXF1ZXQgdWx0cmljZXMgZWZmaWNpdHVyLiBVdCBuZWMgc2FwaWVuIHBvc3VlcmUsIGFjY3Vtc2FuIGxpZ3VsYSBub24sIGx1Y3R1cyBhdWd1ZS4gVmVzdGlidWx1bSB0aW5jaWR1bnQgaWFjdWxpcyBudW5jIHNpdCBhbWV0IHRyaXN0aXF1ZS4gTnVsbGFtIGlkIGFyY3Ugdml0YWUgYXJjdSBmaW5pYnVzIHNvZGFsZXMuIEV0aWFtIHNlZCBhbGlxdWV0IGVsaXQsIGVnZXQgZnJpbmdpbGxhIGxlY3R1cy5cblxuICAgICAgICAgICAgICAgIFNlZCBpYWN1bGlzIGp1c3RvIGV1IGp1c3RvIGVnZXN0YXMsIG5lYyBwb3N1ZXJlIGVyb3MgY3Vyc3VzLiBNb3JiaSBtYXVyaXMgbmliaCwgYWNjdW1zYW4gc2l0IGFtZXQgZXN0IHNpdCBhbWV0LCBmcmluZ2lsbGEgbW9sZXN0aWUgbmVxdWUuIE51bmMgZXQgdHVycGlzIHF1aXMgZGlhbSBwaGFyZXRyYSBydXRydW0uIEFlbmVhbiBpZCBuZXF1ZSBkaWFtLiBEb25lYyBuaWJoIGF1Z3VlLCB2ZW5lbmF0aXMgaW4gbG9ib3J0aXMgdmVsLCB1bHRyaWNpZXMgZmluaWJ1cyBhbnRlLiBEb25lYyBpZCBjdXJzdXMgbGVvLiBTZWQgZGlnbmlzc2ltIGlwc3VtIGF0IG1vbGxpcyByaG9uY3VzLlxuXG4gICAgICAgICAgICAgICAgU3VzcGVuZGlzc2UgcG9ydHRpdG9yIHNjZWxlcmlzcXVlIGxpYmVybywgaW4gYWxpcXVhbSBzZW0gZWxlaWZlbmQgc2VkLiBNYXVyaXMgdml0YWUgcGhhcmV0cmEgbGVvLiBQcmFlc2VudCBmcmluZ2lsbGEgbWV0dXMgZWdldCBhbnRlIG1hdHRpcywgZWdldCBpbXBlcmRpZXQgZWxpdCBkaWduaXNzaW0uIERvbmVjIGV1IHZvbHV0cGF0IG5pc2kuIE5hbSBlZ2VzdGFzIGlwc3VtIHB1cnVzLCBub24gYWxpcXVldCBvcmNpIHBlbGxlbnRlc3F1ZSBub24uIFNlZCB1dCB2ZWhpY3VsYSB1cm5hLCBub24gZmVybWVudHVtIHJpc3VzLiBOYW0gbm9uIGZldWdpYXQgbGlndWxhLCB2ZWwgY29uc2VxdWF0IGZlbGlzLiBTdXNwZW5kaXNzZSBpbiB2ZXN0aWJ1bHVtIGFudGUuIFNlZCBvcm5hcmUgYXVjdG9yIGxlbywgc2l0IGFtZXQgbW9sZXN0aWUgaXBzdW0gY3Vyc3VzIHF1aXMuIENyYXMgc2VkIHNvbGxpY2l0dWRpbiBwdXJ1cy4gTnVsbGEgZWdldCB1bHRyaWNpZXMgb3JjaSwgcXVpcyBncmF2aWRhIG5pc2wuIFZlc3RpYnVsdW0gdnVscHV0YXRlIGxhY2luaWEgY29tbW9kby4gVXQgcGxhY2VyYXQgYW50ZSBhdCBzdXNjaXBpdCBmaW5pYnVzLlxuXG4gICAgICAgICAgICAgICAgTnVuYyBncmF2aWRhIG51bGxhIHF1aXMgdGVsbHVzIGNvbnZhbGxpcywgbmVjIGVsZWlmZW5kIHNlbSBwcmV0aXVtLiBBbGlxdWFtIGVsZWlmZW5kIGZhY2lsaXNpcyBwb3J0dGl0b3IuIEluIGFudGUgZW5pbSwgY3Vyc3VzIHZpdGFlIHNvZGFsZXMgYWMsIHNlbXBlciBpZCBkdWkuIFN1c3BlbmRpc3NlIGV0IG5pc2wgdXQgZHVpIHVsbGFtY29ycGVyIGJpYmVuZHVtIGV0IHV0IGVyb3MuIE51bGxhbSBpcHN1bSBtZXR1cywgY29uc2VjdGV0dXIgdml0YWUgYmliZW5kdW0gYSwgYWxpcXVhbSBzZWQgbmVxdWUuIFN1c3BlbmRpc3NlIHNlbXBlciBuaWJoIHJpc3VzLCBxdWlzIHBvcnR0aXRvciB0b3J0b3IgbG9ib3J0aXMgc2l0IGFtZXQuIERvbmVjIGludGVyZHVtIG1pIGV0IGxhY2luaWEgZWxlbWVudHVtLlxuXG4gICAgICAgICAgICAgICAgUXVpc3F1ZSB0cmlzdGlxdWUsIGxlY3R1cyBuZWMgY29uZGltZW50dW0gc2FnaXR0aXMsIG51bmMgb2RpbyBlZ2VzdGFzIHB1cnVzLCBxdWlzIGVmZmljaXR1ciBsZW8gZGlhbSBlZ2V0IHNlbS4gRG9uZWMgaW4gdXJuYSBuZWMgc2FwaWVuIHRpbmNpZHVudCBydXRydW0uIE51bmMgdmVoaWN1bGEgbGVjdHVzIG5lYyBtYWduYSBjb25zZWN0ZXR1ciwgYSBwdWx2aW5hciBuaXNsIGZyaW5naWxsYS4gUXVpc3F1ZSBzZWQgbWF0dGlzIGxlY3R1cy4gU2VkIGF0IHBlbGxlbnRlc3F1ZSBtZXR1cy4gTnVsbGFtIHNvbGxpY2l0dWRpbiBmYWNpbGlzaXMgZWdlc3Rhcy4gTWFlY2VuYXMgaGVuZHJlcml0IGV1IHRlbGx1cyBtYXR0aXMgdWx0cmljaWVzLiBQaGFzZWxsdXMgZGFwaWJ1cyBldSBuaXNpIHF1aXMgbG9ib3J0aXMuIEV0aWFtIGltcGVyZGlldCB0aW5jaWR1bnQgbWksIHNlZCB2aXZlcnJhIHNhcGllbiBpbnRlcmR1bSBzZWQuIFBoYXNlbGx1cyBldSBpYWN1bGlzIHF1YW0sIHZlbCB2YXJpdXMgZGlhbS4gVml2YW11cyBhdCBlcm9zIHVsbGFtY29ycGVyLCB2ZWhpY3VsYSBudWxsYSBldCwgdmVzdGlidWx1bSBtYXNzYS4gRG9uZWMgbWkgbGFjdXMsIGV1aXNtb2QgaWQgbGVvIGEsIGRhcGlidXMgY29uZGltZW50dW0gbGliZXJvLiBVdCB2aXRhZSBuZXF1ZSBzaXQgYW1ldCBtYXNzYSBmcmluZ2lsbGEgc2FnaXR0aXMuIEZ1c2NlIHBvcnR0aXRvciB0cmlzdGlxdWUgdHVycGlzLCBkaWN0dW0gdmVzdGlidWx1bSBqdXN0by5cblxuICAgICAgICAgICAgICAgIE5hbSBhYyBhdWN0b3IgcHVydXMuIEFlbmVhbiByaG9uY3VzIHJpc3VzIGluIHR1cnBpcyBjb25zZXF1YXQsIHF1aXMgZWdlc3RhcyBlcm9zIG1vbGVzdGllLiBOdWxsYSBhbGlxdWV0LCBvcmNpIGV1IHVsdHJpY2VzIG1vbGVzdGllLCBsb3JlbSBuaXNpIHB1bHZpbmFyIG5pc2ksIGlkIGJpYmVuZHVtIHF1YW0ganVzdG8gcXVpcyBudWxsYS4gUHJhZXNlbnQgbmVjIGVzdCBldCB0ZWxsdXMgcnV0cnVtIHRyaXN0aXF1ZS4gU3VzcGVuZGlzc2UgaW4gYXJjdSBkdWkuIE1hZWNlbmFzIGZhY2lsaXNpcyBtYXVyaXMgaW4gZW5pbSB0cmlzdGlxdWUgYmliZW5kdW0uIE51bmMgdWxsYW1jb3JwZXIgdmVoaWN1bGEgbWksIHNlZCBydXRydW0gbWFnbmEgc29kYWxlcyB2aXRhZS4gRG9uZWMgbGlndWxhIHR1cnBpcywgbG9ib3J0aXMgc2VkIHBvcnR0aXRvciBxdWlzLCBmYXVjaWJ1cyBhYyB0dXJwaXMuIE51bGxhbSBjdXJzdXMgdm9sdXRwYXQgY29uZ3VlLiBTZWQgdGVtcHVzIGFyY3UgZXQgYmliZW5kdW0gc2VtcGVyLiBEb25lYyBhdCB0aW5jaWR1bnQgZXJhdCwgdml0YWUgc2FnaXR0aXMgdXJuYS5cblxuICAgICAgICAgICAgICAgIEFsaXF1YW0gYmxhbmRpdCBpbXBlcmRpZXQganVzdG8gZWdldCB1bHRyaWNlcy4gRG9uZWMgdml0YWUgbnVsbGEgcXVpcyBmZWxpcyBsYW9yZWV0IGZlcm1lbnR1bSBxdWlzIHZlbCBsZW8uIFBoYXNlbGx1cyB2dWxwdXRhdGUsIG51bGxhIHZlbCB2ZXN0aWJ1bHVtIHNvbGxpY2l0dWRpbiwganVzdG8gbmVxdWUgYWxpcXVhbSBleCwgYWMgbWF4aW11cyBhcmN1IHZlbGl0IHNlZCBuaXNpLiBQZWxsZW50ZXNxdWUgbG9yZW0gbWFnbmEsIGN1cnN1cyBzZWQgbWFnbmEgaW4sIHNvZGFsZXMgdm9sdXRwYXQgZGlhbS4gSW50ZWdlciBwb3N1ZXJlIGFudGUgYW50ZSwgaW4gcG9ydHRpdG9yIHRvcnRvciBtYXhpbXVzIHNlZC4gTnVuYyBhYyBudWxsYSBmZXJtZW50dW0sIG1heGltdXMgdXJuYSBxdWlzLCBjb252YWxsaXMgZXJhdC4gSW50ZWdlciBldWlzbW9kIHJ1dHJ1bSBuaXNpLCBuZWMgbW9sZXN0aWUgbmliaCBldWlzbW9kIGluLiBOdWxsYW0gaWQgbWFzc2EgaW4gbWFzc2EgbGFvcmVldCBjb21tb2RvIGluIHZpdGFlIG51bmMuIE51bmMgYWNjdW1zYW4gb2RpbyBhIG51bmMgaWFjdWxpcyBwaGFyZXRyYS4gUGhhc2VsbHVzIG1vbGxpcyBmaW5pYnVzIGxlY3R1cyBzZWQgbW9sbGlzLiBEb25lYyBldCBhdWd1ZSBxdWlzIG1pIGVsZWlmZW5kIGVnZXN0YXMuIFNlZCBxdWlzIGFjY3Vtc2FuIHR1cnBpcy5cblxuICAgICAgICAgICAgICAgIER1aXMgdGVsbHVzIHF1YW0sIGNvbnZhbGxpcyB0aW5jaWR1bnQgbmliaCBuZWMsIGVmZmljaXR1ciBzb2xsaWNpdHVkaW4gbmlzbC4gU3VzcGVuZGlzc2UgYmxhbmRpdCBlZ2V0IGVyYXQgdXQgZGlnbmlzc2ltLiBGdXNjZSBzZWQgZW5pbSBhYyBsb3JlbSBpYWN1bGlzIHBlbGxlbnRlc3F1ZSBlZ2V0IHZpdGFlIG9kaW8uIEFsaXF1YW0gZGlnbmlzc2ltIGVuaW0gdHVycGlzLCBzZWQgZmFjaWxpc2lzIGVyYXQgdm9sdXRwYXQgdGVtcG9yLiBWZXN0aWJ1bHVtIGx1Y3R1cyBsYWN1cyBzb2RhbGVzLCB1bHRyaWNlcyBudWxsYSBpZCwgc29sbGljaXR1ZGluIHR1cnBpcy4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IEFlbmVhbiBzaXQgYW1ldCBsaWd1bGEgYW50ZS4gTWFlY2VuYXMgcHJldGl1bSBpZCBwdXJ1cyBlbGVtZW50dW0gZGFwaWJ1cy4gU2VkIGVuaW0gbGFjdXMsIG1vbGVzdGllIGlkIHRvcnRvciBldSwgZ3JhdmlkYSBncmF2aWRhIHNhcGllbi4gVXQgYXVjdG9yIHNvbGxpY2l0dWRpbiB1cm5hIGV0IGRpY3R1bS5cblxuICAgICAgICAgICAgICAgIE51bGxhIG1heGltdXMgbWkgc2VkIHBvcnR0aXRvciBtYXhpbXVzLiBTZWQgdm9sdXRwYXQgZG9sb3IgbmVjIGxlY3R1cyBvcm5hcmUgdmFyaXVzLiBWaXZhbXVzIGFsaXF1ZXQgcHVydXMgbmliaCwgZXUgY29uZGltZW50dW0gbWFnbmEgdGluY2lkdW50IGlkLiBTZWQgaGVuZHJlcml0IHJpc3VzIGEgb3JuYXJlIGJpYmVuZHVtLiBQcm9pbiBuZWMgdHVycGlzIGF1Y3RvciwgcnV0cnVtIGF1Z3VlIHNpdCBhbWV0LCBmZXVnaWF0IGR1aS4gSW50ZWdlciBpbiBmaW5pYnVzIG1hZ25hLiBWaXZhbXVzIGV1IGxvYm9ydGlzIG1ldHVzLCBub24gc2NlbGVyaXNxdWUgbmVxdWUuIEFlbmVhbiBjb252YWxsaXMgZXJhdCBsaWd1bGEsIHZlbCBiaWJlbmR1bSBudW5jIHJob25jdXMgYXQuIEFlbmVhbiBmZWxpcyBtYWduYSwgcmhvbmN1cyBub24gc29sbGljaXR1ZGluIGV0LCBwdWx2aW5hciBldCBwdXJ1cy4gTnVuYyBzZWQgYXVndWUgdnVscHV0YXRlLCB0cmlzdGlxdWUgb3JjaSBhdCwgbGFvcmVldCBtZXR1cy4gVXQgdWxsYW1jb3JwZXIgZmluaWJ1cyBvZGlvLCBzZWQgZnJpbmdpbGxhIHVybmEgaW50ZXJkdW0gc2VkLiBNb3JiaSBpZCB2aXZlcnJhIGFudGUsIHF1aXMgc2VtcGVyIG1ldHVzLiBQaGFzZWxsdXMgZHVpIGRpYW0sIHRyaXN0aXF1ZSBpbiB2dWxwdXRhdGUgaWQsIHNvZGFsZXMgdmVsIG5lcXVlLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIER1aXMgdmFyaXVzIGVuaW0gbmVjIGxpZ3VsYSBzb2RhbGVzIG1hbGVzdWFkYS4gTWF1cmlzIG1ldHVzIG51bGxhLCBlbGVpZmVuZCBuZWMgbmlzaSBpbiwgbWF4aW11cyB0ZW1wb3IgZG9sb3IuXG5cbiAgICAgICAgICAgICAgICBDdXJhYml0dXIgcHJldGl1bSBhYyBlcm9zIG5vbiBmYWNpbGlzaXMuIFF1aXNxdWUgbW9sbGlzIHZvbHV0cGF0IHJob25jdXMuIEN1cmFiaXR1ciBldSBpbXBlcmRpZXQgc2FwaWVuLiBQcmFlc2VudCBhY2N1bXNhbiwgbmliaCB2aXRhZSBtYXR0aXMgcHJldGl1bSwgaXBzdW0gZXggY29uc2VjdGV0dXIgb3JjaSwgZWZmaWNpdHVyIGZpbmlidXMgcXVhbSBleCBldSBsZW8uIE51bGxhIHNvZGFsZXMgbG9ib3J0aXMgZGlhbSB2ZWwgZGlnbmlzc2ltLiBQcm9pbiBkaWN0dW0sIG5pc2kgc2VkIHNhZ2l0dGlzIHBoYXJldHJhLCBleCBsZW8gbHVjdHVzIG1hdXJpcywgaWQgY29uc2VxdWF0IGVsaXQgbGlndWxhIGEgc2VtLiBJbiBwZWxsZW50ZXNxdWUgdXJuYSBsYWN1cywgYWMgY29uc2VjdGV0dXIgbnVuYyBjb25kaW1lbnR1bSBhLiBBZW5lYW4gcnV0cnVtIG9ybmFyZSBudWxsYSBpbiBjb25zZWN0ZXR1ci4gTmFtIG9kaW8gdXJuYSwgZmF1Y2lidXMgdmVsIG5pc2kgYSwgcHJldGl1bSB0aW5jaWR1bnQgdG9ydG9yLiBDcmFzIHRpbmNpZHVudCBibGFuZGl0IHNhcGllbiBldSBsYWNpbmlhLiBQaGFzZWxsdXMgY29uc2VxdWF0IGxlY3R1cyBhdCB2YXJpdXMgcnV0cnVtLiBNYWVjZW5hcyBldWlzbW9kIG5pc2wgc29kYWxlcyBzb2xsaWNpdHVkaW4gc2VtcGVyLiBDdXJhYml0dXIgZ3JhdmlkYSB1cm5hIGxpYmVybywgZXQgbGFvcmVldCB0dXJwaXMgYWNjdW1zYW4gdXQuXG5cbiAgICAgICAgICAgICAgICBTdXNwZW5kaXNzZSBmYXVjaWJ1cyBtYXVyaXMgc2l0IGFtZXQgbGliZXJvIHByZXRpdW0gbGFjaW5pYS4gUGVsbGVudGVzcXVlIGdyYXZpZGEsIG1ldHVzIGVsZW1lbnR1bSBpYWN1bGlzIGNvbnZhbGxpcywgZWxpdCB0dXJwaXMgcHJldGl1bSBlbmltLCBtb2xlc3RpZSB0ZW1wb3IgYW50ZSBpcHN1bSBzaXQgYW1ldCB0ZWxsdXMuIERvbmVjIGNvbW1vZG8gbmlzbCBhdCBkYXBpYnVzIHRpbmNpZHVudC4gTmFtIG1vbGxpcyBuaWJoIHF1aXMgcG9ydHRpdG9yIGJsYW5kaXQuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBQaGFzZWxsdXMgZXUgdGluY2lkdW50IG51bmMuIEV0aWFtIHNpdCBhbWV0IGRvbG9yIGNvbnNlcXVhdCwgcnV0cnVtIG9kaW8gYSwgaWFjdWxpcyB2ZWxpdC4gRG9uZWMgYWxpcXVldCBuaXNpIG1hZ25hLCB2aXRhZSBwb3J0YSBsaWd1bGEgY29uZGltZW50dW0gZXQuIEN1cmFiaXR1ciBzb2xsaWNpdHVkaW4gbG9yZW0gdXJuYSwgcXVpcyB2ZXN0aWJ1bHVtIGp1c3RvIGZlcm1lbnR1bSB2aXRhZS4gVmVzdGlidWx1bSBhbGlxdWFtIHRpbmNpZHVudCBzYXBpZW4sIGdyYXZpZGEgaGVuZHJlcml0IGV4IGJpYmVuZHVtIGFjLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBTdXNwZW5kaXNzZSBzaXQgYW1ldCBudW5jIGV0IGxvcmVtIGNvbmd1ZSB2b2x1dHBhdCB1dCBxdWlzIGR1aS5cblxuICAgICAgICAgICAgICAgIE51bGxhbSBwaGFyZXRyYSBtYWxlc3VhZGEgbWV0dXMsIHNpdCBhbWV0IG1vbGVzdGllIGRvbG9yIHB1bHZpbmFyIHF1aXMuIEZ1c2NlIGluIGVsaXQgZWxlbWVudHVtLCBmYWNpbGlzaXMgbnVuYyBhdCwgc2NlbGVyaXNxdWUgZW5pbS4gVXQgZmVybWVudHVtIG1vbGVzdGllIGFjY3Vtc2FuLiBTZWQgbnVuYyBtYXVyaXMsIGV1aXNtb2QgaWQgZW5pbSBlZ2V0LCBwcmV0aXVtIGNvbW1vZG8gdHVycGlzLiBNYXVyaXMgcXVpcyBwbGFjZXJhdCBuZXF1ZS4gTmFtIHZpdGFlIG1pIGlkIGRpYW0gZ3JhdmlkYSBzZW1wZXIuIE5hbSBtb2xlc3RpZSBhdCBwdXJ1cyBzaXQgYW1ldCB0aW5jaWR1bnQuIERvbmVjIHNlZCBuaXNsIGFsaXF1YW0sIHNvZGFsZXMgc2VtIGF0LCBmYWNpbGlzaXMgb3JjaS4gQ3VyYWJpdHVyIGlkIHNhcGllbiBzaXQgYW1ldCBhbnRlIGRhcGlidXMgbWF4aW11cy5cblxuICAgICAgICAgICAgICAgIFZpdmFtdXMgb2RpbyB2ZWxpdCwgdmVuZW5hdGlzIHZpdGFlIGFudGUgZXUsIGZldWdpYXQgdWx0cmljZXMgbWF1cmlzLiBQcmFlc2VudCB2ZXN0aWJ1bHVtIGZldWdpYXQgdG9ydG9yIHF1aXMgdWxsYW1jb3JwZXIuIFF1aXNxdWUgZGFwaWJ1cyBtaSBpZCBsaWJlcm8gZ3JhdmlkYSB1bGxhbWNvcnBlci4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gSW50ZWdlciBuZWMgZmluaWJ1cyBkdWkuIFN1c3BlbmRpc3NlIGZldWdpYXQgcGxhY2VyYXQgdGVsbHVzLCBldCBjb25kaW1lbnR1bSBxdWFtIGZhY2lsaXNpcyBhbGlxdWFtLiBDdXJhYml0dXIgZXJhdCBsZW8sIGxhb3JlZXQgbm9uIGVyb3Mgbm9uLCB2b2x1dHBhdCBoZW5kcmVyaXQgZXguIFByb2luIGV1IG1hZ25hIHNhZ2l0dGlzLCBhbGlxdWFtIGxpZ3VsYSBxdWlzLCBjb252YWxsaXMganVzdG8uIFBoYXNlbGx1cyBudWxsYSBhbnRlLCBkaWN0dW0gc2FnaXR0aXMgZXJvcyBldCwgcHVsdmluYXIgdGVtcHVzIG1hc3NhLiBVdCB0b3J0b3Igb2RpbywgdmVoaWN1bGEgYSBmZWxpcyB2ZWwsIHZpdmVycmEgcG9zdWVyZSBlbGl0LiBOdW5jIG5vbiBwb3N1ZXJlIG5pc2wuIFNlZCBmYWNpbGlzaXMgbGVjdHVzIGF0IGVzdCBtYWxlc3VhZGEsIHBvcnRhIG1hdHRpcyBhdWd1ZSBmaW5pYnVzLiBVdCBhbGlxdWV0IGJpYmVuZHVtIGlhY3VsaXMuXG5cbiAgICAgICAgICAgICAgICBEdWlzIHNpdCBhbWV0IGNvbmd1ZSBtYWduYS4gTWFlY2VuYXMgY29uZ3VlIGRpY3R1bSBldWlzbW9kLiBBZW5lYW4gbmliaCB2ZWxpdCwgYXVjdG9yIHZpdGFlIHRvcnRvciBxdWlzLCBjb25ndWUgcGVsbGVudGVzcXVlIG5pc2kuIEludGVnZXIgbGFvcmVldCBtYWduYSBxdWlzIGxpZ3VsYSBydXRydW0gZWZmaWNpdHVyLiBTZWQgbGlndWxhIGV4LCBlbGVtZW50dW0gc2l0IGFtZXQgbmVxdWUgYXQsIGRpY3R1bSBmZXVnaWF0IHB1cnVzLiBTZWQgYmliZW5kdW0sIG1hZ25hIGEgc3VzY2lwaXQgdWx0cmljaWVzLCBxdWFtIGZlbGlzIGRhcGlidXMgYXVndWUsIG5lYyBlZmZpY2l0dXIgdGVsbHVzIG1hdXJpcyB2ZWwgbmlzbC4gSW50ZWdlciBzZWQgYXJjdSBlcmF0LiBDdXJhYml0dXIgYXJjdSBvZGlvLCBncmF2aWRhIHJ1dHJ1bSBmYWNpbGlzaXMgaW4sIGV1aXNtb2QgcXVpcyBpcHN1bS4gSW4gY3Vyc3VzIGRpYW0gZXUgaWFjdWxpcyBmYWNpbGlzaXMuIFBlbGxlbnRlc3F1ZSBpZCBudW5jIG5pc2kuIER1aXMgZXUgbmlzaSBkaWduaXNzaW0sIHJob25jdXMgbWFnbmEgdml0YWUsIGdyYXZpZGEgbWkuIE1hZWNlbmFzIHNhZ2l0dGlzIHNhZ2l0dGlzIGRvbG9yIGEgbHVjdHVzLiBBbGlxdWFtIHNhZ2l0dGlzIGVsaXQgbnVuYywgdml0YWUgZGFwaWJ1cyBudW5jIHBlbGxlbnRlc3F1ZSBxdWlzLiBWaXZhbXVzIHBvcnR0aXRvciBtYWduYSBuZWMgdXJuYSB2aXZlcnJhLCBhYyBzY2VsZXJpc3F1ZSBsZW8gbGFvcmVldC4gSW4gYWNjdW1zYW4gZXVpc21vZCBsdWN0dXMuIE1hZWNlbmFzIHNvbGxpY2l0dWRpbiBldSB0b3J0b3Igc2VkIGlhY3VsaXMuXG5cbiAgICAgICAgICAgICAgICBQaGFzZWxsdXMgcXVpcyBmYWNpbGlzaXMgbmlzbCwgbmVjIHVsbGFtY29ycGVyIG1ldHVzLiBBZW5lYW4gYWNjdW1zYW4gcXVhbSB2ZWxpdCwgaWQgY29udmFsbGlzIGRpYW0gbWF4aW11cyBjb25zZXF1YXQuIERvbmVjIGxvYm9ydGlzIGNvbW1vZG8gbW9sZXN0aWUuIE1hZWNlbmFzIHF1aXMgc2FwaWVuIHZvbHV0cGF0LCByaG9uY3VzIGxlbyBpbiwgdmVuZW5hdGlzIHF1YW0uIFBoYXNlbGx1cyB2aXRhZSByaG9uY3VzIG51bmMsIGEgcnV0cnVtIG1pLiBNYXVyaXMgYWxpcXVldCwgdXJuYSBhYyBkaWduaXNzaW0gbWF4aW11cywgbWFnbmEgdG9ydG9yIHJ1dHJ1bSBuaWJoLCBhIGNvbnNlcXVhdCBtYXNzYSBsaWd1bGEgdXQgb3JjaS4gU2VkIG1heGltdXMsIG5lcXVlIGEgZXVpc21vZCBmYWNpbGlzaXMsIGxlY3R1cyBlc3QgdWx0cmljZXMgcmlzdXMsIHF1aXMgY29uZGltZW50dW0gc2VtIGV4IG5vbiBsYWN1cy5cblxuICAgICAgICAgICAgICAgIEFsaXF1YW0gYW50ZSBsZWN0dXMsIGludGVyZHVtIGluIHVsbGFtY29ycGVyIHNpdCBhbWV0LCBldWlzbW9kIGlkIGxpYmVyby4gTW9yYmkgcG9zdWVyZSBsYWNpbmlhIHZlbmVuYXRpcy4gSW50ZWdlciBydXRydW0sIHRlbGx1cyBzaXQgYW1ldCB2dWxwdXRhdGUgcHVsdmluYXIsIGV4IG1hZ25hIHNvZGFsZXMgdmVsaXQsIGFjIGltcGVyZGlldCBsaWJlcm8gcXVhbSBhdCBudW5jLiBTZWQgdmVuZW5hdGlzIG51bGxhIGxhY3VzLCBldSByaG9uY3VzIGRpYW0gYXVjdG9yIG5vbi4gUXVpc3F1ZSBwZWxsZW50ZXNxdWUgbWkgc2VkIHRvcnRvciB1bGxhbWNvcnBlciBjb25kaW1lbnR1bS4gQ3JhcyBzZW0gbG9yZW0sIHNhZ2l0dGlzIGluIGF1Y3RvciBxdWlzLCBjb25zZWN0ZXR1ciBpbiBzZW0uIE51bGxhbSB2aXRhZSB2dWxwdXRhdGUgdG9ydG9yLCBhIHRpbmNpZHVudCBlcm9zLiBOdWxsYSBhbGlxdWFtIGR1aSBub24gb2RpbyBoZW5kcmVyaXQsIHZlbCB1bGxhbWNvcnBlciBkdWkgdGVtcG9yLiBTZWQgbGFvcmVldCB0dXJwaXMgcXVhbSwgZXQgbW9sbGlzIG1pIHRyaXN0aXF1ZSBzaXQgYW1ldC4gQ3VyYWJpdHVyIG5vbiBsYWN1cyBwaGFyZXRyYSwgdml2ZXJyYSBzYXBpZW4gdml0YWUsIHNhZ2l0dGlzIHJpc3VzLiBOdWxsYW0gZmV1Z2lhdCBvcmNpIG5lcXVlLCBzZWQgc2VtcGVyIGxpYmVybyBjb25zZWN0ZXR1ciBhdC4gVml2YW11cyBibGFuZGl0IGp1c3RvIGEgdmVsaXQgZGljdHVtIGlhY3VsaXMuIE1vcmJpIHBvcnR0aXRvciBuaXNsIG5vbiBmZWxpcyBncmF2aWRhLCBzaXQgYW1ldCBjb25zZXF1YXQgbGVjdHVzIHZ1bHB1dGF0ZS4gUHJvaW4gc29kYWxlcywgdXJuYSBub24gcHVsdmluYXIgY29uc2VxdWF0LCBzYXBpZW4gdmVsaXQgZ3JhdmlkYSBtYXNzYSwgb3JuYXJlIGNvbnNlcXVhdCBvcmNpIGVzdCBwb3J0YSBqdXN0by4gUXVpc3F1ZSBub24gbGlndWxhIGxpZ3VsYS4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlxuXG4gICAgICAgICAgICAgICAgRG9uZWMgcXVpcyBzYWdpdHRpcyBtYXVyaXMuIFZpdmFtdXMgYXQgYW50ZSBhIGR1aSB0cmlzdGlxdWUgc2VtcGVyIHZlbCBhYyBsZWN0dXMuIENyYXMgc2VkIHRvcnRvciBvZGlvLiBDdXJhYml0dXIgYXQgcG9ydGEgbmliaC4gU3VzcGVuZGlzc2UgY29tbW9kbyB0b3J0b3IgYWMgcnV0cnVtIGZyaW5naWxsYS4gU3VzcGVuZGlzc2UgdXQgZG9sb3Igdml0YWUgZmVsaXMgc29kYWxlcyBmYXVjaWJ1cy4gVmVzdGlidWx1bSBzZW1wZXIsIG1ldHVzIHZpdGFlIHRlbXB1cyB0ZW1wdXMsIGRpYW0ganVzdG8gZ3JhdmlkYSB0ZWxsdXMsIHNpdCBhbWV0IHBvc3VlcmUgcXVhbSBpcHN1bSBzaXQgYW1ldCB0b3J0b3IuIE1hZWNlbmFzIGVyb3MgYXVndWUsIHBsYWNlcmF0IGEgbnVsbGEgbm9uLCBmZXVnaWF0IHJob25jdXMgZGlhbS4gVml2YW11cyBzZWQgcHJldGl1bSBzZW0uIEV0aWFtIHNjZWxlcmlzcXVlLCBlcmF0IGluIHBvcnR0aXRvciBtb2xsaXMsIGRvbG9yIGxhY3VzIHBvcnR0aXRvciBsYWN1cywgdmVsIHJ1dHJ1bSB1cm5hIGRvbG9yIHZpdGFlIGp1c3RvLiBEb25lYyBiaWJlbmR1bSB2aXZlcnJhIHZhcml1cy4gRG9uZWMgZmV1Z2lhdCBtYWduYSBpZCBtYWduYSBwaGFyZXRyYSwgbm9uIHZlbmVuYXRpcyBsZWN0dXMgcG9ydGEuIEluIGFyY3UgbmliaCwgaGVuZHJlcml0IGV1IGVzdCBuZWMsIHZlaGljdWxhIGV1aXNtb2QgbGVjdHVzLiBOdWxsYW0gYSBtb2xlc3RpZSB0ZWxsdXMuIE1hZWNlbmFzIGdyYXZpZGEgc29sbGljaXR1ZGluIGZhdWNpYnVzLiBDdXJhYml0dXIgdml0YWUgdmVzdGlidWx1bSBtZXR1cy5cblxuICAgICAgICAgICAgICAgIE51bGxhIGVnZXQgbGVjdHVzIGF0IG9yY2kgYmliZW5kdW0gcHVsdmluYXIuIERvbmVjIHByZXRpdW0gbWFnbmEgYSBtYXNzYSBzY2VsZXJpc3F1ZSBlbGVtZW50dW0uIFN1c3BlbmRpc3NlIGFjIGdyYXZpZGEgZXN0LiBNYWVjZW5hcyBvcm5hcmUgZHVpIGVuaW0sIHNlZCBzb2RhbGVzIHRlbGx1cyBzdXNjaXBpdCBxdWlzLiBQcm9pbiBmZXVnaWF0IGxhY3VzIHV0IGxpYmVybyB0ZW1wdXMgY3Vyc3VzLiBEdWlzIGVnZXN0YXMsIGF1Z3VlIHF1aXMgZGFwaWJ1cyB1bHRyaWNpZXMsIG1pIG51bmMgY29uZGltZW50dW0gc2FwaWVuLCBldCB0aW5jaWR1bnQgZXN0IHRvcnRvciBzaXQgYW1ldCBkb2xvci4gUGhhc2VsbHVzIGV1IGxhY3VzIHZpdmVycmEsIG9ybmFyZSB1cm5hIHZlbCwgY29uc2VxdWF0IHB1cnVzLlxuXG4gICAgICAgICAgICAgICAgQ3VyYWJpdHVyIGF0IG9ybmFyZSBuZXF1ZSwgcXVpcyBmYWNpbGlzaXMgZWxpdC4gU2VkIHZlbCBtYXVyaXMgaW4gZGlhbSBjb21tb2RvIHNvbGxpY2l0dWRpbi4gTnVuYyBhIGN1cnN1cyBuaXNsLCBhdCByaG9uY3VzIGV4LiBEdWlzIG9ybmFyZSB1cm5hIG5vbiBuaWJoIGdyYXZpZGEsIG5lYyBhY2N1bXNhbiB0dXJwaXMgc29kYWxlcy4gUGVsbGVudGVzcXVlIHNpdCBhbWV0IHVsdHJpY2llcyB1cm5hLiBNYXVyaXMgdmVsIGZlcm1lbnR1bSBsb3JlbS4gQ3VyYWJpdHVyIGxhb3JlZXQsIHB1cnVzIHZlbCBmZXVnaWF0IGZldWdpYXQsIHZlbGl0IGp1c3RvIGx1Y3R1cyBtaSwgYSBtb2xsaXMgc2VtIGxlbyB2aXRhZSBtYXVyaXMuIFZlc3RpYnVsdW0gZGlnbmlzc2ltIHRlbXB1cyBleCBldSBmYXVjaWJ1cy4gQWxpcXVhbSBlZ2V0IGxlbyBldSBhcmN1IGRpY3R1bSBibGFuZGl0LiBQZWxsZW50ZXNxdWUgdWxsYW1jb3JwZXIgbGFjdXMgcHVsdmluYXIgdHVycGlzIHZlbmVuYXRpcyB2b2x1dHBhdC4gTnVsbGEgZWZmaWNpdHVyIHBlbGxlbnRlc3F1ZSB0ZWxsdXMsIHZpdGFlIG9ybmFyZSBvZGlvIGZhY2lsaXNpcyBpZC4gUHJhZXNlbnQgZWdldCBqdXN0byB0dXJwaXMuIEN1cmFiaXR1ciBjb25kaW1lbnR1bSwgbGFjdXMgdXQgdmFyaXVzIG1vbGxpcywgbmVxdWUgcmlzdXMgZmF1Y2lidXMgbWksIHNpdCBhbWV0IGxvYm9ydGlzIGxlbyBpcHN1bSBlZ2V0IG9kaW8uIFNlZCBzZW1wZXIgdmVzdGlidWx1bSBsaWJlcm8sIGFjIGZldWdpYXQgbmliaCB0cmlzdGlxdWUgaWQuIEluIGFsaXF1YW0gZWdldCB0ZWxsdXMgaW4gY29tbW9kby4gQ3JhcyBzb2RhbGVzIHNlbXBlciBuaXNsLCBuZWMgZXVpc21vZCBsZW8gdWxsYW1jb3JwZXIgZXQuXG5cbiAgICAgICAgICAgICAgICBFdGlhbSBzZWQgcGxhY2VyYXQgbWkuIEluIHBlbGxlbnRlc3F1ZSBjdXJzdXMgZXJvcyBpbiBoZW5kcmVyaXQuIEluIGZhY2lsaXNpcywgbWV0dXMgYXQgdnVscHV0YXRlIHB1bHZpbmFyLCBmZWxpcyBlbmltIGVmZmljaXR1ciBhbnRlLCBhIGxhb3JlZXQgYXVndWUgZGlhbSB1dCBsaWd1bGEuIE1hZWNlbmFzIGxlY3R1cyB0b3J0b3IsIHBsYWNlcmF0IGV1IHRpbmNpZHVudCBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYSBvZGlvLiBEb25lYyB2ZWwgbG9yZW0gZXJvcy4gTW9yYmkgZXQgZWZmaWNpdHVyIHRvcnRvciwgdml0YWUgdml2ZXJyYSBsb3JlbS4gQ3JhcyBlbGl0IGFudGUsIGF1Y3RvciBlZ2V0IHR1cnBpcyBzaXQgYW1ldCwgYWNjdW1zYW4gbGFvcmVldCBhcmN1LiBEb25lYyB2ZWwgZGljdHVtIHZlbGl0LiBGdXNjZSB1dCB2ZW5lbmF0aXMgbWFnbmEuIENyYXMgbGFjaW5pYSB1cm5hIGEgbGFjaW5pYSBmZXVnaWF0LiBVdCBhdCBvZGlvIHV0IG5lcXVlIHRpbmNpZHVudCBtYWxlc3VhZGEgcXVpcyBuZWMgbGFjdXMuIERvbmVjIGV1aXNtb2QgZmVsaXMgaWQgY29uc2VjdGV0dXIgZWxlaWZlbmQuIEV0aWFtIG5lYyBpcHN1bSBldSBuaWJoIG1heGltdXMgYWxpcXVldC4gQWVuZWFuIG5lYyBpbnRlcmR1bSB0b3J0b3IuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSBcIi4vTWVudU9wdGlvblwiO1xuaW1wb3J0IHsgSU5JVF9TVFlMRSwgc2F2ZVBhZ2UgfSBmcm9tIFwiLi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcbmltcG9ydCB7XG4gICAgTmF2YmFyRWRpdG9yLFxuICAgIEJvZHlFZGl0b3IsXG4gICAgU2lkZWJhckVkaXRvcixcbiAgICBTZWN0aW9uc0VkaXRvcixcbiAgICBGb290ZXJFZGl0b3Jcbn0gZnJvbSBcIi4vRWxlbWVudEVkaXRvcnNcIjtcblxuZXhwb3J0IGNvbnN0IENyZWF0ZU1lbnUgPSAoe3N0b3JlLCBkaXNwYXRjaH0pID0+IHtcbiAgICBzdG9yZS5uYXZiYXIgPSBzdG9yZS5uYXZiYXIgfHwge307XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY3JlYXRlLW1lbnVcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCIgb25DbGljaz17KCkgPT4gc2F2ZVBhZ2Uoc3RvcmUpfT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiTmF2YmFyXCIgY29udGVudD17PE5hdmJhckVkaXRvciBuYXZiYXI9e3N0b3JlLm5hdmJhciB8fCBJTklUX1NUWUxFLm5hdmJhcn0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fS8+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiQm9keVwiIGNvbnRlbnQ9ezxCb2R5RWRpdG9yIGJvZHk9e3N0b3JlLmJvZHkgfHwge319IGRpc3BhdGNoPXtkaXNwYXRjaH0vPn0vPlxuICAgICAgICAgICAgPE1lbnVPcHRpb24gdGV4dD1cIlNpZGViYXJcIiBjb250ZW50PXs8U2lkZWJhckVkaXRvci8+fS8+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiU2VjdGlvbnNcIiBjb250ZW50PXs8U2VjdGlvbnNFZGl0b3IvPn0vPlxuICAgICAgICAgICAgPE1lbnVPcHRpb24gdGV4dD1cIkZvb3RlclwiIGNvbnRlbnQ9ezxGb290ZXJFZGl0b3IvPn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXRDb2xvciBmcm9tICdyZWFjdC1pbnB1dC1jb2xvcic7XG5pbXBvcnQgTmF2YmFySXRlbXNNYW5hZ2VyIGZyb20gXCIuL05hdmJhckl0ZW1zTWFuYWdlclwiO1xuaW1wb3J0IHsgQUNUSU9OUywgSU5JVF9TVFlMRSB9IGZyb20gXCIuLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuaW1wb3J0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzIGZyb20gXCIuLi8uLi8uLi8uLi9mdW5jdGlvbnMvZWxlbWVudE9yUGFyZW50SGFzQ2xhc3NcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmJhckVkaXRvciA9ICh7XG4gICAgICAgIG5hdmJhcixcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JnQ29sb3IsIHNldEJnQ29sb3JdID0gdXNlU3RhdGUobmF2YmFyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZicpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZShuYXZiYXIuY29sb3IgfHwgJyMwMDAwMDAnKTtcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUobmF2YmFyLmhlaWdodCB8fCA1KTtcbiAgICBjb25zdCBbbmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlLCBzZXROYXZiYXJJdGVtc01hbmFnZXJBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCBjbG9zZU5hdkl0ZW1zTW9kYWwgPSBlID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2V4aXQtYnV0dG9uJylcbiAgICAgICAgICAgIHx8ICghZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2Zsb2F0aW5nLXdpbmRvdycpXG4gICAgICAgICAgICAgICAgJiYgIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdtYW5hZ2UtbmF2LWl0ZW1zJykpXG4gICAgICAgICAgICAgICAgJiYgIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdkZWxldGUtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAmJiAhZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2FkZC1idXR0b24nKSkge1xuICAgICAgICAgICAgc2V0TmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5vbmNsaWNrID0gY2xvc2VOYXZJdGVtc01vZGFsO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvciBuYXZiYXItZWRpdG9yXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmF2YmFySXRlbXNNYW5hZ2VyQWN0aXZlICYmXG4gICAgICAgICAgICAgICAgPE5hdmJhckl0ZW1zTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXtuYXZiYXJJdGVtc01hbmFnZXJBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtuYXZiYXIuaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCZ0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgdGV4dCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5jb2xvciB8fCAnIzAwMDAwMCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfVEVYVF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSEVJR0hULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2UudGFyZ2V0LnZhbHVlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBmb250IHNpemU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiNDBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmF2YmFyLmZvbnRTaXplfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfVEVYVF9TSVpFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IE51bWJlci5wYXJzZUludChlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3BhY2luZy1zZWxlY3RcIj5TcGFjaW5nPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzcGFjaW5nT3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzcGFjaW5nLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYXZiYXIuc3BhY2luZ09wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX1NQQUNJTkdfT1BUSU9OLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2luZ09wdGlvbjogTnVtYmVyLnBhcnNlSW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5mbGV4LXN0YXJ0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+ZmxleC1lbmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5zcGFjZS1hcm91bmQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW0gaG92ZXJhYmxlIG1hbmFnZS1uYXYtaXRlbXNcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6JyNjZGRjMzknfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXROYXZiYXJJdGVtc01hbmFnZXJBY3RpdmUodHJ1ZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTWFuYWdlIG5hdmJhciBpdGVtc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBCb2R5RWRpdG9yID0gKHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JhY2tncm91bmRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yXSA9IHVzZVN0YXRlKGJvZHkuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJyk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShib2R5LmNvbG9yIHx8ICcjMDAwMDAwJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICBiYWNrZ3JvdW5kIGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17Ym9keS5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5CT0RZX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgdGV4dCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2JvZHkuY29sb3IgfHwgJyMwMDAwMDAnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5CT0RZX1RFWFRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnQtZWRpdG9yLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICBmb250IHNpemU6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj17MTJ9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MjR9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtib2R5LmZvbnRTaXplfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5CT0RZX0ZPTlRfU0laRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBOdW1iZXIucGFyc2VJbnQoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgU2lkZWJhckVkaXRvciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yXCI+XG4gICAgICAgICAgICBTSURFQkFSIEVESVRPUiBQTEFDRUhPTERFUlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgRm9vdGVyRWRpdG9yID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgU2VjdGlvbnNFZGl0b3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgU0VDVElPTlMgRURJVE9SIFBMQUNFSE9MREVSXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyBmcm9tIFwiLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzXCI7XG5cbmNvbnN0IE1lbnVPcHRpb24gPSAoe3RleHQsIGNvbnRlbnR9KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBjaGV2cm9uQ2xhc3MgPSBhY3RpdmUgPyAnY2hldnJvbiBjaGV2cm9uLXJldmVyc2UnIDogJ2NoZXZyb24nO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgaWYgKCFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlLnRhcmdldCwgJ2Rlc2lnbi1tZW51LWVkaXRvcicpKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtb3B0aW9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NoZXZyb24ucG5nXCIgYWx0PVwiY2hldnJvblwiIGNsYXNzTmFtZT17Y2hldnJvbkNsYXNzfS8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB7YWN0aXZlICYmIGNvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVPcHRpb247IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZsb2F0aW5nV2luZG93IGZyb20gXCIuLi8uLi9GbG9hdGluZ1dpbmRvd1wiO1xuaW1wb3J0IHsgQUNUSU9OUyB9IGZyb20gXCIuLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuXG5jb25zdCBOYXZiYXJJdGVtc01hbmFnZXIgPSAoe2luaXRBY3RpdmUsIGl0ZW1zLCBkaXNwYXRjaH0pID0+IHtcbiAgICBjb25zdCBbbmVnYXRpdmVJZCwgc2V0TmVnYXRpdmVJZF0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgICBjb25zdCBpdGVtc0lucHV0cyA9IGl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgdGV4dC0ke2l0ZW0uaWR9YH0+VGV4dDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGtleT17YHRleHQtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgdGV4dC0ke2l0ZW0uaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjonMCAuNHJlbSd9fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBlID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9JVEVNX1RFWFRfVVBEQVRFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgdXJsLSR7aXRlbS5pZH1gfT5VUkw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2B1cmwtJHtpdGVtLmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtgdXJsLSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46JzAgLjRyZW0nfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSVRFTV9VUkxfVVBEQVRFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tcmVkIGRlbGV0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9JVEVNX0lURU1fREVMRVRFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8RmxvYXRpbmdXaW5kb3dcbiAgICAgICAgICAgIGluaXRBY3RpdmU9e2luaXRBY3RpdmV9XG4gICAgICAgICAgICBuZWVkc1dpZGU9e3RydWV9XG4gICAgICAgICAgICBpbml0Q29udGVudHM9e1tcbiAgICAgICAgICAgICAgICAuLi5pdGVtc0lucHV0cyxcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1kYXJrLWdyZWVuIGFkZC1idXR0b24gaG92ZXJhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSVRFTV9BRERFRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW06IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBuZWdhdGl2ZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROZWdhdGl2ZUlkKG5lZ2F0aXZlSWQgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFkZCBuZXcgaXRlbVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJJdGVtc01hbmFnZXIiLCJpbXBvcnQge0FDVElPTlN9IGZyb20gXCIuL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9IRUlHSFQ6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJIID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJILmhlaWdodCA9IGFjdGlvbi5wYXlsb2FkLmhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFySH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckJnID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJCZy5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckJnfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9URVhUX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyVGMgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhclRjLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhclRjfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9TUEFDSU5HX09QVElPTjpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhclNwYWNpbmcgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhclNwYWNpbmcuc3BhY2luZ09wdGlvbiA9IGFjdGlvbi5wYXlsb2FkLnNwYWNpbmdPcHRpb247XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhclNwYWNpbmd9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX1RFWFRfU0laRTpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckZvbnRTaXplID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJGb250U2l6ZS5mb250U2l6ZSA9IGFjdGlvbi5wYXlsb2FkLmZvbnRTaXplO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJGb250U2l6ZX1cblxuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0lURU1fVEVYVF9VUERBVEVEOlxuICAgICAgICAgICAgbGV0IG5ld05hdmJhckl0ZW1zVGV4dCA9IHN0YXRlLm5hdmJhci5pdGVtcztcbiAgICAgICAgICAgIG5ld05hdmJhckl0ZW1zVGV4dC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSB1bmRlZmluZWQgJiYgaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS50ZXh0ID0gYWN0aW9uLnBheWxvYWQudGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckNoYW5nZWRJdGVtc1RleHQgPSB7Li4uc3RhdGUubmF2YmFyLCBpdGVtczogbmV3TmF2YmFySXRlbXNUZXh0fTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQ2hhbmdlZEl0ZW1zVGV4dH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSVRFTV9VUkxfVVBEQVRFRDpcbiAgICAgICAgICAgIGxldCBuZXdOYXZiYXJJdGVtc1VybCA9IHN0YXRlLm5hdmJhci5pdGVtcztcbiAgICAgICAgICAgIG5ld05hdmJhckl0ZW1zVXJsID0gbmV3TmF2YmFySXRlbXNVcmwubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSB1bmRlZmluZWQgJiYgaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCB1cmw6IGFjdGlvbi5wYXlsb2FkLnVybH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJDaGFuZ2VkSXRlbXNVcmwgPSB7Li4uc3RhdGUubmF2YmFyLCBpdGVtczogbmV3TmF2YmFySXRlbXNVcmx9O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJDaGFuZ2VkSXRlbXNVcmx9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0lURU1fSVRFTV9ERUxFVEVEOlxuICAgICAgICAgICAgY29uc3Qgb2xkTmF2YmFySXRlbXMgPSBzdGF0ZS5uYXZiYXIuaXRlbXM7XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJJdGVtc0FmdGVyRGVsZXRpbmcgPSBvbGROYXZiYXJJdGVtcy5maWx0ZXIoaXRlbSA9PlxuICAgICAgICAgICAgICAgIGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQWZ0ZXJEZWxldGlvbiA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyQWZ0ZXJEZWxldGlvbi5pdGVtcyA9IG5ld05hdmJhckl0ZW1zQWZ0ZXJEZWxldGluZztcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQWZ0ZXJEZWxldGlvbn07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfSVRFTV9BRERFRDpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdkl0ZW1zID0gc3RhdGUubmF2YmFyLml0ZW1zO1xuICAgICAgICAgICAgbmV3TmF2SXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZC5uZXdJdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckFmdGVyQWRkaW5nID0gey4uLnN0YXRlLm5hdmJhciwgaXRlbXM6IG5ld05hdkl0ZW1zfTtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQWZ0ZXJBZGRpbmd9O1xuXG4gICAgICAgIGNhc2UgQUNUSU9OUy5CT0RZX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5ID0gey4uLnN0YXRlLmJvZHl9O1xuICAgICAgICAgICAgbmV3Qm9keS5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBib2R5OiBuZXdCb2R5fTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfVEVYVF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHlUYyA9IHsuLi5zdGF0ZS5ib2R5fTtcbiAgICAgICAgICAgIG5ld0JvZHlUYy5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogbmV3Qm9keVRjfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfRk9OVF9TSVpFOlxuICAgICAgICAgICAgY29uc3QgbmV3Qm9keUZzID0gey4uLnN0YXRlLmJvZHl9O1xuICAgICAgICAgICAgbmV3Qm9keUZzLmZvbnRTaXplID0gYWN0aW9uLnBheWxvYWQuZm9udFNpemU7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBib2R5OiBuZXdCb2R5RnN9O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgQ3JlYXRlUGFnZVdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlUGFnZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgICAgICA8Q3JlYXRlUGFnZVdyYXBwZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDcmVhdGVQYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL2NyZWF0ZVBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxDcmVhdGVQYWdlQ29udGFpbmVyIC8+LFxuICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=