"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./components/RelatedProducts.jsx":
/*!****************************************!*\
  !*** ./components/RelatedProducts.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductCard */ \"./components/ProductCard.jsx\");\n\n\n\n\n\nconst RelatedProducts = (param)=>{\n    let { products  } = param;\n    var _products_data;\n    const responsive = {\n        desktop: {\n            breakpoint: {\n                max: 3000,\n                min: 1024\n            },\n            items: 3\n        },\n        tablet: {\n            breakpoint: {\n                max: 1023,\n                min: 464\n            },\n            items: 2\n        },\n        mobile: {\n            breakpoint: {\n                max: 767,\n                min: 0\n            },\n            items: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-[50px] md:mt-[100px] mb-[100px] md:mb-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-2xl font-bold mb-5\",\n                children: \"You Might Also Like\"\n            }, void 0, false, {\n                fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/RelatedProducts.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default()), {\n                responsive: responsive,\n                containerClass: \"-mx-[10px]\",\n                itemClass: \"px-[10px]\",\n                children: products === null || products === void 0 ? void 0 : (_products_data = products.data) === null || _products_data === void 0 ? void 0 : _products_data.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProductCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        data: product\n                    }, product.id, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/RelatedProducts.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/RelatedProducts.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/RelatedProducts.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = RelatedProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RelatedProducts);\nvar _c;\n$RefreshReg$(_c, \"RelatedProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlbGF0ZWRQcm9kdWN0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFFa0I7QUFDQztBQUNMO0FBRXhDLE1BQU1HLGtCQUFrQixTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7UUF3QjVCQTtJQXZCUCxNQUFNQyxhQUFhO1FBQ2pCQyxTQUFTO1lBQ1BDLFlBQVk7Z0JBQUVDLEtBQUs7Z0JBQU1DLEtBQUs7WUFBSztZQUNuQ0MsT0FBTztRQUNUO1FBQ0FDLFFBQVE7WUFDTkosWUFBWTtnQkFBRUMsS0FBSztnQkFBTUMsS0FBSztZQUFJO1lBQ2xDQyxPQUFPO1FBQ1Q7UUFDQUUsUUFBUTtZQUNOTCxZQUFZO2dCQUFFQyxLQUFLO2dCQUFLQyxLQUFLO1lBQUU7WUFDL0JDLE9BQU87UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBMEI7Ozs7OzswQkFDekMsOERBQUNiLDZEQUFRQTtnQkFDUEksWUFBWUE7Z0JBQ1pVLGdCQUFlO2dCQUNmQyxXQUFVOzBCQUVUWixxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLGlCQUFBQSxTQUFVYSxJQUFJLGNBQWRiLDRCQUFBQSxLQUFBQSxJQUFBQSxlQUFnQmMsSUFBSSxDQUFDQyx3QkFDcEIsOERBQUNqQixvREFBV0E7d0JBQWtCZSxNQUFNRTt1QkFBbEJBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdEM7S0E5Qk1qQjtBQWdDTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlbGF0ZWRQcm9kdWN0cy5qc3g/ZTgxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4vUHJvZHVjdENhcmRcIjtcblxuY29uc3QgUmVsYXRlZFByb2R1Y3RzID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgIGRlc2t0b3A6IHtcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICAgIGl0ZW1zOiAzLFxuICAgIH0sXG4gICAgdGFibGV0OiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogMTAyMywgbWluOiA0NjQgfSxcbiAgICAgIGl0ZW1zOiAyLFxuICAgIH0sXG4gICAgbW9iaWxlOiB7XG4gICAgICBicmVha3BvaW50OiB7IG1heDogNzY3LCBtaW46IDAgfSxcbiAgICAgIGl0ZW1zOiAxLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVs1MHB4XSBtZDptdC1bMTAwcHhdIG1iLVsxMDBweF0gbWQ6bWItMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNVwiPllvdSBNaWdodCBBbHNvIExpa2U8L2Rpdj5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICBjb250YWluZXJDbGFzcz1cIi1teC1bMTBweF1cIlxuICAgICAgICBpdGVtQ2xhc3M9XCJweC1bMTBweF1cIlxuICAgICAgPlxuICAgICAgICB7cHJvZHVjdHM/LmRhdGE/Lm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IGRhdGE9e3Byb2R1Y3R9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0ZWRQcm9kdWN0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcm91c2VsIiwiUHJvZHVjdENhcmQiLCJSZWxhdGVkUHJvZHVjdHMiLCJwcm9kdWN0cyIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwidGFibGV0IiwibW9iaWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyQ2xhc3MiLCJpdGVtQ2xhc3MiLCJkYXRhIiwibWFwIiwicHJvZHVjdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RelatedProducts.jsx\n"));

/***/ })

});