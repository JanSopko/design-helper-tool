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
  }, LABEL_TEXT_USERNAME), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
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

},[["./assets/js/react/pages/sign.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign","vendors~sign","browse~create~createIndex~createTheme~homepage~myThemes~sign"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9QYXNzd29yZElucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3NpZ24vRm9ybVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9SZWdpc3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9TaWduRm9ybU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9zaWduL1NpZ25QYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9zaWduUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvc2lnbi5qcyJdLCJuYW1lcyI6WyJQYXNzd29yZElucHV0IiwicHJvcHMiLCJzdGF0ZSIsInR5cGUiLCJpY29uQ2xhc3NOYW1lIiwiaG92ZXJUZXh0IiwibmV3VHlwZSIsIm5ld0NsYXNzTmFtZSIsIm5ld0hvdmVyVGV4dCIsInNldFN0YXRlIiwiaWQiLCJsYWJlbElkIiwibGFiZWxUZXh0IiwibmFtZSIsIm9uSGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm1XcmFwcGVyIiwib3B0aW9ucyIsImN1cnJlbnRPcHRpb24iLCJvcHRpb24iLCJmb3JtcyIsIkxvZ2luRm9ybSIsIlJlZ2lzdGVyRm9ybSIsIkN1cnJlbnRGb3JtIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlRm9ybSIsIkxBQkVMX1RFWFRfVVNFUk5BTUUiLCJzZW5kTG9naW5SZXF1ZXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJwYXNzd29yZCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJwcm9jZXNzTG9naW4iLCJkYXRhIiwiY3JlZGVudGlhbHMiLCJ1bmRlZmluZWQiLCJzaG93V2FybmluZ3MiLCJyZWRpcmVjdFRvSW5kZXgiLCJ3YXJuaW5nIiwicGFzc3dvcmRMYWJlbCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImxvY2F0aW9uIiwicmVwbGFjZSIsImxheW91dERhdGEiLCJsb2dpblBhdGgiLCJMQUJFTF9URVhUX0VNQUlMIiwiTEFCRUxfVEVYVF9QQVNTV09SRCIsIkxBQkVMX1RFWFRfUEFTU1dPUkRfQ09ORklSTSIsInNlbmRSZWdpc3RlclJlcXVlc3QiLCJlbWFpbCIsInBhc3N3b3JkQ29uZmlybSIsInN1Y2Nlc3MiLCJhbGVydCIsInVzZXJuYW1lTGFiZWwiLCJwYXNzd29yZENvbmZpcm1MYWJlbCIsImVtYWlsTGFiZWwiLCJyZW1vdmUiLCJyZWdpc3RlclBhdGgiLCJTaWduRm9ybU9wdGlvbiIsImNsYXNzTmFtZSIsInNlbGVjdGVkIiwib25DbGljayIsInRleHQiLCJTaWduUGFnZVdyYXBwZXIiLCJTaWduUGFnZUNvbnRhaW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxhOzs7OztBQUNqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBRSxVQURHO0FBRVRDLG1CQUFhLEVBQUUsVUFGTjtBQUdUQyxlQUFTLEVBQUU7QUFIRixLQUFiO0FBSGU7QUFRbEI7Ozs7b0NBRWU7QUFDWixVQUFNQyxPQUFPLEdBQUks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QUFDQTtBQUVlLFNBQVNDLGVBQVQsR0FBMkI7QUFDdEMsc0JBQ0k7QUFBSyxNQUFFLEVBQUM7QUFBUixrQkFDSSwyREFBQyxvREFBRCxPQURKLGVBR0ksMkRBQUMsK0NBQUQsT0FISixDQURKO0FBUUgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7O0lBRXFCQyxpQjs7Ozs7QUFDakIsK0JBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVRO0FBQ0wsMEJBQ0ksc0ZBQ0ksNERBQUMsK0RBQUQsT0FESixlQUdJLDREQUFDLHlFQUFELE9BSEosQ0FESjtBQVFIOzs7O0VBZDBDNUQsNkNBQUssQ0FBQ0MsUzs7Ozs7Ozs7Ozs7Ozs7QUNKckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE0RCxnREFBUSxDQUFDQyxNQUFULGVBQ0ksMkRBQUMscUVBQUQsT0FESixFQUVJN0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxjQUFoQixDQUErQixNQUEvQixDQUZKLEUiLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgaWNvbkNsYXNzTmFtZTogXCJleWUtaWNvblwiLFxuICAgICAgICAgICAgaG92ZXJUZXh0OiBcIlNob3cgcGFzc3dvcmRcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IYW5kbGVDbGljaygpIHtcbiAgICAgICAgY29uc3QgbmV3VHlwZSA9ICh0aGlzLnN0YXRlLnR5cGUgPT09IFwicGFzc3dvcmRcIikgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIiA7XG4gICAgICAgIGxldCBuZXdDbGFzc05hbWUgPSBcImV5ZS1pY29uXCI7XG4gICAgICAgIGxldCBuZXdIb3ZlclRleHQgPSBcIlNob3cgcGFzc3dvcmRcIjtcbiAgICAgICAgaWYgKG5ld1R5cGUgIT09IFwicGFzc3dvcmRcIikge1xuICAgICAgICAgICAgbmV3Q2xhc3NOYW1lID0gXCJleWUtaWNvbiBpbnZlcnRlZFwiO1xuICAgICAgICAgICAgbmV3SG92ZXJUZXh0ID0gXCJIaWRlIHBhc3N3b3JkXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0eXBlOiBuZXdUeXBlLFxuICAgICAgICAgICAgaWNvbkNsYXNzTmFtZTogbmV3Q2xhc3NOYW1lLFxuICAgICAgICAgICAgaG92ZXJUZXh0OiBuZXdIb3ZlclRleHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3RoaXMucHJvcHMuaWR9IGlkPXt0aGlzLnByb3BzLmxhYmVsSWR9Pnt0aGlzLnByb3BzLmxhYmVsVGV4dH08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXt0aGlzLnN0YXRlLnR5cGV9IG5hbWU9e3RoaXMucHJvcHMubmFtZX0gaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT1cInBhc3N3b3JkLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuL2ltZy9leWUtaWNvbi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZXllXCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmljb25DbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uSGFuZGxlQ2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLmhvdmVyVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNpZ25Gb3JtT3B0aW9uIGZyb20gXCIuL1NpZ25Gb3JtT3B0aW9uXCI7XG5pbXBvcnQgUmVnaXN0ZXJGb3JtIGZyb20gXCIuL1JlZ2lzdGVyRm9ybVwiO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9Mb2dpbkZvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBbXG4gICAgICAgICAgICBcIkxvZ2luRm9ybVwiLFxuICAgICAgICAgICAgXCJSZWdpc3RlckZvcm1cIlxuICAgICAgICBdO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY3VycmVudE9wdGlvbjogdGhpcy5vcHRpb25zWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZUZvcm0ob3B0aW9uKSB7XG4gICAgICAgIGlmIChvcHRpb24gIT09IHRoaXMuc3RhdGUuY3VycmVudE9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudE9wdGlvbjogb3B0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZm9ybXMgPSB7XG4gICAgICAgICAgICBMb2dpbkZvcm06IExvZ2luRm9ybSxcbiAgICAgICAgICAgIFJlZ2lzdGVyRm9ybTogUmVnaXN0ZXJGb3JtXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IEN1cnJlbnRGb3JtID0gUmVhY3QuY3JlYXRlRWxlbWVudChmb3Jtc1t0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb25dKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaWduRm9ybU9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlNpZ24gaW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuY3VycmVudE9wdGlvbiA9PT0gdGhpcy5vcHRpb25zWzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3RoaXMub25DaGFuZ2VGb3JtKHRoaXMub3B0aW9uc1swXSl9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvU2lnbkZvcm1PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxTaWduRm9ybU9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIlJlZ2lzdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb24gPT09IHRoaXMub3B0aW9uc1sxXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbj17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLm9uQ2hhbmdlRm9ybSh0aGlzLm9wdGlvbnNbMV0pfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L1NpZ25Gb3JtT3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge0N1cnJlbnRGb3JtfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi4vUGFzc3dvcmRJbnB1dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgTEFCRUxfVEVYVF9VU0VSTkFNRSA9ICdVc2VybmFtZSc7XG5cbmNvbnN0IHNlbmRMb2dpblJlcXVlc3QgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB1c2VybmFtZSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtaW5wdXQnKS52YWx1ZTtcbiAgICBheGlvcy5wb3N0KCcvbG9naW4nLCB7XG4gICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWUsXG4gICAgICAgIFwicGFzc3dvcmRcIjogcGFzc3dvcmRcbiAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHByb2Nlc3NMb2dpbihyZXMuZGF0YSk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHByb2Nlc3NMb2dpbiA9IGRhdGEgPT4ge1xuICAgIGlmIChkYXRhLmNyZWRlbnRpYWxzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2hvd1dhcm5pbmdzKGRhdGEuY3JlZGVudGlhbHMpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVkaXJlY3RUb0luZGV4KCk7XG4gICAgfVxufVxuXG5jb25zdCBzaG93V2FybmluZ3MgPSB3YXJuaW5nID0+IHtcbiAgICBjb25zdCBwYXNzd29yZExhYmVsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1sYWJlbCcpO1xuICAgIHBhc3N3b3JkTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgIHBhc3N3b3JkTGFiZWwuaW5uZXJIVE1MID0gd2FybmluZztcbn1cblxuY29uc3QgcmVkaXJlY3RUb0luZGV4ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRm9ybSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZGl2XCI+XG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2xheW91dERhdGEubG9naW5QYXRofSBpZD1cInNpZ24tZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiIGlkPVwidXNlcm5hbWUtbGFiZWxcIj57TEFCRUxfVEVYVF9VU0VSTkFNRX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0IGlkPVwicGFzc3dvcmQtaW5wdXRcIiBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbFRleHQ9XCJQYXNzd29yZFwiIGxhYmVsSWQ9XCJwYXNzd29yZC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRJbnB1dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCIgb25DbGljaz17c2VuZExvZ2luUmVxdWVzdH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi4vUGFzc3dvcmRJbnB1dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgTEFCRUxfVEVYVF9VU0VSTkFNRSA9ICdVc2VybmFtZSc7XG5jb25zdCBMQUJFTF9URVhUX0VNQUlMID0gJ0VtYWlsJztcbmNvbnN0IExBQkVMX1RFWFRfUEFTU1dPUkQgPSAnUGFzc3dvcmQnO1xuY29uc3QgTEFCRUxfVEVYVF9QQVNTV09SRF9DT05GSVJNID0gJ0NvbmZpcm0gcGFzc3dvcmQnO1xuXG5jb25zdCBzZW5kUmVnaXN0ZXJSZXF1ZXN0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkQ29uZmlybSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtY29uZmlybS1pbnB1dCcpLnZhbHVlO1xuXG4gICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJyxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VybmFtZSxcbiAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkLFxuICAgICAgICAgICAgXCJwYXNzd29yZC1jb25maXJtXCI6IHBhc3N3b3JkQ29uZmlybVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBzaG93V2FybmluZ3MocmVzLmRhdGEpO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN1Y2Nlc3MgIT09IHVuZGVmaW5lZCAmJiByZXMuZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1JlZ2lzdHJhdGlvbiBjb21wbGV0ZSEnKTtcbiAgICAgICAgICAgICAgICBheGlvcy5wb3N0KCcvbG9naW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIjogdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIFwicGFzc3dvcmRcIjogcGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnLycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn1cblxuY29uc3Qgc2hvd1dhcm5pbmdzID0gZGF0YSA9PiB7XG4gICAgY29uc3QgdXNlcm5hbWVMYWJlbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcm5hbWUtbGFiZWwnKTtcbiAgICBjb25zdCBwYXNzd29yZExhYmVsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1sYWJlbCcpO1xuICAgIGNvbnN0IHBhc3N3b3JkQ29uZmlybUxhYmVsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1jb25maXJtLWxhYmVsJyk7XG4gICAgY29uc3QgZW1haWxMYWJlbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwtbGFiZWwnKTtcblxuICAgIGlmIChkYXRhLnVzZXJuYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdXNlcm5hbWVMYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG4gICAgICAgIHVzZXJuYW1lTGFiZWwuaW5uZXJIVE1MID0gZGF0YS51c2VybmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB1c2VybmFtZUxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcm5pbmcnKTtcbiAgICAgICAgdXNlcm5hbWVMYWJlbC5pbm5lckhUTUwgPSBMQUJFTF9URVhUX1VTRVJOQU1FO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnBhc3N3b3JkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFzc3dvcmRMYWJlbC5jbGFzc0xpc3QuYWRkKCd3YXJuaW5nJyk7XG4gICAgICAgIHBhc3N3b3JkTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5wYXNzd29yZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXNzd29yZExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcm5pbmcnKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1sYWJlbCcpLmlubmVySFRNTCA9IExBQkVMX1RFWFRfUEFTU1dPUkQ7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEucGFzc3dvcmRDb25maXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICBwYXNzd29yZENvbmZpcm1MYWJlbC5pbm5lckhUTUwgPSBkYXRhLnBhc3N3b3JkQ29uZmlybTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXNzd29yZENvbmZpcm1MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybUxhYmVsLmlubmVySFRNTCA9IExBQkVMX1RFWFRfUEFTU1dPUkRfQ09ORklSTTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5lbWFpbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVtYWlsTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICBlbWFpbExhYmVsLmlubmVySFRNTCA9IGRhdGEuZW1haWw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW1haWxMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIGVtYWlsTGFiZWwuaW5uZXJIVE1MID0gTEFCRUxfVEVYVF9FTUFJTDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyRm9ybSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZGl2XCI+XG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249e2xheW91dERhdGEucmVnaXN0ZXJQYXRofSBpZD1cInNpZ24tZm9ybVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiIGlkPVwidXNlcm5hbWUtbGFiZWxcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwidXNlcm5hbWUtaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWwtaW5wdXRcIiBpZD1cImVtYWlsLWxhYmVsXCI+RS1tYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWwtaW5wdXRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXQgaWQ9XCJwYXNzd29yZC1pbnB1dFwiIG5hbWU9XCJwYXNzd29yZFwiIGxhYmVsVGV4dD1cIlBhc3N3b3JkXCIgbGFiZWxJZD1cInBhc3N3b3JkLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPC9QYXNzd29yZElucHV0PlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0IGlkPVwicGFzc3dvcmQtY29uZmlybS1pbnB1dFwiIG5hbWU9XCJwYXNzd29yZC1jb25maXJtXCIgbGFiZWxJZD1cInBhc3N3b3JkLWNvbmZpcm0tbGFiZWxcIiBsYWJlbFRleHQ9XCJDb25maXJtIHBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgPC9QYXNzd29yZElucHV0PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJidXR0b24tZ3JlZW5cIiBvbkNsaWNrPXtzZW5kUmVnaXN0ZXJSZXF1ZXN0fS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkZvcm1PcHRpb24ocHJvcHMpIHtcbiAgICBsZXQgY2xhc3NOYW1lID0gJ2Zvcm0tb3B0aW9uJztcbiAgICBjbGFzc05hbWUgKz0gKHByb3BzLm9wdGlvbiA9PT0gMCkgPyAnIG9wdGlvbi1sZWZ0JyA6ICcgb3B0aW9uLXJpZ2h0JztcbiAgICBpZiAocHJvcHMuc2VsZWN0ZWQpIGNsYXNzTmFtZSArPSAnIHNlbGVjdGVkLW9wdGlvbic7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17cHJvcHMub25DbGlja30+XG4gICAgICAgICAgICB7cHJvcHMudGV4dH1cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJztcbmltcG9ydCBGb3JtV3JhcHBlciBmcm9tIFwiLi9Gb3JtV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduUGFnZVdyYXBwZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgICAgICAgIDwvRm9ybVdyYXBwZXI+XG4gICAgICAgICAgICA8Rm9vdGVyPlxuICAgICAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCBTaWduUGFnZVdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lnbi9TaWduUGFnZVdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnblBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbj5cbiAgICAgICAgICAgICAgICA8L05hdmlnYXRpb24+XG4gICAgICAgICAgICAgICAgPFNpZ25QYWdlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8L1NpZ25QYWdlV3JhcHBlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgU2lnblBhZ2VDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvc2lnblBhZ2VDb250YWluZXJcIjtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxTaWduUGFnZUNvbnRhaW5lciAvPixcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXSwic291cmNlUm9vdCI6IiJ9