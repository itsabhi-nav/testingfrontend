"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import React from \"react\";\n// import { Carousel } from \"react-responsive-carousel\";\n// import \"react-responsive-carousel/lib/styles/carousel.min.css\";\n// const Gallery = () => {\n//   const images = [\n//     \"images/construct1.png\",\n//     \"images/construct2.png\",\n//     \"images/construct3.png\",\n//     \"images/construct4.png\",\n//     \"images/construct5.png\",\n//   ];\n//   return (\n//     <div className=\"pl-4 pr-4 sm:pl-16 sm:pr-16 mx-auto w-full sm:w-7/10 lg:w-3/5\">\n//       <h2 className=\"text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-500 mt-8 mb-4 ml-8 text-center\">\n//         Gallery\n//       </h2>\n//       <Carousel\n//         showArrows\n//         autoPlay\n//         infiniteLoop\n//         renderArrowPrev={(onClickHandler, hasPrev, label) =>\n//           hasPrev && (\n//             <button\n//               type=\"button\"\n//               onClick={onClickHandler}\n//               title={label}\n//               className=\"absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-white focus:outline-none\"\n//             >\n//               {\"<\"}\n//             </button>\n//           )\n//         }\n//         renderArrowNext={(onClickHandler, hasNext, label) =>\n//           hasNext && (\n//             <button\n//               type=\"button\"\n//               onClick={onClickHandler}\n//               title={label}\n//               className=\"absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-white focus:outline-none\"\n//             >\n//               {\">\"}\n//             </button>\n//           )\n//         }\n//       >\n//         {images.map((image, index) => (\n//           <div key={index}>\n//             <img src={image} alt={`Image ${index + 1}`} />\n//           </div>\n//         ))}\n//       </Carousel>\n//     </div>\n//   );\n// };\n\n\n\n\nconst Gallery = ()=>{\n    _s();\n    const [galleries, setGalleries] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const authToken = \"78bfaaaa070b4b8647bfcf3322ee54d0f4b9288133d9f65e4e800acb54f01a376d2b9fc5afa721cd798106e62c1e30be35ef3ba8ef5f3ed523171c6a765ce94878cc69371dfcf6517c5819595eff691eeb7ad1d302951a364e81bcdfe51a690a969d0ecdd8b5d31cb3c932868d94c64c796cb2ede1a20870c6354cfd1cbfe86f\";\n                const apiUrl1 = \"https://strapi-157162-0.cloudclusters.net\";\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(apiUrl1, \"/api/galleries?populate=*\"), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(authToken)\n                    }\n                });\n                console.log(\"API Response:\", response.data);\n                // Extract galleries from the API response\n                const allGalleries = response.data.data || [];\n                // Set the galleries state\n                setGalleries(allGalleries);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pl-4 pr-4 sm:pl-16 sm:pr-16 mx-auto w-full sm:w-7/10 lg:w-3/5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 mt-12 mb-8 ml-8 text-center\",\n                children: \"Gallery\"\n            }, void 0, false, {\n                fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            galleries.map((gallery)=>{\n                var _gallery_attributes_gallery;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xl font-semibold\",\n                            children: \"Gallery \".concat(gallery.id)\n                        }, void 0, false, {\n                            fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n                            showArrows: true,\n                            autoPlay: true,\n                            infiniteLoop: true,\n                            children: (_gallery_attributes_gallery = gallery.attributes.gallery) === null || _gallery_attributes_gallery === void 0 ? void 0 : _gallery_attributes_gallery.data.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"\".concat(apiUrl).concat(image.attributes.formats.large.url),\n                                        alt: image.attributes.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, image.id, false, {\n                                    fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, gallery.id, true, {\n                    fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"bvxIjsOSbVUKjyxcIhbg2MxGCH8=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvR2FsbGVyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSw2QkFBNkI7QUFDN0Isd0RBQXdEO0FBQ3hELGtFQUFrRTtBQUVsRSwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsT0FBTztBQUVQLGFBQWE7QUFDYixzRkFBc0Y7QUFDdEYsMEhBQTBIO0FBQzFILGtCQUFrQjtBQUNsQixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLCtEQUErRDtBQUMvRCx5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5Qix5Q0FBeUM7QUFDekMsOEJBQThCO0FBQzlCLHNIQUFzSDtBQUN0SCxnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4QixjQUFjO0FBQ2QsWUFBWTtBQUNaLCtEQUErRDtBQUMvRCx5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5Qix5Q0FBeUM7QUFDekMsOEJBQThCO0FBQzlCLHVIQUF1SDtBQUN2SCxnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4QixjQUFjO0FBQ2QsWUFBWTtBQUNaLFVBQVU7QUFDViwwQ0FBMEM7QUFDMUMsOEJBQThCO0FBQzlCLDZEQUE2RDtBQUM3RCxtQkFBbUI7QUFDbkIsY0FBYztBQUNkLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsT0FBTztBQUVQLEtBQUs7QUFFMEQ7QUFDVjtBQUMzQjtBQUN5QjtBQUVuRCxNQUFNSyxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1LLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxZQUFZQyxrUUFBK0I7Z0JBQ2pELE1BQU1HLFVBQVNILDJDQUErQjtnQkFFOUMsTUFBTUssV0FBVyxNQUFNZCw2Q0FBS0EsQ0FBQ2UsR0FBRyxDQUFDLEdBQVUsT0FBUEgsU0FBTyw4QkFBNEI7b0JBQ3JFSSxTQUFTO3dCQUNQQyxlQUFlLFVBQW9CLE9BQVZUO29CQUMzQjtnQkFDRjtnQkFFQVUsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkwsU0FBU00sSUFBSTtnQkFFMUMsMENBQTBDO2dCQUMxQyxNQUFNQyxlQUFlUCxTQUFTTSxJQUFJLENBQUNBLElBQUksSUFBSSxFQUFFO2dCQUU3QywwQkFBMEI7Z0JBQzFCZCxhQUFhZTtZQUNmLEVBQUUsT0FBT0MsT0FBTztnQkFDZEosUUFBUUksS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEM7UUFDRjtRQUVBZjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFvRzs7Ozs7O1lBSWpIbkIsVUFBVXFCLEdBQUcsQ0FBQyxDQUFDQztvQkFLVEE7cUNBSkwsOERBQUNKOztzQ0FDQyw4REFBQ0s7NEJBQUdKLFdBQVU7c0NBQXlCLFdBQXNCLE9BQVhHLFFBQVFFLEVBQUU7Ozs7OztzQ0FFNUQsOERBQUM5QiwrREFBUUE7NEJBQUMrQixVQUFVOzRCQUFDQyxRQUFROzRCQUFDQyxZQUFZO3VDQUN2Q0wsOEJBQUFBLFFBQVFNLFVBQVUsQ0FBQ04sT0FBTyxjQUExQkEsa0RBQUFBLDRCQUE0QlAsSUFBSSxDQUFDTSxHQUFHLENBQUMsQ0FBQ1Esc0JBQ3JDLDhEQUFDWDs4Q0FDQyw0RUFBQ1k7d0NBQ0NDLEtBQUssR0FBWUYsT0FBVHRCLFFBQTRDLE9BQW5Dc0IsTUFBTUQsVUFBVSxDQUFDSSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsR0FBRzt3Q0FDbkRDLEtBQUtOLE1BQU1ELFVBQVUsQ0FBQ1EsSUFBSTs7Ozs7O21DQUhwQlAsTUFBTUwsRUFBRTs7Ozs7Ozs7Ozs7bUJBTGRGLFFBQVFFLEVBQUU7Ozs7Ozs7Ozs7OztBQWlCNUI7R0F0RE16QjtLQUFBQTtBQXdETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbGxlcnkuanM/M2E1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcbi8vIGltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCI7XG5cbi8vIGNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGltYWdlcyA9IFtcbi8vICAgICBcImltYWdlcy9jb25zdHJ1Y3QxLnBuZ1wiLFxuLy8gICAgIFwiaW1hZ2VzL2NvbnN0cnVjdDIucG5nXCIsXG4vLyAgICAgXCJpbWFnZXMvY29uc3RydWN0My5wbmdcIixcbi8vICAgICBcImltYWdlcy9jb25zdHJ1Y3Q0LnBuZ1wiLFxuLy8gICAgIFwiaW1hZ2VzL2NvbnN0cnVjdDUucG5nXCIsXG4vLyAgIF07XG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgcHItNCBzbTpwbC0xNiBzbTpwci0xNiBteC1hdXRvIHctZnVsbCBzbTp3LTcvMTAgbGc6dy0zLzVcIj5cbi8vICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIHhsOnRleHQtNHhsIHRleHQtYmx1ZS01MDAgbXQtOCBtYi00IG1sLTggdGV4dC1jZW50ZXJcIj5cbi8vICAgICAgICAgR2FsbGVyeVxuLy8gICAgICAgPC9oMj5cbi8vICAgICAgIDxDYXJvdXNlbFxuLy8gICAgICAgICBzaG93QXJyb3dzXG4vLyAgICAgICAgIGF1dG9QbGF5XG4vLyAgICAgICAgIGluZmluaXRlTG9vcFxuLy8gICAgICAgICByZW5kZXJBcnJvd1ByZXY9eyhvbkNsaWNrSGFuZGxlciwgaGFzUHJldiwgbGFiZWwpID0+XG4vLyAgICAgICAgICAgaGFzUHJldiAmJiAoXG4vLyAgICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuLy8gICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbi8vICAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTQgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LTR4bCB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4vLyAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgIHtcIjxcIn1cbi8vICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgIClcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZW5kZXJBcnJvd05leHQ9eyhvbkNsaWNrSGFuZGxlciwgaGFzTmV4dCwgbGFiZWwpID0+XG4vLyAgICAgICAgICAgaGFzTmV4dCAmJiAoXG4vLyAgICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuLy8gICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbi8vICAgICAgICAgICAgICAgdGl0bGU9e2xhYmVsfVxuLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdGV4dC00eGwgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICB7XCI+XCJ9XG4vLyAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICApXG4vLyAgICAgICAgIH1cbi8vICAgICAgID5cbi8vICAgICAgICAge2ltYWdlcy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxuLy8gICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGFsdD17YEltYWdlICR7aW5kZXggKyAxfWB9IC8+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9DYXJvdXNlbD5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcblxuLy8gfTtcblxuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEdhbGxlcnkgPSAoKSA9PiB7XG4gIGNvbnN0IFtnYWxsZXJpZXMsIHNldEdhbGxlcmllc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhdXRoVG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZO1xuICAgICAgICBjb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vYXBpL2dhbGxlcmllcz9wb3B1bGF0ZT0qYCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoVG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkFQSSBSZXNwb25zZTpcIiwgcmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgICAgLy8gRXh0cmFjdCBnYWxsZXJpZXMgZnJvbSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgICAgIGNvbnN0IGFsbEdhbGxlcmllcyA9IHJlc3BvbnNlLmRhdGEuZGF0YSB8fCBbXTtcblxuICAgICAgICAvLyBTZXQgdGhlIGdhbGxlcmllcyBzdGF0ZVxuICAgICAgICBzZXRHYWxsZXJpZXMoYWxsR2FsbGVyaWVzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgcHItNCBzbTpwbC0xNiBzbTpwci0xNiBteC1hdXRvIHctZnVsbCBzbTp3LTcvMTAgbGc6dy0zLzVcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LXhsIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIHhsOnRleHQtNHhsIHRleHQtYmx1ZS03MDAgbXQtMTIgbWItOCBtbC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgIEdhbGxlcnlcbiAgICAgIDwvaDI+XG5cbiAgICAgIHtnYWxsZXJpZXMubWFwKChnYWxsZXJ5KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtnYWxsZXJ5LmlkfT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+e2BHYWxsZXJ5ICR7Z2FsbGVyeS5pZH1gfTwvaDM+XG5cbiAgICAgICAgICA8Q2Fyb3VzZWwgc2hvd0Fycm93cyBhdXRvUGxheSBpbmZpbml0ZUxvb3A+XG4gICAgICAgICAgICB7Z2FsbGVyeS5hdHRyaWJ1dGVzLmdhbGxlcnk/LmRhdGEubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2UuaWR9PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7YXBpVXJsfSR7aW1hZ2UuYXR0cmlidXRlcy5mb3JtYXRzLmxhcmdlLnVybH1gfVxuICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hdHRyaWJ1dGVzLm5hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJDYXJvdXNlbCIsImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkdhbGxlcnkiLCJnYWxsZXJpZXMiLCJzZXRHYWxsZXJpZXMiLCJmZXRjaERhdGEiLCJhdXRoVG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsImFwaVVybCIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJhbGxHYWxsZXJpZXMiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwiZ2FsbGVyeSIsImgzIiwiaWQiLCJzaG93QXJyb3dzIiwiYXV0b1BsYXkiLCJpbmZpbml0ZUxvb3AiLCJhdHRyaWJ1dGVzIiwiaW1hZ2UiLCJpbWciLCJzcmMiLCJmb3JtYXRzIiwibGFyZ2UiLCJ1cmwiLCJhbHQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Gallery.js\n"));

/***/ })

});