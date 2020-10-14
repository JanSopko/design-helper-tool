(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign"],{

/***/ "./assets/js/react/components/PasswordInput.js":
/*!*****************************************************!*\
  !*** ./assets/js/react/components/PasswordInput.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordInput; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PasswordInput = /*#__PURE__*/function (_React$Component) {
  _inherits(PasswordInput, _React$Component);

  var _super = _createSuper(PasswordInput);

  function PasswordInput(props) {
    var _this;

    _classCallCheck(this, PasswordInput);

    _this = _super.call(this, props);
    _this.state = {
      type: "password",
      iconClassName: "eye-icon",
      hoverText: "Show password"
    };
    return _this;
  }

  _createClass(PasswordInput, [{
    key: "onHandleClick",
    value: function onHandleClick() {
      var newType = this.state.type === "password" ? "text" : "password";
      var newClassName = "eye-icon";
      var newHoverText = "Show password";

      if (newType !== "password") {
        newClassName = "eye-icon inverted";
        newHoverText = "Hide password";
      }

      this.setState({
        type: newType,
        iconClassName: newClassName,
        hoverText: newHoverText
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", {
        className: "form-grouping"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label", {
        htmlFor: this.props.id,
        id: this.props.labelId
      }, this.props.labelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input", {
        type: this.state.type,
        name: this.props.name,
        id: this.props.id,
        className: "password-input"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("img", {
        src: "./img/eye-icon.png",
        alt: "eye",
        className: this.state.iconClassName,
        onClick: function onClick() {
          return _this2.onHandleClick();
        },
        title: this.state.hoverText
      })));
    }
  }]);

  return PasswordInput;
}(react__WEBPACK_IMPORTED_MODULE_15___default.a.Component);



/***/ }),

/***/ "./assets/js/react/components/sign/FormWrapper.js":
/*!********************************************************!*\
  !*** ./assets/js/react/components/sign/FormWrapper.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormWrapper; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _SignFormOption__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SignFormOption */ "./assets/js/react/components/sign/SignFormOption.js");
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RegisterForm */ "./assets/js/react/components/sign/RegisterForm.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LoginForm */ "./assets/js/react/components/sign/LoginForm.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var FormWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(FormWrapper, _React$Component);

  var _super = _createSuper(FormWrapper);

  function FormWrapper() {
    var _this;

    _classCallCheck(this, FormWrapper);

    _this = _super.call(this);
    _this.options = ["LoginForm", "RegisterForm"];
    _this.state = {
      currentOption: _this.options[0]
    };
    return _this;
  }

  _createClass(FormWrapper, [{
    key: "onChangeForm",
    value: function onChangeForm(option) {
      if (option !== this.state.currentOption) {
        this.setState({
          currentOption: option
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var forms = {
        LoginForm: _LoginForm__WEBPACK_IMPORTED_MODULE_17__["default"],
        RegisterForm: _RegisterForm__WEBPACK_IMPORTED_MODULE_16__["default"]
      };
      var CurrentForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(forms[this.state.currentOption]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        id: "form-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "options-bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_SignFormOption__WEBPACK_IMPORTED_MODULE_15__["default"], {
        text: "Sign in",
        selected: this.state.currentOption === this.options[0],
        option: 0,
        onClick: function onClick() {
          _this2.onChangeForm(_this2.options[0]);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_SignFormOption__WEBPACK_IMPORTED_MODULE_15__["default"], {
        text: "Register",
        selected: this.state.currentOption === this.options[1],
        option: 1,
        onClick: function onClick() {
          _this2.onChangeForm(_this2.options[1]);
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        className: "form-container"
      }, CurrentForm));
    }
  }]);

  return FormWrapper;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);



/***/ }),

/***/ "./assets/js/react/components/sign/LoginForm.js":
/*!******************************************************!*\
  !*** ./assets/js/react/components/sign/LoginForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PasswordInput */ "./assets/js/react/components/PasswordInput.js");


function LoginForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: layoutData.loginPath,
    id: "sign-form",
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "username",
    id: "username-input"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "password-input",
    name: "password",
    labelText: "Password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Login",
    className: "button-green"
  }))));
}

/***/ }),

/***/ "./assets/js/react/components/sign/RegisterForm.js":
/*!*********************************************************!*\
  !*** ./assets/js/react/components/sign/RegisterForm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PasswordInput */ "./assets/js/react/components/PasswordInput.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



