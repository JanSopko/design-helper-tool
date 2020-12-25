(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myThemes"],{

/***/ "./assets/js/react/components/browse/ThemeCard.js":
/*!********************************************************!*\
  !*** ./assets/js/react/components/browse/ThemeCard.js ***!
  \********************************************************/
/*! exports provided: ThemeCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeCard", function() { return ThemeCard; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var redirect = function redirect(location) {
  window.location.href = location;
};

var ThemeCard = function ThemeCard(_ref) {
  var themeId = _ref.themeId,
      name = _ref.name,
      imgPath = _ref.imgPath,
      author = _ref.author;
  var pathToTheme = '/theme/' + themeId;

  if (!imgPath || imgPath === '') {
    imgPath = './img/no-preview.png';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "theme-card",
    id: themeId,
    onClick: function onClick() {
      return redirect(pathToTheme);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, "By ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: pathToTheme,
    onClick: function onClick(themePath2) {
      return redirect(themePath2);
    }
  }, author))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "theme-card-img-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: imgPath,
    alt: "theme detail"
  })));
};

/***/ }),

/***/ "./assets/js/react/components/myThemes/myThemesWrapper.js":
/*!****************************************************************!*\
  !*** ./assets/js/react/components/myThemes/myThemesWrapper.js ***!
  \****************************************************************/
/*! exports provided: MyThemesWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyThemesWrapper", function() { return MyThemesWrapper; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer */ "./assets/js/react/components/Footer.js");
/* harmony import */ var _browse_ThemeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../browse/ThemeCard */ "./assets/js/react/components/browse/ThemeCard.js");





var MyThemesWrapper = function MyThemesWrapper() {
  console.log(layoutData);

  if (layoutData && layoutData.themes && layoutData.themes.length > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "content"
    }, layoutData.themes.map(function (theme) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_browse_ThemeCard__WEBPACK_IMPORTED_MODULE_4__["ThemeCard"], {
        key: theme.id,
        themeId: theme.id,
        author: theme.user_name,
        name: theme.name,
        imgPath: theme.img_path
      });
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "content",
      className: "no-themes"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "You haven't created any Themes yet... "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      className: "create-theme-link",
      href: "/create-theme",
      onClick: function onClick() {
        return window.location.href = '/create-theme';
      }
    }, "Create a new Theme!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }
};

/***/ }),

/***/ "./assets/js/react/containers/myThemesPageContainer.js":
/*!*************************************************************!*\
  !*** ./assets/js/react/containers/myThemesPageContainer.js ***!
  \*************************************************************/
/*! exports provided: MyThemesContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyThemesContainer", function() { return MyThemesContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation */ "./assets/js/react/components/Navigation.js");
/* harmony import */ var _components_myThemes_myThemesWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/myThemes/myThemesWrapper */ "./assets/js/react/components/myThemes/myThemesWrapper.js");



var MyThemesContainer = function MyThemesContainer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_myThemes_myThemesWrapper__WEBPACK_IMPORTED_MODULE_2__["MyThemesWrapper"], null));
};

/***/ }),

/***/ "./assets/js/react/pages/myThemes.js":
/*!*******************************************!*\
  !*** ./assets/js/react/pages/myThemes.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_myThemesPageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/myThemesPageContainer */ "./assets/js/react/containers/myThemesPageContainer.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_myThemesPageContainer__WEBPACK_IMPORTED_MODULE_2__["MyThemesContainer"], null), window.document.getElementById('root'));

