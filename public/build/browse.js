(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browse"],{

/***/ "./assets/js/react/components/Loader.js":
/*!**********************************************!*\
  !*** ./assets/js/react/components/Loader.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Loader = function Loader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    id: "loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../img/loader-spinner.gif",
    alt: "loading"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./assets/js/react/components/Pager.js":
/*!*********************************************!*\
  !*** ./assets/js/react/components/Pager.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.parse-int */ "./node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var Pager = function Pager(_ref) {
  var _ref$page = _ref.page,
      page = _ref$page === void 0 ? 1 : _ref$page,
      _ref$numOfPages = _ref.numOfPages,
      numOfPages = _ref$numOfPages === void 0 ? 1 : _ref$numOfPages,
      _ref$onPageClick = _ref.onPageClick,
      onPageClick = _ref$onPageClick === void 0 ? function (pg) {} : _ref$onPageClick;
  var pagesNumbersToShow = 3; //kolko stranok ma byt zobrazenych, musi byt neparne cislo

  var pagesOnSides = Number.parseInt((pagesNumbersToShow - 1) / 2);
  page = Number.parseInt(page);
  var firstPage = 1;
  var lastPage = numOfPages;
  var pagesToShow = [];
  if (page - pagesOnSides > firstPage) firstPage = page - pagesOnSides;
  if (page + pagesOnSides < lastPage) lastPage = page + pagesOnSides;

  for (var i = firstPage; i <= lastPage; i++) {
    pagesToShow.push({
      page: i
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    id: "pager"
  }, firstPage > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "pager-item",
    key: 1,
    onClick: function onClick() {
      return onPageClick(1);
    }
  }, "..."), pagesToShow.map(function (pageItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: pageItem.page === page ? "pager-item pager-item-current" : "pager-item",
      key: pageItem.page,
      onClick: function onClick() {
        return onPageClick(pageItem.page);
      }
    }, pageItem.page);
  }), lastPage < numOfPages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "pager-item",
    key: numOfPages,
    onClick: function onClick() {
      return onPageClick(numOfPages);
    }
  }, "..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Pager);

/***/ }),

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
/* harmony import */ var _Pager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Pager */ "./assets/js/react/components/Pager.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Loader */ "./assets/js/react/components/Loader.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ThemeCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ThemeCard */ "./assets/js/react/components/browse/ThemeCard.js");















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function browsePageWrapper() {
  var THEMES_DATA_URL = "/data/themes?page=".concat(layoutData.page);
  var PAGES_COUNT_URL = "/data/pages_count";
  var LOCALSTORAGE_THEMES_KEY = "loadedThemes-".concat(layoutData.page);
  var LOCALSTORAGE_PAGES_COUNT_KEY = 'loadedPagesCount';
  var LOCALSTORAGE_TTL_KEY = 'TTL';
  var LOCALSTORAGE_TTL = 300000;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      themes = _useState2[0],
      setThemes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      pagesCount = _useState4[0],
      setPagesCount = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loadingDone = _useState6[0],
      setLoadingDone = _useState6[1];

  var myStorage = window.localStorage;
  var ttl = myStorage.getItem(LOCALSTORAGE_TTL_KEY);

  var redirectToPage = function redirectToPage(pg) {
    window.location.href = "/browse?page=".concat(pg);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    // myStorage.clear();
    if (myStorage.getItem(LOCALSTORAGE_THEMES_KEY) === null || myStorage.getItem(LOCALSTORAGE_PAGES_COUNT_KEY) === null || ttl !== null && ttl < new Date().getTime()) {
      axios__WEBPACK_IMPORTED_MODULE_18___default.a.get(THEMES_DATA_URL).then(function (res) {
        setThemes(res.data);
        myStorage.setItem(LOCALSTORAGE_THEMES_KEY, JSON.stringify(res.data));
      }).then(function () {
        axios__WEBPACK_IMPORTED_MODULE_18___default.a.get(PAGES_COUNT_URL).then(function (res) {
          if (res.data && res.data.pagesCount) {
            setPagesCount(res.data.pagesCount);
            myStorage.setItem(LOCALSTORAGE_PAGES_COUNT_KEY, res.data.pagesCount);
          }
        });
      }).then(function () {
        var newTTL = new Date().getTime() + LOCALSTORAGE_TTL;
        myStorage.setItem(LOCALSTORAGE_TTL_KEY, newTTL);
        console.log(newTTL);
      }).then(function () {
        return setLoadingDone(true);
      });
    } else {
      setThemes(JSON.parse(myStorage.getItem(LOCALSTORAGE_THEMES_KEY)));
      setPagesCount(myStorage.getItem(LOCALSTORAGE_PAGES_COUNT_KEY));
      setLoadingDone(true);
    }
  }, []);

  if ((myStorage.getItem(LOCALSTORAGE_THEMES_KEY) === null || myStorage.getItem(LOCALSTORAGE_PAGES_COUNT_KEY) === null) && (themes.length === 0 || pagesCount === 0) && ttl < new Date().getTime() && !loadingDone) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      id: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
      id: "content"
    }, themes.map(function (theme) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_ThemeCard__WEBPACK_IMPORTED_MODULE_19__["ThemeCard"], {
        key: theme.id,
        themeId: theme.id,
        author: theme.user_name,
        name: theme.name,
        imgPath: theme.img_path
      });
    }), themes.length <= 0 && loadingDone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("h1", null, "This page is empty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Pager__WEBPACK_IMPORTED_MODULE_16__["default"], {
      page: layoutData.page,
      numOfPages: pagesCount,
      onPageClick: redirectToPage
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], null));
  }
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

