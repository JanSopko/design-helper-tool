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
  var pages = _ref.pages;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Smth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Buttons"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, pages.map(function (page) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: page
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, page), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, page), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, page));
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
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _PagesTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PagesTable */ "./assets/js/react/components/theme/PagesTable.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ThemeWrapper = function ThemeWrapper() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  var addPage = function addPage() {
    axios__WEBPACK_IMPORTED_MODULE_17___default.a.post('/create/page', {
      themeId: layoutData.themeId
    });
    showPages();
  };

  var showPages = function showPages() {
    var newPages = [];
    axios__WEBPACK_IMPORTED_MODULE_17___default.a.get("/data/theme/".concat(layoutData.themeId, "/pages")).then(function (res) {
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
    axios__WEBPACK_IMPORTED_MODULE_17___default.a.get("/data/theme/".concat(layoutData.themeId, "/pages")).then(function (res) {
      if (res.data.length > 0) {
        newPages = res.data.map(function (page) {
          return page.id;
        });
      }

      return newPages;
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    showPages();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h1", null, layoutData.themeName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("small", null, "By ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
    href: "#"
  }, layoutData.themeAuthor)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    id: "option-buttons-wrapper"
  }, layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
    className: "button-green"
  }, "Edit"), layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
    className: "button-yellow",
    onClick: function onClick() {
      return addPage();
    }
  }, "Add page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("button", {
    className: "button-blue"
  }, "Download")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("p", null, layoutData.themeDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, pages.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_PagesTable__WEBPACK_IMPORTED_MODULE_16__["default"], {
    pages: pages
  }), pages.length === 0 && layoutData.isMyTheme && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h3", null, "This Theme is empty, let's add some pages!")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
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

},[["./assets/js/react/pages/theme.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy90aGVtZS9QYWdlc1RhYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3RoZW1lL1RoZW1lV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9UaGVtZVBhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L3BhZ2VzL3RoZW1lLmpzIl0sIm5hbWVzIjpbIlBhZ2VzVGFibGUiLCJwYWdlcyIsIm1hcCIsInBhZ2UiLCJUaGVtZVdyYXBwZXIiLCJ1c2VTdGF0ZSIsInNldFBhZ2VzIiwiYWRkUGFnZSIsImF4aW9zIiwicG9zdCIsInRoZW1lSWQiLCJsYXlvdXREYXRhIiwic2hvd1BhZ2VzIiwibmV3UGFnZXMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImxlbmd0aCIsImlkIiwiZ2V0TmV3UGFnZXMiLCJ1c2VFZmZlY3QiLCJ0aGVtZU5hbWUiLCJ0aGVtZUF1dGhvciIsImlzTXlUaGVtZSIsInRoZW1lRGVzY3JpcHRpb24iLCJUaGVtZVBhZ2VDb250YWluZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFhO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQzVCLHNCQUNJLHVGQUNJLHVGQUNJLG9GQUNJLGdGQURKLGVBRUksOEVBRkosZUFHSSxpRkFISixDQURKLENBREosZUFRSSwwRUFDQ0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQUMsSUFBSSxFQUFJO0FBQ2Ysd0JBQ0U7QUFBSSxTQUFHLEVBQUVBO0FBQVQsb0JBQ0ksdUVBQUtBLElBQUwsQ0FESixlQUVJLHVFQUFLQSxJQUFMLENBRkosZUFHSSx1RUFBS0EsSUFBTCxDQUhKLENBREY7QUFPSCxHQVJBLENBREQsQ0FSSixDQURKO0FBc0JILENBdkJEOztBQXlCZUgseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBLGtCQUNHQyx1REFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBO0FBQUEsTUFDaEJKLEtBRGdCO0FBQUEsTUFDVEssUUFEUzs7QUFHdkIsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkMsaURBQUssQ0FBQ0MsSUFBTixDQUFXLGNBQVgsRUFBMkI7QUFDdkJDLGFBQU8sRUFBRUMsVUFBVSxDQUFDRDtBQURHLEtBQTNCO0FBR0FFLGFBQVM7QUFDWixHQUxEOztBQU9BLE1BQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsUUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQUwsaURBQUssQ0FBQ00sR0FBTix1QkFBeUJILFVBQVUsQ0FBQ0QsT0FBcEMsYUFBcURLLElBQXJELENBQTBELFVBQUFDLEdBQUcsRUFBSTtBQUM3RCxVQUFJQSxHQUFHLENBQUNDLElBQUosQ0FBU0MsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUNyQkwsZ0JBQVEsR0FBR0csR0FBRyxDQUFDQyxJQUFKLENBQVNmLEdBQVQsQ0FBYSxVQUFBQyxJQUFJLEVBQUk7QUFDNUIsaUJBQU9BLElBQUksQ0FBQ2dCLEVBQVo7QUFDSCxTQUZVLENBQVg7QUFHSDs7QUFDRGIsY0FBUSxDQUFDTyxRQUFELENBQVI7QUFDSCxLQVBEO0FBUUgsR0FWRDs7QUFZQSxNQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCLFFBQUlQLFFBQVEsR0FBRyxFQUFmO0FBQ0FMLGlEQUFLLENBQUNNLEdBQU4sdUJBQXlCSCxVQUFVLENBQUNELE9BQXBDLGFBQXFESyxJQUFyRCxDQUEwRCxVQUFBQyxHQUFHLEVBQUk7QUFDN0QsVUFBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVNDLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJMLGdCQUFRLEdBQUdHLEdBQUcsQ0FBQ0MsSUFBSixDQUFTZixHQUFULENBQWEsVUFBQUMsSUFBSSxFQUFJO0FBQzVCLGlCQUFPQSxJQUFJLENBQUNnQixFQUFaO0FBQ0gsU0FGVSxDQUFYO0FBR0g7O0FBQ0QsYUFBT04sUUFBUDtBQUNILEtBUEQ7QUFRSCxHQVZEOztBQVlBUSwwREFBUyxDQUFDLFlBQU07QUFDWlQsYUFBUztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDSTtBQUFLLE1BQUUsRUFBQztBQUFSLGtCQUNJLDBGQUNJLHdFQUFLRCxVQUFVLENBQUNXLFNBQWhCLENBREosZUFFSSwrRkFBVTtBQUFHLFFBQUksRUFBQztBQUFSLEtBQWFYLFVBQVUsQ0FBQ1ksV0FBeEIsQ0FBVixDQUZKLGVBR0k7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUVRWixVQUFVLENBQUNhLFNBQVgsaUJBQ0E7QUFBUSxhQUFTLEVBQUM7QUFBbEIsWUFIUixFQU1RYixVQUFVLENBQUNhLFNBQVgsaUJBQ0E7QUFDSSxhQUFTLEVBQUMsZUFEZDtBQUVJLFdBQU8sRUFBRTtBQUFBLGFBQU1qQixPQUFPLEVBQWI7QUFBQTtBQUZiLGdCQVBSLGVBY0k7QUFBUSxhQUFTLEVBQUM7QUFBbEIsZ0JBZEosQ0FISixlQW1CSSx1RUFBSUksVUFBVSxDQUFDYyxnQkFBZixDQW5CSixlQW9CSSx5RUFFSXhCLEtBQUssQ0FBQ2lCLE1BQU4sR0FBZSxDQUFmLGlCQUNJLDREQUFDLG9EQUFEO0FBQVksU0FBSyxFQUFFakI7QUFBbkIsSUFIUixFQU1LQSxLQUFLLENBQUNpQixNQUFOLEtBQWlCLENBQWxCLElBQXdCUCxVQUFVLENBQUNhLFNBQW5DLGlCQUNJLDBGQUNJLHFIQURKLENBUFIsQ0FwQkosQ0FESixlQWtDSSw0REFBQyxnREFBRCxPQWxDSixDQURKO0FBc0NILENBNUVEOztBQThFZXBCLDJFQUFmLEU7Ozs7Ozs7Ozs7OztBQ25GQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1zQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDN0Isc0JBQ0kscUZBQ0ksMkRBQUMsOERBQUQsT0FESixlQUVJLDJEQUFDLHNFQUFELE9BRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VBLGlGQUFmLEU7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBQyxnREFBUSxDQUFDQyxNQUFULGVBQ0ksMkRBQUMsc0VBQUQsT0FESixFQUVJQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSixFIiwiZmlsZSI6InRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGFnZXNUYWJsZSA9ICh7cGFnZXN9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPlNtdGg8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+QnV0dG9uczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cGFnZXMubWFwKHBhZ2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3BhZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGFnZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGFnZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cGFnZX08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VzVGFibGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IFBhZ2VzVGFibGUgZnJvbSBcIi4vUGFnZXNUYWJsZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgVGhlbWVXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwYWdlcywgc2V0UGFnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgYWRkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCgnL2NyZWF0ZS9wYWdlJywge1xuICAgICAgICAgICAgdGhlbWVJZDogbGF5b3V0RGF0YS50aGVtZUlkXG4gICAgICAgIH0pO1xuICAgICAgICBzaG93UGFnZXMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93UGFnZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCBuZXdQYWdlcyA9IFtdO1xuICAgICAgICBheGlvcy5nZXQoYC9kYXRhL3RoZW1lLyR7bGF5b3V0RGF0YS50aGVtZUlkfS9wYWdlc2ApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3UGFnZXMgPSByZXMuZGF0YS5tYXAocGFnZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYWdlLmlkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0UGFnZXMobmV3UGFnZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXROZXdQYWdlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IG5ld1BhZ2VzID0gW107XG4gICAgICAgIGF4aW9zLmdldChgL2RhdGEvdGhlbWUvJHtsYXlvdXREYXRhLnRoZW1lSWR9L3BhZ2VzYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdQYWdlcyA9IHJlcy5kYXRhLm1hcChwYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2UuaWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3UGFnZXM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNob3dQYWdlcygpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMT57bGF5b3V0RGF0YS50aGVtZU5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8c21hbGw+QnkgPGEgaHJlZj1cIiNcIj57bGF5b3V0RGF0YS50aGVtZUF1dGhvcn08L2E+PC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3B0aW9uLWJ1dHRvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXREYXRhLmlzTXlUaGVtZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIj5FZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0RGF0YS5pc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24teWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRQYWdlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWJsdWVcIj5Eb3dubG9hZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPntsYXlvdXREYXRhLnRoZW1lRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWdlcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZXNUYWJsZSBwYWdlcz17cGFnZXN9IC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKHBhZ2VzLmxlbmd0aCA9PT0gMCkgJiYgbGF5b3V0RGF0YS5pc015VGhlbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5UaGlzIFRoZW1lIGlzIGVtcHR5LCBsZXQncyBhZGQgc29tZSBwYWdlcyE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVtZVdyYXBwZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBUaGVtZVdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGhlbWUvVGhlbWVXcmFwcGVyXCI7XG5cbmNvbnN0IFRoZW1lUGFnZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgPFRoZW1lV3JhcHBlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZW1lUGFnZUNvbnRhaW5lcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVGhlbWVQYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL1RoZW1lUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFRoZW1lUGFnZUNvbnRhaW5lci8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==