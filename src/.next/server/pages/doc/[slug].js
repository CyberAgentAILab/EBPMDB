"use strict";
(() => {
var exports = {};
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
react_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const MarkdownList = ({ contents  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: contents.map((content, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    children: content
                })
            }, i)
        )
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownList);

});

/***/ }),

/***/ 506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(135);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(484);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_styles__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_1__]);
react_markdown__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
    markdown: {
        h2: {
            marginTop: '1em',
            color: 'red'
        }
    }
});
const Markdown = ({ content  })=>{
    const classes = useStyles();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "markdown",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
            children: content
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Markdown);

});

/***/ }),

/***/ 520:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(801);
/* harmony import */ var _components_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(506);
/* harmony import */ var _components_markdown_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(132);
/* harmony import */ var _components_evidence_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(311);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_markdown__WEBPACK_IMPORTED_MODULE_5__, _components_markdown_list__WEBPACK_IMPORTED_MODULE_6__]);
([_components_markdown__WEBPACK_IMPORTED_MODULE_5__, _components_markdown_list__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.createTheme)({
    palette: {
        primary: {
            light: '#ff8282',
            main: '#ff6363',
            dark: '#b24545',
            contrastText: '#000'
        },
        secondary: {
            light: '#d6d6d6',
            main: '#cccccc',
            dark: '#8e8e8e',
            contrastText: '#000'
        }
    }
});
const Document = ({ doc  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                    sx: {
                        m: 'auto',
                        width: 1024
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            component: "h1",
                            variant: "h4",
                            sx: {
                                marginTop: '2em'
                            },
                            children: doc.meta.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                            component: "p",
                            variant: "body1",
                            sx: {
                                my: '1.5em'
                            },
                            children: doc.meta.description
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "summary",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                                    sx: {
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(3, 1fr)',
                                        textAlign: 'center',
                                        alignItems: 'center',
                                        marginBottom: '1em'
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            component: "h3",
                                            variant: "body1",
                                            children: "評価指標"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            component: "h3",
                                            variant: "body1",
                                            children: "効果"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                            component: "h3",
                                            variant: "body1",
                                            children: "証拠の強さ"
                                        })
                                    ]
                                }),
                                doc.meta.tables.map((table, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_evidence_table__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        table: table
                                    }, i)
                                ),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    component: "h3",
                                    variant: "h6",
                                    sx: {
                                        marginTop: '2em'
                                    },
                                    children: "ポイント"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_markdown_list__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    contents: doc.meta.points
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                    component: "h3",
                                    variant: "h6",
                                    children: "文献選定／レビュー作成"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_markdown_list__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    contents: doc.meta.contacts
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_markdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            content: doc.content
                        })
                    ]
                })
            ]
        })
    }));
};
async function getStaticPaths() {
    const files = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync('docs');
    const paths = files.map((file)=>({
            params: {
                slug: file.split('.')[0]
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ ...ctx }) {
    const { slug  } = ctx.params;
    const content = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(`docs/${slug}.md`).toString();
    const info = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(content);
    const doc = {
        meta: {
            ...info.data,
            slug
        },
        content: info.content
    };
    return {
        props: {
            doc
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Document);

});

/***/ }),

/***/ 915:
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 574:
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ 484:
/***/ ((module) => {

module.exports = require("@mui/styles");

/***/ }),

/***/ 76:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [151,311], () => (__webpack_exec__(520)));
module.exports = __webpack_exports__;

})();