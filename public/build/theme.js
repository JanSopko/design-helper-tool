(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["theme"],{

/***/ "./assets/js/react/components/theme/PagesTable.js":
/*!********************************************************!*\
  !*** ./assets/js/react/components/theme/PagesTable.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var PagesTable = function PagesTable(_ref) {
  var pages = _ref.pages,
      _ref$isMyTheme = _ref.isMyTheme,
      isMyTheme = _ref$isMyTheme === void 0 ? false : _ref$isMyTheme;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    id: "pages-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, pages.map(function (page) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: page
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, page), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "page-buttons"
    }, isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button-red"
    }, "Delete"), isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button-green"
    }, "Edit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button-blue"
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
          return page.urlHash;
        });
      }

      setPages(newPages);
    });
  };

  var getNewPages = function getNewPages() {
    var newPages = [];
    axios__WEBPACK_IMPORTED_MODULE_19___default.a.get("/data/theme/".concat(layoutData.themeId, "/pages")).then(function (res) {
      if (res.data.length > 0) {
        newPages = res.data.map(function (page) {
          return page.id;
        });
      }

      return newPages;
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
    className: "button-blue"
  }, "Download"), layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("button", {
    className: "button-red",
    onClick: function onClick() {
      if (confirm('Are you sure you want to delete this Theme?')) {
        deleteTheme(layoutData.themeId);
      }
    }
  }, "Delete Theme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("p", null, layoutData.themeDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, pages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h2", null, "List of pages:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_PagesTable__WEBPACK_IMPORTED_MODULE_18__["default"], {
    pages: pages,
    isMyTheme: layoutData.isMyTheme
  })), pages.length === 0 && layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h3", null, "This Theme is empty, let's add some pages!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], null));
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

},[["./assets/js/react/pages/theme.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","vendors~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy90aGVtZS9QYWdlc1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3RoZW1lL1RoZW1lV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9UaGVtZVBhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L3BhZ2VzL3RoZW1lLmpzIl0sIm5hbWVzIjpbIlBhZ2VzVGFibGUiLCJwYWdlcyIsImlzTXlUaGVtZSIsIm1hcCIsInBhZ2UiLCJUaGVtZVdyYXBwZXIiLCJ1c2VTdGF0ZSIsInNldFBhZ2VzIiwiYWRkUGFnZSIsImF4aW9zIiwicG9zdCIsInRoZW1lSWQiLCJsYXlvdXREYXRhIiwidGhlbiIsInNob3dQYWdlcyIsIm5ld1BhZ2VzIiwiZ2V0IiwicmVzIiwiZGF0YSIsImxlbmd0aCIsInVybEhhc2giLCJnZXROZXdQYWdlcyIsImlkIiwiZGVsZXRlVGhlbWUiLCJzdWNjZXNzIiwiYWxlcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwidGhlbWVOYW1lIiwidGhlbWVBdXRob3IiLCJjb25maXJtIiwidGhlbWVEZXNjcmlwdGlvbiIsIlRoZW1lUGFnZUNvbnRhaW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLDRCQUF2QkMsU0FBdUI7QUFBQSxNQUF2QkEsU0FBdUIsK0JBQVgsS0FBVztBQUMvQyxzQkFDSTtBQUFPLE1BQUUsRUFBQztBQUFWLGtCQUNJLHVGQUNJLG9GQUNJLHNF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LE9BdkRKLENBREo7QUEyREgsQ0E3R0Q7O0FBK0dlRywyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNOEIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLHNCQUNJLHFGQUNJLDJEQUFDLDhEQUFELE9BREosZUFFSSwyREFBQyxzRUFBRCxPQUZKLENBREo7QUFNSCxDQVBEOztBQVNlQSxpRkFBZixFOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLHNFQUFELE9BREosRUFFSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBRkosRSIsImZpbGUiOiJ0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBhZ2VzVGFibGUgPSAoe3BhZ2VzLCBpc015VGhlbWUgPSBmYWxzZX0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDx0YWJsZSBpZD1cInBhZ2VzLXRhYmxlXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3BhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGFnZS1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcmVkXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNeVRoZW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlblwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1ibHVlXCI+UHJldmlldzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZXNUYWJsZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgUGFnZXNUYWJsZSBmcm9tIFwiLi9QYWdlc1RhYmxlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBUaGVtZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3BhZ2VzLCBzZXRQYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBhZGRQYWdlID0gKCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KCcvY3JlYXRlL3BhZ2UnLCB7XG4gICAgICAgICAgICB0aGVtZUlkOiBsYXlvdXREYXRhLnRoZW1lSWRcbiAgICAgICAgfSkudGhlbigoKSA9PiBzaG93UGFnZXMoKSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1BhZ2VzID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmV3UGFnZXMgPSBbXTtcbiAgICAgICAgYXhpb3MuZ2V0KGAvZGF0YS90aGVtZS8ke2xheW91dERhdGEudGhlbWVJZH0vcGFnZXNgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld1BhZ2VzID0gcmVzLmRhdGEubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFnZS51cmxIYXNoO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0UGFnZXMobmV3UGFnZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROZXdQYWdlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5ld1BhZ2VzID0gW107XG4gICAgICAgIGF4aW9zLmdldChgL2RhdGEvdGhlbWUvJHtsYXlvdXREYXRhLnRoZW1lSWR9L3BhZ2VzYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdQYWdlcyA9IHJlcy5kYXRhLm1hcChwYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UuaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3UGFnZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVRoZW1lID0gdGhlbWVJZCA9PiB7XG4gICAgICAgIGF4aW9zLmRlbGV0ZShgL2RlbGV0ZS90aGVtZS8ke3RoZW1lSWR9YCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAvL3RvZG8gc2V0VGltZW91dCwgbG9hZGVyIGtydXpvayArIHJlZGlyZWN0XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1RoZW1lIGRlbGV0ZWQnKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL215X3RoZW1lcycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQocmVzLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2hvd1BhZ2VzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGgxPntsYXlvdXREYXRhLnRoZW1lTmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxzbWFsbD5CeSA8YSBocmVmPVwiI1wiPntsYXlvdXREYXRhLnRoZW1lQXV0aG9yfTwvYT48L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJvcHRpb24tYnV0dG9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dERhdGEuaXNNeVRoZW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi15ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFBhZ2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tYmx1ZVwiPkRvd25sb2FkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dERhdGEuaXNNeVRoZW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUaGVtZT8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRoZW1lKGxheW91dERhdGEudGhlbWVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFRoZW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPntsYXlvdXREYXRhLnRoZW1lRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MaXN0IG9mIHBhZ2VzOjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VzVGFibGUgcGFnZXM9e3BhZ2VzfSBpc015VGhlbWU9e2xheW91dERhdGEuaXNNeVRoZW1lfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAocGFnZXMubGVuZ3RoID09PSAwKSAmJiBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRoaXMgVGhlbWUgaXMgZW1wdHksIGxldCdzIGFkZCBzb21lIHBhZ2VzITwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV3JhcHBlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IFRoZW1lV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy90aGVtZS9UaGVtZVdyYXBwZXJcIjtcblxuY29uc3QgVGhlbWVQYWdlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICA8VGhlbWVXcmFwcGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVQYWdlQ29udGFpbmVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUaGVtZVBhZ2VDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvVGhlbWVQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8VGhlbWVQYWdlQ29udGFpbmVyLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXSwic291cmNlUm9vdCI6IiJ9