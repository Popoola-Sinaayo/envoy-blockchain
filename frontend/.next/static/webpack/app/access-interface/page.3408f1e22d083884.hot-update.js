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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constant */ \"(app-pages-browser)/./utils/constant.ts\");\n\n\nconst suggestMember = async (address, actorName, primaryProducer)=>{\n    try {\n        if (window.ethereum === undefined) {\n            throw new Error(\"MetaMask not found\");\n        }\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(contractAddress, _utils_constant__WEBPACK_IMPORTED_MODULE_0__.ABI, signer);\n        const data = await contract.waitForDeployment();\n        console.log(\"data\", data);\n        console.log(\"contract\", contract);\n        const suggested = await contract.proposeAddress(address, actorName, primaryProducer);\n        // await suggested.wait();\n        return suggested;\n    } catch (error) {\n        var _errorMessage_error, _errorMessage_data;\n        // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        const errorMessage = error;\n        // console.log(\"error\", error);\n        console.log(errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.message, errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.error, errorMessage === null || errorMessage === void 0 ? void 0 : (_errorMessage_error = errorMessage.error) === null || _errorMessage_error === void 0 ? void 0 : _errorMessage_error.message, errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.data, errorMessage === null || errorMessage === void 0 ? void 0 : (_errorMessage_data = errorMessage.data) === null || _errorMessage_data === void 0 ? void 0 : _errorMessage_data.originalError, errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.originalError);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (suggestMember);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRyYWN0RnVuY3Rpb25zL3N1Z2dlc3RNZW1iZXIudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUNtRDtBQUNaO0FBU3ZDLE1BQU1HLGdCQUFnQixPQUNwQkMsU0FDQUMsV0FDQUM7SUFFQSxJQUFJO1FBQ0YsSUFBSUMsT0FBT0MsUUFBUSxLQUFLQyxXQUFXO1lBQ2pDLE1BQU0sSUFBSUMsTUFBTTtRQUNsQjtRQUNBLE1BQU1DLFdBQVcsSUFBSVYsbURBQWVBLENBQUNNLE9BQU9DLFFBQVE7UUFDcEQsTUFBTUksU0FBUyxNQUFNRCxTQUFTRSxTQUFTO1FBQ3ZDLE1BQU1DLFdBQVcsSUFBSWQsNENBQVFBLENBQUNlLGlCQUFpQmIsZ0RBQUdBLEVBQUVVO1FBQ3BELE1BQU1JLE9BQU8sTUFBTUYsU0FBU0csaUJBQWlCO1FBQzdDQyxRQUFRQyxHQUFHLENBQUMsUUFBUUg7UUFDcEJFLFFBQVFDLEdBQUcsQ0FBQyxZQUFZTDtRQUN4QixNQUFNTSxZQUFZLE1BQU1OLFNBQVNPLGNBQWMsQ0FDN0NqQixTQUNBQyxXQUNBQztRQUVGLDBCQUEwQjtRQUMxQixPQUFPYztJQUNULEVBQUUsT0FBT0UsT0FBTztZQU9aQyxxQkFFQUE7UUFSRiw4REFBOEQ7UUFDOUQsTUFBTUEsZUFBb0JEO1FBQzFCLCtCQUErQjtRQUMvQkosUUFBUUMsR0FBRyxDQUNUSSx5QkFBQUEsbUNBQUFBLGFBQWNDLE9BQU8sRUFDckJELHlCQUFBQSxtQ0FBQUEsYUFBY0QsS0FBSyxFQUNuQkMseUJBQUFBLG9DQUFBQSxzQkFBQUEsYUFBY0QsS0FBSyxjQUFuQkMsMENBQUFBLG9CQUFxQkMsT0FBTyxFQUM1QkQseUJBQUFBLG1DQUFBQSxhQUFjUCxJQUFJLEVBQ2xCTyx5QkFBQUEsb0NBQUFBLHFCQUFBQSxhQUFjUCxJQUFJLGNBQWxCTyx5Q0FBQUEsbUJBQW9CRSxhQUFhLEVBQ2pDRix5QkFBQUEsbUNBQUFBLGFBQWNFLGFBQWE7SUFFL0I7QUFDRjtBQUVBLCtEQUFldEIsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250cmFjdEZ1bmN0aW9ucy9zdWdnZXN0TWVtYmVyLnRzPzY2ODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWV0YU1hc2tJbnBhZ2VQcm92aWRlciB9IGZyb20gXCJAbWV0YW1hc2svcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBDb250cmFjdCwgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xuaW1wb3J0IHsgQUJJIH0gZnJvbSBcIkAvdXRpbHMvY29uc3RhbnRcIjtcblxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIEV0aGVyZXVtPzogTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcbiAgfVxufVxuXG5jb25zdCBzdWdnZXN0TWVtYmVyID0gYXN5bmMgKFxuICBhZGRyZXNzOiBzdHJpbmcsXG4gIGFjdG9yTmFtZTogc3RyaW5nLFxuICBwcmltYXJ5UHJvZHVjZXI6IHN0cmluZ1xuKSA9PiB7XG4gIHRyeSB7XG4gICAgaWYgKHdpbmRvdy5ldGhlcmV1bSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRhTWFzayBub3QgZm91bmRcIik7XG4gICAgfVxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IEJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgQUJJLCBzaWduZXIpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250cmFjdC53YWl0Rm9yRGVwbG95bWVudCgpO1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcImNvbnRyYWN0XCIsIGNvbnRyYWN0KTtcbiAgICBjb25zdCBzdWdnZXN0ZWQgPSBhd2FpdCBjb250cmFjdC5wcm9wb3NlQWRkcmVzcyhcbiAgICAgIGFkZHJlc3MsXG4gICAgICBhY3Rvck5hbWUsXG4gICAgICBwcmltYXJ5UHJvZHVjZXJcbiAgICApO1xuICAgIC8vIGF3YWl0IHN1Z2dlc3RlZC53YWl0KCk7XG4gICAgcmV0dXJuIHN1Z2dlc3RlZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGNvbnN0IGVycm9yTWVzc2FnZTogYW55ID0gZXJyb3I7XG4gICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBlcnJvck1lc3NhZ2U/Lm1lc3NhZ2UsXG4gICAgICBlcnJvck1lc3NhZ2U/LmVycm9yLFxuICAgICAgZXJyb3JNZXNzYWdlPy5lcnJvcj8ubWVzc2FnZSxcbiAgICAgIGVycm9yTWVzc2FnZT8uZGF0YSxcbiAgICAgIGVycm9yTWVzc2FnZT8uZGF0YT8ub3JpZ2luYWxFcnJvcixcbiAgICAgIGVycm9yTWVzc2FnZT8ub3JpZ2luYWxFcnJvclxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN1Z2dlc3RNZW1iZXI7XG4iXSwibmFtZXMiOlsiQ29udHJhY3QiLCJCcm93c2VyUHJvdmlkZXIiLCJBQkkiLCJzdWdnZXN0TWVtYmVyIiwiYWRkcmVzcyIsImFjdG9yTmFtZSIsInByaW1hcnlQcm9kdWNlciIsIndpbmRvdyIsImV0aGVyZXVtIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJwcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiY29udHJhY3RBZGRyZXNzIiwiZGF0YSIsIndhaXRGb3JEZXBsb3ltZW50IiwiY29uc29sZSIsImxvZyIsInN1Z2dlc3RlZCIsInByb3Bvc2VBZGRyZXNzIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwib3JpZ2luYWxFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./contractFunctions/suggestMember.ts\n"));

/***/ })

});