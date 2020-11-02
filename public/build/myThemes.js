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
  if (layoutData.themes && layoutData.themes.length > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29tcG9uZW50cy9icm93c2UvVGhlbWVDYXJkLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZWFjdC9jb21wb25lbnRzL215VGhlbWVzL215VGhlbWVzV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVhY3QvY29udGFpbmVycy9teVRoZW1lc1BhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlYWN0L3BhZ2VzL215VGhlbWVzLmpzIl0sIm5hbWVzIjpbInJlZGlyZWN0IiwibG9jYXRpb24iLCJ3aW5kb3ciLCJocmVmIiwiVGhlbWVDYXJkIiwidGhlbWVJZCIsIm5hbWUiLCJpbWdQYXRoIiwiYXV0aG9yIiwicGF0aFRvVGhlbWUiLCJ0aGVtZVBhdGgyIiwiTXlUaGVtZXNXcmFwcGVyIiwibGF5b3V0RGF0YSIsInRoZW1lcyIsImxlbmd0aCIsIm1hcCIsInRoZW1lIiwiaWQiLCJ1c2VyX25hbWUiLCJpbWdfcGF0aCIsIk15VGhlbWVzQ29udGFpbmVyIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLFFBQVEsRUFBSTtBQUN6QkMsUUFBTSxDQUFDRCxRQUFQLENBQWdCRSxJQUFoQixHQUF1QkYsUUFBdkI7QUFDSCxDQUZEOztBQUlPLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQXVDO0FBQUEsTUFBckNDLE9BQXFDLFFBQXJDQSxPQUFxQztBQUFBLE1BQTNCQyxJQUEyQixRQUEzQkEsSUFBMkI7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQzVELE1BQU1DLFdBQVcsR0FBRyxZQUFZSixPQUFoQzs7QUFDQSxNQUFJLENBQUNFLE9BQUQsSUFBWUEsT0FBTyxLQUFLLEVBQTVCLEVBQWdDO0FBQzVCQSxXQUFPLEdBQUcsc0JBQVY7QUFDSDs7QUFDRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQTRCLE1BQUUsRUFBRUYsT0FBaEM7QUFBeUMsV0FBTyxFQUFFO0FBQUEsYUFBTUwsUUFBUSxDQUFDUyxXQUFELENBQWQ7QUFBQTtBQUFsRCxrQkFDSSx1RUFBS0gsSUFBTCxDQURKLGVBRUkscUZBQUssOEZBQVU7QUFBRyxRQUFJLEVBQUVHLFdBQVQ7QUFBc0IsV0FBTyxFQUFFLGlCQUFBQyxVQUFVO0FBQUEsYUFBSVYsUUFBUSxDQUFDVSxVQUFELENBQVo7QUFBQTtBQUF6QyxLQUFvRUYsTUFBcEUsQ0FBVixDQUFMLENBRkosZUFHSSxzRUFISixlQUlJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxPQUFHLEVBQUVELE9BQVY7QUFBbUIsT0FBRyxFQUFDO0FBQXZCLElBREosQ0FKSixDQURKO0FBVUgsQ0FmTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQUDtBQUNBO0FBQ0E7QUFFTyxJQUFNSSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDakMsTUFBSUMsVUFBVSxDQUFDQyxNQUFYLElBQXFCRCxVQUFVLENBQUNDLE1BQVgsQ0FBa0JDLE1BQWxCLEdBQTJCLENBQXBELEVBQXVEO0FBQ25ELHdCQUNJO0FBQUssUUFBRSxFQUFDO0FBQVIsT0FFUUYsVUFBVSxDQUFDQyxNQUFYLENBQWtCRSxHQUFsQixDQUFzQixVQUFBQyxLQUFLLEVBQUk7QUFDM0IsMEJBQ0ksMkRBQUMsMkRBQUQ7QUFDSSxXQUFHLEVBQUVBLEtBQUssQ0FBQ0MsRUFEZjtBQUVJLGVBQU8sRUFBRUQsS0FBSyxDQUFDQyxFQUZuQjtBQUdJLGNBQU0sRUFBRUQsS0FBSyxDQUFDRSxTQUhsQjtBQUlJLFlBQUksRUFBRUYsS0FBSyxDQUFDVixJQUpoQjtBQUtJLGVBQU8sRUFBRVUsS0FBSyxDQUFDRztBQUxuQixRQURKO0FBU0gsS0FWRCxDQUZSLGVBY0ksMkRBQUMsK0NBQUQsT0FkSixDQURKO0FBa0JILEdBbkJELE1BbUJPO0FBQ0gsd0JBQ0k7QUFBSyxRQUFFLEVBQUMsU0FBUjtBQUFrQixlQUFTLEVBQUM7QUFBNUIsb0JBQ0ksZ0hBREosb0JBQ29ELHNFQURwRCxlQUVJLG9GQUNJO0FBQ0ksZUFBUyxFQUFDLG1CQURkO0FBRUksVUFBSSxFQUFDLGVBRlQ7QUFHSSxhQUFPLEVBQUU7QUFBQSxlQUFNakIsTUFBTSxDQUFDRCxRQUFQLENBQWdCRSxJQUFoQixHQUF1QixlQUE3QjtBQUFBO0FBSGIsNkJBREosQ0FGSixlQVVJLDJEQUFDLCtDQUFELE9BVkosQ0FESjtBQWNIO0FBQ0osQ0FwQ00sQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTWlCLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNuQyxzQkFDSSxxRkFDRywyREFBQyw4REFBRCxPQURILGVBRUksMkRBQUMsb0ZBQUQsT0FGSixDQURKO0FBTUgsQ0FQTSxDOzs7Ozs7Ozs7Ozs7QUNKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxlQUNJLDJEQUFDLG1GQUFELE9BREosRUFFSXBCLE1BQU0sQ0FBQ3FCLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCLE1BQS9CLENBRkosRSIsImZpbGUiOiJteVRoZW1lcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBsb2NhdGlvbiA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IFRoZW1lQ2FyZCA9ICh7dGhlbWVJZCAsIG5hbWUsIGltZ1BhdGgsIGF1dGhvcn0pID0+IHtcbiAgICBjb25zdCBwYXRoVG9UaGVtZSA9ICcvdGhlbWUvJyArIHRoZW1lSWQ7XG4gICAgaWYgKCFpbWdQYXRoIHx8IGltZ1BhdGggPT09ICcnKSB7XG4gICAgICAgIGltZ1BhdGggPSAnLi9pbWcvbm8tcHJldmlldy5wbmcnO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtY2FyZFwiIGlkPXt0aGVtZUlkfSBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdChwYXRoVG9UaGVtZSl9PlxuICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2PjxzbWFsbD5CeSA8YSBocmVmPXtwYXRoVG9UaGVtZX0gb25DbGljaz17dGhlbWVQYXRoMiA9PiByZWRpcmVjdCh0aGVtZVBhdGgyKX0+e2F1dGhvcn08L2E+PC9zbWFsbD48L2Rpdj5cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNhcmQtaW1nLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGF0aH0gYWx0PVwidGhlbWUgZGV0YWlsXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9Gb290ZXJcIjtcbmltcG9ydCB7IFRoZW1lQ2FyZCB9IGZyb20gXCIuLi9icm93c2UvVGhlbWVDYXJkXCI7XG5cbmV4cG9ydCBjb25zdCBNeVRoZW1lc1dyYXBwZXIgPSAoKSA9PiB7XG4gICAgaWYgKGxheW91dERhdGEudGhlbWVzICYmIGxheW91dERhdGEudGhlbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYXlvdXREYXRhLnRoZW1lcy5tYXAodGhlbWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGhlbWVDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhlbWUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lSWQ9e3RoZW1lLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3RoZW1lLnVzZXJfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhlbWUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nUGF0aD17dGhlbWUuaW1nX3BhdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzc05hbWU9XCJuby10aGVtZXNcIj5cbiAgICAgICAgICAgICAgICA8aDI+WW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgVGhlbWVzIHlldC4uLiA8L2gyPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNyZWF0ZS10aGVtZS1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY3JlYXRlLXRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jcmVhdGUtdGhlbWUnfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGUgYSBuZXcgVGhlbWUhPC9hPlxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmlnYXRpb25cIjtcbmltcG9ydCB7IE15VGhlbWVzV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL215VGhlbWVzL215VGhlbWVzV3JhcHBlclwiO1xuXG5leHBvcnQgY29uc3QgTXlUaGVtZXNDb250YWluZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgICAgICAgICA8TXlUaGVtZXNXcmFwcGVyLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBNeVRoZW1lc0NvbnRhaW5lciB9IGZyb20gXCIuLi9jb250YWluZXJzL215VGhlbWVzUGFnZUNvbnRhaW5lclwiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPE15VGhlbWVzQ29udGFpbmVyLz4sXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==