(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createTheme"],{

/***/ "./assets/js/react/components/create/CreateThemeForm.js":
/*!**************************************************************!*\
  !*** ./assets/js/react/components/create/CreateThemeForm.js ***!
  \**************************************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var sendCreateThemeRequest = function sendCreateThemeRequest(name, privacyLevel, description) {
  axios__WEBPACK_IMPORTED_MODULE_15___default.a.post('/create/theme', {
    name: name,
    privacyLevel: privacyLevel,
    description: description
  }).then(function (res) {
    console.log(res);
  });
};

var CreateThemeForm = function CreateThemeForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      privacyLevel = _useState4[0],
      setPrivacyLevel = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])(1),
      _useState6 = _slicedToArray(_useState5, 2),
      description = _useState6[0],
      setDescription = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_14__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      allowedPrivacyLevels = _useState8[0],
      setAllowedPrivacyLevels = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_14__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('/data/allowed_privacy_levels').then(function (res) {
      if (res.data && res.data.length > 0) {
        setAllowedPrivacyLevels(res.data);
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    id: "form-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("form", {
    action: "/create/theme",
    id: "create-theme-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("label", {
    htmlFor: "theme-name-input"
  }, "Theme name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
    type: "text",
    id: "theme-name-input",
    name: "name",
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("label", {
    htmlFor: "privacy-level-select"
  }, "Theme visibility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("select", {
    name: "privacyLevel",
    id: "privacy-level-select",
    onChange: function onChange(e) {
      return setPrivacyLevel(e.target.value);
    }
  }, allowedPrivacyLevels.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("option", {
      key: item.id,
      value: item.id
    }, item.description);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("label", {
    htmlFor: "description-input"
  }, "Description (optional)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("textarea", {
    name: "description",
    id: "description-input",
    cols: "30",
    rows: "5",
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
    type: "submit",
    onClick: function onClick() {
      return sendCreateThemeRequest(name, privacyLevel, description);
    },
    className: "button-green"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateThemeForm);

/***/ }),

/***/ "./assets/js/react/components/create/CreateThemePageWrapper.js":
/*!*********************************************************************!*\
  !*** ./assets/js/react/components/create/CreateThemePageWrapper.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _CreateThemeForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateThemeForm */ "./assets/js/react/components/create/CreateThemeForm.js");




var CreateThemePageWrapper = function CreateThemePageWrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateThemeForm__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateThemePageWrapper);

/***/ }),

/***/ "./assets/js/react/containers/createThemePageContainer.js":
/*!****************************************************************!*\
  !*** ./assets/js/react/containers/createThemePageContainer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ "./assets/js/react/components/Navigation.js");
/* harmony import */ var _components_create_CreateThemePageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/create/CreateThemePageWrapper */ "./assets/js/react/components/create/CreateThemePageWrapper.js");




var CreateThemePageContainer = function CreateThemePageContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_create_CreateThemePageWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateThemePageContainer);

/***/ }),

