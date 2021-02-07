(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myThemes"],{

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

/***/ "./assets/js/react/components/myThemes/myThemesWrapper.js":
/*!****************************************************************!*\
  !*** ./assets/js/react/components/myThemes/myThemesWrapper.js ***!
  \****************************************************************/
/*! exports provided: MyThemesWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyThemesWrapper", function() { return MyThemesWrapper; });
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
/* harmony import */ var _browse_ThemeCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../browse/ThemeCard */ "./assets/js/react/components/browse/ThemeCard.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var MyThemesWrapper = function MyThemesWrapper() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      themes = _useState2[0],
      setThemes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loaded = _useState4[0],
      setLoaded = _useState4[1];

  var MY_THEMES_DATA_URL = '/data/my_all_themes';
  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    if (layoutData && layoutData.themes) {
      setThemes(layoutData.themes);
      setLoaded(true);
    } else {
      axios__WEBPACK_IMPORTED_MODULE_16___default.a.get(MY_THEMES_DATA_URL).then(function (res) {
        if (res.data) {
          setThemes(res.data);
        }
      }).then(function () {
        setLoaded(true);
      });
    }
  }, []);

  if (themes && themes.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      id: "content"
    }, themes.map(function (theme) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_browse_ThemeCard__WEBPACK_IMPORTED_MODULE_17__["ThemeCard"], {
        key: theme.id,
        themeId: theme.id,
        author: theme.user_name,
        name: theme.name,
        imgPath: theme.img_path
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
  } else if (loaded) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      id: "content",
      className: "no-themes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h2", null, "You haven't created any Themes yet... "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
      className: "create-theme-link",
      href: "/create-theme",
      onClick: function onClick() {
        return window.location.href = '/create-theme';
      }
    }, "Create a new Theme!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      id: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
  }
};

/***/ }),

/***/ "./assets/js/react/containers/myThemesPageContainer.js":
/*!*************************************************************!*\
  !*** ./assets/js/react/containers/myThemesPageContainer.js ***!
  \*************************************************************/
/*! exports provided: MyThemesContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyThemesContainer", function() { return MyThemesContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ "./assets/js/react/components/Navigation.js");
/* harmony import */ var _components_myThemes_myThemesWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/myThemes/myThemesWrapper */ "./assets/js/react/components/myThemes/myThemesWrapper.js");



var MyThemesContainer = function MyThemesContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_myThemes_myThemesWrapper__WEBPACK_IMPORTED_MODULE_2__["MyThemesWrapper"], null));
};

/***/ }),

/***/ "./assets/js/react/pages/myThemes.js":
/*!*******************************************!*\
  !*** ./assets/js/react/pages/myThemes.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_myThemesPageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/myThemesPageContainer */ "./assets/js/react/containers/myThemesPageContainer.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_myThemesPageContainer__WEBPACK_IMPORTED_MODULE_2__["MyThemesContainer"], null), window.document.getElementById('root'));

