(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme"],{

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

/***/ "./assets/js/react/components/theme/PagesTable.js":
/*!********************************************************!*\
  !*** ./assets/js/react/components/theme/PagesTable.js ***!
  \********************************************************/
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
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var PagesTable = function PagesTable(_ref) {
  var pages = _ref.pages,
      _ref$isMyTheme = _ref.isMyTheme,
      isMyTheme = _ref$isMyTheme === void 0 ? false : _ref$isMyTheme;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(pages),
      _useState2 = _slicedToArray(_useState, 2),
      myPages = _useState2[0],
      setMyPages = _useState2[1];

  var latestPage = pages.reduce(function (prev, current) {
    return prev.id > current.id ? prev : current;
  });

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])(latestPage.id),
      _useState4 = _slicedToArray(_useState3, 2),
      latestId = _useState4[0],
      setLatestId = _useState4[1];

  if (latestPage.id > latestId) {
    setMyPages(pages);
    setLatestId(latestPage.id);
  }

  var deletePage = function deletePage(pageId) {
    axios__WEBPACK_IMPORTED_MODULE_17___default.a["delete"]("/delete/page/".concat(pageId)).then(function (res) {
      if (res.data.success) {
        var newPages = myPages.filter(function (page) {
          return page.id !== pageId;
        });
        setMyPages(newPages);
      } else if (res.data.message) {
        alert(res.data.message);
      }
    });
  };

  return myPages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("table", {
    id: "pages-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("tbody", null, myPages.map(function (page) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("tr", {
      key: page.urlHash
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("td", null, page.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("td", {
      className: "page-buttons"
    }, isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
      className: "button-red",
      onClick: function onClick() {
        if (confirm('Are you sure you want to delete this Page?')) {
          deletePage(page.id);
        }
      }
    }, "Delete"), isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
      className: "button-green",
      onClick: function onClick() {
        window.location.href = "/design-page/".concat(page.urlHash);
      }
    }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
      className: "button-green",
      onClick: function onClick() {
        window.location.href = "/preview-page/".concat(page.urlHash);
      }
    }, "Preview")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PagesTable);

/***/ }),

