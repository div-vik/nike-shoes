"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/category/[slug]",{

/***/ "./pages/category/[slug].js":
/*!**********************************!*\
  !*** ./pages/category/[slug].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductCard */ \"./components/ProductCard.jsx\");\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Wrapper */ \"./components/Wrapper.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Category = (param)=>{\n    let { category , products , slug  } = param;\n    var _category_data_, _category_data__attributes, _products_data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full md:py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center max-w-[800px] mx-auto mt-8 md:mt-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[28px] md:text-[34px] mb-5 font-semibold leading-tight\",\n                        children: (_category_data_ = category === null || category === void 0 ? void 0 : category.data[0]) === null || _category_data_ === void 0 ? void 0 : (_category_data__attributes = _category_data_.attributes) === null || _category_data__attributes === void 0 ? void 0 : _category_data__attributes.name\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0\",\n                    children: products === null || products === void 0 ? void 0 : (_products_data = products.data) === null || _products_data === void 0 ? void 0 : _products_data.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: product\n                        }, product.id, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Category;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUVqQjtBQUUxQixNQUFNRyxXQUFXLFNBQWtDO1FBQWpDLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFQyxLQUFJLEVBQUU7UUFNakNGLDZDQUtGQztJQVZULHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDUCwyREFBT0E7OzhCQUNOLDhEQUFDTTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pKLENBQUFBLGtCQUFBQSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVLLElBQUksQ0FBQyxFQUFFLGNBQWpCTCw2QkFBQUEsS0FBQUEsSUFBQUEsOEJBQUFBLGdCQUFtQk0sZ0VBQW5CTixLQUFBQSwrQkFBK0JPLElBQUY7Ozs7Ozs7Ozs7OzhCQUlsQyw4REFBQ0o7b0JBQUlDLFdBQVU7OEJBQ1pILHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsaUJBQUFBLFNBQVVJLElBQUksY0FBZEosNEJBQUFBLEtBQUFBLElBQUFBLGVBQWdCTyxJQUFJLENBQUNDLHdCQUNwQiw4REFBQ2IsK0RBQVdBOzRCQUFrQlMsTUFBTUk7MkJBQWxCQSxRQUFRQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhDO0tBNUJNWDs7QUE4Qk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0ZWdvcnkvW3NsdWddLmpzP2Q3NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvUHJvZHVjdENhcmRcIjtcbmltcG9ydCBXcmFwcGVyIGZyb20gXCJAL2NvbXBvbmVudHMvV3JhcHBlclwiO1xuaW1wb3J0IHsgZmV0Y2hEYXRhRnJvbUFQaSB9IGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDYXRlZ29yeSA9ICh7IGNhdGVnb3J5LCBwcm9kdWN0cywgc2x1ZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6cHktMjBcIj5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LVs4MDBweF0gbXgtYXV0byBtdC04IG1kOm10LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI4cHhdIG1kOnRleHQtWzM0cHhdIG1iLTUgZm9udC1zZW1pYm9sZCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcnk/LmRhdGFbMF0/LmF0dHJpYnV0ZXM/Lm5hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogcHJvZHVjdHMgZ3JpZCBzdGFydCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC01IG15LTE0IHB4LTUgbWQ6cHgtMFwiPlxuICAgICAgICAgIHtwcm9kdWN0cz8uZGF0YT8ubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBkYXRhPXtwcm9kdWN0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHsvKiA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogcHJvZHVjdHMgZ3JpZCBlbmQgKi99XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGZldGNoRGF0YUZyb21BUGkoXCIvYXBpL2NhdGVnb3JpZXM/cG9wdWxhdGU9KlwiKTtcblxuICBjb25zdCBwYXRocyA9IGNhdGVnb3J5LmRhdGEubWFwKChDKSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogQy5hdHRyaWJ1dGVzLnNsdWcsXG4gICAgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgZmV0Y2hEYXRhRnJvbUFQaShcbiAgICBgL2FwaS9jYXRlZ29yaWVzP2ZpbHRlcnNbc2x1Z11bJGVxXT0ke3NsdWd9YFxuICApO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoRGF0YUZyb21BUGkoXG4gICAgYC9hcGkvcHJvZHVjdHM/cG9wdWxhdGU9KiZbZmlsdGVyc11bY2F0ZWdvcmllc11bc2x1Z11bJGVxXT0ke3NsdWd9YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgcHJvZHVjdHMsXG4gICAgICBzbHVnLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkIiwiV3JhcHBlciIsIlJlYWN0IiwiQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsInByb2R1Y3RzIiwic2x1ZyIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEiLCJhdHRyaWJ1dGVzIiwibmFtZSIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/category/[slug].js\n"));

/***/ })

});