/***/ })

},[["./assets/js/react/pages/myThemes.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9icm93c2UvVGhlbWVDYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL215VGhlbWVzL215VGhlbWVzV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9teVRoZW1lc1BhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L3BhZ2VzL215VGhlbWVzLmpzIl0sIm5hbWVzIjpbInJlZGlyZWN0IiwibG9jYXRpb24iLCJ3aW5kb3ciLCJocmVmIiwiVGhlbWVDYXJkIiwidGhlbWVJZCIsIm5hbWUiLCJpbWdQYXRoIiwiYXV0aG9yIiwicGF0aFRvVGhlbWUiLCJ0aGVtZVBhdGgyIiwiTXlUaGVtZXNXcmFwcGVyIiwidXNlU3RhdGUiLCJ0aGVtZXMiLCJzZXRUaGVtZXMiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJNWV9USEVNRVNfREFUQV9VUkwiLCJ1c2VFZmZlY3QiLCJsYXlvdXREYXRhIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImxlbmd0aCIsIm1hcCIsInRoZW1lIiwiaWQiLCJ1c2VyX25hbWUiLCJpbWdfcGF0aCIsIk15VGhlbWVzQ29udGFpbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLFFBQVEsRUFBSTtBQUN6QkMsUUFBTSxDQUFDRCxRQUFQLENBQWdCRSxJQUFoQixHQUF1QkYsUUFBdkI7QUFDSCxDQUZEOztBQUlPLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXVDO0FBQUEsTUFBckNDLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTNCQyxJQUEyQixRQUEz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RlQ7QUFHSSxhQUFPLEVBQUU7QUFBQSxlQUFNYixNQUFNLENBQUNELFFBQVAsQ0FBZ0JFLElBQWhCLEdBQXVCLGVBQTdCO0FBQUE7QUFIYiw2QkFESixDQUZKLGVBVUksNERBQUMsZ0RBQUQsT0FWSixDQURKO0FBY0gsR0FmTyxNQWVEO0FBQ0gsd0JBQ0k7QUFBSyxRQUFFLEVBQUM7QUFBUixvQkFFSSw0REFBQyxnREFBRCxPQUZKLENBREo7QUFNSDtBQUNKLENBaEVNLEM7Ozs7Ozs7Ozs7OztBQ0xQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU00QixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDbkMsc0JBQ0kscUZBQ0csMkRBQUMsOERBQUQsT0FESCxlQUVHLDJEQUFDLG9GQUFELE9BRkgsQ0FESjtBQU1ILENBUE0sQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFDLGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyxtRkFBRCxPQURKLEVBRUkvQixNQUFNLENBQUNnQyxRQUFQLENBQWdCQyxjQUFoQixDQUErQixNQUEvQixDQUZKLEUiLCJmaWxlIjoibXlUaGVtZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gbG9jYXRpb24gPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb247XG59XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNhcmQgPSAoe3RoZW1lSWQgLCBuYW1lLCBpbWdQYXRoLCBhdXRob3J9KSA9PiB7XG4gICAgY29uc3QgcGF0aFRvVGhlbWUgPSAnL3RoZW1lLycgKyB0aGVtZUlkO1xuICAgIGlmICghaW1nUGF0aCB8fCBpbWdQYXRoID09PSAnJykge1xuICAgICAgICBpbWdQYXRoID0gJy4vaW1nL25vLXByZXZpZXcucG5nJztcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNhcmRcIiBpZD17dGhlbWVJZH0gb25DbGljaz17KCkgPT4gcmVkaXJlY3QocGF0aFRvVGhlbWUpfT5cbiAgICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAgICAgICAgPGRpdj48c21hbGw+QnkgPGEgaHJlZj17cGF0aFRvVGhlbWV9IG9uQ2xpY2s9e3RoZW1lUGF0aDIgPT4gcmVkaXJlY3QodGhlbWVQYXRoMil9PnthdXRob3J9PC9hPjwvc21hbGw+PC9kaXY+XG4gICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1jYXJkLWltZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1BhdGh9IGFsdD1cInRoZW1lIGRldGFpbFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFRoZW1lQ2FyZCB9IGZyb20gXCIuLi9icm93c2UvVGhlbWVDYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBNeVRoZW1lc1dyYXBwZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3RoZW1lcywgc2V0VGhlbWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IE1ZX1RIRU1FU19EQVRBX1VSTCA9ICcvZGF0YS9teV9hbGxfdGhlbWVzJztcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChsYXlvdXREYXRhICYmIGxheW91dERhdGEudGhlbWVzKSB7XG4gICAgICAgICAgICBzZXRUaGVtZXMobGF5b3V0RGF0YS50aGVtZXMpO1xuICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KE1ZX1RIRU1FU19EQVRBX1VSTClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lcyhyZXMuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICBpZiAodGhlbWVzICYmIHRoZW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbWVzLm1hcCh0aGVtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGVtZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVJZD17dGhlbWUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17dGhlbWUudXNlcl9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGVtZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdQYXRoPXt0aGVtZS5pbWdfcGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9ICBlbHNlIGlmIChsb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJuby10aGVtZXNcIj5cbiAgICAgICAgICAgICAgICA8aDI+WW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgVGhlbWVzIHlldC4uLiA8L2gyPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNyZWF0ZS10aGVtZS1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY3JlYXRlLXRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jcmVhdGUtdGhlbWUnfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBuZXcgVGhlbWUhPC9hPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IE15VGhlbWVzV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL215VGhlbWVzL215VGhlbWVzV3JhcHBlclwiO1xuXG5leHBvcnQgY29uc3QgTXlUaGVtZXNDb250YWluZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgIDxNeVRoZW1lc1dyYXBwZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IE15VGhlbWVzQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbnRhaW5lcnMvbXlUaGVtZXNQYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8TXlUaGVtZXNDb250YWluZXIvPixcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXSwic291cmNlUm9vdCI6IiJ9