/***/ "./assets/js/react/components/theme/ThemeWrapper.js":
/*!**********************************************************!*\
  !*** ./assets/js/react/components/theme/ThemeWrapper.js ***!
  \**********************************************************/
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
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
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
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _PagesTable__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PagesTable */ "./assets/js/react/components/theme/PagesTable.js");
/* harmony import */ var _FloatingWindow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../FloatingWindow */ "./assets/js/react/components/FloatingWindow.js");
/* harmony import */ var _functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../functions/elementOrParentHasClass */ "./assets/js/functions/elementOrParentHasClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_26__);






















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var ThemeWrapper = function ThemeWrapper() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      editModalActive = _useState4[0],
      setEditModalActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])(layoutData.themeName),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])(layoutData.privacyLevel),
      _useState8 = _slicedToArray(_useState7, 2),
      privacyLevel = _useState8[0],
      setPrivacyLevel = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])(layoutData.themeDescription),
      _useState10 = _slicedToArray(_useState9, 2),
      description = _useState10[0],
      setDescription = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_21__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      allowedPrivacyLevels = _useState12[0],
      setAllowedPrivacyLevels = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_21__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_26___default.a.get('/data/allowed_privacy_levels').then(function (res) {
      if (res.data && res.data.length > 0) {
        setAllowedPrivacyLevels(res.data);
      }
    });
  }, []);

  var addPage = function addPage() {
    var pageName = prompt('Enter name of the new page');
    axios__WEBPACK_IMPORTED_MODULE_26___default.a.post('/create/page', {
      themeId: layoutData.themeId,
      name: pageName
    }).then(function (res) {
      if (res.data.name) {
        alert(res.data.name);
      } else {
        showPages();
      }
    });
  };

  var showPages = function showPages() {
    var newPages = [];
    axios__WEBPACK_IMPORTED_MODULE_26___default.a.get("/data/theme/".concat(layoutData.themeId, "/pages")).then(function (res) {
      if (res.data.length > 0) {
        newPages = res.data.map(function (page) {
          return page;
        });
      }

      setPages(newPages);
    });
  };

  var deleteTheme = function deleteTheme(themeId) {
    axios__WEBPACK_IMPORTED_MODULE_26___default.a["delete"]("/delete/theme/".concat(themeId)).then(function (res) {
      if (res.data.success) {
        //todo setTimeout, loader kruzok + redirect
        alert('Theme deleted');
        window.location.replace('/my_themes');
      } else if (res.data.message) {
        alert(res.data.message);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_21__["useEffect"])(function () {
    showPages();
  }, []);

  var closeEditModal = function closeEditModal(e) {
    var element = e.target;

    if (Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_25__["default"])(element, 'exit-button') || !Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_25__["default"])(element, 'floating-window') && !Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_25__["default"])(element, 'edit-button')) {
      setEditModalActive(false);
    }
  };

  var updateTheme = function updateTheme(themeId) {
    axios__WEBPACK_IMPORTED_MODULE_26___default.a.post("/data/update_theme/".concat(themeId), {
      name: name,
      privacyLevel: privacyLevel,
      description: description
    }).then(function (res) {
      if (res.data && res.data.success) {
        location.reload();
      } else if (res.data && res.data.errors) {
        var errorString = '';
        Object.keys(res.data.errors).forEach(function (key) {
          errorString += res.data.errors[key] + "\n";
        });
        alert(errorString);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    id: "content",
    onClick: function onClick(e) {
      return closeEditModal(e);
    }
  }, layoutData.isMyTheme && editModalActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(_FloatingWindow__WEBPACK_IMPORTED_MODULE_24__["default"], {
    initActive: editModalActive,
    initContents: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("label", {
      htmlFor: "input-name"
    }, "Theme name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("input", {
      type: "text",
      id: "input-name",
      name: "name",
      value: name,
      onChange: function onChange(e) {
        return setName(e.target.value);
      },
      style: {
        width: '100%',
        marginBottom: '.5rem'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("label", {
      htmlFor: "select-privacy-level"
    }, "Privacy level"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("select", {
      name: "privacyLevel",
      id: "privacy-level-select",
      onChange: function onChange(e) {
        return setPrivacyLevel(e.target.value);
      },
      style: {
        width: '100%',
        marginBottom: '.5rem'
      },
      value: privacyLevel
    }, allowedPrivacyLevels.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("option", {
        key: item.id,
        value: item.id
      }, item.description);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("label", {
      htmlFor: "textarea-description"
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("textarea", {
      name: "description",
      id: "textarea-description",
      cols: "20",
      rows: "10",
      onChange: function onChange(e) {
        return setDescription(e.target.value);
      },
      style: {
        width: '100%',
        resize: 'none'
      },
      value: description
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("button", {
      className: "button-green",
      onClick: function onClick() {
        return updateTheme(layoutData.themeId);
      },
      style: {
        width: '100%'
      }
    }, "Edit"))]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("h1", null, layoutData.themeName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("small", null, "By ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("a", {
    href: "themesOf/".concat(layoutData.themeAuthor),
    onClick: function onClick() {
      return window.location = "/themesOf/".concat(layoutData.themeAuthor);
    }
  }, layoutData.themeAuthor)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    id: "option-buttons-wrapper"
  }, layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("button", {
    className: "button-green edit-button",
    onClick: function onClick() {
      setEditModalActive(true);
    }
  }, "Edit"), layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("button", {
    className: "button-green",
    onClick: function onClick() {
      return addPage();
    }
  }, "Add page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("button", {
    className: "button-green",
    onClick: function onClick() {
      window.location.href = "/download-theme/".concat(Number.parseInt(layoutData.themeId));
    }
  }, "Download"), layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("button", {
    className: "button-red",
    onClick: function onClick() {
      if (confirm('Are you sure you want to delete this Theme?')) {
        deleteTheme(layoutData.themeId);
      }
    }
  }, "Delete Theme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("p", null, layoutData.themeDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    style: {
      marginTop: '6rem'
    }
  }, pages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("h2", null, "List of pages:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(_PagesTable__WEBPACK_IMPORTED_MODULE_23__["default"], {
    pages: pages,
    isMyTheme: layoutData.isMyTheme
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_22__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeWrapper);

/***/ }),

/***/ "./assets/js/react/containers/ThemePageContainer.js":
/*!**********************************************************!*\
  !*** ./assets/js/react/containers/ThemePageContainer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ "./assets/js/react/components/Navigation.js");
/* harmony import */ var _components_theme_ThemeWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/theme/ThemeWrapper */ "./assets/js/react/components/theme/ThemeWrapper.js");




var ThemePageContainer = function ThemePageContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_theme_ThemeWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (ThemePageContainer);

/***/ }),

/***/ "./assets/js/react/pages/theme.js":
/*!****************************************!*\
  !*** ./assets/js/react/pages/theme.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_ThemePageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/ThemePageContainer */ "./assets/js/react/containers/ThemePageContainer.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_ThemePageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ })

},[["./assets/js/react/pages/theme.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme~themesOf","vendors~sign~theme","vendors~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme~themesOf"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL0Zsb2F0aW5nV2luZG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3RoZW1lL1BhZ2VzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvdGhlbWUvVGhlbWVXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb250YWluZXJzL1RoZW1lUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvdGhlbWUuanMiXSwibmFtZXMiOlsiZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwiRmxvYXRpbmdXaW5kb3ciLCJpbml0QWN0aXZlIiwiaW5pdENvbnRlbnRzIiwibmVlZHNXaWRlIiwid2luZG93Q2xhc3NOYW1lIiwib3ZlclRvcENsYXNzTmFtZSIsIndpZGVDbGFzc05hbWUiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsInVzZUVmZmVjdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwibWFwIiwiaXRlbSIsIlBhZ2VzVGFibGUiLCJwYWdlcyIsImlzTXlUaGVtZSIsIm15UGFnZXMiLCJzZXRNeVBhZ2VzIiwibGF0ZXN0UGFnZSIsInJlZHVjZSIsInByZXYiLCJjdXJyZW50IiwiaWQiLCJsYXRlc3RJZCIsInNldExhdGVzdElkIiwiZGVsZXRlUGFnZSIsInBhZ2VJZCIsImF4aW9zIiwidGhlbiIsInJlcyIsImRhdGEiLCJzdWNjZXNzIiwibmV3UGFnZXMiLCJmaWx0ZXIiLCJwYWdlIiwibWVzc2FnZSIsImFsZXJ0IiwibGVuZ3RoIiwidXJsSGFzaCIsIm5hbWUiLCJjb25maXJtIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiVGhlbWVXcmFwcGVyIiwic2V0UGFnZXMiLCJlZGl0TW9kYWxBY3RpdmUiLCJzZXRFZGl0TW9kYWxBY3RpdmUiLCJsYXlvdXREYXRhIiwidGhlbWVOYW1lIiwic2V0TmFtZSIsInByaXZhY3lMZXZlbCIsInNldFByaXZhY3lMZXZlbCIsInRoZW1lRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiYWxsb3dlZFByaXZhY3lMZXZlbHMiLCJzZXRBbGxvd2VkUHJpdmFjeUxldmVscyIsImdldCIsImFkZFBhZ2UiLCJwYWdlTmFtZSIsInByb21wdCIsInBvc3QiLCJ0aGVtZUlkIiwic2hvd1BhZ2VzIiwiZGVsZXRlVGhlbWUiLCJyZXBsYWNlIiwiY2xvc2VFZGl0TW9kYWwiLCJlIiwidGFyZ2V0IiwidXBkYXRlVGhlbWUiLCJyZWxvYWQiLCJlcnJvcnMiLCJlcnJvclN0cmluZyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidmFsdWUiLCJ3aWR0aCIsIm1hcmdpbkJvdHRvbSIsInJlc2l6ZSIsInRoZW1lQXV0aG9yIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJtYXJnaW5Ub3AiLCJUaGVtZVBhZ2VDb250YWluZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXdCO0FBQ3BELE1BQUlELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkJGLFNBQTNCLENBQUosRUFBMkM7QUFDdkMsV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlELE9BQU8sQ0FBQ0ksYUFBWixFQUEyQjtBQUM5QixXQUFPTCx1QkFBdUIsQ0FBQ0Ms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UEosZUFpREksc0ZBQ0ksdUVBQ0tmLFVBQVUsQ0FBQ0ssZ0JBRGhCLENBREosQ0FqREosZUFzREk7QUFBSyxTQUFLLEVBQUU7QUFBQ2dDLGVBQVMsRUFBQztBQUFYO0FBQVosS0FFSXZFLEtBQUssQ0FBQ3VCLE1BQU4sR0FBZSxDQUFmLGlCQUNJLHNGQUNJLHlGQURKLGVBRUksNERBQUMsb0RBQUQ7QUFBWSxTQUFLLEVBQUV2QixLQUFuQjtBQUEwQixhQUFTLEVBQUVrQyxVQUFVLENBQUNqQztBQUFoRCxJQUZKLENBSFIsQ0F0REosQ0FwRUosZUEwSUksNERBQUMsZ0RBQUQsT0ExSUosQ0FESjtBQThJSCxDQXJPRDs7QUF1T2U2QiwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUM5T0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNMEMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLHNCQUNJLHFGQUNJLDJEQUFDLDhEQUFELE9BREosZUFFSSwyREFBQyxzRUFBRCxPQUZKLENBREo7QUFNSCxDQVBEOztBQVNlQSxpRkFBZixFOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLHNFQUFELE9BREosRUFFSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBRkosRSIsImZpbGUiOiJ0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LnBhcmVudEVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3M7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRmxvYXRpbmdXaW5kb3cgPSAoe2luaXRBY3RpdmUgPSBmYWxzZSwgaW5pdENvbnRlbnRzID0gW10sIG5lZWRzV2lkZSA9IGZhbHNlfSkgPT4ge1xuICAgIGNvbnN0IHdpbmRvd0NsYXNzTmFtZSA9IFwiZmxvYXRpbmctd2luZG93XCI7XG4gICAgY29uc3Qgb3ZlclRvcENsYXNzTmFtZSA9IFwib3Zlci10b3BcIjtcbiAgICBjb25zdCB3aWRlQ2xhc3NOYW1lID0gJyB3aW5kb3ctd2lkZSc7XG5cbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KFxuICAgICAgICAoKSA9PiBzZXRBY3RpdmUoaW5pdEFjdGl2ZSksXG4gICAgICAgIFtdXG4gICAgKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBhY3RpdmUgPyB3aW5kb3dDbGFzc05hbWUgOiBgJHt3aW5kb3dDbGFzc05hbWV9ICR7b3ZlclRvcENsYXNzTmFtZX1gO1xuICAgIGlmIChuZWVkc1dpZGUpIGNsYXNzTmFtZSArPSB3aWRlQ2xhc3NOYW1lO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJ319PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4aXQtYnV0dG9uIGJ1dHRvbi1yZWRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0QWN0aXZlKGZhbHNlKX19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J3doaXRlJ319XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluaXRDb250ZW50cy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ1dpbmRvdzsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgUGFnZXNUYWJsZSA9ICh7cGFnZXMsIGlzTXlUaGVtZSA9IGZhbHNlfSkgPT4ge1xuICAgIGNvbnN0IFtteVBhZ2VzLCBzZXRNeVBhZ2VzXSA9IHVzZVN0YXRlKHBhZ2VzKTtcbiAgICBjb25zdCBsYXRlc3RQYWdlID0gcGFnZXMucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuIChwcmV2LmlkID4gY3VycmVudC5pZCkgPyBwcmV2IDogY3VycmVudDtcbiAgICB9KVxuICAgIGNvbnN0IFtsYXRlc3RJZCwgc2V0TGF0ZXN0SWRdID0gdXNlU3RhdGUobGF0ZXN0UGFnZS5pZCk7XG5cbiAgICBpZiAobGF0ZXN0UGFnZS5pZCA+IGxhdGVzdElkKSB7XG4gICAgICAgIHNldE15UGFnZXMocGFnZXMpO1xuICAgICAgICBzZXRMYXRlc3RJZChsYXRlc3RQYWdlLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQYWdlID0gcGFnZUlkID0+IHtcbiAgICAgICAgYXhpb3MuZGVsZXRlKGAvZGVsZXRlL3BhZ2UvJHtwYWdlSWR9YCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQYWdlcyA9IG15UGFnZXMuZmlsdGVyKHBhZ2UgPT4gcGFnZS5pZCAhPT0gcGFnZUlkKTtcbiAgICAgICAgICAgICAgICBzZXRNeVBhZ2VzKG5ld1BhZ2VzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIG15UGFnZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICA8dGFibGUgaWQ9XCJwYWdlcy10YWJsZVwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge215UGFnZXMubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3BhZ2UudXJsSGFzaH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhZ2UtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgUGFnZT8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUGFnZShwYWdlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZGVzaWduLXBhZ2UvJHtwYWdlLnVybEhhc2h9YH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvcHJldmlldy1wYWdlLyR7cGFnZS51cmxIYXNofWB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZXNUYWJsZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IFBhZ2VzVGFibGUgZnJvbSBcIi4vUGFnZXNUYWJsZVwiO1xuaW1wb3J0IEZsb2F0aW5nV2luZG93IGZyb20gXCIuLi9GbG9hdGluZ1dpbmRvd1wiO1xuaW1wb3J0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzIGZyb20gXCIuLi8uLi8uLi9mdW5jdGlvbnMvZWxlbWVudE9yUGFyZW50SGFzQ2xhc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFRoZW1lV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZWRpdE1vZGFsQWN0aXZlLCBzZXRFZGl0TW9kYWxBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKGxheW91dERhdGEudGhlbWVOYW1lKTtcbiAgICBjb25zdCBbcHJpdmFjeUxldmVsLCBzZXRQcml2YWN5TGV2ZWxdID0gdXNlU3RhdGUobGF5b3V0RGF0YS5wcml2YWN5TGV2ZWwpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUobGF5b3V0RGF0YS50aGVtZURlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBbYWxsb3dlZFByaXZhY3lMZXZlbHMsIHNldEFsbG93ZWRQcml2YWN5TGV2ZWxzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2RhdGEvYWxsb3dlZF9wcml2YWN5X2xldmVscycpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0QWxsb3dlZFByaXZhY3lMZXZlbHMocmVzLmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGFkZFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VOYW1lID0gcHJvbXB0KCdFbnRlciBuYW1lIG9mIHRoZSBuZXcgcGFnZScpO1xuICAgICAgICBheGlvcy5wb3N0KCcvY3JlYXRlL3BhZ2UnLCB7XG4gICAgICAgICAgICB0aGVtZUlkOiBsYXlvdXREYXRhLnRoZW1lSWQsXG4gICAgICAgICAgICBuYW1lOiBwYWdlTmFtZVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubmFtZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzaG93UGFnZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1BhZ2VzID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmV3UGFnZXMgPSBbXTtcbiAgICAgICAgYXhpb3MuZ2V0KGAvZGF0YS90aGVtZS8ke2xheW91dERhdGEudGhlbWVJZH0vcGFnZXNgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld1BhZ2VzID0gcmVzLmRhdGEubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFBhZ2VzKG5ld1BhZ2VzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGhlbWUgPSB0aGVtZUlkID0+IHtcbiAgICAgICAgYXhpb3MuZGVsZXRlKGAvZGVsZXRlL3RoZW1lLyR7dGhlbWVJZH1gKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIC8vdG9kbyBzZXRUaW1lb3V0LCBsb2FkZXIga3J1em9rICsgcmVkaXJlY3RcbiAgICAgICAgICAgICAgICBhbGVydCgnVGhlbWUgZGVsZXRlZCcpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbXlfdGhlbWVzJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzaG93UGFnZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBjbG9zZUVkaXRNb2RhbCA9IGUgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmIChlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnZXhpdC1idXR0b24nKVxuICAgICAgICAgICAgfHwgKCFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnZmxvYXRpbmctd2luZG93JylcbiAgICAgICAgICAgICAgICAmJiAhZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudCwgJ2VkaXQtYnV0dG9uJykpKSB7XG4gICAgICAgICAgICBzZXRFZGl0TW9kYWxBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlVGhlbWUgPSB0aGVtZUlkID0+IHtcbiAgICAgICAgYXhpb3MucG9zdChgL2RhdGEvdXBkYXRlX3RoZW1lLyR7dGhlbWVJZH1gLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgcHJpdmFjeUxldmVsOiBwcml2YWN5TGV2ZWwsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVycm9yU3RyaW5nID0gJyc7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzLmRhdGEuZXJyb3JzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yU3RyaW5nICs9IHJlcy5kYXRhLmVycm9yc1trZXldICsgXCJcXG5cIjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvclN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gY2xvc2VFZGl0TW9kYWwoZSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAobGF5b3V0RGF0YS5pc015VGhlbWUgJiYgZWRpdE1vZGFsQWN0aXZlKSAmJlxuICAgICAgICAgICAgICAgIDxGbG9hdGluZ1dpbmRvd1xuICAgICAgICAgICAgICAgICAgICBpbml0QWN0aXZlPXtlZGl0TW9kYWxBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIGluaXRDb250ZW50cz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0LW5hbWVcIj5UaGVtZSBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucHV0LW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJScsbWFyZ2luQm90dG9tOicuNXJlbSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2VsZWN0LXByaXZhY3ktbGV2ZWxcIj5Qcml2YWN5IGxldmVsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcml2YWN5TGV2ZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByaXZhY3ktbGV2ZWwtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UHJpdmFjeUxldmVsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJScsbWFyZ2luQm90dG9tOicuNXJlbSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpdmFjeUxldmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFByaXZhY3lMZXZlbHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRleHRhcmVhLWRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRleHRhcmVhLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJyxyZXNpemU6J25vbmUnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlVGhlbWUobGF5b3V0RGF0YS50aGVtZUlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGgxPntsYXlvdXREYXRhLnRoZW1lTmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxzbWFsbD5CeSA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgdGhlbWVzT2YvJHtsYXlvdXREYXRhLnRoZW1lQXV0aG9yfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbiA9IGAvdGhlbWVzT2YvJHtsYXlvdXREYXRhLnRoZW1lQXV0aG9yfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGF5b3V0RGF0YS50aGVtZUF1dGhvcn08L2E+PC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3B0aW9uLWJ1dHRvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlbiBlZGl0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRFZGl0TW9kYWxBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkUGFnZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9kb3dubG9hZC10aGVtZS8ke051bWJlci5wYXJzZUludChsYXlvdXREYXRhLnRoZW1lSWQpfWB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0RGF0YS5pc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFRoZW1lPycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVGhlbWUobGF5b3V0RGF0YS50aGVtZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGUgVGhlbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGF5b3V0RGF0YS50aGVtZURlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDonNnJlbSd9fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxpc3Qgb2YgcGFnZXM6PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnZXNUYWJsZSBwYWdlcz17cGFnZXN9IGlzTXlUaGVtZT17bGF5b3V0RGF0YS5pc015VGhlbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vIChwYWdlcy5sZW5ndGggPT09IDApICYmIGxheW91dERhdGEuaXNNeVRoZW1lICYmXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8aDM+VGhpcyBUaGVtZSBpcyBlbXB0eSwgbGV0J3MgYWRkIHNvbWUgcGFnZXMhPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVXcmFwcGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgVGhlbWVXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3RoZW1lL1RoZW1lV3JhcHBlclwiO1xuXG5jb25zdCBUaGVtZVBhZ2VDb250YWluZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgIDxUaGVtZVdyYXBwZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVBhZ2VDb250YWluZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRoZW1lUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9UaGVtZVBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxUaGVtZVBhZ2VDb250YWluZXIvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=