"use strict";
(self["webpackChunkodin_restaurant"] = self["webpackChunkodin_restaurant"] || []).push([["index"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./norse/Norse.otf */ "./src/norse/Norse.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./norse/Norsebold.otf */ "./src/norse/Norsebold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./nordic.webp */ "./src/nordic.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Norse";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: "NorseBold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

* {
  font-family: NorseBold, Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}

*:hover {
  /* cursor: default; */
  /* user-select: none; */
}

#main {
  color: red;
  padding: 5vh 10vh 20vh 10vh;
  min-height: 100vh;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-repeat: repeat;
  background-position: cover;
}

.link {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
}

.link button {
  color: red;
  padding: 1vh 5vh;
  border-radius: 5px;
  border: none;
  font-size: 1.5em;
}

.link button:hover {
  cursor: pointer;
  background-color: red;
  color: white;
}

#content {
  margin-top: 2vh;
  width: 75vw;
  padding: 2vh;
  color: red;
  background-color: rgba(255, 255, 255, 0.8);
  border: 5px solid red;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 2em;
}

#content > div > p:first-of-type {
  font-size: 2em;
}

#main > h1 {
  font-size: 5em;
  text-align: center;
}

#main > h1:hover {
  cursor: default;
}

#content img {
  max-width: 100%;
  box-shadow: 2px 2px 10px red;
}

.menu {
  display: flex;
  justify-content: center;
  align-content: center;
  /* width: 55vh; */
  flex-wrap: wrap;
  /* flex-direction: column; */
  gap: 2em;
}

.food {
  /* width: 100%; */
  padding: 1vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-content: center;
  gap: 1.5em;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: 2px 2px 10px white;
  width: 25vh;
  height: 35vh;
}

.food > p:first-of-type {
  font-size: 1.5em;
}

.food:hover {
  cursor: pointer;
  background-color: red;
  box-shadow: 10px 10px 10px rgb(255, 215, 0);
}

.drink {
  width: 55vw;
  height: 100%;
  background-color: rgba(255, 215, 0, 0.8);
  color: white;
}

.drink:hover {
  cursor: pointer;
  background-color: gold;
  box-shadow: 10px 10px 10px rgb(255, 127, 80);
}

.footer {
  padding: 1vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 1em;
  position: absolute;
  width: 75vw;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  border: 5px solid red;
  border-bottom: 0;
  border-radius: 5px;
}

.footer > p {
  text-decoration: underline;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  align-content: center;
}

.footer img {
  width: 5vw;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,4CAA2B;AAC7B;AACA;EACE,wBAAwB;EACxB,4CAA+B;AACjC;;AAEA;EACE;cACY;EACZ,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,2BAA2B;EAC3B,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yDAAoC;EACpC,yBAAyB;EACzB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,UAAU;EACV,0CAA0C;EAC1C,qBAAqB;EACrB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,4BAA4B;EAC5B,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,qBAAqB;EACrB,UAAU;EACV,sCAAsC;EACtC,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,8BAA8B;EAC9B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,2CAA2C;AAC7C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,4CAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,qBAAqB;EACrB,QAAQ;EACR,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,0CAA0C;EAC1C,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,eAAe;EACf,4BAA4B;EAC5B,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ","sourcesContent":["@font-face {\n  font-family: \"Norse\";\n  src: url(./norse/Norse.otf);\n}\n@font-face {\n  font-family: \"NorseBold\";\n  src: url(./norse/Norsebold.otf);\n}\n\n* {\n  font-family: NorseBold, Impact, Haettenschweiler, \"Arial Narrow Bold\",\n    sans-serif;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n\n*:hover {\n  /* cursor: default; */\n  /* user-select: none; */\n}\n\n#main {\n  color: red;\n  padding: 5vh 10vh 20vh 10vh;\n  min-height: 100vh;\n  /* width: 100%; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-image: url(./nordic.webp);\n  background-repeat: repeat;\n  background-position: cover;\n}\n\n.link {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  gap: 2em;\n  flex-wrap: wrap;\n}\n\n.link button {\n  color: red;\n  padding: 1vh 5vh;\n  border-radius: 5px;\n  border: none;\n  font-size: 1.5em;\n}\n\n.link button:hover {\n  cursor: pointer;\n  background-color: red;\n  color: white;\n}\n\n#content {\n  margin-top: 2vh;\n  width: 75vw;\n  padding: 2vh;\n  color: red;\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 5px solid red;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  line-height: 2em;\n}\n\n#content > div > p:first-of-type {\n  font-size: 2em;\n}\n\n#main > h1 {\n  font-size: 5em;\n  text-align: center;\n}\n\n#main > h1:hover {\n  cursor: default;\n}\n\n#content img {\n  max-width: 100%;\n  box-shadow: 2px 2px 10px red;\n}\n\n.menu {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  /* width: 55vh; */\n  flex-wrap: wrap;\n  /* flex-direction: column; */\n  gap: 2em;\n}\n\n.food {\n  /* width: 100%; */\n  padding: 1vh;\n  display: flex;\n  flex-direction: column;\n  /* justify-content: center; */\n  align-content: center;\n  gap: 1.5em;\n  background-color: rgba(255, 0, 0, 0.8);\n  color: white;\n  border: 2px solid white;\n  border-radius: 5px;\n  box-shadow: 2px 2px 10px white;\n  width: 25vh;\n  height: 35vh;\n}\n\n.food > p:first-of-type {\n  font-size: 1.5em;\n}\n\n.food:hover {\n  cursor: pointer;\n  background-color: red;\n  box-shadow: 10px 10px 10px rgb(255, 215, 0);\n}\n\n.drink {\n  width: 55vw;\n  height: 100%;\n  background-color: rgba(255, 215, 0, 0.8);\n  color: white;\n}\n\n.drink:hover {\n  cursor: pointer;\n  background-color: gold;\n  box-shadow: 10px 10px 10px rgb(255, 127, 80);\n}\n\n.footer {\n  padding: 1vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n  gap: 1em;\n  position: absolute;\n  width: 75vw;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.8);\n  border: 5px solid red;\n  border-bottom: 0;\n  border-radius: 5px;\n}\n\n.footer > p {\n  text-decoration: underline;\n  display: flex;\n  flex-wrap: wrap;\n  /* flex-direction: column; */\n  justify-content: center;\n  align-content: center;\n}\n\n.footer img {\n  width: 5vw;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactUs)
/* harmony export */ });
/* harmony import */ var _valhalla_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./valhalla.jpeg */ "./src/valhalla.jpeg");


