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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/detect */ \"(app-pages-browser)/./utils/detect.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ActiveProposal = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const [errorMessage, setErrorMessage] = useState(\"\");\n    // const [defaultAccount, setDefaultAccount] = useState(\"\");\n    // const [userBalance, setUserBalance] = useState(\"\");\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    // const getuserBalance = async (address: string) => {\n    //   const provider = new ethers.BrowserProvider(window.Ethereum!);\n    //   const balance = await provider.getBalance(address, \"latest\");\n    //   return balance;\n    // };\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    // const accountChangedHandler = async (newAccount: any) => {\n    //   const address = await newAccount.getAddress();\n    //   setDefaultAccount(address);\n    //   const balance = await newAccount.getBalance();\n    //   setUserBalance(ethers.formatEther(balance));\n    //   await getuserBalance(address);\n    // };\n    const connectwalletHandler = async ()=>{\n        var _window_ethereum;\n        await (0,_utils_detect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const accounts = await ((_window_ethereum = window.ethereum) === null || _window_ethereum === void 0 ? void 0 : _window_ethereum.request({\n            method: \"eth_requestAccounts\"\n        }));\n        console.log(\"accounts\", accounts);\n        if (account !== null && accounts !== undefined) {\n            // eslint-disable-next-line @typescript-eslint/no-explicit-any\n            const accountRead = accounts;\n            setAccount(accountRead[0]);\n        }\n    // if (window.ethereum) {\n    //   const provider = new ethers.BrowserProvider(window.Ethereum!);\n    //   provider.send(\"eth_requestAccounts\", []).then(async () => {\n    //     await accountChangedHandler(provider.getSigner());\n    //   });\n    // } else {\n    //   setErrorMessage(\"Please Install MetaMask!!!\");\n    // }\n    };\n    // console.log(\"defaultAccount\", defaultAccount);\n    // console.log(\"userBalance\", userBalance);\n    // console.log(\"errorMessage\", errorMessage);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen bg-[#F5F5F5]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center pt-10 text-[#333333]\",\n                children: \"Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[#333333]\",\n                children: \"Active Proposal\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-center items-center absolute top-2/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: \"Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ActiveProposal, \"FaT82uL+wyBRXz/5EMM4Hf4+yZg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ActiveProposal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProposal);\nvar _c;\n$RefreshReg$(_c, \"ActiveProposal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hY3RpdmUtcHJvcG9zYWwvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQW9EOztBQUVaO0FBR0Q7QUFDSztBQVE1QyxNQUFNSSxpQkFBaUI7O0lBQ3JCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsd0RBQXdEO0lBQ3hELDREQUE0RDtJQUM1RCxzREFBc0Q7SUFDdEQsOERBQThEO0lBRTlELHNEQUFzRDtJQUN0RCxtRUFBbUU7SUFDbkUsa0VBQWtFO0lBQ2xFLG9CQUFvQjtJQUNwQixLQUFLO0lBQ0wsOERBQThEO0lBQzlELDZEQUE2RDtJQUM3RCxtREFBbUQ7SUFDbkQsZ0NBQWdDO0lBQ2hDLG1EQUFtRDtJQUNuRCxpREFBaUQ7SUFDakQsbUNBQW1DO0lBQ25DLEtBQUs7SUFDTCxNQUFNTyx1QkFBdUI7WUFFSkM7UUFEdkIsTUFBTVAseURBQUtBO1FBQ1gsTUFBTVEsV0FBVyxRQUFNRCxtQkFBQUEsT0FBT0UsUUFBUSxjQUFmRix1Q0FBQUEsaUJBQWlCRyxPQUFPLENBQUM7WUFDOUNDLFFBQVE7UUFDVjtRQUVBQyxRQUFRQyxHQUFHLENBQUMsWUFBWUw7UUFDeEIsSUFBSUosWUFBWSxRQUFRSSxhQUFhTSxXQUFXO1lBQzlDLDhEQUE4RDtZQUM5RCxNQUFNQyxjQUFtQlA7WUFDekJILFdBQVdVLFdBQVcsQ0FBQyxFQUFFO1FBQzNCO0lBRUEseUJBQXlCO0lBQ3pCLG1FQUFtRTtJQUNuRSxnRUFBZ0U7SUFDaEUseURBQXlEO0lBQ3pELFFBQVE7SUFDUixXQUFXO0lBQ1gsbURBQW1EO0lBQ25ELElBQUk7SUFDTjtJQUNBLGlEQUFpRDtJQUNqRCwyQ0FBMkM7SUFDM0MsNkNBQTZDO0lBQzdDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNEOzs7Ozs7MEJBR3BFLDhEQUFDRTtnQkFBRUYsV0FBVTswQkFBNkI7Ozs7OzswQkFFMUMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQWM7Ozs7OztrQ0FDM0IsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFjOzs7Ozs7a0NBQzNCLDhEQUFDRTt3QkFBRUYsV0FBVTtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JuQztHQXhFTWY7O1FBQ1dELHNEQUFTQTs7O0tBRHBCQztBQTBFTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWN0aXZlLXByb3Bvc2FsL3BhZ2UudHN4PzI4M2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzICovXG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB9IGZyb20gXCJAbWV0YW1hc2svcHJvdmlkZXJzXCI7XG5pbXBvcnQgc2V0dXAgZnJvbSBcIi4uLy4uL3V0aWxzL2RldGVjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIEV0aGVyZXVtPzogTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcbiAgfVxufVxuXG5jb25zdCBBY3RpdmVQcm9wb3NhbCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAvLyBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGNvbnN0IFtkZWZhdWx0QWNjb3VudCwgc2V0RGVmYXVsdEFjY291bnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGNvbnN0IFt1c2VyQmFsYW5jZSwgc2V0VXNlckJhbGFuY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cbiAgLy8gY29uc3QgZ2V0dXNlckJhbGFuY2UgPSBhc3luYyAoYWRkcmVzczogc3RyaW5nKSA9PiB7XG4gIC8vICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLkJyb3dzZXJQcm92aWRlcih3aW5kb3cuRXRoZXJldW0hKTtcbiAgLy8gICBjb25zdCBiYWxhbmNlID0gYXdhaXQgcHJvdmlkZXIuZ2V0QmFsYW5jZShhZGRyZXNzLCBcImxhdGVzdFwiKTtcbiAgLy8gICByZXR1cm4gYmFsYW5jZTtcbiAgLy8gfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgLy8gY29uc3QgYWNjb3VudENoYW5nZWRIYW5kbGVyID0gYXN5bmMgKG5ld0FjY291bnQ6IGFueSkgPT4ge1xuICAvLyAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBuZXdBY2NvdW50LmdldEFkZHJlc3MoKTtcbiAgLy8gICBzZXREZWZhdWx0QWNjb3VudChhZGRyZXNzKTtcbiAgLy8gICBjb25zdCBiYWxhbmNlID0gYXdhaXQgbmV3QWNjb3VudC5nZXRCYWxhbmNlKCk7XG4gIC8vICAgc2V0VXNlckJhbGFuY2UoZXRoZXJzLmZvcm1hdEV0aGVyKGJhbGFuY2UpKTtcbiAgLy8gICBhd2FpdCBnZXR1c2VyQmFsYW5jZShhZGRyZXNzKTtcbiAgLy8gfTtcbiAgY29uc3QgY29ubmVjdHdhbGxldEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgc2V0dXAoKTtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bT8ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLCBhY2NvdW50cyk7XG4gICAgaWYgKGFjY291bnQgIT09IG51bGwgJiYgYWNjb3VudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIGNvbnN0IGFjY291bnRSZWFkOiBhbnkgPSBhY2NvdW50cztcbiAgICAgIHNldEFjY291bnQoYWNjb3VudFJlYWRbMF0pO1xuICAgIH1cblxuICAgIC8vIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAvLyAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIod2luZG93LkV0aGVyZXVtISk7XG4gICAgLy8gICBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgIGF3YWl0IGFjY291bnRDaGFuZ2VkSGFuZGxlcihwcm92aWRlci5nZXRTaWduZXIoKSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgc2V0RXJyb3JNZXNzYWdlKFwiUGxlYXNlIEluc3RhbGwgTWV0YU1hc2shISFcIik7XG4gICAgLy8gfVxuICB9O1xuICAvLyBjb25zb2xlLmxvZyhcImRlZmF1bHRBY2NvdW50XCIsIGRlZmF1bHRBY2NvdW50KTtcbiAgLy8gY29uc29sZS5sb2coXCJ1c2VyQmFsYW5jZVwiLCB1c2VyQmFsYW5jZSk7XG4gIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JNZXNzYWdlXCIsIGVycm9yTWVzc2FnZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXNjcmVlbiBiZy1bI0Y1RjVGNV1cIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgcHQtMTAgdGV4dC1bIzMzMzMzM11cIj5cbiAgICAgICAgRW52b3kgVHJhY2VhYmlsaXR5IFN5c3RlbVxuICAgICAgPC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtWyMzMzMzMzNdXCI+QWN0aXZlIFByb3Bvc2FsPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYWJzb2x1dGUgdG9wLTIvNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFkZHJlc3M8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWRkcmVzczwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5BZGRyZXNzPC9wPlxuXG4gICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTEwIHB4LTEwIHB5LVsxNXB4XSBiZy1bIzBBMjU0MF0gdGV4dC1bI0ZGRkZGRl0gcm91bmRlZC14bFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL2FjY2Vzcy1pbnRlcmZhY2VcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFjY2VzcyBJbnRlcmZhY2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC0xMCB0ZXh0LWNlbnRlciBtdC01XCI+V2FsbGV0IENvbm5lY3RlZCE8L3A+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlUHJvcG9zYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldHVwIiwidXNlUm91dGVyIiwiQWN0aXZlUHJvcG9zYWwiLCJyb3V0ZXIiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImNvbm5lY3R3YWxsZXRIYW5kbGVyIiwid2luZG93IiwiYWNjb3VudHMiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiYWNjb3VudFJlYWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/active-proposal/page.tsx\n"));

/***/ })

});