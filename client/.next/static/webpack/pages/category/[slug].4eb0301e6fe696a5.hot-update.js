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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ProductCard */ \"./components/ProductCard.jsx\");\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Wrapper */ \"./components/Wrapper.jsx\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/api */ \"./utils/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst maxResult = 3;\nconst Category = (param)=>{\n    let { category , products , slug  } = param;\n    var _category_data_, _category_data__attributes, _data_data;\n    _s();\n    const [pageIndex, setPageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/products?populate=*&[filters][categories][slug][$eq]=\".concat(slug, \"&pagination[page]=\").concat(pageIndex, \"&pagination[pageSize]=\").concat(maxResult), _utils_api__WEBPACK_IMPORTED_MODULE_3__.fetchDataFromAPi, {\n        fallback: products\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full md:py-20\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center max-w-[800px] mx-auto mt-8 md:mt-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[28px] md:text-[34px] mb-5 font-semibold leading-tight\",\n                        children: (_category_data_ = category === null || category === void 0 ? void 0 : category.data[0]) === null || _category_data_ === void 0 ? void 0 : (_category_data__attributes = _category_data_.attributes) === null || _category_data__attributes === void 0 ? void 0 : _category_data__attributes.name\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0\",\n                    children: data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: product\n                        }, product.id, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                data.meta.pagination.total > maxResultCount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-3 items-center justify-center my-16 md:my-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500\",\n                            disabled: pageIndex === 1,\n                            onClick: ()=>setPageIndex(pageIndex - 1),\n                            children: \"Previous\"\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-bold\",\n                            children: \"\".concat(pageIndex, \" of \").concat(data && data.meta.pagination.pageCount)\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500\",\n                            disabled: pageIndex === (data && data.meta.pagination.pageCount),\n                            onClick: ()=>setPageIndex(pageIndex + 1),\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined),\n                isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/logo.svg\",\n                            width: 150\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-2xl font-medium\",\n                            children: \"Loading...\"\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/divya_vikash/Data/Projects/nike/client/pages/category/[slug].js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Category, \"4NQxvHzFKMsKHuRYStiV48wB5Ys=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Category;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeS9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDUjtBQUNJO0FBRVA7QUFDZjtBQUV6QixNQUFNTSxZQUFZO0FBRWxCLE1BQU1DLFdBQVcsU0FBa0M7UUFBakMsRUFBRUMsU0FBUSxFQUFFQyxTQUFRLEVBQUVDLEtBQUksRUFBRTtRQWVqQ0YsNkNBS0ZHOztJQW5CVCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxFQUFFTyxLQUFJLEVBQUVHLE1BQUssRUFBRUMsVUFBUyxFQUFFLEdBQUdWLCtDQUFNQSxDQUN2Qyw2REFBc0ZPLE9BQXpCRixNQUFLLHNCQUFzREosT0FBbENNLFdBQVUsMEJBQWtDLE9BQVZOLFlBQ3hISix3REFBZ0JBLEVBQ2hCO1FBQ0VjLFVBQVVQO0lBQ1o7SUFFRixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ2pCLDJEQUFPQTs7OEJBQ04sOERBQUNnQjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pWLENBQUFBLGtCQUFBQSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVHLElBQUksQ0FBQyxFQUFFLGNBQWpCSCw2QkFBQUEsS0FBQUEsSUFBQUEsOEJBQUFBLGdCQUFtQlcsZ0VBQW5CWCxLQUFBQSwrQkFBK0JZLElBQUY7Ozs7Ozs7Ozs7OzhCQUlsQyw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQ1pQLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsYUFBQUEsS0FBTUEsSUFBSSxjQUFWQSx3QkFBQUEsS0FBQUEsSUFBQUEsV0FBWVUsSUFBSSxDQUFDQyx3QkFDaEIsOERBQUN0QiwrREFBV0E7NEJBQWtCVyxNQUFNVzsyQkFBbEJBLFFBQVFDLEVBQUU7Ozs7Ozs7Ozs7Z0JBZS9CWixLQUFLYSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHQyxnQ0FDNUIsOERBQUNWO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ1U7NEJBQ0NWLFdBQVk7NEJBQ1pXLFVBQVVqQixjQUFjOzRCQUN4QmtCLFNBQVMsSUFBTWpCLGFBQWFELFlBQVk7c0NBQ3pDOzs7Ozs7c0NBSUQsOERBQUNtQjs0QkFBS2IsV0FBVTtzQ0FBYSxHQUMzQlAsT0FEOEJDLFdBQVUsUUFFekMsT0FEQ0QsUUFBUUEsS0FBS2EsSUFBSSxDQUFDQyxVQUFVLENBQUNPLFNBQVM7Ozs7OztzQ0FHeEMsOERBQUNKOzRCQUNDVixXQUFZOzRCQUNaVyxVQUFVakIsY0FBZUQsQ0FBQUEsUUFBUUEsS0FBS2EsSUFBSSxDQUFDQyxVQUFVLENBQUNPLFNBQVM7NEJBQy9ERixTQUFTLElBQU1qQixhQUFhRCxZQUFZO3NDQUN6Qzs7Ozs7Ozs7Ozs7O2dCQU1KRywyQkFDQyw4REFBQ0U7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDZTs0QkFBSUMsS0FBSTs0QkFBWUMsT0FBTzs7Ozs7O3NDQUM1Qiw4REFBQ0o7NEJBQUtiLFdBQVU7c0NBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uRDtHQXJFTVg7O1FBRytCRiwyQ0FBTUE7OztLQUhyQ0U7O0FBdUVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhdGVnb3J5L1tzbHVnXS5qcz9kNzcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3RDYXJkXCI7XG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiQC9jb21wb25lbnRzL1dyYXBwZXJcIjtcbmltcG9ydCB7IGZldGNoRGF0YUZyb21BUGkgfSBmcm9tIFwiQC91dGlscy9hcGlcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuY29uc3QgbWF4UmVzdWx0ID0gMztcblxuY29uc3QgQ2F0ZWdvcnkgPSAoeyBjYXRlZ29yeSwgcHJvZHVjdHMsIHNsdWcgfSkgPT4ge1xuICBjb25zdCBbcGFnZUluZGV4LCBzZXRQYWdlSW5kZXhdID0gdXNlU3RhdGUoMSk7XG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTV1IoXG4gICAgYC9hcGkvcHJvZHVjdHM/cG9wdWxhdGU9KiZbZmlsdGVyc11bY2F0ZWdvcmllc11bc2x1Z11bJGVxXT0ke3NsdWd9JnBhZ2luYXRpb25bcGFnZV09JHtwYWdlSW5kZXh9JnBhZ2luYXRpb25bcGFnZVNpemVdPSR7bWF4UmVzdWx0fWAsXG4gICAgZmV0Y2hEYXRhRnJvbUFQaSxcbiAgICB7XG4gICAgICBmYWxsYmFjazogcHJvZHVjdHMsXG4gICAgfVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnB5LTIwXCI+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy1bODAwcHhdIG14LWF1dG8gbXQtOCBtZDptdC0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyOHB4XSBtZDp0ZXh0LVszNHB4XSBtYi01IGZvbnQtc2VtaWJvbGQgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAge2NhdGVnb3J5Py5kYXRhWzBdPy5hdHRyaWJ1dGVzPy5uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIHByb2R1Y3RzIGdyaWQgc3RhcnQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNSBteS0xNCBweC01IG1kOnB4LTBcIj5cbiAgICAgICAgICB7ZGF0YT8uZGF0YT8ubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBkYXRhPXtwcm9kdWN0fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHsvKiA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmQgLz4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogcHJvZHVjdHMgZ3JpZCBlbmQgKi99XG5cbiAgICAgICAgey8qIFBBR0lOQVRJT04gQlVUVE9OUyBTVEFSVCAqL31cbiAgICAgICAge2RhdGEubWV0YS5wYWdpbmF0aW9uLnRvdGFsID4gbWF4UmVzdWx0Q291bnQgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXktMTYgbWQ6bXktMFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkIHB5LTIgcHgtNCBiZy1ibGFjayB0ZXh0LXdoaXRlIGRpc2FibGVkOmJnLWdyYXktMjAwIGRpc2FibGVkOnRleHQtZ3JheS01MDBgfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZUluZGV4ID09PSAxfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlSW5kZXgocGFnZUluZGV4IC0gMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByZXZpb3VzXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2Ake3BhZ2VJbmRleH0gb2YgJHtcbiAgICAgICAgICAgICAgZGF0YSAmJiBkYXRhLm1ldGEucGFnaW5hdGlvbi5wYWdlQ291bnRcbiAgICAgICAgICAgIH1gfTwvc3Bhbj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkIHB5LTIgcHgtNCBiZy1ibGFjayB0ZXh0LXdoaXRlIGRpc2FibGVkOmJnLWdyYXktMjAwIGRpc2FibGVkOnRleHQtZ3JheS01MDBgfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZUluZGV4ID09PSAoZGF0YSAmJiBkYXRhLm1ldGEucGFnaW5hdGlvbi5wYWdlQ291bnQpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlSW5kZXgocGFnZUluZGV4ICsgMSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5leHRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7LyogUEFHSU5BVElPTiBCVVRUT05TIEVORCAqL31cbiAgICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBiZy13aGl0ZS9bMC41XSBmbGV4IGZsZXgtY29sIGdhcC01IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby5zdmdcIiB3aWR0aD17MTUwfSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1tZWRpdW1cIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBhd2FpdCBmZXRjaERhdGFGcm9tQVBpKFwiL2FwaS9jYXRlZ29yaWVzP3BvcHVsYXRlPSpcIik7XG5cbiAgY29uc3QgcGF0aHMgPSBjYXRlZ29yeS5kYXRhLm1hcCgoQykgPT4gKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIHNsdWc6IEMuYXR0cmlidXRlcy5zbHVnLFxuICAgIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBzbHVnIH0gfSkgPT4ge1xuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGZldGNoRGF0YUZyb21BUGkoXG4gICAgYC9hcGkvY2F0ZWdvcmllcz9maWx0ZXJzW3NsdWddWyRlcV09JHtzbHVnfWBcbiAgKTtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZXRjaERhdGFGcm9tQVBpKFxuICAgIGAvYXBpL3Byb2R1Y3RzP3BvcHVsYXRlPSomW2ZpbHRlcnNdW2NhdGVnb3JpZXNdW3NsdWddWyRlcV09JHtzbHVnfSZwYWdpbmF0aW9uW3BhZ2VdPTEmcGFnaW5hdGlvbltwYWdlU2l6ZV09JHttYXhSZXN1bHR9YFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhdGVnb3J5LFxuICAgICAgcHJvZHVjdHMsXG4gICAgICBzbHVnLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIlByb2R1Y3RDYXJkIiwiV3JhcHBlciIsImZldGNoRGF0YUZyb21BUGkiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlU1dSIiwibWF4UmVzdWx0IiwiQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsInByb2R1Y3RzIiwic2x1ZyIsImRhdGEiLCJwYWdlSW5kZXgiLCJzZXRQYWdlSW5kZXgiLCJlcnJvciIsImlzTG9hZGluZyIsImZhbGxiYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJtZXRhIiwicGFnaW5hdGlvbiIsInRvdGFsIiwibWF4UmVzdWx0Q291bnQiLCJidXR0b24iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJzcGFuIiwicGFnZUNvdW50IiwiaW1nIiwic3JjIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/category/[slug].js\n"));

/***/ })

});