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

var sendLoginRequest = function sendLoginRequest(e) {
  e.preventDefault();
  var username = window.document.getElementById('username-input').value;
  var password = window.document.getElementById('password-input').value;
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/login', {
    "username": username,
    "password": password
  }).then(function (res) {
    processLogin(res.data);
  });
};

var processLogin = function processLogin(data) {
  if (data.credentials !== undefined) {
    showWarnings(data.credentials);
  } else {
    redirectToIndex();
  }
};

var showWarnings = function showWarnings(warning) {
  var passwordLabel = window.document.getElementById('password-label');
  passwordLabel.classList.add('warning');
  passwordLabel.innerHTML = warning;
};

var redirectToIndex = function redirectToIndex() {
  window.location.replace('/');
};

function LoginForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    action: layoutData.loginPath,
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PasswordInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "password-input",
    name: "password",
    labelText: "Password",
    labelId: "password-label"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "form-grouping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "submit",
    value: "Login",
    className: "button-green",
    onClick: sendLoginRequest
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
      alert('Registration complete!');
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/login', {
        "username": username,
        "password": password
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9QYXNzd29yZElucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3NpZ24vRm9ybVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9SZWdpc3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9TaWduRm9ybU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9zaWduL1NpZ25QYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9zaWduUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvc2lnbi5qcyJdLCJuYW1lcyI6WyJQYXNzd29yZElucHV0IiwicHJvcHMiLCJzdGF0ZSIsInR5cGUiLCJpY29uQ2xhc3NOYW1lIiwiaG92ZXJUZXh0IiwibmV3VHlwZSIsIm5ld0NsYXNzTmFtZSIsIm5ld0hvdmVyVGV4dCIsInNldFN0YXRlIiwiaWQiLCJsYWJlbElkIiwibGFiZWxUZXh0IiwibmFtZSIsIm9uSGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm1XcmFwcGVyIiwib3B0aW9ucyIsImN1cnJlbnRPcHRpb24iLCJvcHRpb24iLCJmb3JtcyIsIkxvZ2luRm9ybSIsIlJlZ2lzdGVyRm9ybSIsIkN1cnJlbnRGb3JtIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlRm9ybSIsIkxBQkVMX1RFWFRfVVNFUk5BTUUiLCJzZW5kTG9naW5SZXF1ZXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJwYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJwcm9jZXNzTG9naW4iLCJkYXRhIiwiY3JlZGVudGlhbHMiLCJ1bmRlZmluZWQiLCJzaG93V2FybmluZ3MiLCJyZWRpcmVjdFRvSW5kZXgiLCJ3YXJuaW5nIiwicGFzc3dvcmRMYWJlbCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImxvY2F0aW9uIiwicmVwbGFjZSIsImxheW91dERhdGEiLCJsb2dpblBhdGgiLCJMQUJFTF9URVhUX0VNQUlMIiwiTEFCRUxfVEVYVF9QQVNTV09SRCIsIkxBQkVMX1RFWFRfUEFTU1dPUkRfQ09ORklSTSIsInNlbmRSZWdpc3RlclJlcXVlc3QiLCJlbWFpbCIsInBhc3N3b3JkQ29uZmlybSIsInN1Y2Nlc3MiLCJhbGVydCIsInVzZXJuYW1lTGFiZWwiLCJwYXNzd29yZENvbmZpcm1MYWJlbCIsImVtYWlsTGFiZWwiLCJyZW1vdmUiLCJyZWdpc3RlclBhdGgiLCJTaWduRm9ybU9wdGlvbiIsImNsYXNzTmFtZSIsInNlbGVjdGVkIiwib25DbGljayIsInRleHQiLCJTaWduUGFnZVdyYXBwZXIiLCJTaWduUGFnZUNvbnRhaW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxhOzs7OztBQUNqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxVQURHO0FBRVRDLG1CQUFhLEVBQUUsVUFGTjtBQUdUQyxlQUFTLEVBQUU7QUFIRixLQUFiO0FBSGU7QUFRbEI7Ozs7b0NBRWU7QUFDWixVQUFNQyxPQUFPLEdBQUks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U0MsZUFBVCxHQUEyQjtBQUN0QyxzQkFDSTtBQUFLLE1BQUUsRUFBQztBQUFSLGtCQUNJLDJEQUFDLG9EQUFELE9BREosZUFHSSwyREFBQywrQ0FBRCxPQUhKLENBREo7QUFRSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JEO0FBQ0E7QUFDQTs7SUFFcUJDLGlCOzs7OztBQUNqQiwrQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7NkJBRVE7QUFDTCwwQkFDSSxzRkFDSSw0REFBQywrREFBRCxPQURKLGVBR0ksNERBQUMseUVBQUQsT0FISixDQURKO0FBUUg7Ozs7RUFkMEM1RCw2Q0FBSyxDQUFDQyxTOzs7Ozs7Ozs7Ozs7OztBQ0pyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTRELGdEQUFRLENBQUNDLE1BQVQsZUFDSSwyREFBQyxxRUFBRCxPQURKLEVBRUk3QyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLE1BQS9CLENBRkosRSIsImZpbGUiOiJzaWduLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICBpY29uQ2xhc3NOYW1lOiBcImV5ZS1pY29uXCIsXG4gICAgICAgICAgICBob3ZlclRleHQ6IFwiU2hvdyBwYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhhbmRsZUNsaWNrKCkge1xuICAgICAgICBjb25zdCBuZXdUeXBlID0gKHRoaXMuc3RhdGUudHlwZSA9PT0gXCJwYXNzd29yZFwiKSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiIDtcbiAgICAgICAgbGV0IG5ld0NsYXNzTmFtZSA9IFwiZXllLWljb25cIjtcbiAgICAgICAgbGV0IG5ld0hvdmVyVGV4dCA9IFwiU2hvdyBwYXNzd29yZFwiO1xuICAgICAgICBpZiAobmV3VHlwZSAhPT0gXCJwYXNzd29yZFwiKSB7XG4gICAgICAgICAgICBuZXdDbGFzc05hbWUgPSBcImV5ZS1pY29uIGludmVydGVkXCI7XG4gICAgICAgICAgICBuZXdIb3ZlclRleHQgPSBcIkhpZGUgcGFzc3dvcmRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHR5cGU6IG5ld1R5cGUsXG4gICAgICAgICAgICBpY29uQ2xhc3NOYW1lOiBuZXdDbGFzc05hbWUsXG4gICAgICAgICAgICBob3ZlclRleHQ6IG5ld0hvdmVyVGV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17dGhpcy5wcm9wcy5pZH0gaWQ9e3RoaXMucHJvcHMubGFiZWxJZH0+e3RoaXMucHJvcHMubGFiZWxUZXh0fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e3RoaXMuc3RhdGUudHlwZX0gbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBpZD17dGhpcy5wcm9wcy5pZH0gY2xhc3NOYW1lPVwicGFzc3dvcmQtaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4vaW1nL2V5ZS1pY29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJleWVcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuaWNvbkNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25IYW5kbGVDbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUuaG92ZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2lnbkZvcm1PcHRpb24gZnJvbSBcIi4vU2lnbkZvcm1PcHRpb25cIjtcbmltcG9ydCBSZWdpc3RlckZvcm0gZnJvbSBcIi4vUmVnaXN0ZXJGb3JtXCI7XG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuL0xvZ2luRm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFtcbiAgICAgICAgICAgIFwiTG9naW5Gb3JtXCIsXG4gICAgICAgICAgICBcIlJlZ2lzdGVyRm9ybVwiXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uOiB0aGlzLm9wdGlvbnNbMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlRm9ybShvcHRpb24pIHtcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gdGhpcy5zdGF0ZS5jdXJyZW50T3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uOiBvcHRpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBmb3JtcyA9IHtcbiAgICAgICAgICAgIExvZ2luRm9ybTogTG9naW5Gb3JtLFxuICAgICAgICAgICAgUmVnaXN0ZXJGb3JtOiBSZWdpc3RlckZvcm1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgQ3VycmVudEZvcm0gPSBSZWFjdC5jcmVhdGVFbGVtZW50KGZvcm1zW3RoaXMuc3RhdGUuY3VycmVudE9wdGlvbl0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZ25Gb3JtT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiU2lnbiBpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5jdXJyZW50T3B0aW9uID09PSB0aGlzLm9wdGlvbnNbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb249ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5vbkNoYW5nZUZvcm0odGhpcy5vcHRpb25zWzBdKX19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9TaWduRm9ybU9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZ25Gb3JtT3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiUmVnaXN0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuY3VycmVudE9wdGlvbiA9PT0gdGhpcy5vcHRpb25zWzFdfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uPXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMub25DaGFuZ2VGb3JtKHRoaXMub3B0aW9uc1sxXSl9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvU2lnbkZvcm1PcHRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7Q3VycmVudEZvcm19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuLi9QYXNzd29yZElucHV0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBMQUJFTF9URVhUX1VTRVJOQU1FID0gJ1VzZXJuYW1lJztcblxuY29uc3Qgc2VuZExvZ2luUmVxdWVzdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHVzZXJuYW1lID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1pbnB1dCcpLnZhbHVlO1xuICAgIGF4aW9zLnBvc3QoJy9sb2dpbicsIHtcbiAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VybmFtZSxcbiAgICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZFxuICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgcHJvY2Vzc0xvZ2luKHJlcy5kYXRhKTtcbiAgICB9KTtcbn1cblxuY29uc3QgcHJvY2Vzc0xvZ2luID0gZGF0YSA9PiB7XG4gICAgaWYgKGRhdGEuY3JlZGVudGlhbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzaG93V2FybmluZ3MoZGF0YS5jcmVkZW50aWFscylcbiAgICB9IGVsc2Uge1xuICAgICAgICByZWRpcmVjdFRvSW5kZXgoKTtcbiAgICB9XG59XG5cbmNvbnN0IHNob3dXYXJuaW5ncyA9IHdhcm5pbmcgPT4ge1xuICAgIGNvbnN0IHBhc3N3b3JkTGFiZWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWxhYmVsJyk7XG4gICAgcGFzc3dvcmRMYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG4gICAgcGFzc3dvcmRMYWJlbC5pbm5lckhUTUwgPSB3YXJuaW5nO1xufVxuXG5jb25zdCByZWRpcmVjdFRvSW5kZXggPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy8nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1kaXZcIj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17bGF5b3V0RGF0YS5sb2dpblBhdGh9IGlkPVwic2lnbi1mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCIgaWQ9XCJ1c2VybmFtZS1sYWJlbFwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJ1c2VybmFtZS1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRJbnB1dCBpZD1cInBhc3N3b3JkLWlucHV0XCIgbmFtZT1cInBhc3N3b3JkXCIgbGFiZWxUZXh0PVwiUGFzc3dvcmRcIiBsYWJlbElkPVwicGFzc3dvcmQtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8L1Bhc3N3b3JkSW5wdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIGNsYXNzTmFtZT1cImJ1dHRvbi1ncmVlblwiIG9uQ2xpY2s9e3NlbmRMb2dpblJlcXVlc3R9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSBcIi4uL1Bhc3N3b3JkSW5wdXRcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IExBQkVMX1RFWFRfVVNFUk5BTUUgPSAnVXNlcm5hbWUnO1xuY29uc3QgTEFCRUxfVEVYVF9FTUFJTCA9ICdFbWFpbCc7XG5jb25zdCBMQUJFTF9URVhUX1BBU1NXT1JEID0gJ1Bhc3N3b3JkJztcbmNvbnN0IExBQkVMX1RFWFRfUEFTU1dPUkRfQ09ORklSTSA9ICdDb25maXJtIHBhc3N3b3JkJztcblxuY29uc3Qgc2VuZFJlZ2lzdGVyUmVxdWVzdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VybmFtZSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBlbWFpbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZENvbmZpcm0gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWNvbmZpcm0taW5wdXQnKS52YWx1ZTtcblxuICAgIGF4aW9zLnBvc3QoJy9yZWdpc3RlcicsXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWUsXG4gICAgICAgICAgICBcImVtYWlsXCI6IGVtYWlsLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiBwYXNzd29yZCxcbiAgICAgICAgICAgIFwicGFzc3dvcmQtY29uZmlybVwiOiBwYXNzd29yZENvbmZpcm1cbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgc2hvd1dhcm5pbmdzKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdWNjZXNzICE9PSB1bmRlZmluZWQgJiYgcmVzLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdSZWdpc3RyYXRpb24gY29tcGxldGUhJyk7XG4gICAgICAgICAgICAgICAgYXhpb3MucG9zdCgnL2xvZ2luJywge1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmNvbnN0IHNob3dXYXJuaW5ncyA9IGRhdGEgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lTGFiZWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lLWxhYmVsJyk7XG4gICAgY29uc3QgcGFzc3dvcmRMYWJlbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtbGFiZWwnKTtcbiAgICBjb25zdCBwYXNzd29yZENvbmZpcm1MYWJlbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtY29uZmlybS1sYWJlbCcpO1xuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWxhYmVsJyk7XG5cbiAgICBpZiAoZGF0YS51c2VybmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHVzZXJuYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICB1c2VybmFtZUxhYmVsLmlubmVySFRNTCA9IGRhdGEudXNlcm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXNlcm5hbWVMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIHVzZXJuYW1lTGFiZWwuaW5uZXJIVE1MID0gTEFCRUxfVEVYVF9VU0VSTkFNRTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5wYXNzd29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhc3N3b3JkTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICBwYXNzd29yZExhYmVsLmlubmVySFRNTCA9IGRhdGEucGFzc3dvcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFzc3dvcmRMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtbGFiZWwnKS5pbm5lckhUTUwgPSBMQUJFTF9URVhUX1BBU1NXT1JEO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnBhc3N3b3JkQ29uZmlybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5wYXNzd29yZENvbmZpcm07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2FybmluZycpO1xuICAgICAgICBwYXNzd29yZENvbmZpcm1MYWJlbC5pbm5lckhUTUwgPSBMQUJFTF9URVhUX1BBU1NXT1JEX0NPTkZJUk07XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbWFpbExhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcbiAgICAgICAgZW1haWxMYWJlbC5pbm5lckhUTUwgPSBkYXRhLmVtYWlsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVtYWlsTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2FybmluZycpO1xuICAgICAgICBlbWFpbExhYmVsLmlubmVySFRNTCA9IExBQkVMX1RFWFRfRU1BSUw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlckZvcm0oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWRpdlwiPlxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXtsYXlvdXREYXRhLnJlZ2lzdGVyUGF0aH0gaWQ9XCJzaWduLWZvcm1cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWUtaW5wdXRcIiBpZD1cInVzZXJuYW1lLWxhYmVsXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWlucHV0XCIgaWQ9XCJlbWFpbC1sYWJlbFwiPkUtbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0IGlkPVwicGFzc3dvcmQtaW5wdXRcIiBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbFRleHQ9XCJQYXNzd29yZFwiIGxhYmVsSWQ9XCJwYXNzd29yZC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRJbnB1dD5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRJbnB1dCBpZD1cInBhc3N3b3JkLWNvbmZpcm0taW5wdXRcIiBuYW1lPVwicGFzc3dvcmQtY29uZmlybVwiIGxhYmVsSWQ9XCJwYXNzd29yZC1jb25maXJtLWxhYmVsXCIgbGFiZWxUZXh0PVwiQ29uZmlybSBwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRJbnB1dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCIgb25DbGljaz17c2VuZFJlZ2lzdGVyUmVxdWVzdH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25Gb3JtT3B0aW9uKHByb3BzKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICdmb3JtLW9wdGlvbic7XG4gICAgY2xhc3NOYW1lICs9IChwcm9wcy5vcHRpb24gPT09IDApID8gJyBvcHRpb24tbGVmdCcgOiAnIG9wdGlvbi1yaWdodCc7XG4gICAgaWYgKHByb3BzLnNlbGVjdGVkKSBjbGFzc05hbWUgKz0gJyBzZWxlY3RlZC1vcHRpb24nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAge3Byb3BzLnRleHR9XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XG5pbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSBcIi4vRm9ybVdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblBhZ2VXcmFwcGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8Rm9ybVdyYXBwZXI+XG4gICAgICAgICAgICA8L0Zvcm1XcmFwcGVyPlxuICAgICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lnblBhZ2VXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZ24vU2lnblBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25QYWdlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24+XG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIDxTaWduUGFnZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9TaWduUGFnZVdyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNpZ25QYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL3NpZ25QYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8U2lnblBhZ2VDb250YWluZXIgLz4sXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==