"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/active-proposal/page",{

/***/ "(app-pages-browser)/./app/active-proposal/page.tsx":
/*!**************************************!*\
  !*** ./app/active-proposal/page.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _contractFunctions_getCurrrentProposal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contractFunctions/getCurrrentProposal */ \"(app-pages-browser)/./contractFunctions/getCurrrentProposal.ts\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ActiveProposal = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [activeProposal, setActiveProposal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        address: \"\"\n    });\n    // const [errorMessage, setErrorMessage] = useState(\"\");\n    // const [defaultAccount, setDefaultAccount] = useState(\"\");\n    // const [userBalance, setUserBalance] = useState(\"\");\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    // const getuserBalance = async (address: string) => {\n    //   const provider = new ethers.BrowserProvider(window.Ethereum!);\n    //   const balance = await provider.getBalance(address, \"latest\");\n    //   return balance;\n    // };\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    // const accountChangedHandler = async (newAccount: any) => {\n    //   const address = await newAccount.getAddress();\n    //   setDefaultAccount(address);\n    //   const balance = await newAccount.getBalance();\n    //   setUserBalance(ethers.formatEther(balance));\n    //   await getuserBalance(address);\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getActiveProposal = async ()=>{\n            try {\n                const response = await (0,_contractFunctions_getCurrrentProposal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                console.log(response);\n                console.log(response[0]);\n                console.log(response[1]);\n                console.log(Number(response[2]));\n                console.log(Number(response[3]));\n                console.log(response[4]);\n            } catch (error) {\n                console.log(\"error\", error);\n            }\n        };\n        getActiveProposal();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen bg-[#F5F5F5]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center pt-10 text-[#333333]\",\n                children: \"Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[#333333]\",\n                children: \"Active Proposal\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-center items-center absolute top-2/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ActiveProposal, \"I2qF7es0S0InQ/ZWLOI+5jG8cus=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ActiveProposal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProposal);\nvar _c;\n$RefreshReg$(_c, \"ActiveProposal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hY3RpdmUtcHJvcG9zYWwvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQW9EOztBQUVEO0FBSVA7QUFDNkI7QUFRekUsTUFBTUssaUJBQWlCOztJQUNyQixNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQUM7UUFDbkRTLE1BQU07UUFDTkMsU0FBUztJQUNYO0lBQ0Esd0RBQXdEO0lBQ3hELDREQUE0RDtJQUM1RCxzREFBc0Q7SUFDdEQsOERBQThEO0lBRTlELHNEQUFzRDtJQUN0RCxtRUFBbUU7SUFDbkUsa0VBQWtFO0lBQ2xFLG9CQUFvQjtJQUNwQixLQUFLO0lBQ0wsOERBQThEO0lBQzlELDZEQUE2RDtJQUM3RCxtREFBbUQ7SUFDbkQsZ0NBQWdDO0lBQ2hDLG1EQUFtRDtJQUNuRCxpREFBaUQ7SUFDakQsbUNBQW1DO0lBQ25DLEtBQUs7SUFDTFgsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxvQkFBb0I7WUFDeEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1WLGtGQUFrQkE7Z0JBQ3pDVyxRQUFRQyxHQUFHLENBQUNGO2dCQUNaQyxRQUFRQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxFQUFFO2dCQUN2QkMsUUFBUUMsR0FBRyxDQUFDRixRQUFRLENBQUMsRUFBRTtnQkFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBT0gsUUFBUSxDQUFDLEVBQUU7Z0JBQzlCQyxRQUFRQyxHQUFHLENBQUNDLE9BQU9ILFFBQVEsQ0FBQyxFQUFFO2dCQUM5QkMsUUFBUUMsR0FBRyxDQUFDRixRQUFRLENBQUMsRUFBRTtZQUN6QixFQUFFLE9BQU9JLE9BQU87Z0JBQ2RILFFBQVFDLEdBQUcsQ0FBQyxTQUFTRTtZQUN2QjtRQUNGO1FBQ0FMO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzRDs7Ozs7OzBCQUdwRSw4REFBQ0U7Z0JBQUVGLFdBQVU7MEJBQTZCOzs7Ozs7MEJBRTFDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFjOzs7Ozs7a0NBQzNCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBYzs7Ozs7O2tDQUMzQiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCbkM7R0FuRU1mOztRQUNXRixzREFBU0E7OztLQURwQkU7QUFxRU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FjdGl2ZS1wcm9wb3NhbC9wYWdlLnRzeD8yODNjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB9IGZyb20gXCJAbWV0YW1hc2svcHJvdmlkZXJzXCI7XG5pbXBvcnQgc2V0dXAgZnJvbSBcIi4uLy4uL3V0aWxzL2RldGVjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IGdldEN1cnJlbnRQcm9wb3NhbCBmcm9tIFwiQC9jb250cmFjdEZ1bmN0aW9ucy9nZXRDdXJycmVudFByb3Bvc2FsXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgRXRoZXJldW0/OiBNZXRhTWFza0lucGFnZVByb3ZpZGVyO1xuICB9XG59XG5cbmNvbnN0IEFjdGl2ZVByb3Bvc2FsID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2FjY291bnQsIHNldEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthY3RpdmVQcm9wb3NhbCwgc2V0QWN0aXZlUHJvcG9zYWxdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgYWRkcmVzczogXCJcIixcbiAgfSk7XG4gIC8vIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gY29uc3QgW2RlZmF1bHRBY2NvdW50LCBzZXREZWZhdWx0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gY29uc3QgW3VzZXJCYWxhbmNlLCBzZXRVc2VyQmFsYW5jZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblxuICAvLyBjb25zdCBnZXR1c2VyQmFsYW5jZSA9IGFzeW5jIChhZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgLy8gICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMuQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5FdGhlcmV1bSEpO1xuICAvLyAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBwcm92aWRlci5nZXRCYWxhbmNlKGFkZHJlc3MsIFwibGF0ZXN0XCIpO1xuICAvLyAgIHJldHVybiBiYWxhbmNlO1xuICAvLyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAvLyBjb25zdCBhY2NvdW50Q2hhbmdlZEhhbmRsZXIgPSBhc3luYyAobmV3QWNjb3VudDogYW55KSA9PiB7XG4gIC8vICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IG5ld0FjY291bnQuZ2V0QWRkcmVzcygpO1xuICAvLyAgIHNldERlZmF1bHRBY2NvdW50KGFkZHJlc3MpO1xuICAvLyAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBuZXdBY2NvdW50LmdldEJhbGFuY2UoKTtcbiAgLy8gICBzZXRVc2VyQmFsYW5jZShldGhlcnMuZm9ybWF0RXRoZXIoYmFsYW5jZSkpO1xuICAvLyAgIGF3YWl0IGdldHVzZXJCYWxhbmNlKGFkZHJlc3MpO1xuICAvLyB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldEFjdGl2ZVByb3Bvc2FsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRDdXJyZW50UHJvcG9zYWwoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZVswXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlWzFdKTtcbiAgICAgICAgY29uc29sZS5sb2coTnVtYmVyKHJlc3BvbnNlWzJdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKE51bWJlcihyZXNwb25zZVszXSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZVs0XSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldEFjdGl2ZVByb3Bvc2FsKCk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1zY3JlZW4gYmctWyNGNUY1RjVdXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHB0LTEwIHRleHQtWyMzMzMzMzNdXCI+XG4gICAgICAgIEVudm95IFRyYWNlYWJpbGl0eSBTeXN0ZW1cbiAgICAgIDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LVsjMzMzMzMzXVwiPkFjdGl2ZSBQcm9wb3NhbDwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGFic29sdXRlIHRvcC0yLzRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BZGRyZXNzPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFkZHJlc3M8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWRkcmVzczwvcD5cblxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC0xMCBweC0xMCBweS1bMTVweF0gYmctWyMwQTI1NDBdIHRleHQtWyNGRkZGRkZdIHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hY2Nlc3MtaW50ZXJmYWNlXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBY2Nlc3MgSW50ZXJmYWNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMTAgdGV4dC1jZW50ZXIgbXQtNVwiPldhbGxldCBDb25uZWN0ZWQhPC9wPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVByb3Bvc2FsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJnZXRDdXJyZW50UHJvcG9zYWwiLCJBY3RpdmVQcm9wb3NhbCIsInJvdXRlciIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYWN0aXZlUHJvcG9zYWwiLCJzZXRBY3RpdmVQcm9wb3NhbCIsIm5hbWUiLCJhZGRyZXNzIiwiZ2V0QWN0aXZlUHJvcG9zYWwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJOdW1iZXIiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/active-proposal/page.tsx\n"));

/***/ })

});