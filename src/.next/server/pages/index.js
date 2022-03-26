"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./data.json
const data_namespaceObject = {};
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: ./components/hero.tsx


function Hero() {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hero",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
            sx: {
                m: 'auto'
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    component: "h1",
                    variant: "h1",
                    className: "headline",
                    children: "EBPMデータベース"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                    component: "p",
                    variant: "body1",
                    className: "lead",
                    children: "過去の研究成果を確認して、証拠に基づく政策（Evidence Based Policy Making, EBPM）を進めましょう。気になった政策分野のタブをクリックすれば、世界中の研究者が実施した実験や研究成果が確認できます。"
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(915);
;// CONCATENATED MODULE: ./components/evidence-sticky.tsx



function EvidenceSticky() {
    const ext = process.env.ENV === 'prd' ? '.html' : '';
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
        sx: {
            display: 'flex',
            position: 'sticky',
            top: -1
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                    sx: {
                        flex: '1 0 auto'
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                        component: "h3",
                        variant: "body1",
                        children: "介入"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: '50%'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.CardContent, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
                        sx: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            textAlign: 'center',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "h3",
                                variant: "body1",
                                children: "評価指標"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "h3",
                                variant: "body1",
                                children: "効果"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                component: "h3",
                                variant: "body1",
                                children: [
                                    "証拠の強さ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                                        href: `/sms${ext}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Help, {
                                            sx: {
                                                position: 'relative',
                                                top: '6px'
                                            }
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./components/navigation.tsx
var navigation = __webpack_require__(801);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(76);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./components/evidence-table.tsx + 1 modules
var evidence_table = __webpack_require__(311);
;// CONCATENATED MODULE: ./components/card.tsx



const DCard = ({ doc  })=>{
    const { title , description , tables  } = doc;
    const ext = process.env.ENV === 'prd' ? '.html' : '';
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Card, {
        sx: {
            display: 'flex',
            my: 4,
            p: 2,
            boxShadow: '0 19px 25px -17px rgb(2 31 63 / 30%)'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                    sx: {
                        flex: '1 0 auto'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Link, {
                            href: `/doc/${doc.slug}${ext}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                component: "h2",
                                variant: "h5",
                                children: title
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            component: "p",
                            variant: "body1",
                            sx: {
                                mt: 2
                            },
                            children: description
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    width: '50%',
                    borderLeft: 1,
                    p: 1
                },
                children: tables.map((table, i)=>/*#__PURE__*/ jsx_runtime_.jsx(evidence_table/* default */.Z, {
                        table: table
                    }, i)
                )
            })
        ]
    }));
};
/* harmony default export */ const card = (DCard);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: ./pages/index.tsx










const theme = (0,material_.createTheme)({
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
const Home = ({ docs  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(navigation/* default */.Z, {
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Hero, {
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Container, {
                    sx: {
                        m: 'auto'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(EvidenceSticky, {
                        }),
                        docs.map((doc, i)=>/*#__PURE__*/ jsx_runtime_.jsx(card, {
                                doc: doc
                            }, i)
                        )
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const pages = (Home);
async function getStaticProps() {
    const files = external_fs_default().readdirSync('docs');
    let docs = files.map((file)=>{
        const data = external_fs_default().readFileSync(`docs/${file}`).toString();
        return {
            ...external_gray_matter_default()(data).data,
            slug: file.split('.')[0]
        };
    }).reverse();
    return {
        props: {
            docs
        }
    };
}


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

/***/ 76:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [151,311], () => (__webpack_exec__(525)));
module.exports = __webpack_exports__;

})();