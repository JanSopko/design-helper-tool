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
  var THEMES_DATA_URL = '/data/themes';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9icm93c2UvQnJvd3NlUGFnZVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvYnJvd3NlL1RoZW1lQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9icm93c2VQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9wYWdlcy9icm93c2UuanMiXSwibmFtZXMiOlsiYnJvd3NlUGFnZVdyYXBwZXIiLCJUSEVNRVNfREFUQV9VUkwiLCJ1c2VTdGF0ZSIsInRoZW1lcyIsInNldFRoZW1lcyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJtYXAiLCJ0aGVtZSIsImlkIiwidXNlcl9uYW1lIiwibmFtZSIsImltZ19wYXRoIiwicmVkaXJlY3QiLCJsb2NhdGlvbiIsIndpbmRvdyIsImhyZWYiLCJUaGVtZUNhcmQiLCJ0aGVtZUlkIiwiaW1nUGF0aCIsImF1dGhvciIsInBhdGhUb1RoZW1lIiwidGhlbWVQYXRoMiIsIkJyb3dzZVBhZ2VDb250YWluZXIiLCJwcm9wcyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsaUJBQVQsR0FBNkI7QUFDeEMsTUFBTUMsZUFBZSxHQUFHLGNBQXhCOztBQUR3QyxrQkFHWkMsdURBQVEsQ0FBQyxFQUFELENBSEk7QUFBQTtBQUFBLE1BR2pDQyxNQUhpQztBQUFBLE1BR3pCQyxTQUh5Qjs7QUFLeENDLDBEQUFTLENBQUMsWUFBTTtBQUNSQyxpREFBSyxDQUFDQyxHQUFOLENBQVVOLGVBQVYsRUFDS08sSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNUTCxlQUFTLENBQUNLLEdBQUcsQ0FBQ0MsSUFBTCxDQUFUO0FBQ0gsS0FITDtBQUlILEdBTEksRUFLRixFQUxFLENBQVQ7QUFPQSxzQkFDSTtBQUFLLE1BQUUsRUFBQztBQUFSLEtBRVFQLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQUFDLEtBQUssRUFBSTtBQUNwQix3QkFDSSw0REFBQyxxREFBRDtBQUNJLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxFQURmO0FBRUksYUFBTyxFQUFFRCxLQUFLLENBQUNDLEVBRm5CO0FBR0ksWUFBTSxFQUFFRCxLQUFLLENBQUNFLFNBSGxCO0FBSUksVUFBSSxFQUFFRixLQUFLLENBQUNHLElBSmhCO0FBS0ksYUFBTyxFQUFFSCxLQUFLLENBQUNJO0FBTG5CLE1BREo7QUFTQyxHQVZELENBRlIsZUFjSSw0REFBQyxnREFBRCxPQWRKLENBREo7QUFtQkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDRDs7QUFHQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxRQUFRLEVBQUk7QUFDekJDLFFBQU0sQ0FBQ0QsUUFBUCxDQUFnQkUsSUFBaEIsR0FBdUJGLFFBQXZCO0FBQ0gsQ0FGRDs7QUFJTyxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF1QztBQUFBLE1BQXJDQyxPQUFxQyxRQUFyQ0EsT0FBcUM7QUFBQSxNQUEzQlAsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJRLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUM1RCxNQUFNQyxXQUFXLEdBQUcsWUFBWUgsT0FBaEM7O0FBQ0EsTUFBSSxDQUFDQyxPQUFELElBQVlBLE9BQU8sS0FBSyxFQUE1QixFQUFnQztBQUM1QkEsV0FBTyxHQUFHLHNCQUFWO0FBQ0g7O0FBQ0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixNQUFFLEVBQUVELE9BQWhDO0FBQXlDLFdBQU8sRUFBRTtBQUFBLGFBQU1MLFFBQVEsQ0FBQ1EsV0FBRCxDQUFkO0FBQUE7QUFBbEQsa0JBQ0ksdUVBQUtWLElBQUwsQ0FESixlQUVJLHFGQUFLLDhGQUFVO0FBQUcsUUFBSSxFQUFFVSxXQUFUO0FBQXNCLFdBQU8sRUFBRSxpQkFBQUMsVUFBVTtBQUFBLGFBQUlULFFBQVEsQ0FBQ1MsVUFBRCxDQUFaO0FBQUE7QUFBekMsS0FBb0VGLE1BQXBFLENBQVYsQ0FBTCxDQUZKLGVBR0ksc0VBSEosZUFJSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssT0FBRyxFQUFFRCxPQUFWO0FBQW1CLE9BQUcsRUFBQztBQUF2QixJQURKLENBSkosQ0FESjtBQVVILENBZk0sQzs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0ksbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQy9DLHNCQUNJLHFGQUNJLDJEQUFDLDhEQUFELE9BREosZUFHSSwyREFBQyw0RUFBRCxPQUhKLENBREo7QUFRSCxDOzs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLHVFQUFELE9BREosRUFFSVgsTUFBTSxDQUFDWSxRQUFQLENBQWdCQyxjQUFoQixDQUErQixNQUEvQixDQUZKLEUiLCJmaWxlIjoiYnJvd3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBUaGVtZUNhcmQgfSBmcm9tIFwiLi9UaGVtZUNhcmRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBicm93c2VQYWdlV3JhcHBlcigpIHtcbiAgICBjb25zdCBUSEVNRVNfREFUQV9VUkwgPSAnL2RhdGEvdGhlbWVzJztcblxuICAgIGNvbnN0IFt0aGVtZXMsIHNldFRoZW1lc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KFRIRU1FU19EQVRBX1VSTClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZXMocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGVtZXMubWFwKHRoZW1lID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxUaGVtZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhlbWUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVtZUlkPXt0aGVtZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17dGhlbWUudXNlcl9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhlbWUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ1BhdGg9e3RoZW1lLmltZ19wYXRofVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8Rm9vdGVyPlxuICAgICAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCByZWRpcmVjdCA9IGxvY2F0aW9uID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgVGhlbWVDYXJkID0gKHt0aGVtZUlkICwgbmFtZSwgaW1nUGF0aCwgYXV0aG9yfSkgPT4ge1xuICAgIGNvbnN0IHBhdGhUb1RoZW1lID0gJy90aGVtZS8nICsgdGhlbWVJZDtcbiAgICBpZiAoIWltZ1BhdGggfHwgaW1nUGF0aCA9PT0gJycpIHtcbiAgICAgICAgaW1nUGF0aCA9ICcuL2ltZy9uby1wcmV2aWV3LnBuZyc7XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1jYXJkXCIgaWQ9e3RoZW1lSWR9IG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KHBhdGhUb1RoZW1lKX0+XG4gICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgICAgICAgIDxkaXY+PHNtYWxsPkJ5IDxhIGhyZWY9e3BhdGhUb1RoZW1lfSBvbkNsaWNrPXt0aGVtZVBhdGgyID0+IHJlZGlyZWN0KHRoZW1lUGF0aDIpfT57YXV0aG9yfTwvYT48L3NtYWxsPjwvZGl2PlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtY2FyZC1pbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQYXRofSBhbHQ9XCJ0aGVtZSBkZXRhaWxcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBCcm93c2VQYWdlV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9icm93c2UvQnJvd3NlUGFnZVdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnJvd3NlUGFnZUNvbnRhaW5lcihwcm9wcykge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uPlxuICAgICAgICAgICAgPC9OYXZpZ2F0aW9uPlxuICAgICAgICAgICAgPEJyb3dzZVBhZ2VXcmFwcGVyPlxuICAgICAgICAgICAgPC9Ccm93c2VQYWdlV3JhcHBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQnJvd3NlUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9icm93c2VQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8QnJvd3NlUGFnZUNvbnRhaW5lcj48L0Jyb3dzZVBhZ2VDb250YWluZXI+LFxuICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIilcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9