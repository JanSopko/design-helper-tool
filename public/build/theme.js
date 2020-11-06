(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme"],{

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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("td", null, page.urlHash), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("td", {
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
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _PagesTable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PagesTable */ "./assets/js/react/components/theme/PagesTable.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ThemeWrapper = function ThemeWrapper() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_16__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  var addPage = function addPage() {
    axios__WEBPACK_IMPORTED_MODULE_19___default.a.post('/create/page', {
      themeId: layoutData.themeId
    }).then(function () {
      return showPages();
    });
  };

  var showPages = function showPages() {
    var newPages = [];
    axios__WEBPACK_IMPORTED_MODULE_19___default.a.get("/data/theme/".concat(layoutData.themeId, "/pages")).then(function (res) {
      if (res.data.length > 0) {
        newPages = res.data.map(function (page) {
          return page;
        });
      }

      setPages(newPages);
    });
  };

  var deleteTheme = function deleteTheme(themeId) {
    axios__WEBPACK_IMPORTED_MODULE_19___default.a["delete"]("/delete/theme/".concat(themeId)).then(function (res) {
      if (res.data.success) {
        //todo setTimeout, loader kruzok + redirect
        alert('Theme deleted');
        window.location.replace('/my_themes');
      } else if (res.data.message) {
        alert(res.data.message);
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_16__["useEffect"])(function () {
    showPages();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h1", null, layoutData.themeName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("small", null, "By ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("a", {
    href: "#"
  }, layoutData.themeAuthor)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    id: "option-buttons-wrapper"
  }, layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
    className: "button-green"
  }, "Edit"), layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
    className: "button-yellow",
    onClick: function onClick() {
      return addPage();
    }
  }, "Add page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
    className: "button-blue",
    onClick: function onClick() {
      window.location.href = "/download-theme/".concat(layoutData.themeId);
    }
  }, "Download"), layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
    className: "button-red",
    onClick: function onClick() {
      if (confirm('Are you sure you want to delete this Theme?')) {
        deleteTheme(layoutData.themeId);
      }
    }
  }, "Delete Theme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("p", null, layoutData.themeDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", {
    style: {
      marginTop: '6rem'
    }
  }, pages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h2", null, "List of pages:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_PagesTable__WEBPACK_IMPORTED_MODULE_18__["default"], {
    pages: pages,
    isMyTheme: layoutData.isMyTheme
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], null));
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


