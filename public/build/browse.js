(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browse"],{

/***/ "./assets/js/react/components/browse/BrowsePageWrapper.js":
/*!****************************************************************!*\
  !*** ./assets/js/react/components/browse/BrowsePageWrapper.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return browsePageWrapper; });
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ThemeCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ThemeCard */ "./assets/js/react/components/browse/ThemeCard.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function browsePageWrapper() {
  var THEMES_DATA_URL = "/data/themes?page=".concat(layoutData.page);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      themes = _useState2[0],
      setThemes = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(THEMES_DATA_URL).then(function (res) {
      setThemes(res.data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    id: "content"
  }, themes.map(function (theme) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_ThemeCard__WEBPACK_IMPORTED_MODULE_17__["ThemeCard"], {
      key: theme.id,
      themeId: theme.id,
      author: theme.user_name,
      name: theme.name,
      imgPath: theme.img_path
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
}

/***/ }),

/***/ "./assets/js/react/components/browse/ThemeCard.js":
/*!********************************************************!*\
  !*** ./assets/js/react/components/browse/ThemeCard.js ***!
  \********************************************************/
/*! exports provided: ThemeCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeCard", function() { return ThemeCard; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var redirect = function redirect(location) {
  window.location.href = location;
};

var ThemeCard = function ThemeCard(_ref) {
  var themeId = _ref.themeId,
      name = _ref.name,
      imgPath = _ref.imgPath,
      author = _ref.author;
  var pathToTheme = '/theme/' + themeId;

  if (!imgPath || imgPath === '') {
    imgPath = './img/no-preview.png';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "theme-card",
    id: themeId,
    onClick: function onClick() {
      return redirect(pathToTheme);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "By ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: pathToTheme,
    onClick: function onClick(themePath2) {
      return redirect(themePath2);
    }
  }, author))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "theme-card-img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: imgPath,
    alt: "theme detail"
  })));
};

/***/ }),

/***/ "./assets/js/react/containers/browsePageContainer.js":
/*!***********************************************************!*\
  !*** ./assets/js/react/containers/browsePageContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BrowsePageContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ "./assets/js/react/components/Navigation.js");
/* harmony import */ var _components_browse_BrowsePageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/browse/BrowsePageWrapper */ "./assets/js/react/components/browse/BrowsePageWrapper.js");



function BrowsePageContainer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_browse_BrowsePageWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./assets/js/react/pages/browse.js":
/*!*****************************************!*\
  !*** ./assets/js/react/pages/browse.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_browsePageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/browsePageContainer */ "./assets/js/react/containers/browsePageContainer.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_browsePageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), window.document.getElementById("root"));