/***/ "./assets/js/react/pages/createTheme.js":
/*!**********************************************!*\
  !*** ./assets/js/react/pages/createTheme.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_createThemePageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/createThemePageContainer */ "./assets/js/react/containers/createThemePageContainer.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_createThemePageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ })

},[["./assets/js/react/pages/createTheme.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign","browse~create~createIndex~createTheme~homepage~myThemes~sign"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlVGhlbWVGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVUaGVtZVBhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb250YWluZXJzL2NyZWF0ZVRoZW1lUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlVGhlbWUuanMiXSwibmFtZXMiOlsic2VuZENyZWF0ZVRoZW1lUmVxdWVzdCIsIm5hbWUiLCJwcml2YWN5TGV2ZWwiLCJkZXNjcmlwdGlvbiIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiQ3JlYXRlVGhlbWVGb3JtIiwidXNlU3RhdGUiLCJzZXROYW1lIiwic2V0UHJpdmFjeUxldmVsIiwic2V0RGVzY3JpcHRpb24iLCJhbGxvd2VkUHJpdmFjeUxldmVscyIsInNldEFsbG93ZWRQcml2YWN5TGV2ZWxzIiwidXNlRWZmZWN0IiwiZ2V0IiwiZGF0YSIsImxlbmd0aCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJpZCIsIkNyZWF0ZVRoZW1lUGFnZVdyYXBwZXIiLCJDcmVhdGVUaGVtZVBhZ2VDb250YWluZXIiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsSUFBRCxFQUFPQyxZQUFQLEVBQXFCQyxXQUFyQixFQUFxQztBQUNoRUMsK0NBQUssQ0FBQ0MsSUFBTixDQUFX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LEtBRmI7QUFHSSxhQUFTLEVBQUM7QUFIZCxJQXBDSixDQURKLENBREo7QUE4Q0gsQ0E1REQ7O0FBOERlTyw4RUFBZixFOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNaUIsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ2pDLHNCQUNJO0FBQUssTUFBRSxFQUFDO0FBQVIsa0JBQ0ksMkRBQUMsd0RBQUQsT0FESixlQUVJLDJEQUFDLCtDQUFELE9BRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VBLHFGQUFmLEU7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFNO0FBQ25DLHNCQUNJLHFGQUNJLDJEQUFDLDhEQUFELE9BREosZUFFSSwyREFBQyxpRkFBRCxPQUZKLENBREo7QUFNSCxDQVBEOztBQVNlQSx1RkFBZixFOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLDRFQUFELE9BREosRUFFSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBRkosRSIsImZpbGUiOiJjcmVhdGVUaGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBzZW5kQ3JlYXRlVGhlbWVSZXF1ZXN0ID0gKG5hbWUsIHByaXZhY3lMZXZlbCwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBheGlvcy5wb3N0KCcvY3JlYXRlL3RoZW1lJywge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBwcml2YWN5TGV2ZWw6IHByaXZhY3lMZXZlbCxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgfSk7XG59XG5cbmNvbnN0IENyZWF0ZVRoZW1lRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3ByaXZhY3lMZXZlbCwgc2V0UHJpdmFjeUxldmVsXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2FsbG93ZWRQcml2YWN5TGV2ZWxzLCBzZXRBbGxvd2VkUHJpdmFjeUxldmVsc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJy9kYXRhL2FsbG93ZWRfcHJpdmFjeV9sZXZlbHMnKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNldEFsbG93ZWRQcml2YWN5TGV2ZWxzKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvY3JlYXRlL3RoZW1lXCIgaWQ9XCJjcmVhdGUtdGhlbWUtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRoZW1lLW5hbWUtaW5wdXRcIj5UaGVtZSBuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aGVtZS1uYW1lLWlucHV0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaXZhY3ktbGV2ZWwtc2VsZWN0XCI+VGhlbWUgdmlzaWJpbGl0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpdmFjeUxldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcml2YWN5LWxldmVsLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFByaXZhY3lMZXZlbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkUHJpdmFjeUxldmVscy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb24taW5wdXRcIj5EZXNjcmlwdGlvbiAob3B0aW9uYWwpPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvbi1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VuZENyZWF0ZVRoZW1lUmVxdWVzdChuYW1lLCBwcml2YWN5TGV2ZWwsIGRlc2NyaXB0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUaGVtZUZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IENyZWF0ZVRoZW1lRm9ybSBmcm9tIFwiLi9DcmVhdGVUaGVtZUZvcm1cIjtcblxuXG5jb25zdCBDcmVhdGVUaGVtZVBhZ2VXcmFwcGVyID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxDcmVhdGVUaGVtZUZvcm0gLz5cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUaGVtZVBhZ2VXcmFwcGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgQ3JlYXRlVGhlbWVQYWdlV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlVGhlbWVQYWdlV3JhcHBlclwiO1xuXG5jb25zdCBDcmVhdGVUaGVtZVBhZ2VDb250YWluZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgPENyZWF0ZVRoZW1lUGFnZVdyYXBwZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUaGVtZVBhZ2VDb250YWluZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENyZWF0ZVRoZW1lUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9jcmVhdGVUaGVtZVBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxDcmVhdGVUaGVtZVBhZ2VDb250YWluZXIvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=