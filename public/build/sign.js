(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign"],{

/***/ "./assets/js/react/components/Footer.js":
/*!**********************************************!*\
  !*** ./assets/js/react/components/Footer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
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



var Footer = /*#__PURE__*/function (_React$Component) {
  _inherits(Footer, _React$Component);

  var _super = _createSuper(Footer);

  function Footer(props) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, props);
    _this.ulStyle = {
      color: 'red'
    };
    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var githubLink = "https://github.com/JanSopko/design-helper-tool";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
        id: "footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("li", {
        key: "1",
        className: "clickable",
        onClick: function onClick() {
          return window.open(githubLink);
        }
      }, "GitHub")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("small", null, "J\xE1n Sopko, Mat\xFA\u0161 \u010Ci\u017Em\xE1r \xA92020"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);



/***/ }),

/***/ "./assets/js/react/components/Navigation.js":
/*!**************************************************!*\
  !*** ./assets/js/react/components/Navigation.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);


















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




var Navigation = /*#__PURE__*/function (_React$Component) {
  _inherits(Navigation, _React$Component);

  var _super = _createSuper(Navigation);

  function Navigation() {
    var _this;

    _classCallCheck(this, Navigation);

    _this = _super.call(this);
    _this.navbarDataUrl = '/ui-data/navbar';
    _this.state = {
      navItems: []
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_18___default.a.get(this.navbarDataUrl).then(function (res) {
        _this2.setState({
          navItems: res.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("div", {
        id: "navbar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("ul", null, this.state.navItems.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("li", {
          key: item.id,
          onClick: function onClick() {
            return window.location.href = item.link;
          }
        }, item.link === '/' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("img", {
          src: "favicon.png",
          alt: "logo",
          id: "navbar-logo"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement("a", {
          href: item.link
        }, item.name));
      })));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_17___default.a.Component);



/***/ }),

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

},[["./assets/js/react/pages/sign.js","runtime","vendors~create~homepage~sign"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9QYXNzd29yZElucHV0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL3NpZ24vRm9ybVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9SZWdpc3RlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbXBvbmVudHMvc2lnbi9TaWduRm9ybU9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9zaWduL1NpZ25QYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9zaWduUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvcGFnZXMvc2lnbi5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsInVsU3R5bGUiLCJjb2xvciIsImdpdGh1YkxpbmsiLCJ3aW5kb3ciLCJvcGVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJOYXZpZ2F0aW9uIiwibmF2YmFyRGF0YVVybCIsInN0YXRlIiwibmF2SXRlbXMiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJtYXAiLCJpdGVtIiwiaWQiLCJsb2NhdGlvbiIsImhyZWYiLCJsaW5rIiwibmFtZSIsIlBhc3N3b3JkSW5wdXQiLCJ0eXBlIiwiaWNvbkNsYXNzTmFtZSIsImhvdmVyVGV4dCIsIm5ld1R5cGUiLCJuZXdDbGFzc05hbWUiLCJuZXdIb3ZlclRleHQiLCJsYWJlbElkIiwibGFiZWxUZXh0Iiwib25IYW5kbGVDbGljayIsIkZvcm1XcmFwcGVyIiwib3B0aW9ucyIsImN1cnJlbnRPcHRpb24iLCJvcHRpb24iLCJmb3JtcyIsIkxvZ2luRm9ybSIsIlJlZ2lzdGVyRm9ybSIsIkN1cnJlbnRGb3JtIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hhbmdlRm9ybSIsImxheW91dERhdGEiLCJsb2dpblBhdGgiLCJMQUJFTF9URVhUX1VTRVJOQU1FIiwiTEFCRUxfVEVYVF9FTUFJTCIsIkxBQkVMX1RFWFRfUEFTU1dPUkQiLCJMQUJFTF9URVhUX1BBU1NXT1JEX0NPTkZJUk0iLCJzZW5kUmVnaXN0ZXJSZXF1ZXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJzaG93V2FybmluZ3MiLCJ1c2VybmFtZUxhYmVsIiwicGFzc3dvcmRMYWJlbCIsInBhc3N3b3JkQ29uZmlybUxhYmVsIiwiZW1haWxMYWJlbCIsInVuZGVmaW5lZCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsInJlbW92ZSIsInJlZ2lzdGVyUGF0aCIsIlNpZ25Gb3JtT3B0aW9uIiwiY2xhc3NOYW1lIiwic2VsZWN0ZWQiLCJvbkNsaWNrIiwidGV4dCIsIlNpZ25QYWdlV3JhcHBlciIsIlNpZ25QYWdlQ29udGFpbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLE07Ozs7O0FBQ2pCLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1B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ZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMudWxTdHlsZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBnaXRodWJMaW5rID0gXCJodHRwczovL2dpdGh1Yi5jb20vSmFuU29wa28vZGVzaWduLWhlbHBlci10b29sXCI7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PVwiMVwiIGNsYXNzTmFtZT1cImNsaWNrYWJsZVwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKGdpdGh1YkxpbmspfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdpdEh1YlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHNtYWxsPkrDoW4gU29wa28sIE1hdMO6xaEgxIxpxb5tw6FyIMKpMjAyMDwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLm5hdmJhckRhdGFVcmwgPSAnL3VpLWRhdGEvbmF2YmFyJztcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hdkl0ZW1zOiBbXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF4aW9zLmdldCh0aGlzLm5hdmJhckRhdGFVcmwpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG5hdkl0ZW1zOiByZXMuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5uYXZJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBpdGVtLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5saW5rID09PSAnLycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJmYXZpY29uLnBuZ1wiIGFsdD1cImxvZ29cIiBpZD1cIm5hdmJhci1sb2dvXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ubGlua30+e2l0ZW0ubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIGljb25DbGFzc05hbWU6IFwiZXllLWljb25cIixcbiAgICAgICAgICAgIGhvdmVyVGV4dDogXCJTaG93IHBhc3N3b3JkXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IG5ld1R5cGUgPSAodGhpcy5zdGF0ZS50eXBlID09PSBcInBhc3N3b3JkXCIpID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCIgO1xuICAgICAgICBsZXQgbmV3Q2xhc3NOYW1lID0gXCJleWUtaWNvblwiO1xuICAgICAgICBsZXQgbmV3SG92ZXJUZXh0ID0gXCJTaG93IHBhc3N3b3JkXCI7XG4gICAgICAgIGlmIChuZXdUeXBlICE9PSBcInBhc3N3b3JkXCIpIHtcbiAgICAgICAgICAgIG5ld0NsYXNzTmFtZSA9IFwiZXllLWljb24gaW52ZXJ0ZWRcIjtcbiAgICAgICAgICAgIG5ld0hvdmVyVGV4dCA9IFwiSGlkZSBwYXNzd29yZFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHlwZTogbmV3VHlwZSxcbiAgICAgICAgICAgIGljb25DbGFzc05hbWU6IG5ld0NsYXNzTmFtZSxcbiAgICAgICAgICAgIGhvdmVyVGV4dDogbmV3SG92ZXJUZXh0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXt0aGlzLnByb3BzLmlkfSBpZD17dGhpcy5wcm9wcy5sYWJlbElkfT57dGhpcy5wcm9wcy5sYWJlbFRleHR9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT17dGhpcy5zdGF0ZS50eXBlfSBuYW1lPXt0aGlzLnByb3BzLm5hbWV9IGlkPXt0aGlzLnByb3BzLmlkfSBjbGFzc05hbWU9XCJwYXNzd29yZC1pbnB1dFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi9pbWcvZXllLWljb24ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImV5ZVwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5pY29uQ2xhc3NOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkhhbmRsZUNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5ob3ZlclRleHR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaWduRm9ybU9wdGlvbiBmcm9tIFwiLi9TaWduRm9ybU9wdGlvblwiO1xuaW1wb3J0IFJlZ2lzdGVyRm9ybSBmcm9tIFwiLi9SZWdpc3RlckZvcm1cIjtcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSBcIi4vTG9naW5Gb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1XcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gW1xuICAgICAgICAgICAgXCJMb2dpbkZvcm1cIixcbiAgICAgICAgICAgIFwiUmVnaXN0ZXJGb3JtXCJcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb246IHRoaXMub3B0aW9uc1swXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGb3JtKG9wdGlvbikge1xuICAgICAgICBpZiAob3B0aW9uICE9PSB0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb246IG9wdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1zID0ge1xuICAgICAgICAgICAgTG9naW5Gb3JtOiBMb2dpbkZvcm0sXG4gICAgICAgICAgICBSZWdpc3RlckZvcm06IFJlZ2lzdGVyRm9ybVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBDdXJyZW50Rm9ybSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoZm9ybXNbdGhpcy5zdGF0ZS5jdXJyZW50T3B0aW9uXSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8U2lnbkZvcm1PcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJTaWduIGluXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLmN1cnJlbnRPcHRpb24gPT09IHRoaXMub3B0aW9uc1swXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt0aGlzLm9uQ2hhbmdlRm9ybSh0aGlzLm9wdGlvbnNbMF0pfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L1NpZ25Gb3JtT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8U2lnbkZvcm1PcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJSZWdpc3RlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5zdGF0ZS5jdXJyZW50T3B0aW9uID09PSB0aGlzLm9wdGlvbnNbMV19XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb249ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7dGhpcy5vbkNoYW5nZUZvcm0odGhpcy5vcHRpb25zWzFdKX19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9TaWduRm9ybU9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtDdXJyZW50Rm9ybX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSBcIi4uL1Bhc3N3b3JkSW5wdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1kaXZcIj5cbiAgICAgICAgICAgIDxmb3JtIGFjdGlvbj17bGF5b3V0RGF0YS5sb2dpblBhdGh9IGlkPVwic2lnbi1mb3JtXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0IGlkPVwicGFzc3dvcmQtaW5wdXRcIiBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbFRleHQ9XCJQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRJbnB1dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi4vUGFzc3dvcmRJbnB1dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgTEFCRUxfVEVYVF9VU0VSTkFNRSA9ICdVc2VybmFtZSc7XG5jb25zdCBMQUJFTF9URVhUX0VNQUlMID0gJ0VtYWlsJztcbmNvbnN0IExBQkVMX1RFWFRfUEFTU1dPUkQgPSAnUGFzc3dvcmQnO1xuY29uc3QgTEFCRUxfVEVYVF9QQVNTV09SRF9DT05GSVJNID0gJ0NvbmZpcm0gcGFzc3dvcmQnO1xuXG5jb25zdCBzZW5kUmVnaXN0ZXJSZXF1ZXN0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGVtYWlsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkQ29uZmlybSA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtY29uZmlybS1pbnB1dCcpLnZhbHVlO1xuXG4gICAgYXhpb3MucG9zdCgnL3JlZ2lzdGVyJyxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB1c2VybmFtZSxcbiAgICAgICAgICAgIFwiZW1haWxcIjogZW1haWwsXG4gICAgICAgICAgICBcInBhc3N3b3JkXCI6IHBhc3N3b3JkLFxuICAgICAgICAgICAgXCJwYXNzd29yZC1jb25maXJtXCI6IHBhc3N3b3JkQ29uZmlybVxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgICAgICBzaG93V2FybmluZ3MocmVzLmRhdGEpO1xuICAgICAgICB9KTtcbn1cblxuY29uc3Qgc2hvd1dhcm5pbmdzID0gZGF0YSA9PiB7XG4gICAgbGV0IHVzZXJuYW1lTGFiZWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lLWxhYmVsJyk7XG4gICAgbGV0IHBhc3N3b3JkTGFiZWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWxhYmVsJyk7XG4gICAgbGV0IHBhc3N3b3JkQ29uZmlybUxhYmVsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1jb25maXJtLWxhYmVsJyk7XG4gICAgbGV0IGVtYWlsTGFiZWwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWxhYmVsJyk7XG5cbiAgICBpZiAoZGF0YS51c2VybmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHVzZXJuYW1lTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICB1c2VybmFtZUxhYmVsLmlubmVySFRNTCA9IGRhdGEudXNlcm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdXNlcm5hbWVMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIHVzZXJuYW1lTGFiZWwuaW5uZXJIVE1MID0gTEFCRUxfVEVYVF9VU0VSTkFNRTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5wYXNzd29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhc3N3b3JkTGFiZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZycpO1xuICAgICAgICBwYXNzd29yZExhYmVsLmlubmVySFRNTCA9IGRhdGEucGFzc3dvcmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFzc3dvcmRMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCd3YXJuaW5nJyk7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtbGFiZWwnKS5pbm5lckhUTUwgPSBMQUJFTF9URVhUX1BBU1NXT1JEO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnBhc3N3b3JkQ29uZmlybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhc3N3b3JkQ29uZmlybUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtTGFiZWwuaW5uZXJIVE1MID0gZGF0YS5wYXNzd29yZENvbmZpcm07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFzc3dvcmRDb25maXJtTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2FybmluZycpO1xuICAgICAgICBwYXNzd29yZENvbmZpcm1MYWJlbC5pbm5lckhUTUwgPSBMQUJFTF9URVhUX1BBU1NXT1JEX0NPTkZJUk07XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuZW1haWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbWFpbExhYmVsLmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmcnKTtcbiAgICAgICAgZW1haWxMYWJlbC5pbm5lckhUTUwgPSBkYXRhLmVtYWlsO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVtYWlsTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2FybmluZycpO1xuICAgICAgICBlbWFpbExhYmVsLmlubmVySFRNTCA9IExBQkVMX1RFWFRfRU1BSUw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlckZvcm0oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWRpdlwiPlxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPXtsYXlvdXREYXRhLnJlZ2lzdGVyUGF0aH0gaWQ9XCJzaWduLWZvcm1cIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWUtaW5wdXRcIiBpZD1cInVzZXJuYW1lLWxhYmVsXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cInVzZXJuYW1lLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWlucHV0XCIgaWQ9XCJlbWFpbC1sYWJlbFwiPkUtbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsLWlucHV0XCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQYXNzd29yZElucHV0IGlkPVwicGFzc3dvcmQtaW5wdXRcIiBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbFRleHQ9XCJQYXNzd29yZFwiIGxhYmVsSWQ9XCJwYXNzd29yZC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRJbnB1dD5cbiAgICAgICAgICAgICAgICA8UGFzc3dvcmRJbnB1dCBpZD1cInBhc3N3b3JkLWNvbmZpcm0taW5wdXRcIiBuYW1lPVwicGFzc3dvcmQtY29uZmlybVwiIGxhYmVsSWQ9XCJwYXNzd29yZC1jb25maXJtLWxhYmVsXCIgbGFiZWxUZXh0PVwiQ29uZmlybSBwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRJbnB1dD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlZ2lzdGVyXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWdyZWVuXCIgb25DbGljaz17c2VuZFJlZ2lzdGVyUmVxdWVzdH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25Gb3JtT3B0aW9uKHByb3BzKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9ICdmb3JtLW9wdGlvbic7XG4gICAgY2xhc3NOYW1lICs9IChwcm9wcy5vcHRpb24gPT09IDApID8gJyBvcHRpb24tbGVmdCcgOiAnIG9wdGlvbi1yaWdodCc7XG4gICAgaWYgKHByb3BzLnNlbGVjdGVkKSBjbGFzc05hbWUgKz0gJyBzZWxlY3RlZC1vcHRpb24nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxuICAgICAgICAgICAge3Byb3BzLnRleHR9XG4gICAgICAgIDwvc3Bhbj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3Rlcic7XG5pbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSBcIi4vRm9ybVdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblBhZ2VXcmFwcGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8Rm9ybVdyYXBwZXI+XG4gICAgICAgICAgICA8L0Zvcm1XcmFwcGVyPlxuICAgICAgICAgICAgPEZvb3Rlcj5cbiAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgU2lnblBhZ2VXcmFwcGVyIGZyb20gXCIuLi9jb21wb25lbnRzL3NpZ24vU2lnblBhZ2VXcmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25QYWdlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24+XG4gICAgICAgICAgICAgICAgPC9OYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIDxTaWduUGFnZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPC9TaWduUGFnZVdyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFNpZ25QYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL3NpZ25QYWdlQ29udGFpbmVyXCI7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8U2lnblBhZ2VDb250YWluZXIgLz4sXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==