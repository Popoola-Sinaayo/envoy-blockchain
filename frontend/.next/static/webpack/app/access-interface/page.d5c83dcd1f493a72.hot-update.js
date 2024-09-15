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

/***/ "(app-pages-browser)/./app/access-interface/page.tsx":
/*!***************************************!*\
  !*** ./app/access-interface/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _modal_add_lot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modal/add-lot */ \"(app-pages-browser)/./modal/add-lot.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AccessInterface = ()=>{\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const copyWalletAddress = async ()=>{\n        var _window_ethereum;\n        const accounts = await ((_window_ethereum = window.ethereum) === null || _window_ethereum === void 0 ? void 0 : _window_ethereum.request({\n            method: \"eth_requestAccounts\"\n        }));\n        console.log(\"accounts\", accounts);\n        if (accounts !== null && accounts !== undefined) {\n            // eslint-disable-next-line @typescript-eslint/no-explicit-any\n            const accountRead = accounts;\n            //   setAccount(accountRead[0]);\n            navigator.clipboard.writeText(accountRead[0]);\n            alert(\"Address copied to clipboard\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (window.ethereum === undefined) {\n            alert(\"MetaMask not found\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-full bg-[#F5F5F5]\",\n        children: [\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_add_lot__WEBPACK_IMPORTED_MODULE_1__.AddLotModal, {\n                cancelModal: ()=>{\n                    setShowModal(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center pt-10 text-[#333333]\",\n                children: \"Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[#333333]\",\n                children: \"You're a member of the Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-5 flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mx-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                        onClick: ()=>{\n                            copyWalletAddress();\n                        },\n                        children: \"Copy addresss\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                        onClick: ()=>{\n                            setShowModal(true);\n                        },\n                        children: \"Add New Lot Procurement\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccessInterface, \"yDc3Km869gD6lnL/d2JehHdpdes=\");\n_c = AccessInterface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccessInterface);\nvar _c;\n$RefreshReg$(_c, \"AccessInterface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hY2Nlc3MtaW50ZXJmYWNlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDOEM7QUFDSztBQUVuRCxNQUFNSSxrQkFBa0I7O0lBQ3RCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNSSxvQkFBb0I7WUFDREM7UUFBdkIsTUFBTUMsV0FBVyxRQUFNRCxtQkFBQUEsT0FBT0UsUUFBUSxjQUFmRix1Q0FBQUEsaUJBQWlCRyxPQUFPLENBQUM7WUFDOUNDLFFBQVE7UUFDVjtRQUVBQyxRQUFRQyxHQUFHLENBQUMsWUFBWUw7UUFDeEIsSUFBSUEsYUFBYSxRQUFRQSxhQUFhTSxXQUFXO1lBQy9DLDhEQUE4RDtZQUM5RCxNQUFNQyxjQUFtQlA7WUFDekIsZ0NBQWdDO1lBQ2hDUSxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0gsV0FBVyxDQUFDLEVBQUU7WUFDNUNJLE1BQU07UUFDUjtJQUNGO0lBRUFsQixnREFBU0EsQ0FBQztRQUNSLElBQUlNLE9BQU9FLFFBQVEsS0FBS0ssV0FBVztZQUNqQ0ssTUFBTTtRQUNSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7WUFDWmpCLDJCQUNDLDhEQUFDTCx1REFBV0E7Z0JBQ1Z1QixhQUFhO29CQUNYakIsYUFBYTtnQkFDZjs7Ozs7OzBCQUdKLDhEQUFDa0I7Z0JBQUdGLFdBQVU7MEJBQXNEOzs7Ozs7MEJBR3BFLDhEQUFDRztnQkFBRUgsV0FBVTswQkFBNkI7Ozs7OzswQkFHMUMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQ0NKLFdBQVU7d0JBQ1ZLLFNBQVM7NEJBQ1BwQjt3QkFDRjtrQ0FDRDs7Ozs7O2tDQUlELDhEQUFDbUI7d0JBQ0NKLFdBQVU7d0JBQ1ZLLFNBQVM7NEJBQ1ByQixhQUFhO3dCQUNmO2tDQUNEOzs7Ozs7Ozs7Ozs7MEJBS0gsOERBQUNlO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ0E7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlYO0dBeEdNckI7S0FBQUE7QUEwR04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FjY2Vzcy1pbnRlcmZhY2UvcGFnZS50c3g/N2NlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IEFkZExvdE1vZGFsIH0gZnJvbSBcIkAvbW9kYWwvYWRkLWxvdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWNjZXNzSW50ZXJmYWNlID0gKCkgPT4ge1xuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGNvcHlXYWxsZXRBZGRyZXNzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtPy5yZXF1ZXN0KHtcbiAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsIGFjY291bnRzKTtcbiAgICBpZiAoYWNjb3VudHMgIT09IG51bGwgJiYgYWNjb3VudHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgIGNvbnN0IGFjY291bnRSZWFkOiBhbnkgPSBhY2NvdW50cztcbiAgICAgIC8vICAgc2V0QWNjb3VudChhY2NvdW50UmVhZFswXSk7XG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChhY2NvdW50UmVhZFswXSk7XG4gICAgICBhbGVydChcIkFkZHJlc3MgY29waWVkIHRvIGNsaXBib2FyZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGFsZXJ0KFwiTWV0YU1hc2sgbm90IGZvdW5kXCIpO1xuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIGJnLVsjRjVGNUY1XVwiPlxuICAgICAge3Nob3dNb2RhbCAmJiAoXG4gICAgICAgIDxBZGRMb3RNb2RhbFxuICAgICAgICAgIGNhbmNlbE1vZGFsPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBwdC0xMCB0ZXh0LVsjMzMzMzMzXVwiPlxuICAgICAgICBFbnZveSBUcmFjZWFiaWxpdHkgU3lzdGVtXG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1bIzMzMzMzM11cIj5cbiAgICAgICAgWW91JmFwb3M7cmUgYSBtZW1iZXIgb2YgdGhlIEVudm95IFRyYWNlYWJpbGl0eSBTeXN0ZW1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNSBmbGV4LWNvbFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtMTAgcHgtOCBweS1bMTBweF0gYmctWyMwQTI1NDBdIHRleHQtWyNGRkZGRkZdIHJvdW5kZWQteGxcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGNvcHlXYWxsZXRBZGRyZXNzKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIENvcHkgYWRkcmVzc3NcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTE1IG1iLTEwIHB4LTggcHktWzEwcHhdIGJnLVsjMEEyNTQwXSB0ZXh0LVsjRkZGRkZGXSByb3VuZGVkLXhsXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93TW9kYWwodHJ1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCBOZXcgTG90IFByb2N1cmVtZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2Nlc3NJbnRlcmZhY2U7XG4iXSwibmFtZXMiOlsiQWRkTG90TW9kYWwiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWNjZXNzSW50ZXJmYWNlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiY29weVdhbGxldEFkZHJlc3MiLCJ3aW5kb3ciLCJhY2NvdW50cyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJhY2NvdW50UmVhZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FuY2VsTW9kYWwiLCJoMSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/access-interface/page.tsx\n"));

/***/ })

});