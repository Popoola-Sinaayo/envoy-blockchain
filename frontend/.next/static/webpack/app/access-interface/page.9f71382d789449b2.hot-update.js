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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddLotModal: function() { return /* binding */ AddLotModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst AddLotModal = (param)=>{\n    let { cancelModal } = param;\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        stage: \"\",\n        details: \"\",\n        quantity: 0,\n        location: \"\",\n        source: \"\",\n        chainId: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"fixed\",\n            height: \"100vh\",\n            width: \"100%\",\n            backgroundColor: \"gray\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"top-[50px] bg-[#FFFFFF] p-10 rounded-xl\",\n            style: {\n                left: \"45%\",\n                transform: \"translate(0%, 30%)\",\n                width: \"80%\",\n                margin: \"auto\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Stage\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full my-5\",\n                            placeholder: \"Stage\",\n                            style: {\n                                padding: \"8px\"\n                            },\n                            value: form.stage,\n                            onChange: (e)=>{\n                                setForm({\n                                    ...form,\n                                    stage: e.target.value\n                                });\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-5\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Details\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            placeholder: \"Details\",\n                            style: {\n                                padding: \"8px\"\n                            },\n                            value: form.details,\n                            onChange: (e)=>{\n                                setForm({\n                                    ...form,\n                                    details: e.target.value\n                                });\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pb-10\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Quantity\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            style: {\n                                padding: \"8px\"\n                            },\n                            placeholder: \"Quantity\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-5\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Location\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            placeholder: \"Location\",\n                            style: {\n                                padding: \"8px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-5\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Source\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            placeholder: \"Source\",\n                            style: {\n                                padding: \"8px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"my-5\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Chain ID\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full\",\n                            placeholder: \"Chain ID\",\n                            style: {\n                                padding: \"8px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    style: {\n                        justifyContent: \"space-between\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                            onClick: ()=>{},\n                            children: \"Add New Lot Procurement\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                            onClick: cancelModal,\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/modal/add-lot.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddLotModal, \"+OrIpft8sBj5lJ/c76tWqacq9XE=\");\n_c = AddLotModal;\nvar _c;\n$RefreshReg$(_c, \"AddLotModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPO3NDQUNqQjs7Ozs7O3NDQUdELDhEQUFDRDs0QkFDQ2YsV0FBVTs0QkFDVmdCLFNBQVMvQjtzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWCxFQUFFO0dBdEhXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tb2RhbC9hZGQtbG90LnRzeD81OTQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQWRkTG90TW9kYWw6IFJlYWN0LkZDPHsgY2FuY2VsTW9kYWw6ICgpID0+IHZvaWQgfT4gPSAoe1xuICBjYW5jZWxNb2RhbCxcbn0pID0+IHtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIHN0YWdlOiBcIlwiLFxuICAgIGRldGFpbHM6IFwiXCIsXG4gICAgcXVhbnRpdHk6IDAsXG4gICAgbG9jYXRpb246IFwiXCIsXG4gICAgc291cmNlOiBcIlwiLFxuICAgIGNoYWluSWQ6IFwiXCIsXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmF5XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwidG9wLVs1MHB4XSBiZy1bI0ZGRkZGRl0gcC0xMCByb3VuZGVkLXhsXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBsZWZ0OiBcIjQ1JVwiLFxuICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMCUsIDMwJSlcIixcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICAgICAgPHA+U3RhZ2U8L3A+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXItYmxhY2sgYm9yZGVyLTIgcC0xMCBweS0xNSB3LWZ1bGwgbXktNVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YWdlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4XCIgfX1cbiAgICAgICAgICAgIHZhbHVlPXtmb3JtLnN0YWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIHNldEZvcm0oeyAuLi5mb3JtLCBzdGFnZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktNVwiXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHA+RGV0YWlsczwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ibGFjayBib3JkZXItMiBwLTEwIHB5LTE1IHctZnVsbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRldGFpbHNcIlxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI4cHhcIiB9fVxuICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZGV0YWlsc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRGb3JtKHsgLi4uZm9ybSwgZGV0YWlsczogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicGItMTBcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlF1YW50aXR5PC9wPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJsYWNrIGJvcmRlci0yIHAtMTAgcHktMTUgdy1mdWxsXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4XCIgfX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUXVhbnRpdHlcIlxuICAgICAgICAgICAgXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS01XCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cD5Mb2NhdGlvbjwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ibGFjayBib3JkZXItMiBwLTEwIHB5LTE1IHctZnVsbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxvY2F0aW9uXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4XCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTVcIlxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwPlNvdXJjZTwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ibGFjayBib3JkZXItMiBwLTEwIHB5LTE1IHctZnVsbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNvdXJjZVwiXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjhweFwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJteS01XCJcbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8cD5DaGFpbiBJRDwvcD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1ibGFjayBib3JkZXItMiBwLTEwIHB5LTE1IHctZnVsbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNoYWluIElEXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiOHB4XCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiIH19PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTE1IG1iLTEwIHB4LTggcHktWzEwcHhdIGJnLVsjMEEyNTQwXSB0ZXh0LVsjRkZGRkZGXSByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBOZXcgTG90IFByb2N1cmVtZW50XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTUgbWItMTAgcHgtOCBweS1bMTBweF0gYmctWyMwQTI1NDBdIHRleHQtWyNGRkZGRkZdIHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsTW9kYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBZGRMb3RNb2RhbCIsImNhbmNlbE1vZGFsIiwiZm9ybSIsInNldEZvcm0iLCJzdGFnZSIsImRldGFpbHMiLCJxdWFudGl0eSIsImxvY2F0aW9uIiwic291cmNlIiwiY2hhaW5JZCIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInBhZGRpbmciLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImp1c3RpZnlDb250ZW50IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./modal/add-lot.tsx\n"));

/***/ })

});