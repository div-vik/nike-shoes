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

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\n\nconst data = [\n    {\n        id: 1,\n        name: \"Home\",\n        url: \"/\"\n    },\n    {\n        id: 2,\n        name: \"About\",\n        url: \"/about\"\n    },\n    {\n        id: 3,\n        name: \"Categories\",\n        subMenu: true\n    },\n    {\n        id: 4,\n        name: \"Contact\",\n        url: \"/contact\"\n    }\n];\nconst subMenuData = [\n    {\n        id: 1,\n        name: \"Jordan\",\n        doc_count: 11\n    },\n    {\n        id: 2,\n        name: \"Sneakers\",\n        doc_count: 8\n    },\n    {\n        id: 3,\n        name: \"Running shoes\",\n        doc_count: 64\n    },\n    {\n        id: 4,\n        name: \"Football shoes\",\n        doc_count: 107\n    }\n];\nconst Menu = (param)=>{\n    let { showCatMenu , setShowCatMenu  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"hidden md:flex items-center gap-8 font-medium text-black\",\n        children: data.map((item)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n                children: !!(item === null || item === void 0 ? void 0 : item.subMenu) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor-pointer flex items-center gap-2 relative\",\n                    onMouseEnter: ()=>setShowCatMenu(true),\n                    onMouseLeave: ()=>setShowCatMenu(false),\n                    children: [\n                        item.name,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsChevronDown, {\n                            size: 14\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, undefined),\n                        showCatMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg\",\n                            children: subMenuData.map((submenu)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md\",\n                                        children: [\n                                            submenu.name,\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"opacity-50 text-sm\",\n                                                children: \"5\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 27\n                                    }, undefined)\n                                }, submenu.id, false, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 19\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"cursor-pointer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: item === null || item === void 0 ? void 0 : item.url,\n                        children: item.name\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 15\n                }, undefined)\n            }, item.id, false, {\n                fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n                lineNumber: 24,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Menu.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE2QjtBQUNIO0FBQ3FCO0FBRS9DLE1BQU1HLE9BQU87SUFDWDtRQUFFQyxJQUFJO1FBQUdDLE1BQU07UUFBUUMsS0FBSztJQUFJO0lBQ2hDO1FBQUVGLElBQUk7UUFBR0MsTUFBTTtRQUFTQyxLQUFLO0lBQVM7SUFDdEM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQWNFLFNBQVMsSUFBSTtJQUFDO0lBQzNDO1FBQUVILElBQUk7UUFBR0MsTUFBTTtRQUFXQyxLQUFLO0lBQVc7Q0FDM0M7QUFFRCxNQUFNRSxjQUFjO0lBQ2xCO1FBQUVKLElBQUk7UUFBR0MsTUFBTTtRQUFVSSxXQUFXO0lBQUc7SUFDdkM7UUFBRUwsSUFBSTtRQUFHQyxNQUFNO1FBQVlJLFdBQVc7SUFBRTtJQUN4QztRQUFFTCxJQUFJO1FBQUdDLE1BQU07UUFBaUJJLFdBQVc7SUFBRztJQUM5QztRQUFFTCxJQUFJO1FBQUdDLE1BQU07UUFBa0JJLFdBQVc7SUFBSTtDQUNqRDtBQUVELE1BQU1DLE9BQU8sU0FBcUM7UUFBcEMsRUFBRUMsWUFBVyxFQUFFQyxlQUFjLEVBQUU7SUFDM0MscUJBQ0UsOERBQUNDO1FBQUdDLFdBQVU7a0JBQ1hYLEtBQUtZLEdBQUcsQ0FBQyxDQUFDQyxPQUFTO1lBQ2xCLHFCQUNFLDhEQUFDZix1REFBYzswQkFDWixDQUFDLENBQUNlLENBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVQsT0FBTyxrQkFDZCw4REFBQ1c7b0JBQ0NKLFdBQVU7b0JBQ1ZLLGNBQWMsSUFBTVAsZUFBZSxJQUFJO29CQUN2Q1EsY0FBYyxJQUFNUixlQUFlLEtBQUs7O3dCQUV2Q0ksS0FBS1gsSUFBSTtzQ0FDViw4REFBQ0gseURBQWFBOzRCQUFDbUIsTUFBTTs7Ozs7O3dCQUVwQlYsNkJBQ0MsOERBQUNFOzRCQUFHQyxXQUFVO3NDQUNYTixZQUFZTyxHQUFHLENBQUMsQ0FBQ08sVUFBWTtnQ0FDNUIscUJBQ0UsOERBQUN0QixrREFBSUE7b0NBQWtCdUIsTUFBSzs4Q0FDMUIsNEVBQUNMO3dDQUFHSixXQUFVOzs0Q0FDWFEsUUFBUWpCLElBQUk7MERBQ2IsOERBQUNtQjtnREFBS1YsV0FBVTswREFBcUI7Ozs7Ozs7Ozs7OzttQ0FIOUJRLFFBQVFsQixFQUFFOzs7Ozs0QkFPekI7Ozs7Ozs7Ozs7OzhDQUtOLDhEQUFDYztvQkFBR0osV0FBVTs4QkFDWiw0RUFBQ2Qsa0RBQUlBO3dCQUFDdUIsTUFBTVAsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVixHQUFHO2tDQUFHVSxLQUFLWCxJQUFJOzs7Ozs7Ozs7OzZCQUVwQztlQTdCa0JXLEtBQUtaLEVBQUU7Ozs7O1FBZ0NoQzs7Ozs7O0FBR047S0F4Q01NO0FBMENOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVudS5qc3g/Yjg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCc0NoZXZyb25Eb3duIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHsgaWQ6IDEsIG5hbWU6IFwiSG9tZVwiLCB1cmw6IFwiL1wiIH0sXG4gIHsgaWQ6IDIsIG5hbWU6IFwiQWJvdXRcIiwgdXJsOiBcIi9hYm91dFwiIH0sXG4gIHsgaWQ6IDMsIG5hbWU6IFwiQ2F0ZWdvcmllc1wiLCBzdWJNZW51OiB0cnVlIH0sXG4gIHsgaWQ6IDQsIG5hbWU6IFwiQ29udGFjdFwiLCB1cmw6IFwiL2NvbnRhY3RcIiB9LFxuXTtcblxuY29uc3Qgc3ViTWVudURhdGEgPSBbXG4gIHsgaWQ6IDEsIG5hbWU6IFwiSm9yZGFuXCIsIGRvY19jb3VudDogMTEgfSxcbiAgeyBpZDogMiwgbmFtZTogXCJTbmVha2Vyc1wiLCBkb2NfY291bnQ6IDggfSxcbiAgeyBpZDogMywgbmFtZTogXCJSdW5uaW5nIHNob2VzXCIsIGRvY19jb3VudDogNjQgfSxcbiAgeyBpZDogNCwgbmFtZTogXCJGb290YmFsbCBzaG9lc1wiLCBkb2NfY291bnQ6IDEwNyB9LFxuXTtcblxuY29uc3QgTWVudSA9ICh7IHNob3dDYXRNZW51LCBzZXRTaG93Q2F0TWVudSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtOCBmb250LW1lZGl1bSB0ZXh0LWJsYWNrXCI+XG4gICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIHshIWl0ZW0/LnN1Yk1lbnUgPyAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNob3dDYXRNZW51KHRydWUpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2hvd0NhdE1lbnUoZmFsc2UpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICA8QnNDaGV2cm9uRG93biBzaXplPXsxNH0gLz5cblxuICAgICAgICAgICAgICAgIHtzaG93Q2F0TWVudSAmJiAoXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmctd2hpdGUgYWJzb2x1dGUgdG9wLTYgbGVmdC0wIG1pbi13LVsyNTBweF0gcHgtMSBweS0xIHRleHQtYmxhY2sgc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJNZW51RGF0YS5tYXAoKHN1Ym1lbnUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtzdWJtZW51LmlkfSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaC0xMiBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtMyBob3ZlcjpiZy1ibGFjay9bMC4wM10gcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJtZW51Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3BhY2l0eS01MCB0ZXh0LXNtXCI+NTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0/LnVybH0+e2l0ZW0ubmFtZX08L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJCc0NoZXZyb25Eb3duIiwiZGF0YSIsImlkIiwibmFtZSIsInVybCIsInN1Yk1lbnUiLCJzdWJNZW51RGF0YSIsImRvY19jb3VudCIsIk1lbnUiLCJzaG93Q2F0TWVudSIsInNldFNob3dDYXRNZW51IiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiRnJhZ21lbnQiLCJsaSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInNpemUiLCJzdWJtZW51IiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n"));

/***/ })

});