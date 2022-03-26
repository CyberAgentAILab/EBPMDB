"use strict";
exports.id = 311;
exports.ids = [311];
exports.modules = {

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EvidenceTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: ./components/evidence-table-strength.tsx
var evidence_table_strength = __webpack_require__(359);
// EXTERNAL MODULE: external "@mui/icons-material"
var icons_material_ = __webpack_require__(915);
// EXTERNAL MODULE: external "@mui/material/colors"
var colors_ = __webpack_require__(574);
;// CONCATENATED MODULE: ./components/evidence-table-effectiveness.tsx



function EvidenceTableEffectiveness(props) {
    const { effectiveness  } = props;
    const altGreen = colors_.green[500];
    const altGray = colors_.blueGrey[400];
    const component = function(ef) {
        switch(ef){
            case '効果あり':
                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.AddCircle, {
                        sx: {
                            color: altGreen
                        }
                    })
                }));
                break;
            case '効果なし':
                return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    style: {
                        width: '1.7em',
                        height: '1.7em',
                        fill: '#e57373'
                    },
                    width: "256px",
                    height: "256px",
                    viewBox: "0 0 256 256",
                    id: "Flat",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M152,128c0,14.85938-5.05469,40-24,40s-24-25.14062-24-40,5.05469-40,24-40S152,113.14063,152,128Zm80,0A104,104,0,1,1,128,24,104.12041,104.12041,0,0,1,232,128Zm-64,0c0-27.875-12.36719-56-40-56s-40,28.125-40,56,12.36719,56,40,56S168,155.875,168,128Z"
                    })
                }));
                break;
            case '不明':
                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons_material_.Help, {
                        sx: {
                            color: altGray
                        }
                    })
                }));
                break;
            case 'ミックス':
                return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    version: "1.1",
                    id: "layer_2",
                    style: {
                        width: '1.7em',
                        height: '1.7em',
                        fill: '#757575'
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 256 256",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            id: "frame",
                            d: "M128,24C70.7,24,24,70.7,24,128s46.7,104,104,104s104-46.7,104-104S185.3,24,128,24z M118.8,212.9 C74,210.6,38.2,173.4,38.2,128S74,45.4,118.8,43.1V212.9z M137.2,212.9V43.1c44.8,2.4,80.5,39.5,80.5,84.9S182,210.6,137.2,212.9z"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                            id: "plus",
                            points: "183.9,121.8 183.9,99.6 171.1,99.6 171.1,121.8 150.1,121.8 150.1,134.2 171.1,134.2 171.1,156.4 183.9,156.4 183.9,134.2 204.9,134.2 204.9,121.8 "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            id: "minus",
                            x: "51.1",
                            y: "124.7",
                            width: "54.8",
                            height: "12.5"
                        })
                    ]
                }));
                break;
            default:
                return(/*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "failed"
                }));
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: component(effectiveness)
    }));
};

;// CONCATENATED MODULE: ./components/evidence-table.tsx




function EvidenceTable(props) {
    const { title , effectiveness , strength  } = props.table;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Box, {
        sx: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            py: 1,
            pl: 2
        },
        className: "table-border",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                component: "h3",
                variant: "body1",
                sx: {
                    fontWeight: 'bold'
                },
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(EvidenceTableEffectiveness, {
                    effectiveness: effectiveness
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                sx: {
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(evidence_table_strength/* default */.Z, {
                    strength: strength
                })
            })
        ]
    }));
};


/***/ })

};
;