/***/ })

},[["./assets/js/react/pages/browse.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9icm93c2UvQnJvd3NlUGFnZVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvYnJvd3NlL1RoZW1lQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9icm93c2VQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9wYWdlcy9icm93c2UuanMiXSwibmFtZXMiOlsiYnJvd3NlUGFnZVdyYXBwZXIiLCJUSEVNRVNfREFUQV9VUkwiLCJsYXlvdXREYXRhIiwicGFnZSIsInVzZVN0YXRlIiwidGhlbWVzIiwic2V0VGhlbWVzIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIm1hcCIsInRoZW1lIiwiaWQiLCJ1c2VyX25hbWUiLCJuYW1lIiwiaW1nX3BhdGgiLCJyZWRpcmVjdCIsImxvY2F0aW9uIiwid2luZG93IiwiaHJlZiIsIlRoZW1lQ2FyZCIsInRoZW1lSWQiLCJpbWdQYXRoIiwiYXV0aG9yIiwicGF0aFRvVGhlbWUiLCJ0aGVtZVBhdGgyIiwiQnJvd3NlUGFnZUNvbnRhaW5lciIsInByb3BzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxpQkFBVCxHQUE2QjtBQUN4QyxNQUFNQyxlQUFlLCtCQUF3QkMsVUFBVSxDQUFDQyxJQUFuQyxDQUFyQjs7QUFEd0Msa0JBR1pDLHVEQUFRLENBQUMsRUFBRCxDQUhJO0FBQUE7QUFBQSxNQUdqQ0MsTUFIaUM7QUFBQSxNQUd6QkMsU0FIeUI7O0FBS3hDQywwREFBUyxDQUFDLFlBQU07QUFDUkMsaURBQUssQ0FBQ0MsR0FBTixDQUFVUixlQUFWLEVBQ0tTLElBREwsQ0FDVSxVQUFBQyxHQUFHLEVBQUk7QUFDVEwsZUFBUyxDQUFDSyxHQUFHLENBQUNDLElBQUwsQ0FBVDtBQUNILEtBSEw7QUFJSCxHQUxJLEVBS0YsRUFMRSxDQUFUO0FBT0Esc0JBQ0k7QUFBSyxNQUFFLEVBQUM7QUFBUixLQUVRUCxNQUFNLENBQUNRLEdBQVAsQ0FBVyxVQUFBQyxLQUFLLEVBQUk7QUFDcEIsd0JBQ0ksNERBQUMscURBQUQ7QUFDSSxTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsRUFEZjtBQUVJLGFBQU8sRUFBRUQsS0FBSyxDQUFDQyxFQUZuQjtBQUdJLFlBQU0sRUFBRUQsS0FBSyxDQUFDRSxTQUhsQjtBQUlJLFVBQUksRUFBRUYsS0FBSyxDQUFDRyxJQUpoQjtBQUtJLGFBQU8sRUFBRUgsS0FBSyxDQUFDSTtBQUxuQixNQURKO0FBU0MsR0FWRCxDQUZSLGVBY0ksNERBQUMsZ0RBQUQsT0FkSixDQURKO0FBbUJILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0Q7O0FBR0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsUUFBUSxFQUFJO0FBQ3pCQyxRQUFNLENBQUNELFFBQVAsQ0FBZ0JFLElBQWhCLEdBQXVCRixRQUF2QjtBQUNILENBRkQ7O0FBSU8sSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUM7QUFBQSxNQUFyQ0MsT0FBcUMsUUFBckNBLE9BQXFDO0FBQUEsTUFBM0JQLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLE1BQXJCUSxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDNUQsTUFBTUMsV0FBVyxHQUFHLFlBQVlILE9BQWhDOztBQUNBLE1BQUksQ0FBQ0MsT0FBRCxJQUFZQSxPQUFPLEtBQUssRUFBNUIsRUFBZ0M7QUFDNUJBLFdBQU8sR0FBRyxzQkFBVjtBQUNIOztBQUNELHNCQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBNEIsTUFBRSxFQUFFRCxPQUFoQztBQUF5QyxXQUFPLEVBQUU7QUFBQSxhQUFNTCxRQUFRLENBQUNRLFdBQUQsQ0FBZDtBQUFBO0FBQWxELGtCQUNJLHVFQUFLVixJQUFMLENBREosZUFFSSxxRkFBSyw4RkFBVTtBQUFHLFFBQUksRUFBRVUsV0FBVDtBQUFzQixXQUFPLEVBQUUsaUJBQUFDLFVBQVU7QUFBQSxhQUFJVCxRQUFRLENBQUNTLFVBQUQsQ0FBWjtBQUFBO0FBQXpDLEtBQW9FRixNQUFwRSxDQUFWLENBQUwsQ0FGSixlQUdJLHNFQUhKLGVBSUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLE9BQUcsRUFBRUQsT0FBVjtBQUFtQixPQUFHLEVBQUM7QUFBdkIsSUFESixDQUpKLENBREo7QUFVSCxDQWZNLEM7Ozs7Ozs7Ozs7OztBQ1BQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNJLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUMvQyxzQkFDSSxxRkFDSSwyREFBQyw4REFBRCxPQURKLGVBR0ksMkRBQUMsNEVBQUQsT0FISixDQURKO0FBUUgsQzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFDLGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyx1RUFBRCxPQURKLEVBRUlYLE1BQU0sQ0FBQ1ksUUFBUCxDQUFnQkMsY0FBaEIsQ0FBK0IsTUFBL0IsQ0FGSixFIiwiZmlsZSI6ImJyb3dzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSAsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgVGhlbWVDYXJkIH0gZnJvbSBcIi4vVGhlbWVDYXJkXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnJvd3NlUGFnZVdyYXBwZXIoKSB7XG4gICAgY29uc3QgVEhFTUVTX0RBVEFfVVJMID0gYC9kYXRhL3RoZW1lcz9wYWdlPSR7bGF5b3V0RGF0YS5wYWdlfWA7XG5cbiAgICBjb25zdCBbdGhlbWVzLCBzZXRUaGVtZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGF4aW9zLmdldChUSEVNRVNfREFUQV9VUkwpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVzKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhlbWVzLm1hcCh0aGVtZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8VGhlbWVDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoZW1lLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVJZD17dGhlbWUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3RoZW1lLnVzZXJfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoZW1lLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdQYXRoPXt0aGVtZS5pbWdfcGF0aH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBsb2NhdGlvbiA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lQ2FyZCA9ICh7dGhlbWVJZCAsIG5hbWUsIGltZ1BhdGgsIGF1dGhvcn0pID0+IHtcbiAgICBjb25zdCBwYXRoVG9UaGVtZSA9ICcvdGhlbWUvJyArIHRoZW1lSWQ7XG4gICAgaWYgKCFpbWdQYXRoIHx8IGltZ1BhdGggPT09ICcnKSB7XG4gICAgICAgIGltZ1BhdGggPSAnLi9pbWcvbm8tcHJldmlldy5wbmcnO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtY2FyZFwiIGlkPXt0aGVtZUlkfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChwYXRoVG9UaGVtZSl9PlxuICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2PjxzbWFsbD5CeSA8YSBocmVmPXtwYXRoVG9UaGVtZX0gb25DbGljaz17dGhlbWVQYXRoMiA9PiByZWRpcmVjdCh0aGVtZVBhdGgyKX0+e2F1dGhvcn08L2E+PC9zbWFsbD48L2Rpdj5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNhcmQtaW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aH0gYWx0PVwidGhlbWUgZGV0YWlsXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgQnJvd3NlUGFnZVdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYnJvd3NlL0Jyb3dzZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyb3dzZVBhZ2VDb250YWluZXIocHJvcHMpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbj5cbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cbiAgICAgICAgICAgIDxCcm93c2VQYWdlV3JhcHBlcj5cbiAgICAgICAgICAgIDwvQnJvd3NlUGFnZVdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJyb3dzZVBhZ2VDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvYnJvd3NlUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEJyb3dzZVBhZ2VDb250YWluZXI+PC9Ccm93c2VQYWdlQ29udGFpbmVyPixcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==