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

/***/ "(app-pages-browser)/./contractFunctions/suggestMember.ts":
/*!********************************************!*\
  !*** ./contractFunctions/suggestMember.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constant */ \"(app-pages-browser)/./utils/constant.ts\");\n\n\nconst contractAddress = \"0xf6d9ce89BbD23095a1126f95353F807a24e0F3CC\";\nconst suggestMember = async (address, actorName, primaryProducer)=>{\n    try {\n        if (window.ethereum === undefined) {\n            throw new Error(\"MetaMask not found\");\n        }\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(contractAddress, _utils_constant__WEBPACK_IMPORTED_MODULE_0__.ABI, signer);\n        const data = await contract.waitForDeployment();\n        console.log(\"data\", data);\n        console.log(\"contract\", contract);\n        const suggested = await contract.proposeAddress(address, actorName, primaryProducer);\n        return suggested;\n    } catch (error) {\n        // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        const errorMessage = error;\n        console.log(\"error\", error);\n        console.log(errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.message, errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.error, errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.error.message);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (suggestMember);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRyYWN0RnVuY3Rpb25zL3N1Z2dlc3RNZW1iZXIudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUNtRDtBQUNaO0FBRXZDLE1BQU1HLGtCQUFrQjtBQVF4QixNQUFNQyxnQkFBZ0IsT0FDcEJDLFNBQ0FDLFdBQ0FDO0lBRUEsSUFBSTtRQUNGLElBQUlDLE9BQU9DLFFBQVEsS0FBS0MsV0FBVztZQUNqQyxNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxNQUFNQyxXQUFXLElBQUlYLG1EQUFlQSxDQUFDTyxPQUFPQyxRQUFRO1FBQ3BELE1BQU1JLFNBQVMsTUFBTUQsU0FBU0UsU0FBUztRQUN2QyxNQUFNQyxXQUFXLElBQUlmLDRDQUFRQSxDQUFDRyxpQkFBaUJELGdEQUFHQSxFQUFFVztRQUNwRCxNQUFNRyxPQUFPLE1BQU1ELFNBQVNFLGlCQUFpQjtRQUM3Q0MsUUFBUUMsR0FBRyxDQUFDLFFBQVFIO1FBQ3BCRSxRQUFRQyxHQUFHLENBQUMsWUFBWUo7UUFDeEIsTUFBTUssWUFBWSxNQUFNTCxTQUFTTSxjQUFjLENBQzdDaEIsU0FDQUMsV0FDQUM7UUFFRixPQUFPYTtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkLDhEQUE4RDtRQUM5RCxNQUFNQyxlQUFvQkQ7UUFDMUJKLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRztRQUNyQkosUUFBUUMsR0FBRyxDQUNUSSx5QkFBQUEsbUNBQUFBLGFBQWNDLE9BQU8sRUFDckJELHlCQUFBQSxtQ0FBQUEsYUFBY0QsS0FBSyxFQUNuQkMseUJBQUFBLG1DQUFBQSxhQUFjRCxLQUFLLENBQUNFLE9BQU87SUFFL0I7QUFDRjtBQUVBLCtEQUFlcEIsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250cmFjdEZ1bmN0aW9ucy9zdWdnZXN0TWVtYmVyLnRzPzY2ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB9IGZyb20gXCJAbWV0YW1hc2svcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBDb250cmFjdCwgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgQUJJIH0gZnJvbSBcIkAvdXRpbHMvY29uc3RhbnRcIjtcblxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweGY2ZDljZTg5QmJEMjMwOTVhMTEyNmY5NTM1M0Y4MDdhMjRlMEYzQ0NcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBFdGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3Qgc3VnZ2VzdE1lbWJlciA9IGFzeW5jIChcbiAgYWRkcmVzczogc3RyaW5nLFxuICBhY3Rvck5hbWU6IHN0cmluZyxcbiAgcHJpbWFyeVByb2R1Y2VyOiBzdHJpbmdcbikgPT4ge1xuICB0cnkge1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YU1hc2sgbm90IGZvdW5kXCIpO1xuICAgIH1cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBCcm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBDb250cmFjdChjb250cmFjdEFkZHJlc3MsIEFCSSwgc2lnbmVyKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY29udHJhY3Qud2FpdEZvckRlcGxveW1lbnQoKTtcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJjb250cmFjdFwiLCBjb250cmFjdCk7XG4gICAgY29uc3Qgc3VnZ2VzdGVkID0gYXdhaXQgY29udHJhY3QucHJvcG9zZUFkZHJlc3MoXG4gICAgICBhZGRyZXNzLFxuICAgICAgYWN0b3JOYW1lLFxuICAgICAgcHJpbWFyeVByb2R1Y2VyXG4gICAgKTtcbiAgICByZXR1cm4gc3VnZ2VzdGVkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlOiBhbnkgPSBlcnJvcjtcbiAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIGVycm9yKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGVycm9yTWVzc2FnZT8ubWVzc2FnZSxcbiAgICAgIGVycm9yTWVzc2FnZT8uZXJyb3IsXG4gICAgICBlcnJvck1lc3NhZ2U/LmVycm9yLm1lc3NhZ2VcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdWdnZXN0TWVtYmVyO1xuIl0sIm5hbWVzIjpbIkNvbnRyYWN0IiwiQnJvd3NlclByb3ZpZGVyIiwiQUJJIiwiY29udHJhY3RBZGRyZXNzIiwic3VnZ2VzdE1lbWJlciIsImFkZHJlc3MiLCJhY3Rvck5hbWUiLCJwcmltYXJ5UHJvZHVjZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInVuZGVmaW5lZCIsIkVycm9yIiwicHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsImRhdGEiLCJ3YWl0Rm9yRGVwbG95bWVudCIsImNvbnNvbGUiLCJsb2ciLCJzdWdnZXN0ZWQiLCJwcm9wb3NlQWRkcmVzcyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./contractFunctions/suggestMember.ts\n"));

/***/ })

});