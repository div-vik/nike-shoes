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

/***/ "./store/cartSlice.js":
/*!****************************!*\
  !*** ./store/cartSlice.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": function() { return /* binding */ addToCart; },\n/* harmony export */   \"cartSlice\": function() { return /* binding */ cartSlice; },\n/* harmony export */   \"updateCart\": function() { return /* binding */ updateCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState: {\n        cartItems: []\n    },\n    reducers: {\n        addToCart: (state, action)=>{\n            const item = state.cartItems.find((p)=>p.id === action.payload.id);\n            if (item) {\n                item.quantity++;\n                item.attributes.price = item.oneQuantityPrice * item.quantity;\n            } else {\n                state.cartItems.push({\n                    ...action.payload,\n                    quantity: 1\n                });\n            }\n        },\n        updateCart: (state, action)=>{\n            state.cartItems = state.cartItems.map((p)=>{\n                if (p.id === action.payload.id) {\n                    if (action.payload.key === \"quantity\") {\n                        p.attributes.price = p.oneQuantityPrice * action.payload.val;\n                    }\n                    return {\n                        ...p,\n                        [action.payload.key]: action.payload.val\n                    };\n                }\n                return p;\n            });\n        },\n        removeFromCart: (state, action)=>{\n            state.cartItems = state.cartItems.filter((p)=>p.id !== action.payload.id);\n        }\n    }\n});\n// Action creators are generated for each case reducer function\nconst { addToCart , updateCart  } = cartSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jYXJ0U2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUV4QyxNQUFNQyxZQUFZRCw2REFBV0EsQ0FBQztJQUNuQ0UsTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLFdBQVcsRUFBRTtJQUNmO0lBQ0FDLFVBQVU7UUFDUkMsV0FBVyxDQUFDQyxPQUFPQyxTQUFXO1lBQzVCLE1BQU1DLE9BQU9GLE1BQU1ILFNBQVMsQ0FBQ00sSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLEVBQUUsS0FBS0osT0FBT0ssT0FBTyxDQUFDRCxFQUFFO1lBQ25FLElBQUlILE1BQU07Z0JBQ1JBLEtBQUtLLFFBQVE7Z0JBQ2JMLEtBQUtNLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHUCxLQUFLUSxnQkFBZ0IsR0FBR1IsS0FBS0ssUUFBUTtZQUMvRCxPQUFPO2dCQUNMUCxNQUFNSCxTQUFTLENBQUNjLElBQUksQ0FBQztvQkFBRSxHQUFHVixPQUFPSyxPQUFPO29CQUFFQyxVQUFVO2dCQUFFO1lBQ3hELENBQUM7UUFDSDtRQUNBSyxZQUFZLENBQUNaLE9BQU9DLFNBQVc7WUFDN0JELE1BQU1ILFNBQVMsR0FBR0csTUFBTUgsU0FBUyxDQUFDZ0IsR0FBRyxDQUFDLENBQUNULElBQU07Z0JBQzNDLElBQUlBLEVBQUVDLEVBQUUsS0FBS0osT0FBT0ssT0FBTyxDQUFDRCxFQUFFLEVBQUU7b0JBQzlCLElBQUlKLE9BQU9LLE9BQU8sQ0FBQ1EsR0FBRyxLQUFLLFlBQVk7d0JBQ3JDVixFQUFFSSxVQUFVLENBQUNDLEtBQUssR0FBR0wsRUFBRU0sZ0JBQWdCLEdBQUdULE9BQU9LLE9BQU8sQ0FBQ1MsR0FBRztvQkFDOUQsQ0FBQztvQkFDRCxPQUFPO3dCQUFFLEdBQUdYLENBQUM7d0JBQUUsQ0FBQ0gsT0FBT0ssT0FBTyxDQUFDUSxHQUFHLENBQUMsRUFBRWIsT0FBT0ssT0FBTyxDQUFDUyxHQUFHO29CQUFDO2dCQUMxRCxDQUFDO2dCQUNELE9BQU9YO1lBQ1Q7UUFDRjtRQUNBWSxnQkFBZ0IsQ0FBQ2hCLE9BQU9DLFNBQVc7WUFDakNELE1BQU1ILFNBQVMsR0FBR0csTUFBTUgsU0FBUyxDQUFDb0IsTUFBTSxDQUN0QyxDQUFDYixJQUFNQSxFQUFFQyxFQUFFLEtBQUtKLE9BQU9LLE9BQU8sQ0FBQ0QsRUFBRTtRQUVyQztJQUNGO0FBQ0YsR0FBRztBQUVILCtEQUErRDtBQUN4RCxNQUFNLEVBQUVOLFVBQVMsRUFBRWEsV0FBVSxFQUFFLEdBQUdsQixVQUFVd0IsT0FBTyxDQUFDO0FBRTNELCtEQUFleEIsVUFBVXlCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9jYXJ0U2xpY2UuanM/NWE1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmV4cG9ydCBjb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FydFwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBjYXJ0SXRlbXM6IFtdLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIGFkZFRvQ2FydDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5jYXJ0SXRlbXMuZmluZCgocCkgPT4gcC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgaXRlbS5xdWFudGl0eSsrO1xuICAgICAgICBpdGVtLmF0dHJpYnV0ZXMucHJpY2UgPSBpdGVtLm9uZVF1YW50aXR5UHJpY2UgKiBpdGVtLnF1YW50aXR5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUuY2FydEl0ZW1zLnB1c2goeyAuLi5hY3Rpb24ucGF5bG9hZCwgcXVhbnRpdHk6IDEgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVDYXJ0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuY2FydEl0ZW1zID0gc3RhdGUuY2FydEl0ZW1zLm1hcCgocCkgPT4ge1xuICAgICAgICBpZiAocC5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpIHtcbiAgICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQua2V5ID09PSBcInF1YW50aXR5XCIpIHtcbiAgICAgICAgICAgIHAuYXR0cmlidXRlcy5wcmljZSA9IHAub25lUXVhbnRpdHlQcmljZSAqIGFjdGlvbi5wYXlsb2FkLnZhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgLi4ucCwgW2FjdGlvbi5wYXlsb2FkLmtleV06IGFjdGlvbi5wYXlsb2FkLnZhbCB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICByZW1vdmVGcm9tQ2FydDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmNhcnRJdGVtcyA9IHN0YXRlLmNhcnRJdGVtcy5maWx0ZXIoXG4gICAgICAgIChwKSA9PiBwLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgKTtcbiAgICB9LFxuICB9LFxufSk7XG5cbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxuZXhwb3J0IGNvbnN0IHsgYWRkVG9DYXJ0LCB1cGRhdGVDYXJ0IH0gPSBjYXJ0U2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjYXJ0U2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiY2FydEl0ZW1zIiwicmVkdWNlcnMiLCJhZGRUb0NhcnQiLCJzdGF0ZSIsImFjdGlvbiIsIml0ZW0iLCJmaW5kIiwicCIsImlkIiwicGF5bG9hZCIsInF1YW50aXR5IiwiYXR0cmlidXRlcyIsInByaWNlIiwib25lUXVhbnRpdHlQcmljZSIsInB1c2giLCJ1cGRhdGVDYXJ0IiwibWFwIiwia2V5IiwidmFsIiwicmVtb3ZlRnJvbUNhcnQiLCJmaWx0ZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/cartSlice.js\n"));

/***/ })

});