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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ \"(app-pages-browser)/./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// import React from \"react\";\n// import { Carousel } from \"react-responsive-carousel\";\n// import \"react-responsive-carousel/lib/styles/carousel.min.css\";\n// const Gallery = () => {\n//   const images = [\n//     \"images/construct1.png\",\n//     \"images/construct2.png\",\n//     \"images/construct3.png\",\n//     \"images/construct4.png\",\n//     \"images/construct5.png\",\n//   ];\n//   return (\n//     <div className=\"pl-4 pr-4 sm:pl-16 sm:pr-16 mx-auto w-full sm:w-7/10 lg:w-3/5\">\n//       <h2 className=\"text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-500 mt-8 mb-4 ml-8 text-center\">\n//         Gallery\n//       </h2>\n//       <Carousel\n//         showArrows\n//         autoPlay\n//         infiniteLoop\n//         renderArrowPrev={(onClickHandler, hasPrev, label) =>\n//           hasPrev && (\n//             <button\n//               type=\"button\"\n//               onClick={onClickHandler}\n//               title={label}\n//               className=\"absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl text-white focus:outline-none\"\n//             >\n//               {\"<\"}\n//             </button>\n//           )\n//         }\n//         renderArrowNext={(onClickHandler, hasNext, label) =>\n//           hasNext && (\n//             <button\n//               type=\"button\"\n//               onClick={onClickHandler}\n//               title={label}\n//               className=\"absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl text-white focus:outline-none\"\n//             >\n//               {\">\"}\n//             </button>\n//           )\n//         }\n//       >\n//         {images.map((image, index) => (\n//           <div key={index}>\n//             <img src={image} alt={`Image ${index + 1}`} />\n//           </div>\n//         ))}\n//       </Carousel>\n//     </div>\n//   );\n// };\n\n\n\n\nconst Gallery = ()=>{\n    _s();\n    const [galleries, setGalleries] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const apiUrl = \"https://strapi-157162-0.cloudclusters.net\"; // Move apiUrl declaration here\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const authToken = \"78bfaaaa070b4b8647bfcf3322ee54d0f4b9288133d9f65e4e800acb54f01a376d2b9fc5afa721cd798106e62c1e30be35ef3ba8ef5f3ed523171c6a765ce94878cc69371dfcf6517c5819595eff691eeb7ad1d302951a364e81bcdfe51a690a969d0ecdd8b5d31cb3c932868d94c64c796cb2ede1a20870c6354cfd1cbfe86f\";\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"\".concat(apiUrl, \"/api/galleries?populate=*\"), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(authToken)\n                    }\n                });\n                console.log(\"API Response:\", response.data);\n                // Extract galleries from the API response\n                const allGalleries = response.data.data || [];\n                // Set the galleries state\n                setGalleries(allGalleries);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pl-4 pr-4 sm:pl-16 sm:pr-16 mx-auto w-full sm:w-7/10 lg:w-3/5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-700 mt-12 mb-8 ml-8 text-center\",\n                children: \"Gallery\"\n            }, void 0, false, {\n                fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            galleries.map((gallery)=>{\n                var _gallery_attributes_gallery;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-xl font-semibold\",\n                            children: \"Gallery \".concat(gallery.id)\n                        }, void 0, false, {\n                            fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n                            showArrows: true,\n                            autoPlay: true,\n                            infiniteLoop: true,\n                            children: (_gallery_attributes_gallery = gallery.attributes.gallery) === null || _gallery_attributes_gallery === void 0 ? void 0 : _gallery_attributes_gallery.data.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"\".concat(apiUrl).concat(image.attributes.formats.large.url),\n                                        alt: image.attributes.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, image.id, false, {\n                                    fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, gallery.id, true, {\n                    fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Gallery.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Gallery, \"bvxIjsOSbVUKjyxcIhbg2MxGCH8=\");\n_c = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvR2FsbGVyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSw2QkFBNkI7QUFDN0Isd0RBQXdEO0FBQ3hELGtFQUFrRTtBQUVsRSwwQkFBMEI7QUFDMUIscUJBQXFCO0FBQ3JCLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwrQkFBK0I7QUFDL0IsT0FBTztBQUVQLGFBQWE7QUFDYixzRkFBc0Y7QUFDdEYsMEhBQTBIO0FBQzFILGtCQUFrQjtBQUNsQixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsdUJBQXVCO0FBQ3ZCLCtEQUErRDtBQUMvRCx5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5Qix5Q0FBeUM7QUFDekMsOEJBQThCO0FBQzlCLHNIQUFzSDtBQUN0SCxnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4QixjQUFjO0FBQ2QsWUFBWTtBQUNaLCtEQUErRDtBQUMvRCx5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLDhCQUE4QjtBQUM5Qix5Q0FBeUM7QUFDekMsOEJBQThCO0FBQzlCLHVIQUF1SDtBQUN2SCxnQkFBZ0I7QUFDaEIsc0JBQXNCO0FBQ3RCLHdCQUF3QjtBQUN4QixjQUFjO0FBQ2QsWUFBWTtBQUNaLFVBQVU7QUFDViwwQ0FBMEM7QUFDMUMsOEJBQThCO0FBQzlCLDZEQUE2RDtBQUM3RCxtQkFBbUI7QUFDbkIsY0FBYztBQUNkLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsT0FBTztBQUVQLEtBQUs7QUFDMEQ7QUFDVjtBQUMzQjtBQUN5QjtBQUVuRCxNQUFNSyxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU1JLFNBQVNDLDJDQUErQixFQUFFLCtCQUErQjtJQUUvRU4sZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsWUFBWUosa1FBQStCO2dCQUVqRCxNQUFNTSxXQUFXLE1BQU1kLDZDQUFLQSxDQUFDZSxHQUFHLENBQUMsR0FBVSxPQUFQUixRQUFPLDhCQUE0QjtvQkFDckVTLFNBQVM7d0JBQ1BDLGVBQWUsVUFBb0IsT0FBVkw7b0JBQzNCO2dCQUNGO2dCQUVBTSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCTCxTQUFTTSxJQUFJO2dCQUUxQywwQ0FBMEM7Z0JBQzFDLE1BQU1DLGVBQWVQLFNBQVNNLElBQUksQ0FBQ0EsSUFBSSxJQUFJLEVBQUU7Z0JBRTdDLDBCQUEwQjtnQkFDMUJkLGFBQWFlO1lBQ2YsRUFBRSxPQUFPQyxPQUFPO2dCQUNkSixRQUFRSSxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBRUFYO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBb0c7Ozs7OztZQUlqSG5CLFVBQVVxQixHQUFHLENBQUMsQ0FBQ0M7b0JBS1RBO3FDQUpMLDhEQUFDSjs7c0NBQ0MsOERBQUNLOzRCQUFHSixXQUFVO3NDQUF5QixXQUFzQixPQUFYRyxRQUFRRSxFQUFFOzs7Ozs7c0NBRTVELDhEQUFDOUIsK0RBQVFBOzRCQUFDK0IsVUFBVTs0QkFBQ0MsUUFBUTs0QkFBQ0MsWUFBWTt1Q0FDdkNMLDhCQUFBQSxRQUFRTSxVQUFVLENBQUNOLE9BQU8sY0FBMUJBLGtEQUFBQSw0QkFBNEJQLElBQUksQ0FBQ00sR0FBRyxDQUFDLENBQUNRLHNCQUNyQyw4REFBQ1g7OENBQ0MsNEVBQUNZO3dDQUNDQyxLQUFLLEdBQVlGLE9BQVQzQixRQUE0QyxPQUFuQzJCLE1BQU1ELFVBQVUsQ0FBQ0ksT0FBTyxDQUFDQyxLQUFLLENBQUNDLEdBQUc7d0NBQ25EQyxLQUFLTixNQUFNRCxVQUFVLENBQUNRLElBQUk7Ozs7OzttQ0FIcEJQLE1BQU1MLEVBQUU7Ozs7Ozs7Ozs7O21CQUxkRixRQUFRRSxFQUFFOzs7Ozs7Ozs7Ozs7QUFpQjVCO0dBdERNekI7S0FBQUE7QUF3RE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5LmpzPzNhNTMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCI7XG4vLyBpbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuXG4vLyBjb25zdCBHYWxsZXJ5ID0gKCkgPT4ge1xuLy8gICBjb25zdCBpbWFnZXMgPSBbXG4vLyAgICAgXCJpbWFnZXMvY29uc3RydWN0MS5wbmdcIixcbi8vICAgICBcImltYWdlcy9jb25zdHJ1Y3QyLnBuZ1wiLFxuLy8gICAgIFwiaW1hZ2VzL2NvbnN0cnVjdDMucG5nXCIsXG4vLyAgICAgXCJpbWFnZXMvY29uc3RydWN0NC5wbmdcIixcbi8vICAgICBcImltYWdlcy9jb25zdHJ1Y3Q1LnBuZ1wiLFxuLy8gICBdO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHByLTQgc206cGwtMTYgc206cHItMTYgbXgtYXV0byB3LWZ1bGwgc206dy03LzEwIGxnOnctMy81XCI+XG4vLyAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC14bCBtZDp0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCB4bDp0ZXh0LTR4bCB0ZXh0LWJsdWUtNTAwIG10LTggbWItNCBtbC04IHRleHQtY2VudGVyXCI+XG4vLyAgICAgICAgIEdhbGxlcnlcbi8vICAgICAgIDwvaDI+XG4vLyAgICAgICA8Q2Fyb3VzZWxcbi8vICAgICAgICAgc2hvd0Fycm93c1xuLy8gICAgICAgICBhdXRvUGxheVxuLy8gICAgICAgICBpbmZpbml0ZUxvb3Bcbi8vICAgICAgICAgcmVuZGVyQXJyb3dQcmV2PXsob25DbGlja0hhbmRsZXIsIGhhc1ByZXYsIGxhYmVsKSA9PlxuLy8gICAgICAgICAgIGhhc1ByZXYgJiYgKFxuLy8gICAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbi8vICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4vLyAgICAgICAgICAgICAgIHRpdGxlPXtsYWJlbH1cbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC00IHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgdGV4dC00eGwgdGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICB7XCI8XCJ9XG4vLyAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICApXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmVuZGVyQXJyb3dOZXh0PXsob25DbGlja0hhbmRsZXIsIGhhc05leHQsIGxhYmVsKSA9PlxuLy8gICAgICAgICAgIGhhc05leHQgJiYgKFxuLy8gICAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbi8vICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0hhbmRsZXJ9XG4vLyAgICAgICAgICAgICAgIHRpdGxlPXtsYWJlbH1cbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNCB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHRleHQtNHhsIHRleHQtd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcbi8vICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAge1wiPlwifVxuLy8gICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgKVxuLy8gICAgICAgICB9XG4vLyAgICAgICA+XG4vLyAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuLy8gICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9e2BJbWFnZSAke2luZGV4ICsgMX1gfSAvPlxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICApKX1cbi8vICAgICAgIDwvQ2Fyb3VzZWw+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG5cbi8vIH07XG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgR2FsbGVyeSA9ICgpID0+IHtcbiAgY29uc3QgW2dhbGxlcmllcywgc2V0R2FsbGVyaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDsgLy8gTW92ZSBhcGlVcmwgZGVjbGFyYXRpb24gaGVyZVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHthcGlVcmx9L2FwaS9nYWxsZXJpZXM/cG9wdWxhdGU9KmAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJBUEkgUmVzcG9uc2U6XCIsIHJlc3BvbnNlLmRhdGEpO1xuXG4gICAgICAgIC8vIEV4dHJhY3QgZ2FsbGVyaWVzIGZyb20gdGhlIEFQSSByZXNwb25zZVxuICAgICAgICBjb25zdCBhbGxHYWxsZXJpZXMgPSByZXNwb25zZS5kYXRhLmRhdGEgfHwgW107XG5cbiAgICAgICAgLy8gU2V0IHRoZSBnYWxsZXJpZXMgc3RhdGVcbiAgICAgICAgc2V0R2FsbGVyaWVzKGFsbEdhbGxlcmllcyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHByLTQgc206cGwtMTYgc206cHItMTYgbXgtYXV0byB3LWZ1bGwgc206dy03LzEwIGxnOnctMy81XCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC14bCBtZDp0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCB4bDp0ZXh0LTR4bCB0ZXh0LWJsdWUtNzAwIG10LTEyIG1iLTggbWwtOCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICBHYWxsZXJ5XG4gICAgICA8L2gyPlxuXG4gICAgICB7Z2FsbGVyaWVzLm1hcCgoZ2FsbGVyeSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Z2FsbGVyeS5pZH0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZFwiPntgR2FsbGVyeSAke2dhbGxlcnkuaWR9YH08L2gzPlxuXG4gICAgICAgICAgPENhcm91c2VsIHNob3dBcnJvd3MgYXV0b1BsYXkgaW5maW5pdGVMb29wPlxuICAgICAgICAgICAge2dhbGxlcnkuYXR0cmlidXRlcy5nYWxsZXJ5Py5kYXRhLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2ltYWdlLmlkfT5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake2FwaVVybH0ke2ltYWdlLmF0dHJpYnV0ZXMuZm9ybWF0cy5sYXJnZS51cmx9YH1cbiAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UuYXR0cmlidXRlcy5uYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XG4iXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHYWxsZXJ5IiwiZ2FsbGVyaWVzIiwic2V0R2FsbGVyaWVzIiwiYXBpVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJmZXRjaERhdGEiLCJhdXRoVG9rZW4iLCJORVhUX1BVQkxJQ19BUElfS0VZIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiYWxsR2FsbGVyaWVzIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsImdhbGxlcnkiLCJoMyIsImlkIiwic2hvd0Fycm93cyIsImF1dG9QbGF5IiwiaW5maW5pdGVMb29wIiwiYXR0cmlidXRlcyIsImltYWdlIiwiaW1nIiwic3JjIiwiZm9ybWF0cyIsImxhcmdlIiwidXJsIiwiYWx0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Gallery.js\n"));

/***/ })

});