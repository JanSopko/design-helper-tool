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



var LABEL_TEXT_NAME = 'Theme name';
var LABEL_TEXT_PRIVACY_LEVEL = 'Theme visibility';
var LABEL_TEXT_DESCRIPTION = 'Description (optional)';

var sendCreateThemeRequest = function sendCreateThemeRequest(name, privacyLevel, description) {
  axios__WEBPACK_IMPORTED_MODULE_15___default.a.post('/create/theme', {
    name: name,
    privacyLevel: privacyLevel,
    description: description
  }).then(function (res) {
    if (res.data.length > 0 || !res.data.success) {
      showWarnings(res.data);
    } else {
      alert('Theme successfully created!');
      window.location.href = '/my_themes';
    }
  });
};

var showWarnings = function showWarnings(data) {
  console.log(data.name);
  var nameLabel = document.getElementById('theme-name-label');
  var privacyLevelLabel = document.getElementById('privacy-level-label');
  var descriptionLabel = document.getElementById('description-label');

  if (data.name) {
    nameLabel.classList.add('warning');
    nameLabel.innerHTML = data.name;
  } else {
    nameLabel.classList.remove('warning');
    nameLabel.innerHTML = LABEL_TEXT_NAME;
  }

  if (data.privacyLevel) {
    privacyLevelLabel.classList.add('warning');
    privacyLevelLabel.innerHTML = data.privacyLevel;
  } else {
    privacyLevelLabel.classList.remove('warning');
    privacyLevelLabel.innerHTML = LABEL_TEXT_PRIVACY_LEVEL;
  }

  if (data.description) {
    descriptionLabel.classList.add('warning');
    descriptionLabel.innerHTML = data.description;
  } else {
    descriptionLabel.classList.remove('warning');
    descriptionLabel.innerHTML = LABEL_TEXT_DESCRIPTION;
  }

  if (data.message && !data.name) {
    nameLabel.classList.add('warning');
    nameLabel.innerHTML = data.message;
  } else if (!data.name) {
    nameLabel.classList.remove('warning');
    nameLabel.innerHTML = LABEL_TEXT_NAME;
  }
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
    id: "theme-name-label",
    htmlFor: "theme-name-input"
  }, LABEL_TEXT_NAME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("input", {
    type: "text",
    id: "theme-name-input",
    name: "name",
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("label", {
    id: "privacy-level-label",
    htmlFor: "privacy-level-select"
  }, LABEL_TEXT_PRIVACY_LEVEL), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("select", {
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
    id: "description-label",
    htmlFor: "description-input"
  }, LABEL_TEXT_DESCRIPTION), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("textarea", {
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
    className: "button-green",
    value: "Create Theme"
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

},[["./assets/js/react/pages/createTheme.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlVGhlbWVGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVUaGVtZVBhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb250YWluZXJzL2NyZWF0ZVRoZW1lUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlVGhlbWUuanMiXSwibmFtZXMiOlsiTEFCRUxfVEVYVF9OQU1FIiwiTEFCRUxfVEVYVF9QUklWQUNZX0xFVkVMIiwiTEFCRUxfVEVYVF9ERVNDUklQVElPTiIsInNlbmRDcmVhdGVUaGVtZVJlcXVlc3QiLCJuYW1lIiwicHJpdmFjeUxldmVsIiwiZGVzY3JpcHRpb24iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImxlbmd0aCIsInN1Y2Nlc3MiLCJzaG93V2FybmluZ3MiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbnNvbGUiLCJsb2ciLCJuYW1lTGFiZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicHJpdmFjeUxldmVsTGFiZWwiLCJkZXNjcmlwdGlvbkxhYmVsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicmVtb3ZlIiwibWVzc2FnZSIsIkNyZWF0ZVRoZW1lRm9ybSIsInVzZVN0YXRlIiwic2V0TmFtZSIsInNldFByaXZhY3lMZXZlbCIsInNldERlc2NyaXB0aW9uIiwiYWxsb3dlZFByaXZhY3lMZXZlbHMiLCJzZXRBbGxvd2VkUHJpdmFjeUxldmVscyIsInVzZUVmZmVjdCIsImdldCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJpZCIsIkNyZWF0ZVRoZW1lUGFnZVdyYXBwZXIiLCJDcmVhdGVUaGVtZVBhZ2VD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QUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBTGYsSUFGSixDQTFCSixlQW9DSTtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksV0FBTyxFQUFFO0FBQUEsYUFBTXZDLHNCQUFzQixDQUFDQyxJQUFELEVBQU9DLFlBQVAsRUFBcUJDLFdBQXJCLENBQTVCO0FBQUEsS0FGYjtBQUdJLGFBQVMsRUFBQyxjQUhkO0FBSUksU0FBSyxFQUFDO0FBSlYsSUFwQ0osQ0FESixDQURKO0FBK0NILENBN0REOztBQStEZXlCLDhFQUFmLEU7Ozs7Ozs7Ozs7OztBQzVIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1lLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBTTtBQUNqQyxzQkFDSTtBQUFLLE1BQUUsRUFBQztBQUFSLGtCQUNJLDJEQUFDLHdEQUFELE9BREosZUFFSSwyREFBQywrQ0FBRCxPQUZKLENBREo7QUFNSCxDQVBEOztBQVNlQSxxRkFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNuQyxzQkFDSSxxRkFDSSwyREFBQyw4REFBRCxPQURKLGVBRUksMkRBQUMsaUZBQUQsT0FGSixDQURKO0FBTUgsQ0FQRDs7QUFTZUEsdUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFDLGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyw0RUFBRCxPQURKLEVBRUkzQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSixFIiwiZmlsZSI6ImNyZWF0ZVRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IExBQkVMX1RFWFRfTkFNRSA9ICdUaGVtZSBuYW1lJztcbmNvbnN0IExBQkVMX1RFWFRfUFJJVkFDWV9MRVZFTCA9ICdUaGVtZSB2aXNpYmlsaXR5JztcbmNvbnN0IExBQkVMX1RFWFRfREVTQ1JJUFRJT04gPSAnRGVzY3JpcHRpb24gKG9wdGlvbmFsKSc7XG5cbmNvbnN0IHNlbmRDcmVhdGVUaGVtZVJlcXVlc3QgPSAobmFtZSwgcHJpdmFjeUxldmVsLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGF4aW9zLnBvc3QoJy9jcmVhdGUvdGhlbWUnLCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHByaXZhY3lMZXZlbDogcHJpdmFjeUxldmVsLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID4gMCB8fCAhcmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHNob3dXYXJuaW5ncyhyZXMuZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1RoZW1lIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIScpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9teV90aGVtZXMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn1cblxuY29uc3Qgc2hvd1dhcm5pbmdzID0gZGF0YSA9PiB7XG4gICAgY29uc29sZS5sb2cgKGRhdGEubmFtZSk7XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLW5hbWUtbGFiZWwnKTtcbiAgICBjb25zdCBwcml2YWN5TGV2ZWxMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcml2YWN5LWxldmVsLWxhYmVsJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1sYWJlbCcpO1xuXG4gICAgaWYgKGRhdGEubmFtZSkge1xuICAgICAgICBuYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSBMQUJFTF9URVhUX05BTUU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucHJpdmFjeUxldmVsKSB7XG4gICAgICAgIHByaXZhY3lMZXZlbExhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcbiAgICAgICAgcHJpdmFjeUxldmVsTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5wcml2YWN5TGV2ZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJpdmFjeUxldmVsTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2FybmluZycpO1xuICAgICAgICBwcml2YWN5TGV2ZWxMYWJlbC5pbm5lckhUTUwgPSBMQUJFTF9URVhUX1BSSVZBQ1lfTEVWRUw7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcm5pbmcnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPSBMQUJFTF9URVhUX0RFU0NSSVBUSU9OO1xuICAgIH1cblxuICAgIGlmIChkYXRhLm1lc3NhZ2UgJiYgIWRhdGEubmFtZSkge1xuICAgICAgICBuYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5tZXNzYWdlO1xuICAgIH0gZWxzZSBpZiAoIWRhdGEubmFtZSkge1xuICAgICAgICBuYW1lTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2FybmluZycpO1xuICAgICAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gTEFCRUxfVEVYVF9OQU1FO1xuICAgIH1cbn1cblxuY29uc3QgQ3JlYXRlVGhlbWVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcHJpdmFjeUxldmVsLCBzZXRQcml2YWN5TGV2ZWxdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbYWxsb3dlZFByaXZhY3lMZXZlbHMsIHNldEFsbG93ZWRQcml2YWN5TGV2ZWxzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2RhdGEvYWxsb3dlZF9wcml2YWN5X2xldmVscycpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc2V0QWxsb3dlZFByaXZhY3lMZXZlbHMocmVzLmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9jcmVhdGUvdGhlbWVcIiBpZD1cImNyZWF0ZS10aGVtZS1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBpZD1cInRoZW1lLW5hbWUtbGFiZWxcIiBodG1sRm9yPVwidGhlbWUtbmFtZS1pbnB1dFwiPntMQUJFTF9URVhUX05BTUV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aGVtZS1uYW1lLWlucHV0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17ZSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJwcml2YWN5LWxldmVsLWxhYmVsXCIgaHRtbEZvcj1cInByaXZhY3ktbGV2ZWwtc2VsZWN0XCI+e0xBQkVMX1RFWFRfUFJJVkFDWV9MRVZFTH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaXZhY3lMZXZlbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicHJpdmFjeS1sZXZlbC1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQcml2YWN5TGV2ZWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFByaXZhY3lMZXZlbHMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJkZXNjcmlwdGlvbi1sYWJlbFwiIGh0bWxGb3I9XCJkZXNjcmlwdGlvbi1pbnB1dFwiPntMQUJFTF9URVhUX0RFU0NSSVBUSU9OfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb24taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbmRDcmVhdGVUaGVtZVJlcXVlc3QobmFtZSwgcHJpdmFjeUxldmVsLCBkZXNjcmlwdGlvbil9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiQ3JlYXRlIFRoZW1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUaGVtZUZvcm07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IENyZWF0ZVRoZW1lRm9ybSBmcm9tIFwiLi9DcmVhdGVUaGVtZUZvcm1cIjtcblxuXG5jb25zdCBDcmVhdGVUaGVtZVBhZ2VXcmFwcGVyID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxDcmVhdGVUaGVtZUZvcm0gLz5cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUaGVtZVBhZ2VXcmFwcGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgQ3JlYXRlVGhlbWVQYWdlV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlVGhlbWVQYWdlV3JhcHBlclwiO1xuXG5jb25zdCBDcmVhdGVUaGVtZVBhZ2VDb250YWluZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgPENyZWF0ZVRoZW1lUGFnZVdyYXBwZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVUaGVtZVBhZ2VDb250YWluZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENyZWF0ZVRoZW1lUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9jcmVhdGVUaGVtZVBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxDcmVhdGVUaGVtZVBhZ2VDb250YWluZXIvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=