var LABEL_TEXT_USERNAME = 'Username';
var LABEL_TEXT_EMAIL = 'Email';
var LABEL_TEXT_PASSWORD = 'Password';
var LABEL_TEXT_PASSWORD_CONFIRM = 'Confirm password';

var sendRegisterRequest = function sendRegisterRequest(e) {
  e.preventDefault();
  var username = window.document.getElementById('username-input').value;
  var email = window.document.getElementById('email-input').value;
  var password = window.document.getElementById('password-input').value;
  var passwordConfirm = window.document.getElementById('password-confirm-input').value;
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/register', {
    "username": username,
    "email": email,
    "password": password,
    "password-confirm": passwordConfirm
  }).then(function (res) {
    console.log(res.data);
    showWarnings(res.data);
  });
};

var showWarnings = function showWarnings(data) {
  var usernameLabel = window.document.getElementById('username-label');
  var passwordLabel = window.document.getElementById('password-label');
  var passwordConfirmLabel = window.document.getElementById('password-confirm-label');
  var emailLabel = window.document.getElementById('email-label');

  if (data.username !== undefined) {
    usernameLabel.classList.add('warning');
    usernameLabel.innerHTML = data.username;
  } else {
    usernameLabel.classList.remove('warning');
    usernameLabel.innerHTML = LABEL_TEXT_USERNAME;
  }

  if (data.password !== undefined) {
    passwordLabel.classList.add('warning');
    passwordLabel.innerHTML = data.password;
  } else {
    passwordLabel.classList.remove('warning');
    window.document.getElementById('password-label').innerHTML = LABEL_TEXT_PASSWORD;
  }

  if (data.passwordConfirm !== undefined) {
    passwordConfirmLabel.classList.add('warning');
    passwordConfirmLabel.innerHTML = data.passwordConfirm;
  } else {
    passwordConfirmLabel.classList.remove('warning');
    passwordConfirmLabel.innerHTML = LABEL_TEXT_PASSWORD_CONFIRM;
  }

  if (data.email !== undefined) {
    emailLabel.classList.add('warning');
    emailLabel.innerHTML = data.email;
  } else {
    emailLabel.classList.remove('warning');
    emailLabel.innerHTML = LABEL_TEXT_EMAIL;
  }
};

function RegisterForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    action: layoutData.registerPath,
    id: "sign-form",
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "username-input",
    id: "username-label"
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "username",
    id: "username-input"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email-input",
    id: "email-label"
  }, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    name: "email",
    id: "email-input"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "password-input",
    name: "password",
    labelText: "Password",
    labelId: "password-label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PasswordInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "password-confirm-input",
    name: "password-confirm",
    labelId: "password-confirm-label",
    labelText: "Confirm password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "Register",
    className: "button-green",
    onClick: sendRegisterRequest
  }))));
}

/***/ }),

/***/ "./assets/js/react/components/sign/SignFormOption.js":
/*!***********************************************************!*\
  !*** ./assets/js/react/components/sign/SignFormOption.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignFormOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SignFormOption(props) {
  var className = 'form-option';
  className += props.option === 0 ? ' option-left' : ' option-right';
  if (props.selected) className += ' selected-option';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: className,
    onClick: props.onClick
  }, props.text);
}

/***/ }),

/***/ "./assets/js/react/components/sign/SignPageWrapper.js":
/*!************************************************************!*\
  !*** ./assets/js/react/components/sign/SignPageWrapper.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignPageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _FormWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormWrapper */ "./assets/js/react/components/sign/FormWrapper.js");



function SignPageWrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./assets/js/react/containers/signPageContainer.js":
/*!*********************************************************!*\
  !*** ./assets/js/react/containers/signPageContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignPageContainer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Navigation */ "./assets/js/react/components/Navigation.js");
/* harmony import */ var _components_sign_SignPageWrapper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/sign/SignPageWrapper */ "./assets/js/react/components/sign/SignPageWrapper.js");















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var SignPageContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(SignPageContainer, _React$Component);

  var _super = _createSuper(SignPageContainer);

  function SignPageContainer() {
    _classCallCheck(this, SignPageContainer);

    return _super.call(this);
  }

  _createClass(SignPageContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(_components_sign_SignPageWrapper__WEBPACK_IMPORTED_MODULE_16__["default"], null));
    }
  }]);

  return SignPageContainer;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);



/***/ }),

