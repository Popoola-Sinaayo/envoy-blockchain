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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _contractFunctions_getCurrrentProposal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contractFunctions/getCurrrentProposal */ \"(app-pages-browser)/./contractFunctions/getCurrrentProposal.ts\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ActiveProposal = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [activeProposal, setActiveProposal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        address: \"\",\n        totalCount: 0,\n        totalVotes: 0,\n        primatyProducer: false\n    });\n    // const [errorMessage, setErrorMessage] = useState(\"\");\n    // const [defaultAccount, setDefaultAccount] = useState(\"\");\n    // const [userBalance, setUserBalance] = useState(\"\");\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    // const getuserBalance = async (address: string) => {\n    //   const provider = new ethers.BrowserProvider(window.Ethereum!);\n    //   const balance = await provider.getBalance(address, \"latest\");\n    //   return balance;\n    // };\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    // const accountChangedHandler = async (newAccount: any) => {\n    //   const address = await newAccount.getAddress();\n    //   setDefaultAccount(address);\n    //   const balance = await newAccount.getBalance();\n    //   setUserBalance(ethers.formatEther(balance));\n    //   await getuserBalance(address);\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getActiveProposal = async ()=>{\n            try {\n                const response = await (0,_contractFunctions_getCurrrentProposal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                console.log(response);\n                console.log(response[0]);\n                console.log(response[1]);\n                console.log(Number(response[2]));\n                console.log(Number(response[3]));\n                console.log(response[4]);\n                setActiveProposal({\n                    name: response[0],\n                    address: response[1],\n                    totalCount: Number(response[2]),\n                    totalVotes: Number(response[3]),\n                    primatyProducer: response[4]\n                });\n            } catch (error) {\n                console.log(\"error\", error);\n            }\n        };\n        getActiveProposal();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen bg-[#F5F5F5]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center pt-10 text-[#333333]\",\n                children: \"Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[#333333]\",\n                children: \"Active Proposal\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-center items-center absolute top-2/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: [\n                            \"Name: \",\n                            activeProposal.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: [\n                            \"Address: \",\n                            activeProposal.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ActiveProposal, \"4QUYJCtL57RCDebmQiKG+mtSs3c=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ActiveProposal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProposal);\nvar _c;\n$RefreshReg$(_c, \"ActiveProposal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hY3RpdmUtcHJvcG9zYWwvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQW9EOztBQUVEO0FBSVA7QUFDNkI7QUFRekUsTUFBTUssaUJBQWlCOztJQUNyQixNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQUM7UUFDbkRTLE1BQU07UUFDTkMsU0FBUztRQUNUQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsaUJBQWlCO0lBQ25CO0lBQ0Esd0RBQXdEO0lBQ3hELDREQUE0RDtJQUM1RCxzREFBc0Q7SUFDdEQsOERBQThEO0lBRTlELHNEQUFzRDtJQUN0RCxtRUFBbUU7SUFDbkUsa0VBQWtFO0lBQ2xFLG9CQUFvQjtJQUNwQixLQUFLO0lBQ0wsOERBQThEO0lBQzlELDZEQUE2RDtJQUM3RCxtREFBbUQ7SUFDbkQsZ0NBQWdDO0lBQ2hDLG1EQUFtRDtJQUNuRCxpREFBaUQ7SUFDakQsbUNBQW1DO0lBQ25DLEtBQUs7SUFDTGQsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxvQkFBb0I7WUFDeEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1iLGtGQUFrQkE7Z0JBQ3pDYyxRQUFRQyxHQUFHLENBQUNGO2dCQUNaQyxRQUFRQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxFQUFFO2dCQUN2QkMsUUFBUUMsR0FBRyxDQUFDRixRQUFRLENBQUMsRUFBRTtnQkFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBT0gsUUFBUSxDQUFDLEVBQUU7Z0JBQzlCQyxRQUFRQyxHQUFHLENBQUNDLE9BQU9ILFFBQVEsQ0FBQyxFQUFFO2dCQUM5QkMsUUFBUUMsR0FBRyxDQUFDRixRQUFRLENBQUMsRUFBRTtnQkFDdkJQLGtCQUFrQjtvQkFDaEJDLE1BQU1NLFFBQVEsQ0FBQyxFQUFFO29CQUNqQkwsU0FBU0ssUUFBUSxDQUFDLEVBQUU7b0JBQ3BCSixZQUFZTyxPQUFPSCxRQUFRLENBQUMsRUFBRTtvQkFDOUJILFlBQVlNLE9BQU9ILFFBQVEsQ0FBQyxFQUFFO29CQUM5QkYsaUJBQWlCRSxRQUFRLENBQUMsRUFBRTtnQkFDOUI7WUFDRixFQUFFLE9BQU9JLE9BQU87Z0JBQ2RILFFBQVFDLEdBQUcsQ0FBQyxTQUFTRTtZQUN2QjtRQUNGO1FBQ0FMO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzRDs7Ozs7OzBCQUdwRSw4REFBQ0U7Z0JBQUVGLFdBQVU7MEJBQTZCOzs7Ozs7MEJBRTFDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFFRixXQUFVOzs0QkFBYzs0QkFBT2QsZUFBZUUsSUFBSTs7Ozs7OztrQ0FDckQsOERBQUNjO3dCQUFFRixXQUFVOzs0QkFBYzs0QkFBVWQsZUFBZUcsT0FBTzs7Ozs7OztrQ0FDM0QsOERBQUNhO3dCQUFFRixXQUFVO2tDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQm5DO0dBN0VNbEI7O1FBQ1dGLHNEQUFTQTs7O0tBRHBCRTtBQStFTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWN0aXZlLXByb3Bvc2FsL3BhZ2UudHN4PzI4M2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcbmltcG9ydCBzZXR1cCBmcm9tIFwiLi4vLi4vdXRpbHMvZGV0ZWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgZ2V0Q3VycmVudFByb3Bvc2FsIGZyb20gXCJAL2NvbnRyYWN0RnVuY3Rpb25zL2dldEN1cnJyZW50UHJvcG9zYWxcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBFdGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3QgQWN0aXZlUHJvcG9zYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FjdGl2ZVByb3Bvc2FsLCBzZXRBY3RpdmVQcm9wb3NhbF0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBhZGRyZXNzOiBcIlwiLFxuICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgdG90YWxWb3RlczogMCxcbiAgICBwcmltYXR5UHJvZHVjZXI6IGZhbHNlLFxuICB9KTtcbiAgLy8gY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBjb25zdCBbZGVmYXVsdEFjY291bnQsIHNldERlZmF1bHRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBjb25zdCBbdXNlckJhbGFuY2UsIHNldFVzZXJCYWxhbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXG4gIC8vIGNvbnN0IGdldHVzZXJCYWxhbmNlID0gYXN5bmMgKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAvLyAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIod2luZG93LkV0aGVyZXVtISk7XG4gIC8vICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHByb3ZpZGVyLmdldEJhbGFuY2UoYWRkcmVzcywgXCJsYXRlc3RcIik7XG4gIC8vICAgcmV0dXJuIGJhbGFuY2U7XG4gIC8vIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIC8vIGNvbnN0IGFjY291bnRDaGFuZ2VkSGFuZGxlciA9IGFzeW5jIChuZXdBY2NvdW50OiBhbnkpID0+IHtcbiAgLy8gICBjb25zdCBhZGRyZXNzID0gYXdhaXQgbmV3QWNjb3VudC5nZXRBZGRyZXNzKCk7XG4gIC8vICAgc2V0RGVmYXVsdEFjY291bnQoYWRkcmVzcyk7XG4gIC8vICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IG5ld0FjY291bnQuZ2V0QmFsYW5jZSgpO1xuICAvLyAgIHNldFVzZXJCYWxhbmNlKGV0aGVycy5mb3JtYXRFdGhlcihiYWxhbmNlKSk7XG4gIC8vICAgYXdhaXQgZ2V0dXNlckJhbGFuY2UoYWRkcmVzcyk7XG4gIC8vIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvcG9zYWwgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldEN1cnJlbnRQcm9wb3NhbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlWzBdKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VbMV0pO1xuICAgICAgICBjb25zb2xlLmxvZyhOdW1iZXIocmVzcG9uc2VbMl0pKTtcbiAgICAgICAgY29uc29sZS5sb2coTnVtYmVyKHJlc3BvbnNlWzNdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlWzRdKTtcbiAgICAgICAgc2V0QWN0aXZlUHJvcG9zYWwoe1xuICAgICAgICAgIG5hbWU6IHJlc3BvbnNlWzBdLFxuICAgICAgICAgIGFkZHJlc3M6IHJlc3BvbnNlWzFdLFxuICAgICAgICAgIHRvdGFsQ291bnQ6IE51bWJlcihyZXNwb25zZVsyXSksXG4gICAgICAgICAgdG90YWxWb3RlczogTnVtYmVyKHJlc3BvbnNlWzNdKSxcbiAgICAgICAgICBwcmltYXR5UHJvZHVjZXI6IHJlc3BvbnNlWzRdLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG4gICAgZ2V0QWN0aXZlUHJvcG9zYWwoKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXNjcmVlbiBiZy1bI0Y1RjVGNV1cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgcHQtMTAgdGV4dC1bIzMzMzMzM11cIj5cbiAgICAgICAgRW52b3kgVHJhY2VhYmlsaXR5IFN5c3RlbVxuICAgICAgPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtWyMzMzMzMzNdXCI+QWN0aXZlIFByb3Bvc2FsPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgdG9wLTIvNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk5hbWU6IHthY3RpdmVQcm9wb3NhbC5uYW1lfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BZGRyZXNzOiB7YWN0aXZlUHJvcG9zYWwuYWRkcmVzc308L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWRkcmVzczwvcD5cblxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJteC0xMCBweC0xMCBweS1bMTVweF0gYmctWyMwQTI1NDBdIHRleHQtWyNGRkZGRkZdIHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hY2Nlc3MtaW50ZXJmYWNlXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBY2Nlc3MgSW50ZXJmYWNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtMTAgdGV4dC1jZW50ZXIgbXQtNVwiPldhbGxldCBDb25uZWN0ZWQhPC9wPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVByb3Bvc2FsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJnZXRDdXJyZW50UHJvcG9zYWwiLCJBY3RpdmVQcm9wb3NhbCIsInJvdXRlciIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYWN0aXZlUHJvcG9zYWwiLCJzZXRBY3RpdmVQcm9wb3NhbCIsIm5hbWUiLCJhZGRyZXNzIiwidG90YWxDb3VudCIsInRvdGFsVm90ZXMiLCJwcmltYXR5UHJvZHVjZXIiLCJnZXRBY3RpdmVQcm9wb3NhbCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/active-proposal/page.tsx\n"));

/***/ })

});