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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _contractFunctions_getCurrrentProposal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/contractFunctions/getCurrrentProposal */ \"(app-pages-browser)/./contractFunctions/getCurrrentProposal.ts\");\n/* harmony import */ var _contractFunctions_voteProposal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contractFunctions/voteProposal */ \"(app-pages-browser)/./contractFunctions/voteProposal.ts\");\n/* eslint-disable @typescript-eslint/no-unused-vars */ /* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ActiveProposal = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [activeProposal, setActiveProposal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        address: \"\",\n        totalCount: 0,\n        totalVotes: 0,\n        primatyProducer: false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getActiveProposal = async ()=>{\n            try {\n                const response = await (0,_contractFunctions_getCurrrentProposal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                console.log(response);\n                console.log(response[0]);\n                console.log(response[1]);\n                console.log(Number(response[2]));\n                console.log(Number(response[3]));\n                console.log(response[4]);\n                setActiveProposal({\n                    name: response[0],\n                    address: response[1],\n                    totalCount: Number(response[2]),\n                    totalVotes: Number(response[3]),\n                    primatyProducer: response[4]\n                });\n            } catch (error) {\n                console.log(\"error\", error);\n            }\n        };\n        getActiveProposal();\n    }, []);\n    const upVote = async ()=>{\n        await (0,_contractFunctions_voteProposal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(true);\n        alert(\"Voted Successfully\");\n        router.push(\"/access-interface\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-screen bg-[#F5F5F5]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center pt-10 text-[#333333]\",\n                children: \"Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[#333333]\",\n                children: (activeProposal === null || activeProposal === void 0 ? void 0 : activeProposal.name) ? \"Active Proposal Ongoing, cast your vote\" : \"No Active Proposal\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full justify-center items-center absolute top-2/4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: [\n                            \"Name: \",\n                            activeProposal.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: [\n                            \"Address: \",\n                            activeProposal.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: [\n                            \"Total Votes: \",\n                            activeProposal.totalCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: [\n                            \"Total Votes: \",\n                            activeProposal.totalVotes\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: [\n                            \"Primary Producer: \",\n                            activeProposal.primatyProducer\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mx-10 px-10 py-[15px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                                onClick: ()=>{\n                                // router.push(\"/access-interface\");\n                                },\n                                children: \"Upvote\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"mx-10 px-10 py-[15px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                                onClick: ()=>{\n                                // router.push(\"/access-interface\");\n                                },\n                                children: \"Downvote\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/app/active-proposal/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ActiveProposal, \"4QUYJCtL57RCDebmQiKG+mtSs3c=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ActiveProposal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ActiveProposal);\nvar _c;\n$RefreshReg$(_c, \"ActiveProposal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hY3RpdmUtcHJvcG9zYWwvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLG9EQUFvRDs7QUFFRDtBQUlQO0FBQzZCO0FBQ2I7QUFRNUQsTUFBTU0saUJBQWlCOztJQUNyQixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1EsZ0JBQWdCQyxrQkFBa0IsR0FBR1QsK0NBQVFBLENBQUM7UUFDbkRVLE1BQU07UUFDTkMsU0FBUztRQUNUQyxZQUFZO1FBQ1pDLFlBQVk7UUFDWkMsaUJBQWlCO0lBQ25CO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWdCLG9CQUFvQjtZQUN4QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTWQsa0ZBQWtCQTtnQkFDekNlLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZCQyxRQUFRQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxFQUFFO2dCQUN2QkMsUUFBUUMsR0FBRyxDQUFDQyxPQUFPSCxRQUFRLENBQUMsRUFBRTtnQkFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBT0gsUUFBUSxDQUFDLEVBQUU7Z0JBQzlCQyxRQUFRQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxFQUFFO2dCQUN2QlAsa0JBQWtCO29CQUNoQkMsTUFBTU0sUUFBUSxDQUFDLEVBQUU7b0JBQ2pCTCxTQUFTSyxRQUFRLENBQUMsRUFBRTtvQkFDcEJKLFlBQVlPLE9BQU9ILFFBQVEsQ0FBQyxFQUFFO29CQUM5QkgsWUFBWU0sT0FBT0gsUUFBUSxDQUFDLEVBQUU7b0JBQzlCRixpQkFBaUJFLFFBQVEsQ0FBQyxFQUFFO2dCQUM5QjtZQUNGLEVBQUUsT0FBT0ksT0FBTztnQkFDZEgsUUFBUUMsR0FBRyxDQUFDLFNBQVNFO1lBQ3ZCO1FBQ0Y7UUFDQUw7SUFDRixHQUFHLEVBQUU7SUFDTCxNQUFNTSxTQUFTO1FBQ2IsTUFBTWxCLDJFQUFZQSxDQUFDO1FBQ25CbUIsTUFBTTtRQUNOakIsT0FBT2tCLElBQUksQ0FBQztJQUVkO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBc0Q7Ozs7OzswQkFHcEUsOERBQUNFO2dCQUFFRixXQUFVOzBCQUNWakIsQ0FBQUEsMkJBQUFBLHFDQUFBQSxlQUFnQkUsSUFBSSxJQUNqQiw0Q0FDQTs7Ozs7OzBCQUdOLDhEQUFDYztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFFRixXQUFVOzs0QkFBYzs0QkFBT2pCLGVBQWVFLElBQUk7Ozs7Ozs7a0NBQ3JELDhEQUFDaUI7d0JBQUVGLFdBQVU7OzRCQUFjOzRCQUFVakIsZUFBZUcsT0FBTzs7Ozs7OztrQ0FDM0QsOERBQUNnQjt3QkFBRUYsV0FBVTs7NEJBQWM7NEJBQWNqQixlQUFlSSxVQUFVOzs7Ozs7O2tDQUNsRSw4REFBQ2U7d0JBQUVGLFdBQVU7OzRCQUFjOzRCQUFjakIsZUFBZUssVUFBVTs7Ozs7OztrQ0FDbEUsOERBQUNjO3dCQUFFRixXQUFVOzs0QkFBYzs0QkFDTmpCLGVBQWVNLGVBQWU7Ozs7Ozs7a0NBRW5ELDhEQUFDVTt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNHO2dDQUNDSCxXQUFVO2dDQUNWSSxTQUFTO2dDQUNQLG9DQUFvQztnQ0FDdEM7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ0Q7Z0NBQ0NILFdBQVU7Z0NBQ1ZJLFNBQVM7Z0NBQ1Asb0NBQW9DO2dDQUN0QzswQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1g7R0FoRk16Qjs7UUFDV0gsc0RBQVNBOzs7S0FEcEJHO0FBa0ZOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9hY3RpdmUtcHJvcG9zYWwvcGFnZS50c3g/MjgzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgfSBmcm9tIFwiQG1ldGFtYXNrL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHNldHVwIGZyb20gXCIuLi8uLi91dGlscy9kZXRlY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBnZXRDdXJyZW50UHJvcG9zYWwgZnJvbSBcIkAvY29udHJhY3RGdW5jdGlvbnMvZ2V0Q3VycnJlbnRQcm9wb3NhbFwiO1xuaW1wb3J0IHZvdGVQcm9wb3NhbCBmcm9tIFwiQC9jb250cmFjdEZ1bmN0aW9ucy92b3RlUHJvcG9zYWxcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBFdGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3QgQWN0aXZlUHJvcG9zYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FjdGl2ZVByb3Bvc2FsLCBzZXRBY3RpdmVQcm9wb3NhbF0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBhZGRyZXNzOiBcIlwiLFxuICAgIHRvdGFsQ291bnQ6IDAsXG4gICAgdG90YWxWb3RlczogMCxcbiAgICBwcmltYXR5UHJvZHVjZXI6IGZhbHNlLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldEFjdGl2ZVByb3Bvc2FsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRDdXJyZW50UHJvcG9zYWwoKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZVswXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlWzFdKTtcbiAgICAgICAgY29uc29sZS5sb2coTnVtYmVyKHJlc3BvbnNlWzJdKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKE51bWJlcihyZXNwb25zZVszXSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZVs0XSk7XG4gICAgICAgIHNldEFjdGl2ZVByb3Bvc2FsKHtcbiAgICAgICAgICBuYW1lOiByZXNwb25zZVswXSxcbiAgICAgICAgICBhZGRyZXNzOiByZXNwb25zZVsxXSxcbiAgICAgICAgICB0b3RhbENvdW50OiBOdW1iZXIocmVzcG9uc2VbMl0pLFxuICAgICAgICAgIHRvdGFsVm90ZXM6IE51bWJlcihyZXNwb25zZVszXSksXG4gICAgICAgICAgcHJpbWF0eVByb2R1Y2VyOiByZXNwb25zZVs0XSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGdldEFjdGl2ZVByb3Bvc2FsKCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgdXBWb3RlID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHZvdGVQcm9wb3NhbCh0cnVlKTtcbiAgICBhbGVydChcIlZvdGVkIFN1Y2Nlc3NmdWxseVwiKTtcbiAgICByb3V0ZXIucHVzaChcIi9hY2Nlc3MtaW50ZXJmYWNlXCIpO1xuICAgIFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1zY3JlZW4gYmctWyNGNUY1RjVdXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHB0LTEwIHRleHQtWyMzMzMzMzNdXCI+XG4gICAgICAgIEVudm95IFRyYWNlYWJpbGl0eSBTeXN0ZW1cbiAgICAgIDwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LVsjMzMzMzMzXVwiPlxuICAgICAgICB7YWN0aXZlUHJvcG9zYWw/Lm5hbWVcbiAgICAgICAgICA/IFwiQWN0aXZlIFByb3Bvc2FsIE9uZ29pbmcsIGNhc3QgeW91ciB2b3RlXCJcbiAgICAgICAgICA6IFwiTm8gQWN0aXZlIFByb3Bvc2FsXCJ9XG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSB0b3AtMi80XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+TmFtZToge2FjdGl2ZVByb3Bvc2FsLm5hbWV9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkFkZHJlc3M6IHthY3RpdmVQcm9wb3NhbC5hZGRyZXNzfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Ub3RhbCBWb3Rlczoge2FjdGl2ZVByb3Bvc2FsLnRvdGFsQ291bnR9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlRvdGFsIFZvdGVzOiB7YWN0aXZlUHJvcG9zYWwudG90YWxWb3Rlc308L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgUHJpbWFyeSBQcm9kdWNlcjoge2FjdGl2ZVByb3Bvc2FsLnByaW1hdHlQcm9kdWNlcn1cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEwXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMTAgcHgtMTAgcHktWzE1cHhdIGJnLVsjMEEyNTQwXSB0ZXh0LVsjRkZGRkZGXSByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goXCIvYWNjZXNzLWludGVyZmFjZVwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVXB2b3RlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMTAgcHgtMTAgcHktWzE1cHhdIGJnLVsjMEEyNTQwXSB0ZXh0LVsjRkZGRkZGXSByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goXCIvYWNjZXNzLWludGVyZmFjZVwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRG93bnZvdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGl2ZVByb3Bvc2FsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJnZXRDdXJyZW50UHJvcG9zYWwiLCJ2b3RlUHJvcG9zYWwiLCJBY3RpdmVQcm9wb3NhbCIsInJvdXRlciIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiYWN0aXZlUHJvcG9zYWwiLCJzZXRBY3RpdmVQcm9wb3NhbCIsIm5hbWUiLCJhZGRyZXNzIiwidG90YWxDb3VudCIsInRvdGFsVm90ZXMiLCJwcmltYXR5UHJvZHVjZXIiLCJnZXRBY3RpdmVQcm9wb3NhbCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIk51bWJlciIsImVycm9yIiwidXBWb3RlIiwiYWxlcnQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/active-proposal/page.tsx\n"));

/***/ })

});