/***/ })

},[["./assets/js/react/pages/myThemes.js","runtime","vendors~browse~create~createIndex~createTheme~homepage~myThemes~sign~theme","browse~create~createIndex~createTheme~homepage~myThemes~sign~theme"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9icm93c2UvVGhlbWVDYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL215VGhlbWVzL215VGhlbWVzV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9teVRoZW1lc1BhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L3BhZ2VzL215VGhlbWVzLmpzIl0sIm5hbWVzIjpbInJlZGlyZWN0IiwibG9jYXRpb24iLCJ3aW5kb3ciLCJocmVmIiwiVGhlbWVDYXJkIiwidGhlbWVJZCIsIm5hbWUiLCJpbWdQYXRoIiwiYXV0aG9yIiwicGF0aFRvVGhlbWUiLCJ0aGVtZVBhdGgyIiwiTXlUaGVtZXNXcmFwcGVyIiwiY29uc29sZSIsImxvZyIsImxheW91dERhdGEiLCJ0aGVtZXMiLCJsZW5ndGgiLCJtYXAiLCJ0aGVtZSIsImlkIiwidXNlcl9uYW1lIiwiaW1nX3BhdGgiLCJNeVRoZW1lc0NvbnRhaW5lciIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxRQUFRLEVBQUk7QUFDekJDLFFBQU0sQ0FBQ0QsUUFBUCxDQUFnQkUsSUFBaEIsR0FBdUJGLFFBQXZCO0FBQ0gsQ0FGRDs7QUFJTyxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF1QztBQUFBLE1BQXJDQyxPQUFxQyxRQUFyQ0EsT0FBcUM7QUFBQSxNQUEzQkMsSUFBMkIsUUFBM0JBLElBQTJCO0FBQUEsTUFBckJDLE9BQXFCLFFBQXJCQSxPQUFxQjtBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUM1RCxNQUFNQyxXQUFXLEdBQUcsWUFBWUosT0FBaEM7O0FBQ0EsTUFBSSxDQUFDRSxPQUFELElBQVlBLE9BQU8sS0FBSyxFQUE1QixFQUFnQztBQUM1QkEsV0FBTyxHQUFHLHNCQUFWO0FBQ0g7O0FBQ0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUE0QixNQUFFLEVBQUVGLE9BQWhDO0FBQXlDLFdBQU8sRUFBRTtBQUFBLGFBQU1MLFFBQVEsQ0FBQ1MsV0FBRCxDQUFkO0FBQUE7QUFBbEQsa0JBQ0ksdUVBQUtILElBQUwsQ0FESixlQUVJLHFGQUFLLDhGQUFVO0FBQUcsUUFBSSxFQUFFRyxXQUFUO0FBQXNCLFdBQU8sRUFBRSxpQkFBQUMsVUFBVTtBQUFBLGFBQUlWLFFBQVEsQ0FBQ1UsVUFBRCxDQUFaO0FBQUE7QUFBekMsS0FBb0VGLE1BQXBFLENBQVYsQ0FBTCxDQUZKLGVBR0ksc0VBSEosZUFJSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssT0FBRyxFQUFFRCxPQUFWO0FBQW1CLE9BQUcsRUFBQztBQUF2QixJQURKLENBSkosQ0FESjtBQVVILENBZk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFA7QUFDQTtBQUNBO0FBRU8sSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBWjs7QUFDQSxNQUFJQSxVQUFVLElBQUlBLFVBQVUsQ0FBQ0MsTUFBekIsSUFBbUNELFVBQVUsQ0FBQ0MsTUFBWCxDQUFrQkMsTUFBbEIsR0FBMkIsQ0FBbEUsRUFBcUU7QUFDakUsd0JBQ0k7QUFBSyxRQUFFLEVBQUM7QUFBUixPQUVRRixVQUFVLENBQUNDLE1BQVgsQ0FBa0JFLEdBQWxCLENBQXNCLFVBQUFDLEtBQUssRUFBSTtBQUMzQiwwQkFDSSwyREFBQywyREFBRDtBQUNJLFdBQUcsRUFBRUEsS0FBSyxDQUFDQyxFQURmO0FBRUksZUFBTyxFQUFFRCxLQUFLLENBQUNDLEVBRm5CO0FBR0ksY0FBTSxFQUFFRCxLQUFLLENBQUNFLFNBSGxCO0FBSUksWUFBSSxFQUFFRixLQUFLLENBQUNaLElBSmhCO0FBS0ksZUFBTyxFQUFFWSxLQUFLLENBQUNHO0FBTG5CLFFBREo7QUFTSCxLQVZELENBRlIsZUFjSSwyREFBQywrQ0FBRCxPQWRKLENBREo7QUFrQkgsR0FuQkQsTUFtQk87QUFDSCx3QkFDSTtBQUFLLFFBQUUsRUFBQyxTQUFSO0FBQWtCLGVBQVMsRUFBQztBQUE1QixvQkFDSSxnSEFESixvQkFDb0Qsc0VBRHBELGVBRUksb0ZBQ0k7QUFDSSxlQUFTLEVBQUMsbUJBRGQ7QUFFSSxVQUFJLEVBQUMsZUFGVDtBQUdJLGFBQU8sRUFBRTtBQUFBLGVBQU1uQixNQUFNLENBQUNELFFBQVAsQ0FBZ0JFLElBQWhCLEdBQXVCLGVBQTdCO0FBQUE7QUFIYiw2QkFESixDQUZKLGVBVUksMkRBQUMsK0NBQUQsT0FWSixDQURKO0FBY0g7QUFDSixDQXJDTSxDOzs7Ozs7Ozs7Ozs7QUNKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNbUIsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFNO0FBQ25DLHNCQUNJLHFGQUNHLDJEQUFDLDhEQUFELE9BREgsZUFFRywyREFBQyxvRkFBRCxPQUZILENBREo7QUFNSCxDQVBNLEM7Ozs7Ozs7Ozs7OztBQ0pQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBQyxnREFBUSxDQUFDQyxNQUFULGVBQ0ksMkRBQUMsbUZBQUQsT0FESixFQUVJdEIsTUFBTSxDQUFDdUIsUUFBUCxDQUFnQkMsY0FBaEIsQ0FBK0IsTUFBL0IsQ0FGSixFIiwiZmlsZSI6Im15VGhlbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCByZWRpcmVjdCA9IGxvY2F0aW9uID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgVGhlbWVDYXJkID0gKHt0aGVtZUlkICwgbmFtZSwgaW1nUGF0aCwgYXV0aG9yfSkgPT4ge1xuICAgIGNvbnN0IHBhdGhUb1RoZW1lID0gJy90aGVtZS8nICsgdGhlbWVJZDtcbiAgICBpZiAoIWltZ1BhdGggfHwgaW1nUGF0aCA9PT0gJycpIHtcbiAgICAgICAgaW1nUGF0aCA9ICcuL2ltZy9uby1wcmV2aWV3LnBuZyc7XG4gICAgfVxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1jYXJkXCIgaWQ9e3RoZW1lSWR9IG9uQ2xpY2s9eygpID0+IHJlZGlyZWN0KHBhdGhUb1RoZW1lKX0+XG4gICAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgICAgICAgIDxkaXY+PHNtYWxsPkJ5IDxhIGhyZWY9e3BhdGhUb1RoZW1lfSBvbkNsaWNrPXt0aGVtZVBhdGgyID0+IHJlZGlyZWN0KHRoZW1lUGF0aDIpfT57YXV0aG9yfTwvYT48L3NtYWxsPjwvZGl2PlxuICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtY2FyZC1pbWctd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWdQYXRofSBhbHQ9XCJ0aGVtZSBkZXRhaWxcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL0Zvb3RlclwiO1xuaW1wb3J0IHsgVGhlbWVDYXJkIH0gZnJvbSBcIi4uL2Jyb3dzZS9UaGVtZUNhcmRcIjtcblxuZXhwb3J0IGNvbnN0IE15VGhlbWVzV3JhcHBlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhsYXlvdXREYXRhKTtcbiAgICBpZiAobGF5b3V0RGF0YSAmJiBsYXlvdXREYXRhLnRoZW1lcyAmJiBsYXlvdXREYXRhLnRoZW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0RGF0YS50aGVtZXMubWFwKHRoZW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoZW1lQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3RoZW1lLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZUlkPXt0aGVtZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXt0aGVtZS51c2VyX25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3RoZW1lLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1BhdGg9e3RoZW1lLmltZ19wYXRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCIgY2xhc3NOYW1lPVwibm8tdGhlbWVzXCI+XG4gICAgICAgICAgICAgICAgPGgyPllvdSBoYXZlbid0IGNyZWF0ZWQgYW55IFRoZW1lcyB5ZXQuLi4gPC9oMj4gPGJyLz5cbiAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjcmVhdGUtdGhlbWUtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2NyZWF0ZS10aGVtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY3JlYXRlLXRoZW1lJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IFRoZW1lITwvYT5cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBNeVRoZW1lc1dyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9teVRoZW1lcy9teVRoZW1lc1dyYXBwZXJcIjtcblxuZXhwb3J0IGNvbnN0IE15VGhlbWVzQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgICAgICA8TXlUaGVtZXNXcmFwcGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBNeVRoZW1lc0NvbnRhaW5lciB9IGZyb20gXCIuLi9jb250YWluZXJzL215VGhlbWVzUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPE15VGhlbWVzQ29udGFpbmVyLz4sXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==