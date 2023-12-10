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

/***/ "(app-pages-browser)/./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../components/Loader */ \"(app-pages-browser)/./components/Loader.js\");\n/* harmony import */ var react_compare_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-compare-slider */ \"(app-pages-browser)/./node_modules/react-compare-slider/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ImageSlider = ()=>{\n    _s();\n    const [apiData, setApiData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const apiUrl = \"https://strapi-157162-0.cloudclusters.net\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const authToken = \"78bfaaaa070b4b8647bfcf3322ee54d0f4b9288133d9f65e4e800acb54f01a376d2b9fc5afa721cd798106e62c1e30be35ef3ba8ef5f3ed523171c6a765ce94878cc69371dfcf6517c5819595eff691eeb7ad1d302951a364e81bcdfe51a690a969d0ecdd8b5d31cb3c932868d94c64c796cb2ede1a20870c6354cfd1cbfe86f\";\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"\".concat(apiUrl, \"/api/projects?populate=*\"), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(authToken)\n                    }\n                });\n                setApiData(response.data.data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        apiUrl\n    ]);\n    if (!apiData || apiData.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, undefined);\n    }\n    // For Loader\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Simulate an asynchronous operation (e.g., fetching data)\n        const fetchData = async ()=>{\n            // Simulating a delay of 2 seconds\n            await new Promise((resolve)=>setTimeout(resolve, 2000)); // Specify the delay (2000 milliseconds)\n            setLoading(false); // Set loading to false when data is fetched\n        };\n        fetchData();\n    }, []);\n    return apiData.map((project, index)=>{\n        const { attributes } = project;\n        const { title, description, image1, image2 } = attributes;\n        // Construct the image URLs from the correct paths in the API response\n        const imageUrl1 = \"\".concat(apiUrl).concat(image1.data.attributes.url);\n        const imageUrl2 = \"\".concat(apiUrl).concat(image2.data.attributes.url);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"-mb-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center text-4xl pt-6 font-bold bg-gray-200 mt-6 bg-gray\",\n                    children: index === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"pl-6 lg:pl-0 pr-6 lg:pr-0 text-lg xl:text-4xl text-blue-700 sm:text-4xl md:text-3xl lg:text-4x\",\n                        children: \"Image Annotations\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex lg:flex-row flex-col bg-gray-200 lg:pl-16 lg:pr-16\",\n                    children: [\n                        loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                            lineNumber: 72,\n                            columnNumber: 23\n                        }, undefined),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-2/5 w-full p-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_compare_slider__WEBPACK_IMPORTED_MODULE_4__.ReactCompareSlider, {\n                                boundsPadding: 0,\n                                itemOne: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_compare_slider__WEBPACK_IMPORTED_MODULE_4__.ReactCompareSliderImage, {\n                                    alt: \"Image one\",\n                                    src: imageUrl1,\n                                    style: {\n                                        objectFit: \"cover\",\n                                        width: \"100%\",\n                                        height: \"100%\"\n                                    }\n                                }, void 0, false, void 0, void 0),\n                                itemTwo: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_compare_slider__WEBPACK_IMPORTED_MODULE_4__.ReactCompareSliderImage, {\n                                    alt: \"Image two\",\n                                    src: imageUrl2,\n                                    style: {\n                                        objectFit: \"cover\",\n                                        width: \"100%\",\n                                        height: \"100%\"\n                                    }\n                                }, void 0, false, void 0, void 0),\n                                keyboardIncrement: \"5%\",\n                                position: 50,\n                                style: {\n                                    height: \"100%\",\n                                    width: \"100%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:w-3/5 w-full pl-6 pr-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl font-bold lg:mt-16\",\n                                    children: title\n                                }, void 0, false, {\n                                    fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-700 leading-relaxed mb-4 text-justify mt-2\",\n                                    children: description\n                                }, void 0, false, {\n                                    fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                index < apiData.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                    className: \"w-full flex mx-auto border border-blue-700\"\n                }, void 0, false, {\n                    fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/Abhinav/Downloads/frji/last frontend/frontend/components/Projects.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined);\n    });\n};\n_s(ImageSlider, \"dbnJ8iRKAurh0xg51FzbLHnC1n8=\");\n_c = ImageSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageSlider);\nvar _c;\n$RefreshReg$(_c, \"ImageSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvamVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ21EO0FBQ3pCO0FBQ2M7QUFLVjtBQUc5QixNQUFNTyxjQUFjOztJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNUSxTQUFTQywyQ0FBK0I7SUFFOUNWLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFlBQVlKLGtRQUErQjtnQkFFakQsTUFBTU0sV0FBVyxNQUFNZCw2Q0FBS0EsQ0FBQ2UsR0FBRyxDQUFDLEdBQVUsT0FBUFIsUUFBTyw2QkFBMkI7b0JBQ3BFUyxTQUFTO3dCQUNQQyxlQUFlLFVBQW9CLE9BQVZMO29CQUMzQjtnQkFDRjtnQkFFQU4sV0FBV1EsU0FBU0ksSUFBSSxDQUFDQSxJQUFJO1lBQy9CLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDeEM7UUFDRjtRQUVBUjtJQUNGLEdBQUc7UUFBQ0o7S0FBTztJQUVYLElBQUksQ0FBQ0YsV0FBV0EsUUFBUWdCLE1BQU0sS0FBSyxHQUFHO1FBQ3BDLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2Q7SUFDQSxhQUFhO0lBQ2IsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUiwyREFBMkQ7UUFDM0QsTUFBTWEsWUFBWTtZQUNoQixrQ0FBa0M7WUFDbEMsTUFBTSxJQUFJYyxRQUFRLENBQUNDLFVBQVlDLFdBQVdELFNBQVMsUUFBUSx3Q0FBd0M7WUFDbkdGLFdBQVcsUUFBUSw0Q0FBNEM7UUFDakU7UUFFQWI7SUFDRixHQUFHLEVBQUU7SUFFTCxPQUFPTixRQUFRdUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDO1FBQzNCLE1BQU0sRUFBRUMsVUFBVSxFQUFFLEdBQUdGO1FBQ3ZCLE1BQU0sRUFBRUcsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdKO1FBRS9DLHNFQUFzRTtRQUN0RSxNQUFNSyxZQUFZLEdBQVlGLE9BQVQzQixRQUFvQyxPQUEzQjJCLE9BQU9oQixJQUFJLENBQUNhLFVBQVUsQ0FBQ00sR0FBRztRQUN4RCxNQUFNQyxZQUFZLEdBQVlILE9BQVQ1QixRQUFvQyxPQUEzQjRCLE9BQU9qQixJQUFJLENBQUNhLFVBQVUsQ0FBQ00sR0FBRztRQUV4RCxxQkFDRSw4REFBQ2Y7WUFBZ0JpQixXQUFVOzs4QkFDekIsOERBQUNqQjtvQkFBSWlCLFdBQVU7OEJBQ1pULFVBQVUsbUJBQ1QsOERBQUNVO3dCQUFHRCxXQUFVO2tDQUFpRzs7Ozs7Ozs7Ozs7OEJBTW5ILDhEQUFDakI7b0JBQUlpQixXQUFVOzt3QkFDWmhCLHlCQUFXLDhEQUFDdEIsMERBQU1BOzs7Ozt3QkFBSTtzQ0FDdkIsOERBQUNxQjs0QkFBSWlCLFdBQVU7c0NBQ2IsNEVBQUNyQyxvRUFBa0JBO2dDQUNqQnVDLGVBQWU7Z0NBQ2ZDLHVCQUNFLDhEQUFDdkMseUVBQXVCQTtvQ0FDdEJ3QyxLQUFJO29DQUNKQyxLQUFLUjtvQ0FDTFMsT0FBTzt3Q0FBRUMsV0FBVzt3Q0FBU0MsT0FBTzt3Q0FBUUMsUUFBUTtvQ0FBTzs7Z0NBRy9EQyx1QkFDRSw4REFBQzlDLHlFQUF1QkE7b0NBQ3RCd0MsS0FBSTtvQ0FDSkMsS0FBS047b0NBQ0xPLE9BQU87d0NBQUVDLFdBQVc7d0NBQVNDLE9BQU87d0NBQVFDLFFBQVE7b0NBQU87O2dDQUcvREUsbUJBQWtCO2dDQUNsQkMsVUFBVTtnQ0FDVk4sT0FBTztvQ0FDTEcsUUFBUTtvQ0FDUkQsT0FBTztnQ0FDVDs7Ozs7Ozs7Ozs7c0NBR0osOERBQUN6Qjs0QkFBSWlCLFdBQVU7OzhDQUNiLDhEQUFDQztvQ0FBR0QsV0FBVTs4Q0FBK0JQOzs7Ozs7OENBQzdDLDhEQUFDb0I7b0NBQUViLFdBQVU7OENBQ1ZOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBS05ILFFBQVF6QixRQUFRZ0IsTUFBTSxHQUFHLG1CQUN4Qiw4REFBQ2dDO29CQUFHZCxXQUFVOzs7Ozs7O1dBN0NSVDs7Ozs7SUFpRGQ7QUFDRjtHQXBHTTFCO0tBQUFBO0FBc0dOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvamVjdHMuanM/YzMxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIvY29tcG9uZW50cy9Mb2FkZXJcIjtcblxuaW1wb3J0IHtcbiAgUmVhY3RDb21wYXJlU2xpZGVyLFxuICBSZWFjdENvbXBhcmVTbGlkZXJJbWFnZSxcbn0gZnJvbSBcInJlYWN0LWNvbXBhcmUtc2xpZGVyXCI7XG5cblxuY29uc3QgSW1hZ2VTbGlkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFthcGlEYXRhLCBzZXRBcGlEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGF1dGhUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpVXJsfS9hcGkvcHJvamVjdHM/cG9wdWxhdGU9KmAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aFRva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0QXBpRGF0YShyZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFthcGlVcmxdKTtcblxuICBpZiAoIWFwaURhdGEgfHwgYXBpRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIC8vIEZvciBMb2FkZXJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTaW11bGF0ZSBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uIChlLmcuLCBmZXRjaGluZyBkYXRhKVxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIFNpbXVsYXRpbmcgYSBkZWxheSBvZiAyIHNlY29uZHNcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTsgLy8gU3BlY2lmeSB0aGUgZGVsYXkgKDIwMDAgbWlsbGlzZWNvbmRzKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIFNldCBsb2FkaW5nIHRvIGZhbHNlIHdoZW4gZGF0YSBpcyBmZXRjaGVkXG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGFwaURhdGEubWFwKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gcHJvamVjdDtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UxLCBpbWFnZTIgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgICAvLyBDb25zdHJ1Y3QgdGhlIGltYWdlIFVSTHMgZnJvbSB0aGUgY29ycmVjdCBwYXRocyBpbiB0aGUgQVBJIHJlc3BvbnNlXG4gICAgY29uc3QgaW1hZ2VVcmwxID0gYCR7YXBpVXJsfSR7aW1hZ2UxLmRhdGEuYXR0cmlidXRlcy51cmx9YDtcbiAgICBjb25zdCBpbWFnZVVybDIgPSBgJHthcGlVcmx9JHtpbWFnZTIuZGF0YS5hdHRyaWJ1dGVzLnVybH1gO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiLW1iLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LTR4bCBwdC02IGZvbnQtYm9sZCBiZy1ncmF5LTIwMCBtdC02IGJnLWdyYXlcIj5cbiAgICAgICAgICB7aW5kZXggPT09IDAgJiYgKFxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBsLTYgbGc6cGwtMCBwci02IGxnOnByLTAgdGV4dC1sZyB4bDp0ZXh0LTR4bCB0ZXh0LWJsdWUtNzAwIHNtOnRleHQtNHhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhcIj5cbiAgICAgICAgICAgICAgSW1hZ2UgQW5ub3RhdGlvbnNcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGxnOmZsZXgtcm93IGZsZXgtY29sIGJnLWdyYXktMjAwIGxnOnBsLTE2IGxnOnByLTE2XCI+XG4gICAgICAgICAge2xvYWRpbmcgJiYgPExvYWRlciAvPn0gey8qIFNob3cgdGhlIGxvYWRlciBpZiBsb2FkaW5nIGlzIHRydWUgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTIvNSB3LWZ1bGwgcC04XCI+XG4gICAgICAgICAgICA8UmVhY3RDb21wYXJlU2xpZGVyXG4gICAgICAgICAgICAgIGJvdW5kc1BhZGRpbmc9ezB9XG4gICAgICAgICAgICAgIGl0ZW1PbmU9e1xuICAgICAgICAgICAgICAgIDxSZWFjdENvbXBhcmVTbGlkZXJJbWFnZVxuICAgICAgICAgICAgICAgICAgYWx0PVwiSW1hZ2Ugb25lXCJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmwxfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaXRlbVR3bz17XG4gICAgICAgICAgICAgICAgPFJlYWN0Q29tcGFyZVNsaWRlckltYWdlXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJJbWFnZSB0d29cIlxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVybDJ9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6IFwiY292ZXJcIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBrZXlib2FyZEluY3JlbWVudD1cIjUlXCJcbiAgICAgICAgICAgICAgcG9zaXRpb249ezUwfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMy81IHctZnVsbCBwbC02IHByLTZcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbGc6bXQtMTZcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgbGVhZGluZy1yZWxheGVkIG1iLTQgdGV4dC1qdXN0aWZ5IG10LTJcIj5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7aW5kZXggPCBhcGlEYXRhLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBteC1hdXRvIGJvcmRlciBib3JkZXItYmx1ZS03MDBcIiAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMb2FkZXIiLCJSZWFjdENvbXBhcmVTbGlkZXIiLCJSZWFjdENvbXBhcmVTbGlkZXJJbWFnZSIsIkltYWdlU2xpZGVyIiwiYXBpRGF0YSIsInNldEFwaURhdGEiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImZldGNoRGF0YSIsImF1dGhUb2tlbiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJyZXNwb25zZSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxlbmd0aCIsImRpdiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwibWFwIiwicHJvamVjdCIsImluZGV4IiwiYXR0cmlidXRlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZTEiLCJpbWFnZTIiLCJpbWFnZVVybDEiLCJ1cmwiLCJpbWFnZVVybDIiLCJjbGFzc05hbWUiLCJoMiIsImJvdW5kc1BhZGRpbmciLCJpdGVtT25lIiwiYWx0Iiwic3JjIiwic3R5bGUiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsIml0ZW1Ud28iLCJrZXlib2FyZEluY3JlbWVudCIsInBvc2l0aW9uIiwicCIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Projects.js\n"));

/***/ })

});