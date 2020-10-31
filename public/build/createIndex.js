(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["createIndex"],{

/***/ "./assets/js/react/components/create/CreateIndexPageWrapper.js":
/*!*********************************************************************!*\
  !*** ./assets/js/react/components/create/CreateIndexPageWrapper.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _cards_CardsWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/CardsWrapper */ "./assets/js/react/components/create/cards/CardsWrapper.js");




var CreateIndexPageWrapper = function CreateIndexPageWrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cards_CardsWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateIndexPageWrapper);

/***/ }),

/***/ "./assets/js/react/components/create/cards/CardsWrapper.js":
/*!*****************************************************************!*\
  !*** ./assets/js/react/components/create/cards/CardsWrapper.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CreateNewThemeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateNewThemeCard */ "./assets/js/react/components/create/cards/CreateNewThemeCard.js");
/* harmony import */ var _ContinueOnExistingThemesCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContinueOnExistingThemesCard */ "./assets/js/react/components/create/cards/ContinueOnExistingThemesCard.js");




var CardsWrapper = function CardsWrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "cards-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateNewThemeCard__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContinueOnExistingThemesCard__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (CardsWrapper);

/***/ }),

/***/ "./assets/js/react/components/create/cards/ContinueOnExistingThemesCard.js":
/*!*********************************************************************************!*\
  !*** ./assets/js/react/components/create/cards/ContinueOnExistingThemesCard.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ContinueOnExistingThemesCard = function ContinueOnExistingThemesCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "create-card",
    onClick: function onClick() {
      return window.location.href = '/my_themes';
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "create-card-header"
  }, "Continue designing your existing Themes!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "create-card-content continue-existing"
  }, "->"));
};

/* harmony default export */ __webpack_exports__["default"] = (ContinueOnExistingThemesCard);

/***/ }),

/***/ "./assets/js/react/components/create/cards/CreateNewThemeCard.js":
/*!***********************************************************************!*\
  !*** ./assets/js/react/components/create/cards/CreateNewThemeCard.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var CreateNewThemeCard = function CreateNewThemeCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "create-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "create-card-header"
  }, "Create a new Theme!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "create-card-content create-new"
  }, "+"));
};

/* harmony default export */ __webpack_exports__["default"] = (CreateNewThemeCard);

/***/ }),

/***/ "./assets/js/react/containers/createIndexPageContainer.js":
/*!****************************************************************!*\
  !*** ./assets/js/react/containers/createIndexPageContainer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateIndexPageContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ "./assets/js/react/components/Navigation.js");
/* harmony import */ var _components_create_CreateIndexPageWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/create/CreateIndexPageWrapper */ "./assets/js/react/components/create/CreateIndexPageWrapper.js");



function CreateIndexPageContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_create_CreateIndexPageWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./assets/js/react/pages/createIndex.js":
/*!**********************************************!*\
  !*** ./assets/js/react/pages/createIndex.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_createIndexPageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/createIndexPageContainer */ "./assets/js/react/containers/createIndexPageContainer.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_createIndexPageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('root'));

