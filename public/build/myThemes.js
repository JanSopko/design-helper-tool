(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myThemes"],{

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
/* harmony import */ var _functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../functions/elementOrParentHasClass */ "./assets/js/functions/elementOrParentHasClass.js");




var redirect = function redirect(location) {
  window.location.href = location;
};

var ThemeCard = function ThemeCard(_ref) {
  var themeId = _ref.themeId,
      name = _ref.name,
      imgPath = _ref.imgPath,
      author = _ref.author,
      _ref$slashesInUrl = _ref.slashesInUrl,
      slashesInUrl = _ref$slashesInUrl === void 0 ? 0 : _ref$slashesInUrl;
  var ANCHOR_CLASS = 'author-link';
  var pathToTheme = '/theme/' + themeId;

  if (!imgPath || imgPath === '') {
    imgPath = './img/no-preview.png';

    if (slashesInUrl > 0) {
      for (var i = 0; i < slashesInUrl; i++) {
        imgPath = ".".concat(imgPath);
      }
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "theme-card",
    id: themeId,
    onClick: function onClick(e) {
      e.preventDefault();

      if (!Object(_functions_elementOrParentHasClass__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, ANCHOR_CLASS)) {
        redirect(pathToTheme);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "By ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/themesOf/".concat(author),
    onClick: function onClick(e) {
      e.preventDefault();
      redirect("/themesOf/".concat(author));
    },
    className: ANCHOR_CLASS
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

},[["./assets/js/react/pages/myThemes.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme~themesOf","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme~themesOf"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2Jyb3dzZS9UaGVtZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvbXlUaGVtZXMvbXlUaGVtZXNXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb250YWluZXJzL215VGhlbWVzUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvbXlUaGVtZXMuanMiXSwibmFtZXMiOlsiZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwicmVkaXJlY3QiLCJsb2NhdGlvbiIsIndpbmRvdyIsImhyZWYiLCJUaGVtZUNhcmQiLCJ0aGVtZUlkIiwibmFtZSIsImltZ1BhdGgiLCJhdXRob3IiLCJzbGFzaGVzSW5VcmwiLCJBTkNIT1JfQ0xBU1MiLCJwYXRoVG9UaGVtZSIsImkiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJNeVRoZW1lc1dyYXBwZXIiLCJ1c2VTdGF0ZSIsInRoZW1lcyIsInNldFRoZW1lcyIsImxvYWRlZCIsInNldExvYWRlZCIsIk1ZX1RIRU1FU19EQVRBX1VSTCIsInVzZUVmZmVjdCIsImxheW91dERhdGEiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwibGVuZ3RoIiwibWFwIiwidGhlbWUiLCJpZCIsInVzZXJfbmFtZSIsImltZ19wYXRoIiwiTXlUaGVtZXNDb250YWluZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQU1BLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWLEVBQXdCO0FBQ3BELE1BQUlELE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsUUFBbEIsQ0FBMkJGLFNBQTNCLENBQUosRUFBMkM7QUFDdkMsV0FBTyxJQUFQO0FBQ0gsR0FGRCxNQUVPLElBQUlELE9BQU8sQ0FBQ0ksYUFBWixFQUEyQjtBQUM5QixXQUFPTCx1QkFBdUIsQ0FBQ0MsT0FBTyxDQUFDSSxhQUFULEVBQXdCSCxTQUF4QixDQUE5QjtBQUNIOztBQUNELFNBQU8sS0FBUDtBQUNILENBUEQ7O0FBU2VGLHNGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7QUFFQSxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxRQUFRLEVBQUk7QUFDekJDLFFBQU0sQ0FBQ0QsUUFBUCxDQUFnQkUsSUFBaEIsR0FBdUJGLFFBQXZCO0FBQ0gsQ0FGRDs7QUFJTyxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5RDtBQUFBLE1BQXZEQyxPQUF1RCxRQUF2REEsT0FBdUQ7QUFBQSxNQUE3Q0MsSUFBNkMsUUFBN0NBLElBQTZDO0FBQUEsTUFBdkNDLE9BQXVDLFFBQXZDQSxPQUF1QztBQUFBLE1BQTlCQyxNQUE4QixRQUE5QkEsTUFBOEI7QUFBQSwrQkFBdEJDLFlBQXNCO0FBQUEsTUFBdEJBLFlBQXNCLGtDQUFQLENBQU87QUFDOUUsTUFBTUMsWUFBWSxHQUFHLGFBQXJCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFlBQVlOLE9BQWhDOztBQUNBLE1BQUksQ0FBQ0UsT0FBRCxJQUFZQSxPQUFPLEtBQUssRUFBNUIsRUFBZ0M7QUFDNUJBLFdBQU8sR0FBRyxzQkFBVjs7QUFDQSxRQUFJRSxZQUFZLEdBQUcsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxZQUFwQixFQUFrQ0csQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ0wsZUFBTyxjQUFPQSxPQUFQLENBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBQ0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixNQUFFLEVBQUVGLE9BQWhDO0FBQXlDLFdBQU8sRUFBRSxpQkFBQVEsQ0FBQyxFQUFJO0FBQ25EQSxPQUFDLENBQUNDLGNBQUY7O0FBQ0EsVUFBSSxDQUFDcEIsa0ZBQXVCLENBQUNtQixDQUFDLENBQUNFLE1BQUgsRUFBV0wsWUFBWCxDQUE1QixFQUFzRDtBQUNsRFYsZ0JBQVEsQ0FBQ1csV0FBRCxDQUFSO0FBQ0g7QUFDSjtBQUxELGtCQU1JLHVFQUFLTCxJQUFMLENBTkosZUFPSSxxRkFBSyw4RkFBVTtBQUFHLFFBQUksc0JBQWVFLE1BQWYsQ0FBUDtBQUFnQyxXQUFPLEVBQUUsaUJBQUFLLENBQUMsRUFBSTtBQUN6REEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FkLGNBQVEscUJBQWNRLE1BQWQsRUFBUjtBQUNILEtBSGM7QUFJZixhQUFTLEVBQUVFO0FBSkksS0FLYkYsTUFMYSxDQUFWLENBQUwsQ0FQSixlQWFJLHNFQWJKLGVBY0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLE9BQUcsRUFBRUQsT0FBVjtBQUFtQixPQUFHLEVBQUM7QUFBdkIsSUFESixDQWRKLENBREo7QUFvQkgsQ0EvQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQSxrQkFDTEMsdURBQVEsQ0FBQyxFQUFELENBREg7QUFBQTtBQUFBLE1BQzFCQyxNQUQwQjtBQUFBLE1BQ2xCQyxTQURrQjs7QUFBQSxtQkFFTEYsdURBQVEsQ0FBQyxLQUFELENBRkg7QUFBQTtBQUFBLE1BRTFCRyxNQUYwQjtBQUFBLE1BRWxCQyxTQUZrQjs7QUFHakMsTUFBTUMsa0JBQWtCLEdBQUcscUJBQTNCO0FBRUFDLDBEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlDLFVBQVUsSUFBSUEsVUFBVSxDQUFDTixNQUE3QixFQUFxQztBQUNqQ0MsZUFBUyxDQUFDSyxVQUFVLENBQUNOLE1BQVosQ0FBVDtBQUNBRyxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsS0FIRCxNQUdPO0FBQ0hJLG1EQUFLLENBQUNDLEdBQU4sQ0FBVUosa0JBQVYsRUFDS0ssSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNULFlBQUlBLEdBQUcsQ0FBQ0MsSUFBUixFQUFjO0FBQ1ZWLG1CQUFTLENBQUNTLEdBQUcsQ0FBQ0MsSUFBTCxDQUFUO0FBQ0g7QUFDSixPQUxMLEVBTUtGLElBTkwsQ0FNVSxZQUFNO0FBQ1JOLGlCQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0gsT0FSTDtBQVNIO0FBQ0osR0FmUSxFQWVOLEVBZk0sQ0FBVDs7QUFpQkEsTUFBSUgsTUFBTSxJQUFJQSxNQUFNLENBQUNZLE1BQVAsR0FBZ0IsQ0FBOUIsRUFBaUM7QUFDN0Isd0JBQ0k7QUFBSyxRQUFFLEVBQUM7QUFBUixPQUVRWixNQUFNLENBQUNhLEdBQVAsQ0FBVyxVQUFBQyxLQUFLLEVBQUk7QUFDaEIsMEJBQ0ksNERBQUMsNERBQUQ7QUFDSSxXQUFHLEVBQUVBLEtBQUssQ0FBQ0MsRUFEZjtBQUVJLGVBQU8sRUFBRUQsS0FBSyxDQUFDQyxFQUZuQjtBQUdJLGNBQU0sRUFBRUQsS0FBSyxDQUFDRSxTQUhsQjtBQUlJLFlBQUksRUFBRUYsS0FBSyxDQUFDMUIsSUFKaEI7QUFLSSxlQUFPLEVBQUUwQixLQUFLLENBQUNHO0FBTG5CLFFBREo7QUFTSCxLQVZELENBRlIsZUFjSSw0REFBQyxnREFBRCxPQWRKLENBREo7QUFrQkgsR0FuQkQsTUFtQlEsSUFBSWYsTUFBSixFQUFZO0FBQ2hCLHdCQUNJO0FBQUssUUFBRSxFQUFDLFNBQVI7QUFBa0IsZUFBUyxFQUFDO0FBQTVCLG9CQUNJLGlIQURKLG9CQUNvRCx1RUFEcEQsZUFFSSxxRkFDSTtBQUNJLGVBQVMsRUFBQyxtQkFEZDtBQUVJLFVBQUksRUFBQyxlQUZUO0FBR0ksYUFBTyxFQUFFO0FBQUEsZUFBTWxCLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQkUsSUFBaEIsR0FBdUIsZUFBN0I7QUFBQTtBQUhiLDZCQURKLENBRkosZUFVSSw0REFBQyxnREFBRCxPQVZKLENBREo7QUFjSCxHQWZPLE1BZUQ7QUFDSCx3QkFDSTtBQUFLLFFBQUUsRUFBQztBQUFSLG9CQUVJLDREQUFDLGdEQUFELE9BRkosQ0FESjtBQU1IO0FBQ0osQ0FoRU0sQzs7Ozs7Ozs7Ozs7O0FDTFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTWlDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxzQkFDSSxxRkFDRywyREFBQyw4REFBRCxPQURILGVBRUcsMkRBQUMsb0ZBQUQsT0FGSCxDQURKO0FBTUgsQ0FQTSxDOzs7Ozs7Ozs7Ozs7QUNKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLG1GQUFELE9BREosRUFFSXBDLE1BQU0sQ0FBQ3FDLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLE1BQS9CLENBRkosRSIsImZpbGUiOiJteVRoZW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzID0gKGVsZW1lbnQsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyhlbGVtZW50LnBhcmVudEVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3M7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzIGZyb20gXCIuLi8uLi8uLi9mdW5jdGlvbnMvZWxlbWVudE9yUGFyZW50SGFzQ2xhc3NcIjtcblxuY29uc3QgcmVkaXJlY3QgPSBsb2NhdGlvbiA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lQ2FyZCA9ICh7dGhlbWVJZCAsIG5hbWUsIGltZ1BhdGgsIGF1dGhvciwgc2xhc2hlc0luVXJsID0gMH0pID0+IHtcbiAgICBjb25zdCBBTkNIT1JfQ0xBU1MgPSAnYXV0aG9yLWxpbmsnO1xuICAgIGNvbnN0IHBhdGhUb1RoZW1lID0gJy90aGVtZS8nICsgdGhlbWVJZDtcbiAgICBpZiAoIWltZ1BhdGggfHwgaW1nUGF0aCA9PT0gJycpIHtcbiAgICAgICAgaW1nUGF0aCA9ICcuL2ltZy9uby1wcmV2aWV3LnBuZyc7XG4gICAgICAgIGlmIChzbGFzaGVzSW5VcmwgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsYXNoZXNJblVybDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW1nUGF0aCA9IGAuJHtpbWdQYXRofWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNhcmRcIiBpZD17dGhlbWVJZH0gb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRPclBhcmVudEhhc0NsYXNzKGUudGFyZ2V0LCBBTkNIT1JfQ0xBU1MpKSB7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3QocGF0aFRvVGhlbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAgICAgICAgPGRpdj48c21hbGw+QnkgPGEgaHJlZj17YC90aGVtZXNPZi8ke2F1dGhvcn1gfSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmVkaXJlY3QoYC90aGVtZXNPZi8ke2F1dGhvcn1gKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e0FOQ0hPUl9DTEFTU31cbiAgICAgICAgICAgID57YXV0aG9yfTwvYT48L3NtYWxsPjwvZGl2PlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtY2FyZC1pbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQYXRofSBhbHQ9XCJ0aGVtZSBkZXRhaWxcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBUaGVtZUNhcmQgfSBmcm9tIFwiLi4vYnJvd3NlL1RoZW1lQ2FyZFwiO1xuXG5leHBvcnQgY29uc3QgTXlUaGVtZXNXcmFwcGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0aGVtZXMsIHNldFRoZW1lc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBNWV9USEVNRVNfREFUQV9VUkwgPSAnL2RhdGEvbXlfYWxsX3RoZW1lcyc7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAobGF5b3V0RGF0YSAmJiBsYXlvdXREYXRhLnRoZW1lcykge1xuICAgICAgICAgICAgc2V0VGhlbWVzKGxheW91dERhdGEudGhlbWVzKTtcbiAgICAgICAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF4aW9zLmdldChNWV9USEVNRVNfREFUQV9VUkwpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZXMocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgaWYgKHRoZW1lcyAmJiB0aGVtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lcy5tYXAodGhlbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhlbWUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lSWQ9e3RoZW1lLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3RoZW1lLnVzZXJfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhlbWUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nUGF0aD17dGhlbWUuaW1nX3BhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSAgZWxzZSBpZiAobG9hZGVkKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwibm8tdGhlbWVzXCI+XG4gICAgICAgICAgICAgICAgPGgyPllvdSBoYXZlbid0IGNyZWF0ZWQgYW55IFRoZW1lcyB5ZXQuLi4gPC9oMj4gPGJyLz5cbiAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcmVhdGUtdGhlbWUtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2NyZWF0ZS10aGVtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY3JlYXRlLXRoZW1lJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IFRoZW1lITwvYT5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cblxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNeVRoZW1lc1dyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9teVRoZW1lcy9teVRoZW1lc1dyYXBwZXJcIjtcblxuZXhwb3J0IGNvbnN0IE15VGhlbWVzQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICA8TXlUaGVtZXNXcmFwcGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBNeVRoZW1lc0NvbnRhaW5lciB9IGZyb20gXCIuLi9jb250YWluZXJzL215VGhlbWVzUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPE15VGhlbWVzQ29udGFpbmVyLz4sXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==