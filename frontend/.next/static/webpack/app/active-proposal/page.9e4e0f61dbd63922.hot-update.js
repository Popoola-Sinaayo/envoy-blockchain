"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/active-proposal/page",{

/***/ "(app-pages-browser)/./contractFunctions/getCurrrentProposal.ts":
/*!**************************************************!*\
  !*** ./contractFunctions/getCurrrentProposal.ts ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/providers/provider-browser.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/ethers/lib.esm/contract/contract.js\");\n/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/constant */ \"(app-pages-browser)/./utils/constant.ts\");\n\n\nconst contractAddress = \"0xf6d9ce89BbD23095a1126f95353F807a24e0F3CC\";\nconst getCurrentProposal = async ()=>{\n    if (window.ethereum === undefined) {\n        throw new Error(\"MetaMask not found\");\n    }\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.BrowserProvider(window.ethereum);\n    const signer = await provider.getSigner();\n    const contract = new ethers__WEBPACK_IMPORTED_MODULE_2__.Contract(contractAddress, _utils_constant__WEBPACK_IMPORTED_MODULE_0__.ABI, signer);\n    const data = await contract.waitForDeployment();\n    const currentProposal = await contract.currentProposal();\n    return currentProposal;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCurrentProposal);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbnRyYWN0RnVuY3Rpb25zL2dldEN1cnJyZW50UHJvcG9zYWwudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUNtRDtBQUNaO0FBRXZDLE1BQU1HLGtCQUFrQjtBQVF4QixNQUFNQyxxQkFBcUI7SUFDekIsSUFBSUMsT0FBT0MsUUFBUSxLQUFLQyxXQUFXO1FBQ2pDLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE1BQU1DLFdBQVcsSUFBSVIsbURBQWVBLENBQUNJLE9BQU9DLFFBQVE7SUFDcEQsTUFBTUksU0FBUyxNQUFNRCxTQUFTRSxTQUFTO0lBQ3ZDLE1BQU1DLFdBQVcsSUFBSVosNENBQVFBLENBQUNHLGlCQUFpQkQsZ0RBQUdBLEVBQUVRO0lBQ3BELE1BQU1HLE9BQU8sTUFBTUQsU0FBU0UsaUJBQWlCO0lBQzdDLE1BQU1DLGtCQUFrQixNQUFNSCxTQUFTRyxlQUFlO0lBQ3RELE9BQU9BO0FBQ1Q7QUFFQSwrREFBZVgsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRyYWN0RnVuY3Rpb25zL2dldEN1cnJyZW50UHJvcG9zYWwudHM/NzU5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSBcIkBtZXRhbWFzay9wcm92aWRlcnNcIjtcbmltcG9ydCB7IENvbnRyYWN0LCBCcm93c2VyUHJvdmlkZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBBQkkgfSBmcm9tIFwiQC91dGlscy9jb25zdGFudFwiO1xuXG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4ZjZkOWNlODlCYkQyMzA5NWExMTI2Zjk1MzUzRjgwN2EyNGUwRjNDQ1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIEV0aGVyZXVtPzogTWV0YU1hc2tJbnBhZ2VQcm92aWRlcjtcbiAgfVxufVxuXG5jb25zdCBnZXRDdXJyZW50UHJvcG9zYWwgPSBhc3luYyAoKSA9PiB7XG4gIGlmICh3aW5kb3cuZXRoZXJldW0gPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGFNYXNrIG5vdCBmb3VuZFwiKTtcbiAgfVxuICBjb25zdCBwcm92aWRlciA9IG5ldyBCcm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgY29uc3Qgc2lnbmVyID0gYXdhaXQgcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgQUJJLCBzaWduZXIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgY29udHJhY3Qud2FpdEZvckRlcGxveW1lbnQoKTtcbiAgY29uc3QgY3VycmVudFByb3Bvc2FsID0gYXdhaXQgY29udHJhY3QuY3VycmVudFByb3Bvc2FsKCk7XG4gIHJldHVybiBjdXJyZW50UHJvcG9zYWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRDdXJyZW50UHJvcG9zYWw7XG4iXSwibmFtZXMiOlsiQ29udHJhY3QiLCJCcm93c2VyUHJvdmlkZXIiLCJBQkkiLCJjb250cmFjdEFkZHJlc3MiLCJnZXRDdXJyZW50UHJvcG9zYWwiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInVuZGVmaW5lZCIsIkVycm9yIiwicHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsImRhdGEiLCJ3YWl0Rm9yRGVwbG95bWVudCIsImN1cnJlbnRQcm9wb3NhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./contractFunctions/getCurrrentProposal.ts\n"));

/***/ })

});