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
  BODY_BACKGROUND_COLOR: 'setBodyBackroundColor',
  BODY_TEXT_COLOR: 'setBodyTextColor'
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



var CreationDesk = function CreationDesk(_ref) {
  var _ref$store = _ref.store,
      store = _ref$store === void 0 ? {} : _ref$store;
  store.navbar = store.navbar || _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_11__["INIT_STYLE"].navbar;
  var bodyStyle = store.body || {};
  var navItems = store.navbar.items || [];

  var navStyle = _objectSpread(_objectSpread({}, store.navbar), {}, {
    height: "".concat(store.navbar.height || 5, "rem")
  });

  navStyle.display = 'flex';
  navStyle.justifyContent = 'space-around';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    id: "creation-desk",
    style: bodyStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("nav", {
    style: navStyle
  }, navItems.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
      href: item.url
    }, item.text);
  }), "text"), "text2");
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
/* harmony import */ var react_input_color__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-input-color */ "./node_modules/react-input-color/dist/index.esm.js");
/* harmony import */ var _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../CreatePageWrapper */ "./assets/js/react/components/create/CreatePageWrapper.js");














function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var NavbarEditor = function NavbarEditor(_ref) {
  var navbar = _ref.navbar,
      dispatch = _ref.dispatch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(navbar.backgroundColor || '#ffffff'),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(navbar.color || '#000000'),
      _useState4 = _slicedToArray(_useState3, 2),
      textColor = _useState4[0],
      setTextColor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(navbar.height || 5),
      _useState6 = _slicedToArray(_useState5, 2),
      height = _useState6[0],
      setHeight = _useState6[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "design-menu-editor navbar-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "element-editor-item"
  }, "background color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initialValue: navbar.backgroundColor || '#ffffff',
    onChange: function onChange(e) {
      setBgColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_15__["ACTIONS"].NAVBAR_BACKGROUND_COLOR,
        payload: {
          backgroundColor: e.hex
        }
      });
    },
    placement: "right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "element-editor-item"
  }, "text color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initialValue: navbar.color || '#000000',
    onChange: function onChange(e) {
      setTextColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_15__["ACTIONS"].NAVBAR_TEXT_COLOR,
        payload: {
          color: e.hex
        }
      });
    },
    placement: "right"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "element-editor-item"
  }, "height:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
    type: "range",
    min: "3",
    max: "10",
    value: height,
    onChange: function onChange(e) {
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_15__["ACTIONS"].NAVBAR_HEIGHT,
        payload: {
          height: "".concat(e.target.value)
        }
      });
      setHeight(e.target.value);
    }
  })));
};
var BodyEditor = function BodyEditor(_ref2) {
  var body = _ref2.body,
      dispatch = _ref2.dispatch;

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(body.backgroundColor || '#ffffff'),
      _useState8 = _slicedToArray(_useState7, 2),
      backgroundColor = _useState8[0],
      setBackgroundColor = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(body.color || '#000000'),
      _useState10 = _slicedToArray(_useState9, 2),
      color = _useState10[0],
      setColor = _useState10[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "design-menu-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "element-editor-item"
  }, "background color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initialValue: body.backgroundColor || '#ffffff',
    onChange: function onChange(e) {
      setBackgroundColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_15__["ACTIONS"].BODY_BACKGROUND_COLOR,
        payload: {
          backgroundColor: e.hex
        }
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "element-editor-item"
  }, "text color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initialValue: body.color || '#000000',
    onChange: function onChange(e) {
      setBackgroundColor;
      dispatch({
        type: _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_15__["ACTIONS"].BODY_TEXT_COLOR,
        payload: {
          color: e.hex
        }
      });
    }
  })));
};
var SidebarEditor = function SidebarEditor() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "design-menu-editor"
  }, "SIDEBAR EDITOR PLACEHOLDER");
};
var FooterEditor = function FooterEditor() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "design-menu-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, "height:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
    type: "range",
    min: "6",
    max: "20",
    onChange: function onChange(e) {
      return console.log(e.target.value);
    }
  })));
};
var SectionsEditor = function SectionsEditor() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
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
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CreatePageWrapper */ "./assets/js/react/components/create/CreatePageWrapper.js");










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var reducer = function reducer(state, action) {
  switch (action.type) {
    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_9__["ACTIONS"].NAVBAR_HEIGHT:
      var newNavbarH = _objectSpread({}, state.navbar);

      newNavbarH.height = action.payload.height;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarH
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_9__["ACTIONS"].NAVBAR_BACKGROUND_COLOR:
      var newNavbarBg = _objectSpread({}, state.navbar);

      newNavbarBg.backgroundColor = action.payload.backgroundColor;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarBg
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_9__["ACTIONS"].NAVBAR_TEXT_COLOR:
      var newNavbarTc = _objectSpread({}, state.navbar);

      newNavbarTc.color = action.payload.color;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarTc
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_9__["ACTIONS"].BODY_BACKGROUND_COLOR:
      var newBody = _objectSpread({}, state.body);

      newBody.backgroundColor = action.payload.backgroundColor;
      return _objectSpread(_objectSpread({}, state), {}, {
        body: newBody
      });

    case _CreatePageWrapper__WEBPACK_IMPORTED_MODULE_9__["ACTIONS"].BODY_TEXT_COLOR:
      var newBodyTc = _objectSpread({}, state.body);

      newBodyTc.color = action.payload.color;
      return _objectSpread(_objectSpread({}, state), {}, {
        body: newBodyTc
      });

    default:
      return state;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvRWxlbWVudEVkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9jcmVhdGVQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9wYWdlcy9jcmVhdGUuanMiXSwibmFtZXMiOlsiZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwiQUNUSU9OUyIsIk5BVkJBUl9IRUlHSFQiLCJOQVZCQVJfQkFDS0dST1VORF9DT0xPUiIsIk5BVkJBUl9URVhUX0NPTE9SIiwiQk9EWV9CQUNLR1JPVU5EX0NPTE9SIiwiQk9EWV9URVhUX0NPTE9SIiwiSU5JVF9TVFlMRSIsIm5hdmJhciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaGVpZ2h0IiwiaW5pdCIsImxheW91dERhdGEiLCJwYWdlU3RydWN0dXJlIiwic2F2ZVBhZ2UiLCJwYXlsb2FkIiwiYXhpb3MiLCJwb3N0IiwicGFnZUhhc2giLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm1lc3NhZ2UiLCJhbGVydCIsIkNyZWF0ZVBhZ2VXcmFwcGVyIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsIkNyZWF0aW9uRGVzayIsInN0b3JlIiwiYm9keVN0eWxlIiwiYm9keSIsIm5hdkl0ZW1zIiwiaXRlbXMiLCJuYXZTdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcCIsIml0ZW0iLCJ1cmwiLCJ0ZXh0IiwiQ3JlYXRlTWVudSIsIk5hdmJhckVkaXRvciIsInVzZVN0YXRlIiwiYmdDb2xvciIsInNldEJnQ29sb3IiLCJ0ZXh0Q29sb3IiLCJzZXRUZXh0Q29sb3IiLCJzZXRIZWlnaHQiLCJlIiwidHlwZSIsImhleCIsInRhcmdldCIsInZhbHVlIiwiQm9keUVkaXRvciIsInNldEJhY2tncm91bmRDb2xvciIsInNldENvbG9yIiwiU2lkZWJhckVkaXRvciIsIkZvb3RlckVkaXRvciIsIlNlY3Rpb25zRWRpdG9yIiwiTWVudU9wdGlvbiIsImNvbnRlbnQiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJjaGV2cm9uQ2xhc3MiLCJoYW5kbGVDbGljayIsImFjdGlvbiIsIm5ld05hdmJhckgiLCJuZXdOYXZiYXJCZyIsIm5ld05hdmJhclRjIiwibmV3Qm9keSIsIm5ld0JvZHlUYyIsIkNyZWF0ZVBhZ2VDb250YWluZXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsSUFBTUEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDQyxPQUFELEVBQVVDLFNBQVYsRUFBd0I7QUFDcEQsTUFBSUQsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxRQUFsQixD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QUZKLEUiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQucGFyZW50RWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgeyBDcmVhdGlvbkRlc2sgfSBmcm9tIFwiLi9DcmVhdGlvbkRlc2tcIjtcbmltcG9ydCB7IENyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51L0NyZWF0ZU1lbnVcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xuICAgIE5BVkJBUl9IRUlHSFQ6ICdzZXROYXZiYXJIZWlnaHQnLFxuICAgIE5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SOiAnc2V0TmF2YmFyQmFja2dyb3VuZENvbG9yJyxcbiAgICBOQVZCQVJfVEVYVF9DT0xPUjogJ3NldE5hdmJhclRleHRDb2xvcicsXG5cbiAgICBCT0RZX0JBQ0tHUk9VTkRfQ09MT1I6ICdzZXRCb2R5QmFja3JvdW5kQ29sb3InLFxuICAgIEJPRFlfVEVYVF9DT0xPUjogJ3NldEJvZHlUZXh0Q29sb3InXG59O1xuXG5leHBvcnQgY29uc3QgSU5JVF9TVFlMRSA9IHtcbiAgICBuYXZiYXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2FhYWFhYScsXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIGhlaWdodDogNVxuICAgIH1cbn07XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxheW91dERhdGEucGFnZVN0cnVjdHVyZTtcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVQYWdlID0gcGF5bG9hZCA9PiB7XG4gICAgcGF5bG9hZC5uYXZiYXIuaGVpZ2h0ID0gcGF5bG9hZC5uYXZiYXIuaGVpZ2h0IHx8IElOSVRfU1RZTEUubmF2YmFyLmhlaWdodDsgLy9AdG9kbyByZWZhY3RvciFcbiAgICBheGlvcy5wb3N0KGAvZGF0YS91cGRhdGVfcGFnZS8ke2xheW91dERhdGEucGFnZUhhc2h9YCwge3BheWxvYWR9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVQYWdlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge30sIGluaXQpO1xuXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cblxuICAgICAgICAgICAgPENyZWF0ZU1lbnUgc3RvcmU9e3N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgICAgIDxDcmVhdGlvbkRlc2sgc3RvcmU9e3N0YXRlfS8+XG4gICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSU5JVF9TVFlMRSB9IGZyb20gXCIuL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBjb25zdCBDcmVhdGlvbkRlc2sgPSAoe3N0b3JlID0ge319KSA9PiB7XG5cbiAgICBzdG9yZS5uYXZiYXIgPSBzdG9yZS5uYXZiYXIgfHwgSU5JVF9TVFlMRS5uYXZiYXI7XG4gICAgbGV0IGJvZHlTdHlsZSA9IHN0b3JlLmJvZHkgfHwge307XG4gICAgbGV0IG5hdkl0ZW1zID0gc3RvcmUubmF2YmFyLml0ZW1zIHx8IFtdO1xuICAgIGNvbnN0IG5hdlN0eWxlID0gey4uLnN0b3JlLm5hdmJhciwgaGVpZ2h0OiBgJHtzdG9yZS5uYXZiYXIuaGVpZ2h0IHx8IDV9cmVtYH07XG4gICAgbmF2U3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBuYXZTdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNyZWF0aW9uLWRlc2tcIiBzdHlsZT17Ym9keVN0eWxlfT5cbiAgICAgICAgICAgIDxuYXYgc3R5bGU9e25hdlN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAge25hdkl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YSBocmVmPXtpdGVtLnVybH0+e2l0ZW0udGV4dH08L2E+O1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICB0ZXh0MlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tIFwiLi9NZW51T3B0aW9uXCI7XG5pbXBvcnQgeyBJTklUX1NUWUxFLCBzYXZlUGFnZSB9IGZyb20gXCIuLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuaW1wb3J0IHtcbiAgICBOYXZiYXJFZGl0b3IsXG4gICAgQm9keUVkaXRvcixcbiAgICBTaWRlYmFyRWRpdG9yLFxuICAgIFNlY3Rpb25zRWRpdG9yLFxuICAgIEZvb3RlckVkaXRvclxufSBmcm9tIFwiLi9FbGVtZW50RWRpdG9yc1wiO1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlTWVudSA9ICh7c3RvcmUsIGRpc3BhdGNofSkgPT4ge1xuICAgIHN0b3JlLm5hdmJhciA9IHN0b3JlLm5hdmJhciB8fCB7fTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVhdGUtbWVudVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIiBvbkNsaWNrPXsoKSA9PiBzYXZlUGFnZShzdG9yZSl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uIHRleHQ9XCJOYXZiYXJcIiBjb250ZW50PXs8TmF2YmFyRWRpdG9yIG5hdmJhcj17c3RvcmUubmF2YmFyIHx8IElOSVRfU1RZTEUubmF2YmFyfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz59Lz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uIHRleHQ9XCJCb2R5XCIgY29udGVudD17PEJvZHlFZGl0b3IgYm9keT17c3RvcmUuYm9keSB8fCB7fX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fS8+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiU2lkZWJhclwiIGNvbnRlbnQ9ezxTaWRlYmFyRWRpdG9yLz59Lz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uIHRleHQ9XCJTZWN0aW9uc1wiIGNvbnRlbnQ9ezxTZWN0aW9uc0VkaXRvci8+fS8+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiRm9vdGVyXCIgY29udGVudD17PEZvb3RlckVkaXRvci8+fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dENvbG9yIGZyb20gJ3JlYWN0LWlucHV0LWNvbG9yJztcbmltcG9ydCB7IEFDVElPTlMsIElOSVRfU1RZTEUgfSBmcm9tIFwiLi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmJhckVkaXRvciA9ICh7XG4gICAgICAgIG5hdmJhcixcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JnQ29sb3IsIHNldEJnQ29sb3JdID0gdXNlU3RhdGUobmF2YmFyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZicpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZShuYXZiYXIuY29sb3IgfHwgJyMwMDAwMDAnKTtcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUobmF2YmFyLmhlaWdodCB8fCA1KTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3IgbmF2YmFyLWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCZ0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgdGV4dCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5jb2xvciB8fCAnIzAwMDAwMCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfVEVYVF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSEVJR0hULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2UudGFyZ2V0LnZhbHVlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBCb2R5RWRpdG9yID0gKHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JhY2tncm91bmRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yXSA9IHVzZVN0YXRlKGJvZHkuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJyk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShib2R5LmNvbG9yIHx8ICcjMDAwMDAwJyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2JvZHkuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuQk9EWV9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIHRleHQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtib2R5LmNvbG9yIHx8ICcjMDAwMDAwJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuQk9EWV9URVhUX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyRWRpdG9yID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIFNJREVCQVIgRURJVE9SIFBMQUNFSE9MREVSXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXJFZGl0b3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjZcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uc0VkaXRvciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yXCI+XG4gICAgICAgICAgICBTRUNUSU9OUyBFRElUT1IgUExBQ0VIT0xERVJcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzIGZyb20gXCIuLi8uLi8uLi8uLi9mdW5jdGlvbnMvZWxlbWVudE9yUGFyZW50SGFzQ2xhc3NcIjtcblxuY29uc3QgTWVudU9wdGlvbiA9ICh7dGV4dCwgY29udGVudH0pID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgbGV0IGNoZXZyb25DbGFzcyA9IGFjdGl2ZSA/ICdjaGV2cm9uIGNoZXZyb24tcmV2ZXJzZScgOiAnY2hldnJvbic7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGUudGFyZ2V0LCAnZGVzaWduLW1lbnUtZWRpdG9yJykpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1vcHRpb25cIlxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY2hldnJvbi5wbmdcIiBhbHQ9XCJjaGV2cm9uXCIgY2xhc3NOYW1lPXtjaGV2cm9uQ2xhc3N9Lz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHthY3RpdmUgJiYgY29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudU9wdGlvbjsiLCJpbXBvcnQge0FDVElPTlN9IGZyb20gXCIuL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9IRUlHSFQ6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJIID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJILmhlaWdodCA9IGFjdGlvbi5wYXlsb2FkLmhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFySH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckJnID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJCZy5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckJnfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9URVhUX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyVGMgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhclRjLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhclRjfTtcblxuXG4gICAgICAgIGNhc2UgQUNUSU9OUy5CT0RZX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5ID0gey4uLnN0YXRlLmJvZHl9O1xuICAgICAgICAgICAgbmV3Qm9keS5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBib2R5OiBuZXdCb2R5fTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfVEVYVF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHlUYyA9IHsuLi5zdGF0ZS5ib2R5fTtcbiAgICAgICAgICAgIG5ld0JvZHlUYy5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogbmV3Qm9keVRjfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IENyZWF0ZVBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAgPENyZWF0ZVBhZ2VXcmFwcGVyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3JlYXRlUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9jcmVhdGVQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q3JlYXRlUGFnZUNvbnRhaW5lcj48L0NyZWF0ZVBhZ2VDb250YWluZXI+LFxuICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=