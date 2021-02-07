(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browse"],{

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
    console.log(themes);
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

},[["./assets/js/react/pages/browse.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme~themesOf","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme~themesOf"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL2VsZW1lbnRPclBhcmVudEhhc0NsYXNzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9QYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9icm93c2UvQnJvd3NlUGFnZVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvYnJvd3NlL1RoZW1lQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9icm93c2VQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9wYWdlcy9icm93c2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm51bWJlci5wYXJzZS1pbnQuanMiXSwibmFtZXMiOlsiZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwYXJlbnRFbGVtZW50IiwiTG9hZGVyIiwiUGFnZXIiLCJwYWdlIiwibnVtT2ZQYWdlcyIsIm9uUGFnZUNsaWNrIiwicGciLCJwYWdlc051bWJlcnNUb1Nob3ciLCJwYWdlc09uU2lkZXMiLCJOdW1iZXIiLCJwYXJzZUludCIsImZpcnN0UGFnZSIsImxhc3RQYWdlIiwicGFnZXNUb1Nob3ciLCJpIiwicHVzaCIsIm1hcCIsInBhZ2VJdGVtIiwiYnJvd3NlUGFnZVdyYXBwZXIiLCJUSEVNRVNfREFUQV9VUkwiLCJsYXlvdXREYXRhIiwiUEFHRVNfQ09VTlRfVVJMIiwiTE9DQUxTVE9SQUdFX1RIRU1FU19LRVkiLCJMT0NBTFNUT1JBR0VfUEFHRVNfQ09VTlRfS0VZIiwiTE9DQUxTVE9SQUdFX1RUTF9LRVkiLCJMT0NBTFNUT1JBR0VfVFRMIiwidXNlU3RhdGUiLCJ0aGVtZXMiLCJzZXRUaGVtZXMiLCJwYWdlc0NvdW50Iiwic2V0UGFnZXNDb3VudCIsImxvYWRpbmdEb25lIiwic2V0TG9hZGluZ0RvbmUiLCJteVN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJ0dGwiLCJnZXRJdGVtIiwicmVkaXJlY3RUb1BhZ2UiLCJsb2NhdGlvbiIsImhyZWYiLCJ1c2VFZmZlY3QiLCJEYXRlIiwiZ2V0VGltZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld1RUTCIsInBhcnNlIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInRoZW1lIiwiaWQiLCJ1c2VyX25hbWUiLCJuYW1lIiwiaW1nX3BhdGgiLCJyZWRpcmVjdCIsIlRoZW1lQ2FyZCIsInRoZW1lSWQiLCJpbWdQYXRoIiwiYXV0aG9yIiwic2xhc2hlc0luVXJsIiwiQU5DSE9SX0NMQVNTIiwicGF0aFRvVGhlbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJCcm93c2VQYWdlQ29udGFpbmVyIiwicHJvcHMiLCJSZWFjdERPTSIsInJlbmRlciIs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LG1CQUFPLENBQUMsaUZBQTBCOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxLQUFLO0FBQ0w7QUFDQSxvQ0FBb0MsY0FBYyxPQUFPO0FBQ3pELHFDQUFxQyxjQUFjLE9BQU87QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMscUNBQXFDLEVBQUU7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0VBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsZUFBZSxtQkFBTyxDQUFDLDJGQUErQjs7QUFFdEQ7QUFDQTtBQUNBLEdBQUcsb0VBQW9FO0FBQ3ZFO0FBQ0EsQ0FBQyIsImZpbGUiOiJicm93c2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbGVtZW50T3JQYXJlbnRIYXNDbGFzcyA9IChlbGVtZW50LCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZWxlbWVudC5wYXJlbnRFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRPclBhcmVudEhhc0NsYXNzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBMb2FkZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c3BhbiBpZD1cImxvYWRlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9pbWcvbG9hZGVyLXNwaW5uZXIuZ2lmXCIgYWx0PVwibG9hZGluZ1wiLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQYWdlciA9ICh7cGFnZSA9IDEsIG51bU9mUGFnZXMgPSAxLCBvblBhZ2VDbGljayA9IChwZykgPT4ge319KSA9PiB7XG4gICAgY29uc3QgcGFnZXNOdW1iZXJzVG9TaG93ID0gMzsgLy9rb2xrbyBzdHJhbm9rIG1hIGJ5dCB6b2JyYXplbnljaCwgbXVzaSBieXQgbmVwYXJuZSBjaXNsb1xuICAgIGNvbnN0IHBhZ2VzT25TaWRlcyA9IE51bWJlci5wYXJzZUludCgocGFnZXNOdW1iZXJzVG9TaG93IC0gMSkvMik7XG4gICAgcGFnZSA9IE51bWJlci5wYXJzZUludChwYWdlKTtcbiAgICBsZXQgZmlyc3RQYWdlID0gMTtcbiAgICBsZXQgbGFzdFBhZ2UgPSBudW1PZlBhZ2VzO1xuICAgIGNvbnN0IHBhZ2VzVG9TaG93ID0gW107XG4gICAgaWYgKHBhZ2UgLSBwYWdlc09uU2lkZXMgPiBmaXJzdFBhZ2UpIGZpcnN0UGFnZSA9IHBhZ2UgLSBwYWdlc09uU2lkZXM7XG4gICAgaWYgKHBhZ2UgKyBwYWdlc09uU2lkZXMgPCBsYXN0UGFnZSkgbGFzdFBhZ2UgPSBwYWdlICsgcGFnZXNPblNpZGVzO1xuICAgIGZvciAobGV0IGkgPSBmaXJzdFBhZ2U7IGkgPD0gbGFzdFBhZ2U7IGkrKykge1xuICAgICAgICBwYWdlc1RvU2hvdy5wdXNoKHtwYWdlOiBpfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwicGFnZXJcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaXJzdFBhZ2UgPiAxICYmXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlci1pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnZUNsaWNrKDEpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhZ2VzVG9TaG93Lm1hcChwYWdlSXRlbSA9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYWdlSXRlbS5wYWdlID09PSBwYWdlID8gXCJwYWdlci1pdGVtIHBhZ2VyLWl0ZW0tY3VycmVudFwiIDogXCJwYWdlci1pdGVtXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3BhZ2VJdGVtLnBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2VDbGljayhwYWdlSXRlbS5wYWdlKX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3BhZ2VJdGVtLnBhZ2V9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFzdFBhZ2UgPCBudW1PZlBhZ2VzICYmXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZXItaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIGtleT17bnVtT2ZQYWdlc31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdlQ2xpY2sobnVtT2ZQYWdlcyl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IFBhZ2VyIGZyb20gXCIuLi9QYWdlclwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vTG9hZGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgVGhlbWVDYXJkIH0gZnJvbSBcIi4vVGhlbWVDYXJkXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnJvd3NlUGFnZVdyYXBwZXIoKSB7XG4gICAgY29uc3QgVEhFTUVTX0RBVEFfVVJMID0gYC9kYXRhL3RoZW1lcz9wYWdlPSR7bGF5b3V0RGF0YS5wYWdlfWA7XG4gICAgY29uc3QgUEFHRVNfQ09VTlRfVVJMID0gYC9kYXRhL3BhZ2VzX2NvdW50YDtcblxuICAgIGNvbnN0IExPQ0FMU1RPUkFHRV9USEVNRVNfS0VZID0gYGxvYWRlZFRoZW1lcy0ke2xheW91dERhdGEucGFnZX1gO1xuICAgIGNvbnN0IExPQ0FMU1RPUkFHRV9QQUdFU19DT1VOVF9LRVkgPSAnbG9hZGVkUGFnZXNDb3VudCc7XG4gICAgY29uc3QgTE9DQUxTVE9SQUdFX1RUTF9LRVkgPSAnVFRMJztcbiAgICBjb25zdCBMT0NBTFNUT1JBR0VfVFRMID0gMzAwMDAwO1xuXG4gICAgY29uc3QgW3RoZW1lcywgc2V0VGhlbWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcGFnZXNDb3VudCwgc2V0UGFnZXNDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbG9hZGluZ0RvbmUsIHNldExvYWRpbmdEb25lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG15U3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgbGV0IHR0bCA9IG15U3RvcmFnZS5nZXRJdGVtKExPQ0FMU1RPUkFHRV9UVExfS0VZKTtcblxuICAgIGNvbnN0IHJlZGlyZWN0VG9QYWdlID0gKHBnKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9icm93c2U/cGFnZT0ke3BnfWA7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gbXlTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbXlTdG9yYWdlLmdldEl0ZW0oTE9DQUxTVE9SQUdFX1RIRU1FU19LRVkpID09PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgbXlTdG9yYWdlLmdldEl0ZW0oTE9DQUxTVE9SQUdFX1BBR0VTX0NPVU5UX0tFWSkgPT09IG51bGxcbiAgICAgICAgICAgICAgICB8fCAoICh0dGwgIT09IG51bGwpICYmIHR0bCA8IG5ldyBEYXRlKCkuZ2V0VGltZSgpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFRIRU1FU19EQVRBX1VSTClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lcyhyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBteVN0b3JhZ2Uuc2V0SXRlbShMT0NBTFNUT1JBR0VfVEhFTUVTX0tFWSwgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MuZ2V0KFBBR0VTX0NPVU5UX1VSTClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEucGFnZXNDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFnZXNDb3VudChyZXMuZGF0YS5wYWdlc0NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15U3RvcmFnZS5zZXRJdGVtKExPQ0FMU1RPUkFHRV9QQUdFU19DT1VOVF9LRVksIHJlcy5kYXRhLnBhZ2VzQ291bnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RUTCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgTE9DQUxTVE9SQUdFX1RUTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG15U3RvcmFnZS5zZXRJdGVtKExPQ0FMU1RPUkFHRV9UVExfS0VZLCBuZXdUVEwpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBzZXRMb2FkaW5nRG9uZSh0cnVlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRoZW1lcyhKU09OLnBhcnNlKG15U3RvcmFnZS5nZXRJdGVtKExPQ0FMU1RPUkFHRV9USEVNRVNfS0VZKSkpO1xuICAgICAgICAgICAgICAgIHNldFBhZ2VzQ291bnQobXlTdG9yYWdlLmdldEl0ZW0oTE9DQUxTVE9SQUdFX1BBR0VTX0NPVU5UX0tFWSkpO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdEb25lKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSk7XG5cbiAgICBpZiAoKG15U3RvcmFnZS5nZXRJdGVtKExPQ0FMU1RPUkFHRV9USEVNRVNfS0VZKSA9PT0gbnVsbCB8fCBteVN0b3JhZ2UuZ2V0SXRlbShMT0NBTFNUT1JBR0VfUEFHRVNfQ09VTlRfS0VZKSA9PT0gbnVsbClcbiAgICAgICAgJiYgKHRoZW1lcy5sZW5ndGggPT09IDAgfHwgcGFnZXNDb3VudCA9PT0gMClcbiAgICAgICAgJiYgdHRsIDwgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgICAgJiYgIWxvYWRpbmdEb25lKSB7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2codGhlbWVzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGVtZXMubWFwKHRoZW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW1lQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoZW1lLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZUlkPXt0aGVtZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXt0aGVtZS51c2VyX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoZW1lLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1BhdGg9e3RoZW1lLmltZ19wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICh0aGVtZXMubGVuZ3RoIDw9IDAgJiYgbG9hZGluZ0RvbmUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+VGhpcyBwYWdlIGlzIGVtcHR5PC9oMT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPFBhZ2VyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U9e2xheW91dERhdGEucGFnZX1cbiAgICAgICAgICAgICAgICAgICAgbnVtT2ZQYWdlcz17cGFnZXNDb3VudH1cbiAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2xpY2s9e3JlZGlyZWN0VG9QYWdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MgZnJvbSBcIi4uLy4uLy4uL2Z1bmN0aW9ucy9lbGVtZW50T3JQYXJlbnRIYXNDbGFzc1wiO1xuXG5jb25zdCByZWRpcmVjdCA9IGxvY2F0aW9uID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgVGhlbWVDYXJkID0gKHt0aGVtZUlkICwgbmFtZSwgaW1nUGF0aCwgYXV0aG9yLCBzbGFzaGVzSW5VcmwgPSAwfSkgPT4ge1xuICAgIGNvbnN0IEFOQ0hPUl9DTEFTUyA9ICdhdXRob3ItbGluayc7XG4gICAgY29uc3QgcGF0aFRvVGhlbWUgPSAnL3RoZW1lLycgKyB0aGVtZUlkO1xuICAgIGlmICghaW1nUGF0aCB8fCBpbWdQYXRoID09PSAnJykge1xuICAgICAgICBpbWdQYXRoID0gJy4vaW1nL25vLXByZXZpZXcucG5nJztcbiAgICAgICAgaWYgKHNsYXNoZXNJblVybCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xhc2hlc0luVXJsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbWdQYXRoID0gYC4ke2ltZ1BhdGh9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtY2FyZFwiIGlkPXt0aGVtZUlkfSBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghZWxlbWVudE9yUGFyZW50SGFzQ2xhc3MoZS50YXJnZXQsIEFOQ0hPUl9DTEFTUykpIHtcbiAgICAgICAgICAgICAgICByZWRpcmVjdChwYXRoVG9UaGVtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2PjxzbWFsbD5CeSA8YSBocmVmPXtgL3RoZW1lc09mLyR7YXV0aG9yfWB9IG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICByZWRpcmVjdChgL3RoZW1lc09mLyR7YXV0aG9yfWApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17QU5DSE9SX0NMQVNTfVxuICAgICAgICAgICAgPnthdXRob3J9PC9hPjwvc21hbGw+PC9kaXY+XG4gICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1jYXJkLWltZy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1BhdGh9IGFsdD1cInRoZW1lIGRldGFpbFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IEJyb3dzZVBhZ2VXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Jyb3dzZS9Ccm93c2VQYWdlV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCcm93c2VQYWdlQ29udGFpbmVyKHByb3BzKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24+XG4gICAgICAgICAgICA8L05hdmlnYXRpb24+XG4gICAgICAgICAgICA8QnJvd3NlUGFnZVdyYXBwZXI+XG4gICAgICAgICAgICA8L0Jyb3dzZVBhZ2VXcmFwcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCcm93c2VQYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL2Jyb3dzZVBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxCcm93c2VQYWdlQ29udGFpbmVyPjwvQnJvd3NlUGFnZUNvbnRhaW5lcj4sXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxuKTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgdHlwZW9mIChOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlSW50ID0gZ2xvYmFsLnBhcnNlSW50O1xudmFyIGhleCA9IC9eWystXT8wW1h4XS87XG52YXIgRk9SQ0VEID0gJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzA4JykgIT09IDggfHwgJHBhcnNlSW50KHdoaXRlc3BhY2VzICsgJzB4MTYnKSAhPT0gMjI7XG5cbi8vIGBwYXJzZUludGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWludC1zdHJpbmctcmFkaXhcbm1vZHVsZS5leHBvcnRzID0gRk9SQ0VEID8gZnVuY3Rpb24gcGFyc2VJbnQoc3RyaW5nLCByYWRpeCkge1xuICB2YXIgUyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICByZXR1cm4gJHBhcnNlSW50KFMsIChyYWRpeCA+Pj4gMCkgfHwgKGhleC50ZXN0KFMpID8gMTYgOiAxMCkpO1xufSA6ICRwYXJzZUludDtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xuXG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgTmF0aXZlTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgTnVtYmVyUHJvdG90eXBlID0gTmF0aXZlTnVtYmVyLnByb3RvdHlwZTtcblxuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NMQVNTT0YgPSBjbGFzc29mKGNyZWF0ZShOdW1iZXJQcm90b3R5cGUpKSA9PSBOVU1CRVI7XG5cbi8vIGBUb051bWJlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b251bWJlclxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIHZhciBmaXJzdCwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlLCBkaWdpdHMsIGxlbmd0aCwgaW5kZXgsIGNvZGU7XG4gIGlmICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMikge1xuICAgIGl0ID0gdHJpbShpdCk7XG4gICAgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApO1xuICAgIGlmIChmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KSB7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZiAodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApIHJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYgKGZpcnN0ID09PSA0OCkge1xuICAgICAgc3dpdGNoIChpdC5jaGFyQ29kZUF0KDEpKSB7XG4gICAgICAgIGNhc2UgNjY6IGNhc2UgOTg6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OTogY2FzZSAxMTE6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCBvZiAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBkaWdpdHMgPSBpdC5zbGljZSgyKTtcbiAgICAgIGxlbmd0aCA9IGRpZ2l0cy5sZW5ndGg7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmIChjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpIHJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbi8vIGBOdW1iZXJgIGNvbnN0cnVjdG9yXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1udW1iZXItY29uc3RydWN0b3JcbmlmIChpc0ZvcmNlZChOVU1CRVIsICFOYXRpdmVOdW1iZXIoJyAwbzEnKSB8fCAhTmF0aXZlTnVtYmVyKCcwYjEnKSB8fCBOYXRpdmVOdW1iZXIoJysweDEnKSkpIHtcbiAgdmFyIE51bWJlcldyYXBwZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZTtcbiAgICB2YXIgZHVtbXkgPSB0aGlzO1xuICAgIHJldHVybiBkdW1teSBpbnN0YW5jZW9mIE51bWJlcldyYXBwZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DTEFTU09GID8gZmFpbHMoZnVuY3Rpb24gKCkgeyBOdW1iZXJQcm90b3R5cGUudmFsdWVPZi5jYWxsKGR1bW15KTsgfSkgOiBjbGFzc29mKGR1bW15KSAhPSBOVU1CRVIpXG4gICAgICAgID8gaW5oZXJpdElmUmVxdWlyZWQobmV3IE5hdGl2ZU51bWJlcih0b051bWJlcihpdCkpLCBkdW1teSwgTnVtYmVyV3JhcHBlcikgOiB0b051bWJlcihpdCk7XG4gIH07XG4gIGZvciAodmFyIGtleXMgPSBERVNDUklQVE9SUyA/IGdldE93blByb3BlcnR5TmFtZXMoTmF0aXZlTnVtYmVyKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTMjAxNSAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTMjAxNSBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgaiA9IDAsIGtleTsga2V5cy5sZW5ndGggPiBqOyBqKyspIHtcbiAgICBpZiAoaGFzKE5hdGl2ZU51bWJlciwga2V5ID0ga2V5c1tqXSkgJiYgIWhhcyhOdW1iZXJXcmFwcGVyLCBrZXkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShOdW1iZXJXcmFwcGVyLCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihOYXRpdmVOdW1iZXIsIGtleSkpO1xuICAgIH1cbiAgfVxuICBOdW1iZXJXcmFwcGVyLnByb3RvdHlwZSA9IE51bWJlclByb3RvdHlwZTtcbiAgTnVtYmVyUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyV3JhcHBlcjtcbiAgcmVkZWZpbmUoZ2xvYmFsLCBOVU1CRVIsIE51bWJlcldyYXBwZXIpO1xufVxuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VJbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgTnVtYmVyLnBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW51bWJlci5wYXJzZWludFxuJCh7IHRhcmdldDogJ051bWJlcicsIHN0YXQ6IHRydWUsIGZvcmNlZDogTnVtYmVyLnBhcnNlSW50ICE9IHBhcnNlSW50IH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=