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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _contractFunctions_getAvaiableAddresses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contractFunctions/getAvaiableAddresses */ \"(app-pages-browser)/./contractFunctions/getAvaiableAddresses.ts\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ActiveProposal = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    const [availableAddresses, setAvailableAddresses] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [lengthOfAddress, setLengthOfAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getActiveProposal = async ()=>{\n            try {\n                const response = await (0,_contractFunctions_getAvaiableAddresses__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                console.log(response);\n                setLengthOfAddress(Object.keys(response).filter((key)=>!isNaN(key)).length);\n            } catch (error) {\n                console.log(\"error\", error);\n            }\n        };\n        getActiveProposal();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen bg-[#F5F5F5]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center pt-10 text-[#333333]\",\n                children: \"Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[#333333]\",\n                children: \"All available addresses\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-center items-center absolute top-2/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Addresses\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Addresses\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Addresses\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/app/available-address/page.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ActiveProposal, \"ETjjUAvgczmJfgn4SNBTIRVc2dE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ActiveProposal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProposal);\nvar _c;\n$RefreshReg$(_c, \"ActiveProposal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hdmFpbGFibGUtYWRkcmVzcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBb0Q7O0FBRUQ7QUFJUDtBQUNpQztBQVE3RSxNQUFNSyxpQkFBaUI7O0lBQ3JCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsOERBQThEO0lBQzlELE1BQU0sQ0FBQ08sb0JBQW9CQyxzQkFBc0IsR0FBR1IsK0NBQVFBLENBQU0sRUFBRTtJQUNwRSxNQUFNLENBQUNTLGlCQUFpQkMsbUJBQW1CLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXZERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLG9CQUFvQjtZQUN4QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVYsbUZBQXFCQTtnQkFDNUNXLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1pGLG1CQUFtQkssT0FBT0MsSUFBSSxDQUFDSixVQUFVSyxNQUFNLENBQUNDLENBQUFBLE1BQU8sQ0FBQ0MsTUFBTUQsTUFBTUUsTUFBTTtZQUM1RSxFQUFFLE9BQU9DLE9BQU87Z0JBQ2RSLFFBQVFDLEdBQUcsQ0FBQyxTQUFTTztZQUN2QjtRQUNGO1FBQ0FWO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBc0Q7Ozs7OzswQkFHcEUsOERBQUNFO2dCQUFFRixXQUFVOzBCQUE2Qjs7Ozs7OzBCQUUxQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBYzs7Ozs7O2tDQUMzQiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQWM7Ozs7OztrQ0FDM0IsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkM7R0FsQ01wQjs7UUFDV0Ysc0RBQVNBOzs7S0FEcEJFO0FBb0NOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hdmFpbGFibGUtYWRkcmVzcy9wYWdlLnRzeD8xMmZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB9IGZyb20gXCJAbWV0YW1hc2svcHJvdmlkZXJzXCI7XG5pbXBvcnQgc2V0dXAgZnJvbSBcIi4uLy4uL3V0aWxzL2RldGVjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IGdldEF2YWlsYWJsZUFkZHJlc3NlcyBmcm9tIFwiQC9jb250cmFjdEZ1bmN0aW9ucy9nZXRBdmFpYWJsZUFkZHJlc3Nlc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIEV0aGVyZXVtPzogTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcbiAgfVxufVxuXG5jb25zdCBBY3RpdmVQcm9wb3NhbCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBjb25zdCBbYXZhaWxhYmxlQWRkcmVzc2VzLCBzZXRBdmFpbGFibGVBZGRyZXNzZXNdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gIGNvbnN0IFtsZW5ndGhPZkFkZHJlc3MsIHNldExlbmd0aE9mQWRkcmVzc10gPSB1c2VTdGF0ZSgwKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvcG9zYWwgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEF2YWlsYWJsZUFkZHJlc3NlcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHNldExlbmd0aE9mQWRkcmVzcyhPYmplY3Qua2V5cyhyZXNwb25zZSkuZmlsdGVyKGtleSA9PiAhaXNOYU4oa2V5KSkubGVuZ3RoKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXRBY3RpdmVQcm9wb3NhbCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuIGJnLVsjRjVGNUY1XVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBwdC0xMCB0ZXh0LVsjMzMzMzMzXVwiPlxuICAgICAgICBFbnZveSBUcmFjZWFiaWxpdHkgU3lzdGVtXG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1bIzMzMzMzM11cIj5BbGwgYXZhaWxhYmxlIGFkZHJlc3NlczwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGFic29sdXRlIHRvcC0yLzRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BZGRyZXNzZXM8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWRkcmVzc2VzPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFkZHJlc3NlczwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlUHJvcG9zYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImdldEF2YWlsYWJsZUFkZHJlc3NlcyIsIkFjdGl2ZVByb3Bvc2FsIiwicm91dGVyIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJhdmFpbGFibGVBZGRyZXNzZXMiLCJzZXRBdmFpbGFibGVBZGRyZXNzZXMiLCJsZW5ndGhPZkFkZHJlc3MiLCJzZXRMZW5ndGhPZkFkZHJlc3MiLCJnZXRBY3RpdmVQcm9wb3NhbCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJpc05hTiIsImxlbmd0aCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/available-address/page.tsx\n"));

/***/ })

});