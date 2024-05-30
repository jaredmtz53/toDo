/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

html {
    font-family: 'Poppins';
}
* {
    margin: 0;
    padding: 0;
}
ul {
    list-style: none;
}
img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}
input, button, textarea, select {
    font: inherit;
}
body {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    'header content'
    'sidebar content';
    height: 100vh;
}
.header {
    grid-area: header;
}
.logo {
    color: rgb(19, 19, 23);
    font-size: 25px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.logo img {
    height: 20px;
}


.sidebar {
    margin-top: 20px;
    grid-area: sidebar;
}
.sidebar h1 {
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
}
.add-lists-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}
.add-lists-container input {
    padding: 10px;
    border: 2px solid ;
    border-radius: 10px;
}
.add-lists-container button {
    padding: 10px;
    border: 2px solid ;
    border-radius: 10px;    
    background-color: black;
    color: #fff;
    cursor: pointer;
}
.lists-content {
    margin-top: 10px;
}
.list-card {
    padding: 30px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    
}
.list-title {
    cursor: pointer;
}
.list-title:hover {
    color: forestgreen;
}
.list-card:hover {
    background-color: gainsboro;
}
.list-actions {
    display: flex;
    gap: 20px;
}
.list-delete, .list-edit {
    cursor: pointer;
    height: 30px
}

/* ----editForm -----*/
.edit-modal {
    z-index: 999;
    width: 400px;
    position: absolute;
    top: -150%;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.25);
    padding: 20px 30px;
    background: #fff;
    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .15);
    border-radius: 10px;
    transition: top 0ms ease-in-out 200ms,
        opacity 200ms ease-in-out 0ms,
        transform 200ms ease-in-out 200ms;
    
}
.edit-modal.active {
    top: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    transition: top 0ms ease-in-out 0ms,
        opacity 200ms ease-in-out 0ms,
        transform 200ms ease-in-out 200ms;
}
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
}
.edit-modal .edit-modal-header {
    text-align: center;
    margin-bottom: 20px;
}
.edit-form {
    display: flex;
    flex-direction: column;
   
}
.edit-form input  {
    border: 2px solid;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
}
.edit-form button {
    width: 200px;
    align-self: center;
    background-color: #fff;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
}



.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
    z-index: 998; /* Below the popup but above other content */
    display: none; /* Initially hidden */
}



/* content */
.content {
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: content;
}
.content h1 {
    text-align: center;
}

