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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constant */ \"(app-pages-browser)/./utils/constant.ts\");\n\n\nconst contractAddress = \"0xf6d9ce89BbD23095a1126f95353F807a24e0F3CC\";\nconst suggestMember = async (address, actorName, primaryProducer)=>{\n    try {\n        if (window.ethereum === undefined) {\n            throw new Error(\"MetaMask not found\");\n        }\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(contractAddress, _utils_constant__WEBPACK_IMPORTED_MODULE_0__.ABI, signer);\n        const data = await contract.waitForDeployment();\n        console.log(\"data\", data);\n        console.log(\"contract\", contract);\n        const suggested = await contract.proposeAddress(address, actorName, primaryProducer);\n        // await suggested.wait();\n        return suggested;\n    } catch (error) {\n        var _errorMessage_error, _errorMessage_data;\n        // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        const errorMessage = error;\n        // console.log(\"error\", error);\n        console.log(errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.message, errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.error, errorMessage === null || errorMessage === void 0 ? void 0 : (_errorMessage_error = errorMessage.error) === null || _errorMessage_error === void 0 ? void 0 : _errorMessage_error.message, errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.data, errorMessage === null || errorMessage === void 0 ? void 0 : (_errorMessage_data = errorMessage.data) === null || _errorMessage_data === void 0 ? void 0 : _errorMessage_data.originalError, errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.originalError);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (suggestMember);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRyYWN0RnVuY3Rpb25zL3N1Z2dlc3RNZW1iZXIudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUN1RDtBQUNoQjtBQUV2QyxNQUFNRyxrQkFBa0I7QUFReEIsTUFBTUMsZ0JBQWdCLE9BQ3BCQyxTQUNBQyxXQUNBQztJQUVBLElBQUk7UUFDRixJQUFJQyxPQUFPQyxRQUFRLEtBQUtDLFdBQVc7WUFDakMsTUFBTSxJQUFJQyxNQUFNO1FBQ2xCO1FBQ0EsTUFBTUMsV0FBVyxJQUFJWCxtREFBZUEsQ0FBQ08sT0FBT0MsUUFBUTtRQUNwRCxNQUFNSSxTQUFTLE1BQU1ELFNBQVNFLFNBQVM7UUFDdkMsTUFBTUMsV0FBVyxJQUFJZiw0Q0FBUUEsQ0FBQ0csaUJBQWlCRCxnREFBR0EsRUFBRVc7UUFDcEQsTUFBTUcsT0FBTyxNQUFNRCxTQUFTRSxpQkFBaUI7UUFDN0NDLFFBQVFDLEdBQUcsQ0FBQyxRQUFRSDtRQUNwQkUsUUFBUUMsR0FBRyxDQUFDLFlBQVlKO1FBQ3hCLE1BQU1LLFlBQVksTUFBTUwsU0FBU00sY0FBYyxDQUM3Q2hCLFNBQ0FDLFdBQ0FDO1FBRUYsMEJBQTBCO1FBQzFCLE9BQU9hO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1lBT1pDLHFCQUVBQTtRQVJGLDhEQUE4RDtRQUM5RCxNQUFNQSxlQUFvQkQ7UUFDMUIsK0JBQStCO1FBQy9CSixRQUFRQyxHQUFHLENBQ1RJLHlCQUFBQSxtQ0FBQUEsYUFBY0MsT0FBTyxFQUNyQkQseUJBQUFBLG1DQUFBQSxhQUFjRCxLQUFLLEVBQ25CQyx5QkFBQUEsb0NBQUFBLHNCQUFBQSxhQUFjRCxLQUFLLGNBQW5CQywwQ0FBQUEsb0JBQXFCQyxPQUFPLEVBQzVCRCx5QkFBQUEsbUNBQUFBLGFBQWNQLElBQUksRUFDbEJPLHlCQUFBQSxvQ0FBQUEscUJBQUFBLGFBQWNQLElBQUksY0FBbEJPLHlDQUFBQSxtQkFBb0JFLGFBQWEsRUFDakNGLHlCQUFBQSxtQ0FBQUEsYUFBY0UsYUFBYTtJQUUvQjtBQUNGO0FBRUEsK0RBQWVyQixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRyYWN0RnVuY3Rpb25zL3N1Z2dlc3RNZW1iZXIudHM/NjY4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcbmltcG9ydCB7IENvbnRyYWN0LCBCcm93c2VyUHJvdmlkZXIsIHdhIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgQUJJIH0gZnJvbSBcIkAvdXRpbHMvY29uc3RhbnRcIjtcblxuY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweGY2ZDljZTg5QmJEMjMwOTVhMTEyNmY5NTM1M0Y4MDdhMjRlMEYzQ0NcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBFdGhlcmV1bT86IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gIH1cbn1cblxuY29uc3Qgc3VnZ2VzdE1lbWJlciA9IGFzeW5jIChcbiAgYWRkcmVzczogc3RyaW5nLFxuICBhY3Rvck5hbWU6IHN0cmluZyxcbiAgcHJpbWFyeVByb2R1Y2VyOiBzdHJpbmdcbikgPT4ge1xuICB0cnkge1xuICAgIGlmICh3aW5kb3cuZXRoZXJldW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0YU1hc2sgbm90IGZvdW5kXCIpO1xuICAgIH1cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBCcm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBjb25zdCBzaWduZXIgPSBhd2FpdCBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBDb250cmFjdChjb250cmFjdEFkZHJlc3MsIEFCSSwgc2lnbmVyKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgY29udHJhY3Qud2FpdEZvckRlcGxveW1lbnQoKTtcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJjb250cmFjdFwiLCBjb250cmFjdCk7XG4gICAgY29uc3Qgc3VnZ2VzdGVkID0gYXdhaXQgY29udHJhY3QucHJvcG9zZUFkZHJlc3MoXG4gICAgICBhZGRyZXNzLFxuICAgICAgYWN0b3JOYW1lLFxuICAgICAgcHJpbWFyeVByb2R1Y2VyXG4gICAgKTtcbiAgICAvLyBhd2FpdCBzdWdnZXN0ZWQud2FpdCgpO1xuICAgIHJldHVybiBzdWdnZXN0ZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBjb25zdCBlcnJvck1lc3NhZ2U6IGFueSA9IGVycm9yO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyb3IpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgZXJyb3JNZXNzYWdlPy5tZXNzYWdlLFxuICAgICAgZXJyb3JNZXNzYWdlPy5lcnJvcixcbiAgICAgIGVycm9yTWVzc2FnZT8uZXJyb3I/Lm1lc3NhZ2UsXG4gICAgICBlcnJvck1lc3NhZ2U/LmRhdGEsXG4gICAgICBlcnJvck1lc3NhZ2U/LmRhdGE/Lm9yaWdpbmFsRXJyb3IsXG4gICAgICBlcnJvck1lc3NhZ2U/Lm9yaWdpbmFsRXJyb3JcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdWdnZXN0TWVtYmVyO1xuIl0sIm5hbWVzIjpbIkNvbnRyYWN0IiwiQnJvd3NlclByb3ZpZGVyIiwiQUJJIiwiY29udHJhY3RBZGRyZXNzIiwic3VnZ2VzdE1lbWJlciIsImFkZHJlc3MiLCJhY3Rvck5hbWUiLCJwcmltYXJ5UHJvZHVjZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInVuZGVmaW5lZCIsIkVycm9yIiwicHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsImRhdGEiLCJ3YWl0Rm9yRGVwbG95bWVudCIsImNvbnNvbGUiLCJsb2ciLCJzdWdnZXN0ZWQiLCJwcm9wb3NlQWRkcmVzcyIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIm9yaWdpbmFsRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./contractFunctions/suggestMember.ts\n"));

/***/ })

});