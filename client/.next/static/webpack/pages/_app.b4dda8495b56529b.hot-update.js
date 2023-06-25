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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wrapper */ \"./components/Wrapper.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ \"./components/Menu.jsx\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _MenuMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuMobile */ \"./components/MenuMobile.jsx\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/api */ \"./utils/api.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const [mobileMenu, setMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showCatMenu, setShowCatMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"translate-y-0\");\n    const [lastScrollY, setLastScrollY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const controlNavbar = ()=>{\n        if (window.scrollY > 200) {\n            if (window.scrollY > lastScrollY && !mobileMenu) {\n                setShow(\"-translate-y-[80px]\");\n            } else {\n                setShow(\"shadow-sm\");\n            }\n        } else {\n            setShow(\"translate-y-0\");\n        }\n        setLastScrollY(window.scrollY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", controlNavbar);\n        return ()=>{\n            window.removeEventListener(\"scroll\", controlNavbar);\n        };\n    }, [\n        lastScrollY\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCategories();\n    }, []);\n    const fetchCategories = async ()=>{\n        const { data  } = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_6__.fetchDataFromAPi)(\"/api/categories?populate=*\");\n        setCategories(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 \".concat(show),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Wrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"h-[60px] flex justify-between items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/logo.svg\",\n                        className: \"w-[40px] md:w-[60px]\"\n                    }, void 0, false, {\n                        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    showCatMenu: showCatMenu,\n                    setShowCatMenu: setShowCatMenu,\n                    categories: categories\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                mobileMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuMobile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    showCatMenu: showCatMenu,\n                    setShowCatMenu: setShowCatMenu,\n                    setMobileMenu: setMobileMenu\n                }, void 0, false, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-2 text-black\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_7__.IoMdHeartEmpty, {\n                                    className: \"text-[19px] md:text-[24px]\"\n                                }, void 0, false, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-12px] flex justify-center items-center px-[2px] md:px-[5px]\",\n                                    children: \"25\"\n                                }, void 0, false, {\n                                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/cart\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsCart, {\n                                        className: \"text-[15px] md:text-[20px]\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-12px] flex justify-center items-center px-[2px] md:px-[5px]\",\n                                        children: \"5\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2\",\n                            children: mobileMenu ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_9__.VscChromeClose, {\n                                className: \"text-[16px]\",\n                                onClick: ()=>setMobileMenu(false)\n                            }, void 0, false, {\n                                fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_10__.BiMenuAltRight, {\n                                className: \"text-[20px]\",\n                                onClick: ()=>setMobileMenu(true)\n                            }, void 0, false, {\n                                fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/divya_vikash/Data/Projects/nike/client/components/Header.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"PfMVyd5su0MIuK0gbyE9x+nfhuQ=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbkI7QUFFSDtBQUNIO0FBRXNCO0FBQ1I7QUFDUTtBQUNDO0FBQ1g7QUFFUztBQUUvQyxNQUFNWSxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2xELE1BQU0sQ0FBQ2EsYUFBYUMsZUFBZSxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sQ0FBQ2UsTUFBTUMsUUFBUSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDaUIsYUFBYUMsZUFBZSxHQUFHbEIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDbUIsWUFBWUMsY0FBYyxHQUFHcEIsK0NBQVFBLENBQUMsSUFBSTtJQUVqRCxNQUFNcUIsZ0JBQWdCLElBQU07UUFDMUIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLEtBQUs7WUFDeEIsSUFBSUQsT0FBT0MsT0FBTyxHQUFHTixlQUFlLENBQUNOLFlBQVk7Z0JBQy9DSyxRQUFRO1lBQ1YsT0FBTztnQkFDTEEsUUFBUTtZQUNWLENBQUM7UUFDSCxPQUFPO1lBQ0xBLFFBQVE7UUFDVixDQUFDO1FBQ0RFLGVBQWVJLE9BQU9DLE9BQU87SUFDL0I7SUFFQXhCLGdEQUFTQSxDQUFDLElBQU07UUFDZHVCLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBQ2xDLE9BQU8sSUFBTTtZQUNYQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN2QztJQUNGLEdBQUc7UUFBQ0o7S0FBWTtJQUVoQmxCLGdEQUFTQSxDQUFDLElBQU07UUFDZDJCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsa0JBQWtCLFVBQVk7UUFDbEMsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBRyxNQUFNbEIsNERBQWdCQSxDQUFDO1FBQ3hDVyxjQUFjTztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXLDhIQUFtSSxPQUFMZDtrQkFFekksNEVBQUNkLGdEQUFPQTtZQUFDNEIsV0FBVTs7OEJBQ2pCLDhEQUFDM0Isa0RBQUlBO29CQUFDNEIsTUFBSzs4QkFDVCw0RUFBQ0M7d0JBQUlDLEtBQUk7d0JBQVlILFdBQVU7Ozs7Ozs7Ozs7OzhCQUdqQyw4REFBQzFCLDZDQUFJQTtvQkFDSFUsYUFBYUE7b0JBQ2JDLGdCQUFnQkE7b0JBQ2hCSyxZQUFZQTs7Ozs7O2dCQUdiUiw0QkFDQyw4REFBQ0gsbURBQVVBO29CQUNUSyxhQUFhQTtvQkFDYkMsZ0JBQWdCQTtvQkFDaEJGLGVBQWVBOzs7Ozs7OEJBSW5CLDhEQUFDcUI7b0JBQUlKLFdBQVU7O3NDQUViLDhEQUFDSTs0QkFBSUosV0FBVTs7OENBQ2IsOERBQUN6QiwwREFBY0E7b0NBQUN5QixXQUFVOzs7Ozs7OENBQzFCLDhEQUFDSTtvQ0FBSUosV0FBVTs4Q0FBdU07Ozs7Ozs7Ozs7OztzQ0FPeE4sOERBQUMzQixrREFBSUE7NEJBQUM0QixNQUFLO3NDQUNULDRFQUFDRztnQ0FBSUosV0FBVTs7a0RBQ2IsOERBQUN4QixrREFBTUE7d0NBQUN3QixXQUFVOzs7Ozs7a0RBQ2xCLDhEQUFDSTt3Q0FBSUosV0FBVTtrREFBdU07Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQVExTiw4REFBQ0k7NEJBQUlKLFdBQVU7c0NBQ1psQiwyQkFDQyw4REFBQ0osMkRBQWNBO2dDQUNic0IsV0FBVTtnQ0FDVkssU0FBUyxJQUFNdEIsY0FBYyxLQUFLOzs7OzswREFHcEMsOERBQUNOLDJEQUFjQTtnQ0FDYnVCLFdBQVU7Z0NBQ1ZLLFNBQVMsSUFBTXRCLGNBQWMsSUFBSTs7Ozs7eUNBRXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0dBbEdNRjtLQUFBQTtBQW9HTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qc3g/NTY3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4vV3JhcHBlclwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9NZW51XCI7XG5cbmltcG9ydCB7IElvTWRIZWFydEVtcHR5IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgeyBCc0NhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IEJpTWVudUFsdFJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBWc2NDaHJvbWVDbG9zZSB9IGZyb20gXCJyZWFjdC1pY29ucy92c2NcIjtcbmltcG9ydCBNZW51TW9iaWxlIGZyb20gXCIuL01lbnVNb2JpbGVcIjtcblxuaW1wb3J0IHsgZmV0Y2hEYXRhRnJvbUFQaSB9IGZyb20gXCJAL3V0aWxzL2FwaVwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFttb2JpbGVNZW51LCBzZXRNb2JpbGVNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3dDYXRNZW51LCBzZXRTaG93Q2F0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKFwidHJhbnNsYXRlLXktMFwiKTtcbiAgY29uc3QgW2xhc3RTY3JvbGxZLCBzZXRMYXN0U2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgY29udHJvbE5hdmJhciA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiAyMDApIHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IGxhc3RTY3JvbGxZICYmICFtb2JpbGVNZW51KSB7XG4gICAgICAgIHNldFNob3coXCItdHJhbnNsYXRlLXktWzgwcHhdXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U2hvdyhcInNoYWRvdy1zbVwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2hvdyhcInRyYW5zbGF0ZS15LTBcIik7XG4gICAgfVxuICAgIHNldExhc3RTY3JvbGxZKHdpbmRvdy5zY3JvbGxZKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNvbnRyb2xOYXZiYXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjb250cm9sTmF2YmFyKTtcbiAgICB9O1xuICB9LCBbbGFzdFNjcm9sbFldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoQ2F0ZWdvcmllcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZmV0Y2hEYXRhRnJvbUFQaShcIi9hcGkvY2F0ZWdvcmllcz9wb3B1bGF0ZT0qXCIpO1xuICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyXG4gICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC1bNTBweF0gbWQ6aC1bODBweF0gYmctd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHotMjAgc3RpY2t5IHRvcC0wIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCAke3Nob3d9YH1cbiAgICA+XG4gICAgICA8V3JhcHBlciBjbGFzc05hbWU9XCJoLVs2MHB4XSBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnN2Z1wiIGNsYXNzTmFtZT1cInctWzQwcHhdIG1kOnctWzYwcHhdXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxNZW51XG4gICAgICAgICAgc2hvd0NhdE1lbnU9e3Nob3dDYXRNZW51fVxuICAgICAgICAgIHNldFNob3dDYXRNZW51PXtzZXRTaG93Q2F0TWVudX1cbiAgICAgICAgICBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfVxuICAgICAgICAvPlxuXG4gICAgICAgIHttb2JpbGVNZW51ICYmIChcbiAgICAgICAgICA8TWVudU1vYmlsZVxuICAgICAgICAgICAgc2hvd0NhdE1lbnU9e3Nob3dDYXRNZW51fVxuICAgICAgICAgICAgc2V0U2hvd0NhdE1lbnU9e3NldFNob3dDYXRNZW51fVxuICAgICAgICAgICAgc2V0TW9iaWxlTWVudT17c2V0TW9iaWxlTWVudX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1ibGFja1wiPlxuICAgICAgICAgIHsvKiBJY29uIHN0YXJ0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IG1kOnctMTIgaC04IG1kOmgtMTIgcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGhvdmVyOmJnLWJsYWNrL1swLjA1XSBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPElvTWRIZWFydEVtcHR5IGNsYXNzTmFtZT1cInRleHQtWzE5cHhdIG1kOnRleHQtWzI0cHhdXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTRweF0gbWQ6aC1bMThweF0gbWluLXctWzE0cHhdIG1kOm1pbi13LVsxOHB4XSByb3VuZGVkLWZ1bGwgYmctcmVkLTYwMCBhYnNvbHV0ZSB0b3AtMSBsZWZ0LTUgbWQ6bGVmdC03IHRleHQtd2hpdGUgdGV4dC1bMTBweF0gbWQ6dGV4dC0xMnB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC1bMnB4XSBtZDpweC1bNXB4XVwiPlxuICAgICAgICAgICAgICAyNVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIEljb24gZW5kICovfVxuXG4gICAgICAgICAgey8qIEljb24gc3RhcnQgKi99XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBtZDp3LTEyIGgtOCBtZDpoLTEyIHJvdW5kZWQtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1ibGFjay9bMC4wNV0gY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPEJzQ2FydCBjbGFzc05hbWU9XCJ0ZXh0LVsxNXB4XSBtZDp0ZXh0LVsyMHB4XVwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTRweF0gbWQ6aC1bMThweF0gbWluLXctWzE0cHhdIG1kOm1pbi13LVsxOHB4XSByb3VuZGVkLWZ1bGwgYmctcmVkLTYwMCBhYnNvbHV0ZSB0b3AtMSBsZWZ0LTUgbWQ6bGVmdC03IHRleHQtd2hpdGUgdGV4dC1bMTBweF0gbWQ6dGV4dC0xMnB4XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweC1bMnB4XSBtZDpweC1bNXB4XVwiPlxuICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgey8qIEljb24gZW5kICovfVxuXG4gICAgICAgICAgey8qIE1vYmlsZSBpY29uIHN0YXJ0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IG1kOnctMTIgaC04IG1kOmgtMTIgcm91bmRlZC1mdWxsIGZsZXggbWQ6aGlkZGVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1ibGFjay9bMC4wNV0gY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUgLW1yLTJcIj5cbiAgICAgICAgICAgIHttb2JpbGVNZW51ID8gKFxuICAgICAgICAgICAgICA8VnNjQ2hyb21lQ2xvc2VcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudShmYWxzZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QmlNZW51QWx0UmlnaHRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LVsyMHB4XVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudSh0cnVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXcmFwcGVyIiwiTGluayIsIk1lbnUiLCJJb01kSGVhcnRFbXB0eSIsIkJzQ2FydCIsIkJpTWVudUFsdFJpZ2h0IiwiVnNjQ2hyb21lQ2xvc2UiLCJNZW51TW9iaWxlIiwiZmV0Y2hEYXRhRnJvbUFQaSIsIkhlYWRlciIsIm1vYmlsZU1lbnUiLCJzZXRNb2JpbGVNZW51Iiwic2hvd0NhdE1lbnUiLCJzZXRTaG93Q2F0TWVudSIsInNob3ciLCJzZXRTaG93IiwibGFzdFNjcm9sbFkiLCJzZXRMYXN0U2Nyb2xsWSIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiY29udHJvbE5hdmJhciIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZldGNoQ2F0ZWdvcmllcyIsImRhdGEiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJocmVmIiwiaW1nIiwic3JjIiwiZGl2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.jsx\n"));

/***/ })

});