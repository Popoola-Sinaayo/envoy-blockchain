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

/***/ "(app-pages-browser)/./contractFunctions/getIfMember.ts":
/*!******************************************!*\
  !*** ./contractFunctions/getIfMember.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constant */ \"(app-pages-browser)/./utils/constant.ts\");\n\n\nconst contractAddress = \"0xF1aa6c95192fB0aA54cf7C4d6473516F168218c2\";\nconst getIfAddressIsMember = async ()=>{\n    if (window.ethereum === undefined) {\n        throw new Error(\"MetaMask not found\");\n    }\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.BrowserProvider(window.ethereum);\n    const signer = await provider.getSigner();\n    const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(contractAddress, _utils_constant__WEBPACK_IMPORTED_MODULE_0__.ABI, signer);\n    const data = await contract.waitForDeployment();\n    console.log(\"data\", data);\n    console.log(\"contract\", contract);\n    const isMember = await contract.getIfSenderIsMember();\n    return isMember;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getIfAddressIsMember);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRyYWN0RnVuY3Rpb25zL2dldElmTWVtYmVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFDbUQ7QUFDWjtBQUV2QyxNQUFNRyxrQkFBa0I7QUFPeEIsTUFBTUMsdUJBQXVCO0lBQzNCLElBQUlDLE9BQU9DLFFBQVEsS0FBS0MsV0FBVztRQUNqQyxNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxNQUFNQyxXQUFXLElBQUlSLG1EQUFlQSxDQUFDSSxPQUFPQyxRQUFRO0lBQ3BELE1BQU1JLFNBQVMsTUFBTUQsU0FBU0UsU0FBUztJQUN2QyxNQUFNQyxXQUFXLElBQUlaLDRDQUFRQSxDQUFDRyxpQkFBaUJELGdEQUFHQSxFQUFFUTtJQUNwRCxNQUFNRyxPQUFPLE1BQU1ELFNBQVNFLGlCQUFpQjtJQUM3Q0MsUUFBUUMsR0FBRyxDQUFDLFFBQVFIO0lBQ3BCRSxRQUFRQyxHQUFHLENBQUMsWUFBWUo7SUFDeEIsTUFBTUssV0FBVyxNQUFNTCxTQUFTTSxtQkFBbUI7SUFDbkQsT0FBT0Q7QUFDVDtBQUVBLCtEQUFlYixvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udHJhY3RGdW5jdGlvbnMvZ2V0SWZNZW1iZXIudHM/ZGVhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcbmltcG9ydCB7IENvbnRyYWN0LCBCcm93c2VyUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBBQkkgfSBmcm9tIFwiQC91dGlscy9jb25zdGFudFwiO1xuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4RjFhYTZjOTUxOTJmQjBhQTU0Y2Y3QzRkNjQ3MzUxNkYxNjgyMThjMlwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIEV0aGVyZXVtPzogTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcbiAgfVxufVxuY29uc3QgZ2V0SWZBZGRyZXNzSXNNZW1iZXIgPSBhc3luYyAoKSA9PiB7XG4gIGlmICh3aW5kb3cuZXRoZXJldW0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIG5vdCBmb3VuZFwiKTtcbiAgfVxuICBjb25zdCBwcm92aWRlciA9IG5ldyBCcm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgQUJJLCBzaWduZXIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgY29udHJhY3Qud2FpdEZvckRlcGxveW1lbnQoKTtcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICBjb25zb2xlLmxvZyhcImNvbnRyYWN0XCIsIGNvbnRyYWN0KTtcbiAgY29uc3QgaXNNZW1iZXIgPSBhd2FpdCBjb250cmFjdC5nZXRJZlNlbmRlcklzTWVtYmVyKCk7XG4gIHJldHVybiBpc01lbWJlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldElmQWRkcmVzc0lzTWVtYmVyO1xuIl0sIm5hbWVzIjpbIkNvbnRyYWN0IiwiQnJvd3NlclByb3ZpZGVyIiwiQUJJIiwiY29udHJhY3RBZGRyZXNzIiwiZ2V0SWZBZGRyZXNzSXNNZW1iZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInVuZGVmaW5lZCIsIkVycm9yIiwicHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsImRhdGEiLCJ3YWl0Rm9yRGVwbG95bWVudCIsImNvbnNvbGUiLCJsb2ciLCJpc01lbWJlciIsImdldElmU2VuZGVySXNNZW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./contractFunctions/getIfMember.ts\n"));

/***/ })

});