.to-do-item-modal {
    z-index: 999;
    width: 400px;
    position: absolute;
    top: -150%;
    left: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.25);
    padding: 20px 30px;
    background: #fff;
    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .15);
    border-radius: 10px;
    transition: top 0ms ease-in-out 200ms,
        opacity 200ms ease-in-out 0ms,
        transform 200ms ease-in-out 200ms;
}
.to-do-item-modal h2 {
    text-align: center;
    margin: 10px 30px
}
.to-do-item-modal .form-element {
    margin-right: 15px;
    text-align: center;
    
}
.to-do-item-modal .form-element input[type="text"] {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid;
    margin-bottom: 20px;
}
.to-do-item-modal .form-element input[type="date"] {
    padding: 10px;
    border: 2px solid;
    border-radius: 10px;
    margin-bottom: 20px;
}
.to-do-item-modal .form-element input[type="radio"] {
    margin: 10px;
    margin-bottom: 20px;
    
}
.add-task-btn {
    padding: 10px;
    border: 2px solid ;
    border-radius: 10px;    
    background-color: black;
    color: #fff;
    cursor: pointer;
}
.content h3 {
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;IAC5B;;qBAEiB;IACjB,aAAa;AACjB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;AACA;IACI,YAAY;AAChB;;;AAGA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;AACnB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;AAEvB;AACA;IACI,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,eAAe;IACf;AACJ;;AAEA,sBAAsB;AACtB;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,UAAU;IACV,4CAA4C;IAC5C,kBAAkB;IAClB,gBAAgB;IAChB,8CAA8C;IAC9C,mBAAmB;IACnB;;yCAEqC;;AAEzC;AACA;IACI,QAAQ;IACR,UAAU;IACV,yCAAyC;IACzC;;yCAEqC;AACzC;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,eAAe;IACf,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;;AAE1B;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;;;AAIA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC,EAAE,2BAA2B;IACjE,YAAY,EAAE,4CAA4C;IAC1D,aAAa,EAAE,qBAAqB;AACxC;;;;AAIA,YAAY;AACZ;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,UAAU;IACV,4CAA4C;IAC5C,kBAAkB;IAClB,gBAAgB;IAChB,8CAA8C;IAC9C,mBAAmB;IACnB;;yCAEqC;AACzC;AACA;IACI,kBAAkB;IAClB;AACJ;AACA;IACI,kBAAkB;IAClB,kBAAkB;;AAEtB;AACA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,mBAAmB;;AAEvB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;AACnB;AACA;IACI,kBAAkB;AACtB","sourcesContent":["\n\nhtml {\n    font-family: 'Poppins';\n}\n* {\n    margin: 0;\n    padding: 0;\n}\nul {\n    list-style: none;\n}\nimg, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n}\ninput, button, textarea, select {\n    font: inherit;\n}\nbody {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: auto 1fr;\n    grid-template-areas: \n    'header content'\n    'sidebar content';\n    height: 100vh;\n}\n.header {\n    grid-area: header;\n}\n.logo {\n    color: rgb(19, 19, 23);\n    font-size: 25px;\n    font-weight: 800;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n.logo img {\n    height: 20px;\n}\n\n\n.sidebar {\n    margin-top: 20px;\n    grid-area: sidebar;\n}\n.sidebar h1 {\n    text-align: center;\n    font-weight: 600;\n    margin-bottom: 20px;\n}\n.add-lists-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 15px;\n}\n.add-lists-container input {\n    padding: 10px;\n    border: 2px solid ;\n    border-radius: 10px;\n}\n.add-lists-container button {\n    padding: 10px;\n    border: 2px solid ;\n    border-radius: 10px;    \n    background-color: black;\n    color: #fff;\n    cursor: pointer;\n}\n.lists-content {\n    margin-top: 10px;\n}\n.list-card {\n    padding: 30px;\n    display: flex;\n    justify-content: space-between;\n    border-radius: 10px;\n    \n}\n.list-title {\n    cursor: pointer;\n}\n.list-title:hover {\n    color: forestgreen;\n}\n.list-card:hover {\n    background-color: gainsboro;\n}\n.list-actions {\n    display: flex;\n    gap: 20px;\n}\n.list-delete, .list-edit {\n    cursor: pointer;\n    height: 30px\n}\n\n/* ----editForm -----*/\n.edit-modal {\n    z-index: 999;\n    width: 400px;\n    position: absolute;\n    top: -150%;\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(1.25);\n    padding: 20px 30px;\n    background: #fff;\n    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .15);\n    border-radius: 10px;\n    transition: top 0ms ease-in-out 200ms,\n        opacity 200ms ease-in-out 0ms,\n        transform 200ms ease-in-out 200ms;\n    \n}\n.edit-modal.active {\n    top: 50%;\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1);\n    transition: top 0ms ease-in-out 0ms,\n        opacity 200ms ease-in-out 0ms,\n        transform 200ms ease-in-out 200ms;\n}\n.close-btn {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n    font-size: 20px;\n}\n.edit-modal .edit-modal-header {\n    text-align: center;\n    margin-bottom: 20px;\n}\n.edit-form {\n    display: flex;\n    flex-direction: column;\n   \n}\n.edit-form input  {\n    border: 2px solid;\n    padding: 10px 20px;\n    border-radius: 10px;\n    margin-bottom: 10px;\n}\n.edit-form button {\n    width: 200px;\n    align-self: center;\n    background-color: #fff;\n    padding: 10px;\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */\n    z-index: 998; /* Below the popup but above other content */\n    display: none; /* Initially hidden */\n}\n\n\n\n/* content */\n.content {\n    display: flex; \n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    grid-area: content;\n}\n.content h1 {\n    text-align: center;\n}\n\n.to-do-item-modal {\n    z-index: 999;\n    width: 400px;\n    position: absolute;\n    top: -150%;\n    left: 50%;\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.25);\n    padding: 20px 30px;\n    background: #fff;\n    box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .15);\n    border-radius: 10px;\n    transition: top 0ms ease-in-out 200ms,\n        opacity 200ms ease-in-out 0ms,\n        transform 200ms ease-in-out 200ms;\n}\n.to-do-item-modal h2 {\n    text-align: center;\n    margin: 10px 30px\n}\n.to-do-item-modal .form-element {\n    margin-right: 15px;\n    text-align: center;\n    \n}\n.to-do-item-modal .form-element input[type=\"text\"] {\n    width: 100%;\n    padding: 10px;\n    border-radius: 10px;\n    border: 2px solid;\n    margin-bottom: 20px;\n}\n.to-do-item-modal .form-element input[type=\"date\"] {\n    padding: 10px;\n    border: 2px solid;\n    border-radius: 10px;\n    margin-bottom: 20px;\n}\n.to-do-item-modal .form-element input[type=\"radio\"] {\n    margin: 10px;\n    margin-bottom: 20px;\n    \n}\n.add-task-btn {\n    padding: 10px;\n    border: 2px solid ;\n    border-radius: 10px;    \n    background-color: black;\n    color: #fff;\n    cursor: pointer;\n}\n.content h3 {\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-manip.js":
/*!**************************!*\
  !*** ./src/dom-manip.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/trash.svg */ "./src/assets/trash.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/*-----------SIDEBAR------------*/


//importing images 



function controller() {
    // Get DOM elements
    const listsContent = document.querySelector('.lists-content');
    const addListBtn = document.querySelector('.add-new-list-btn');
    const addListData = document.querySelector('#add-list-datafield');
    const editModal = document.querySelector('.edit-modal');
    const overlay = document.querySelector('.overlay');

    const closeEdit = document.createElement('div');
    const submit = document.createElement('button');
    const editInput = document.createElement('input');
    const editform = document.createElement("form");
    const editModalHeader = document.createElement('h3');
    
    // Event listener for adding a new list and Saved Lists
    addListBtn.addEventListener('click', createListCard);
    window.addEventListener('load', generateSavedCards);

    function generateSavedCards() {
        const storedCards = _localStorage__WEBPACK_IMPORTED_MODULE_1__.deserializeFromLocalStorage();
        storedCards.forEach(card => {
            console.log(card.id);
            const storedListCard = createListElement(card.name, card.id);
            listsContent.appendChild(storedListCard);
        });
    }

    // Function to create a new list card
    function createListCard() {
        const newListID = _lists__WEBPACK_IMPORTED_MODULE_0__.createList(addListData.value);
        const listCard = createListElement(addListData.value, newListID);
        listsContent.appendChild(listCard);
    
    }

    // Function to create list element
    function createListElement(title, id) {
        const listCard = document.createElement('div');
        const listTitle = document.createElement('p');
        const editListBtn = createIconButton(_assets_edit_svg__WEBPACK_IMPORTED_MODULE_2__);
        const deleteListBtn = createIconButton(_assets_trash_svg__WEBPACK_IMPORTED_MODULE_3__);

        // Add classes to elements
        listCard.classList.add('list-card');
        listTitle.classList.add('list-title');
        editListBtn.classList.add('list-edit');
        deleteListBtn.classList.add('list-delete');
        editModal.classList.add('edit-modal');

        // Container for edit and delete buttons
        const listActions = document.createElement('div');
        listActions.classList.add('list-actions');
        listActions.appendChild(editListBtn);
        listActions.appendChild(deleteListBtn);

        // Set list title
        listTitle.textContent = title;

        // Append elements
        listCard.appendChild(listTitle);
        listCard.appendChild(listActions);


        // Event listener for delete button
        deleteListBtn.addEventListener("click", () => {
            _lists__WEBPACK_IMPORTED_MODULE_0__.deleteList(id);
            listsContent.removeChild(listCard);

        });
        // Event listener for edit button
        editListBtn.addEventListener("click", () => {
            createEditListModal();
            editModal.classList.add("active");
            overlay.style.display = 'block';
            
        });
        closeEdit.addEventListener("click", () => {
            overlay.style.display = 'none';
            editModal.classList.remove("active");
            editModal.innerHTML = "";
        });
        editform.addEventListener("submit", (e) => {
            e.preventDefault();
            listTitle.textContent = editInput.value;
            overlay.style.display = 'none';
            editModal.classList.remove("active");
            editModal.innerHTML = "";
            _lists__WEBPACK_IMPORTED_MODULE_0__.editList(id, editInput.value);
        })
        return listCard;
    }
    
    function createEditListModal() {
        
        closeEdit.classList.add('close-btn');
        editform.classList.add("edit-form");
        editModalHeader.classList.add("edit-modal-header");

        editInput.setAttribute('type', 'text');
        editInput.setAttribute('name', 'edit');

        closeEdit.textContent = "\u00D7";
        submit.textContent = 'edit';


        editModalHeader.textContent = 'Edit Name'
        
        editModal.appendChild(closeEdit);
        editModal.appendChild(editform);
        editform.appendChild(editModalHeader);
        editform.appendChild(editInput)
        editform.appendChild(submit);
    }
    // Function to create icon button
    function createIconButton(src) {
        const iconBtn = document.createElement('img');
        iconBtn.src = src;
        return iconBtn;
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);

/***/ }),

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   deleteList: () => (/* binding */ deleteList),
/* harmony export */   editList: () => (/* binding */ editList),
/* harmony export */   getList: () => (/* binding */ getList),
/* harmony export */   getListIndex: () => (/* binding */ getListIndex),
/* harmony export */   lists: () => (/* binding */ lists)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");


