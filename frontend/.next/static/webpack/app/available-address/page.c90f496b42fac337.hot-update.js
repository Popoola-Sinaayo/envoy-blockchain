"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/available-address/page",{

/***/ "(app-pages-browser)/./app/available-address/page.tsx":
/*!****************************************!*\
  !*** ./app/available-address/page.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _contractFunctions_getAvaiableAddresses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contractFunctions/getAvaiableAddresses */ \"(app-pages-browser)/./contractFunctions/getAvaiableAddresses.ts\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ActiveProposal = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    const [availableAddresses, setAvailableAddresses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [lengthOfAddress, setLengthOfAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getActiveProposal = async ()=>{\n            try {\n                const response = await (0,_contractFunctions_getAvaiableAddresses__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                console.log(response);\n                setLengthOfAddress(Object.keys(response).filter((key)=>!isNaN(key)).length);\n            } catch (error) {\n                console.log(\"error\", error);\n            }\n        };\n        getActiveProposal();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen bg-[#F5F5F5]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center pt-10 text-[#333333]\",\n                children: \"Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[#333333]\",\n                children: \"All available addresses\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-center items-center absolute top-2/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Addresses\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Addresses\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Addresses\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ActiveProposal, \"oEciGqG4c8HchIIzeGMlN1S20Vg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ActiveProposal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProposal);\nvar _c;\n$RefreshReg$(_c, \"ActiveProposal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdmFpbGFibGUtYWRkcmVzcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBb0Q7O0FBRUQ7QUFJUDtBQUNpQztBQVE3RSxNQUFNSyxpQkFBaUI7O0lBQ3JCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsOERBQThEO0lBQzlELE1BQU0sQ0FBQ08sb0JBQW9CQyxzQkFBc0IsR0FBR1IsK0NBQVFBO0lBQzVELE1BQU0sQ0FBQ1MsaUJBQWlCQyxtQkFBbUIsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksb0JBQW9CO1lBQ3hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNVixtRkFBcUJBO2dCQUM1Q1csUUFBUUMsR0FBRyxDQUFDRjtnQkFDWkYsbUJBQW1CSyxPQUFPQyxJQUFJLENBQUNKLFVBQVVLLE1BQU0sQ0FBQyxDQUFDQyxNQUFhLENBQUNDLE1BQU1ELE1BQU1FLE1BQU07WUFFbkYsRUFBRSxPQUFPQyxPQUFPO2dCQUNkUixRQUFRQyxHQUFHLENBQUMsU0FBU087WUFDdkI7UUFDRjtRQUNBVjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNEOzs7Ozs7MEJBR3BFLDhEQUFDRTtnQkFBRUYsV0FBVTswQkFBNkI7Ozs7OzswQkFFMUMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQWM7Ozs7OztrQ0FDM0IsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFjOzs7Ozs7a0NBQzNCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DO0dBbkNNcEI7O1FBQ1dGLHNEQUFTQTs7O0tBRHBCRTtBQXFDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYXZhaWxhYmxlLWFkZHJlc3MvcGFnZS50c3g/MTJmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgfSBmcm9tIFwiQG1ldGFtYXNrL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHNldHVwIGZyb20gXCIuLi8uLi91dGlscy9kZXRlY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBnZXRBdmFpbGFibGVBZGRyZXNzZXMgZnJvbSBcIkAvY29udHJhY3RGdW5jdGlvbnMvZ2V0QXZhaWFibGVBZGRyZXNzZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBFdGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3QgQWN0aXZlUHJvcG9zYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgY29uc3QgW2F2YWlsYWJsZUFkZHJlc3Nlcywgc2V0QXZhaWxhYmxlQWRkcmVzc2VzXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW2xlbmd0aE9mQWRkcmVzcywgc2V0TGVuZ3RoT2ZBZGRyZXNzXSA9IHVzZVN0YXRlKDApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRBY3RpdmVQcm9wb3NhbCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QXZhaWxhYmxlQWRkcmVzc2VzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgc2V0TGVuZ3RoT2ZBZGRyZXNzKE9iamVjdC5rZXlzKHJlc3BvbnNlKS5maWx0ZXIoKGtleTogYW55KSA9PiAhaXNOYU4oa2V5KSkubGVuZ3RoKVxuXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldEFjdGl2ZVByb3Bvc2FsKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1zY3JlZW4gYmctWyNGNUY1RjVdXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHB0LTEwIHRleHQtWyMzMzMzMzNdXCI+XG4gICAgICAgIEVudm95IFRyYWNlYWJpbGl0eSBTeXN0ZW1cbiAgICAgIDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LVsjMzMzMzMzXVwiPkFsbCBhdmFpbGFibGUgYWRkcmVzc2VzPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgdG9wLTIvNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFkZHJlc3NlczwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BZGRyZXNzZXM8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWRkcmVzc2VzPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVQcm9wb3NhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiZ2V0QXZhaWxhYmxlQWRkcmVzc2VzIiwiQWN0aXZlUHJvcG9zYWwiLCJyb3V0ZXIiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImF2YWlsYWJsZUFkZHJlc3NlcyIsInNldEF2YWlsYWJsZUFkZHJlc3NlcyIsImxlbmd0aE9mQWRkcmVzcyIsInNldExlbmd0aE9mQWRkcmVzcyIsImdldEFjdGl2ZVByb3Bvc2FsIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImZpbHRlciIsImtleSIsImlzTmFOIiwibGVuZ3RoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/available-address/page.tsx\n"));

/***/ })

});