function contactUs() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("footer");

  // Add the image
  const myImage = new Image();
  myImage.src = _valhalla_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  newDiv.appendChild(myImage);

  //   const contact = document.createElement("div");
  const address = document.createElement("p");
  address.textContent = "Find us at: Valhalla, 123";
  newDiv.appendChild(address);
  const phone = document.createElement("p");
  phone.textContent = "Call us on: 123456789";
  newDiv.appendChild(phone);

  //   newDiv.appendChild(contact);

  return newDiv;
}


/***/ }),

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadDrinks)
/* harmony export */ });
function loadDrinks() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("menu");

  function drink(title, detail) {
    return {
      title: title,
      detail: detail,
    };
  }

  const menuArr = [];
  menuArr.push(
    drink(
      "Mjolnir's Mead Brew",
      "Raise your tankards and partake in the legendary brew of the gods. Mjolnir's Mead, a potent and honeyed nectar, crafted with ancient recipes passed down through generations. This traditional mead, aged to perfection, offers a balance of sweetness and complexity, with notes of wildflowers and hints of Nordic herbs. Served in carved wooden mugs, this brew embodies the spirit of celebration and camaraderie. Join us in toasting the gods with this revered libation, invoking the power of Mjolnir, Thor's mighty hammer."
    )
  );

  console.log(menuArr);

  menuArr.forEach((food) => {
    let foodDiv = document.createElement("div");
    foodDiv.classList.add("food");
    foodDiv.classList.add("drink");
    let foodHead = document.createElement("p");
    foodHead.textContent = food.title;
    foodDiv.appendChild(foodHead);
    let foodSub = document.createElement("p");
    foodSub.textContent = food.detail;
    foodDiv.appendChild(foodSub);
    newDiv.appendChild(foodDiv);
  });

  return newDiv;
}


/***/ }),

/***/ "./src/frontPage.js":
/*!**************************!*\
  !*** ./src/frontPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _hotpot_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotpot.png */ "./src/hotpot.png");


function homePage() {
  const newDiv = document.createElement("div");
  //   // Add the image
  const myImage = new Image();
  myImage.src = _hotpot_png__WEBPACK_IMPORTED_MODULE_0__;
  newDiv.appendChild(myImage);

  let text =
    "Welcome to Valhalla's Feast: Where the Gods Dine! <br> Step into the realm of the Norse gods and experience a dining adventure like no other. Our doors are open, and we extend a warm welcome to mortals and immortals alike to embark on a culinary journey fit for Odin himself. <br>At Valhalla's Feast, we honor the ancient traditions and epic sagas of Norse mythology, bringing them to life through tantalizing flavors and enchanting ambience. Prepare to be swept away by the magic and mystique of Asgard as you indulge in divine feasts worthy of Valhalla's esteemed warriors. <br>Immerse yourself in the splendor of our grand hall, adorned with mighty banners and intricate Norse artwork. Let the soft glow of flickering torches guide you to your seat, where you will be treated like a true hero of old. Our friendly staff, inspired by Odin's wisdom, will ensure your visit is nothing short of legendary. <br>Savor the taste of the Nine Realms as our skilled chefs conjure dishes of unparalleled creativity and quality. From succulent meats roasted to perfection, infused with herbs and spices from the enchanted forests, to delicacies inspired by the bountiful seas that surround Midgard, our menu is a tapestry of culinary delights. <br>Raise your goblets and toast with Odin's favored mead, crafted by the master brewers of Valhalla. Let the golden nectar flow, fueling tales and camaraderie as you revel in the company of fellow diners, both mortal and divine. <br>Whether you seek a gathering place for feasts and celebrations or a sanctuary to escape the mortal realm, Valhalla's Feast stands ready to fulfill your desires. Join us, and let the wonders of Asgard captivate your senses in an experience that will leave you yearning to return. <br>Hail to Odin, the Allfather! Welcome, honored guests, to Valhalla's Feast!";
  const textArr = text.split("<br>");
  textArr.forEach((para) => {
    text = document.createElement("p");
    text.innerHTML = para;
    newDiv.appendChild(text);
  });

  return newDiv;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _frontPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontPage */ "./src/frontPage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drinks */ "./src/drinks.js");
/* harmony import */ var _contactUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactUs */ "./src/contactUs.js");






// function component() {
//   const newDiv = document.createElement("div");
//   const btn = document.createElement("button");

//   newDiv.innerHTML = "Hello newDiv!";
//   newDiv.classList.add("red");

//   btn.innerHTML = "Click me and check the console!";
//   btn.addEventListener("click", PrintMe);

//   newDiv.appendChild(btn);

//   // Add the image
//   const myImage = new Image();
//   myImage.src = Water;

//   //   newDiv.appendChild(myImage);

//   return newDiv;
// }

// document.body.appendChild(component());

const mainDiv = document.createElement("div");
mainDiv.setAttribute("id", "main");
document.body.appendChild(mainDiv);

const h1 = document.createElement("h1");
h1.textContent = "Valhalla's Feast";
mainDiv.appendChild(h1);

