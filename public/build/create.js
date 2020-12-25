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


  var navItemsStyle = getNavItemsStyle();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRpb25EZXNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9tZW51L0NyZWF0ZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvRWxlbWVudEVkaXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvY3JlYXRlL21lbnUvTWVudU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9jcmVhdGVQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9wYWdlcy9jcmVhdGUuanMiXSwibmFtZXMiOlsiZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwiQUNUSU9OUyIsIk5BVkJBUl9IRUlHSFQiLCJOQVZCQVJfQkFDS0dST1VORF9DT0xPUiIsIk5BVkJBUl9URVhUX0NPTE9SIiwiQk9EWV9CQUNLR1JPVU5EX0NPTE9SIiwiQk9EWV9URVhUX0NPTE9SIiwiSU5JVF9TVFlMRSIsIm5hdmJhciIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaGVpZ2h0IiwiaW5pdCIsImxheW91dERhdGEiLCJwYWdlU3RydWN0dXJlIiwic2F2ZVBhZ2UiLCJwYXlsb2FkIiwiYXhpb3MiLCJwb3N0IiwicGFnZUhhc2giLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm1lc3NhZ2UiLCJhbGVydCIsIkNyZWF0ZVBhZ2VXcmFwcGVyIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImF2YWlsYWJsZVNwYWNpbmdPcHRpb25zIiwiZmxleFN0YXJ0IiwiZmxleEVuZCIsInNwYWNlQXJvdW5kIiwibmF2SXRlbXNOZWVkTWFyZ2luIiwic3BhY2luZ09wdGlvbiIsImdldFNwYWNpbmdTdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImdldE5hdkl0ZW1zU3R5bGUiLCJzdHlsZSIsInRleHREZWNvcmF0aW9uIiwibWFyZ2luIiwiQ3JlYXRpb25EZXNrIiwic3RvcmUiLCJib2R5U3R5bGUiLCJib2R5IiwibmF2SXRlbXMiLCJpdGVtcyIsInNwYWNpbmciLCJuYXZTdHlsZSIsIm5hdkl0ZW1zU3R5bGUiLCJtYXAiLCJpdGVtIiwidXJsIiwidGV4dCIsIkNyZWF0ZU1lbnUiLCJOYXZiYXJFZGl0b3IiLCJ1c2VTdGF0ZSIsImJnQ29sb3IiLCJzZXRCZ0NvbG9yIiwidGV4dENvbG9yIiwic2V0VGV4dENvbG9yIiwic2V0SGVpZ2h0IiwiZSIsInR5cGUiLCJoZXgiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkJvZHlFZGl0b3IiLCJzZXRCYWNrZ3JvdW5kQ29sb3IiLCJzZXRDb2xvciIsIlNpZGViYXJFZGl0b3IiLCJGb290ZXJFZGl0b3IiLCJTZWN0aW9uc0VkaXRvciIsIk1lbnVPcHRpb24iLCJjb250ZW50IiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY2hldnJvbkNsYXNzIiwiaGFuZGxlQ2xpY2siLCJhY3Rpb24iLCJuZXdOYXZiYXJIIiwibmV3TmF2YmFyQmciLCJuZXdOYXZiYXJUYyIsIm5ld0JvZHkiLCJuZXdCb2R5VGMiLCJDcmVhdGVQYWdlQ29udGFpbmVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsIndpbmRvdyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXdCO0FBQ3BELE1BQUlELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkJGLFNBQTNCLENBQUosRUFBMkM7QUFDdkMsV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlELE9BQU8sQ0FBQ0ksYUFBWixFQUEyQjtBQUM5QixXQUFPTCx1QkFBdUIsQ0FBQ0MsT0FBTyxDQUFDSSxhQUFULEVBQXdCSCxTQUF4QixDQUE5QjtBQUNIOztBQUNELFNBQU8sS0FBUDtBQUNILENBUEQ7O0FBU2VGLHNGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTU0sT0FBTyxHQUFHO0FBQ25CQyxlQUFhLEVBQUUsaUJBREk7QUFFbkJDLHlCQUF1QixFQUFFLDBCQUZOO0FBR25CQyxtQkFBaUIsRUFBRSxvQkFIQTtBQUtuQkMsdUJBQXFCLEVBQUUsdUJBTEo7QUFNbkJDLGlCQUFlLEVBQUU7QUFORSxDQUFoQjtBQVNBLElBQU1DLFVBQVUsR0FBRztBQUN0QkMsUUFBTSxFQUFFO0FBQ0pDLG1CQUFlLEVBQUUsU0FEYjtBQUVKQyxTQUFLLEVBQUUsU0FGSDtBQUdKQyxVQUFNLEVBQUU7QUFISjtBQURjLENBQW5COztBQVFQLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDZixTQUFPQyxVQUFVLENBQUNDLGFBQWxCO0FBQ0gsQ0FGRDs7QUFJTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxPQUFPLEVBQUk7QUFDL0JBLFNBQU8sQ0FBQ1IsTUFBUixD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LDREQUFDLHVGQUFELE9BRkosQ0FESjtBQU1IOzs7O0VBWjRDQyw2Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7OztBQ0p2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLHVFQUFELE9BREosRUFFSUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxjQUFoQixDQUErQixNQUEvQixDQUZKLEUiLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQucGFyZW50RWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgeyBDcmVhdGlvbkRlc2sgfSBmcm9tIFwiLi9DcmVhdGlvbkRlc2tcIjtcbmltcG9ydCB7IENyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51L0NyZWF0ZU1lbnVcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBBQ1RJT05TID0ge1xuICAgIE5BVkJBUl9IRUlHSFQ6ICdzZXROYXZiYXJIZWlnaHQnLFxuICAgIE5BVkJBUl9CQUNLR1JPVU5EX0NPTE9SOiAnc2V0TmF2YmFyQmFja2dyb3VuZENvbG9yJyxcbiAgICBOQVZCQVJfVEVYVF9DT0xPUjogJ3NldE5hdmJhclRleHRDb2xvcicsXG5cbiAgICBCT0RZX0JBQ0tHUk9VTkRfQ09MT1I6ICdzZXRCb2R5QmFja3JvdW5kQ29sb3InLFxuICAgIEJPRFlfVEVYVF9DT0xPUjogJ3NldEJvZHlUZXh0Q29sb3InXG59O1xuXG5leHBvcnQgY29uc3QgSU5JVF9TVFlMRSA9IHtcbiAgICBuYXZiYXI6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2FhYWFhYScsXG4gICAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIGhlaWdodDogNVxuICAgIH1cbn07XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGxheW91dERhdGEucGFnZVN0cnVjdHVyZTtcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVQYWdlID0gcGF5bG9hZCA9PiB7XG4gICAgcGF5bG9hZC5uYXZiYXIuaGVpZ2h0ID0gcGF5bG9hZC5uYXZiYXIuaGVpZ2h0IHx8IElOSVRfU1RZTEUubmF2YmFyLmhlaWdodDsgLy9AdG9kbyByZWZhY3RvciFcbiAgICBheGlvcy5wb3N0KGAvZGF0YS91cGRhdGVfcGFnZS8ke2xheW91dERhdGEucGFnZUhhc2h9YCwge3BheWxvYWR9KVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVQYWdlV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge30sIGluaXQpO1xuXG4gICAgY29uc29sZS5sb2coc3RhdGUpO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cblxuICAgICAgICAgICAgPENyZWF0ZU1lbnUgc3RvcmU9e3N0YXRlfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz5cbiAgICAgICAgICAgIDxDcmVhdGlvbkRlc2sgc3RvcmU9e3N0YXRlfS8+XG4gICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSU5JVF9TVFlMRSB9IGZyb20gXCIuL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zID0ge1xuICAgIGZsZXhTdGFydDogMSxcbiAgICBmbGV4RW5kOiAyLFxuICAgIHNwYWNlQXJvdW5kOiAzXG59O1xuXG5jb25zdCBuYXZJdGVtc05lZWRNYXJnaW4gPSBzcGFjaW5nT3B0aW9uID0+IHtcbiAgICByZXR1cm4gc3BhY2luZ09wdGlvbiAhPT0gYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuc3BhY2VBcm91bmQ7XG59XG5cbmNvbnN0IGdldFNwYWNpbmdTdHlsZSA9IHNwYWNpbmdPcHRpb24gPT4ge1xuICAgIHN3aXRjaCAoc3BhY2luZ09wdGlvbikge1xuICAgICAgICBjYXNlIGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLmZsZXhFbmQ6XG4gICAgICAgICAgICByZXR1cm4ge2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCd9O1xuICAgICAgICBjYXNlIGF2YWlsYWJsZVNwYWNpbmdPcHRpb25zLnNwYWNlQXJvdW5kOlxuICAgICAgICAgICAgcmV0dXJuIHtkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ307XG4gICAgICAgIGNhc2UgYXZhaWxhYmxlU3BhY2luZ09wdGlvbnMuZmxleFN0YXJ0OlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHtkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCd9O1xuICAgIH1cbn07XG5cbmNvbnN0IGdldE5hdkl0ZW1zU3R5bGUgPSBzcGFjaW5nT3B0aW9uID0+IHtcbiAgICBjb25zdCBzdHlsZSA9IHt0ZXh0RGVjb3JhdGlvbjonbm9uZScsY29sb3I6J2luaGVyaXQnfTtcbiAgICBpZiAobmF2SXRlbXNOZWVkTWFyZ2luKHNwYWNpbmdPcHRpb24pKSB7XG4gICAgICAgIHN0eWxlLm1hcmdpbiA9ICcwIDJyZW0nO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG59XG5cbmV4cG9ydCBjb25zdCBDcmVhdGlvbkRlc2sgPSAoe3N0b3JlID0ge319KSA9PiB7XG5cbiAgICBzdG9yZS5uYXZiYXIgPSBzdG9yZS5uYXZiYXIgfHwgSU5JVF9TVFlMRS5uYXZiYXI7XG4gICAgbGV0IGJvZHlTdHlsZSA9IHN0b3JlLmJvZHkgfHwge307XG4gICAgbGV0IG5hdkl0ZW1zID0gc3RvcmUubmF2YmFyLml0ZW1zIHx8IFtdO1xuICAgIGNvbnN0IHNwYWNpbmcgPSBnZXRTcGFjaW5nU3R5bGUoc3RvcmUubmF2YmFyLnNwYWNpbmdPcHRpb24pO1xuICAgIGNvbnN0IG5hdlN0eWxlID0gey4uLnN0b3JlLm5hdmJhciwgaGVpZ2h0OiBgJHtzdG9yZS5uYXZiYXIuaGVpZ2h0IHx8IDV9cmVtYCwgLi4uc3BhY2luZ307XG4gICAgLy8gbmF2U3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAvLyBuYXZTdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xuICAgIGNvbnN0IG5hdkl0ZW1zU3R5bGUgPSBnZXROYXZJdGVtc1N0eWxlKCk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY3JlYXRpb24tZGVza1wiIHN0eWxlPXtib2R5U3R5bGV9PlxuICAgICAgICAgICAgPG5hdiBzdHlsZT17bmF2U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICB7bmF2SXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e25hdkl0ZW1zU3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT47XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZXUgZXJhdCBsb2JvcnRpcywgdmFyaXVzIGFudGUgYXQsIGFjY3Vtc2FuIHRlbGx1cy4gQ3VyYWJpdHVyIHZhcml1cywgbmVxdWUgaWQgZGljdHVtIHVsbGFtY29ycGVyLCBuaXNpIGxpYmVybyBlZ2VzdGFzIGVzdCwgdmVsIHZlbmVuYXRpcyBleCBpcHN1bSBhdCBlc3QuIFV0IGluIGxhY3VzIGFudGUuIEN1cmFiaXR1ciBmYXVjaWJ1cyByaXN1cyBtYXVyaXMsIGEgdGluY2lkdW50IG1ldHVzIG1vbGxpcyBldS4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBlbGxlbnRlc3F1ZSBhIGVzdCBmYWNpbGlzaXMsIGVnZXN0YXMgdXJuYSBldCwgcGhhcmV0cmEgYXJjdS4gTmFtIGltcGVyZGlldCBkaWN0dW0gbnVsbGEgaW4gdm9sdXRwYXQuIENyYXMgdGVtcHVzIHV0IG9yY2kgaW4gY29uZGltZW50dW0uIEZ1c2NlIGx1Y3R1cywgZHVpIGVnZXQgYmxhbmRpdCBtYXR0aXMsIGxhY3VzIHB1cnVzIGNvbnNlY3RldHVyIGxvcmVtLCBuZWMgbW9sZXN0aWUgbmVxdWUgZXN0IGx1Y3R1cyBmZWxpcy4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIFZpdmFtdXMgbWFnbmEgbnVuYywgYWNjdW1zYW4gaW4gbWFsZXN1YWRhIGlkLCBncmF2aWRhIGZldWdpYXQgdGVsbHVzLiBQaGFzZWxsdXMgYSBlc3Qgdml0YWUgcmlzdXMgaW50ZXJkdW0gZ3JhdmlkYS4gVXQgc2VtcGVyIHRlbGx1cyBldCBmZWxpcyBtYXhpbXVzLCBzaXQgYW1ldCB0aW5jaWR1bnQgbWV0dXMgbGFjaW5pYS5cblxuICAgICAgICAgICAgICAgIFBlbGxlbnRlc3F1ZSB2ZWwgbGlndWxhIG9ybmFyZSwgZGlnbmlzc2ltIHJpc3VzIGFjY3Vtc2FuLCBwb3N1ZXJlIGF1Z3VlLiBJbnRlZ2VyIG9yY2kgbGliZXJvLCBwbGFjZXJhdCBlZ2V0IGF1Y3RvciBhYywgYWxpcXVldCBldSB0dXJwaXMuIERvbmVjIHNpdCBhbWV0IGludGVyZHVtIGp1c3RvLiBJbnRlZ2VyIHZvbHV0cGF0IGV0IG1hdXJpcyBldCBlZmZpY2l0dXIuIEludGVnZXIgZWZmaWNpdHVyIHNhcGllbiBldSBtYWxlc3VhZGEgY29uc2VjdGV0dXIuIFBoYXNlbGx1cyB0aW5jaWR1bnQsIHVybmEgaWQgZWZmaWNpdHVyIGZhY2lsaXNpcywgZGlhbSBmZWxpcyBmYWNpbGlzaXMgZW5pbSwgYWMgY29uc2VxdWF0IGRvbG9yIHB1cnVzIHV0IHVybmEuIE5hbSBhdCBtYXhpbXVzIG1hdXJpcy4gUHJhZXNlbnQgdG9ydG9yIG9kaW8sIG1hbGVzdWFkYSB2ZWwgZGlhbSB1dCwgc29sbGljaXR1ZGluIHBsYWNlcmF0IGxpZ3VsYS4gRXRpYW0gZXQgc29kYWxlcyBuaXNpLiBEb25lYyBldSByaXN1cyBhbGlxdWFtLCBwb3N1ZXJlIGp1c3RvIG5lYywgaGVuZHJlcml0IG51bmMuIFN1c3BlbmRpc3NlIGhlbmRyZXJpdCBjb21tb2RvIGxlbyBub24gcHJldGl1bS4gU2VkIGRpZ25pc3NpbSBpbXBlcmRpZXQgbGVvIHNlZCBwb3J0YS4gTnVsbGEgYmxhbmRpdCBhcmN1IGlkIG51bmMgZWxlaWZlbmQgaW1wZXJkaWV0IGV1IHNlZCBuaXNpLiBTZWQgbGlndWxhIG1hc3NhLCBjb252YWxsaXMgdGluY2lkdW50IG51bmMgcXVpcywgc2VtcGVyIGNvbnNlY3RldHVyIGxhY3VzLiBNYWVjZW5hcyB2ZWwgbnVsbGEgdmVsaXQuXG5cbiAgICAgICAgICAgICAgICBBbGlxdWFtIHNlZCBxdWFtIGxpYmVyby4gUHJvaW4gYXQgYWxpcXVldCBuaXNsLCBldSBlZmZpY2l0dXIgbGlndWxhLiBDdXJhYml0dXIgYSB0aW5jaWR1bnQgdmVsaXQuIFByYWVzZW50IGFjY3Vtc2FuLCBvcmNpIGluIG1vbGxpcyBzZW1wZXIsIGRpYW0gdGVsbHVzIGV1aXNtb2QgcXVhbSwgdmVzdGlidWx1bSBncmF2aWRhIG9yY2kgZmVsaXMgc2l0IGFtZXQgZXguIE1hdXJpcyBtb2xlc3RpZSBleCBpZCBzYXBpZW4gZWxlbWVudHVtIHVsbGFtY29ycGVyLiBDdXJhYml0dXIgbmVxdWUgcmlzdXMsIGZyaW5naWxsYSB2ZWwgcG9zdWVyZSBldCwgYmliZW5kdW0gdXQgZG9sb3IuIFByYWVzZW50IGV4IG1pLCBtb2xsaXMgaW4gdGluY2lkdW50IHNpdCBhbWV0LCBzb2RhbGVzIG5lYyBkdWkuIFV0IGRpY3R1bSBpbXBlcmRpZXQganVzdG8gaWQgc3VzY2lwaXQuIENyYXMgY3Vyc3VzLCBxdWFtIHZpdGFlIHVsdHJpY2llcyBmaW5pYnVzLCBtYXNzYSBqdXN0byBwcmV0aXVtIHNlbSwgaW4gdmVoaWN1bGEgbWFnbmEgYW50ZSB2ZWwgZW5pbS4gRG9uZWMgZmluaWJ1cyBlcm9zIGEgbGFvcmVldCBjb25zZWN0ZXR1ci4gQWVuZWFuIGF1Z3VlIG9yY2ksIGdyYXZpZGEgaWQgbWF0dGlzIHF1aXMsIGZldWdpYXQgcGVsbGVudGVzcXVlIG1pLlxuXG4gICAgICAgICAgICAgICAgVmVzdGlidWx1bSBiaWJlbmR1bSBwZWxsZW50ZXNxdWUgbWkgY3Vyc3VzIHNvZGFsZXMuIE51bGxhIHV0IGxhY2luaWEgdGVsbHVzLCB2aXRhZSB1bGxhbWNvcnBlciBuaWJoLiBNYXVyaXMgdml0YWUgcGhhcmV0cmEgbGVvLiBNb3JiaSBpbiBkaWFtIGV1IGF1Z3VlIHRlbXB1cyBwaGFyZXRyYS4gTWF1cmlzIGlhY3VsaXMgbnVsbGEgbm9uIHJpc3VzIHBsYWNlcmF0IGFsaXF1YW0gYSB2aXRhZSBtYXVyaXMuIE1vcmJpIG5lYyBudW5jIHZpdGFlIHF1YW0gYXVjdG9yIHRlbXB1cy4gTWFlY2VuYXMgbGFjaW5pYSBzb2xsaWNpdHVkaW4gbGVvLlxuXG4gICAgICAgICAgICAgICAgU2VkIG9kaW8gZmVsaXMsIGZldWdpYXQgdml0YWUgdWxsYW1jb3JwZXIgdWxsYW1jb3JwZXIsIG1hdHRpcyBsYW9yZWV0IG1hZ25hLiBNb3JiaSBjb252YWxsaXMgYWxpcXVhbSBmYWNpbGlzaXMuIFBlbGxlbnRlc3F1ZSBhYyB2ZWxpdCBuaXNsLiBQZWxsZW50ZXNxdWUgb3JuYXJlIHV0IGxhY3VzIG5lYyBtYWxlc3VhZGEuIEN1cmFiaXR1ciBmaW5pYnVzLCBmZWxpcyBxdWlzIGRhcGlidXMgbWF4aW11cywgZGlhbSBuaXNsIGZpbmlidXMgdmVsaXQsIHZlbCBvcm5hcmUgcXVhbSBtYXNzYSB1dCBsZWN0dXMuIFByb2luIG1ldHVzIGF1Z3VlLCBzY2VsZXJpc3F1ZSB2ZWwgZXggbmVjLCBwb3J0dGl0b3IgY29tbW9kbyBlbGl0LiBQZWxsZW50ZXNxdWUgYSBvcmNpIHR1cnBpcy4gUGVsbGVudGVzcXVlIGltcGVyZGlldCBsdWN0dXMgbmlzbCwgaW4gc2NlbGVyaXNxdWUgZXggY29uc2VxdWF0IGlkLlxuXG4gICAgICAgICAgICAgICAgRG9uZWMgc29sbGljaXR1ZGluLCBlcmF0IG5vbiBzY2VsZXJpc3F1ZSBtb2xlc3RpZSwgbWF1cmlzIGVyb3MgZmF1Y2lidXMgbG9yZW0sIHNlZCBiaWJlbmR1bSBtYXVyaXMgbmlzaSBzZWQgc2VtLiBNYXVyaXMgYXQgZGlnbmlzc2ltIGlwc3VtLiBVdCB0cmlzdGlxdWUsIGFyY3Ugbm9uIHZvbHV0cGF0IGVsZWlmZW5kLCByaXN1cyBlc3QgcG9ydHRpdG9yIG51bmMsIHF1aXMgbGFjaW5pYSBkdWkgZGlhbSBldCBsZWN0dXMuIERvbmVjIGRpZ25pc3NpbSBlbGVpZmVuZCBhbGlxdWFtLiBOdW5jIHRlbXBvciBsYW9yZWV0IGVuaW0sIHV0IGlhY3VsaXMgbmliaCB0ZW1wb3Igc2l0IGFtZXQuIE51bmMgbGFvcmVldCBsb3JlbSB2ZWxpdCwgZXUgbG9ib3J0aXMgdHVycGlzIHVsdHJpY2llcyBlZ2V0LiBTZWQgYWNjdW1zYW4gZmFjaWxpc2lzIHZlbGl0LCB2dWxwdXRhdGUgdmFyaXVzIGV4IGRhcGlidXMgbm9uLiBOYW0gYWxpcXVldCB1bHRyaWNlcyBlZmZpY2l0dXIuIFV0IG5lYyBzYXBpZW4gcG9zdWVyZSwgYWNjdW1zYW4gbGlndWxhIG5vbiwgbHVjdHVzIGF1Z3VlLiBWZXN0aWJ1bHVtIHRpbmNpZHVudCBpYWN1bGlzIG51bmMgc2l0IGFtZXQgdHJpc3RpcXVlLiBOdWxsYW0gaWQgYXJjdSB2aXRhZSBhcmN1IGZpbmlidXMgc29kYWxlcy4gRXRpYW0gc2VkIGFsaXF1ZXQgZWxpdCwgZWdldCBmcmluZ2lsbGEgbGVjdHVzLlxuXG4gICAgICAgICAgICAgICAgU2VkIGlhY3VsaXMganVzdG8gZXUganVzdG8gZWdlc3RhcywgbmVjIHBvc3VlcmUgZXJvcyBjdXJzdXMuIE1vcmJpIG1hdXJpcyBuaWJoLCBhY2N1bXNhbiBzaXQgYW1ldCBlc3Qgc2l0IGFtZXQsIGZyaW5naWxsYSBtb2xlc3RpZSBuZXF1ZS4gTnVuYyBldCB0dXJwaXMgcXVpcyBkaWFtIHBoYXJldHJhIHJ1dHJ1bS4gQWVuZWFuIGlkIG5lcXVlIGRpYW0uIERvbmVjIG5pYmggYXVndWUsIHZlbmVuYXRpcyBpbiBsb2JvcnRpcyB2ZWwsIHVsdHJpY2llcyBmaW5pYnVzIGFudGUuIERvbmVjIGlkIGN1cnN1cyBsZW8uIFNlZCBkaWduaXNzaW0gaXBzdW0gYXQgbW9sbGlzIHJob25jdXMuXG5cbiAgICAgICAgICAgICAgICBTdXNwZW5kaXNzZSBwb3J0dGl0b3Igc2NlbGVyaXNxdWUgbGliZXJvLCBpbiBhbGlxdWFtIHNlbSBlbGVpZmVuZCBzZWQuIE1hdXJpcyB2aXRhZSBwaGFyZXRyYSBsZW8uIFByYWVzZW50IGZyaW5naWxsYSBtZXR1cyBlZ2V0IGFudGUgbWF0dGlzLCBlZ2V0IGltcGVyZGlldCBlbGl0IGRpZ25pc3NpbS4gRG9uZWMgZXUgdm9sdXRwYXQgbmlzaS4gTmFtIGVnZXN0YXMgaXBzdW0gcHVydXMsIG5vbiBhbGlxdWV0IG9yY2kgcGVsbGVudGVzcXVlIG5vbi4gU2VkIHV0IHZlaGljdWxhIHVybmEsIG5vbiBmZXJtZW50dW0gcmlzdXMuIE5hbSBub24gZmV1Z2lhdCBsaWd1bGEsIHZlbCBjb25zZXF1YXQgZmVsaXMuIFN1c3BlbmRpc3NlIGluIHZlc3RpYnVsdW0gYW50ZS4gU2VkIG9ybmFyZSBhdWN0b3IgbGVvLCBzaXQgYW1ldCBtb2xlc3RpZSBpcHN1bSBjdXJzdXMgcXVpcy4gQ3JhcyBzZWQgc29sbGljaXR1ZGluIHB1cnVzLiBOdWxsYSBlZ2V0IHVsdHJpY2llcyBvcmNpLCBxdWlzIGdyYXZpZGEgbmlzbC4gVmVzdGlidWx1bSB2dWxwdXRhdGUgbGFjaW5pYSBjb21tb2RvLiBVdCBwbGFjZXJhdCBhbnRlIGF0IHN1c2NpcGl0IGZpbmlidXMuXG5cbiAgICAgICAgICAgICAgICBOdW5jIGdyYXZpZGEgbnVsbGEgcXVpcyB0ZWxsdXMgY29udmFsbGlzLCBuZWMgZWxlaWZlbmQgc2VtIHByZXRpdW0uIEFsaXF1YW0gZWxlaWZlbmQgZmFjaWxpc2lzIHBvcnR0aXRvci4gSW4gYW50ZSBlbmltLCBjdXJzdXMgdml0YWUgc29kYWxlcyBhYywgc2VtcGVyIGlkIGR1aS4gU3VzcGVuZGlzc2UgZXQgbmlzbCB1dCBkdWkgdWxsYW1jb3JwZXIgYmliZW5kdW0gZXQgdXQgZXJvcy4gTnVsbGFtIGlwc3VtIG1ldHVzLCBjb25zZWN0ZXR1ciB2aXRhZSBiaWJlbmR1bSBhLCBhbGlxdWFtIHNlZCBuZXF1ZS4gU3VzcGVuZGlzc2Ugc2VtcGVyIG5pYmggcmlzdXMsIHF1aXMgcG9ydHRpdG9yIHRvcnRvciBsb2JvcnRpcyBzaXQgYW1ldC4gRG9uZWMgaW50ZXJkdW0gbWkgZXQgbGFjaW5pYSBlbGVtZW50dW0uXG5cbiAgICAgICAgICAgICAgICBRdWlzcXVlIHRyaXN0aXF1ZSwgbGVjdHVzIG5lYyBjb25kaW1lbnR1bSBzYWdpdHRpcywgbnVuYyBvZGlvIGVnZXN0YXMgcHVydXMsIHF1aXMgZWZmaWNpdHVyIGxlbyBkaWFtIGVnZXQgc2VtLiBEb25lYyBpbiB1cm5hIG5lYyBzYXBpZW4gdGluY2lkdW50IHJ1dHJ1bS4gTnVuYyB2ZWhpY3VsYSBsZWN0dXMgbmVjIG1hZ25hIGNvbnNlY3RldHVyLCBhIHB1bHZpbmFyIG5pc2wgZnJpbmdpbGxhLiBRdWlzcXVlIHNlZCBtYXR0aXMgbGVjdHVzLiBTZWQgYXQgcGVsbGVudGVzcXVlIG1ldHVzLiBOdWxsYW0gc29sbGljaXR1ZGluIGZhY2lsaXNpcyBlZ2VzdGFzLiBNYWVjZW5hcyBoZW5kcmVyaXQgZXUgdGVsbHVzIG1hdHRpcyB1bHRyaWNpZXMuIFBoYXNlbGx1cyBkYXBpYnVzIGV1IG5pc2kgcXVpcyBsb2JvcnRpcy4gRXRpYW0gaW1wZXJkaWV0IHRpbmNpZHVudCBtaSwgc2VkIHZpdmVycmEgc2FwaWVuIGludGVyZHVtIHNlZC4gUGhhc2VsbHVzIGV1IGlhY3VsaXMgcXVhbSwgdmVsIHZhcml1cyBkaWFtLiBWaXZhbXVzIGF0IGVyb3MgdWxsYW1jb3JwZXIsIHZlaGljdWxhIG51bGxhIGV0LCB2ZXN0aWJ1bHVtIG1hc3NhLiBEb25lYyBtaSBsYWN1cywgZXVpc21vZCBpZCBsZW8gYSwgZGFwaWJ1cyBjb25kaW1lbnR1bSBsaWJlcm8uIFV0IHZpdGFlIG5lcXVlIHNpdCBhbWV0IG1hc3NhIGZyaW5naWxsYSBzYWdpdHRpcy4gRnVzY2UgcG9ydHRpdG9yIHRyaXN0aXF1ZSB0dXJwaXMsIGRpY3R1bSB2ZXN0aWJ1bHVtIGp1c3RvLlxuXG4gICAgICAgICAgICAgICAgTmFtIGFjIGF1Y3RvciBwdXJ1cy4gQWVuZWFuIHJob25jdXMgcmlzdXMgaW4gdHVycGlzIGNvbnNlcXVhdCwgcXVpcyBlZ2VzdGFzIGVyb3MgbW9sZXN0aWUuIE51bGxhIGFsaXF1ZXQsIG9yY2kgZXUgdWx0cmljZXMgbW9sZXN0aWUsIGxvcmVtIG5pc2kgcHVsdmluYXIgbmlzaSwgaWQgYmliZW5kdW0gcXVhbSBqdXN0byBxdWlzIG51bGxhLiBQcmFlc2VudCBuZWMgZXN0IGV0IHRlbGx1cyBydXRydW0gdHJpc3RpcXVlLiBTdXNwZW5kaXNzZSBpbiBhcmN1IGR1aS4gTWFlY2VuYXMgZmFjaWxpc2lzIG1hdXJpcyBpbiBlbmltIHRyaXN0aXF1ZSBiaWJlbmR1bS4gTnVuYyB1bGxhbWNvcnBlciB2ZWhpY3VsYSBtaSwgc2VkIHJ1dHJ1bSBtYWduYSBzb2RhbGVzIHZpdGFlLiBEb25lYyBsaWd1bGEgdHVycGlzLCBsb2JvcnRpcyBzZWQgcG9ydHRpdG9yIHF1aXMsIGZhdWNpYnVzIGFjIHR1cnBpcy4gTnVsbGFtIGN1cnN1cyB2b2x1dHBhdCBjb25ndWUuIFNlZCB0ZW1wdXMgYXJjdSBldCBiaWJlbmR1bSBzZW1wZXIuIERvbmVjIGF0IHRpbmNpZHVudCBlcmF0LCB2aXRhZSBzYWdpdHRpcyB1cm5hLlxuXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBibGFuZGl0IGltcGVyZGlldCBqdXN0byBlZ2V0IHVsdHJpY2VzLiBEb25lYyB2aXRhZSBudWxsYSBxdWlzIGZlbGlzIGxhb3JlZXQgZmVybWVudHVtIHF1aXMgdmVsIGxlby4gUGhhc2VsbHVzIHZ1bHB1dGF0ZSwgbnVsbGEgdmVsIHZlc3RpYnVsdW0gc29sbGljaXR1ZGluLCBqdXN0byBuZXF1ZSBhbGlxdWFtIGV4LCBhYyBtYXhpbXVzIGFyY3UgdmVsaXQgc2VkIG5pc2kuIFBlbGxlbnRlc3F1ZSBsb3JlbSBtYWduYSwgY3Vyc3VzIHNlZCBtYWduYSBpbiwgc29kYWxlcyB2b2x1dHBhdCBkaWFtLiBJbnRlZ2VyIHBvc3VlcmUgYW50ZSBhbnRlLCBpbiBwb3J0dGl0b3IgdG9ydG9yIG1heGltdXMgc2VkLiBOdW5jIGFjIG51bGxhIGZlcm1lbnR1bSwgbWF4aW11cyB1cm5hIHF1aXMsIGNvbnZhbGxpcyBlcmF0LiBJbnRlZ2VyIGV1aXNtb2QgcnV0cnVtIG5pc2ksIG5lYyBtb2xlc3RpZSBuaWJoIGV1aXNtb2QgaW4uIE51bGxhbSBpZCBtYXNzYSBpbiBtYXNzYSBsYW9yZWV0IGNvbW1vZG8gaW4gdml0YWUgbnVuYy4gTnVuYyBhY2N1bXNhbiBvZGlvIGEgbnVuYyBpYWN1bGlzIHBoYXJldHJhLiBQaGFzZWxsdXMgbW9sbGlzIGZpbmlidXMgbGVjdHVzIHNlZCBtb2xsaXMuIERvbmVjIGV0IGF1Z3VlIHF1aXMgbWkgZWxlaWZlbmQgZWdlc3Rhcy4gU2VkIHF1aXMgYWNjdW1zYW4gdHVycGlzLlxuXG4gICAgICAgICAgICAgICAgRHVpcyB0ZWxsdXMgcXVhbSwgY29udmFsbGlzIHRpbmNpZHVudCBuaWJoIG5lYywgZWZmaWNpdHVyIHNvbGxpY2l0dWRpbiBuaXNsLiBTdXNwZW5kaXNzZSBibGFuZGl0IGVnZXQgZXJhdCB1dCBkaWduaXNzaW0uIEZ1c2NlIHNlZCBlbmltIGFjIGxvcmVtIGlhY3VsaXMgcGVsbGVudGVzcXVlIGVnZXQgdml0YWUgb2Rpby4gQWxpcXVhbSBkaWduaXNzaW0gZW5pbSB0dXJwaXMsIHNlZCBmYWNpbGlzaXMgZXJhdCB2b2x1dHBhdCB0ZW1wb3IuIFZlc3RpYnVsdW0gbHVjdHVzIGxhY3VzIHNvZGFsZXMsIHVsdHJpY2VzIG51bGxhIGlkLCBzb2xsaWNpdHVkaW4gdHVycGlzLiBWZXN0aWJ1bHVtIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzIG9yY2kgbHVjdHVzIGV0IHVsdHJpY2VzIHBvc3VlcmUgY3ViaWxpYSBjdXJhZTsgQWVuZWFuIHNpdCBhbWV0IGxpZ3VsYSBhbnRlLiBNYWVjZW5hcyBwcmV0aXVtIGlkIHB1cnVzIGVsZW1lbnR1bSBkYXBpYnVzLiBTZWQgZW5pbSBsYWN1cywgbW9sZXN0aWUgaWQgdG9ydG9yIGV1LCBncmF2aWRhIGdyYXZpZGEgc2FwaWVuLiBVdCBhdWN0b3Igc29sbGljaXR1ZGluIHVybmEgZXQgZGljdHVtLlxuXG4gICAgICAgICAgICAgICAgTnVsbGEgbWF4aW11cyBtaSBzZWQgcG9ydHRpdG9yIG1heGltdXMuIFNlZCB2b2x1dHBhdCBkb2xvciBuZWMgbGVjdHVzIG9ybmFyZSB2YXJpdXMuIFZpdmFtdXMgYWxpcXVldCBwdXJ1cyBuaWJoLCBldSBjb25kaW1lbnR1bSBtYWduYSB0aW5jaWR1bnQgaWQuIFNlZCBoZW5kcmVyaXQgcmlzdXMgYSBvcm5hcmUgYmliZW5kdW0uIFByb2luIG5lYyB0dXJwaXMgYXVjdG9yLCBydXRydW0gYXVndWUgc2l0IGFtZXQsIGZldWdpYXQgZHVpLiBJbnRlZ2VyIGluIGZpbmlidXMgbWFnbmEuIFZpdmFtdXMgZXUgbG9ib3J0aXMgbWV0dXMsIG5vbiBzY2VsZXJpc3F1ZSBuZXF1ZS4gQWVuZWFuIGNvbnZhbGxpcyBlcmF0IGxpZ3VsYSwgdmVsIGJpYmVuZHVtIG51bmMgcmhvbmN1cyBhdC4gQWVuZWFuIGZlbGlzIG1hZ25hLCByaG9uY3VzIG5vbiBzb2xsaWNpdHVkaW4gZXQsIHB1bHZpbmFyIGV0IHB1cnVzLiBOdW5jIHNlZCBhdWd1ZSB2dWxwdXRhdGUsIHRyaXN0aXF1ZSBvcmNpIGF0LCBsYW9yZWV0IG1ldHVzLiBVdCB1bGxhbWNvcnBlciBmaW5pYnVzIG9kaW8sIHNlZCBmcmluZ2lsbGEgdXJuYSBpbnRlcmR1bSBzZWQuIE1vcmJpIGlkIHZpdmVycmEgYW50ZSwgcXVpcyBzZW1wZXIgbWV0dXMuIFBoYXNlbGx1cyBkdWkgZGlhbSwgdHJpc3RpcXVlIGluIHZ1bHB1dGF0ZSBpZCwgc29kYWxlcyB2ZWwgbmVxdWUuIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gRHVpcyB2YXJpdXMgZW5pbSBuZWMgbGlndWxhIHNvZGFsZXMgbWFsZXN1YWRhLiBNYXVyaXMgbWV0dXMgbnVsbGEsIGVsZWlmZW5kIG5lYyBuaXNpIGluLCBtYXhpbXVzIHRlbXBvciBkb2xvci5cblxuICAgICAgICAgICAgICAgIEN1cmFiaXR1ciBwcmV0aXVtIGFjIGVyb3Mgbm9uIGZhY2lsaXNpcy4gUXVpc3F1ZSBtb2xsaXMgdm9sdXRwYXQgcmhvbmN1cy4gQ3VyYWJpdHVyIGV1IGltcGVyZGlldCBzYXBpZW4uIFByYWVzZW50IGFjY3Vtc2FuLCBuaWJoIHZpdGFlIG1hdHRpcyBwcmV0aXVtLCBpcHN1bSBleCBjb25zZWN0ZXR1ciBvcmNpLCBlZmZpY2l0dXIgZmluaWJ1cyBxdWFtIGV4IGV1IGxlby4gTnVsbGEgc29kYWxlcyBsb2JvcnRpcyBkaWFtIHZlbCBkaWduaXNzaW0uIFByb2luIGRpY3R1bSwgbmlzaSBzZWQgc2FnaXR0aXMgcGhhcmV0cmEsIGV4IGxlbyBsdWN0dXMgbWF1cmlzLCBpZCBjb25zZXF1YXQgZWxpdCBsaWd1bGEgYSBzZW0uIEluIHBlbGxlbnRlc3F1ZSB1cm5hIGxhY3VzLCBhYyBjb25zZWN0ZXR1ciBudW5jIGNvbmRpbWVudHVtIGEuIEFlbmVhbiBydXRydW0gb3JuYXJlIG51bGxhIGluIGNvbnNlY3RldHVyLiBOYW0gb2RpbyB1cm5hLCBmYXVjaWJ1cyB2ZWwgbmlzaSBhLCBwcmV0aXVtIHRpbmNpZHVudCB0b3J0b3IuIENyYXMgdGluY2lkdW50IGJsYW5kaXQgc2FwaWVuIGV1IGxhY2luaWEuIFBoYXNlbGx1cyBjb25zZXF1YXQgbGVjdHVzIGF0IHZhcml1cyBydXRydW0uIE1hZWNlbmFzIGV1aXNtb2QgbmlzbCBzb2RhbGVzIHNvbGxpY2l0dWRpbiBzZW1wZXIuIEN1cmFiaXR1ciBncmF2aWRhIHVybmEgbGliZXJvLCBldCBsYW9yZWV0IHR1cnBpcyBhY2N1bXNhbiB1dC5cblxuICAgICAgICAgICAgICAgIFN1c3BlbmRpc3NlIGZhdWNpYnVzIG1hdXJpcyBzaXQgYW1ldCBsaWJlcm8gcHJldGl1bSBsYWNpbmlhLiBQZWxsZW50ZXNxdWUgZ3JhdmlkYSwgbWV0dXMgZWxlbWVudHVtIGlhY3VsaXMgY29udmFsbGlzLCBlbGl0IHR1cnBpcyBwcmV0aXVtIGVuaW0sIG1vbGVzdGllIHRlbXBvciBhbnRlIGlwc3VtIHNpdCBhbWV0IHRlbGx1cy4gRG9uZWMgY29tbW9kbyBuaXNsIGF0IGRhcGlidXMgdGluY2lkdW50LiBOYW0gbW9sbGlzIG5pYmggcXVpcyBwb3J0dGl0b3IgYmxhbmRpdC4gVmVzdGlidWx1bSBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cyBvcmNpIGx1Y3R1cyBldCB1bHRyaWNlcyBwb3N1ZXJlIGN1YmlsaWEgY3VyYWU7IFBoYXNlbGx1cyBldSB0aW5jaWR1bnQgbnVuYy4gRXRpYW0gc2l0IGFtZXQgZG9sb3IgY29uc2VxdWF0LCBydXRydW0gb2RpbyBhLCBpYWN1bGlzIHZlbGl0LiBEb25lYyBhbGlxdWV0IG5pc2kgbWFnbmEsIHZpdGFlIHBvcnRhIGxpZ3VsYSBjb25kaW1lbnR1bSBldC4gQ3VyYWJpdHVyIHNvbGxpY2l0dWRpbiBsb3JlbSB1cm5hLCBxdWlzIHZlc3RpYnVsdW0ganVzdG8gZmVybWVudHVtIHZpdGFlLiBWZXN0aWJ1bHVtIGFsaXF1YW0gdGluY2lkdW50IHNhcGllbiwgZ3JhdmlkYSBoZW5kcmVyaXQgZXggYmliZW5kdW0gYWMuIE9yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFN1c3BlbmRpc3NlIHNpdCBhbWV0IG51bmMgZXQgbG9yZW0gY29uZ3VlIHZvbHV0cGF0IHV0IHF1aXMgZHVpLlxuXG4gICAgICAgICAgICAgICAgTnVsbGFtIHBoYXJldHJhIG1hbGVzdWFkYSBtZXR1cywgc2l0IGFtZXQgbW9sZXN0aWUgZG9sb3IgcHVsdmluYXIgcXVpcy4gRnVzY2UgaW4gZWxpdCBlbGVtZW50dW0sIGZhY2lsaXNpcyBudW5jIGF0LCBzY2VsZXJpc3F1ZSBlbmltLiBVdCBmZXJtZW50dW0gbW9sZXN0aWUgYWNjdW1zYW4uIFNlZCBudW5jIG1hdXJpcywgZXVpc21vZCBpZCBlbmltIGVnZXQsIHByZXRpdW0gY29tbW9kbyB0dXJwaXMuIE1hdXJpcyBxdWlzIHBsYWNlcmF0IG5lcXVlLiBOYW0gdml0YWUgbWkgaWQgZGlhbSBncmF2aWRhIHNlbXBlci4gTmFtIG1vbGVzdGllIGF0IHB1cnVzIHNpdCBhbWV0IHRpbmNpZHVudC4gRG9uZWMgc2VkIG5pc2wgYWxpcXVhbSwgc29kYWxlcyBzZW0gYXQsIGZhY2lsaXNpcyBvcmNpLiBDdXJhYml0dXIgaWQgc2FwaWVuIHNpdCBhbWV0IGFudGUgZGFwaWJ1cyBtYXhpbXVzLlxuXG4gICAgICAgICAgICAgICAgVml2YW11cyBvZGlvIHZlbGl0LCB2ZW5lbmF0aXMgdml0YWUgYW50ZSBldSwgZmV1Z2lhdCB1bHRyaWNlcyBtYXVyaXMuIFByYWVzZW50IHZlc3RpYnVsdW0gZmV1Z2lhdCB0b3J0b3IgcXVpcyB1bGxhbWNvcnBlci4gUXVpc3F1ZSBkYXBpYnVzIG1pIGlkIGxpYmVybyBncmF2aWRhIHVsbGFtY29ycGVyLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBJbnRlZ2VyIG5lYyBmaW5pYnVzIGR1aS4gU3VzcGVuZGlzc2UgZmV1Z2lhdCBwbGFjZXJhdCB0ZWxsdXMsIGV0IGNvbmRpbWVudHVtIHF1YW0gZmFjaWxpc2lzIGFsaXF1YW0uIEN1cmFiaXR1ciBlcmF0IGxlbywgbGFvcmVldCBub24gZXJvcyBub24sIHZvbHV0cGF0IGhlbmRyZXJpdCBleC4gUHJvaW4gZXUgbWFnbmEgc2FnaXR0aXMsIGFsaXF1YW0gbGlndWxhIHF1aXMsIGNvbnZhbGxpcyBqdXN0by4gUGhhc2VsbHVzIG51bGxhIGFudGUsIGRpY3R1bSBzYWdpdHRpcyBlcm9zIGV0LCBwdWx2aW5hciB0ZW1wdXMgbWFzc2EuIFV0IHRvcnRvciBvZGlvLCB2ZWhpY3VsYSBhIGZlbGlzIHZlbCwgdml2ZXJyYSBwb3N1ZXJlIGVsaXQuIE51bmMgbm9uIHBvc3VlcmUgbmlzbC4gU2VkIGZhY2lsaXNpcyBsZWN0dXMgYXQgZXN0IG1hbGVzdWFkYSwgcG9ydGEgbWF0dGlzIGF1Z3VlIGZpbmlidXMuIFV0IGFsaXF1ZXQgYmliZW5kdW0gaWFjdWxpcy5cblxuICAgICAgICAgICAgICAgIER1aXMgc2l0IGFtZXQgY29uZ3VlIG1hZ25hLiBNYWVjZW5hcyBjb25ndWUgZGljdHVtIGV1aXNtb2QuIEFlbmVhbiBuaWJoIHZlbGl0LCBhdWN0b3Igdml0YWUgdG9ydG9yIHF1aXMsIGNvbmd1ZSBwZWxsZW50ZXNxdWUgbmlzaS4gSW50ZWdlciBsYW9yZWV0IG1hZ25hIHF1aXMgbGlndWxhIHJ1dHJ1bSBlZmZpY2l0dXIuIFNlZCBsaWd1bGEgZXgsIGVsZW1lbnR1bSBzaXQgYW1ldCBuZXF1ZSBhdCwgZGljdHVtIGZldWdpYXQgcHVydXMuIFNlZCBiaWJlbmR1bSwgbWFnbmEgYSBzdXNjaXBpdCB1bHRyaWNpZXMsIHF1YW0gZmVsaXMgZGFwaWJ1cyBhdWd1ZSwgbmVjIGVmZmljaXR1ciB0ZWxsdXMgbWF1cmlzIHZlbCBuaXNsLiBJbnRlZ2VyIHNlZCBhcmN1IGVyYXQuIEN1cmFiaXR1ciBhcmN1IG9kaW8sIGdyYXZpZGEgcnV0cnVtIGZhY2lsaXNpcyBpbiwgZXVpc21vZCBxdWlzIGlwc3VtLiBJbiBjdXJzdXMgZGlhbSBldSBpYWN1bGlzIGZhY2lsaXNpcy4gUGVsbGVudGVzcXVlIGlkIG51bmMgbmlzaS4gRHVpcyBldSBuaXNpIGRpZ25pc3NpbSwgcmhvbmN1cyBtYWduYSB2aXRhZSwgZ3JhdmlkYSBtaS4gTWFlY2VuYXMgc2FnaXR0aXMgc2FnaXR0aXMgZG9sb3IgYSBsdWN0dXMuIEFsaXF1YW0gc2FnaXR0aXMgZWxpdCBudW5jLCB2aXRhZSBkYXBpYnVzIG51bmMgcGVsbGVudGVzcXVlIHF1aXMuIFZpdmFtdXMgcG9ydHRpdG9yIG1hZ25hIG5lYyB1cm5hIHZpdmVycmEsIGFjIHNjZWxlcmlzcXVlIGxlbyBsYW9yZWV0LiBJbiBhY2N1bXNhbiBldWlzbW9kIGx1Y3R1cy4gTWFlY2VuYXMgc29sbGljaXR1ZGluIGV1IHRvcnRvciBzZWQgaWFjdWxpcy5cblxuICAgICAgICAgICAgICAgIFBoYXNlbGx1cyBxdWlzIGZhY2lsaXNpcyBuaXNsLCBuZWMgdWxsYW1jb3JwZXIgbWV0dXMuIEFlbmVhbiBhY2N1bXNhbiBxdWFtIHZlbGl0LCBpZCBjb252YWxsaXMgZGlhbSBtYXhpbXVzIGNvbnNlcXVhdC4gRG9uZWMgbG9ib3J0aXMgY29tbW9kbyBtb2xlc3RpZS4gTWFlY2VuYXMgcXVpcyBzYXBpZW4gdm9sdXRwYXQsIHJob25jdXMgbGVvIGluLCB2ZW5lbmF0aXMgcXVhbS4gUGhhc2VsbHVzIHZpdGFlIHJob25jdXMgbnVuYywgYSBydXRydW0gbWkuIE1hdXJpcyBhbGlxdWV0LCB1cm5hIGFjIGRpZ25pc3NpbSBtYXhpbXVzLCBtYWduYSB0b3J0b3IgcnV0cnVtIG5pYmgsIGEgY29uc2VxdWF0IG1hc3NhIGxpZ3VsYSB1dCBvcmNpLiBTZWQgbWF4aW11cywgbmVxdWUgYSBldWlzbW9kIGZhY2lsaXNpcywgbGVjdHVzIGVzdCB1bHRyaWNlcyByaXN1cywgcXVpcyBjb25kaW1lbnR1bSBzZW0gZXggbm9uIGxhY3VzLlxuXG4gICAgICAgICAgICAgICAgQWxpcXVhbSBhbnRlIGxlY3R1cywgaW50ZXJkdW0gaW4gdWxsYW1jb3JwZXIgc2l0IGFtZXQsIGV1aXNtb2QgaWQgbGliZXJvLiBNb3JiaSBwb3N1ZXJlIGxhY2luaWEgdmVuZW5hdGlzLiBJbnRlZ2VyIHJ1dHJ1bSwgdGVsbHVzIHNpdCBhbWV0IHZ1bHB1dGF0ZSBwdWx2aW5hciwgZXggbWFnbmEgc29kYWxlcyB2ZWxpdCwgYWMgaW1wZXJkaWV0IGxpYmVybyBxdWFtIGF0IG51bmMuIFNlZCB2ZW5lbmF0aXMgbnVsbGEgbGFjdXMsIGV1IHJob25jdXMgZGlhbSBhdWN0b3Igbm9uLiBRdWlzcXVlIHBlbGxlbnRlc3F1ZSBtaSBzZWQgdG9ydG9yIHVsbGFtY29ycGVyIGNvbmRpbWVudHVtLiBDcmFzIHNlbSBsb3JlbSwgc2FnaXR0aXMgaW4gYXVjdG9yIHF1aXMsIGNvbnNlY3RldHVyIGluIHNlbS4gTnVsbGFtIHZpdGFlIHZ1bHB1dGF0ZSB0b3J0b3IsIGEgdGluY2lkdW50IGVyb3MuIE51bGxhIGFsaXF1YW0gZHVpIG5vbiBvZGlvIGhlbmRyZXJpdCwgdmVsIHVsbGFtY29ycGVyIGR1aSB0ZW1wb3IuIFNlZCBsYW9yZWV0IHR1cnBpcyBxdWFtLCBldCBtb2xsaXMgbWkgdHJpc3RpcXVlIHNpdCBhbWV0LiBDdXJhYml0dXIgbm9uIGxhY3VzIHBoYXJldHJhLCB2aXZlcnJhIHNhcGllbiB2aXRhZSwgc2FnaXR0aXMgcmlzdXMuIE51bGxhbSBmZXVnaWF0IG9yY2kgbmVxdWUsIHNlZCBzZW1wZXIgbGliZXJvIGNvbnNlY3RldHVyIGF0LiBWaXZhbXVzIGJsYW5kaXQganVzdG8gYSB2ZWxpdCBkaWN0dW0gaWFjdWxpcy4gTW9yYmkgcG9ydHRpdG9yIG5pc2wgbm9uIGZlbGlzIGdyYXZpZGEsIHNpdCBhbWV0IGNvbnNlcXVhdCBsZWN0dXMgdnVscHV0YXRlLiBQcm9pbiBzb2RhbGVzLCB1cm5hIG5vbiBwdWx2aW5hciBjb25zZXF1YXQsIHNhcGllbiB2ZWxpdCBncmF2aWRhIG1hc3NhLCBvcm5hcmUgY29uc2VxdWF0IG9yY2kgZXN0IHBvcnRhIGp1c3RvLiBRdWlzcXVlIG5vbiBsaWd1bGEgbGlndWxhLiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXG5cbiAgICAgICAgICAgICAgICBEb25lYyBxdWlzIHNhZ2l0dGlzIG1hdXJpcy4gVml2YW11cyBhdCBhbnRlIGEgZHVpIHRyaXN0aXF1ZSBzZW1wZXIgdmVsIGFjIGxlY3R1cy4gQ3JhcyBzZWQgdG9ydG9yIG9kaW8uIEN1cmFiaXR1ciBhdCBwb3J0YSBuaWJoLiBTdXNwZW5kaXNzZSBjb21tb2RvIHRvcnRvciBhYyBydXRydW0gZnJpbmdpbGxhLiBTdXNwZW5kaXNzZSB1dCBkb2xvciB2aXRhZSBmZWxpcyBzb2RhbGVzIGZhdWNpYnVzLiBWZXN0aWJ1bHVtIHNlbXBlciwgbWV0dXMgdml0YWUgdGVtcHVzIHRlbXB1cywgZGlhbSBqdXN0byBncmF2aWRhIHRlbGx1cywgc2l0IGFtZXQgcG9zdWVyZSBxdWFtIGlwc3VtIHNpdCBhbWV0IHRvcnRvci4gTWFlY2VuYXMgZXJvcyBhdWd1ZSwgcGxhY2VyYXQgYSBudWxsYSBub24sIGZldWdpYXQgcmhvbmN1cyBkaWFtLiBWaXZhbXVzIHNlZCBwcmV0aXVtIHNlbS4gRXRpYW0gc2NlbGVyaXNxdWUsIGVyYXQgaW4gcG9ydHRpdG9yIG1vbGxpcywgZG9sb3IgbGFjdXMgcG9ydHRpdG9yIGxhY3VzLCB2ZWwgcnV0cnVtIHVybmEgZG9sb3Igdml0YWUganVzdG8uIERvbmVjIGJpYmVuZHVtIHZpdmVycmEgdmFyaXVzLiBEb25lYyBmZXVnaWF0IG1hZ25hIGlkIG1hZ25hIHBoYXJldHJhLCBub24gdmVuZW5hdGlzIGxlY3R1cyBwb3J0YS4gSW4gYXJjdSBuaWJoLCBoZW5kcmVyaXQgZXUgZXN0IG5lYywgdmVoaWN1bGEgZXVpc21vZCBsZWN0dXMuIE51bGxhbSBhIG1vbGVzdGllIHRlbGx1cy4gTWFlY2VuYXMgZ3JhdmlkYSBzb2xsaWNpdHVkaW4gZmF1Y2lidXMuIEN1cmFiaXR1ciB2aXRhZSB2ZXN0aWJ1bHVtIG1ldHVzLlxuXG4gICAgICAgICAgICAgICAgTnVsbGEgZWdldCBsZWN0dXMgYXQgb3JjaSBiaWJlbmR1bSBwdWx2aW5hci4gRG9uZWMgcHJldGl1bSBtYWduYSBhIG1hc3NhIHNjZWxlcmlzcXVlIGVsZW1lbnR1bS4gU3VzcGVuZGlzc2UgYWMgZ3JhdmlkYSBlc3QuIE1hZWNlbmFzIG9ybmFyZSBkdWkgZW5pbSwgc2VkIHNvZGFsZXMgdGVsbHVzIHN1c2NpcGl0IHF1aXMuIFByb2luIGZldWdpYXQgbGFjdXMgdXQgbGliZXJvIHRlbXB1cyBjdXJzdXMuIER1aXMgZWdlc3RhcywgYXVndWUgcXVpcyBkYXBpYnVzIHVsdHJpY2llcywgbWkgbnVuYyBjb25kaW1lbnR1bSBzYXBpZW4sIGV0IHRpbmNpZHVudCBlc3QgdG9ydG9yIHNpdCBhbWV0IGRvbG9yLiBQaGFzZWxsdXMgZXUgbGFjdXMgdml2ZXJyYSwgb3JuYXJlIHVybmEgdmVsLCBjb25zZXF1YXQgcHVydXMuXG5cbiAgICAgICAgICAgICAgICBDdXJhYml0dXIgYXQgb3JuYXJlIG5lcXVlLCBxdWlzIGZhY2lsaXNpcyBlbGl0LiBTZWQgdmVsIG1hdXJpcyBpbiBkaWFtIGNvbW1vZG8gc29sbGljaXR1ZGluLiBOdW5jIGEgY3Vyc3VzIG5pc2wsIGF0IHJob25jdXMgZXguIER1aXMgb3JuYXJlIHVybmEgbm9uIG5pYmggZ3JhdmlkYSwgbmVjIGFjY3Vtc2FuIHR1cnBpcyBzb2RhbGVzLiBQZWxsZW50ZXNxdWUgc2l0IGFtZXQgdWx0cmljaWVzIHVybmEuIE1hdXJpcyB2ZWwgZmVybWVudHVtIGxvcmVtLiBDdXJhYml0dXIgbGFvcmVldCwgcHVydXMgdmVsIGZldWdpYXQgZmV1Z2lhdCwgdmVsaXQganVzdG8gbHVjdHVzIG1pLCBhIG1vbGxpcyBzZW0gbGVvIHZpdGFlIG1hdXJpcy4gVmVzdGlidWx1bSBkaWduaXNzaW0gdGVtcHVzIGV4IGV1IGZhdWNpYnVzLiBBbGlxdWFtIGVnZXQgbGVvIGV1IGFyY3UgZGljdHVtIGJsYW5kaXQuIFBlbGxlbnRlc3F1ZSB1bGxhbWNvcnBlciBsYWN1cyBwdWx2aW5hciB0dXJwaXMgdmVuZW5hdGlzIHZvbHV0cGF0LiBOdWxsYSBlZmZpY2l0dXIgcGVsbGVudGVzcXVlIHRlbGx1cywgdml0YWUgb3JuYXJlIG9kaW8gZmFjaWxpc2lzIGlkLiBQcmFlc2VudCBlZ2V0IGp1c3RvIHR1cnBpcy4gQ3VyYWJpdHVyIGNvbmRpbWVudHVtLCBsYWN1cyB1dCB2YXJpdXMgbW9sbGlzLCBuZXF1ZSByaXN1cyBmYXVjaWJ1cyBtaSwgc2l0IGFtZXQgbG9ib3J0aXMgbGVvIGlwc3VtIGVnZXQgb2Rpby4gU2VkIHNlbXBlciB2ZXN0aWJ1bHVtIGxpYmVybywgYWMgZmV1Z2lhdCBuaWJoIHRyaXN0aXF1ZSBpZC4gSW4gYWxpcXVhbSBlZ2V0IHRlbGx1cyBpbiBjb21tb2RvLiBDcmFzIHNvZGFsZXMgc2VtcGVyIG5pc2wsIG5lYyBldWlzbW9kIGxlbyB1bGxhbWNvcnBlciBldC5cblxuICAgICAgICAgICAgICAgIEV0aWFtIHNlZCBwbGFjZXJhdCBtaS4gSW4gcGVsbGVudGVzcXVlIGN1cnN1cyBlcm9zIGluIGhlbmRyZXJpdC4gSW4gZmFjaWxpc2lzLCBtZXR1cyBhdCB2dWxwdXRhdGUgcHVsdmluYXIsIGZlbGlzIGVuaW0gZWZmaWNpdHVyIGFudGUsIGEgbGFvcmVldCBhdWd1ZSBkaWFtIHV0IGxpZ3VsYS4gTWFlY2VuYXMgbGVjdHVzIHRvcnRvciwgcGxhY2VyYXQgZXUgdGluY2lkdW50IHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhIG9kaW8uIERvbmVjIHZlbCBsb3JlbSBlcm9zLiBNb3JiaSBldCBlZmZpY2l0dXIgdG9ydG9yLCB2aXRhZSB2aXZlcnJhIGxvcmVtLiBDcmFzIGVsaXQgYW50ZSwgYXVjdG9yIGVnZXQgdHVycGlzIHNpdCBhbWV0LCBhY2N1bXNhbiBsYW9yZWV0IGFyY3UuIERvbmVjIHZlbCBkaWN0dW0gdmVsaXQuIEZ1c2NlIHV0IHZlbmVuYXRpcyBtYWduYS4gQ3JhcyBsYWNpbmlhIHVybmEgYSBsYWNpbmlhIGZldWdpYXQuIFV0IGF0IG9kaW8gdXQgbmVxdWUgdGluY2lkdW50IG1hbGVzdWFkYSBxdWlzIG5lYyBsYWN1cy4gRG9uZWMgZXVpc21vZCBmZWxpcyBpZCBjb25zZWN0ZXR1ciBlbGVpZmVuZC4gRXRpYW0gbmVjIGlwc3VtIGV1IG5pYmggbWF4aW11cyBhbGlxdWV0LiBBZW5lYW4gbmVjIGludGVyZHVtIHRvcnRvci5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tIFwiLi9NZW51T3B0aW9uXCI7XG5pbXBvcnQgeyBJTklUX1NUWUxFLCBzYXZlUGFnZSB9IGZyb20gXCIuLi9DcmVhdGVQYWdlV3JhcHBlclwiO1xuaW1wb3J0IHtcbiAgICBOYXZiYXJFZGl0b3IsXG4gICAgQm9keUVkaXRvcixcbiAgICBTaWRlYmFyRWRpdG9yLFxuICAgIFNlY3Rpb25zRWRpdG9yLFxuICAgIEZvb3RlckVkaXRvclxufSBmcm9tIFwiLi9FbGVtZW50RWRpdG9yc1wiO1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlTWVudSA9ICh7c3RvcmUsIGRpc3BhdGNofSkgPT4ge1xuICAgIHN0b3JlLm5hdmJhciA9IHN0b3JlLm5hdmJhciB8fCB7fTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjcmVhdGUtbWVudVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIiBvbkNsaWNrPXsoKSA9PiBzYXZlUGFnZShzdG9yZSl9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uIHRleHQ9XCJOYXZiYXJcIiBjb250ZW50PXs8TmF2YmFyRWRpdG9yIG5hdmJhcj17c3RvcmUubmF2YmFyIHx8IElOSVRfU1RZTEUubmF2YmFyfSBkaXNwYXRjaD17ZGlzcGF0Y2h9Lz59Lz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uIHRleHQ9XCJCb2R5XCIgY29udGVudD17PEJvZHlFZGl0b3IgYm9keT17c3RvcmUuYm9keSB8fCB7fX0gZGlzcGF0Y2g9e2Rpc3BhdGNofS8+fS8+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiU2lkZWJhclwiIGNvbnRlbnQ9ezxTaWRlYmFyRWRpdG9yLz59Lz5cbiAgICAgICAgICAgIDxNZW51T3B0aW9uIHRleHQ9XCJTZWN0aW9uc1wiIGNvbnRlbnQ9ezxTZWN0aW9uc0VkaXRvci8+fS8+XG4gICAgICAgICAgICA8TWVudU9wdGlvbiB0ZXh0PVwiRm9vdGVyXCIgY29udGVudD17PEZvb3RlckVkaXRvci8+fS8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dENvbG9yIGZyb20gJ3JlYWN0LWlucHV0LWNvbG9yJztcbmltcG9ydCB7IEFDVElPTlMsIElOSVRfU1RZTEUgfSBmcm9tIFwiLi4vQ3JlYXRlUGFnZVdyYXBwZXJcIjtcblxuZXhwb3J0IGNvbnN0IE5hdmJhckVkaXRvciA9ICh7XG4gICAgICAgIG5hdmJhcixcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JnQ29sb3IsIHNldEJnQ29sb3JdID0gdXNlU3RhdGUobmF2YmFyLmJhY2tncm91bmRDb2xvciB8fCAnI2ZmZmZmZicpO1xuICAgIGNvbnN0IFt0ZXh0Q29sb3IsIHNldFRleHRDb2xvcl0gPSB1c2VTdGF0ZShuYXZiYXIuY29sb3IgfHwgJyMwMDAwMDAnKTtcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUobmF2YmFyLmhlaWdodCB8fCA1KTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3IgbmF2YmFyLWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNmZmZmZmYnfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCZ0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuTkFWQkFSX0JBQ0tHUk9VTkRfQ09MT1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgdGV4dCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e25hdmJhci5jb2xvciB8fCAnIzAwMDAwMCd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfVEVYVF9DT0xPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50LWVkaXRvci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgaGVpZ2h0OlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQUNUSU9OUy5OQVZCQVJfSEVJR0hULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke2UudGFyZ2V0LnZhbHVlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhlaWdodChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBCb2R5RWRpdG9yID0gKHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgZGlzcGF0Y2hcbiAgICB9KSA9PiB7XG4gICAgY29uc3QgW2JhY2tncm91bmRDb2xvciwgc2V0QmFja2dyb3VuZENvbG9yXSA9IHVzZVN0YXRlKGJvZHkuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJyk7XG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShib2R5LmNvbG9yIHx8ICcjMDAwMDAwJyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgYmFja2dyb3VuZCBjb2xvcjpcbiAgICAgICAgICAgICAgICA8SW5wdXRDb2xvclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU9e2JvZHkuYmFja2dyb3VuZENvbG9yIHx8ICcjZmZmZmZmJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuQk9EWV9CQUNLR1JPVU5EX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlLmhleFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudC1lZGl0b3ItaXRlbVwiPlxuICAgICAgICAgICAgICAgIHRleHQgY29sb3I6XG4gICAgICAgICAgICAgICAgPElucHV0Q29sb3JcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlPXtib2R5LmNvbG9yIHx8ICcjMDAwMDAwJ31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFDVElPTlMuQk9EWV9URVhUX0NPTE9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGUuaGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTaWRlYmFyRWRpdG9yID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tbWVudS1lZGl0b3JcIj5cbiAgICAgICAgICAgIFNJREVCQVIgRURJVE9SIFBMQUNFSE9MREVSXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXJFZGl0b3IgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2lnbi1tZW51LWVkaXRvclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBoZWlnaHQ6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgIG1pbj1cIjZcIlxuICAgICAgICAgICAgICAgICAgICBtYXg9XCIyMFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uc0VkaXRvciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLW1lbnUtZWRpdG9yXCI+XG4gICAgICAgICAgICBTRUNUSU9OUyBFRElUT1IgUExBQ0VIT0xERVJcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzIGZyb20gXCIuLi8uLi8uLi8uLi9mdW5jdGlvbnMvZWxlbWVudE9yUGFyZW50SGFzQ2xhc3NcIjtcblxuY29uc3QgTWVudU9wdGlvbiA9ICh7dGV4dCwgY29udGVudH0pID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgbGV0IGNoZXZyb25DbGFzcyA9IGFjdGl2ZSA/ICdjaGV2cm9uIGNoZXZyb24tcmV2ZXJzZScgOiAnY2hldnJvbic7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgICAgICBpZiAoIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGUudGFyZ2V0LCAnZGVzaWduLW1lbnUtZWRpdG9yJykpIHtcbiAgICAgICAgICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1vcHRpb25cIlxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvY2hldnJvbi5wbmdcIiBhbHQ9XCJjaGV2cm9uXCIgY2xhc3NOYW1lPXtjaGV2cm9uQ2xhc3N9Lz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHthY3RpdmUgJiYgY29udGVudH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudU9wdGlvbjsiLCJpbXBvcnQge0FDVElPTlN9IGZyb20gXCIuL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9IRUlHSFQ6XG4gICAgICAgICAgICBjb25zdCBuZXdOYXZiYXJIID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJILmhlaWdodCA9IGFjdGlvbi5wYXlsb2FkLmhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG5hdmJhcjogbmV3TmF2YmFySH07XG4gICAgICAgIGNhc2UgQUNUSU9OUy5OQVZCQVJfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld05hdmJhckJnID0gey4uLnN0YXRlLm5hdmJhcn07XG4gICAgICAgICAgICBuZXdOYXZiYXJCZy5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhckJnfTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLk5BVkJBUl9URVhUX0NPTE9SOlxuICAgICAgICAgICAgY29uc3QgbmV3TmF2YmFyVGMgPSB7Li4uc3RhdGUubmF2YmFyfTtcbiAgICAgICAgICAgIG5ld05hdmJhclRjLmNvbG9yID0gYWN0aW9uLnBheWxvYWQuY29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBuYXZiYXI6IG5ld05hdmJhclRjfTtcblxuXG4gICAgICAgIGNhc2UgQUNUSU9OUy5CT0RZX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5ID0gey4uLnN0YXRlLmJvZHl9O1xuICAgICAgICAgICAgbmV3Qm9keS5iYWNrZ3JvdW5kQ29sb3IgPSBhY3Rpb24ucGF5bG9hZC5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBib2R5OiBuZXdCb2R5fTtcbiAgICAgICAgY2FzZSBBQ1RJT05TLkJPRFlfVEVYVF9DT0xPUjpcbiAgICAgICAgICAgIGNvbnN0IG5ld0JvZHlUYyA9IHsuLi5zdGF0ZS5ib2R5fTtcbiAgICAgICAgICAgIG5ld0JvZHlUYy5jb2xvciA9IGFjdGlvbi5wYXlsb2FkLmNvbG9yO1xuICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgYm9keTogbmV3Qm9keVRjfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IENyZWF0ZVBhZ2VXcmFwcGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlL0NyZWF0ZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZVBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICAgICAgPENyZWF0ZVBhZ2VXcmFwcGVyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3JlYXRlUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9jcmVhdGVQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q3JlYXRlUGFnZUNvbnRhaW5lciAvPixcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXSwic291cmNlUm9vdCI6IiJ9