webpackHotUpdate_N_E("pages/index",{

/***/ "./components/email/message.js":
/*!*************************************!*\
  !*** ./components/email/message.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Message; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/email/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/amitsingh/Desktop/india-for-crypto/components/email/message.js\";\n\n\nfunction Message(props) {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"mt-4\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-row justify-between\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heading2,\n        children: \"Message\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex flex-row\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"\".concat(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heading2, \" mr-4\"),\n          children: [\"Choose a subject template \", props.messageIndex + 1, \"/\", props.totalMessageSlides]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          className: \"h-6 w-6 \".concat(props.messageIndex === 0 ? 'text-gray-300' : 'text-indigo-500', \" message-prev\"),\n          xmlns: \"http://www.w3.org/2000/svg\",\n          fill: \"none\",\n          viewBox: \"0 0 24 24\",\n          stroke: \"currentColor\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            strokeLinecap: \"round\",\n            strokeLinejoin: \"round\",\n            strokeWidth: 2,\n            d: \"M15 19l-7-7 7-7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          className: \"h-6 w-6 \".concat(props.messageIndex === props.totalMessageSlides - 1 ? 'text-gray-300' : 'text-indigo-500', \" message-next\"),\n          xmlns: \"http://www.w3.org/2000/svg\",\n          fill: \"none\",\n          viewBox: \"0 0 24 24\",\n          stroke: \"currentColor\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            strokeLinecap: \"round\",\n            strokeLinejoin: \"round\",\n            strokeWidth: 2,\n            d: \"M9 5l7 7-7 7\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_1__[\"Swiper\"], {\n      slidesPerView: 1,\n      onSlideChange: props.onMessageSlideChange,\n      onSwiper: function onSwiper(swiper) {\n        return props.onMessageSwiperInit(swiper);\n      },\n      controller: {\n        control: props.instance\n      },\n      navigation: {\n        nextEl: \".message-next\",\n        prevEl: \".message-prev\"\n      },\n      className: \"my-4\",\n      children: Array.isArray(props.data) && props.data.map(function (e) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_1__[\"SwiperSlide\"], {\n          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.swiperCard,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.swiperText,\n            children: [\"Dear \", props.districtMp ? props.districtMp.name.split(',').reverse().join(' ') : 'Sir/Madam', \",\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.swiperText,\n            children: e.replace('\\n', '<br />')\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 25\n          }, _this)]\n        }, e, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, this);\n}\n_c = Message;\n\nvar _c;\n\n$RefreshReg$(_c, \"Message\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbWFpbC9tZXNzYWdlLmpzPzAxY2QiXSwibmFtZXMiOlsiTWVzc2FnZSIsInByb3BzIiwic3R5bGVzIiwiaGVhZGluZzIiLCJtZXNzYWdlSW5kZXgiLCJ0b3RhbE1lc3NhZ2VTbGlkZXMiLCJvbk1lc3NhZ2VTbGlkZUNoYW5nZSIsInN3aXBlciIsIm9uTWVzc2FnZVN3aXBlckluaXQiLCJjb250cm9sIiwiaW5zdGFuY2UiLCJuZXh0RWwiLCJwcmV2RWwiLCJBcnJheSIsImlzQXJyYXkiLCJkYXRhIiwibWFwIiwiZSIsInN3aXBlckNhcmQiLCJzd2lwZXJUZXh0IiwiZGlzdHJpY3RNcCIsIm5hbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQUE7O0FBQ25DLHNCQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQywrQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0k7QUFBSyxtQkFBUyxZQUFLRCwwREFBTSxDQUFDQyxRQUFaLFVBQWQ7QUFBQSxtREFDK0JGLEtBQUssQ0FBQ0csWUFBTixHQUFxQixDQURwRCxPQUN3REgsS0FBSyxDQUFDSSxrQkFEOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBSyxtQkFBUyxvQkFBYUosS0FBSyxDQUFDRyxZQUFOLEtBQXVCLENBQXZCLEdBQTJCLGVBQTNCLEdBQTZDLGlCQUExRCxrQkFBZDtBQUEwRyxlQUFLLEVBQUMsNEJBQWhIO0FBQTZJLGNBQUksRUFBQyxNQUFsSjtBQUF5SixpQkFBTyxFQUFDLFdBQWpLO0FBQTZLLGdCQUFNLEVBQUMsY0FBcEw7QUFBQSxpQ0FDSTtBQUFNLHlCQUFhLEVBQUMsT0FBcEI7QUFBNEIsMEJBQWMsRUFBQyxPQUEzQztBQUFtRCx1QkFBVyxFQUFFLENBQWhFO0FBQW1FLGFBQUMsRUFBQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQU9JO0FBQUssbUJBQVMsb0JBQWFILEtBQUssQ0FBQ0csWUFBTixLQUF1QkgsS0FBSyxDQUFDSSxrQkFBTixHQUEyQixDQUFsRCxHQUFzRCxlQUF0RCxHQUF3RSxpQkFBckYsa0JBQWQ7QUFBcUksZUFBSyxFQUFDLDRCQUEzSTtBQUF3SyxjQUFJLEVBQUMsTUFBN0s7QUFBb0wsaUJBQU8sRUFBQyxXQUE1TDtBQUF3TSxnQkFBTSxFQUFDLGNBQS9NO0FBQUEsaUNBQ0k7QUFBTSx5QkFBYSxFQUFDLE9BQXBCO0FBQTRCLDBCQUFjLEVBQUMsT0FBM0M7QUFBbUQsdUJBQVcsRUFBRSxDQUFoRTtBQUFtRSxhQUFDLEVBQUM7QUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFpQkkscUVBQUMsbURBQUQ7QUFDSSxtQkFBYSxFQUFFLENBRG5CO0FBRUksbUJBQWEsRUFBRUosS0FBSyxDQUFDSyxvQkFGekI7QUFHSSxjQUFRLEVBQUUsa0JBQUNDLE1BQUQ7QUFBQSxlQUFZTixLQUFLLENBQUNPLG1CQUFOLENBQTBCRCxNQUExQixDQUFaO0FBQUEsT0FIZDtBQUlJLGdCQUFVLEVBQUU7QUFBRUUsZUFBTyxFQUFFUixLQUFLLENBQUNTO0FBQWpCLE9BSmhCO0FBS0ksZ0JBQVUsRUFBRTtBQUNSQyxjQUFNLEVBQUUsZUFEQTtBQUVSQyxjQUFNLEVBQUU7QUFGQSxPQUxoQjtBQVNJLGVBQVMsRUFBQyxNQVRkO0FBQUEsZ0JBV0tDLEtBQUssQ0FBQ0MsT0FBTixDQUFjYixLQUFLLENBQUNjLElBQXBCLEtBQTZCZCxLQUFLLENBQUNjLElBQU4sQ0FBV0MsR0FBWCxDQUFlLFVBQUFDLENBQUM7QUFBQSw0QkFDMUMscUVBQUMsd0RBQUQ7QUFBYSxtQkFBUyxFQUFFZiwwREFBTSxDQUFDZ0IsVUFBL0I7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUVoQiwwREFBTSxDQUFDaUIsVUFBdkI7QUFBQSxnQ0FDVWxCLEtBQUssQ0FBQ21CLFVBQU4sR0FBbUJuQixLQUFLLENBQUNtQixVQUFOLENBQWlCQyxJQUFqQixDQUFzQkMsS0FBdEIsQ0FBNEIsR0FBNUIsRUFBaUNDLE9BQWpDLEdBQTJDQyxJQUEzQyxDQUFnRCxHQUFoRCxDQUFuQixHQUEyRSxXQURyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0k7QUFBSyxxQkFBUyxFQUFFdEIsMERBQU0sQ0FBQ2lCLFVBQXZCO0FBQUEsc0JBQW9DRixDQUFDLENBQUNRLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLFFBQWhCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQSxXQUFnRFIsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEMEM7QUFBQSxPQUFoQjtBQVhsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMENIO0tBM0N1QmpCLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL2VtYWlsL21lc3NhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVzc2FnZShwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZzJ9PlxuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaGVhZGluZzJ9IG1yLTRgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIENob29zZSBhIHN1YmplY3QgdGVtcGxhdGUge3Byb3BzLm1lc3NhZ2VJbmRleCArIDF9L3twcm9wcy50b3RhbE1lc3NhZ2VTbGlkZXN9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT17YGgtNiB3LTYgJHtwcm9wcy5tZXNzYWdlSW5kZXggPT09IDAgPyAndGV4dC1ncmF5LTMwMCcgOiAndGV4dC1pbmRpZ28tNTAwJ30gbWVzc2FnZS1wcmV2YH0geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZVdpZHRoPXsyfSBkPVwiTTE1IDE5bC03LTcgNy03XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPXtgaC02IHctNiAke3Byb3BzLm1lc3NhZ2VJbmRleCA9PT0gcHJvcHMudG90YWxNZXNzYWdlU2xpZGVzIC0gMSA/ICd0ZXh0LWdyYXktMzAwJyA6ICd0ZXh0LWluZGlnby01MDAnfSBtZXNzYWdlLW5leHRgfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNOSA1bDcgNy03IDdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFN3aXBlclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezF9XG4gICAgICAgICAgICAgICAgb25TbGlkZUNoYW5nZT17cHJvcHMub25NZXNzYWdlU2xpZGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IHByb3BzLm9uTWVzc2FnZVN3aXBlckluaXQoc3dpcGVyKX1cbiAgICAgICAgICAgICAgICBjb250cm9sbGVyPXt7IGNvbnRyb2w6IHByb3BzLmluc3RhbmNlIH19XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICBuZXh0RWw6IFwiLm1lc3NhZ2UtbmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICBwcmV2RWw6IFwiLm1lc3NhZ2UtcHJldlwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge0FycmF5LmlzQXJyYXkocHJvcHMuZGF0YSkgJiYgcHJvcHMuZGF0YS5tYXAoZSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZXJDYXJkfSBrZXk9e2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZXJUZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWFyIHtwcm9wcy5kaXN0cmljdE1wID8gcHJvcHMuZGlzdHJpY3RNcC5uYW1lLnNwbGl0KCcsJykucmV2ZXJzZSgpLmpvaW4oJyAnKSAgOiAnU2lyL01hZGFtJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZXJUZXh0fT57ZS5yZXBsYWNlKCdcXG4nLCAnPGJyIC8+Jyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2Uuc3BsaXQoJ1xcbicpLm1hcCgoc3RyLCBpbmRleCkgPT4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZXJUZXh0fSBrZXk9e2luZGV4fT57c3RyfTwvZGl2Pil9ICovfVxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9Td2lwZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/email/message.js\n");

/***/ })

})