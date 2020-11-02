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
    className: "create-card",
    onClick: function onClick() {
      return window.location.href = '/create-theme';
    }
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

},[["./assets/js/react/pages/createIndex.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlSW5kZXhQYWdlV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9jcmVhdGUvY2FyZHMvQ2FyZHNXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9jYXJkcy9Db250aW51ZU9uRXhpc3RpbmdUaGVtZXNDYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL2NyZWF0ZS9jYXJkcy9DcmVhdGVOZXdUaGVtZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L2NvbnRhaW5lcnMvY3JlYXRlSW5kZXhQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9wYWdlcy9jcmVhdGVJbmRleC5qcyJdLCJuYW1lcyI6WyJDcmVhdGVJbmRleFBhZ2VXcmFwcGVyIiwiQ2FyZHNXcmFwcGVyIiwiQ29udGludWVPbkV4aXN0aW5nVGhlbWVzQ2FyZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkNyZWF0ZU5ld1RoZW1lQ2FyZCIsIkNyZWF0ZUluZGV4UGFnZUNvbnRhaW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ2pDLHNCQUNJO0FBQUssTUFBRSxFQUFDO0FBQVIsa0JBQ0ksMkRBQUMsMkRBQUQsT0FESixlQUVJLDJEQUFDLCtDQUFELE9BRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VBLHFGQUFmLEU7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixzQkFDSTtBQUFLLE1BQUUsRUFBQztBQUFSLGtCQUNJLDJEQUFDLDJEQUFELE9BREosZUFFSSwyREFBQyxxRUFBRCxPQUZKLENBREo7QUFNSCxDQVBEOztBQVNlQSwyRUFBZixFOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxJQUFNQyw0QkFBNEIsR0FBRyxTQUEvQkEsNEJBQStCLEdBQU07QUFDdkMsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUE2QixXQUFPLEVBQUU7QUFBQSxhQUFNQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLFlBQTdCO0FBQUE7QUFBdEMsa0JBQ0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxnREFESixlQUVJO0FBQUssYUFBUyxFQUFDO0FBQWYsVUFGSixDQURKO0FBTUgsQ0FQRDs7QUFTZUgsMkZBQWYsRTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUksa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQzdCLHNCQUNJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBNkIsV0FBTyxFQUFFO0FBQUEsYUFBTUgsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixlQUE3QjtBQUFBO0FBQXRDLGtCQUNJO0FBQUksYUFBUyxFQUFDO0FBQWQsMkJBREosZUFFSTtBQUFLLGFBQVMsRUFBQztBQUFmLFNBRkosQ0FESjtBQU1ILENBUEQ7O0FBU2VDLGlGQUFmLEU7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLHdCQUFULEdBQW9DO0FBQy9DLHNCQUNJLHFGQUNJLDJEQUFDLDhEQUFELE9BREosZUFFSSwyREFBQyxpRkFBRCxPQUZKLENBREo7QUFNSCxDOzs7Ozs7Ozs7Ozs7QUNYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLDRFQUFELE9BREosRUFFSUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBRkosRSIsImZpbGUiOiJjcmVhdGVJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCBDYXJkc1dyYXBwZXIgZnJvbSBcIi4vY2FyZHMvQ2FyZHNXcmFwcGVyXCI7XG5cbmNvbnN0IENyZWF0ZUluZGV4UGFnZVdyYXBwZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPENhcmRzV3JhcHBlci8+XG4gICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlSW5kZXhQYWdlV3JhcHBlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENyZWF0ZU5ld1RoZW1lQ2FyZCBmcm9tIFwiLi9DcmVhdGVOZXdUaGVtZUNhcmRcIjtcbmltcG9ydCBDb250aW51ZU9uRXhpc3RpbmdUaGVtZXNDYXJkIGZyb20gXCIuL0NvbnRpbnVlT25FeGlzdGluZ1RoZW1lc0NhcmRcIjtcblxuXG5jb25zdCBDYXJkc1dyYXBwZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGlkPVwiY2FyZHMtd3JhcHBlclwiPlxuICAgICAgICAgICAgPENyZWF0ZU5ld1RoZW1lQ2FyZC8+XG4gICAgICAgICAgICA8Q29udGludWVPbkV4aXN0aW5nVGhlbWVzQ2FyZC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRzV3JhcHBlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb250aW51ZU9uRXhpc3RpbmdUaGVtZXNDYXJkID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtY2FyZFwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9teV90aGVtZXMnIH0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY3JlYXRlLWNhcmQtaGVhZGVyXCI+Q29udGludWUgZGVzaWduaW5nIHlvdXIgZXhpc3RpbmcgVGhlbWVzITwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1jYXJkLWNvbnRlbnQgY29udGludWUtZXhpc3RpbmdcIj4tPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250aW51ZU9uRXhpc3RpbmdUaGVtZXNDYXJkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENyZWF0ZU5ld1RoZW1lQ2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3JlYXRlLWNhcmRcIiBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY3JlYXRlLXRoZW1lJ30+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY3JlYXRlLWNhcmQtaGVhZGVyXCI+Q3JlYXRlIGEgbmV3IFRoZW1lITwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1jYXJkLWNvbnRlbnQgY3JlYXRlLW5ld1wiPis8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlTmV3VGhlbWVDYXJkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgQ3JlYXRlSW5kZXhQYWdlV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jcmVhdGUvQ3JlYXRlSW5kZXhQYWdlV3JhcHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVJbmRleFBhZ2VDb250YWluZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICAgPENyZWF0ZUluZGV4UGFnZVdyYXBwZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBDcmVhdGVJbmRleFBhZ2VDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvY3JlYXRlSW5kZXhQYWdlQ29udGFpbmVyXCI7XG5cblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxDcmVhdGVJbmRleFBhZ2VDb250YWluZXIvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdLCJzb3VyY2VSb290IjoiIn0=