"use strict";
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EvidenceTableStrength)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(915);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);

// import { Star, StarBorder } from '@material-ui/icons'

function EvidenceTableStrength(props) {
    const defaultRate = 5;
    const { strength  } = props;
    const getRate = (s)=>{
        let r = 0;
        if (s > defaultRate) {
            r = 5;
        } else if (s <= 0) {
            r = 0;
        } else {
            r = s;
        }
        return r;
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            [
                ...Array(getRate(strength))
            ].map((_, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.Star, {
                    sx: {
                        color: 'orange'
                    }
                }, i)
            ),
            [
                ...Array(defaultRate - getRate(strength))
            ].map((_, j)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__.StarBorder, {
                    sx: {
                        color: 'gray'
                    }
                }, j)
            )
        ]
    }));
};


/***/ }),

/***/ 801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);


const pages = [
    '教育',
    '医療',
    '少子化対策'
];
function Navigation() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
            position: "relative",
            color: "primary",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
                sx: {
                    m: 'auto'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
                    disableGutters: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            sx: {
                                my: 2,
                                color: 'white',
                                display: 'block'
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 472.92 126",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M7.38,14.94H71.46A7.61,7.61,0,0,0,79,7.38,7.57,7.57,0,0,0,71.46,0H7.38A7.53,7.53,0,0,0,0,7.38,7.57,7.57,0,0,0,7.38,14.94Zm64.08,96.12H14.94V68h46.8a7.45,7.45,0,0,0,7.56-7.38,7.61,7.61,0,0,0-7.56-7.56H7.38A7.57,7.57,0,0,0,0,60.66v58A7.53,7.53,0,0,0,7.38,126H71.46a7.47,7.47,0,1,0,0-14.94Z",
                                        fill: "#ffffff"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M168.84,56.16A33,33,0,0,0,145.26,0H110.52a7.53,7.53,0,0,0-7.38,7.38,7.57,7.57,0,0,0,7.38,7.56h34.74a18.18,18.18,0,1,1,0,36.36H110.52a7.41,7.41,0,0,0-7.38,7.38,7.57,7.57,0,0,0,7.38,7.56H150.3a22.41,22.41,0,1,1,0,44.82H110.52a7.47,7.47,0,0,0,0,14.94H150.3a37.36,37.36,0,0,0,18.54-69.84Z",
                                        fill: "#ffffff"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M269.64,0h-45a7.53,7.53,0,0,0-7.38,7.38,7.57,7.57,0,0,0,7.38,7.56h45a22.23,22.23,0,1,1,0,44.46h-45a7.41,7.41,0,0,0-7.38,7.38v51.84a7.47,7.47,0,0,0,14.94,0V74.34h37.44a37.17,37.17,0,1,0,0-74.34Z",
                                        fill: "#ffffff"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M440.52,29.88a8,8,0,0,0-5.94,3.24L405.06,74.7,354.3,3.06A7.85,7.85,0,0,0,348.18,0h-3.6a7.53,7.53,0,0,0-7.38,7.38V118.62a7.47,7.47,0,0,0,14.94,0v-95l47.34,66.78a6.73,6.73,0,0,0,11.16,0l35.28-49.68A6.84,6.84,0,0,0,440.52,29.88ZM465.54,0A7.57,7.57,0,0,0,458,7.38V118.62a7.47,7.47,0,0,0,14.94,0V7.38A7.53,7.53,0,0,0,465.54,0Z",
                                        fill: "#ffffff"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            sx: {
                                flexGrow: 1,
                                display: {
                                    xs: 'none',
                                    md: 'flex'
                                }
                            },
                            children: pages.map((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    sx: {
                                        my: 2,
                                        color: 'white',
                                        display: 'block'
                                    },
                                    children: page
                                }, page)
                            )
                        })
                    ]
                })
            })
        })
    }));
};


/***/ })

};
;