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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Page Hash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, pages.map(function (page) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: page
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, page), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button-blue"
    }, "Preview")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button-green"
    }, "Edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button-red"
    }, "Delete")));
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
          return page.id;
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
    className: "button-green",
    onClick: function onClick() {
      window.location.href = '/create-page';
    }
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
  }, "Delete Theme")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("p", null, layoutData.themeDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("div", null, pages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_PagesTable__WEBPACK_IMPORTED_MODULE_18__["default"], {
    pages: pages,
    isMyTheme: layoutData.isMyTheme
  }), pages.length === 0 && layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement("h3", null, "This Theme is empty, let's add some pages!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_17__["default"], null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy90aGVtZS9QYWdlc1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3RoZW1lL1RoZW1lV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9UaGVtZVBhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L3BhZ2VzL3RoZW1lLmpzIl0sIm5hbWVzIjpbIlBhZ2VzVGFibGUiLCJwYWdlcyIsImlzTXlUaGVtZSIsIm1hcCIsInBhZ2UiLCJUaGVtZVdyYXBwZXIiLCJ1c2VTdGF0ZSIsInNldFBhZ2VzIiwiYWRkUGFnZSIsImF4aW9zIiwicG9zdCIsInRoZW1lSWQiLCJsYXlvdXREYXRhIiwidGhlbiIsInNob3dQYWdlcyIsIm5ld1BhZ2VzIiwiZ2V0IiwicmVzIiwiZGF0YSIsImxlbmd0aCIsImlkIiwiZ2V0TmV3UGFnZXMiLCJkZWxldGVUaGVtZSIsInN1Y2Nlc3MiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm1lc3NhZ2UiLCJ1c2VFZmZlY3QiLCJ0aGVtZU5hbWUiLCJ0aGVtZUF1dGhvciIsImhyZWYiLCJjb25maXJtIiwidGhlbWVEZXNjcmlwdGlvbiIsIlRoZW1lUGFnZUNvbnRhaW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdDO0FBQUEsTUFBOUJDLEtBQThCLFFBQTlCQSxLQUE4QjtBQUFBLDRCQUF2QkMsU0FBdUI7QUFBQSxNQUF2QkEsU0FBdUIsK0JBQVgsS0FBVztBQUMvQyxzQkFDSTtBQUFPLE1BQUUsRUFBQztBQUFWLGtCQUNJLHVGQUNJLG9GQUNJLG1GQURK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Q0FBbEIsSUFBd0JQLFVBQVUsQ0FBQ1YsU0FBbkMsaUJBQ0ksMEZBQ0kscUhBREosQ0FQUixDQXZDSixDQURKLGVBcURJLDREQUFDLGdEQUFELE9BckRKLENBREo7QUF5REgsQ0EzR0Q7O0FBNkdlRywyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNsSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNOEIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLHNCQUNJLHFGQUNJLDJEQUFDLDhEQUFELE9BREosZUFFSSwyREFBQyxzRUFBRCxPQUZKLENBREo7QUFNSCxDQVBEOztBQVNlQSxpRkFBZixFOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLHNFQUFELE9BREosRUFFSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBRkosRSIsImZpbGUiOiJ0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBhZ2VzVGFibGUgPSAoe3BhZ2VzLCBpc015VGhlbWUgPSBmYWxzZX0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDx0YWJsZSBpZD1cInBhZ2VzLXRhYmxlXCI+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+UGFnZSBIYXNoPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtwYWdlcy5tYXAocGFnZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17cGFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tYmx1ZVwiPlByZXZpZXc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNeVRoZW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcmVkXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VzVGFibGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IFBhZ2VzVGFibGUgZnJvbSBcIi4vUGFnZXNUYWJsZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgVGhlbWVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgYWRkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCgnL2NyZWF0ZS9wYWdlJywge1xuICAgICAgICAgICAgdGhlbWVJZDogbGF5b3V0RGF0YS50aGVtZUlkXG4gICAgICAgIH0pLnRoZW4oKCkgPT4gc2hvd1BhZ2VzKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dQYWdlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5ld1BhZ2VzID0gW107XG4gICAgICAgIGF4aW9zLmdldChgL2RhdGEvdGhlbWUvJHtsYXlvdXREYXRhLnRoZW1lSWR9L3BhZ2VzYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdQYWdlcyA9IHJlcy5kYXRhLm1hcChwYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UuaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRQYWdlcyhuZXdQYWdlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5ld1BhZ2VzID0gKCkgPT4ge1xuICAgICAgICBsZXQgbmV3UGFnZXMgPSBbXTtcbiAgICAgICAgYXhpb3MuZ2V0KGAvZGF0YS90aGVtZS8ke2xheW91dERhdGEudGhlbWVJZH0vcGFnZXNgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIG5ld1BhZ2VzID0gcmVzLmRhdGEubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFnZS5pZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdQYWdlcztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGhlbWUgPSB0aGVtZUlkID0+IHtcbiAgICAgICAgYXhpb3MuZGVsZXRlKGAvZGVsZXRlL3RoZW1lLyR7dGhlbWVJZH1gKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIC8vdG9kbyBzZXRUaW1lb3V0LCBsb2FkZXIga3J1em9rICsgcmVkaXJlY3RcbiAgICAgICAgICAgICAgICBhbGVydCgnVGhlbWUgZGVsZXRlZCcpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvbXlfdGhlbWVzJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBhbGVydChyZXMuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzaG93UGFnZXMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aDE+e2xheW91dERhdGEudGhlbWVOYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgPHNtYWxsPkJ5IDxhIGhyZWY9XCIjXCI+e2xheW91dERhdGEudGhlbWVBdXRob3J9PC9hPjwvc21hbGw+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm9wdGlvbi1idXR0b25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0RGF0YS5pc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY3JlYXRlLXBhZ2UnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi15ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFBhZ2UoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tYmx1ZVwiPkRvd25sb2FkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dERhdGEuaXNNeVRoZW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBUaGVtZT8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRoZW1lKGxheW91dERhdGEudGhlbWVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlIFRoZW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPntsYXlvdXREYXRhLnRoZW1lRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZXNUYWJsZSBwYWdlcz17cGFnZXN9IGlzTXlUaGVtZT17bGF5b3V0RGF0YS5pc015VGhlbWV9Lz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAocGFnZXMubGVuZ3RoID09PSAwKSAmJiBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRoaXMgVGhlbWUgaXMgZW1wdHksIGxldCdzIGFkZCBzb21lIHBhZ2VzITwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lV3JhcHBlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IFRoZW1lV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy90aGVtZS9UaGVtZVdyYXBwZXJcIjtcblxuY29uc3QgVGhlbWVQYWdlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICA8VGhlbWVXcmFwcGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVQYWdlQ29udGFpbmVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUaGVtZVBhZ2VDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvVGhlbWVQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8VGhlbWVQYWdlQ29udGFpbmVyLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXSwic291cmNlUm9vdCI6IiJ9