const lists =  (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deserializeFromLocalStorage)() || [];

const List = (name) => {
    let id = Date.now().toString();
    let tasks = [];
    let completed = [];
    return {
        id,
        tasks,
        completed,
        name
    }
};
const createList = (name) => {
    if(lists.find((list) => list.name === name)) 
        return
    const list = List(name);
    lists.push(list);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.serializeToLocalStorage)(lists);
    console.log(lists)
    return list.id

}
const deleteList = (listID) => {
    const index = getListIndex(listID);
    lists.splice(index, 1);
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.serializeToLocalStorage)(lists, listID);
    console.log(lists);
}
const editList = (listID, newName) => {
    const list = getList(listID);
    list.name = newName;
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.serializeToLocalStorage)(lists, listID);
}

const getList = (listID) => lists.find((list) => list.id === listID);
const getListIndex = (listID) => lists.findIndex((list) => list.id === listID);



/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deserializeFromLocalStorage: () => (/* binding */ deserializeFromLocalStorage),
/* harmony export */   deserializeIDFromLocalStorage: () => (/* binding */ deserializeIDFromLocalStorage),
/* harmony export */   serializeToLocalStorage: () => (/* binding */ serializeToLocalStorage)
/* harmony export */ });
const localStorageKey = "lists"
const localStorageIdKey = "listsId"

