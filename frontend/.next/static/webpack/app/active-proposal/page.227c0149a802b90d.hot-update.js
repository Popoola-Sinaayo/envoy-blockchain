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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _contractFunctions_getCurrrentProposal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contractFunctions/getCurrrentProposal */ \"(app-pages-browser)/./contractFunctions/getCurrrentProposal.ts\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ActiveProposal = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [activeProposal, setActiveProposal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // const [errorMessage, setErrorMessage] = useState(\"\");\n    // const [defaultAccount, setDefaultAccount] = useState(\"\");\n    // const [userBalance, setUserBalance] = useState(\"\");\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    // const getuserBalance = async (address: string) => {\n    //   const provider = new ethers.BrowserProvider(window.Ethereum!);\n    //   const balance = await provider.getBalance(address, \"latest\");\n    //   return balance;\n    // };\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    // const accountChangedHandler = async (newAccount: any) => {\n    //   const address = await newAccount.getAddress();\n    //   setDefaultAccount(address);\n    //   const balance = await newAccount.getBalance();\n    //   setUserBalance(ethers.formatEther(balance));\n    //   await getuserBalance(address);\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getActiveProposal = async ()=>{\n            try {\n                const response = await (0,_contractFunctions_getCurrrentProposal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                console.log(response);\n                console.log(response[0]);\n                console.log(response[1]);\n                console.log(Number(response[2]));\n                console.log(Number(response[3]));\n                console.log(response[4]);\n            } catch (error) {\n                console.log(\"error\", error);\n            }\n        };\n        getActiveProposal();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen bg-[#F5F5F5]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center pt-10 text-[#333333]\",\n                children: \"Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[#333333]\",\n                children: \"Active Proposal\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-center items-center absolute top-2/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ActiveProposal, \"abV3ajQygOdOp8o02mIosisOhSI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ActiveProposal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProposal);\nvar _c;\n$RefreshReg$(_c, \"ActiveProposal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hY3RpdmUtcHJvcG9zYWwvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQW9EOztBQUVEO0FBSVA7QUFDNkI7QUFRekUsTUFBTUssaUJBQWlCOztJQUNyQixNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQUMsQ0FFckQ7SUFDQSx3REFBd0Q7SUFDeEQsNERBQTREO0lBQzVELHNEQUFzRDtJQUN0RCw4REFBOEQ7SUFFOUQsc0RBQXNEO0lBQ3RELG1FQUFtRTtJQUNuRSxrRUFBa0U7SUFDbEUsb0JBQW9CO0lBQ3BCLEtBQUs7SUFDTCw4REFBOEQ7SUFDOUQsNkRBQTZEO0lBQzdELG1EQUFtRDtJQUNuRCxnQ0FBZ0M7SUFDaEMsbURBQW1EO0lBQ25ELGlEQUFpRDtJQUNqRCxtQ0FBbUM7SUFDbkMsS0FBSztJQUNMRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLG9CQUFvQjtZQUN4QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVIsa0ZBQWtCQTtnQkFDekNTLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZCQyxRQUFRQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxFQUFFO2dCQUN2QkMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPSCxRQUFRLENBQUMsRUFBRTtnQkFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBT0gsUUFBUSxDQUFDLEVBQUU7Z0JBQzlCQyxRQUFRQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxFQUFFO1lBQ3pCLEVBQUUsT0FBT0ksT0FBTztnQkFDZEgsUUFBUUMsR0FBRyxDQUFDLFNBQVNFO1lBQ3ZCO1FBQ0Y7UUFDQUw7SUFDRjtJQUNBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNEOzs7Ozs7MEJBR3BFLDhEQUFDRTtnQkFBRUYsV0FBVTswQkFBNkI7Ozs7OzswQkFFMUMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQWM7Ozs7OztrQ0FDM0IsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFjOzs7Ozs7a0NBQzNCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQztHQWxFTWI7O1FBQ1dGLHNEQUFTQTs7O0tBRHBCRTtBQW9FTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWN0aXZlLXByb3Bvc2FsL3BhZ2UudHN4PzI4M2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcbmltcG9ydCBzZXR1cCBmcm9tIFwiLi4vLi4vdXRpbHMvZGV0ZWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgZ2V0Q3VycmVudFByb3Bvc2FsIGZyb20gXCJAL2NvbnRyYWN0RnVuY3Rpb25zL2dldEN1cnJyZW50UHJvcG9zYWxcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBFdGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3QgQWN0aXZlUHJvcG9zYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FjdGl2ZVByb3Bvc2FsLCBzZXRBY3RpdmVQcm9wb3NhbF0gPSB1c2VTdGF0ZSh7XG4gICAgXG4gIH0pO1xuICAvLyBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGNvbnN0IFtkZWZhdWx0QWNjb3VudCwgc2V0RGVmYXVsdEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGNvbnN0IFt1c2VyQmFsYW5jZSwgc2V0VXNlckJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cbiAgLy8gY29uc3QgZ2V0dXNlckJhbGFuY2UgPSBhc3luYyAoYWRkcmVzczogc3RyaW5nKSA9PiB7XG4gIC8vICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLkJyb3dzZXJQcm92aWRlcih3aW5kb3cuRXRoZXJldW0hKTtcbiAgLy8gICBjb25zdCBiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShhZGRyZXNzLCBcImxhdGVzdFwiKTtcbiAgLy8gICByZXR1cm4gYmFsYW5jZTtcbiAgLy8gfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgLy8gY29uc3QgYWNjb3VudENoYW5nZWRIYW5kbGVyID0gYXN5bmMgKG5ld0FjY291bnQ6IGFueSkgPT4ge1xuICAvLyAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBuZXdBY2NvdW50LmdldEFkZHJlc3MoKTtcbiAgLy8gICBzZXREZWZhdWx0QWNjb3VudChhZGRyZXNzKTtcbiAgLy8gICBjb25zdCBiYWxhbmNlID0gYXdhaXQgbmV3QWNjb3VudC5nZXRCYWxhbmNlKCk7XG4gIC8vICAgc2V0VXNlckJhbGFuY2UoZXRoZXJzLmZvcm1hdEV0aGVyKGJhbGFuY2UpKTtcbiAgLy8gICBhd2FpdCBnZXR1c2VyQmFsYW5jZShhZGRyZXNzKTtcbiAgLy8gfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRBY3RpdmVQcm9wb3NhbCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0Q3VycmVudFByb3Bvc2FsKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VbMF0pO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZVsxXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKE51bWJlcihyZXNwb25zZVsyXSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhOdW1iZXIocmVzcG9uc2VbM10pKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VbNF0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXRBY3RpdmVQcm9wb3NhbCgpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtc2NyZWVuIGJnLVsjRjVGNUY1XVwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBwdC0xMCB0ZXh0LVsjMzMzMzMzXVwiPlxuICAgICAgICBFbnZveSBUcmFjZWFiaWxpdHkgU3lzdGVtXG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1bIzMzMzMzM11cIj5BY3RpdmUgUHJvcG9zYWw8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSB0b3AtMi80XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWRkcmVzczwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BZGRyZXNzPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFkZHJlc3M8L3A+XG5cbiAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMTAgcHgtMTAgcHktWzE1cHhdIGJnLVsjMEEyNTQwXSB0ZXh0LVsjRkZGRkZGXSByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvYWNjZXNzLWludGVyZmFjZVwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWNjZXNzIEludGVyZmFjZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTEwIHRleHQtY2VudGVyIG10LTVcIj5XYWxsZXQgQ29ubmVjdGVkITwvcD5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3RpdmVQcm9wb3NhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiZ2V0Q3VycmVudFByb3Bvc2FsIiwiQWN0aXZlUHJvcG9zYWwiLCJyb3V0ZXIiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImFjdGl2ZVByb3Bvc2FsIiwic2V0QWN0aXZlUHJvcG9zYWwiLCJnZXRBY3RpdmVQcm9wb3NhbCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/active-proposal/page.tsx\n"));

/***/ })

});