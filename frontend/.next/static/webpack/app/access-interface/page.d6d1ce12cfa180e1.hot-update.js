"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/access-interface/page",{

/***/ "(app-pages-browser)/./modal/add-lot.tsx":
/*!***************************!*\
  !*** ./modal/add-lot.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddLotModal: function() { return /* binding */ AddLotModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AddLotModal = (param)=>{\n    let { cancelModal } = param;\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        stage: \"\",\n        details: \"\",\n        quantity: 0,\n        location: \"\",\n        source: \"\",\n        chainId: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"fixed\",\n            height: \"100vh\",\n            width: \"100%\",\n            backgroundColor: \"gray\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"top-[50px] bg-[#FFFFFF] p-10 rounded-xl\",\n            style: {\n                left: \"45%\",\n                transform: \"translate(0%, 30%)\",\n                width: \"80%\",\n                margin: \"auto\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Stage\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full my-5\",\n                            placeholder: \"Stage\",\n                            style: {\n                                padding: \"8px\"\n                            },\n                            value: form.stage,\n                            onChange: (e)=>{\n                                setForm({\n                                    ...form,\n                                    stage: e.target.value\n                                });\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-5\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Details\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            placeholder: \"Details\",\n                            style: {\n                                padding: \"8px\"\n                            },\n                            value: form.details,\n                            onChange: (e)=>{\n                                setForm({\n                                    ...form,\n                                    details: e.target.value\n                                });\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pb-10\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Quantity\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            style: {\n                                padding: \"8px\"\n                            },\n                            placeholder: \"Quantity\",\n                            value: form.quantity,\n                            onChange: (e)=>{\n                                if (isNaN(Number(e.target.value))) {\n                                    return;\n                                }\n                                setForm({\n                                    ...form,\n                                    quantity: Number(e.target.value)\n                                });\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-5\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Location\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            placeholder: \"Location\",\n                            style: {\n                                padding: \"8px\"\n                            },\n                            value: form.location,\n                            onChange: (e)=>{\n                                setForm({\n                                    ...form,\n                                    location: e.target.value\n                                });\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-5\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Source\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            placeholder: \"Source\",\n                            style: {\n                                padding: \"8px\"\n                            },\n                            value: form.source,\n                            onChange: (e)=>{\n                                setForm({\n                                    ...form,\n                                    source: e.target.value\n                                });\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-5\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Chain ID\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            placeholder: \"Chain ID\",\n                            style: {\n                                padding: \"8px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    style: {\n                        justifyContent: \"space-between\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                            onClick: ()=>{},\n                            children: \"Add New Lot Procurement\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                            onClick: cancelModal,\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddLotModal, \"+OrIpft8sBj5lJ/c76tWqacq9XE=\");\n_c = AddLotModal;\nvar _c;\n$RefreshReg$(_c, \"AddLotModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBWTs0QkFDWmIsT0FBTztnQ0FBRWMsU0FBUzs0QkFBTTs0QkFDeEJDLE9BQU94QixLQUFLTSxNQUFNOzRCQUNsQm1CLFVBQVUsQ0FBQ0M7Z0NBQ1R6QixRQUFRO29DQUFFLEdBQUdELElBQUk7b0NBQUVNLFFBQVFvQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQUM7NEJBQzVDOzs7Ozs7Ozs7Ozs7OEJBR0osOERBQUNoQjtvQkFDQ00sV0FBVTtvQkFDVkwsT0FBTzt3QkFBRVMsV0FBVzt3QkFBUUMsY0FBYztvQkFBTzs7c0NBRWpELDhEQUFDQztzQ0FBRTs7Ozs7O3NDQUNILDhEQUFDQzs0QkFDQ1AsV0FBVTs0QkFDVlEsYUFBWTs0QkFDWmIsT0FBTztnQ0FBRWMsU0FBUzs0QkFBTTs7Ozs7Ozs7Ozs7OzhCQUk1Qiw4REFBQ2Y7b0JBQUlNLFdBQVU7b0JBQU9MLE9BQU87d0JBQUVxQixnQkFBZ0I7b0JBQWdCOztzQ0FDN0QsOERBQUNDOzRCQUNDakIsV0FBVTs0QkFDVmtCLFNBQVMsS0FBTztzQ0FDakI7Ozs7OztzQ0FHRCw4REFBQ0Q7NEJBQ0NqQixXQUFVOzRCQUNWa0IsU0FBU2pDO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLEVBQUU7R0FySVdEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL21vZGFsL2FkZC1sb3QudHN4PzU5NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBBZGRMb3RNb2RhbDogUmVhY3QuRkM8eyBjYW5jZWxNb2RhbDogKCkgPT4gdm9pZCB9PiA9ICh7XG4gIGNhbmNlbE1vZGFsLFxufSkgPT4ge1xuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgc3RhZ2U6IFwiXCIsXG4gICAgZGV0YWlsczogXCJcIixcbiAgICBxdWFudGl0eTogMCxcbiAgICBsb2NhdGlvbjogXCJcIixcbiAgICBzb3VyY2U6IFwiXCIsXG4gICAgY2hhaW5JZDogXCJcIixcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImdyYXlcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ0b3AtWzUwcHhdIGJnLVsjRkZGRkZGXSBwLTEwIHJvdW5kZWQteGxcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGxlZnQ6IFwiNDUlXCIsXG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwJSwgMzAlKVwiLFxuICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICA8cD5TdGFnZTwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ibGFjayBib3JkZXItMiBwLTEwIHB5LTE1IHctZnVsbCBteS01XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhZ2VcIlxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI4cHhcIiB9fVxuICAgICAgICAgICAgdmFsdWU9e2Zvcm0uc3RhZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0Rm9ybSh7IC4uLmZvcm0sIHN0YWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS01XCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cD5EZXRhaWxzPC9wPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJsYWNrIGJvcmRlci0yIHAtMTAgcHktMTUgdy1mdWxsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGV0YWlsc1wiXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjhweFwiIH19XG4gICAgICAgICAgICB2YWx1ZT17Zm9ybS5kZXRhaWxzfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEZvcm0oeyAuLi5mb3JtLCBkZXRhaWxzOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJwYi0xMFwiXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHA+UXVhbnRpdHk8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYmxhY2sgYm9yZGVyLTIgcC0xMCBweS0xNSB3LWZ1bGxcIlxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI4cHhcIiB9fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJRdWFudGl0eVwiXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybS5xdWFudGl0eX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXNOYU4oTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc2V0Rm9ybSh7IC4uLmZvcm0sIHF1YW50aXR5OiBOdW1iZXIoZS50YXJnZXQudmFsdWUpIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTVcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPkxvY2F0aW9uPC9wPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJsYWNrIGJvcmRlci0yIHAtMTAgcHktMTUgdy1mdWxsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTG9jYXRpb25cIlxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI4cHhcIiB9fVxuICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubG9jYXRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgc2V0Rm9ybSh7IC4uLmZvcm0sIGxvY2F0aW9uOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS01XCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cD5Tb3VyY2U8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYmxhY2sgYm9yZGVyLTIgcC0xMCBweS0xNSB3LWZ1bGxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTb3VyY2VcIlxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI4cHhcIiB9fVxuICAgICAgICAgICAgdmFsdWU9e2Zvcm0uc291cmNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEZvcm0oeyAuLi5mb3JtLCBzb3VyY2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTVcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPkNoYWluIElEPC9wPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJsYWNrIGJvcmRlci0yIHAtMTAgcHktMTUgdy1mdWxsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hhaW4gSURcIlxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI4cHhcIiB9fVxuICAgICAgICAgICAgXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiB9fT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xNSBtYi0xMCBweC04IHB5LVsxMHB4XSBiZy1bIzBBMjU0MF0gdGV4dC1bI0ZGRkZGRl0gcm91bmRlZC14bFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgTmV3IExvdCBQcm9jdXJlbWVudFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTE1IG1iLTEwIHB4LTggcHktWzEwcHhdIGJnLVsjMEEyNTQwXSB0ZXh0LVsjRkZGRkZGXSByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbE1vZGFsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWRkTG90TW9kYWwiLCJjYW5jZWxNb2RhbCIsImZvcm0iLCJzZXRGb3JtIiwic3RhZ2UiLCJkZXRhaWxzIiwicXVhbnRpdHkiLCJsb2NhdGlvbiIsInNvdXJjZSIsImNoYWluSWQiLCJkaXYiLCJzdHlsZSIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJsZWZ0IiwidHJhbnNmb3JtIiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwicCIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJwYWRkaW5nIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpc05hTiIsIk51bWJlciIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./modal/add-lot.tsx\n"));

/***/ })

});