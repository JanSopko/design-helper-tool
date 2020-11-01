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
    if (res.data.length > 0) {
      showWarnings(res.data);
    } else {
      alert('Theme successfully created!');
      window.location.href = '/my_themes';
    }
  });
};

var showWarnings = function showWarnings(data) {
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
    nameLabel.classList.add('warning');
    nameLabel.innerHTML = data.privacyLevel;
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

},[["./assets/js/react/pages/createTheme.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign","browse~create~createIndex~createTheme~homepage~myThemes~sign"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlVGhlbWVGb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVUaGVtZVBhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb250YWluZXJzL2NyZWF0ZVRoZW1lUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvY3JlYXRlVGhlbWUuanMiXSwibmFtZXMiOlsiTEFCRUxfVEVYVF9OQU1FIiwiTEFCRUxfVEVYVF9QUklWQUNZX0xFVkVMIiwiTEFCRUxfVEVYVF9ERVNDUklQVElPTiIsInNlbmRDcmVhdGVUaGVtZVJlcXVlc3QiLCJuYW1lIiwicHJpdmFjeUxldmVsIiwiZGVzY3JpcHRpb24iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImxlbmd0aCIsInNob3dXYXJuaW5ncyIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibmFtZUxhYmVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByaXZhY3lMZXZlbExhYmVsIiwiZGVzY3JpcHRpb25MYWJlbCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInJlbW92ZSIsIkNyZWF0ZVRoZW1lRm9ybSIsInVzZVN0YXRlIiwic2V0TmFtZSIsInNldFByaXZhY3lMZXZlbCIsInNldERlc2NyaXB0aW9uIiwiYWxsb3dlZFByaXZhY3lMZXZlbHMiLCJzZXRBbGxvd2VkUHJpdmFjeUxldmVscyIsInVzZUVmZmVjdCIsImdldCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJpZCIsIkNyZWF0ZVRoZW1lUGFnZVdyYXBwZXIiLCJDcmVhdGVUaGVtZVBhZ2VDb250YWluZXIiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBw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ZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNuQyxzQkFDSSxxRkFDSSwyREFBQyw4REFBRCxPQURKLGVBRUksMkRBQUMsaUZBQUQsT0FGSixDQURKO0FBTUgsQ0FQRDs7QUFTZUEsdUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFDLGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyw0RUFBRCxPQURKLEVBRUkxQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSixFIiwiZmlsZSI6ImNyZWF0ZVRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IExBQkVMX1RFWFRfTkFNRSA9ICdUaGVtZSBuYW1lJztcbmNvbnN0IExBQkVMX1RFWFRfUFJJVkFDWV9MRVZFTCA9ICdUaGVtZSB2aXNpYmlsaXR5JztcbmNvbnN0IExBQkVMX1RFWFRfREVTQ1JJUFRJT04gPSAnRGVzY3JpcHRpb24gKG9wdGlvbmFsKSc7XG5cbmNvbnN0IHNlbmRDcmVhdGVUaGVtZVJlcXVlc3QgPSAobmFtZSwgcHJpdmFjeUxldmVsLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGF4aW9zLnBvc3QoJy9jcmVhdGUvdGhlbWUnLCB7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHByaXZhY3lMZXZlbDogcHJpdmFjeUxldmVsLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNob3dXYXJuaW5ncyhyZXMuZGF0YSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1RoZW1lIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIScpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9teV90aGVtZXMnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn1cblxuY29uc3Qgc2hvd1dhcm5pbmdzID0gZGF0YSA9PiB7XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLW5hbWUtbGFiZWwnKTtcbiAgICBjb25zdCBwcml2YWN5TGV2ZWxMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcml2YWN5LWxldmVsLWxhYmVsJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbi1sYWJlbCcpO1xuXG4gICAgaWYgKGRhdGEubmFtZSkge1xuICAgICAgICBuYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSBMQUJFTF9URVhUX05BTUU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucHJpdmFjeUxldmVsKSB7XG4gICAgICAgIG5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG4gICAgICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSBkYXRhLnByaXZhY3lMZXZlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcml2YWN5TGV2ZWxMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIHByaXZhY3lMZXZlbExhYmVsLmlubmVySFRNTCA9IExBQkVMX1RFWFRfUFJJVkFDWV9MRVZFTDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5kZXNjcmlwdGlvbikge1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lckhUTUwgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2FybmluZycpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVySFRNTCA9IExBQkVMX1RFWFRfREVTQ1JJUFRJT047XG4gICAgfVxufVxuXG5jb25zdCBDcmVhdGVUaGVtZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwcml2YWN5TGV2ZWwsIHNldFByaXZhY3lMZXZlbF0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFthbGxvd2VkUHJpdmFjeUxldmVscywgc2V0QWxsb3dlZFByaXZhY3lMZXZlbHNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvZGF0YS9hbGxvd2VkX3ByaXZhY3lfbGV2ZWxzJykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRBbGxvd2VkUHJpdmFjeUxldmVscyhyZXMuZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBpZD1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2NyZWF0ZS90aGVtZVwiIGlkPVwiY3JlYXRlLXRoZW1lLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGlkPVwidGhlbWUtbmFtZS1sYWJlbFwiIGh0bWxGb3I9XCJ0aGVtZS1uYW1lLWlucHV0XCI+e0xBQkVMX1RFWFRfTkFNRX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRoZW1lLW5hbWUtaW5wdXRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBpZD1cInByaXZhY3ktbGV2ZWwtbGFiZWxcIiBodG1sRm9yPVwicHJpdmFjeS1sZXZlbC1zZWxlY3RcIj57TEFCRUxfVEVYVF9QUklWQUNZX0xFVkVMfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpdmFjeUxldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcml2YWN5LWxldmVsLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFByaXZhY3lMZXZlbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkUHJpdmFjeUxldmVscy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBpZD1cImRlc2NyaXB0aW9uLWxhYmVsXCIgaHRtbEZvcj1cImRlc2NyaXB0aW9uLWlucHV0XCI+e0xBQkVMX1RFWFRfREVTQ1JJUFRJT059PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvbi1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2VuZENyZWF0ZVRoZW1lUmVxdWVzdChuYW1lLCBwcml2YWN5TGV2ZWwsIGRlc2NyaXB0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJDcmVhdGUgVGhlbWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVRoZW1lRm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgQ3JlYXRlVGhlbWVGb3JtIGZyb20gXCIuL0NyZWF0ZVRoZW1lRm9ybVwiO1xuXG5cbmNvbnN0IENyZWF0ZVRoZW1lUGFnZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPENyZWF0ZVRoZW1lRm9ybSAvPlxuICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVRoZW1lUGFnZVdyYXBwZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBDcmVhdGVUaGVtZVBhZ2VXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NyZWF0ZS9DcmVhdGVUaGVtZVBhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IENyZWF0ZVRoZW1lUGFnZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICA8Q3JlYXRlVGhlbWVQYWdlV3JhcHBlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVRoZW1lUGFnZUNvbnRhaW5lcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3JlYXRlVGhlbWVQYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL2NyZWF0ZVRoZW1lUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPENyZWF0ZVRoZW1lUGFnZUNvbnRhaW5lci8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==