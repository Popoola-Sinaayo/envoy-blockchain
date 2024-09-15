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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constant */ \"(app-pages-browser)/./utils/constant.ts\");\n\n\nconst contractAddress = \"0xf6d9ce89BbD23095a1126f95353F807a24e0F3CC\";\nconst suggestMember = async (address, actorName, primaryProducer)=>{\n    try {\n        if (window.ethereum === undefined) {\n            throw new Error(\"MetaMask not found\");\n        }\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.BrowserProvider(window.ethereum);\n        const signer = await provider.getSigner();\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(contractAddress, _utils_constant__WEBPACK_IMPORTED_MODULE_0__.ABI, signer);\n        const data = await contract.waitForDeployment();\n        console.log(\"data\", data);\n        console.log(\"contract\", contract);\n        const suggested = await contract.proposeAddress(address, actorName, primaryProducer);\n        return suggested;\n    } catch (error) {\n        // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        const errorMessage = error;\n        console.log(\"error\", error);\n        console.log(errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.message, errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.error, error.error.message);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (suggestMember);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRyYWN0RnVuY3Rpb25zL3N1Z2dlc3RNZW1iZXIudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUNtRDtBQUNaO0FBRXZDLE1BQU1HLGtCQUFrQjtBQVF4QixNQUFNQyxnQkFBZ0IsT0FDcEJDLFNBQ0FDLFdBQ0FDO0lBRUEsSUFBSTtRQUNGLElBQUlDLE9BQU9DLFFBQVEsS0FBS0MsV0FBVztZQUNqQyxNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDQSxNQUFNQyxXQUFXLElBQUlYLG1EQUFlQSxDQUFDTyxPQUFPQyxRQUFRO1FBQ3BELE1BQU1JLFNBQVMsTUFBTUQsU0FBU0UsU0FBUztRQUN2QyxNQUFNQyxXQUFXLElBQUlmLDRDQUFRQSxDQUFDRyxpQkFBaUJELGdEQUFHQSxFQUFFVztRQUNwRCxNQUFNRyxPQUFPLE1BQU1ELFNBQVNFLGlCQUFpQjtRQUM3Q0MsUUFBUUMsR0FBRyxDQUFDLFFBQVFIO1FBQ3BCRSxRQUFRQyxHQUFHLENBQUMsWUFBWUo7UUFDeEIsTUFBTUssWUFBWSxNQUFNTCxTQUFTTSxjQUFjLENBQzdDaEIsU0FDQUMsV0FDQUM7UUFFRixPQUFPYTtJQUNULEVBQUUsT0FBT0UsT0FBTztRQUNkLDhEQUE4RDtRQUM5RCxNQUFNQyxlQUFvQkQ7UUFDMUJKLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRztRQUNyQkosUUFBUUMsR0FBRyxDQUNUSSx5QkFBQUEsbUNBQUFBLGFBQWNDLE9BQU8sRUFDckJELHlCQUFBQSxtQ0FBQUEsYUFBY0QsS0FBSyxFQUNuQkEsTUFBTUEsS0FBSyxDQUFDRSxPQUFPO0lBRXZCO0FBQ0Y7QUFFQSwrREFBZXBCLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udHJhY3RGdW5jdGlvbnMvc3VnZ2VzdE1lbWJlci50cz82Njg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFNYXNrSW5wYWdlUHJvdmlkZXIgfSBmcm9tIFwiQG1ldGFtYXNrL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgQ29udHJhY3QsIEJyb3dzZXJQcm92aWRlciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IEFCSSB9IGZyb20gXCJAL3V0aWxzL2NvbnN0YW50XCI7XG5cbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhmNmQ5Y2U4OUJiRDIzMDk1YTExMjZmOTUzNTNGODA3YTI0ZTBGM0NDXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgRXRoZXJldW0/OiBNZXRhTWFza0lucGFnZVByb3ZpZGVyO1xuICB9XG59XG5cbmNvbnN0IHN1Z2dlc3RNZW1iZXIgPSBhc3luYyAoXG4gIGFkZHJlc3M6IHN0cmluZyxcbiAgYWN0b3JOYW1lOiBzdHJpbmcsXG4gIHByaW1hcnlQcm9kdWNlcjogc3RyaW5nXG4pID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIG5vdCBmb3VuZFwiKTtcbiAgICB9XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgQnJvd3NlclByb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBBQkksIHNpZ25lcik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbnRyYWN0LndhaXRGb3JEZXBsb3ltZW50KCk7XG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiY29udHJhY3RcIiwgY29udHJhY3QpO1xuICAgIGNvbnN0IHN1Z2dlc3RlZCA9IGF3YWl0IGNvbnRyYWN0LnByb3Bvc2VBZGRyZXNzKFxuICAgICAgYWRkcmVzcyxcbiAgICAgIGFjdG9yTmFtZSxcbiAgICAgIHByaW1hcnlQcm9kdWNlclxuICAgICk7XG4gICAgcmV0dXJuIHN1Z2dlc3RlZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIGNvbnN0IGVycm9yTWVzc2FnZTogYW55ID0gZXJyb3I7XG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBlcnJvck1lc3NhZ2U/Lm1lc3NhZ2UsXG4gICAgICBlcnJvck1lc3NhZ2U/LmVycm9yLFxuICAgICAgZXJyb3IuZXJyb3IubWVzc2FnZVxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN1Z2dlc3RNZW1iZXI7XG4iXSwibmFtZXMiOlsiQ29udHJhY3QiLCJCcm93c2VyUHJvdmlkZXIiLCJBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJzdWdnZXN0TWVtYmVyIiwiYWRkcmVzcyIsImFjdG9yTmFtZSIsInByaW1hcnlQcm9kdWNlciIsIndpbmRvdyIsImV0aGVyZXVtIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJwcm92aWRlciIsInNpZ25lciIsImdldFNpZ25lciIsImNvbnRyYWN0IiwiZGF0YSIsIndhaXRGb3JEZXBsb3ltZW50IiwiY29uc29sZSIsImxvZyIsInN1Z2dlc3RlZCIsInByb3Bvc2VBZGRyZXNzIiwiZXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./contractFunctions/suggestMember.ts\n"));

/***/ })

});