/***/ })

},[["./assets/js/react/pages/createIndex.js","runtime","vendors~browse~create~createIndex~homepage~myThemes~sign","browse~create~createIndex~homepage~myThemes~sign"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlSW5kZXhQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvY2FyZHMvQ2FyZHNXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9jYXJkcy9Db250aW51ZU9uRXhpc3RpbmdUaGVtZXNDYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9jYXJkcy9DcmVhdGVOZXdUaGVtZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvY3JlYXRlSW5kZXhQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9wYWdlcy9jcmVhdGVJbmRleC5qcyJdLCJuYW1lcyI6WyJDcmVhdGVJbmRleFBhZ2VXcmFwcGVyIiwiQ2FyZHNXcmFwcGVyIiwiQ29udGludWVPbkV4aXN0aW5nVGhlbWVzQ2FyZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkNyZWF0ZU5ld1RoZW1lQ2FyZCIsIkNyZWF0ZUluZGV4UGFnZUNvbnRhaW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ2pDLHNCQUNJO0FBQUssTUFBRSxFQUFDO0FBQVIsa0JBQ0ksMkRBQUMsMkRBQUQsT0FESixlQUVJLDJEQUFDLCtDQUFELE9BRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VBLHFGQUFmLEU7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixzQkFDSTtBQUFLLE1BQUUsRUFBQztBQUFSLGtCQUNJLDJEQUFDLDJEQUFELE9BREosZUFFSSwyREFBQyxxRUFBRCxPQUZKLENBREo7QUFNSCxDQVBEOztBQVNlQSwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxJQUFNQyw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLEdBQU07QUFDdkMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUE2QixXQUFPLEVBQUU7QUFBQSxhQUFNQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLFlBQTdCO0FBQUE7QUFBdEMsa0JBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxnREFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsVUFGSixDQURKO0FBTUgsQ0FQRDs7QUFTZUgsMkZBQWYsRTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCwyQkFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsU0FGSixDQURKO0FBTUgsQ0FQRDs7QUFTZUEsaUZBQWYsRTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0Msd0JBQVQsR0FBb0M7QUFDL0Msc0JBQ0kscUZBQ0ksMkRBQUMsOERBQUQsT0FESixlQUVJLDJEQUFDLGlGQUFELE9BRkosQ0FESjtBQU1ILEM7Ozs7Ozs7Ozs7OztBQ1hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBQyxnREFBUSxDQUFDQyxNQUFULGVBQ0ksMkRBQUMsNEVBQUQsT0FESixFQUVJQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSixFIiwiZmlsZSI6ImNyZWF0ZUluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IENhcmRzV3JhcHBlciBmcm9tIFwiLi9jYXJkcy9DYXJkc1dyYXBwZXJcIjtcblxuY29uc3QgQ3JlYXRlSW5kZXhQYWdlV3JhcHBlciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8Q2FyZHNXcmFwcGVyLz5cbiAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVJbmRleFBhZ2VXcmFwcGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3JlYXRlTmV3VGhlbWVDYXJkIGZyb20gXCIuL0NyZWF0ZU5ld1RoZW1lQ2FyZFwiO1xuaW1wb3J0IENvbnRpbnVlT25FeGlzdGluZ1RoZW1lc0NhcmQgZnJvbSBcIi4vQ29udGludWVPbkV4aXN0aW5nVGhlbWVzQ2FyZFwiO1xuXG5cbmNvbnN0IENhcmRzV3JhcHBlciA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgaWQ9XCJjYXJkcy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8Q3JlYXRlTmV3VGhlbWVDYXJkLz5cbiAgICAgICAgICAgIDxDb250aW51ZU9uRXhpc3RpbmdUaGVtZXNDYXJkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZHNXcmFwcGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbnRpbnVlT25FeGlzdGluZ1RoZW1lc0NhcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1jYXJkXCIgb25DbGljaz17KCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL215X3RoZW1lcycgfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjcmVhdGUtY2FyZC1oZWFkZXJcIj5Db250aW51ZSBkZXNpZ25pbmcgeW91ciBleGlzdGluZyBUaGVtZXMhPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWNhcmQtY29udGVudCBjb250aW51ZS1leGlzdGluZ1wiPi0+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRpbnVlT25FeGlzdGluZ1RoZW1lc0NhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ3JlYXRlTmV3VGhlbWVDYXJkID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtY2FyZFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNyZWF0ZS1jYXJkLWhlYWRlclwiPkNyZWF0ZSBhIG5ldyBUaGVtZSE8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtY2FyZC1jb250ZW50IGNyZWF0ZS1uZXdcIj4rPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZU5ld1RoZW1lQ2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xuaW1wb3J0IENyZWF0ZUluZGV4UGFnZVdyYXBwZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY3JlYXRlL0NyZWF0ZUluZGV4UGFnZVdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlSW5kZXhQYWdlQ29udGFpbmVyKCkge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uLz5cbiAgICAgICAgICAgIDxDcmVhdGVJbmRleFBhZ2VXcmFwcGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ3JlYXRlSW5kZXhQYWdlQ29udGFpbmVyIGZyb20gXCIuLi9jb250YWluZXJzL2NyZWF0ZUluZGV4UGFnZUNvbnRhaW5lclwiO1xuXG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8Q3JlYXRlSW5kZXhQYWdlQ29udGFpbmVyLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXSwic291cmNlUm9vdCI6IiJ9