const linkDiv = document.createElement("div");
linkDiv.classList.add("link");

const homeLink = document.createElement("button");
homeLink.textContent = "Home";
homeLink.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild((0,_frontPage__WEBPACK_IMPORTED_MODULE_1__["default"])());
});
linkDiv.appendChild(homeLink);

const foodLink = document.createElement("button");
foodLink.textContent = "Menu";
foodLink.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
});
linkDiv.appendChild(foodLink);

const drinksLink = document.createElement("button");
drinksLink.textContent = "Drinks";
drinksLink.addEventListener("click", () => {
  contentDiv.innerHTML = "";
  contentDiv.appendChild((0,_drinks__WEBPACK_IMPORTED_MODULE_3__["default"])());
});
linkDiv.appendChild(drinksLink);

mainDiv.appendChild(linkDiv);

const contentDiv = document.createElement("div");
contentDiv.setAttribute("id", "content");
contentDiv.appendChild((0,_frontPage__WEBPACK_IMPORTED_MODULE_1__["default"])());
mainDiv.appendChild(contentDiv);

mainDiv.appendChild((0,_contactUs__WEBPACK_IMPORTED_MODULE_4__["default"])());


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("menu");

  function dish(title, detail) {
    return {
      title: title,
      detail: detail,
    };
  }

  const menuArr = [];
  menuArr.push(
    dish(
      "Thor's Thunderous Ribs",
      "Juicy and tender pork ribs slathered in a smoky, tangy sauce infused with Odin's secret blend of spices. Served with crispy potato wedges and a side of Viking slaw."
    )
  );
  menuArr.push(
    dish(
      "Loki's Trickster Tacos",
      "A playful twist on traditional tacos, featuring lightly spiced grilled venison or wild boar, topped with pickled onions, juniper-infused salsa, and a drizzle of Odin's Fire sauce. Served with warm tortillas and a side of Freya's Garden Salad."
    )
  );
  menuArr.push(
    dish(
      "Valkyrie's Victory Salad",
      "A vibrant salad bursting with flavors and colors. Fresh mixed greens, seasonal berries, candied walnuts, crumbled goat cheese, and a honey-mustard vinaigrette. Garnished with edible flowers for a touch of ethereal beauty."
    )
  );
  menuArr.push(
    dish(
      "Freya's Feast Platter",
      "A bountiful assortment of delicacies fit for the goddess of love and fertility. Gravlax (cured salmon), pickled herring, smoked trout, and creamy dill sauce served with warm, crusty bread and traditional Nordic accompaniments."
    )
  );
  menuArr.push(
    dish(
      "Odin's Mead-Glazed Duck",
      "Succulent roasted duck breast glazed with a reduction of Odin's favorite mead, infused with hints of juniper and herbs. Served with roasted root vegetables and a velvety parsnip puree."
    )
  );
  menuArr.push(
    dish(
      "Mjolnir's Meatballs",
      "Hearty meatballs crafted from a blend of venison, pork, and aromatic herbs, simmered in a rich lingonberry sauce. Accompanied by buttery mashed potatoes and lingonberry jam."
    )
  );
  menuArr.push(
    dish(
      "Idun's Apple Crisp",
      "A comforting dessert inspired by the goddess of youth and rejuvenation. Cinnamon-spiced baked apples nestled beneath a golden oat crumble topping. Served warm with a dollop of vanilla bean ice cream and a drizzle of caramel."
    )
  );
  menuArr.push(
    dish(
      "Chocolate Ragnarok",
      "Indulge in this heavenly dessert featuring a rich, velvety chocolate mousse layered with crushed hazelnuts and a touch of sea salt. Garnished with a delicate edible gold leaf."
    )
  );

  console.log(menuArr);

  menuArr.forEach((food) => {
    let foodDiv = document.createElement("div");
    foodDiv.classList.add("food");
    let foodHead = document.createElement("p");
    foodHead.textContent = food.title;
    foodDiv.appendChild(foodHead);
    let foodSub = document.createElement("p");
    foodSub.textContent = food.detail;
    foodDiv.appendChild(foodSub);
    newDiv.appendChild(foodDiv);
  });

  return newDiv;
}


/***/ }),

/***/ "./src/hotpot.png":
/*!************************!*\
  !*** ./src/hotpot.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77c0590c35829d413a13.png";

/***/ }),

/***/ "./src/nordic.webp":
/*!*************************!*\
  !*** ./src/nordic.webp ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2ab3ac1976da62385b1.webp";

/***/ }),

/***/ "./src/norse/Norse.otf":
/*!*****************************!*\
  !*** ./src/norse/Norse.otf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d211cb1a5b30ffaa5e5b.otf";

/***/ }),

/***/ "./src/norse/Norsebold.otf":
/*!*********************************!*\
  !*** ./src/norse/Norsebold.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca3f316347ae4817c604.otf";

/***/ }),

