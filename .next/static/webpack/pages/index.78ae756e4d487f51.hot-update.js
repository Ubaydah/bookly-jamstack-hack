"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/AddBookForm.tsx":
/*!*******************************!*\
  !*** ./pages/AddBookForm.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst AddBookForm = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [year_published, setYearPublished] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [genre, setGenre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();\n    // let formData = new FormData()\n    // formData.append(\"image\", image)\n    // formData.append(\"title\", title)\n    // formData.append(\"author\", author)\n    // formData.append(\"year_published\", year_published)\n    // formData.append(\"genre\", genre)\n    // const handleFileInput = (e) => {\n    //     const file = e.target.files[0]\n    //     //setPreviewSource(URL.createObjectURL(file))\n    //     setImage(file)\n    //     //setFileInputState(e.target.value)\n    // }\n    // const send = () => {\n    //     fetch(\"/api/user/register\", {\n    //         method: \"POST\",\n    //         headers: {\n    //             \"Content-Type\": \"application/json\",\n    //         },\n    //         body: formData\n    //     }).then(() => window.location.reload());\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        maxW: \"400px\",\n        mx: \"auto\",\n        mt: \"9\",\n        mb: \"7\",\n        p: {\n            base: \"14px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                textAlign: \"center\",\n                mb: \"8\",\n                size: \"lg\",\n                children: \"Bookly\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                isRequired: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                        size: \"md\",\n                        mb: \"7\",\n                        textAlign: \"center\",\n                        children: \"Add New Book\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mb: \"5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                children: \"Book Title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                type: \"text\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mb: \"5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                children: \"Book Author\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                type: \"text\",\n                                value: author,\n                                onChange: (e)=>setAuthor(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mb: \"5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                children: \"Genre\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                type: \"text\",\n                                value: genre,\n                                onChange: (e)=>setGenre(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mb: \"5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                children: \"Year Published\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                type: \"text\",\n                                value: year_published,\n                                onChange: (e)=>setYearPublished(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mb: \"5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                htmlFor: \"image\",\n                                border: \"2px dashed lightgrey\",\n                                h: \"90px\",\n                                w: \"100%\",\n                                textAlign: \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        mt: \"8\",\n                                        color: \"gray\",\n                                        children: \"Upload Image\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                        type: \"file\",\n                                        id: \"image\",\n                                        display: \"none\",\n                                        onChange: (e)=>setImage(e.target.files[0])\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                textAlign: \"center\",\n                                children: image ? image.name : \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        colorScheme: \"teal\",\n                        w: \"100%\",\n                        children: \"Add Book\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n                lineNumber: 40,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\bookly-jamstack-hack\\\\pages\\\\AddBookForm.tsx\",\n        lineNumber: 38,\n        columnNumber: 13\n    }, undefined);\n};\n_s(AddBookForm, \"rsfS2RK09bDz8CzfWB3bKXDwwL0=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast\n    ];\n});\n_c = AddBookForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddBookForm);\nvar _c;\n$RefreshReg$(_c, \"AddBookForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU07a0RBQU87Ozs7OztrREFDMUIsOERBQUNwQyxtREFBS0E7d0NBQUMyQixNQUFLO3dDQUFPVSxJQUFHO3dDQUFRQyxTQUFTO3dDQUFRVCxVQUFVLENBQUNDLElBQU1kLFNBQVNjLEVBQUVDLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OzswQ0FFOUYsOERBQUNwQyxrREFBSUE7Z0NBQUNxQixXQUFXOzBDQUFXVCxRQUFRQSxNQUFNeUIsSUFBSSxHQUFHLEVBQUU7Ozs7Ozs7Ozs7OztrQ0FFdkQsOERBQUNwQyxvREFBTUE7d0JBQUNxQyxhQUFhO3dCQUFRTixHQUFFO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUQ7R0FoRU03Qjs7UUFNWUwsc0RBQVFBOzs7S0FOcEJLO0FBa0VOLCtEQUFlQSxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0FkZEJvb2tGb3JtLnRzeD82YTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQsIHVzZVRvYXN0LCBCb3gsIFRleHQsIEJ1dHRvbiwgSGVhZGluZ30gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcblxyXG5jb25zdCBBZGRCb29rRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbeWVhcl9wdWJsaXNoZWQsIHNldFllYXJQdWJsaXNoZWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZ2VucmUsIHNldEdlbnJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHRvYXN0ID0gdXNlVG9hc3QoKVxyXG5cclxuICAgIC8vIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAvLyBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBpbWFnZSlcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlKVxyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwiYXV0aG9yXCIsIGF1dGhvcilcclxuICAgIC8vIGZvcm1EYXRhLmFwcGVuZChcInllYXJfcHVibGlzaGVkXCIsIHllYXJfcHVibGlzaGVkKVxyXG4gICAgLy8gZm9ybURhdGEuYXBwZW5kKFwiZ2VucmVcIiwgZ2VucmUpXHJcblxyXG4gICAgLy8gY29uc3QgaGFuZGxlRmlsZUlucHV0ID0gKGUpID0+IHtcclxuICAgIC8vICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cclxuICAgIC8vICAgICAvL3NldFByZXZpZXdTb3VyY2UoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSlcclxuICAgIC8vICAgICBzZXRJbWFnZShmaWxlKVxyXG4gICAgLy8gICAgIC8vc2V0RmlsZUlucHV0U3RhdGUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc3Qgc2VuZCA9ICgpID0+IHtcclxuICAgIC8vICAgICBmZXRjaChcIi9hcGkvdXNlci9yZWdpc3RlclwiLCB7XHJcbiAgICAvLyAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAvLyAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBib2R5OiBmb3JtRGF0YVxyXG4gICAgLy8gICAgIH0pLnRoZW4oKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcclxuICAgIC8vIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJveCBtYXhXPXsnNDAwcHgnfSBteD0nYXV0bycgbXQ9JzknIG1iPSc3JyBwPXt7YmFzZTonMTRweCd9fT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIHRleHRBbGlnbj17J2NlbnRlcid9IG1iPSc4JyBzaXplPSdsZyc+Qm9va2x5PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzUmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT0nbWQnIG1iPSc3JyB0ZXh0QWxpZ249eydjZW50ZXInfT5BZGQgTmV3IEJvb2s8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj0nNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+Qm9vayBUaXRsZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IG1iPSc1Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Cb29rIEF1dGhvcjwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e2F1dGhvcn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9JzUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkdlbnJlPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17Z2VucmV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VucmUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWI9JzUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlllYXIgUHVibGlzaGVkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17eWVhcl9wdWJsaXNoZWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0WWVhclB1Ymxpc2hlZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtYj0nNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImltYWdlXCIgYm9yZGVyPScycHggZGFzaGVkIGxpZ2h0Z3JleScgaD0nOTBweCcgdz0nMTAwJScgdGV4dEFsaWduPXsnY2VudGVyJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBtdD0nOCcgY29sb3I9J2dyYXknPlVwbG9hZCBJbWFnZTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPSdmaWxlJyBpZD0naW1hZ2UnIGRpc3BsYXk9eydub25lJ30gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC5maWxlc1swXSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249eydjZW50ZXInfT57aW1hZ2UgPyBpbWFnZS5uYW1lIDogJyd9PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9eyd0ZWFsJ30gdz0nMTAwJSc+QWRkIEJvb2s8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZEJvb2tGb3JtIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsInVzZVRvYXN0IiwiQm94IiwiVGV4dCIsIkJ1dHRvbiIsIkhlYWRpbmciLCJBZGRCb29rRm9ybSIsInRpdGxlIiwic2V0VGl0bGUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJ5ZWFyX3B1Ymxpc2hlZCIsInNldFllYXJQdWJsaXNoZWQiLCJnZW5yZSIsInNldEdlbnJlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInRvYXN0IiwibWF4VyIsIm14IiwibXQiLCJtYiIsInAiLCJiYXNlIiwidGV4dEFsaWduIiwic2l6ZSIsImlzUmVxdWlyZWQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJodG1sRm9yIiwiYm9yZGVyIiwiaCIsInciLCJjb2xvciIsImlkIiwiZGlzcGxheSIsImZpbGVzIiwibmFtZSIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/AddBookForm.tsx\n"));

/***/ })

});