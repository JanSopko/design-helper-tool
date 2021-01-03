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
      className: "button-blue",
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
    href: "#"
  }, layoutData.themeAuthor)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("div", {
    id: "option-buttons-wrapper"
  }, layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("button", {
    className: "button-green edit-button",
    onClick: function onClick() {
      setEditModalActive(true);
    }
  }, "Edit"), layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("button", {
    className: "button-yellow",
    onClick: function onClick() {
      return addPage();
    }
  }, "Add page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default.a.createElement("button", {
    className: "button-blue",
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

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-reduce.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/array-reduce.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.reduce.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.reduce.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $reduce = __webpack_require__(/*! ../internals/array-reduce */ "./node_modules/core-js/internals/array-reduce.js").left;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ })

},[["./assets/js/react/pages/theme.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","vendors~browse~create~theme","vendors~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL0Zsb2F0aW5nV2luZG93LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3RoZW1lL1BhZ2VzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvdGhlbWUvVGhlbWVXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb250YWluZXJzL1RoZW1lUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnJlZHVjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyJdLCJuYW1lcyI6WyJlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyIsImVsZW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJGbG9hdGluZ1dpbmRvdyIsImluaXRBY3RpdmUiLCJpbml0Q29udGVudHMiLCJuZWVkc1dpZGUiLCJ3aW5kb3dDbGFzc05hbWUiLCJvdmVyVG9wQ2xhc3NOYW1lIiwid2lkZUNsYXNzTmFtZSIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidXNlRWZmZWN0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJtYXAiLCJpdGVtIiwiUGFnZXNUYWJsZSIsInBhZ2VzIiwiaXNNeVRoZW1lIiwibXlQYWdlcyIsInNldE15UGFnZXMiLCJsYXRlc3RQYWdlIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJpZCIsImxhdGVzdElkIiwic2V0TGF0ZXN0SWQiLCJkZWxldGVQYWdlIiwicGFnZUlkIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInN1Y2Nlc3MiLCJuZXdQYWdlcyIsImZpbHRlciIsInBhZ2UiLCJtZXNzYWdlIiwiYWxlcnQiLCJsZW5ndGgiLCJ1cmxIYXNoIiwibmFtZSIsImNvbmZpcm0iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJUaGVtZVdyYXBwZXIiLCJzZXRQYWdlcyIsImVkaXRNb2RhbEFjdGl2ZSIsInNldEVkaXRNb2RhbEFjdGl2ZSIsImxheW91dERhdGEiLCJ0aGVtZU5hbWUiLCJzZXROYW1lIiwicHJpdmFjeUxldmVsIiwic2V0UHJpdmFjeUxldmVsIiwidGhlbWVEZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJhbGxvd2VkUHJpdmFjeUxldmVscyIsInNldEFsbG93ZWRQcml2YWN5TGV2ZWxzIiwiZ2V0IiwiYWRkUGFnZSIsInBhZ2VOYW1lIiwicHJvbXB0IiwicG9zdCIsInRoZW1lSWQiLCJzaG93UGFnZXMiLCJkZWxldGVUaGVtZSIsInJlcGxhY2UiLCJjbG9zZUVkaXRNb2RhbCIsImUiLCJ0YXJnZXQiLCJ1cGRhdGVUaGVtZSIsInJlbG9hZCIsImVycm9ycyIsImVycm9yU3RyaW5nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsIndpZHRoIiwibWFyZ2luQm90dG9tIiwicmVzaXplIiwidGhlbWVBdXRob3IiLCJOdW1iZXIiLCJwYXJzZUludCIsIm1hcmdpblRvcCIsIlRoZW1lUGFnZUNvbnRhaW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsSUFBTUEsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDQyxPQUFELEVBQVVDLFNBQVYsRUFBd0I7QUFDcEQsTUFBSUQsT0FBTyxDQUFDRSxTQUFSLENBQWtCQyxRQUFsQixDQUEyQkYsU0FBM0IsQ0FBSixFQUEyQztBQUN2QyxXQUFPLElBQVA7QUFDSCxHQUZELE1BRU8sSUFBSUQsT0FBTyxDQUFDSSxhQUFaLEVBQTJCO0FBQzlCLFdBQU9MLHVCQUF1QixDQUFDQyxPQUFPLENBQUNJLGFBQVQsRUFBd0JILFNBQXhCLENBQTlCO0FBQ0g7O0FBQ0QsU0FBTyxLQUFQO0FBQ0gsQ0FQRDs7QUFTZUYsc0ZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBOztBQUVBLElBQU1NLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBZ0U7QUFBQSw2QkFBOURDLFVBQThEO0FBQUEsTUFBOURBLFVBQThELGdDQUFqRCxLQUFpRDtBQUFBLCtCQUExQ0MsWUFBMEM7QUFBQSxNQUExQ0EsWUFBMEMsa0NBQTNCLEVBQTJCO0FBQUEsNEJBQXZCQyxTQUF1QjtBQUFBLE1BQXZCQSxTQUF1QiwrQkFBWCxLQUFXO0FBQ25GLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7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QUNBO0FBQ0E7QUFDQSxHQUFHLGdGQUFnRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakJZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxjQUFjLG1CQUFPLENBQUMsdUZBQTZCOztBQUVuRDtBQUNBO0FBQ0EsR0FBRyw4REFBOEQ7QUFDakU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDUlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyxtRkFBMkI7QUFDakQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDO0FBQ3ZFLDhCQUE4QixtQkFBTyxDQUFDLGlIQUEwQzs7QUFFaEY7QUFDQSx3REFBd0QsT0FBTzs7QUFFL0Q7QUFDQTtBQUNBLEdBQUcsMEVBQTBFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2ZELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEMsNkNBQTZDLGVBQWUsRUFBRTs7QUFFOUQ7QUFDQTtBQUNBLEdBQUcsNERBQTREO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2JELGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMscUZBQTRCO0FBQ3ZELGNBQWMsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDbkQsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwiZmlsZSI6InRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgPSAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQucGFyZW50RWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGbG9hdGluZ1dpbmRvdyA9ICh7aW5pdEFjdGl2ZSA9IGZhbHNlLCBpbml0Q29udGVudHMgPSBbXSwgbmVlZHNXaWRlID0gZmFsc2V9KSA9PiB7XG4gICAgY29uc3Qgd2luZG93Q2xhc3NOYW1lID0gXCJmbG9hdGluZy13aW5kb3dcIjtcbiAgICBjb25zdCBvdmVyVG9wQ2xhc3NOYW1lID0gXCJvdmVyLXRvcFwiO1xuICAgIGNvbnN0IHdpZGVDbGFzc05hbWUgPSAnIHdpbmRvdy13aWRlJztcblxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoXG4gICAgICAgICgpID0+IHNldEFjdGl2ZShpbml0QWN0aXZlKSxcbiAgICAgICAgW11cbiAgICApO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IGFjdGl2ZSA/IHdpbmRvd0NsYXNzTmFtZSA6IGAke3dpbmRvd0NsYXNzTmFtZX0gJHtvdmVyVG9wQ2xhc3NOYW1lfWA7XG4gICAgaWYgKG5lZWRzV2lkZSkgY2xhc3NOYW1lICs9ICcgd2luZG93LXdpZGUnO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J2ZsZXgtZW5kJ319PlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4aXQtYnV0dG9uIGJ1dHRvbi1yZWRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0QWN0aXZlKGZhbHNlKX19XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6J3doaXRlJ319XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBYXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGluaXRDb250ZW50cy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGluZ1dpbmRvdzsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgUGFnZXNUYWJsZSA9ICh7cGFnZXMsIGlzTXlUaGVtZSA9IGZhbHNlfSkgPT4ge1xuICAgIGNvbnN0IFtteVBhZ2VzLCBzZXRNeVBhZ2VzXSA9IHVzZVN0YXRlKHBhZ2VzKTtcbiAgICBjb25zdCBsYXRlc3RQYWdlID0gcGFnZXMucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuIChwcmV2LmlkID4gY3VycmVudC5pZCkgPyBwcmV2IDogY3VycmVudDtcbiAgICB9KVxuICAgIGNvbnN0IFtsYXRlc3RJZCwgc2V0TGF0ZXN0SWRdID0gdXNlU3RhdGUobGF0ZXN0UGFnZS5pZCk7XG5cbiAgICBpZiAobGF0ZXN0UGFnZS5pZCA+IGxhdGVzdElkKSB7XG4gICAgICAgIHNldE15UGFnZXMocGFnZXMpO1xuICAgICAgICBzZXRMYXRlc3RJZChsYXRlc3RQYWdlLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQYWdlID0gcGFnZUlkID0+IHtcbiAgICAgICAgYXhpb3MuZGVsZXRlKGAvZGVsZXRlL3BhZ2UvJHtwYWdlSWR9YCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQYWdlcyA9IG15UGFnZXMuZmlsdGVyKHBhZ2UgPT4gcGFnZS5pZCAhPT0gcGFnZUlkKTtcbiAgICAgICAgICAgICAgICBzZXRNeVBhZ2VzKG5ld1BhZ2VzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIG15UGFnZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICA8dGFibGUgaWQ9XCJwYWdlcy10YWJsZVwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge215UGFnZXMubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3BhZ2UudXJsSGFzaH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhZ2UtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgUGFnZT8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUGFnZShwYWdlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZGVzaWduLXBhZ2UvJHtwYWdlLnVybEhhc2h9YH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWJsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9wcmV2aWV3LXBhZ2UvJHtwYWdlLnVybEhhc2h9YH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlc1RhYmxlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgUGFnZXNUYWJsZSBmcm9tIFwiLi9QYWdlc1RhYmxlXCI7XG5pbXBvcnQgRmxvYXRpbmdXaW5kb3cgZnJvbSBcIi4uL0Zsb2F0aW5nV2luZG93XCI7XG5pbXBvcnQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9ucy9lbGVtZW50T3JQYXJlbnRIYXNDbGFzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgVGhlbWVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtlZGl0TW9kYWxBY3RpdmUsIHNldEVkaXRNb2RhbEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUobGF5b3V0RGF0YS50aGVtZU5hbWUpO1xuICAgIGNvbnN0IFtwcml2YWN5TGV2ZWwsIHNldFByaXZhY3lMZXZlbF0gPSB1c2VTdGF0ZShsYXlvdXREYXRhLnByaXZhY3lMZXZlbCk7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShsYXlvdXREYXRhLnRoZW1lRGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IFthbGxvd2VkUHJpdmFjeUxldmVscywgc2V0QWxsb3dlZFByaXZhY3lMZXZlbHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvZGF0YS9hbGxvd2VkX3ByaXZhY3lfbGV2ZWxzJykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRBbGxvd2VkUHJpdmFjeUxldmVscyhyZXMuZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgYWRkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcGFnZU5hbWUgPSBwcm9tcHQoJ0VudGVyIG5hbWUgb2YgdGhlIG5ldyBwYWdlJyk7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9jcmVhdGUvcGFnZScsIHtcbiAgICAgICAgICAgIHRoZW1lSWQ6IGxheW91dERhdGEudGhlbWVJZCxcbiAgICAgICAgICAgIG5hbWU6IHBhZ2VOYW1lXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNob3dQYWdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGFnZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdQYWdlcyA9IFtdO1xuICAgICAgICBheGlvcy5nZXQoYC9kYXRhL3RoZW1lLyR7bGF5b3V0RGF0YS50aGVtZUlkfS9wYWdlc2ApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3UGFnZXMgPSByZXMuZGF0YS5tYXAocGFnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0UGFnZXMobmV3UGFnZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUaGVtZSA9IHRoZW1lSWQgPT4ge1xuICAgICAgICBheGlvcy5kZWxldGUoYC9kZWxldGUvdGhlbWUvJHt0aGVtZUlkfWApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgLy90b2RvIHNldFRpbWVvdXQsIGxvYWRlciBrcnV6b2sgKyByZWRpcmVjdFxuICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGVtZSBkZWxldGVkJyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9teV90aGVtZXMnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNob3dQYWdlcygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGNsb3NlRWRpdE1vZGFsID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKGVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdleGl0LWJ1dHRvbicpXG4gICAgICAgICAgICB8fCAoIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGVsZW1lbnQsICdmbG9hdGluZy13aW5kb3cnKVxuICAgICAgICAgICAgICAgICYmICFlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LCAnZWRpdC1idXR0b24nKSkpIHtcbiAgICAgICAgICAgIHNldEVkaXRNb2RhbEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVUaGVtZSA9IHRoZW1lSWQgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KGAvZGF0YS91cGRhdGVfdGhlbWUvJHt0aGVtZUlkfWAsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBwcml2YWN5TGV2ZWw6IHByaXZhY3lMZXZlbCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JTdHJpbmcgPSAnJztcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhyZXMuZGF0YS5lcnJvcnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTdHJpbmcgKz0gcmVzLmRhdGEuZXJyb3JzW2tleV0gKyBcIlxcblwiO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiBjbG9zZUVkaXRNb2RhbChlKX1cbiAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIChsYXlvdXREYXRhLmlzTXlUaGVtZSAmJiBlZGl0TW9kYWxBY3RpdmUpICYmXG4gICAgICAgICAgICAgICAgPEZsb2F0aW5nV2luZG93XG4gICAgICAgICAgICAgICAgICAgIGluaXRBY3RpdmU9e2VkaXRNb2RhbEFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgaW5pdENvbnRlbnRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXQtbmFtZVwiPlRoZW1lIG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJyxtYXJnaW5Cb3R0b206Jy41cmVtJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZWxlY3QtcHJpdmFjeS1sZXZlbFwiPlByaXZhY3kgbGV2ZWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaXZhY3lMZXZlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJpdmFjeS1sZXZlbC1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQcml2YWN5TGV2ZWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJyxtYXJnaW5Cb3R0b206Jy41cmVtJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcml2YWN5TGV2ZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkUHJpdmFjeUxldmVscy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGV4dGFyZWEtZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGV4dGFyZWEtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6JzEwMCUnLHJlc2l6ZTonbm9uZSd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVUaGVtZShsYXlvdXREYXRhLnRoZW1lSWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOicxMDAlJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aDE+e2xheW91dERhdGEudGhlbWVOYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPHNtYWxsPkJ5IDxhIGhyZWY9XCIjXCI+e2xheW91dERhdGEudGhlbWVBdXRob3J9PC9hPjwvc21hbGw+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm9wdGlvbi1idXR0b25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0RGF0YS5pc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW4gZWRpdC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RWRpdE1vZGFsQWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0RGF0YS5pc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24teWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRQYWdlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1ibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZG93bmxvYWQtdGhlbWUvJHtOdW1iZXIucGFyc2VJbnQobGF5b3V0RGF0YS50aGVtZUlkKX1gfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dERhdGEuaXNNeVRoZW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUaGVtZT8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRoZW1lKGxheW91dERhdGEudGhlbWVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFRoZW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xheW91dERhdGEudGhlbWVEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6JzZyZW0nfX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MaXN0IG9mIHBhZ2VzOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VzVGFibGUgcGFnZXM9e3BhZ2VzfSBpc015VGhlbWU9e2xheW91dERhdGEuaXNNeVRoZW1lfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvLyAocGFnZXMubGVuZ3RoID09PSAwKSAmJiBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGgzPlRoaXMgVGhlbWUgaXMgZW1wdHksIGxldCdzIGFkZCBzb21lIHBhZ2VzITwvaDM+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV3JhcHBlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IFRoZW1lV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy90aGVtZS9UaGVtZVdyYXBwZXJcIjtcblxuY29uc3QgVGhlbWVQYWdlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICA8VGhlbWVXcmFwcGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVQYWdlQ29udGFpbmVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUaGVtZVBhZ2VDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvVGhlbWVQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8VGhlbWVQYWdlQ29udGFpbmVyLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gKCFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCkgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSwgYXJndW1lbnQpIHtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgcmV0dXJuICEhbWV0aG9kICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1jYWxsLG5vLXRocm93LWxpdGVyYWxcbiAgICBtZXRob2QuY2FsbChudWxsLCBhcmd1bWVudCB8fCBmdW5jdGlvbiAoKSB7IHRocm93IDE7IH0sIDEpO1xuICB9KTtcbn07XG4iLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyByZWR1Y2UsIHJlZHVjZVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfUklHSFQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBjYWxsYmFja2ZuLCBhcmd1bWVudHNMZW5ndGgsIG1lbW8pIHtcbiAgICBhRnVuY3Rpb24oY2FsbGJhY2tmbik7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSBJU19SSUdIVCA/IGxlbmd0aCAtIDEgOiAwO1xuICAgIHZhciBpID0gSVNfUklHSFQgPyAtMSA6IDE7XG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA8IDIpIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgICBtZW1vID0gc2VsZltpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gaTtcbiAgICAgIGlmIChJU19SSUdIVCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICg7SVNfUklHSFQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBzZWxmW2luZGV4XSwgaW5kZXgsIE8pO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiAgbGVmdDogY3JlYXRlTWV0aG9kKGZhbHNlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuLy8gRWRnZSAxNC0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmaWx0ZXInKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRyZWR1Y2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktcmVkdWNlJykubGVmdDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdyZWR1Y2UnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdyZWR1Y2UnLCB7IDE6IDAgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIHJlZHVjZTogZnVuY3Rpb24gcmVkdWNlKGNhbGxiYWNrZm4gLyogLCBpbml0aWFsVmFsdWUgKi8pIHtcbiAgICByZXR1cm4gJHJlZHVjZSh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24gKCkgeyBuYXRpdmVLZXlzKDEpOyB9KTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=