/***/ "./assets/js/react/pages/sign.js":
/*!***************************************!*\
  !*** ./assets/js/react/pages/sign.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_signPageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/signPageContainer */ "./assets/js/react/containers/signPageContainer.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_signPageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), window.document.getElementById('root'));

/***/ })

},[["./assets/js/react/pages/sign.js","runtime","vendors~create~homepage~sign","create~homepage~sign"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9QYXNzd29yZElucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3NpZ24vRm9ybVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9SZWdpc3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9TaWduRm9ybU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9zaWduL1NpZ25QYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9zaWduUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvc2lnbi5qcyJdLCJuYW1lcyI6WyJQYXNzd29yZElucHV0IiwicHJvcHMiLCJzdGF0ZSIsInR5cGUiLCJpY29uQ2xhc3NOYW1lIiwiaG92ZXJUZXh0IiwibmV3VHlwZSIsIm5ld0NsYXNzTmFtZSIsIm5ld0hvdmVyVGV4dCIsInNldFN0YXRlIiwiaWQiLCJsYWJlbElkIiwibGFiZWxUZXh0IiwibmFtZSIsIm9uSGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm1XcmFwcGVyIiwib3B0aW9ucyIsImN1cnJlbnRPcHRpb24iLCJvcHRpb24iLCJmb3JtcyIsIkxvZ2luRm9ybSIsIlJlZ2lzdGVyRm9ybSIsIkN1cnJlbnRGb3JtIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlRm9ybSIsImxheW91dERhdGEiLCJsb2dpblBhdGgiLCJMQUJFTF9URVhUX1VTRVJOQU1FIiwiTEFCRUxfVEVYVF9FTUFJTCIsIkxBQkVMX1RFWFRfUEFTU1dPUkQiLCJMQUJFTF9URVhUX1BBU1NXT1JEX0NPTkZJUk0iLCJzZW5kUmVnaXN0ZXJSZXF1ZXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic2hvd1dhcm5pbmdzIiwidXNlcm5hbWVMYWJlbCIsInBhc3N3b3JkTGFiZWwiLCJwYXNzd29yZENvbmZpcm1MYWJlbCIsImVtYWlsTGFiZWwiLCJ1bmRlZmluZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJyZW1vdmUiLCJyZWdpc3RlclBhdGgiLCJTaWduRm9ybU9wdGlvbiIsImNsYXNzTmFtZSIsInNlbGVjdGVkIiwib25DbGljayIsInRleHQiLCJTaWduUGFnZVdyYXBwZXIiLCJTaWduUGFnZUNvbnRhaW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxhOzs7OztBQUNqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxVQURHO0FBRVRDLG1CQUFhLEVBQUUsVUFGTjtBQUdUQyxlQUFTLEVBQUU7QUFIRixLQUFiO0FBSGU7QUFRbEI7Ozs7b0NBRWU7QUFDWixVQUFNQyxPQUFPLEdBQUksS0FBS0osS0FBTCxDQUFXQyxJQUFYLEtBQW9CLFVBQXJCLEdBQW1DLE1BQW5DLEdBQTRDLFVBQTVEO0FBQ0EsVUFBSUksWUFBWSxHQUFHLFVBQW5CO0FBQ0EsVUFBSUMsWUFB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QXFELGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyxxRUFBRCxPQURKLEVBRUlqQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLE1BQS9CLENBRkosRSIsImZpbGUiOiJzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICBpY29uQ2xhc3NOYW1lOiBcImV5ZS1pY29uXCIsXG4gICAgICAgICAgICBob3ZlclRleHQ6IFwiU2hvdyBwYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhhbmRsZUNsaWNrKCkge1xuICAgICAgICBjb25zdCBuZXdUeXBlID0gKHRoaXMuc3RhdGUudHlwZSA9PT0gXCJwYXNzd29yZFwiKSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiIDtcbiAgICAgICAgbGV0IG5ld0NsYXNzTmFtZSA9IFwiZXllLWljb25cIjtcbiAgICAgICAgbGV0IG5ld0hvdmVyVGV4dCA9IFwiU2hvdyBwYXNzd29yZFwiO1xuICAgICAgICBpZiAobmV3VHlwZSAhPT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBuZXdDbGFzc05hbWUgPSBcImV5ZS1pY29uIGludmVydGVkXCI7XG4gICAgICAgICAgICBuZXdIb3ZlclRleHQgPSBcIkhpZGUgcGFzc3dvcmRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHR5cGU6IG5ld1R5cGUsXG4gICAgICAgICAgICBpY29uQ2xhc3NOYW1lOiBuZXdDbGFzc05hbWUsXG4gICAgICAgICAgICBob3ZlclRleHQ6IG5ld0hvdmVyVGV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5pZH0gaWQ9e3RoaXMucHJvcHMubGFiZWxJZH0+e3RoaXMucHJvcHMubGFiZWxUZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e3RoaXMuc3RhdGUudHlwZX0gbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwicGFzc3dvcmQtaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1nL2V5ZS1pY29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleWVcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaWNvbkNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25IYW5kbGVDbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuaG92ZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnbkZvcm1PcHRpb24gZnJvbSBcIi4vU2lnbkZvcm1PcHRpb25cIjtcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSBcIi4vUmVnaXN0ZXJGb3JtXCI7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuL0xvZ2luRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtcbiAgICAgICAgICAgIFwiTG9naW5Gb3JtXCIsXG4gICAgICAgICAgICBcIlJlZ2lzdGVyRm9ybVwiXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uOiB0aGlzLm9wdGlvbnNbMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlRm9ybShvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50T3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uOiBvcHRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBmb3JtcyA9IHtcbiAgICAgICAgICAgIExvZ2luRm9ybTogTG9naW5Gb3JtLFxuICAgICAgICAgICAgUmVnaXN0ZXJGb3JtOiBSZWdpc3RlckZvcm1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgQ3VycmVudEZvcm0gPSBSZWFjdC5jcmVhdGVFbGVtZW50KGZvcm1zW3RoaXMuc3RhdGUuY3VycmVudE9wdGlvbl0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZ25Gb3JtT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiU2lnbiBpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5jdXJyZW50T3B0aW9uID09PSB0aGlzLm9wdGlvbnNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb249ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5vbkNoYW5nZUZvcm0odGhpcy5vcHRpb25zWzBdKX19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9TaWduRm9ybU9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZ25Gb3JtT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiUmVnaXN0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuY3VycmVudE9wdGlvbiA9PT0gdGhpcy5vcHRpb25zWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMub25DaGFuZ2VGb3JtKHRoaXMub3B0aW9uc1sxXSl9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvU2lnbkZvcm1PcHRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7Q3VycmVudEZvcm19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuLi9QYXNzd29yZElucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRm9ybSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZGl2XCI+XG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2xheW91dERhdGEubG9naW5QYXRofSBpZD1cInNpZ24tZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRJbnB1dCBpZD1cInBhc3N3b3JkLWlucHV0XCIgbmFtZT1cInBhc3N3b3JkXCIgbGFiZWxUZXh0PVwiUGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8L1Bhc3N3b3JkSW5wdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlblwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSBcIi4uL1Bhc3N3b3JkSW5wdXRcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IExBQkVMX1RFWFRfVVNFUk5BTUUgPSAnVXNlcm5hbWUnO1xuY29uc3QgTEFCRUxfVEVYVF9FTUFJTCA9ICdFbWFpbCc7XG5jb25zdCBMQUJFTF9URVhUX1BBU1NXT1JEID0gJ1Bhc3N3b3JkJztcbmNvbnN0IExBQkVMX1RFWFRfUEFTU1dPUkRfQ09ORklSTSA9ICdDb25maXJtIHBhc3N3b3JkJztcblxuY29uc3Qgc2VuZFJlZ2lzdGVyUmVxdWVzdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBlbWFpbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZENvbmZpcm0gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWNvbmZpcm0taW5wdXQnKS52YWx1ZTtcblxuICAgIGF4aW9zLnBvc3QoJy9yZWdpc3RlcicsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWUsXG4gICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZCxcbiAgICAgICAgICAgIFwicGFzc3dvcmQtY29uZmlybVwiOiBwYXNzd29yZENvbmZpcm1cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgICAgc2hvd1dhcm5pbmdzKHJlcy5kYXRhKTtcbiAgICAgICAgfSk7XG59XG5cbmNvbnN0IHNob3dXYXJuaW5ncyA9IGRhdGEgPT4ge1xuICAgIGxldCB1c2VybmFtZUxhYmVsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZS1sYWJlbCcpO1xuICAgIGxldCBwYXNzd29yZExhYmVsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1sYWJlbCcpO1xuICAgIGxldCBwYXNzd29yZENvbmZpcm1MYWJlbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtY29uZmlybS1sYWJlbCcpO1xuICAgIGxldCBlbWFpbExhYmVsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1sYWJlbCcpO1xuXG4gICAgaWYgKGRhdGEudXNlcm5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB1c2VybmFtZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcbiAgICAgICAgdXNlcm5hbWVMYWJlbC5pbm5lckhUTUwgPSBkYXRhLnVzZXJuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHVzZXJuYW1lTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2FybmluZycpO1xuICAgICAgICB1c2VybmFtZUxhYmVsLmlubmVySFRNTCA9IExBQkVMX1RFWFRfVVNFUk5BTUU7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucGFzc3dvcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXNzd29yZExhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcbiAgICAgICAgcGFzc3dvcmRMYWJlbC5pbm5lckhUTUwgPSBkYXRhLnBhc3N3b3JkO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhc3N3b3JkTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2FybmluZycpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWxhYmVsJykuaW5uZXJIVE1MID0gTEFCRUxfVEVYVF9QQVNTV09SRDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5wYXNzd29yZENvbmZpcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXNzd29yZENvbmZpcm1MYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybUxhYmVsLmlubmVySFRNTCA9IGRhdGEucGFzc3dvcmRDb25maXJtO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybUxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcm5pbmcnKTtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtTGFiZWwuaW5uZXJIVE1MID0gTEFCRUxfVEVYVF9QQVNTV09SRF9DT05GSVJNO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmVtYWlsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZW1haWxMYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG4gICAgICAgIGVtYWlsTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5lbWFpbDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbWFpbExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcm5pbmcnKTtcbiAgICAgICAgZW1haWxMYWJlbC5pbm5lckhUTUwgPSBMQUJFTF9URVhUX0VNQUlMO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJGb3JtKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1kaXZcIj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17bGF5b3V0RGF0YS5yZWdpc3RlclBhdGh9IGlkPVwic2lnbi1mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCIgaWQ9XCJ1c2VybmFtZS1sYWJlbFwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbC1pbnB1dFwiIGlkPVwiZW1haWwtbGFiZWxcIj5FLW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbC1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRJbnB1dCBpZD1cInBhc3N3b3JkLWlucHV0XCIgbmFtZT1cInBhc3N3b3JkXCIgbGFiZWxUZXh0PVwiUGFzc3dvcmRcIiBsYWJlbElkPVwicGFzc3dvcmQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8L1Bhc3N3b3JkSW5wdXQ+XG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXQgaWQ9XCJwYXNzd29yZC1jb25maXJtLWlucHV0XCIgbmFtZT1cInBhc3N3b3JkLWNvbmZpcm1cIiBsYWJlbElkPVwicGFzc3dvcmQtY29uZmlybS1sYWJlbFwiIGxhYmVsVGV4dD1cIkNvbmZpcm0gcGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8L1Bhc3N3b3JkSW5wdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJSZWdpc3RlclwiIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlblwiIG9uQ2xpY2s9e3NlbmRSZWdpc3RlclJlcXVlc3R9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduRm9ybU9wdGlvbihwcm9wcykge1xuICAgIGxldCBjbGFzc05hbWUgPSAnZm9ybS1vcHRpb24nO1xuICAgIGNsYXNzTmFtZSArPSAocHJvcHMub3B0aW9uID09PSAwKSA/ICcgb3B0aW9uLWxlZnQnIDogJyBvcHRpb24tcmlnaHQnO1xuICAgIGlmIChwcm9wcy5zZWxlY3RlZCkgY2xhc3NOYW1lICs9ICcgc2VsZWN0ZWQtb3B0aW9uJztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cbiAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXInO1xuaW1wb3J0IEZvcm1XcmFwcGVyIGZyb20gXCIuL0Zvcm1XcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25QYWdlV3JhcHBlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPEZvcm1XcmFwcGVyPlxuICAgICAgICAgICAgPC9Gb3JtV3JhcHBlcj5cbiAgICAgICAgICAgIDxGb290ZXI+XG4gICAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IFNpZ25QYWdlV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWduL1NpZ25QYWdlV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduUGFnZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbj5cbiAgICAgICAgICAgICAgICA8U2lnblBhZ2VXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDwvU2lnblBhZ2VXcmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTaWduUGFnZUNvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9zaWduUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPFNpZ25QYWdlQ29udGFpbmVyIC8+LFxuICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=