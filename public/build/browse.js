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
    myStorage.clear();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvUGFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvYnJvd3NlL0Jyb3dzZVBhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2Jyb3dzZS9UaGVtZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvYnJvd3NlUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvYnJvd3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmhlcml0LWlmLXJlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2hpdGVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIucGFyc2UtaW50LmpzIl0sIm5hbWVzIjpbIkxvYWRlciIsIlBhZ2VyIiwicGFnZSIsIm51bU9mUGFnZXMiLCJvblBhZ2VDbGljayIsInBnIiwicGFnZXNOdW1iZXJzVG9TaG93IiwicGFnZXNPblNpZGVzIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJmaXJzdFBhZ2UiLCJsYXN0UGFnZSIsInBhZ2VzVG9TaG93IiwiaSIsInB1c2giLCJtYXAiLCJwYWdlSXRlbSIsImJyb3dzZVBhZ2VXcmFwcGVyIiwiVEhFTUVTX0RBVEFfVVJMIiwibGF5b3V0RGF0YSIsIlBBR0VTX0NPVU5UX1VSTCIsIkxPQ0FMU1RPUkFHRV9USEVNRVNfS0VZIiwiTE9DQUxTVE9SQUdFX1BBR0VTX0NPVU5UX0tFWSIsIkxPQ0FMU1RPUkFHRV9UVExfS0VZIiwiTE9DQUxTVE9SQUdFX1RUTCIsInVzZVN0YXRlIiwidGhlbWVzIiwic2V0VGhlbWVzIiwicGFnZXNDb3VudCIsInNldFBhZ2VzQ291bnQiLCJsb2FkaW5nRG9uZSIsInNldExvYWRpbmdEb25lIiwibXlTdG9yYWdlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwidHRsIiwiZ2V0SXRlbSIsInJlZGlyZWN0VG9QYWdlIiwibG9jYXRpb24iLCJocmVmIiwidXNlRWZmZWN0IiwiY2xlYXIiLCJEYXRlIiwiZ2V0VGltZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld1RUTCIsInBhcnNlIiwibGVuZ3RoIiwidGhlbWUiLCJpZCIsInVzZXJfbmFtZSIsIm5hbWUiLCJpbWdfcGF0aCIsInJlZGlyZWN0IiwiVGhlbWVDYXJkIiwidGhlbWVJZCIsImltZ1BhdGgiLCJhdXRob3IiLCJwYXRoVG9UaGVtZSIsInRoZW1lUGF0aDIiLCJCcm93c2VQYWdlQ29udGFpbmVyIiwicHJvcHMiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFHQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLHNCQUNJO0FBQU0sTUFBRSxFQUFDO0FBQVQsa0JBQ0k7QUFBSyxPQUFHLEVBQUMsMkJBQVQ7QUFBcUMsT0FBRyxFQUFDO0FBQXpDLElBREosQ0FESjtBQUtI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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BELEtBQUs7QUFDTDtBQUNBLG9DQUFvQyxjQUFjLE9BQU87QUFDekQscUNBQXFDLGNBQWMsT0FBTztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxxQ0FBcUMsRUFBRTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RUEsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxlQUFlLG1CQUFPLENBQUMsMkZBQStCOztBQUV0RDtBQUNBO0FBQ0EsR0FBRyxvRUFBb0U7QUFDdkU7QUFDQSxDQUFDIiwiZmlsZSI6ImJyb3dzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgTG9hZGVyID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPHNwYW4gaWQ9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1nL2xvYWRlci1zcGlubmVyLmdpZlwiIGFsdD1cImxvYWRpbmdcIi8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGFnZXIgPSAoe3BhZ2UgPSAxLCBudW1PZlBhZ2VzID0gMSwgb25QYWdlQ2xpY2sgPSAocGcpID0+IHt9fSkgPT4ge1xuICAgIGNvbnN0IHBhZ2VzTnVtYmVyc1RvU2hvdyA9IDM7IC8va29sa28gc3RyYW5vayBtYSBieXQgem9icmF6ZW55Y2gsIG11c2kgYnl0IG5lcGFybmUgY2lzbG9cbiAgICBjb25zdCBwYWdlc09uU2lkZXMgPSBOdW1iZXIucGFyc2VJbnQoKHBhZ2VzTnVtYmVyc1RvU2hvdyAtIDEpLzIpO1xuICAgIHBhZ2UgPSBOdW1iZXIucGFyc2VJbnQocGFnZSk7XG4gICAgbGV0IGZpcnN0UGFnZSA9IDE7XG4gICAgbGV0IGxhc3RQYWdlID0gbnVtT2ZQYWdlcztcbiAgICBjb25zdCBwYWdlc1RvU2hvdyA9IFtdO1xuICAgIGlmIChwYWdlIC0gcGFnZXNPblNpZGVzID4gZmlyc3RQYWdlKSBmaXJzdFBhZ2UgPSBwYWdlIC0gcGFnZXNPblNpZGVzO1xuICAgIGlmIChwYWdlICsgcGFnZXNPblNpZGVzIDwgbGFzdFBhZ2UpIGxhc3RQYWdlID0gcGFnZSArIHBhZ2VzT25TaWRlcztcbiAgICBmb3IgKGxldCBpID0gZmlyc3RQYWdlOyBpIDw9IGxhc3RQYWdlOyBpKyspIHtcbiAgICAgICAgcGFnZXNUb1Nob3cucHVzaCh7cGFnZTogaX0pO1xuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cInBhZ2VyXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlyc3RQYWdlID4gMSAmJlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZXItaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDbGljaygxKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYWdlc1RvU2hvdy5tYXAocGFnZUl0ZW0gPT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cGFnZUl0ZW0ucGFnZSA9PT0gcGFnZSA/IFwicGFnZXItaXRlbSBwYWdlci1pdGVtLWN1cnJlbnRcIiA6IFwicGFnZXItaXRlbVwifVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwYWdlSXRlbS5wYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2xpY2socGFnZUl0ZW0ucGFnZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlSXRlbS5wYWdlfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhc3RQYWdlIDwgbnVtT2ZQYWdlcyAmJlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2VyLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e251bU9mUGFnZXN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNsaWNrKG51bU9mUGFnZXMpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCBQYWdlciBmcm9tIFwiLi4vUGFnZXJcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL0xvYWRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFRoZW1lQ2FyZCB9IGZyb20gXCIuL1RoZW1lQ2FyZFwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJyb3dzZVBhZ2VXcmFwcGVyKCkge1xuICAgIGNvbnN0IFRIRU1FU19EQVRBX1VSTCA9IGAvZGF0YS90aGVtZXM/cGFnZT0ke2xheW91dERhdGEucGFnZX1gO1xuICAgIGNvbnN0IFBBR0VTX0NPVU5UX1VSTCA9IGAvZGF0YS9wYWdlc19jb3VudGA7XG5cbiAgICBjb25zdCBMT0NBTFNUT1JBR0VfVEhFTUVTX0tFWSA9IGBsb2FkZWRUaGVtZXMtJHtsYXlvdXREYXRhLnBhZ2V9YDtcbiAgICBjb25zdCBMT0NBTFNUT1JBR0VfUEFHRVNfQ09VTlRfS0VZID0gJ2xvYWRlZFBhZ2VzQ291bnQnO1xuICAgIGNvbnN0IExPQ0FMU1RPUkFHRV9UVExfS0VZID0gJ1RUTCc7XG4gICAgY29uc3QgTE9DQUxTVE9SQUdFX1RUTCA9IDMwMDAwMDtcblxuICAgIGNvbnN0IFt0aGVtZXMsIHNldFRoZW1lc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3BhZ2VzQ291bnQsIHNldFBhZ2VzQ291bnRdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2xvYWRpbmdEb25lLCBzZXRMb2FkaW5nRG9uZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBteVN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgIGxldCB0dGwgPSBteVN0b3JhZ2UuZ2V0SXRlbShMT0NBTFNUT1JBR0VfVFRMX0tFWSk7XG5cbiAgICBjb25zdCByZWRpcmVjdFRvUGFnZSA9IChwZykgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvYnJvd3NlP3BhZ2U9JHtwZ31gO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG15U3RvcmFnZS5jbGVhcigpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIG15U3RvcmFnZS5nZXRJdGVtKExPQ0FMU1RPUkFHRV9USEVNRVNfS0VZKSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIG15U3RvcmFnZS5nZXRJdGVtKExPQ0FMU1RPUkFHRV9QQUdFU19DT1VOVF9LRVkpID09PSBudWxsXG4gICAgICAgICAgICAgICAgfHwgKCAodHRsICE9PSBudWxsKSAmJiB0dGwgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldChUSEVNRVNfREFUQV9VUkwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZXMocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbXlTdG9yYWdlLnNldEl0ZW0oTE9DQUxTVE9SQUdFX1RIRU1FU19LRVksIEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChQQUdFU19DT1VOVF9VUkwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLnBhZ2VzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhZ2VzQ291bnQocmVzLmRhdGEucGFnZXNDb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVN0b3JhZ2Uuc2V0SXRlbShMT0NBTFNUT1JBR0VfUEFHRVNfQ09VTlRfS0VZLCByZXMuZGF0YS5wYWdlc0NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdUVEwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIExPQ0FMU1RPUkFHRV9UVEw7XG4gICAgICAgICAgICAgICAgICAgICAgICBteVN0b3JhZ2Uuc2V0SXRlbShMT0NBTFNUT1JBR0VfVFRMX0tFWSwgbmV3VFRMKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0TG9hZGluZ0RvbmUodHJ1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaGVtZXMoSlNPTi5wYXJzZShteVN0b3JhZ2UuZ2V0SXRlbShMT0NBTFNUT1JBR0VfVEhFTUVTX0tFWSkpKTtcbiAgICAgICAgICAgICAgICBzZXRQYWdlc0NvdW50KG15U3RvcmFnZS5nZXRJdGVtKExPQ0FMU1RPUkFHRV9QQUdFU19DT1VOVF9LRVkpKTtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nRG9uZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW10pO1xuXG4gICAgaWYgKChteVN0b3JhZ2UuZ2V0SXRlbShMT0NBTFNUT1JBR0VfVEhFTUVTX0tFWSkgPT09IG51bGwgfHwgbXlTdG9yYWdlLmdldEl0ZW0oTE9DQUxTVE9SQUdFX1BBR0VTX0NPVU5UX0tFWSkgPT09IG51bGwpXG4gICAgICAgICYmICh0aGVtZXMubGVuZ3RoID09PSAwIHx8IHBhZ2VzQ291bnQgPT09IDApXG4gICAgICAgICYmIHR0bCA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICYmICFsb2FkaW5nRG9uZSkge1xuXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbWVzLm1hcCh0aGVtZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVtZUNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGVtZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWVJZD17dGhlbWUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17dGhlbWUudXNlcl9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXt0aGVtZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdQYXRoPXt0aGVtZS5pbWdfcGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAodGhlbWVzLmxlbmd0aCA8PSAwICYmIGxvYWRpbmdEb25lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlRoaXMgcGFnZSBpcyBlbXB0eTwvaDE+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxQYWdlclxuICAgICAgICAgICAgICAgICAgICBwYWdlPXtsYXlvdXREYXRhLnBhZ2V9XG4gICAgICAgICAgICAgICAgICAgIG51bU9mUGFnZXM9e3BhZ2VzQ291bnR9XG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZUNsaWNrPXtyZWRpcmVjdFRvUGFnZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gbG9jYXRpb24gPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9jYXRpb247XG59XG5cbmV4cG9ydCBjb25zdCBUaGVtZUNhcmQgPSAoe3RoZW1lSWQgLCBuYW1lLCBpbWdQYXRoLCBhdXRob3J9KSA9PiB7XG4gICAgY29uc3QgcGF0aFRvVGhlbWUgPSAnL3RoZW1lLycgKyB0aGVtZUlkO1xuICAgIGlmICghaW1nUGF0aCB8fCBpbWdQYXRoID09PSAnJykge1xuICAgICAgICBpbWdQYXRoID0gJy4vaW1nL25vLXByZXZpZXcucG5nJztcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNhcmRcIiBpZD17dGhlbWVJZH0gb25DbGljaz17KCkgPT4gcmVkaXJlY3QocGF0aFRvVGhlbWUpfT5cbiAgICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAgICAgICAgPGRpdj48c21hbGw+QnkgPGEgaHJlZj17cGF0aFRvVGhlbWV9IG9uQ2xpY2s9e3RoZW1lUGF0aDIgPT4gcmVkaXJlY3QodGhlbWVQYXRoMil9PnthdXRob3J9PC9hPjwvc21hbGw+PC9kaXY+XG4gICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1jYXJkLWltZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1BhdGh9IGFsdD1cInRoZW1lIGRldGFpbFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IEJyb3dzZVBhZ2VXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Jyb3dzZS9Ccm93c2VQYWdlV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcm93c2VQYWdlQ29udGFpbmVyKHByb3BzKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24+XG4gICAgICAgICAgICA8L05hdmlnYXRpb24+XG4gICAgICAgICAgICA8QnJvd3NlUGFnZVdyYXBwZXI+XG4gICAgICAgICAgICA8L0Jyb3dzZVBhZ2VXcmFwcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCcm93c2VQYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL2Jyb3dzZVBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxCcm93c2VQYWdlQ29udGFpbmVyPjwvQnJvd3NlUGFnZUNvbnRhaW5lcj4sXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgdHlwZW9mIChOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xuXG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgTmF0aXZlTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgTnVtYmVyUHJvdG90eXBlID0gTmF0aXZlTnVtYmVyLnByb3RvdHlwZTtcblxuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NMQVNTT0YgPSBjbGFzc29mKGNyZWF0ZShOdW1iZXJQcm90b3R5cGUpKSA9PSBOVU1CRVI7XG5cbi8vIGBUb051bWJlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b251bWJlclxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIHZhciBmaXJzdCwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlLCBkaWdpdHMsIGxlbmd0aCwgaW5kZXgsIGNvZGU7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gdHJpbShpdCk7XG4gICAgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBkaWdpdHMgPSBpdC5zbGljZSgyKTtcbiAgICAgIGxlbmd0aCA9IGRpZ2l0cy5sZW5ndGg7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbi8vIGBOdW1iZXJgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXItY29uc3RydWN0b3JcbmlmIChpc0ZvcmNlZChOVU1CRVIsICFOYXRpdmVOdW1iZXIoJyAwbzEnKSB8fCAhTmF0aXZlTnVtYmVyKCcwYjEnKSB8fCBOYXRpdmVOdW1iZXIoJysweDEnKSkpIHtcbiAgdmFyIE51bWJlcldyYXBwZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgZHVtbXkgPSB0aGlzO1xuICAgIHJldHVybiBkdW1teSBpbnN0YW5jZW9mIE51bWJlcldyYXBwZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DTEFTU09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBOdW1iZXJQcm90b3R5cGUudmFsdWVPZi5jYWxsKGR1bW15KTsgfSkgOiBjbGFzc29mKGR1bW15KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZU51bWJlcih0b051bWJlcihpdCkpLCBkdW1teSwgTnVtYmVyV3JhcHBlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBERVNDUklQVE9SUyA/IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlTnVtYmVyKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTMjAxNSAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTMjAxNSBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKE5hdGl2ZU51bWJlciwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcyhOdW1iZXJXcmFwcGVyLCBrZXkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShOdW1iZXJXcmFwcGVyLCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihOYXRpdmVOdW1iZXIsIGtleSkpO1xuICAgIH1cbiAgfVxuICBOdW1iZXJXcmFwcGVyLnByb3RvdHlwZSA9IE51bWJlclByb3RvdHlwZTtcbiAgTnVtYmVyUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyV3JhcHBlcjtcbiAgcmVkZWZpbmUoZ2xvYmFsLCBOVU1CRVIsIE51bWJlcldyYXBwZXIpO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgTnVtYmVyLnBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW51bWJlci5wYXJzZWludFxuJCh7IHRhcmdldDogJ051bWJlcicsIHN0YXQ6IHRydWUsIGZvcmNlZDogTnVtYmVyLnBhcnNlSW50ICE9IHBhcnNlSW50IH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=