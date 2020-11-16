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
/*! exports provided: ACTIONS, CreatePageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTIONS", function() { return ACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageWrapper", function() { return CreatePageWrapper; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _CreationDesk__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./CreationDesk */ "./assets/js/react/components/create/CreationDesk.js");
/* harmony import */ var _menu_CreateMenu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./menu/CreateMenu */ "./assets/js/react/components/create/menu/CreateMenu.js");






















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ACTIONS = {
  NAVBAR_HEIGHT: 'setNavbarHeight',
  NAVBAR_BACKGROUND_COLOR: 'setNavbarBackgroundColor',
  NAVBAR_TEXT_COLOR: 'setNavbarTextColor'
};

var init = function init() {
  return layoutData.pageStructure;
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NAVBAR_HEIGHT:
      var newNavbarH = _objectSpread({}, state.navbar);

      newNavbarH.height = action.payload.height;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarH
      });

    case ACTIONS.NAVBAR_BACKGROUND_COLOR:
      var newNavbarBg = _objectSpread({}, state.navbar);

      newNavbarBg.backgroundColor = action.payload.backgroundColor;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarBg
      });

    case ACTIONS.NAVBAR_TEXT_COLOR:
      var newNavbarTc = _objectSpread({}, state.navbar);

      newNavbarTc.color = action.payload.color;
      return _objectSpread(_objectSpread({}, state), {}, {
        navbar: newNavbarTc
      });

    default:
      return state;
  }
};

var CreatePageWrapper = function CreatePageWrapper() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_21__["useReducer"])(reducer, {}, init),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  console.log(state);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(_menu_CreateMenu__WEBPACK_IMPORTED_MODULE_24__["CreateMenu"], {
    store: state,
    dispatch: dispatch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(_CreationDesk__WEBPACK_IMPORTED_MODULE_23__["CreationDesk"], {
    store: state
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_22__["default"], null));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var CreationDesk = function CreationDesk(_ref) {
  var _ref$store = _ref.store,
      store = _ref$store === void 0 ? {} : _ref$store;

  // useEffect(() => {
  //     document.getElementById('creation-desk').innerHTML = layoutData.pageBody;
  // }, []);
  // const myStyle = {
  //     height: store.navbar.height,
  //     backgroundColor: store.navbar.bgColor,
  //     color: store.navbar.textColor,
  //     fontFamily: store.navbar.font
  // };
  var navStyle = _objectSpread(_objectSpread({}, store.navbar), {}, {
    height: "".concat(store.navbar.height, "rem")
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    id: "creation-desk"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("nav", {
    style: navStyle
  }, "tekst"));
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
/* harmony import */ var _ElementEditors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ElementEditors */ "./assets/js/react/components/create/menu/ElementEditors.js");



var CreateMenu = function CreateMenu(_ref) {
  var store = _ref.store,
      dispatch = _ref.dispatch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "create-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Navbar",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_2__["NavbarEditor"], {
      navbar: store.navbar,
      dispatch: dispatch
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Sidebar",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_2__["SidebarEditor"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Sections",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_2__["SectionsEditor"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuOption__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Footer",
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ElementEditors__WEBPACK_IMPORTED_MODULE_2__["FooterEditor"], null)
  }));
};

/***/ }),

/***/ "./assets/js/react/components/create/menu/ElementEditors.js":
/*!******************************************************************!*\
  !*** ./assets/js/react/components/create/menu/ElementEditors.js ***!
  \******************************************************************/