/***/ "./src/valhalla.jpeg":
/*!***************************!*\
  !*** ./src/valhalla.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "111dad4d7fabe0d7fd53.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrR0FBb0M7QUFDaEYsNENBQTRDLHVIQUF3QztBQUNwRiw0Q0FBNEMsdUdBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxxQ0FBcUMsMkJBQTJCLGdDQUFnQyxHQUFHLGNBQWMsK0JBQStCLG9DQUFvQyxHQUFHLE9BQU8sNkZBQTZGLDJCQUEyQixjQUFjLGVBQWUsdUJBQXVCLEdBQUcsYUFBYSx3QkFBd0IsNEJBQTRCLEtBQUssV0FBVyxlQUFlLGdDQUFnQyxzQkFBc0Isb0JBQW9CLG9CQUFvQiwyQkFBMkIsd0JBQXdCLHlDQUF5Qyw4QkFBOEIsK0JBQStCLEdBQUcsV0FBVyxnQkFBZ0Isa0JBQWtCLDRCQUE0QixhQUFhLG9CQUFvQixHQUFHLGtCQUFrQixlQUFlLHFCQUFxQix1QkFBdUIsaUJBQWlCLHFCQUFxQixHQUFHLHdCQUF3QixvQkFBb0IsMEJBQTBCLGlCQUFpQixHQUFHLGNBQWMsb0JBQW9CLGdCQUFnQixpQkFBaUIsZUFBZSwrQ0FBK0MsMEJBQTBCLHVCQUF1QixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIscUJBQXFCLEdBQUcsc0NBQXNDLG1CQUFtQixHQUFHLGdCQUFnQixtQkFBbUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLGtCQUFrQixvQkFBb0IsaUNBQWlDLEdBQUcsV0FBVyxrQkFBa0IsNEJBQTRCLDBCQUEwQixvQkFBb0Isc0JBQXNCLCtCQUErQixlQUFlLEdBQUcsV0FBVyxvQkFBb0IsbUJBQW1CLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLDRCQUE0QixlQUFlLDJDQUEyQyxpQkFBaUIsNEJBQTRCLHVCQUF1QixtQ0FBbUMsZ0JBQWdCLGlCQUFpQixHQUFHLDZCQUE2QixxQkFBcUIsR0FBRyxpQkFBaUIsb0JBQW9CLDBCQUEwQixnREFBZ0QsR0FBRyxZQUFZLGdCQUFnQixpQkFBaUIsNkNBQTZDLGlCQUFpQixHQUFHLGtCQUFrQixvQkFBb0IsMkJBQTJCLGlEQUFpRCxHQUFHLGFBQWEsaUJBQWlCLGtCQUFrQixvQkFBb0IsNEJBQTRCLDBCQUEwQixhQUFhLHVCQUF1QixnQkFBZ0IsY0FBYywrQ0FBK0MsMEJBQTBCLHFCQUFxQix1QkFBdUIsR0FBRyxpQkFBaUIsK0JBQStCLGtCQUFrQixvQkFBb0IsK0JBQStCLDhCQUE4QiwwQkFBMEIsR0FBRyxpQkFBaUIsZUFBZSxHQUFHLHFCQUFxQjtBQUNoOUk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN2TDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2J1Qzs7QUFFeEI7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsMkNBQVE7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25DZ0M7O0FBRWpCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdDQUFJO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CcUI7QUFDZTtBQUNOO0FBQ0k7QUFDRTs7QUFFcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQVM7QUFDbEMsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFRO0FBQ2pDLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtREFBVTtBQUNuQyxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixzREFBUztBQUNoQzs7QUFFQSxvQkFBb0Isc0RBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFZDtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3RVcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvZHJpbmtzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9mcm9udFBhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL25vcnNlL05vcnNlLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vbm9yc2UvTm9yc2Vib2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vbm9yZGljLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vcnNlXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5vcnNlQm9sZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKiB7XG4gIGZvbnQtZmFtaWx5OiBOb3JzZUJvbGQsIEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgXCJBcmlhbCBOYXJyb3cgQm9sZFwiLFxuICAgIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4qOmhvdmVyIHtcbiAgLyogY3Vyc29yOiBkZWZhdWx0OyAqL1xuICAvKiB1c2VyLXNlbGVjdDogbm9uZTsgKi9cbn1cblxuI21haW4ge1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nOiA1dmggMTB2aCAyMHZoIDEwdmg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb3Zlcjtcbn1cblxuLmxpbmsge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5saW5rIGJ1dHRvbiB7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDF2aCA1dmg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4ubGluayBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgd2lkdGg6IDc1dnc7XG4gIHBhZGRpbmc6IDJ2aDtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuI2NvbnRlbnQgPiBkaXYgPiBwOmZpcnN0LW9mLXR5cGUge1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuI21haW4gPiBoMSB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNtYWluID4gaDE6aG92ZXIge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbiNjb250ZW50IGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJlZDtcbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAvKiB3aWR0aDogNTV2aDsgKi9cbiAgZmxleC13cmFwOiB3cmFwO1xuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xuICBnYXA6IDJlbTtcbn1cblxuLmZvb2Qge1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgcGFkZGluZzogMXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBnYXA6IDEuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggd2hpdGU7XG4gIHdpZHRoOiAyNXZoO1xuICBoZWlnaHQ6IDM1dmg7XG59XG5cbi5mb29kID4gcDpmaXJzdC1vZi10eXBlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmZvb2Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiKDI1NSwgMjE1LCAwKTtcbn1cblxuLmRyaW5rIHtcbiAgd2lkdGg6IDU1dnc7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxNSwgMCwgMC44KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZHJpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYigyNTUsIDEyNywgODApO1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3NXZ3O1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb290ZXIgPiBwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvb3RlciBpbWcge1xuICB3aWR0aDogNXZ3O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUEyQjtBQUM3QjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUErQjtBQUNqQzs7QUFFQTtFQUNFO2NBQ1k7RUFDWixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlEQUFvQztFQUNwQyx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsMENBQTBDO0VBQzFDLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULDBDQUEwQztFQUMxQyxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3JzZVxcXCI7XFxuICBzcmM6IHVybCguL25vcnNlL05vcnNlLm90Zik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3JzZUJvbGRcXFwiO1xcbiAgc3JjOiB1cmwoLi9ub3JzZS9Ob3JzZWJvbGQub3RmKTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogTm9yc2VCb2xkLCBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFxcXCJBcmlhbCBOYXJyb3cgQm9sZFxcXCIsXFxuICAgIHNhbnMtc2VyaWY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuKjpob3ZlciB7XFxuICAvKiBjdXJzb3I6IGRlZmF1bHQ7ICovXFxuICAvKiB1c2VyLXNlbGVjdDogbm9uZTsgKi9cXG59XFxuXFxuI21haW4ge1xcbiAgY29sb3I6IHJlZDtcXG4gIHBhZGRpbmc6IDV2aCAxMHZoIDIwdmggMTB2aDtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9ub3JkaWMud2VicCk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7XFxufVxcblxcbi5saW5rIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5saW5rIGJ1dHRvbiB7XFxuICBjb2xvcjogcmVkO1xcbiAgcGFkZGluZzogMXZoIDV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5saW5rIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIHdpZHRoOiA3NXZ3O1xcbiAgcGFkZGluZzogMnZoO1xcbiAgY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbn1cXG5cXG4jY29udGVudCA+IGRpdiA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuI21haW4gPiBoMSB7XFxuICBmb250LXNpemU6IDVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI21haW4gPiBoMTpob3ZlciB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNjb250ZW50IGltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmVkO1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAvKiB3aWR0aDogNTV2aDsgKi9cXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLmZvb2Qge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBwYWRkaW5nOiAxdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxLjVlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjgpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggd2hpdGU7XFxuICB3aWR0aDogMjV2aDtcXG4gIGhlaWdodDogMzV2aDtcXG59XFxuXFxuLmZvb2QgPiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmZvb2Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggcmdiKDI1NSwgMjE1LCAwKTtcXG59XFxuXFxuLmRyaW5rIHtcXG4gIHdpZHRoOiA1NXZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIxNSwgMCwgMC44KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRyaW5rOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCByZ2IoMjU1LCAxMjcsIDgwKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiAxdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3NXZ3O1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgcmVkO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmZvb3RlciA+IHAge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICB3aWR0aDogNXZ3O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBWYWxoYWxsYSBmcm9tIFwiLi92YWxoYWxsYS5qcGVnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RVcygpIHtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgLy8gQWRkIHRoZSBpbWFnZVxuICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gIG15SW1hZ2Uuc3JjID0gVmFsaGFsbGE7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChteUltYWdlKTtcblxuICAvLyAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIkZpbmQgdXMgYXQ6IFZhbGhhbGxhLCAxMjNcIjtcbiAgbmV3RGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwiQ2FsbCB1cyBvbjogMTIzNDU2Nzg5XCI7XG4gIG5ld0Rpdi5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgLy8gICBuZXdEaXYuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgcmV0dXJuIG5ld0Rpdjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWREcmlua3MoKSB7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICBmdW5jdGlvbiBkcmluayh0aXRsZSwgZGV0YWlsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGRldGFpbDogZGV0YWlsLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBtZW51QXJyID0gW107XG4gIG1lbnVBcnIucHVzaChcbiAgICBkcmluayhcbiAgICAgIFwiTWpvbG5pcidzIE1lYWQgQnJld1wiLFxuICAgICAgXCJSYWlzZSB5b3VyIHRhbmthcmRzIGFuZCBwYXJ0YWtlIGluIHRoZSBsZWdlbmRhcnkgYnJldyBvZiB0aGUgZ29kcy4gTWpvbG5pcidzIE1lYWQsIGEgcG90ZW50IGFuZCBob25leWVkIG5lY3RhciwgY3JhZnRlZCB3aXRoIGFuY2llbnQgcmVjaXBlcyBwYXNzZWQgZG93biB0aHJvdWdoIGdlbmVyYXRpb25zLiBUaGlzIHRyYWRpdGlvbmFsIG1lYWQsIGFnZWQgdG8gcGVyZmVjdGlvbiwgb2ZmZXJzIGEgYmFsYW5jZSBvZiBzd2VldG5lc3MgYW5kIGNvbXBsZXhpdHksIHdpdGggbm90ZXMgb2Ygd2lsZGZsb3dlcnMgYW5kIGhpbnRzIG9mIE5vcmRpYyBoZXJicy4gU2VydmVkIGluIGNhcnZlZCB3b29kZW4gbXVncywgdGhpcyBicmV3IGVtYm9kaWVzIHRoZSBzcGlyaXQgb2YgY2VsZWJyYXRpb24gYW5kIGNhbWFyYWRlcmllLiBKb2luIHVzIGluIHRvYXN0aW5nIHRoZSBnb2RzIHdpdGggdGhpcyByZXZlcmVkIGxpYmF0aW9uLCBpbnZva2luZyB0aGUgcG93ZXIgb2YgTWpvbG5pciwgVGhvcidzIG1pZ2h0eSBoYW1tZXIuXCJcbiAgICApXG4gICk7XG5cbiAgY29uc29sZS5sb2cobWVudUFycik7XG5cbiAgbWVudUFyci5mb3JFYWNoKChmb29kKSA9PiB7XG4gICAgbGV0IGZvb2REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb2REaXYuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gICAgZm9vZERpdi5jbGFzc0xpc3QuYWRkKFwiZHJpbmtcIik7XG4gICAgbGV0IGZvb2RIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZm9vZEhlYWQudGV4dENvbnRlbnQgPSBmb29kLnRpdGxlO1xuICAgIGZvb2REaXYuYXBwZW5kQ2hpbGQoZm9vZEhlYWQpO1xuICAgIGxldCBmb29kU3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZm9vZFN1Yi50ZXh0Q29udGVudCA9IGZvb2QuZGV0YWlsO1xuICAgIGZvb2REaXYuYXBwZW5kQ2hpbGQoZm9vZFN1Yik7XG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKGZvb2REaXYpO1xuICB9KTtcblxuICByZXR1cm4gbmV3RGl2O1xufVxuIiwiaW1wb3J0IE9kaW4gZnJvbSBcIi4vaG90cG90LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICAvLyBBZGQgdGhlIGltYWdlXG4gIGNvbnN0IG15SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbXlJbWFnZS5zcmMgPSBPZGluO1xuICBuZXdEaXYuYXBwZW5kQ2hpbGQobXlJbWFnZSk7XG5cbiAgbGV0IHRleHQgPVxuICAgIFwiV2VsY29tZSB0byBWYWxoYWxsYSdzIEZlYXN0OiBXaGVyZSB0aGUgR29kcyBEaW5lISA8YnI+IFN0ZXAgaW50byB0aGUgcmVhbG0gb2YgdGhlIE5vcnNlIGdvZHMgYW5kIGV4cGVyaWVuY2UgYSBkaW5pbmcgYWR2ZW50dXJlIGxpa2Ugbm8gb3RoZXIuIE91ciBkb29ycyBhcmUgb3BlbiwgYW5kIHdlIGV4dGVuZCBhIHdhcm0gd2VsY29tZSB0byBtb3J0YWxzIGFuZCBpbW1vcnRhbHMgYWxpa2UgdG8gZW1iYXJrIG9uIGEgY3VsaW5hcnkgam91cm5leSBmaXQgZm9yIE9kaW4gaGltc2VsZi4gPGJyPkF0IFZhbGhhbGxhJ3MgRmVhc3QsIHdlIGhvbm9yIHRoZSBhbmNpZW50IHRyYWRpdGlvbnMgYW5kIGVwaWMgc2FnYXMgb2YgTm9yc2UgbXl0aG9sb2d5LCBicmluZ2luZyB0aGVtIHRvIGxpZmUgdGhyb3VnaCB0YW50YWxpemluZyBmbGF2b3JzIGFuZCBlbmNoYW50aW5nIGFtYmllbmNlLiBQcmVwYXJlIHRvIGJlIHN3ZXB0IGF3YXkgYnkgdGhlIG1hZ2ljIGFuZCBteXN0aXF1ZSBvZiBBc2dhcmQgYXMgeW91IGluZHVsZ2UgaW4gZGl2aW5lIGZlYXN0cyB3b3J0aHkgb2YgVmFsaGFsbGEncyBlc3RlZW1lZCB3YXJyaW9ycy4gPGJyPkltbWVyc2UgeW91cnNlbGYgaW4gdGhlIHNwbGVuZG9yIG9mIG91ciBncmFuZCBoYWxsLCBhZG9ybmVkIHdpdGggbWlnaHR5IGJhbm5lcnMgYW5kIGludHJpY2F0ZSBOb3JzZSBhcnR3b3JrLiBMZXQgdGhlIHNvZnQgZ2xvdyBvZiBmbGlja2VyaW5nIHRvcmNoZXMgZ3VpZGUgeW91IHRvIHlvdXIgc2VhdCwgd2hlcmUgeW91IHdpbGwgYmUgdHJlYXRlZCBsaWtlIGEgdHJ1ZSBoZXJvIG9mIG9sZC4gT3VyIGZyaWVuZGx5IHN0YWZmLCBpbnNwaXJlZCBieSBPZGluJ3Mgd2lzZG9tLCB3aWxsIGVuc3VyZSB5b3VyIHZpc2l0IGlzIG5vdGhpbmcgc2hvcnQgb2YgbGVnZW5kYXJ5LiA8YnI+U2F2b3IgdGhlIHRhc3RlIG9mIHRoZSBOaW5lIFJlYWxtcyBhcyBvdXIgc2tpbGxlZCBjaGVmcyBjb25qdXJlIGRpc2hlcyBvZiB1bnBhcmFsbGVsZWQgY3JlYXRpdml0eSBhbmQgcXVhbGl0eS4gRnJvbSBzdWNjdWxlbnQgbWVhdHMgcm9hc3RlZCB0byBwZXJmZWN0aW9uLCBpbmZ1c2VkIHdpdGggaGVyYnMgYW5kIHNwaWNlcyBmcm9tIHRoZSBlbmNoYW50ZWQgZm9yZXN0cywgdG8gZGVsaWNhY2llcyBpbnNwaXJlZCBieSB0aGUgYm91bnRpZnVsIHNlYXMgdGhhdCBzdXJyb3VuZCBNaWRnYXJkLCBvdXIgbWVudSBpcyBhIHRhcGVzdHJ5IG9mIGN1bGluYXJ5IGRlbGlnaHRzLiA8YnI+UmFpc2UgeW91ciBnb2JsZXRzIGFuZCB0b2FzdCB3aXRoIE9kaW4ncyBmYXZvcmVkIG1lYWQsIGNyYWZ0ZWQgYnkgdGhlIG1hc3RlciBicmV3ZXJzIG9mIFZhbGhhbGxhLiBMZXQgdGhlIGdvbGRlbiBuZWN0YXIgZmxvdywgZnVlbGluZyB0YWxlcyBhbmQgY2FtYXJhZGVyaWUgYXMgeW91IHJldmVsIGluIHRoZSBjb21wYW55IG9mIGZlbGxvdyBkaW5lcnMsIGJvdGggbW9ydGFsIGFuZCBkaXZpbmUuIDxicj5XaGV0aGVyIHlvdSBzZWVrIGEgZ2F0aGVyaW5nIHBsYWNlIGZvciBmZWFzdHMgYW5kIGNlbGVicmF0aW9ucyBvciBhIHNhbmN0dWFyeSB0byBlc2NhcGUgdGhlIG1vcnRhbCByZWFsbSwgVmFsaGFsbGEncyBGZWFzdCBzdGFuZHMgcmVhZHkgdG8gZnVsZmlsbCB5b3VyIGRlc2lyZXMuIEpvaW4gdXMsIGFuZCBsZXQgdGhlIHdvbmRlcnMgb2YgQXNnYXJkIGNhcHRpdmF0ZSB5b3VyIHNlbnNlcyBpbiBhbiBleHBlcmllbmNlIHRoYXQgd2lsbCBsZWF2ZSB5b3UgeWVhcm5pbmcgdG8gcmV0dXJuLiA8YnI+SGFpbCB0byBPZGluLCB0aGUgQWxsZmF0aGVyISBXZWxjb21lLCBob25vcmVkIGd1ZXN0cywgdG8gVmFsaGFsbGEncyBGZWFzdCFcIjtcbiAgY29uc3QgdGV4dEFyciA9IHRleHQuc3BsaXQoXCI8YnI+XCIpO1xuICB0ZXh0QXJyLmZvckVhY2goKHBhcmEpID0+IHtcbiAgICB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC5pbm5lckhUTUwgPSBwYXJhO1xuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0Rpdjtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZnJvbnRQYWdlIGZyb20gXCIuL2Zyb250UGFnZVwiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBsb2FkRHJpbmtzIGZyb20gXCIuL2RyaW5rc1wiO1xuaW1wb3J0IGNvbnRhY3RVcyBmcm9tIFwiLi9jb250YWN0VXNcIjtcblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4vLyAgIG5ld0Rpdi5pbm5lckhUTUwgPSBcIkhlbGxvIG5ld0RpdiFcIjtcbi8vICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJyZWRcIik7XG5cbi8vICAgYnRuLmlubmVySFRNTCA9IFwiQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlIVwiO1xuLy8gICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIFByaW50TWUpO1xuXG4vLyAgIG5ld0Rpdi5hcHBlbmRDaGlsZChidG4pO1xuXG4vLyAgIC8vIEFkZCB0aGUgaW1hZ2Vcbi8vICAgY29uc3QgbXlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuLy8gICBteUltYWdlLnNyYyA9IFdhdGVyO1xuXG4vLyAgIC8vICAgbmV3RGl2LmFwcGVuZENoaWxkKG15SW1hZ2UpO1xuXG4vLyAgIHJldHVybiBuZXdEaXY7XG4vLyB9XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5jb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm1haW5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluXCIpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5oMS50ZXh0Q29udGVudCA9IFwiVmFsaGFsbGEncyBGZWFzdFwiO1xubWFpbkRpdi5hcHBlbmRDaGlsZChoMSk7XG5cbmNvbnN0IGxpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xubGlua0Rpdi5jbGFzc0xpc3QuYWRkKFwibGlua1wiKTtcblxuY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuaG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbmhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChmcm9udFBhZ2UoKSk7XG59KTtcbmxpbmtEaXYuYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuXG5jb25zdCBmb29kTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5mb29kTGluay50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuZm9vZExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWRNZW51KCkpO1xufSk7XG5saW5rRGl2LmFwcGVuZENoaWxkKGZvb2RMaW5rKTtcblxuY29uc3QgZHJpbmtzTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5kcmlua3NMaW5rLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbmRyaW5rc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGxvYWREcmlua3MoKSk7XG59KTtcbmxpbmtEaXYuYXBwZW5kQ2hpbGQoZHJpbmtzTGluayk7XG5cbm1haW5EaXYuYXBwZW5kQ2hpbGQobGlua0Rpdik7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG5jb250ZW50RGl2LmFwcGVuZENoaWxkKGZyb250UGFnZSgpKTtcbm1haW5EaXYuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG5cbm1haW5EaXYuYXBwZW5kQ2hpbGQoY29udGFjdFVzKCkpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICBmdW5jdGlvbiBkaXNoKHRpdGxlLCBkZXRhaWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZGV0YWlsOiBkZXRhaWwsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG1lbnVBcnIgPSBbXTtcbiAgbWVudUFyci5wdXNoKFxuICAgIGRpc2goXG4gICAgICBcIlRob3IncyBUaHVuZGVyb3VzIFJpYnNcIixcbiAgICAgIFwiSnVpY3kgYW5kIHRlbmRlciBwb3JrIHJpYnMgc2xhdGhlcmVkIGluIGEgc21va3ksIHRhbmd5IHNhdWNlIGluZnVzZWQgd2l0aCBPZGluJ3Mgc2VjcmV0IGJsZW5kIG9mIHNwaWNlcy4gU2VydmVkIHdpdGggY3Jpc3B5IHBvdGF0byB3ZWRnZXMgYW5kIGEgc2lkZSBvZiBWaWtpbmcgc2xhdy5cIlxuICAgIClcbiAgKTtcbiAgbWVudUFyci5wdXNoKFxuICAgIGRpc2goXG4gICAgICBcIkxva2kncyBUcmlja3N0ZXIgVGFjb3NcIixcbiAgICAgIFwiQSBwbGF5ZnVsIHR3aXN0IG9uIHRyYWRpdGlvbmFsIHRhY29zLCBmZWF0dXJpbmcgbGlnaHRseSBzcGljZWQgZ3JpbGxlZCB2ZW5pc29uIG9yIHdpbGQgYm9hciwgdG9wcGVkIHdpdGggcGlja2xlZCBvbmlvbnMsIGp1bmlwZXItaW5mdXNlZCBzYWxzYSwgYW5kIGEgZHJpenpsZSBvZiBPZGluJ3MgRmlyZSBzYXVjZS4gU2VydmVkIHdpdGggd2FybSB0b3J0aWxsYXMgYW5kIGEgc2lkZSBvZiBGcmV5YSdzIEdhcmRlbiBTYWxhZC5cIlxuICAgIClcbiAgKTtcbiAgbWVudUFyci5wdXNoKFxuICAgIGRpc2goXG4gICAgICBcIlZhbGt5cmllJ3MgVmljdG9yeSBTYWxhZFwiLFxuICAgICAgXCJBIHZpYnJhbnQgc2FsYWQgYnVyc3Rpbmcgd2l0aCBmbGF2b3JzIGFuZCBjb2xvcnMuIEZyZXNoIG1peGVkIGdyZWVucywgc2Vhc29uYWwgYmVycmllcywgY2FuZGllZCB3YWxudXRzLCBjcnVtYmxlZCBnb2F0IGNoZWVzZSwgYW5kIGEgaG9uZXktbXVzdGFyZCB2aW5haWdyZXR0ZS4gR2FybmlzaGVkIHdpdGggZWRpYmxlIGZsb3dlcnMgZm9yIGEgdG91Y2ggb2YgZXRoZXJlYWwgYmVhdXR5LlwiXG4gICAgKVxuICApO1xuICBtZW51QXJyLnB1c2goXG4gICAgZGlzaChcbiAgICAgIFwiRnJleWEncyBGZWFzdCBQbGF0dGVyXCIsXG4gICAgICBcIkEgYm91bnRpZnVsIGFzc29ydG1lbnQgb2YgZGVsaWNhY2llcyBmaXQgZm9yIHRoZSBnb2RkZXNzIG9mIGxvdmUgYW5kIGZlcnRpbGl0eS4gR3JhdmxheCAoY3VyZWQgc2FsbW9uKSwgcGlja2xlZCBoZXJyaW5nLCBzbW9rZWQgdHJvdXQsIGFuZCBjcmVhbXkgZGlsbCBzYXVjZSBzZXJ2ZWQgd2l0aCB3YXJtLCBjcnVzdHkgYnJlYWQgYW5kIHRyYWRpdGlvbmFsIE5vcmRpYyBhY2NvbXBhbmltZW50cy5cIlxuICAgIClcbiAgKTtcbiAgbWVudUFyci5wdXNoKFxuICAgIGRpc2goXG4gICAgICBcIk9kaW4ncyBNZWFkLUdsYXplZCBEdWNrXCIsXG4gICAgICBcIlN1Y2N1bGVudCByb2FzdGVkIGR1Y2sgYnJlYXN0IGdsYXplZCB3aXRoIGEgcmVkdWN0aW9uIG9mIE9kaW4ncyBmYXZvcml0ZSBtZWFkLCBpbmZ1c2VkIHdpdGggaGludHMgb2YganVuaXBlciBhbmQgaGVyYnMuIFNlcnZlZCB3aXRoIHJvYXN0ZWQgcm9vdCB2ZWdldGFibGVzIGFuZCBhIHZlbHZldHkgcGFyc25pcCBwdXJlZS5cIlxuICAgIClcbiAgKTtcbiAgbWVudUFyci5wdXNoKFxuICAgIGRpc2goXG4gICAgICBcIk1qb2xuaXIncyBNZWF0YmFsbHNcIixcbiAgICAgIFwiSGVhcnR5IG1lYXRiYWxscyBjcmFmdGVkIGZyb20gYSBibGVuZCBvZiB2ZW5pc29uLCBwb3JrLCBhbmQgYXJvbWF0aWMgaGVyYnMsIHNpbW1lcmVkIGluIGEgcmljaCBsaW5nb25iZXJyeSBzYXVjZS4gQWNjb21wYW5pZWQgYnkgYnV0dGVyeSBtYXNoZWQgcG90YXRvZXMgYW5kIGxpbmdvbmJlcnJ5IGphbS5cIlxuICAgIClcbiAgKTtcbiAgbWVudUFyci5wdXNoKFxuICAgIGRpc2goXG4gICAgICBcIklkdW4ncyBBcHBsZSBDcmlzcFwiLFxuICAgICAgXCJBIGNvbWZvcnRpbmcgZGVzc2VydCBpbnNwaXJlZCBieSB0aGUgZ29kZGVzcyBvZiB5b3V0aCBhbmQgcmVqdXZlbmF0aW9uLiBDaW5uYW1vbi1zcGljZWQgYmFrZWQgYXBwbGVzIG5lc3RsZWQgYmVuZWF0aCBhIGdvbGRlbiBvYXQgY3J1bWJsZSB0b3BwaW5nLiBTZXJ2ZWQgd2FybSB3aXRoIGEgZG9sbG9wIG9mIHZhbmlsbGEgYmVhbiBpY2UgY3JlYW0gYW5kIGEgZHJpenpsZSBvZiBjYXJhbWVsLlwiXG4gICAgKVxuICApO1xuICBtZW51QXJyLnB1c2goXG4gICAgZGlzaChcbiAgICAgIFwiQ2hvY29sYXRlIFJhZ25hcm9rXCIsXG4gICAgICBcIkluZHVsZ2UgaW4gdGhpcyBoZWF2ZW5seSBkZXNzZXJ0IGZlYXR1cmluZyBhIHJpY2gsIHZlbHZldHkgY2hvY29sYXRlIG1vdXNzZSBsYXllcmVkIHdpdGggY3J1c2hlZCBoYXplbG51dHMgYW5kIGEgdG91Y2ggb2Ygc2VhIHNhbHQuIEdhcm5pc2hlZCB3aXRoIGEgZGVsaWNhdGUgZWRpYmxlIGdvbGQgbGVhZi5cIlxuICAgIClcbiAgKTtcblxuICBjb25zb2xlLmxvZyhtZW51QXJyKTtcblxuICBtZW51QXJyLmZvckVhY2goKGZvb2QpID0+IHtcbiAgICBsZXQgZm9vZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vZERpdi5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcbiAgICBsZXQgZm9vZEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kSGVhZC50ZXh0Q29udGVudCA9IGZvb2QudGl0bGU7XG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChmb29kSGVhZCk7XG4gICAgbGV0IGZvb2RTdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kU3ViLnRleHRDb250ZW50ID0gZm9vZC5kZXRhaWw7XG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChmb29kU3ViKTtcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoZm9vZERpdik7XG4gIH0pO1xuXG4gIHJldHVybiBuZXdEaXY7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=