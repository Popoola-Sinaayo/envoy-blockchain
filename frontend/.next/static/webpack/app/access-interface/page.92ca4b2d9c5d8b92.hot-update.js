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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _contractFunctions_getIfMember__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contractFunctions/getIfMember */ \"(app-pages-browser)/./contractFunctions/getIfMember.ts\");\n/* harmony import */ var _modal_add_lot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/modal/add-lot */ \"(app-pages-browser)/./modal/add-lot.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AccessInterface = ()=>{\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [member, setMember] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const copyWalletAddress = async ()=>{\n        var _window_ethereum;\n        const accounts = await ((_window_ethereum = window.ethereum) === null || _window_ethereum === void 0 ? void 0 : _window_ethereum.request({\n            method: \"eth_requestAccounts\"\n        }));\n        console.log(\"accounts\", accounts);\n        if (accounts !== null && accounts !== undefined) {\n            // eslint-disable-next-line @typescript-eslint/no-explicit-any\n            const accountRead = accounts;\n            //   setAccount(accountRead[0]);\n            navigator.clipboard.writeText(accountRead[0]);\n            alert(\"Address copied to clipboard\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (window.ethereum === undefined) {\n            alert(\"MetaMask not found\");\n        }\n        const getDetails = async ()=>{\n            const result = await (0,_contractFunctions_getIfMember__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n            console.log(\"result\", result);\n            setMember(result);\n        };\n        getDetails();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-full bg-[#F5F5F5]\",\n        children: [\n            showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_add_lot__WEBPACK_IMPORTED_MODULE_2__.AddLotModal, {\n                cancelModal: ()=>{\n                    setShowModal(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center pt-10 text-[#333333]\",\n                children: \"Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-[#333333]\",\n                children: member ? \"You're a member of the Envoy Traceability System\" : \"You're not a member of the Envoy Traceability System\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-5 flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mx-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                        onClick: ()=>{\n                            copyWalletAddress();\n                        },\n                        children: \"Copy addresss\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-15 mb-10 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                        onClick: ()=>{\n                            setShowModal(true);\n                        },\n                        children: \"Add New Lot Procurement\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mt-15 mb-10 mx-6 px-8 py-[10px] bg-[#0A2540] text-[#FFFFFF] rounded-xl\",\n                        onClick: ()=>{\n                            setShowModal(true);\n                        },\n                        children: \"Suggest New Member\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Lot 1, ChainId, Address\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookair/User/blockchain/frontend/app/access-interface/page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AccessInterface, \"MJu6xOeSm/C+YqVD7G0yoEtDrRI=\");\n_c = AccessInterface;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccessInterface);\nvar _c;\n$RefreshReg$(_c, \"AccessInterface\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hY2Nlc3MtaW50ZXJmYWNlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21FO0FBQ3JCO0FBQ0s7QUFFbkQsTUFBTUssa0JBQWtCOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1NLG9CQUFvQjtZQUNEQztRQUF2QixNQUFNQyxXQUFXLFFBQU1ELG1CQUFBQSxPQUFPRSxRQUFRLGNBQWZGLHVDQUFBQSxpQkFBaUJHLE9BQU8sQ0FBQztZQUM5Q0MsUUFBUTtRQUNWO1FBRUFDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZTDtRQUN4QixJQUFJQSxhQUFhLFFBQVFBLGFBQWFNLFdBQVc7WUFDL0MsOERBQThEO1lBQzlELE1BQU1DLGNBQW1CUDtZQUN6QixnQ0FBZ0M7WUFDaENRLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSCxXQUFXLENBQUMsRUFBRTtZQUM1Q0ksTUFBTTtRQUNSO0lBQ0Y7SUFFQXBCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVEsT0FBT0UsUUFBUSxLQUFLSyxXQUFXO1lBQ2pDSyxNQUFNO1FBQ1I7UUFDQSxNQUFNQyxhQUFhO1lBQ2pCLE1BQU1DLFNBQVMsTUFBTXpCLDBFQUFvQkE7WUFDekNnQixRQUFRQyxHQUFHLENBQUMsVUFBVVE7WUFDdEJoQixVQUFVZ0I7UUFDWjtRQUNBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOztZQUNackIsMkJBQ0MsOERBQUNMLHVEQUFXQTtnQkFDVjJCLGFBQWE7b0JBQ1hyQixhQUFhO2dCQUNmOzs7Ozs7MEJBR0osOERBQUNzQjtnQkFBR0YsV0FBVTswQkFBc0Q7Ozs7OzswQkFHcEUsOERBQUNHO2dCQUFFSCxXQUFVOzBCQUNWbkIsU0FDRyxxREFDQTs7Ozs7OzBCQUVOLDhEQUFDa0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDSTt3QkFDQ0osV0FBVTt3QkFDVkssU0FBUzs0QkFDUHRCO3dCQUNGO2tDQUNEOzs7Ozs7a0NBSUQsOERBQUNxQjt3QkFDQ0osV0FBVTt3QkFDVkssU0FBUzs0QkFDUHpCLGFBQWE7d0JBQ2Y7a0NBQ0Q7Ozs7OztrQ0FJRCw4REFBQ3dCO3dCQUNDSixXQUFVO3dCQUNWSyxTQUFTOzRCQUNQekIsYUFBYTt3QkFDZjtrQ0FDRDs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDbUI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRztrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVg7R0ExSE16QjtLQUFBQTtBQTRITiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvYWNjZXNzLWludGVyZmFjZS9wYWdlLnRzeD83Y2VkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IGdldElmQWRkcmVzc0lzTWVtYmVyIGZyb20gXCJAL2NvbnRyYWN0RnVuY3Rpb25zL2dldElmTWVtYmVyXCI7XG5pbXBvcnQgeyBBZGRMb3RNb2RhbCB9IGZyb20gXCJAL21vZGFsL2FkZC1sb3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFjY2Vzc0ludGVyZmFjZSA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21lbWJlciwgc2V0TWVtYmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBjb3B5V2FsbGV0QWRkcmVzcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bT8ucmVxdWVzdCh7XG4gICAgICBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coXCJhY2NvdW50c1wiLCBhY2NvdW50cyk7XG4gICAgaWYgKGFjY291bnRzICE9PSBudWxsICYmIGFjY291bnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICBjb25zdCBhY2NvdW50UmVhZDogYW55ID0gYWNjb3VudHM7XG4gICAgICAvLyAgIHNldEFjY291bnQoYWNjb3VudFJlYWRbMF0pO1xuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYWNjb3VudFJlYWRbMF0pO1xuICAgICAgYWxlcnQoXCJBZGRyZXNzIGNvcGllZCB0byBjbGlwYm9hcmRcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGVydChcIk1ldGFNYXNrIG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gICAgY29uc3QgZ2V0RGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldElmQWRkcmVzc0lzTWVtYmVyKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xuICAgICAgc2V0TWVtYmVyKHJlc3VsdCk7XG4gICAgfTtcbiAgICBnZXREZXRhaWxzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIGJnLVsjRjVGNUY1XVwiPlxuICAgICAge3Nob3dNb2RhbCAmJiAoXG4gICAgICAgIDxBZGRMb3RNb2RhbFxuICAgICAgICAgIGNhbmNlbE1vZGFsPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBwdC0xMCB0ZXh0LVsjMzMzMzMzXVwiPlxuICAgICAgICBFbnZveSBUcmFjZWFiaWxpdHkgU3lzdGVtXG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1bIzMzMzMzM11cIj5cbiAgICAgICAge21lbWJlclxuICAgICAgICAgID8gXCJZb3UncmUgYSBtZW1iZXIgb2YgdGhlIEVudm95IFRyYWNlYWJpbGl0eSBTeXN0ZW1cIlxuICAgICAgICAgIDogXCJZb3UncmUgbm90IGEgbWVtYmVyIG9mIHRoZSBFbnZveSBUcmFjZWFiaWxpdHkgU3lzdGVtXCJ9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTUgZmxleC1jb2xcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LTEwIHB4LTggcHktWzEwcHhdIGJnLVsjMEEyNTQwXSB0ZXh0LVsjRkZGRkZGXSByb3VuZGVkLXhsXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBjb3B5V2FsbGV0QWRkcmVzcygpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBDb3B5IGFkZHJlc3NzXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xNSBtYi0xMCBweC04IHB5LVsxMHB4XSBiZy1bIzBBMjU0MF0gdGV4dC1bI0ZGRkZGRl0gcm91bmRlZC14bFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgTmV3IExvdCBQcm9jdXJlbWVudFxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTUgbWItMTAgbXgtNiBweC04IHB5LVsxMHB4XSBiZy1bIzBBMjU0MF0gdGV4dC1bI0ZGRkZGRl0gcm91bmRlZC14bFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTdWdnZXN0IE5ldyBNZW1iZXJcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMFwiPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICAgIDxwPkxvdCAxLCBDaGFpbklkLCBBZGRyZXNzPC9wPlxuICAgICAgICA8cD5Mb3QgMSwgQ2hhaW5JZCwgQWRkcmVzczwvcD5cbiAgICAgICAgPHA+TG90IDEsIENoYWluSWQsIEFkZHJlc3M8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY2Vzc0ludGVyZmFjZTtcbiJdLCJuYW1lcyI6WyJnZXRJZkFkZHJlc3NJc01lbWJlciIsIkFkZExvdE1vZGFsIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFjY2Vzc0ludGVyZmFjZSIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsIm1lbWJlciIsInNldE1lbWJlciIsImNvcHlXYWxsZXRBZGRyZXNzIiwid2luZG93IiwiYWNjb3VudHMiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwidW5kZWZpbmVkIiwiYWNjb3VudFJlYWQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJhbGVydCIsImdldERldGFpbHMiLCJyZXN1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYW5jZWxNb2RhbCIsImgxIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/access-interface/page.tsx\n"));

/***/ })

});