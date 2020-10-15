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
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PasswordInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PasswordInput */ "./assets/js/react/components/PasswordInput.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





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
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/register', {
    "username": username,
    "email": email,
    "password": password,
    "password-confirm": passwordConfirm
  }).then(function (res) {
    showWarnings(res.data);

    if (res.data.success !== undefined && res.data.success) {
      //@todo redirect na login endpoint s rovnakymi datami
      //@todo redirect na pozadovanu page, pravdepodobne homepage
      alert('Registration complete! You can now login.');
      window.location.replace('/');
    }
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    action: layoutData.registerPath,
    id: "sign-form",
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "username-input",
    id: "username-label"
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    name: "username",
    id: "username-input"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "email-input",
    id: "email-label"
  }, "E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "email",
    name: "email",
    id: "email-input"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PasswordInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "password-input",
    name: "password",
    labelText: "Password",
    labelId: "password-label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PasswordInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "password-confirm-input",
    name: "password-confirm",
    labelId: "password-confirm-label",
    labelText: "Confirm password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
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

},[["./assets/js/react/pages/sign.js","runtime","vendors~create~homepage~sign","vendors~sign","create~homepage~sign"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9QYXNzd29yZElucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3NpZ24vRm9ybVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9SZWdpc3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9TaWduRm9ybU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9zaWduL1NpZ25QYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9zaWduUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvc2lnbi5qcyJdLCJuYW1lcyI6WyJQYXNzd29yZElucHV0IiwicHJvcHMiLCJzdGF0ZSIsInR5cGUiLCJpY29uQ2xhc3NOYW1lIiwiaG92ZXJUZXh0IiwibmV3VHlwZSIsIm5ld0NsYXNzTmFtZSIsIm5ld0hvdmVyVGV4dCIsInNldFN0YXRlIiwiaWQiLCJsYWJlbElkIiwibGFiZWxUZXh0IiwibmFtZSIsIm9uSGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm1XcmFwcGVyIiwib3B0aW9ucyIsImN1cnJlbnRPcHRpb24iLCJvcHRpb24iLCJmb3JtcyIsIkxvZ2luRm9ybSIsIlJlZ2lzdGVyRm9ybSIsIkN1cnJlbnRGb3JtIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlRm9ybSIsImxheW91dERhdGEiLCJsb2dpblBhdGgiLCJMQUJFTF9URVhUX1VTRVJOQU1FIiwiTEFCRUxfVEVYVF9FTUFJTCIsIkxBQkVMX1RFWFRfUEFTU1dPUkQiLCJMQUJFTF9URVhUX1BBU1NXT1JEX0NPTkZJUk0iLCJzZW5kUmVnaXN0ZXJSZXF1ZXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsInNob3dXYXJuaW5ncyIsImRhdGEiLCJzdWNjZXNzIiwidW5kZWZpbmVkIiwiYWxlcnQiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJ1c2VybmFtZUxhYmVsIiwicGFzc3dvcmRMYWJlbCIsInBhc3N3b3JkQ29uZmlybUxhYmVsIiwiZW1haWxMYWJlbCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInJlbW92ZSIsInJlZ2lzdGVyUGF0aCIsIlNpZ25Gb3JtT3B0aW9uIiwiY2xhc3NOYW1lIiwic2VsZWN0ZWQiLCJvbkNsaWNrIiwidGV4dCIsIlNpZ25QYWdlV3JhcHBlciIsIlNpZ25QYWdlQ29udGFpbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLGE7Ozs7O0FBQ2pCLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFLFVBREc7QUFFVEMsbUJBQWEsRUFBRSxVQUZOO0FBR1RDLGVBQVMsRUFBRTtBQUhGLEtBQWI7QUFIZTtBQVFsQjs7OztvQ0FFZTtBQUNaLFVBQU1DLE9BQU8sR0FBSSxLQUFLSixLQUFMLENBQVdDLElBQVgsS0FBb0IsVUFBckIsR0FBbUMsTUFBbkMsR0FBNEMsVUFBNUQ7QUFDQSxVQUFJSSxZQUFZLEdB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LHNGQUNJLDREQUFDLCtEQUFELE9BREosZUFHSSw0REFBQyx5RUFBRCxPQUhKLENBREo7QUFRSDs7OztFQWQwQ3ZELDZDQUFLLENBQUNDLFM7Ozs7Ozs7Ozs7Ozs7O0FDSnJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBdUQsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLHFFQUFELE9BREosRUFFSW5DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsY0FBaEIsQ0FBK0IsTUFBL0IsQ0FGSixFIiwiZmlsZSI6InNpZ24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIGljb25DbGFzc05hbWU6IFwiZXllLWljb25cIixcbiAgICAgICAgICAgIGhvdmVyVGV4dDogXCJTaG93IHBhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IG5ld1R5cGUgPSAodGhpcy5zdGF0ZS50eXBlID09PSBcInBhc3N3b3JkXCIpID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCIgO1xuICAgICAgICBsZXQgbmV3Q2xhc3NOYW1lID0gXCJleWUtaWNvblwiO1xuICAgICAgICBsZXQgbmV3SG92ZXJUZXh0ID0gXCJTaG93IHBhc3N3b3JkXCI7XG4gICAgICAgIGlmIChuZXdUeXBlICE9PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IFwiZXllLWljb24gaW52ZXJ0ZWRcIjtcbiAgICAgICAgICAgIG5ld0hvdmVyVGV4dCA9IFwiSGlkZSBwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHlwZTogbmV3VHlwZSxcbiAgICAgICAgICAgIGljb25DbGFzc05hbWU6IG5ld0NsYXNzTmFtZSxcbiAgICAgICAgICAgIGhvdmVyVGV4dDogbmV3SG92ZXJUZXh0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLmlkfSBpZD17dGhpcy5wcm9wcy5sYWJlbElkfT57dGhpcy5wcm9wcy5sYWJlbFRleHR9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17dGhpcy5zdGF0ZS50eXBlfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJwYXNzd29yZC1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi9pbWcvZXllLWljb24ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV5ZVwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pY29uQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkhhbmRsZUNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5ob3ZlclRleHR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWduRm9ybU9wdGlvbiBmcm9tIFwiLi9TaWduRm9ybU9wdGlvblwiO1xuaW1wb3J0IFJlZ2lzdGVyRm9ybSBmcm9tIFwiLi9SZWdpc3RlckZvcm1cIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4vTG9naW5Gb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1XcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW1xuICAgICAgICAgICAgXCJMb2dpbkZvcm1cIixcbiAgICAgICAgICAgIFwiUmVnaXN0ZXJGb3JtXCJcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb246IHRoaXMub3B0aW9uc1swXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGb3JtKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uICE9PSB0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb246IG9wdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1zID0ge1xuICAgICAgICAgICAgTG9naW5Gb3JtOiBMb2dpbkZvcm0sXG4gICAgICAgICAgICBSZWdpc3RlckZvcm06IFJlZ2lzdGVyRm9ybVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBDdXJyZW50Rm9ybSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoZm9ybXNbdGhpcy5zdGF0ZS5jdXJyZW50T3B0aW9uXSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8U2lnbkZvcm1PcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJTaWduIGluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb24gPT09IHRoaXMub3B0aW9uc1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLm9uQ2hhbmdlRm9ybSh0aGlzLm9wdGlvbnNbMF0pfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L1NpZ25Gb3JtT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8U2lnbkZvcm1PcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJSZWdpc3RlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5jdXJyZW50T3B0aW9uID09PSB0aGlzLm9wdGlvbnNbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb249ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5vbkNoYW5nZUZvcm0odGhpcy5vcHRpb25zWzFdKX19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9TaWduRm9ybU9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtDdXJyZW50Rm9ybX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSBcIi4uL1Bhc3N3b3JkSW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1kaXZcIj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17bGF5b3V0RGF0YS5sb2dpblBhdGh9IGlkPVwic2lnbi1mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0IGlkPVwicGFzc3dvcmQtaW5wdXRcIiBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbFRleHQ9XCJQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRJbnB1dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi4vUGFzc3dvcmRJbnB1dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgTEFCRUxfVEVYVF9VU0VSTkFNRSA9ICdVc2VybmFtZSc7XG5jb25zdCBMQUJFTF9URVhUX0VNQUlMID0gJ0VtYWlsJztcbmNvbnN0IExBQkVMX1RFWFRfUEFTU1dPUkQgPSAnUGFzc3dvcmQnO1xuY29uc3QgTEFCRUxfVEVYVF9QQVNTV09SRF9DT05GSVJNID0gJ0NvbmZpcm0gcGFzc3dvcmQnO1xuXG5jb25zdCBzZW5kUmVnaXN0ZXJSZXF1ZXN0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkQ29uZmlybSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtY29uZmlybS1pbnB1dCcpLnZhbHVlO1xuXG4gICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJyxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VybmFtZSxcbiAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkLFxuICAgICAgICAgICAgXCJwYXNzd29yZC1jb25maXJtXCI6IHBhc3N3b3JkQ29uZmlybVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBzaG93V2FybmluZ3MocmVzLmRhdGEpO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgIT09IHVuZGVmaW5lZCAmJiByZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgLy9AdG9kbyByZWRpcmVjdCBuYSBsb2dpbiBlbmRwb2ludCBzIHJvdm5ha3ltaSBkYXRhbWlcbiAgICAgICAgICAgICAgICAvL0B0b2RvIHJlZGlyZWN0IG5hIHBvemFkb3ZhbnUgcGFnZSwgcHJhdmRlcG9kb2JuZSBob21lcGFnZVxuICAgICAgICAgICAgICAgIGFsZXJ0KCdSZWdpc3RyYXRpb24gY29tcGxldGUhIFlvdSBjYW4gbm93IGxvZ2luLicpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufVxuXG5jb25zdCBzaG93V2FybmluZ3MgPSBkYXRhID0+IHtcbiAgICBsZXQgdXNlcm5hbWVMYWJlbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUtbGFiZWwnKTtcbiAgICBsZXQgcGFzc3dvcmRMYWJlbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtbGFiZWwnKTtcbiAgICBsZXQgcGFzc3dvcmRDb25maXJtTGFiZWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWNvbmZpcm0tbGFiZWwnKTtcbiAgICBsZXQgZW1haWxMYWJlbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwtbGFiZWwnKTtcblxuICAgIGlmIChkYXRhLnVzZXJuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdXNlcm5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG4gICAgICAgIHVzZXJuYW1lTGFiZWwuaW5uZXJIVE1MID0gZGF0YS51c2VybmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1c2VybmFtZUxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcm5pbmcnKTtcbiAgICAgICAgdXNlcm5hbWVMYWJlbC5pbm5lckhUTUwgPSBMQUJFTF9URVhUX1VTRVJOQU1FO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnBhc3N3b3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFzc3dvcmRMYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG4gICAgICAgIHBhc3N3b3JkTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5wYXNzd29yZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXNzd29yZExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcm5pbmcnKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1sYWJlbCcpLmlubmVySFRNTCA9IExBQkVMX1RFWFRfUEFTU1dPUkQ7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucGFzc3dvcmRDb25maXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICBwYXNzd29yZENvbmZpcm1MYWJlbC5pbm5lckhUTUwgPSBkYXRhLnBhc3N3b3JkQ29uZmlybTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXNzd29yZENvbmZpcm1MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybUxhYmVsLmlubmVySFRNTCA9IExBQkVMX1RFWFRfUEFTU1dPUkRfQ09ORklSTTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5lbWFpbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVtYWlsTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICBlbWFpbExhYmVsLmlubmVySFRNTCA9IGRhdGEuZW1haWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW1haWxMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIGVtYWlsTGFiZWwuaW5uZXJIVE1MID0gTEFCRUxfVEVYVF9FTUFJTDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyRm9ybSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZGl2XCI+XG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2xheW91dERhdGEucmVnaXN0ZXJQYXRofSBpZD1cInNpZ24tZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiIGlkPVwidXNlcm5hbWUtbGFiZWxcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwidXNlcm5hbWUtaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWwtaW5wdXRcIiBpZD1cImVtYWlsLWxhYmVsXCI+RS1tYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWwtaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXQgaWQ9XCJwYXNzd29yZC1pbnB1dFwiIG5hbWU9XCJwYXNzd29yZFwiIGxhYmVsVGV4dD1cIlBhc3N3b3JkXCIgbGFiZWxJZD1cInBhc3N3b3JkLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPC9QYXNzd29yZElucHV0PlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0IGlkPVwicGFzc3dvcmQtY29uZmlybS1pbnB1dFwiIG5hbWU9XCJwYXNzd29yZC1jb25maXJtXCIgbGFiZWxJZD1cInBhc3N3b3JkLWNvbmZpcm0tbGFiZWxcIiBsYWJlbFRleHQ9XCJDb25maXJtIHBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgPC9QYXNzd29yZElucHV0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIiBvbkNsaWNrPXtzZW5kUmVnaXN0ZXJSZXF1ZXN0fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkZvcm1PcHRpb24ocHJvcHMpIHtcbiAgICBsZXQgY2xhc3NOYW1lID0gJ2Zvcm0tb3B0aW9uJztcbiAgICBjbGFzc05hbWUgKz0gKHByb3BzLm9wdGlvbiA9PT0gMCkgPyAnIG9wdGlvbi1sZWZ0JyA6ICcgb3B0aW9uLXJpZ2h0JztcbiAgICBpZiAocHJvcHMuc2VsZWN0ZWQpIGNsYXNzTmFtZSArPSAnIHNlbGVjdGVkLW9wdGlvbic7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17cHJvcHMub25DbGlja30+XG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcbmltcG9ydCBGb3JtV3JhcHBlciBmcm9tIFwiLi9Gb3JtV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduUGFnZVdyYXBwZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgICAgICAgIDwvRm9ybVdyYXBwZXI+XG4gICAgICAgICAgICA8Rm9vdGVyPlxuICAgICAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBTaWduUGFnZVdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lnbi9TaWduUGFnZVdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbj5cbiAgICAgICAgICAgICAgICA8L05hdmlnYXRpb24+XG4gICAgICAgICAgICAgICAgPFNpZ25QYWdlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8L1NpZ25QYWdlV3JhcHBlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgU2lnblBhZ2VDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvc2lnblBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxTaWduUGFnZUNvbnRhaW5lciAvPixcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXSwic291cmNlUm9vdCI6IiJ9