/***/ })

},[["./assets/js/react/pages/theme.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","vendors~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy90aGVtZS9QYWdlc1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3RoZW1lL1RoZW1lV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9UaGVtZVBhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L3BhZ2VzL3RoZW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5yZWR1Y2UuanMiXSwibmFtZXMiOlsiUGFnZXNUYWJsZSIsInBhZ2VzIiwiaXNNeVRoZW1lIiwidXNlU3RhdGUiLCJteVBhZ2VzIiwic2V0TXlQYWdlcyIsImxhdGVzdFBhZ2UiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsImlkIiwibGF0ZXN0SWQiLCJzZXRMYXRlc3RJZCIsImRlbGV0ZVBhZ2UiLCJwYWdlSWQiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3VjY2VzcyIsIm5ld1BhZ2VzIiwiZmlsdGVyIiwicGFnZSIsIm1lc3NhZ2UiLCJhbGVydCIsImxlbmd0aCIsIm1hcCIsInVybEhhc2giLCJjb25maXJtIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiVGhlbWVXcmFwcGVyIiwic2V0UGFnZXMiLCJhZGRQYWdlIiwicG9zdCIsInRoZW1lSWQiLCJsYXlvdXREYXRhIiwic2hvd1BhZ2VzIiwiZ2V0IiwiZGVsZXRlVGhlbWUiLCJyZXBsYWNlIiwidXNlRWZmZWN0IiwidGhlbWVOYW1lIiwidGhlbWVBdXRob3IiLCJ0aGVtZURlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwiVGhlbWVQYWdlQ29udGFpbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSw0QkFBdkJDLFNBQXVCO0FBQUEsTUFBdkJBLFNBQXVCLCtCQUFYLEtBQVc7O0FBQUEsa0JBQ2pCQyx1REFBUSxDQUFDRixLQUFELENBRFM7QUFBQTtBQUFBLE1BQ3hDRyxPQUR3QztBQUFBLE1BQy9CQyxVQUQrQjs7QUFFL0MsTUFBTUMsVUFBVSxHQUFHTCxLQUFLLENBQUNNLE1BQU4sQ0FBYSxVQUFTQyxJQUFULEVBQWVDLE9BQWYsRUFBd0I7QUFDcEQsV0FBUUQsSUFBSSxDQUFDRSxFQUFMLEdBQVVELE9BQU8sQ0FBQ0MsRUFBbkIsR0FBeUJGLElBQXpCLEdBQWdDQyxPQUF2QztBQUNILEdBRmtCLENBQW5COztBQUYrQyxtQkFLZk4sdURBQVEsQ0FBQ0csVUFBVSxDQUFDSSxFQUFaLENBTE87QUFBQTtBQUFBLE1BS3hDQyxRQUx3QztBQUFBLE1BSzlCQyxXQUw4Qjs7QUFPL0MsTUFBSU4sVUFBVSxDQUFDSSxFQUFYLEdBQWdCQyxRQUFwQixFQUE4QjtBQUMxQk4sY0FBVSxDQUFDSixLQUFELENBQVY7QUFDQVcsZUFBVyxDQUFDTixVQUFVLENBQUNJLEVBQVosQ0FBWDtBQUNIOztBQUVELE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUFDLE1BQU0sRUFBSTtBQUN6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bSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgUGFnZXNUYWJsZSA9ICh7cGFnZXMsIGlzTXlUaGVtZSA9IGZhbHNlfSkgPT4ge1xuICAgIGNvbnN0IFtteVBhZ2VzLCBzZXRNeVBhZ2VzXSA9IHVzZVN0YXRlKHBhZ2VzKTtcbiAgICBjb25zdCBsYXRlc3RQYWdlID0gcGFnZXMucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuIChwcmV2LmlkID4gY3VycmVudC5pZCkgPyBwcmV2IDogY3VycmVudDtcbiAgICB9KVxuICAgIGNvbnN0IFtsYXRlc3RJZCwgc2V0TGF0ZXN0SWRdID0gdXNlU3RhdGUobGF0ZXN0UGFnZS5pZCk7XG5cbiAgICBpZiAobGF0ZXN0UGFnZS5pZCA+IGxhdGVzdElkKSB7XG4gICAgICAgIHNldE15UGFnZXMocGFnZXMpO1xuICAgICAgICBzZXRMYXRlc3RJZChsYXRlc3RQYWdlLmlkKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQYWdlID0gcGFnZUlkID0+IHtcbiAgICAgICAgYXhpb3MuZGVsZXRlKGAvZGVsZXRlL3BhZ2UvJHtwYWdlSWR9YCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQYWdlcyA9IG15UGFnZXMuZmlsdGVyKHBhZ2UgPT4gcGFnZS5pZCAhPT0gcGFnZUlkKTtcbiAgICAgICAgICAgICAgICBzZXRNeVBhZ2VzKG5ld1BhZ2VzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIG15UGFnZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICA8dGFibGUgaWQ9XCJwYWdlcy10YWJsZVwiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge215UGFnZXMubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3BhZ2UudXJsSGFzaH0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZS51cmxIYXNofVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhZ2UtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgUGFnZT8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUGFnZShwYWdlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZGVzaWduLXBhZ2UvJHtwYWdlLnVybEhhc2h9YH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWJsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3dpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9wcmV2aWV3LXBhZ2UvJHtwYWdlLnVybEhhc2h9YH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlc1RhYmxlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCBQYWdlc1RhYmxlIGZyb20gXCIuL1BhZ2VzVGFibGVcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFRoZW1lV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGFkZFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9jcmVhdGUvcGFnZScsIHtcbiAgICAgICAgICAgIHRoZW1lSWQ6IGxheW91dERhdGEudGhlbWVJZFxuICAgICAgICB9KS50aGVuKCgpID0+IHNob3dQYWdlcygpKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGFnZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdQYWdlcyA9IFtdO1xuICAgICAgICBheGlvcy5nZXQoYC9kYXRhL3RoZW1lLyR7bGF5b3V0RGF0YS50aGVtZUlkfS9wYWdlc2ApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3UGFnZXMgPSByZXMuZGF0YS5tYXAocGFnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWdlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0UGFnZXMobmV3UGFnZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVUaGVtZSA9IHRoZW1lSWQgPT4ge1xuICAgICAgICBheGlvcy5kZWxldGUoYC9kZWxldGUvdGhlbWUvJHt0aGVtZUlkfWApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgLy90b2RvIHNldFRpbWVvdXQsIGxvYWRlciBrcnV6b2sgKyByZWRpcmVjdFxuICAgICAgICAgICAgICAgIGFsZXJ0KCdUaGVtZSBkZWxldGVkJyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9teV90aGVtZXMnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNob3dQYWdlcygpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMT57bGF5b3V0RGF0YS50aGVtZU5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8c21hbGw+QnkgPGEgaHJlZj1cIiNcIj57bGF5b3V0RGF0YS50aGVtZUF1dGhvcn08L2E+PC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3B0aW9uLWJ1dHRvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0RGF0YS5pc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24teWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRQYWdlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1ibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvZG93bmxvYWQtdGhlbWUvJHtsYXlvdXREYXRhLnRoZW1lSWR9YH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1yZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgVGhlbWU/JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVUaGVtZShsYXlvdXREYXRhLnRoZW1lSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBUaGVtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYXlvdXREYXRhLnRoZW1lRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOic2cmVtJ319PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TGlzdCBvZiBwYWdlczo8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlc1RhYmxlIHBhZ2VzPXtwYWdlc30gaXNNeVRoZW1lPXtsYXlvdXREYXRhLmlzTXlUaGVtZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gKHBhZ2VzLmxlbmd0aCA9PT0gMCkgJiYgbGF5b3V0RGF0YS5pc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxoMz5UaGlzIFRoZW1lIGlzIGVtcHR5LCBsZXQncyBhZGQgc29tZSBwYWdlcyE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdyYXBwZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBUaGVtZVdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGhlbWUvVGhlbWVXcmFwcGVyXCI7XG5cbmNvbnN0IFRoZW1lUGFnZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgPFRoZW1lV3JhcHBlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lUGFnZUNvbnRhaW5lcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVGhlbWVQYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL1RoZW1lUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFRoZW1lUGFnZUNvbnRhaW5lci8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcbiIsInZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IHJlZHVjZSwgcmVkdWNlUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19SSUdIVCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIGNhbGxiYWNrZm4sIGFyZ3VtZW50c0xlbmd0aCwgbWVtbykge1xuICAgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoYXQpO1xuICAgIHZhciBzZWxmID0gSW5kZXhlZE9iamVjdChPKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IElTX1JJR0hUID8gbGVuZ3RoIC0gMSA6IDA7XG4gICAgdmFyIGkgPSBJU19SSUdIVCA/IC0xIDogMTtcbiAgICBpZiAoYXJndW1lbnRzTGVuZ3RoIDwgMikgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgICAgIG1lbW8gPSBzZWxmW2luZGV4XTtcbiAgICAgICAgaW5kZXggKz0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgaWYgKElTX1JJR0hUID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKDtJU19SSUdIVCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSkgaWYgKGluZGV4IGluIHNlbGYpIHtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIHNlbGZbaW5kZXhdLCBpbmRleCwgTyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZVxuICBsZWZ0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZXJpZ2h0XG4gIHJpZ2h0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG4vLyBFZGdlIDE0LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIUhBU19TUEVDSUVTX1NVUFBPUlQgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJHJlZHVjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1yZWR1Y2UnKS5sZWZ0O1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ3JlZHVjZScpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ3JlZHVjZScsIHsgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnJlZHVjZVxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgcmVkdWNlOiBmdW5jdGlvbiByZWR1Y2UoY2FsbGJhY2tmbiAvKiAsIGluaXRpYWxWYWx1ZSAqLykge1xuICAgIHJldHVybiAkcmVkdWNlKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9