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

/***/ "(app-pages-browser)/./modal/suggest.tsx":
/*!***************************!*\
  !*** ./modal/suggest.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _contractFunctions_suggestMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contractFunctions/suggestMember */ \"(app-pages-browser)/./contractFunctions/suggestMember.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SuggestMember = (param)=>{\n    let { cancelModal } = param;\n    _s();\n    const [form, setForm] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        address: \"\"\n    });\n    const handleSuggestMember = async ()=>{\n        (0,_contractFunctions_suggestMember__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(form.address, \"Popoola\", \"true\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            position: \"fixed\",\n            height: \"100vh\",\n            width: \"100%\",\n            backgroundColor: \"gray\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"top-[50px] bg-[#FFFFFF] p-10 rounded-xl\",\n            style: {\n                left: \"45%\",\n                transform: \"translate(0%, 50%)\",\n                width: \"80%\",\n                margin: \"auto\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    style: {\n                        marginTop: \"10px\",\n                        marginBottom: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Member Address\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/suggest.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"border-black border-2 p-10 py-15 w-full my-5\",\n                            placeholder: \"Enter Member Address\",\n                            style: {\n                                padding: \"8px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/suggest.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/suggest.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    style: {\n                        justifyContent: \"space-between\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                            onClick: ()=>{},\n                            children: \"Suggest Member\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/suggest.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                            onClick: cancelModal,\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/suggest.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookair/User/blockchain/frontend/modal/suggest.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookair/User/blockchain/frontend/modal/suggest.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/modal/suggest.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SuggestMember, \"JRdvkZisBRFvUUUzAH88yHYI1vM=\");\n_c = SuggestMember;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SuggestMember);\nvar _c;\n$RefreshReg$(_c, \"SuggestMember\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL21vZGFsL3N1Z2dlc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEQ7QUFDdEI7QUFFeEMsTUFBTUcsZ0JBQXVEO1FBQUMsRUFDNURDLFdBQVcsRUFDWjs7SUFDQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7UUFDL0JLLFNBQVM7SUFDWDtJQUNBLE1BQU1DLHNCQUFzQjtRQUMxQlIsNEVBQWFBLENBQUNLLEtBQUtFLE9BQU8sRUFBRSxXQUFXO0lBQ3pDO0lBQ0EscUJBQ0UsOERBQUNFO1FBQ0NDLE9BQU87WUFDTEMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsaUJBQWlCO1FBQ25CO2tCQUVBLDRFQUFDTDtZQUNDTSxXQUFVO1lBQ1ZMLE9BQU87Z0JBQ0xNLE1BQU07Z0JBQ05DLFdBQVc7Z0JBQ1hKLE9BQU87Z0JBQ1BLLFFBQVE7WUFDVjs7OEJBRUEsOERBQUNUO29CQUFJTSxXQUFVO29CQUFHTCxPQUFPO3dCQUFFUyxXQUFXO3dCQUFRQyxjQUFjO29CQUFPOztzQ0FDakUsOERBQUNDO3NDQUFFOzs7Ozs7c0NBQ0gsOERBQUNDOzRCQUNDUCxXQUFVOzRCQUNWUSxhQUFZOzRCQUNaYixPQUFPO2dDQUFFYyxTQUFTOzRCQUFNOzs7Ozs7Ozs7Ozs7OEJBSTVCLDhEQUFDZjtvQkFBSU0sV0FBVTtvQkFBT0wsT0FBTzt3QkFBRWUsZ0JBQWdCO29CQUFnQjs7c0NBQzdELDhEQUFDQzs0QkFDQ1gsV0FBVTs0QkFDVlksU0FBUyxLQUFPO3NDQUNqQjs7Ozs7O3NDQUdELDhEQUFDRDs0QkFDQ1gsV0FBVTs0QkFDVlksU0FBU3ZCO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBckRNRDtLQUFBQTtBQXVETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tb2RhbC9zdWdnZXN0LnRzeD8zZTE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdWdnZXN0TWVtYmVyIGZyb20gXCJAL2NvbnRyYWN0RnVuY3Rpb25zL3N1Z2dlc3RNZW1iZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdWdnZXN0TWVtYmVyOiBSZWFjdC5GQzx7IGNhbmNlbE1vZGFsOiAoKSA9PiB2b2lkIH0+ID0gKHtcbiAgY2FuY2VsTW9kYWwsXG59KSA9PiB7XG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICBhZGRyZXNzOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgaGFuZGxlU3VnZ2VzdE1lbWJlciA9IGFzeW5jICgpID0+IHtcbiAgICBzdWdnZXN0TWVtYmVyKGZvcm0uYWRkcmVzcywgXCJQb3Bvb2xhXCIsIFwidHJ1ZVwiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JheVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInRvcC1bNTBweF0gYmctWyNGRkZGRkZdIHAtMTAgcm91bmRlZC14bFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbGVmdDogXCI0NSVcIixcbiAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDAlLCA1MCUpXCIsXG4gICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19PlxuICAgICAgICAgIDxwPk1lbWJlciBBZGRyZXNzPC9wPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWJsYWNrIGJvcmRlci0yIHAtMTAgcHktMTUgdy1mdWxsIG15LTVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBNZW1iZXIgQWRkcmVzc1wiXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjhweFwiIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCIgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiIH19PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTE1IG1iLTEwIHB4LTggcHktWzEwcHhdIGJnLVsjMEEyNTQwXSB0ZXh0LVsjRkZGRkZGXSByb3VuZGVkLXhsXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN1Z2dlc3QgTWVtYmVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTUgbWItMTAgcHgtOCBweS1bMTBweF0gYmctWyMwQTI1NDBdIHRleHQtWyNGRkZGRkZdIHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsTW9kYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0TWVtYmVyO1xuIl0sIm5hbWVzIjpbInN1Z2dlc3RNZW1iZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwiU3VnZ2VzdE1lbWJlciIsImNhbmNlbE1vZGFsIiwiZm9ybSIsInNldEZvcm0iLCJhZGRyZXNzIiwiaGFuZGxlU3VnZ2VzdE1lbWJlciIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJwIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInBhZGRpbmciLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./modal/suggest.tsx\n"));

/***/ })

});