/*! exports provided: NavbarEditor, SidebarEditor, FooterEditor, SectionsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarEditor", function() { return NavbarEditor; });
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(navbar.backgroundColor),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(navbar.color),
      _useState4 = _slicedToArray(_useState3, 2),
      textColor = _useState4[0],
      setTextColor = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_13__["useState"])(navbar.height),
      _useState6 = _slicedToArray(_useState5, 2),
      height = _useState6[0],
      setHeight = _useState6[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
    className: "design-menu-editor navbar-editor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, "background color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initialValue: navbar.backgroundColor,
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, "text color:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_input_color__WEBPACK_IMPORTED_MODULE_14__["default"], {
    initialValue: navbar.color,
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, "height:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("input", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvRWxlbWVudEVkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9jcmVhdGVQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9wYWdlcy9jcmVhdGUuanMiXSwibmFtZXMiOlsiZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwiQUNUSU9OUyIsIk5BVkJBUl9IRUlHSFQiLCJOQVZCQVJfQkFDS0dST1VORF9DT0xPUiIsIk5BVkJBUl9URVhUX0NPTE9SIiwiaW5pdCIsImxheW91dERhdGEiLCJwYWdlU3RydWN0dXJlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm5ld05hdmJhckgiLCJuYXZiYXIiLCJoZWlnaHQiLCJwYXlsb2FkIiwibmV3TmF2YmFyQmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJuZXdOYXZiYXJUYyIsImNvbG9yIiwiQ3JlYXRlUGFnZVdyYXBwZXIiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRpb25EZXNrIiwic3RvcmUiLCJuYXZTdHlsZSIsIkNyZWF0ZU1lbnUiLCJOYXZiYXJFZGl0b3IiLCJ1c2VTdGF0ZSIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwidGV4dENvbG9yIiwic2V0VGV4dENvbG9yIiwic2V0SGVpZ2h0IiwiZSIsImhleCIsInRhcmdldCIsInZhbHVlIiwiU2lkZWJhckVkaXRvciIsIkZvb3RlckVkaXRvciIsIlNlY3Rpb25zRWRpdG9yIiwiTWVudU9wdGlvbiIsInRleHQiLCJjb250ZW50IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY2hldnJvbkNsYXNzIiwiaGFuZGxlQ2xpY2siLCJDcmVhdGVQYWdlQ29udGFpbmVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXdCO0FBQ3BELE1BQUlELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkJGLFNBQTNCLENBQUosRUFBMkM7QUFDdkMsV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlELE9BQU8sQ0FBQ0ksYUFBWixFQUEyQjtBQUM5QixXQUFPTCx1QkFBdUIsQ0FBQ0MsT0FBTyxDQUFDSSxhQUFULEVBQXdCSCxTQUF4QixDQUE5QjtBQUNIOztBQUNELFNBQU8sS0FBUDtBQUNILENBUEQ7O0FBU2VGLHNGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTU0sT0FBTyxHQUFHO0FBQ25CQyxlQUFh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QUFsQztBQUE0QyxhQUFTLEVBQUVJO0FBQXZELElBRkosQ0FKSixFQVFLRixNQUFNLElBQUlELE9BUmYsQ0FESjtBQVlILENBdkJEOztBQXlCZUYseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBOztJQUVxQk8sbUI7Ozs7O0FBQ2pCLGlDQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs2QkFFUTtBQUNMLDBCQUNJLHNGQUNJLDREQUFDLCtEQUFELE9BREosZUFFSSw0REFBQyx1RkFBRCxPQUZKLENBREo7QUFNSDs7OztFQVo0Q0MsNkNBQUssQ0FBQ0MsUzs7Ozs7Ozs7Ozs7Ozs7QUNKdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFDLGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyx1RUFBRCxPQURKLEVBRUlDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsY0FBaEIsQ0FBK0IsTUFBL0IsQ0FGSixFIiwiZmlsZSI6ImNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LnBhcmVudEVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IHsgQ3JlYXRpb25EZXNrIH0gZnJvbSBcIi4vQ3JlYXRpb25EZXNrXCI7XG5pbXBvcnQgeyBDcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudS9DcmVhdGVNZW51XCI7XG5cbmV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xuICAgIE5BVkJBUl9IRUlHSFQ6ICdzZXROYXZiYXJIZWlnaHQnLFxuICAgIE5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SOiAnc2V0TmF2YmFyQmFja2dyb3VuZENvbG9yJyxcbiAgICBOQVZCQVJfVEVYVF9DT0xPUjogJ3NldE5hdmJhclRleHRDb2xvcidcbn07XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxheW91dERhdGEucGFnZVN0cnVjdHVyZTtcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX0hFSUdIVDpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckggPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckguaGVpZ2h0ID0gYWN0aW9uLnBheWxvYWQuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbmF2YmFyOiBuZXdOYXZiYXJIfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyQmcgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhckJnLmJhY2tncm91bmRDb2xvciA9IGFjdGlvbi5wYXlsb2FkLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyQmd9O1xuICAgICAgICBjYXNlIEFDVElPTlMuTkFWQkFSX1RFWFRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJUYyA9IHsuLi5zdGF0ZS5uYXZiYXJ9O1xuICAgICAgICAgICAgbmV3TmF2YmFyVGMuY29sb3IgPSBhY3Rpb24ucGF5bG9hZC5jb2xvcjtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFyVGN9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IENyZWF0ZVBhZ2VXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7fSwgaW5pdCk7XG5cbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPENyZWF0ZU1lbnUgc3RvcmU9e3N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgICAgIDxDcmVhdGlvbkRlc2sgc3RvcmU9e3N0YXRlfS8+XG4gICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQ3JlYXRpb25EZXNrID0gKHtzdG9yZSA9IHt9fSkgPT4ge1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0aW9uLWRlc2snKS5pbm5lckhUTUwgPSBsYXlvdXREYXRhLnBhZ2VCb2R5O1xuICAgIC8vIH0sIFtdKTtcbiAgICAvLyBjb25zdCBteVN0eWxlID0ge1xuICAgIC8vICAgICBoZWlnaHQ6IHN0b3JlLm5hdmJhci5oZWlnaHQsXG4gICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogc3RvcmUubmF2YmFyLmJnQ29sb3IsXG4gICAgLy8gICAgIGNvbG9yOiBzdG9yZS5uYXZiYXIudGV4dENvbG9yLFxuICAgIC8vICAgICBmb250RmFtaWx5OiBzdG9yZS5uYXZiYXIuZm9udFxuICAgIC8vIH07XG4gICAgY29uc3QgbmF2U3R5bGUgPSB7Li4uc3RvcmUubmF2YmFyLCBoZWlnaHQ6IGAke3N0b3JlLm5hdmJhci5oZWlnaHR9cmVtYH07XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY3JlYXRpb24tZGVza1wiPlxuICAgICAgICAgICAgPG5hdiBzdHlsZT17bmF2U3R5bGV9PlxuICAgICAgICAgICAgICAgIHRla3N0XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnVPcHRpb24gZnJvbSBcIi4vTWVudU9wdGlvblwiO1xuaW1wb3J0IHtcbiAgICBOYXZiYXJFZGl0b3IsXG4gICAgU2lkZWJhckVkaXRvcixcbiAgICBTZWN0aW9uc0VkaXRvcixcbiAgICBGb290ZXJFZGl0b3Jcbn0gZnJvbSBcIi4vRWxlbWVudEVkaXRvcnNcIjtcblxuZXhwb3J0IGNvbnN0IENyZWF0ZU1lbnUgPSAoe3N0b3JlLCBkaXNwYXRjaH0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVhdGUtbWVudVwiPlxuICAgICAgICAgICAgPE1lbnVPcHRpb24gdGV4dD1cIk5hdmJhclwiIGNvbnRlbnQ9ezxOYXZiYXJFZGl0b3IgbmF2YmFyPXtzdG9yZS5uYXZiYXJ9IGRpc3BhdGNoPXtkaXNwYXRjaH0vPn0vPlxuICAgICAgICAgICAgPE1lbnVPcHRpb24gdGV4dD1cIlNpZGViYXJcIiBjb250ZW50PXs8U2lkZWJhckVkaXRvci8+fS8+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiU2VjdGlvbnNcIiBjb250ZW50PXs8U2VjdGlvbnNFZGl0b3IvPn0vPlxuICAgICAgICAgICAgPE1lbnVPcHRpb24gdGV4dD1cIkZvb3RlclwiIGNvbnRlbnQ9ezxGb290ZXJFZGl0b3IvPn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXRDb2xvciBmcm9tICdyZWFjdC1pbnB1dC1jb2xvcic7XG5pbXBvcnQgeyBBQ1RJT05TIH0gZnJvbSBcIi4uL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXJFZGl0b3IgPSAoe1xuICAgICAgICBuYXZiYXIsXG4gICAgICAgIGRpc3BhdGNoXG4gICAgfSkgPT4ge1xuICAgIGNvbnN0IFtiZ0NvbG9yLCBzZXRCZ0NvbG9yXSA9IHVzZVN0YXRlKG5hdmJhci5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZShuYXZiYXIuY29sb3IpO1xuICAgIGNvbnN0IFtoZWlnaHQsIHNldEhlaWdodF0gPSB1c2VTdGF0ZShuYXZiYXIuaGVpZ2h0KTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3IgbmF2YmFyLWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kIGNvbG9yOlxuICAgICAgICAgICAgICAgIDxJbnB1dENvbG9yXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZT17bmF2YmFyLmJhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmdDb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgdGV4dCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0Q29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBBQ1RJT05TLk5BVkJBUl9URVhUX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZS5oZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIGhlaWdodDpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgbWluPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIG1heD1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2hlaWdodH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0hFSUdIVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtlLnRhcmdldC52YWx1ZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIZWlnaHQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgU2lkZWJhckVkaXRvciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yXCI+XG4gICAgICAgICAgICBTSURFQkFSIEVESVRPUiBQTEFDRUhPTERFUlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgRm9vdGVyRWRpdG9yID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgU2VjdGlvbnNFZGl0b3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgU0VDVElPTlMgRURJVE9SIFBMQUNFSE9MREVSXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyBmcm9tIFwiLi4vLi4vLi4vLi4vZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzXCI7XG5cbmNvbnN0IE1lbnVPcHRpb24gPSAoe3RleHQsIGNvbnRlbnR9KSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGxldCBjaGV2cm9uQ2xhc3MgPSBhY3RpdmUgPyAnY2hldnJvbiBjaGV2cm9uLXJldmVyc2UnIDogJ2NoZXZyb24nO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgaWYgKCFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlLnRhcmdldCwgJ2Rlc2lnbi1tZW51LWVkaXRvcicpKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtb3B0aW9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gaGFuZGxlQ2xpY2soZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2NoZXZyb24ucG5nXCIgYWx0PVwiY2hldnJvblwiIGNsYXNzTmFtZT17Y2hldnJvbkNsYXNzfS8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB7YWN0aXZlICYmIGNvbnRlbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVPcHRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IENyZWF0ZVBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAgPENyZWF0ZVBhZ2VXcmFwcGVyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3JlYXRlUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9jcmVhdGVQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q3JlYXRlUGFnZUNvbnRhaW5lcj48L0NyZWF0ZVBhZ2VDb250YWluZXI+LFxuICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=