/***/ }),

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/inherit-if-required.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.parse-int.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.parse-int.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseInt = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `Number.parseInt` method
// https://tc39.github.io/ecma262/#sec-number.parseint
$({ target: 'Number', stat: true, forced: Number.parseInt != parseInt }, {
  parseInt: parseInt
});


/***/ })

},[["./assets/js/react/pages/browse.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvYnJvd3NlL0Jyb3dzZVBhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2Jyb3dzZS9UaGVtZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvYnJvd3NlUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvYnJvd3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIucGFyc2UtaW50LmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlBhZ2VyIiwicGFnZSIsIm51bU9mUGFnZXMiLCJvblBhZ2VDbGljayIsInBnIiwicGFnZXNOdW1iZXJzVG9TaG93IiwicGFnZXNPblNpZGVzIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJmaXJzdFBhZ2UiLCJsYXN0UGFnZSIsInBhZ2VzVG9TaG93IiwiaSIsInB1c2giLCJtYXAiLCJwYWdlSXRlbSIsImJyb3dzZVBhZ2VXcmFwcGVyIiwiVEhFTUVTX0RBVEFfVVJMIiwibGF5b3V0RGF0YSIsIlBBR0VTX0NPVU5UX1VSTCIsIkxPQ0FMU1RPUkFHRV9USEVNRVNfS0VZIiwiTE9DQUxTVE9SQUdFX1BBR0VTX0NPVU5UX0tFWSIsIkxPQ0FMU1RPUkFHRV9UVExfS0VZIiwiTE9DQUxTVE9SQUdFX1RUTCIsInVzZVN0YXRlIiwidGhlbWVzIiwic2V0VGhlbWVzIiwicGFnZXNDb3VudCIsInNldFBhZ2VzQ291bnQiLCJsb2FkaW5nRG9uZSIsInNldExvYWRpbmdEb25lIiwibXlTdG9yYWdlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwidHRsIiwiZ2V0SXRlbSIsInJlZGlyZWN0VG9QYWdlIiwibG9jYXRpb24iLCJocmVmIiwidXNlRWZmZWN0IiwiRGF0ZSIsImdldFRpbWUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuZXdUVEwiLCJjb25zb2xlIiwibG9nIiwicGFyc2UiLCJsZW5ndGgiLCJ0aGVtZSIsImlkIiwidXNlcl9uYW1lIiwibmFtZSIsImltZ19wYXRoIiwicmVkaXJlY3QiLCJUaGVtZUNhcmQiLCJ0aGVtZUlkIiwiaW1nUGF0aCIsImF1dGhvciIsInBhdGhUb1RoZW1lIiwidGhlbWVQYXRoMiIsIkJyb3dzZVBhZ2VDb250YWluZXIiLCJwcm9wcyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsc0JBQ0k7QUFBTSxNQUFFLEVBQUM7QUFBVCxrQkFDSTtBQUFLLE9BQUcsRUFBQywyQkFBVDtBQUFxQyxPQUFHLEVBQUM7QUFBekMsSUFESixD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aUZBQTBCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxLQUFLO0FBQ0w7QUFDQSxvQ0FBb0MsY0FBYyxPQUFPO0FBQ3pELHFDQUFxQyxjQUFjLE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscUNBQXFDLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0VBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZUFBZSxtQkFBTyxDQUFDLDJGQUErQjs7QUFFdEQ7QUFDQTtBQUNBLEdBQUcsb0VBQW9FO0FBQ3ZFO0FBQ0EsQ0FBQyIsImZpbGUiOiJicm93c2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IExvYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxzcGFuIGlkPVwibG9hZGVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2ltZy9sb2FkZXItc3Bpbm5lci5naWZcIiBhbHQ9XCJsb2FkaW5nXCIvPlxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBhZ2VyID0gKHtwYWdlID0gMSwgbnVtT2ZQYWdlcyA9IDEsIG9uUGFnZUNsaWNrID0gKHBnKSA9PiB7fX0pID0+IHtcbiAgICBjb25zdCBwYWdlc051bWJlcnNUb1Nob3cgPSAzOyAvL2tvbGtvIHN0cmFub2sgbWEgYnl0IHpvYnJhemVueWNoLCBtdXNpIGJ5dCBuZXBhcm5lIGNpc2xvXG4gICAgY29uc3QgcGFnZXNPblNpZGVzID0gTnVtYmVyLnBhcnNlSW50KChwYWdlc051bWJlcnNUb1Nob3cgLSAxKS8yKTtcbiAgICBwYWdlID0gTnVtYmVyLnBhcnNlSW50KHBhZ2UpO1xuICAgIGxldCBmaXJzdFBhZ2UgPSAxO1xuICAgIGxldCBsYXN0UGFnZSA9IG51bU9mUGFnZXM7XG4gICAgY29uc3QgcGFnZXNUb1Nob3cgPSBbXTtcbiAgICBpZiAocGFnZSAtIHBhZ2VzT25TaWRlcyA+IGZpcnN0UGFnZSkgZmlyc3RQYWdlID0gcGFnZSAtIHBhZ2VzT25TaWRlcztcbiAgICBpZiAocGFnZSArIHBhZ2VzT25TaWRlcyA8IGxhc3RQYWdlKSBsYXN0UGFnZSA9IHBhZ2UgKyBwYWdlc09uU2lkZXM7XG4gICAgZm9yIChsZXQgaSA9IGZpcnN0UGFnZTsgaSA8PSBsYXN0UGFnZTsgaSsrKSB7XG4gICAgICAgIHBhZ2VzVG9TaG93LnB1c2goe3BhZ2U6IGl9KTtcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJwYWdlclwiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpcnN0UGFnZSA+IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2VyLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2xpY2soMSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFnZXNUb1Nob3cubWFwKHBhZ2VJdGVtID0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2VJdGVtLnBhZ2UgPT09IHBhZ2UgPyBcInBhZ2VyLWl0ZW0gcGFnZXItaXRlbS1jdXJyZW50XCIgOiBcInBhZ2VyLWl0ZW1cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cGFnZUl0ZW0ucGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNsaWNrKHBhZ2VJdGVtLnBhZ2UpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFnZUl0ZW0ucGFnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYXN0UGFnZSA8IG51bU9mUGFnZXMgJiZcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlci1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtudW1PZlBhZ2VzfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDbGljayhudW1PZlBhZ2VzKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSAsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgUGFnZXIgZnJvbSBcIi4uL1BhZ2VyXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9Mb2FkZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBUaGVtZUNhcmQgfSBmcm9tIFwiLi9UaGVtZUNhcmRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBicm93c2VQYWdlV3JhcHBlcigpIHtcbiAgICBjb25zdCBUSEVNRVNfREFUQV9VUkwgPSBgL2RhdGEvdGhlbWVzP3BhZ2U9JHtsYXlvdXREYXRhLnBhZ2V9YDtcbiAgICBjb25zdCBQQUdFU19DT1VOVF9VUkwgPSBgL2RhdGEvcGFnZXNfY291bnRgO1xuXG4gICAgY29uc3QgTE9DQUxTVE9SQUdFX1RIRU1FU19LRVkgPSBgbG9hZGVkVGhlbWVzLSR7bGF5b3V0RGF0YS5wYWdlfWA7XG4gICAgY29uc3QgTE9DQUxTVE9SQUdFX1BBR0VTX0NPVU5UX0tFWSA9ICdsb2FkZWRQYWdlc0NvdW50JztcbiAgICBjb25zdCBMT0NBTFNUT1JBR0VfVFRMX0tFWSA9ICdUVEwnO1xuICAgIGNvbnN0IExPQ0FMU1RPUkFHRV9UVEwgPSAzMDAwMDA7XG5cbiAgICBjb25zdCBbdGhlbWVzLCBzZXRUaGVtZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwYWdlc0NvdW50LCBzZXRQYWdlc0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtsb2FkaW5nRG9uZSwgc2V0TG9hZGluZ0RvbmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgbXlTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgICBsZXQgdHRsID0gbXlTdG9yYWdlLmdldEl0ZW0oTE9DQUxTVE9SQUdFX1RUTF9LRVkpO1xuXG4gICAgY29uc3QgcmVkaXJlY3RUb1BhZ2UgPSAocGcpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2Jyb3dzZT9wYWdlPSR7cGd9YDtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBteVN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBteVN0b3JhZ2UuZ2V0SXRlbShMT0NBTFNUT1JBR0VfVEhFTUVTX0tFWSkgPT09IG51bGwgfHxcbiAgICAgICAgICAgICAgICBteVN0b3JhZ2UuZ2V0SXRlbShMT0NBTFNUT1JBR0VfUEFHRVNfQ09VTlRfS0VZKSA9PT0gbnVsbFxuICAgICAgICAgICAgICAgIHx8ICggKHR0bCAhPT0gbnVsbCkgJiYgdHRsIDwgbmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoVEhFTUVTX0RBVEFfVVJMKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGhlbWVzKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15U3RvcmFnZS5zZXRJdGVtKExPQ0FMU1RPUkFHRV9USEVNRVNfS0VZLCBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoUEFHRVNfQ09VTlRfVVJMKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5wYWdlc0NvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYWdlc0NvdW50KHJlcy5kYXRhLnBhZ2VzQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlTdG9yYWdlLnNldEl0ZW0oTE9DQUxTVE9SQUdFX1BBR0VTX0NPVU5UX0tFWSwgcmVzLmRhdGEucGFnZXNDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VFRMID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBMT0NBTFNUT1JBR0VfVFRMO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlTdG9yYWdlLnNldEl0ZW0oTE9DQUxTVE9SQUdFX1RUTF9LRVksIG5ld1RUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdUVEwpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBzZXRMb2FkaW5nRG9uZSh0cnVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRoZW1lcyhKU09OLnBhcnNlKG15U3RvcmFnZS5nZXRJdGVtKExPQ0FMU1RPUkFHRV9USEVNRVNfS0VZKSkpO1xuICAgICAgICAgICAgICAgIHNldFBhZ2VzQ291bnQobXlTdG9yYWdlLmdldEl0ZW0oTE9DQUxTVE9SQUdFX1BBR0VTX0NPVU5UX0tFWSkpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdEb25lKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG5cbiAgICBpZiAoKG15U3RvcmFnZS5nZXRJdGVtKExPQ0FMU1RPUkFHRV9USEVNRVNfS0VZKSA9PT0gbnVsbCB8fCBteVN0b3JhZ2UuZ2V0SXRlbShMT0NBTFNUT1JBR0VfUEFHRVNfQ09VTlRfS0VZKSA9PT0gbnVsbClcbiAgICAgICAgJiYgKHRoZW1lcy5sZW5ndGggPT09IDAgfHwgcGFnZXNDb3VudCA9PT0gMClcbiAgICAgICAgJiYgdHRsIDwgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgJiYgIWxvYWRpbmdEb25lKSB7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGVtZXMubWFwKHRoZW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW1lQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoZW1lLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZUlkPXt0aGVtZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXt0aGVtZS51c2VyX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoZW1lLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1BhdGg9e3RoZW1lLmltZ19wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICh0aGVtZXMubGVuZ3RoIDw9IDAgJiYgbG9hZGluZ0RvbmUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+VGhpcyBwYWdlIGlzIGVtcHR5PC9oMT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPFBhZ2VyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9e2xheW91dERhdGEucGFnZX1cbiAgICAgICAgICAgICAgICAgICAgbnVtT2ZQYWdlcz17cGFnZXNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2xpY2s9e3JlZGlyZWN0VG9QYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBsb2NhdGlvbiA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lQ2FyZCA9ICh7dGhlbWVJZCAsIG5hbWUsIGltZ1BhdGgsIGF1dGhvcn0pID0+IHtcbiAgICBjb25zdCBwYXRoVG9UaGVtZSA9ICcvdGhlbWUvJyArIHRoZW1lSWQ7XG4gICAgaWYgKCFpbWdQYXRoIHx8IGltZ1BhdGggPT09ICcnKSB7XG4gICAgICAgIGltZ1BhdGggPSAnLi9pbWcvbm8tcHJldmlldy5wbmcnO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtY2FyZFwiIGlkPXt0aGVtZUlkfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChwYXRoVG9UaGVtZSl9PlxuICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2PjxzbWFsbD5CeSA8YSBocmVmPXtwYXRoVG9UaGVtZX0gb25DbGljaz17dGhlbWVQYXRoMiA9PiByZWRpcmVjdCh0aGVtZVBhdGgyKX0+e2F1dGhvcn08L2E+PC9zbWFsbD48L2Rpdj5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNhcmQtaW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aH0gYWx0PVwidGhlbWUgZGV0YWlsXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgQnJvd3NlUGFnZVdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvYnJvd3NlL0Jyb3dzZVBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJyb3dzZVBhZ2VDb250YWluZXIocHJvcHMpIHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbj5cbiAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cbiAgICAgICAgICAgIDxCcm93c2VQYWdlV3JhcHBlcj5cbiAgICAgICAgICAgIDwvQnJvd3NlUGFnZVdyYXBwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJyb3dzZVBhZ2VDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvYnJvd3NlUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPEJyb3dzZVBhZ2VDb250YWluZXI+PC9Ccm93c2VQYWdlQ29udGFpbmVyPixcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpXG4pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG5cbi8vIG1ha2VzIHN1YmNsYXNzaW5nIHdvcmsgY29ycmVjdCBmb3Igd3JhcHBlZCBidWlsdC1pbnNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCR0aGlzLCBkdW1teSwgV3JhcHBlcikge1xuICB2YXIgTmV3VGFyZ2V0LCBOZXdUYXJnZXRQcm90b3R5cGU7XG4gIGlmIChcbiAgICAvLyBpdCBjYW4gd29yayBvbmx5IHdpdGggbmF0aXZlIGBzZXRQcm90b3R5cGVPZmBcbiAgICBzZXRQcm90b3R5cGVPZiAmJlxuICAgIC8vIHdlIGhhdmVuJ3QgY29tcGxldGVseSBjb3JyZWN0IHByZS1FUzYgd2F5IGZvciBnZXR0aW5nIGBuZXcudGFyZ2V0YCwgc28gdXNlIHRoaXNcbiAgICB0eXBlb2YgKE5ld1RhcmdldCA9IGR1bW15LmNvbnN0cnVjdG9yKSA9PSAnZnVuY3Rpb24nICYmXG4gICAgTmV3VGFyZ2V0ICE9PSBXcmFwcGVyICYmXG4gICAgaXNPYmplY3QoTmV3VGFyZ2V0UHJvdG90eXBlID0gTmV3VGFyZ2V0LnByb3RvdHlwZSkgJiZcbiAgICBOZXdUYXJnZXRQcm90b3R5cGUgIT09IFdyYXBwZXIucHJvdG90eXBlXG4gICkgc2V0UHJvdG90eXBlT2YoJHRoaXMsIE5ld1RhcmdldFByb3RvdHlwZSk7XG4gIHJldHVybiAkdGhpcztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyIHdoaXRlc3BhY2UgPSAnWycgKyB3aGl0ZXNwYWNlcyArICddJztcbnZhciBsdHJpbSA9IFJlZ0V4cCgnXicgKyB3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJyk7XG52YXIgcnRyaW0gPSBSZWdFeHAod2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKiQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltLCB0cmltU3RhcnQsIHRyaW1FbmQsIHRyaW1MZWZ0LCB0cmltUmlnaHQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICBpZiAoVFlQRSAmIDEpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gICAgaWYgKFRZUEUgJiAyKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltTGVmdCwgdHJpbVN0YXJ0IH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltc3RhcnRcbiAgc3RhcnQ6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUueyB0cmltUmlnaHQsIHRyaW1FbmQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1cbiAgdHJpbTogY3JlYXRlTWV0aG9kKDMpXG59O1xuIiwiLy8gYSBzdHJpbmcgb2YgYWxsIHZhbGlkIHVuaWNvZGUgd2hpdGVzcGFjZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG5tb2R1bGUuZXhwb3J0cyA9ICdcXHUwMDA5XFx1MDAwQVxcdTAwMEJcXHUwMDBDXFx1MDAwRFxcdTAwMjBcXHUwMEEwXFx1MTY4MFxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5oZXJpdC1pZi1yZXF1aXJlZCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJykuZjtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG5cbnZhciBOVU1CRVIgPSAnTnVtYmVyJztcbnZhciBOYXRpdmVOdW1iZXIgPSBnbG9iYWxbTlVNQkVSXTtcbnZhciBOdW1iZXJQcm90b3R5cGUgPSBOYXRpdmVOdW1iZXIucHJvdG90eXBlO1xuXG4vLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbnZhciBCUk9LRU5fQ0xBU1NPRiA9IGNsYXNzb2YoY3JlYXRlKE51bWJlclByb3RvdHlwZSkpID09IE5VTUJFUjtcblxuLy8gYFRvTnVtYmVyYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbnVtYmVyXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgdmFyIGZpcnN0LCB0aGlyZCwgcmFkaXgsIG1heENvZGUsIGRpZ2l0cywgbGVuZ3RoLCBpbmRleCwgY29kZTtcbiAgaWYgKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKSB7XG4gICAgaXQgPSB0cmltKGl0KTtcbiAgICBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGRpZ2l0cyA9IGl0LnNsaWNlKDIpO1xuICAgICAgbGVuZ3RoID0gZGlnaXRzLmxlbmd0aDtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuLy8gYE51bWJlcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW51bWJlci1jb25zdHJ1Y3RvclxuaWYgKGlzRm9yY2VkKE5VTUJFUiwgIU5hdGl2ZU51bWJlcignIDBvMScpIHx8ICFOYXRpdmVOdW1iZXIoJzBiMScpIHx8IE5hdGl2ZU51bWJlcignKzB4MScpKSkge1xuICB2YXIgTnVtYmVyV3JhcHBlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSkge1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlO1xuICAgIHZhciBkdW1teSA9IHRoaXM7XG4gICAgcmV0dXJuIGR1bW15IGluc3RhbmNlb2YgTnVtYmVyV3JhcHBlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NMQVNTT0YgPyBmYWlscyhmdW5jdGlvbiAoKSB7IE51bWJlclByb3RvdHlwZS52YWx1ZU9mLmNhbGwoZHVtbXkpOyB9KSA6IGNsYXNzb2YoZHVtbXkpICE9IE5VTUJFUilcbiAgICAgICAgPyBpbmhlcml0SWZSZXF1aXJlZChuZXcgTmF0aXZlTnVtYmVyKHRvTnVtYmVyKGl0KSksIGR1bW15LCBOdW1iZXJXcmFwcGVyKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgZm9yICh2YXIga2V5cyA9IERFU0NSSVBUT1JTID8gZ2V0T3duUHJvcGVydHlOYW1lcyhOYXRpdmVOdW1iZXIpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVMyMDE1IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVMyMDE1IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBqID0gMCwga2V5OyBrZXlzLmxlbmd0aCA+IGo7IGorKykge1xuICAgIGlmIChoYXMoTmF0aXZlTnVtYmVyLCBrZXkgPSBrZXlzW2pdKSAmJiAhaGFzKE51bWJlcldyYXBwZXIsIGtleSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KE51bWJlcldyYXBwZXIsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5hdGl2ZU51bWJlciwga2V5KSk7XG4gICAgfVxuICB9XG4gIE51bWJlcldyYXBwZXIucHJvdG90eXBlID0gTnVtYmVyUHJvdG90eXBlO1xuICBOdW1iZXJQcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJXcmFwcGVyO1xuICByZWRlZmluZShnbG9iYWwsIE5VTUJFUiwgTnVtYmVyV3JhcHBlcik7XG59XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50Jyk7XG5cbi8vIGBOdW1iZXIucGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtbnVtYmVyLnBhcnNlaW50XG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBOdW1iZXIucGFyc2VJbnQgIT0gcGFyc2VJbnQgfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==