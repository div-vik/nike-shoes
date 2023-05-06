"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ \"./components/Wrapper.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ \"./components/Menu.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [mobileMenu, setMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showCatMenu, setShowCatMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"translate-y-0\");\n    const [lastScrollY, setLastScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 \".concat(show),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/logo.svg\",\n                        className: \"w-[40px] md:w-[60px]\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    showCatMenu: showCatMenu,\n                    setShowCatMenu: setShowCatMenu\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"Gaqz7PORnt8tmmlLIQb9x12RkvU=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUjtBQUNIO0FBQ0g7QUFFMUIsTUFBTUssU0FBUyxJQUFNOztJQUNuQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUNsRCxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUNwRCxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVyxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRWpELHFCQUNFLDhEQUFDZTtRQUNDQyxXQUFXLDhIQUFtSSxPQUFMUDtrQkFFekksNEVBQUNSLGdEQUFPQTs7OEJBQ04sOERBQUNDLGtEQUFJQTtvQkFBQ2UsTUFBSzs4QkFDVCw0RUFBQ0M7d0JBQUlDLEtBQUk7d0JBQVlILFdBQVU7Ozs7Ozs7Ozs7OzhCQUVqQyw4REFBQ2IsNkNBQUlBO29CQUFDSSxhQUFhQTtvQkFBYUMsZ0JBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEQ7R0FuQk1KO0tBQUFBO0FBcUJOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyLmpzeD81NjdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4vV3JhcHBlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dDYXRNZW51LCBzZXRTaG93Q2F0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKFwidHJhbnNsYXRlLXktMFwiKTtcbiAgY29uc3QgW2xhc3RTY3JvbGxZLCBzZXRMYXN0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyXG4gICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1bNTBweF0gbWQ6aC1bODBweF0gYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHotMjAgc3RpY2t5IHRvcC0wIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCAke3Nob3d9YH1cbiAgICA+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnN2Z1wiIGNsYXNzTmFtZT1cInctWzQwcHhdIG1kOnctWzYwcHhdXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TWVudSBzaG93Q2F0TWVudT17c2hvd0NhdE1lbnV9IHNldFNob3dDYXRNZW51PXtzZXRTaG93Q2F0TWVudX0gLz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiV3JhcHBlciIsIkxpbmsiLCJNZW51IiwiSGVhZGVyIiwibW9iaWxlTWVudSIsInNldE1vYmlsZU1lbnUiLCJzaG93Q2F0TWVudSIsInNldFNob3dDYXRNZW51Iiwic2hvdyIsInNldFNob3ciLCJsYXN0U2Nyb2xsWSIsInNldExhc3RTY3JvbGxZIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});