function serializeToLocalStorage(lists, selectedListId) {
    localStorage.setItem(localStorageKey, JSON.stringify(lists));
    localStorage.setItem(localStorageIdKey, JSON.stringify(selectedListId));
}

function deserializeFromLocalStorage() {
    let deserialized = JSON.parse(localStorage.getItem(localStorageKey));
    return deserialized
}
function deserializeIDFromLocalStorage() {
    let deserialized = JSON.parse(localStorage.getItem(localStorageIdKey));
    return deserialized
}


 

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a574ceeb1c9ceb954e67.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9289e97fb2c6e5a0cc56.svg";

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27178b4697c8fe649bcd.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists */ "./src/lists.js");
/* harmony import */ var _dom_manip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manip */ "./src/dom-manip.js");




(0,_dom_manip__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvRTtBQUNyRDs7QUFFcEMsc0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLW1hbmlwLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG59XG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xuICAgIGZvbnQ6IGluaGVyaXQ7XG59XG5ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICdoZWFkZXIgY29udGVudCdcbiAgICAnc2lkZWJhciBjb250ZW50JztcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XG59XG4ubG9nbyB7XG4gICAgY29sb3I6IHJnYigxOSwgMTksIDIzKTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ28gaW1nIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cblxuLnNpZGViYXIge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xufVxuLnNpZGViYXIgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uYWRkLWxpc3RzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbn1cbi5hZGQtbGlzdHMtY29udGFpbmVyIGlucHV0IHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmFkZC1saXN0cy1jb250YWluZXIgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlzdHMtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5saXN0LWNhcmQge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBcbn1cbi5saXN0LXRpdGxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGlzdC10aXRsZTpob3ZlciB7XG4gICAgY29sb3I6IGZvcmVzdGdyZWVuO1xufVxuLmxpc3QtY2FyZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuLmxpc3QtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG59XG4ubGlzdC1kZWxldGUsIC5saXN0LWVkaXQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDMwcHhcbn1cblxuLyogLS0tLWVkaXRGb3JtIC0tLS0tKi9cbi5lZGl0LW1vZGFsIHtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMjUpO1xuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIC4xNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMG1zIGVhc2UtaW4tb3V0IDIwMG1zLFxuICAgICAgICBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0IDBtcyxcbiAgICAgICAgdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xuICAgIFxufVxuLmVkaXQtbW9kYWwuYWN0aXZlIHtcbiAgICB0b3A6IDUwJTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMG1zLFxuICAgICAgICBvcGFjaXR5IDIwMG1zIGVhc2UtaW4tb3V0IDBtcyxcbiAgICAgICAgdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuLmNsb3NlLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmVkaXQtbW9kYWwgLmVkaXQtbW9kYWwtaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5lZGl0LWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgIFxufVxuLmVkaXQtZm9ybSBpbnB1dCAge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZWRpdC1mb3JtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cblxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIFNlbWktdHJhbnNwYXJlbnQgYmxhY2sgKi9cbiAgICB6LWluZGV4OiA5OTg7IC8qIEJlbG93IHRoZSBwb3B1cCBidXQgYWJvdmUgb3RoZXIgY29udGVudCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEluaXRpYWxseSBoaWRkZW4gKi9cbn1cblxuXG5cbi8qIGNvbnRlbnQgKi9cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xufVxuLmNvbnRlbnQgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRvLWRvLWl0ZW0tbW9kYWwge1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4yNSk7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMjAwbXMsXG4gICAgICAgIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQgMG1zLFxuICAgICAgICB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQgMjAwbXM7XG59XG4udG8tZG8taXRlbS1tb2RhbCBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAzMHB4XG59XG4udG8tZG8taXRlbS1tb2RhbCAuZm9ybS1lbGVtZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxufVxuLnRvLWRvLWl0ZW0tbW9kYWwgLmZvcm0tZWxlbWVudCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udG8tZG8taXRlbS1tb2RhbCAuZm9ybS1lbGVtZW50IGlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50by1kby1pdGVtLW1vZGFsIC5mb3JtLWVsZW1lbnQgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBcbn1cbi5hZGQtdGFzay1idG4ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250ZW50IGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCOztxQkFFaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1C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aWx5OiAnUG9wcGlucyc7XFxufVxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG59XFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICdoZWFkZXIgY29udGVudCdcXG4gICAgJ3NpZGViYXIgY29udGVudCc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuLmxvZ28ge1xcbiAgICBjb2xvcjogcmdiKDE5LCAxOSwgMjMpO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5sb2dvIGltZyB7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuXFxuLnNpZGViYXIge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxufVxcbi5zaWRlYmFyIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYWRkLWxpc3RzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcbi5hZGQtbGlzdHMtY29udGFpbmVyIGlucHV0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uYWRkLWxpc3RzLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmxpc3RzLWNvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ubGlzdC1jYXJkIHtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBcXG59XFxuLmxpc3QtdGl0bGUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saXN0LXRpdGxlOmhvdmVyIHtcXG4gICAgY29sb3I6IGZvcmVzdGdyZWVuO1xcbn1cXG4ubGlzdC1jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xcbn1cXG4ubGlzdC1hY3Rpb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG4ubGlzdC1kZWxldGUsIC5saXN0LWVkaXQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMzBweFxcbn1cXG5cXG4vKiAtLS0tZWRpdEZvcm0gLS0tLS0qL1xcbi5lZGl0LW1vZGFsIHtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjI1KTtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMG1zIGVhc2UtaW4tb3V0IDIwMG1zLFxcbiAgICAgICAgb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCAwbXMsXFxuICAgICAgICB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQgMjAwbXM7XFxuICAgIFxcbn1cXG4uZWRpdC1tb2RhbC5hY3RpdmUge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwbXMgZWFzZS1pbi1vdXQgMG1zLFxcbiAgICAgICAgb3BhY2l0eSAyMDBtcyBlYXNlLWluLW91dCAwbXMsXFxuICAgICAgICB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQgMjAwbXM7XFxufVxcbi5jbG9zZS1idG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4uZWRpdC1tb2RhbCAuZWRpdC1tb2RhbC1oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5lZGl0LWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgIFxcbn1cXG4uZWRpdC1mb3JtIGlucHV0ICB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5lZGl0LWZvcm0gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBTZW1pLXRyYW5zcGFyZW50IGJsYWNrICovXFxuICAgIHotaW5kZXg6IDk5ODsgLyogQmVsb3cgdGhlIHBvcHVwIGJ1dCBhYm92ZSBvdGhlciBjb250ZW50ICovXFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEluaXRpYWxseSBoaWRkZW4gKi9cXG59XFxuXFxuXFxuXFxuLyogY29udGVudCAqL1xcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDsgXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxufVxcbi5jb250ZW50IGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG8tZG8taXRlbS1tb2RhbCB7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTE1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4yNSk7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgLjE1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDBtcyBlYXNlLWluLW91dCAyMDBtcyxcXG4gICAgICAgIG9wYWNpdHkgMjAwbXMgZWFzZS1pbi1vdXQgMG1zLFxcbiAgICAgICAgdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xcbn1cXG4udG8tZG8taXRlbS1tb2RhbCBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4IDMwcHhcXG59XFxuLnRvLWRvLWl0ZW0tbW9kYWwgLmZvcm0tZWxlbWVudCB7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuLnRvLWRvLWl0ZW0tbW9kYWwgLmZvcm0tZWxlbWVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50by1kby1pdGVtLW1vZGFsIC5mb3JtLWVsZW1lbnQgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi50by1kby1pdGVtLW1vZGFsIC5mb3JtLWVsZW1lbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgXFxufVxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRlbnQgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyotLS0tLS0tLS0tLVNJREVCQVItLS0tLS0tLS0tLS0qL1xuaW1wb3J0ICogYXMgbGlzdE1vZCBmcm9tICcuL2xpc3RzJ1xuaW1wb3J0ICogYXMgbG9jYWxTdG9yYWdlIGZyb20gJy4vbG9jYWxTdG9yYWdlJ1xuLy9pbXBvcnRpbmcgaW1hZ2VzIFxuaW1wb3J0IGVkaXRidG4gZnJvbSAnLi9hc3NldHMvZWRpdC5zdmcnXG5pbXBvcnQgdHJhc2hidG4gZnJvbSAnLi9hc3NldHMvdHJhc2guc3ZnJ1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvbG9nby5zdmcnXG5mdW5jdGlvbiBjb250cm9sbGVyKCkge1xuICAgIC8vIEdldCBET00gZWxlbWVudHNcbiAgICBjb25zdCBsaXN0c0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMtY29udGVudCcpO1xuICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1saXN0LWJ0bicpO1xuICAgIGNvbnN0IGFkZExpc3REYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1saXN0LWRhdGFmaWVsZCcpO1xuICAgIGNvbnN0IGVkaXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LW1vZGFsJyk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5cbiAgICBjb25zdCBjbG9zZUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBlZGl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGVkaXRmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3QgZWRpdE1vZGFsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBcbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYWRkaW5nIGEgbmV3IGxpc3QgYW5kIFNhdmVkIExpc3RzXG4gICAgYWRkTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUxpc3RDYXJkKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGdlbmVyYXRlU2F2ZWRDYXJkcyk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNhdmVkQ2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IHN0b3JlZENhcmRzID0gbG9jYWxTdG9yYWdlLmRlc2VyaWFsaXplRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBzdG9yZWRDYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2FyZC5pZCk7XG4gICAgICAgICAgICBjb25zdCBzdG9yZWRMaXN0Q2FyZCA9IGNyZWF0ZUxpc3RFbGVtZW50KGNhcmQubmFtZSwgY2FyZC5pZCk7XG4gICAgICAgICAgICBsaXN0c0NvbnRlbnQuYXBwZW5kQ2hpbGQoc3RvcmVkTGlzdENhcmQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgYSBuZXcgbGlzdCBjYXJkXG4gICAgZnVuY3Rpb24gY3JlYXRlTGlzdENhcmQoKSB7XG4gICAgICAgIGNvbnN0IG5ld0xpc3RJRCA9IGxpc3RNb2QuY3JlYXRlTGlzdChhZGRMaXN0RGF0YS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGxpc3RDYXJkID0gY3JlYXRlTGlzdEVsZW1lbnQoYWRkTGlzdERhdGEudmFsdWUsIG5ld0xpc3RJRCk7XG4gICAgICAgIGxpc3RzQ29udGVudC5hcHBlbmRDaGlsZChsaXN0Q2FyZCk7XG4gICAgXG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGxpc3QgZWxlbWVudFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpc3RFbGVtZW50KHRpdGxlLCBpZCkge1xuICAgICAgICBjb25zdCBsaXN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGVkaXRMaXN0QnRuID0gY3JlYXRlSWNvbkJ1dHRvbihlZGl0YnRuKTtcbiAgICAgICAgY29uc3QgZGVsZXRlTGlzdEJ0biA9IGNyZWF0ZUljb25CdXR0b24odHJhc2hidG4pO1xuXG4gICAgICAgIC8vIEFkZCBjbGFzc2VzIHRvIGVsZW1lbnRzXG4gICAgICAgIGxpc3RDYXJkLmNsYXNzTGlzdC5hZGQoJ2xpc3QtY2FyZCcpO1xuICAgICAgICBsaXN0VGl0bGUuY2xhc3NMaXN0LmFkZCgnbGlzdC10aXRsZScpO1xuICAgICAgICBlZGl0TGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdsaXN0LWVkaXQnKTtcbiAgICAgICAgZGVsZXRlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdsaXN0LWRlbGV0ZScpO1xuICAgICAgICBlZGl0TW9kYWwuY2xhc3NMaXN0LmFkZCgnZWRpdC1tb2RhbCcpO1xuXG4gICAgICAgIC8vIENvbnRhaW5lciBmb3IgZWRpdCBhbmQgZGVsZXRlIGJ1dHRvbnNcbiAgICAgICAgY29uc3QgbGlzdEFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdEFjdGlvbnMuY2xhc3NMaXN0LmFkZCgnbGlzdC1hY3Rpb25zJyk7XG4gICAgICAgIGxpc3RBY3Rpb25zLmFwcGVuZENoaWxkKGVkaXRMaXN0QnRuKTtcbiAgICAgICAgbGlzdEFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdEJ0bik7XG5cbiAgICAgICAgLy8gU2V0IGxpc3QgdGl0bGVcbiAgICAgICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICAgICAgLy8gQXBwZW5kIGVsZW1lbnRzXG4gICAgICAgIGxpc3RDYXJkLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4gICAgICAgIGxpc3RDYXJkLmFwcGVuZENoaWxkKGxpc3RBY3Rpb25zKTtcblxuXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBkZWxldGUgYnV0dG9uXG4gICAgICAgIGRlbGV0ZUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGxpc3RNb2QuZGVsZXRlTGlzdChpZCk7XG4gICAgICAgICAgICBsaXN0c0NvbnRlbnQucmVtb3ZlQ2hpbGQobGlzdENhcmQpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgZWRpdCBidXR0b25cbiAgICAgICAgZWRpdExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNyZWF0ZUVkaXRMaXN0TW9kYWwoKTtcbiAgICAgICAgICAgIGVkaXRNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgY2xvc2VFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBlZGl0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGVkaXRNb2RhbC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICB9KTtcbiAgICAgICAgZWRpdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gZWRpdElucHV0LnZhbHVlO1xuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZWRpdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBlZGl0TW9kYWwuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGxpc3RNb2QuZWRpdExpc3QoaWQsIGVkaXRJbnB1dC52YWx1ZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBsaXN0Q2FyZDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlRWRpdExpc3RNb2RhbCgpIHtcbiAgICAgICAgXG4gICAgICAgIGNsb3NlRWRpdC5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcbiAgICAgICAgZWRpdGZvcm0uY2xhc3NMaXN0LmFkZChcImVkaXQtZm9ybVwiKTtcbiAgICAgICAgZWRpdE1vZGFsSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJlZGl0LW1vZGFsLWhlYWRlclwiKTtcblxuICAgICAgICBlZGl0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgZWRpdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlZGl0Jyk7XG5cbiAgICAgICAgY2xvc2VFZGl0LnRleHRDb250ZW50ID0gXCJcXHUwMEQ3XCI7XG4gICAgICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdlZGl0JztcblxuXG4gICAgICAgIGVkaXRNb2RhbEhlYWRlci50ZXh0Q29udGVudCA9ICdFZGl0IE5hbWUnXG4gICAgICAgIFxuICAgICAgICBlZGl0TW9kYWwuYXBwZW5kQ2hpbGQoY2xvc2VFZGl0KTtcbiAgICAgICAgZWRpdE1vZGFsLmFwcGVuZENoaWxkKGVkaXRmb3JtKTtcbiAgICAgICAgZWRpdGZvcm0uYXBwZW5kQ2hpbGQoZWRpdE1vZGFsSGVhZGVyKTtcbiAgICAgICAgZWRpdGZvcm0uYXBwZW5kQ2hpbGQoZWRpdElucHV0KVxuICAgICAgICBlZGl0Zm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIH1cbiAgICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgaWNvbiBidXR0b25cbiAgICBmdW5jdGlvbiBjcmVhdGVJY29uQnV0dG9uKHNyYykge1xuICAgICAgICBjb25zdCBpY29uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGljb25CdG4uc3JjID0gc3JjO1xuICAgICAgICByZXR1cm4gaWNvbkJ0bjtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlciIsImltcG9ydCB7IHNlcmlhbGl6ZVRvTG9jYWxTdG9yYWdlLCBkZXNlcmlhbGl6ZUZyb21Mb2NhbFN0b3JhZ2V9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5jb25zdCBsaXN0cyA9ICBkZXNlcmlhbGl6ZUZyb21Mb2NhbFN0b3JhZ2UoKSB8fCBbXTtcblxuY29uc3QgTGlzdCA9IChuYW1lKSA9PiB7XG4gICAgbGV0IGlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIGxldCBjb21wbGV0ZWQgPSBbXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgdGFza3MsXG4gICAgICAgIGNvbXBsZXRlZCxcbiAgICAgICAgbmFtZVxuICAgIH1cbn07XG5jb25zdCBjcmVhdGVMaXN0ID0gKG5hbWUpID0+IHtcbiAgICBpZihsaXN0cy5maW5kKChsaXN0KSA9PiBsaXN0Lm5hbWUgPT09IG5hbWUpKSBcbiAgICAgICAgcmV0dXJuXG4gICAgY29uc3QgbGlzdCA9IExpc3QobmFtZSk7XG4gICAgbGlzdHMucHVzaChsaXN0KTtcbiAgICBzZXJpYWxpemVUb0xvY2FsU3RvcmFnZShsaXN0cyk7XG4gICAgY29uc29sZS5sb2cobGlzdHMpXG4gICAgcmV0dXJuIGxpc3QuaWRcblxufVxuY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0SUQpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGdldExpc3RJbmRleChsaXN0SUQpO1xuICAgIGxpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgc2VyaWFsaXplVG9Mb2NhbFN0b3JhZ2UobGlzdHMsIGxpc3RJRCk7XG4gICAgY29uc29sZS5sb2cobGlzdHMpO1xufVxuY29uc3QgZWRpdExpc3QgPSAobGlzdElELCBuZXdOYW1lKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IGdldExpc3QobGlzdElEKTtcbiAgICBsaXN0Lm5hbWUgPSBuZXdOYW1lO1xuICAgIHNlcmlhbGl6ZVRvTG9jYWxTdG9yYWdlKGxpc3RzLCBsaXN0SUQpO1xufVxuXG5jb25zdCBnZXRMaXN0ID0gKGxpc3RJRCkgPT4gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gbGlzdElEKTtcbmNvbnN0IGdldExpc3RJbmRleCA9IChsaXN0SUQpID0+IGxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gbGlzdElEKTtcblxuZXhwb3J0ICB7XG4gICAgbGlzdHMsXG4gICAgY3JlYXRlTGlzdCxcbiAgICBkZWxldGVMaXN0LFxuICAgIGVkaXRMaXN0LFxuICAgICBnZXRMaXN0LFxuICAgICBnZXRMaXN0SW5kZXhcbn0iLCJjb25zdCBsb2NhbFN0b3JhZ2VLZXkgPSBcImxpc3RzXCJcbmNvbnN0IGxvY2FsU3RvcmFnZUlkS2V5ID0gXCJsaXN0c0lkXCJcblxuZnVuY3Rpb24gc2VyaWFsaXplVG9Mb2NhbFN0b3JhZ2UobGlzdHMsIHNlbGVjdGVkTGlzdElkKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUlkS2V5LCBKU09OLnN0cmluZ2lmeShzZWxlY3RlZExpc3RJZCkpO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZUZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IGRlc2VyaWFsaXplZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KSk7XG4gICAgcmV0dXJuIGRlc2VyaWFsaXplZFxufVxuZnVuY3Rpb24gZGVzZXJpYWxpemVJREZyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IGRlc2VyaWFsaXplZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlSWRLZXkpKTtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVkXG59XG5cblxuZXhwb3J0IHtzZXJpYWxpemVUb0xvY2FsU3RvcmFnZSwgZGVzZXJpYWxpemVGcm9tTG9jYWxTdG9yYWdlICwgZGVzZXJpYWxpemVJREZyb21Mb2NhbFN0b3JhZ2V9ICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZUxpc3QsIGRlbGV0ZUxpc3QsIGVkaXRMaXN0LCBsaXN0cywgZ2V0TGlzdEluZGV4LCBnZXRMaXN0IH0gZnJvbSAnLi9saXN0cyc7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2RvbS1tYW5pcCdcblxuY29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9