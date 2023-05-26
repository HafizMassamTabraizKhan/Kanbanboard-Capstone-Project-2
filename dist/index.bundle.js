"use strict";
(self["webpackChunkkanbanboard"] = self["webpackChunkkanbanboard"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Poppins:wght@100;200;300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --white: #f1f6f9;\r\n  --light-blue: #394867;\r\n  --dark-blue: #212a3e;\r\n  --gray: #9ba4b5;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-size: 24px;\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: var(--white);\r\n  color: var(--light-blue);\r\n}\r\n\r\n/* universal styling */\r\n.container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  height: inherit;\r\n  padding-inline: 10px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: 50vh;\r\n}\r\n\r\nheader {\r\n  background-color: var(--dark-blue);\r\n  height: 80px;\r\n}\r\n\r\n.main-nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 100%;\r\n}\r\n\r\n.nav-item {\r\n  padding-inline: 10px;\r\n  color: var(--white);\r\n}\r\n\r\n.logo {\r\n  color: var(--gray);\r\n}\r\n\r\nmain {\r\n  margin-block: 20px;\r\n  padding-bottom: 60px;\r\n}\r\n\r\n.movies-list {\r\n  display: grid;\r\n  gap: 40px;\r\n}\r\n\r\n.detail {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n\r\n.btn {\r\n  background-color: var(--light-blue);\r\n  padding: 5px;\r\n  color: var(--white);\r\n  border-radius: 5px;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 1.2rem;\r\n  width: 100%;\r\n}\r\n\r\n.reserve-comment {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  background-color: var(--dark-blue);\r\n  padding: 10px 15px;\r\n  color: var(--gray);\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.nav-list li:nth-child(2) {\r\n  display: none;\r\n}\r\n\r\n.nav-list li:nth-child(3) {\r\n  display: none;\r\n}\r\n\r\n/* Popup Comment Modal  */\r\n.popup-conatiner {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  background: #c1c7d0f0;\r\n  padding: 3%;\r\n  overflow: auto;\r\n}\r\n\r\n.popup-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 3%;\r\n  background: var(--white);\r\n  border-radius: 16px;\r\n  border: 1px solid var(--light-blue);\r\n  align-items: center;\r\n}\r\n\r\n.work-close {\r\n  cursor: pointer;\r\n  align-self: flex-end;\r\n}\r\n\r\n.work-close:hover {\r\n  transform: scale(2);\r\n  transition: 0.3s;\r\n}\r\n\r\n.show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.show-img {\r\n  height: 70vh;\r\n}\r\n\r\n.show-details {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 30px;\r\n}\r\n\r\n.display-comnts-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n  padding: 3%;\r\n}\r\n\r\n.Add-comnt {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.form-control {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  color: var(--light-blue);\r\n  background-color: var(--white);\r\n  background-clip: padding-box;\r\n  border: 1px solid var(--gray);\r\n  border-radius: 0.25rem;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n.form-control:focus {\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.199);\r\n}\r\n\r\n@media (min-width: 710px) {\r\n  .movies-list {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .nav-list li:nth-child(2) {\r\n    display: block;\r\n  }\r\n\r\n  .nav-list li:nth-child(3) {\r\n    display: block;\r\n  }\r\n\r\n  .btn {\r\n    padding: 10px 20px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1064px) {\r\n  .movies-list {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,8BAA8B;EAC9B,wBAAwB;AAC1B;;AAEA,sBAAsB;AACtB;EACE,iBAAiB;EACjB,cAAc;EACd,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,mCAAmC;EACnC,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA,yBAAyB;AACzB;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,MAAM;EACN,OAAO;EACP,qBAAqB;EACrB,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,wBAAwB;EACxB,mBAAmB;EACnB,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,wBAAwB;EACxB,8BAA8B;EAC9B,4BAA4B;EAC5B,6BAA6B;EAC7B,sBAAsB;EACtB,wEAAwE;AAC1E;;AAEA;EACE,UAAU;EACV,iDAAiD;AACnD;;AAEA;EACE;IACE,qCAAqC;EACvC;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Poppins:wght@100;200;300;400;700&display=swap');\r\n\r\n:root {\r\n  --white: #f1f6f9;\r\n  --light-blue: #394867;\r\n  --dark-blue: #212a3e;\r\n  --gray: #9ba4b5;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-size: 24px;\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: var(--white);\r\n  color: var(--light-blue);\r\n}\r\n\r\n/* universal styling */\r\n.container {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  height: inherit;\r\n  padding-inline: 10px;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nli {\r\n  list-style-type: none;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: 50vh;\r\n}\r\n\r\nheader {\r\n  background-color: var(--dark-blue);\r\n  height: 80px;\r\n}\r\n\r\n.main-nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 100%;\r\n}\r\n\r\n.nav-item {\r\n  padding-inline: 10px;\r\n  color: var(--white);\r\n}\r\n\r\n.logo {\r\n  color: var(--gray);\r\n}\r\n\r\nmain {\r\n  margin-block: 20px;\r\n  padding-bottom: 60px;\r\n}\r\n\r\n.movies-list {\r\n  display: grid;\r\n  gap: 40px;\r\n}\r\n\r\n.detail {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 2px;\r\n}\r\n\r\n.btn {\r\n  background-color: var(--light-blue);\r\n  padding: 5px;\r\n  color: var(--white);\r\n  border-radius: 5px;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-family: inherit;\r\n  font-size: 1.2rem;\r\n  width: 100%;\r\n}\r\n\r\n.reserve-comment {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\ni {\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  background-color: var(--dark-blue);\r\n  padding: 10px 15px;\r\n  color: var(--gray);\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.nav-list li:nth-child(2) {\r\n  display: none;\r\n}\r\n\r\n.nav-list li:nth-child(3) {\r\n  display: none;\r\n}\r\n\r\n/* Popup Comment Modal  */\r\n.popup-conatiner {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  background: #c1c7d0f0;\r\n  padding: 3%;\r\n  overflow: auto;\r\n}\r\n\r\n.popup-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 3%;\r\n  background: var(--white);\r\n  border-radius: 16px;\r\n  border: 1px solid var(--light-blue);\r\n  align-items: center;\r\n}\r\n\r\n.work-close {\r\n  cursor: pointer;\r\n  align-self: flex-end;\r\n}\r\n\r\n.work-close:hover {\r\n  transform: scale(2);\r\n  transition: 0.3s;\r\n}\r\n\r\n.show {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n.show-img {\r\n  height: 70vh;\r\n}\r\n\r\n.show-details {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 30px;\r\n}\r\n\r\n.display-comnts-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n  padding: 3%;\r\n}\r\n\r\n.Add-comnt {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 15px;\r\n}\r\n\r\n.form-control {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  color: var(--light-blue);\r\n  background-color: var(--white);\r\n  background-clip: padding-box;\r\n  border: 1px solid var(--gray);\r\n  border-radius: 0.25rem;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n.form-control:focus {\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.199);\r\n}\r\n\r\n@media (min-width: 710px) {\r\n  .movies-list {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .nav-list li:nth-child(2) {\r\n    display: block;\r\n  }\r\n\r\n  .nav-list li:nth-child(3) {\r\n    display: block;\r\n  }\r\n\r\n  .btn {\r\n    padding: 10px 20px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1064px) {\r\n  .movies-list {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_rendermovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/rendermovies.js */ "./src/modules/rendermovies.js");



(0,_modules_rendermovies_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = (object) => object.length;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/modules/commentWindow.js":
/*!**************************************!*\
  !*** ./src/modules/commentWindow.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");


const bodyTag = document.querySelector('body');

const getComments = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments?item_id=item${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const renderComments = async (id) => {
  const comments = await getComments(id);
  const commentsCount = document.querySelector('.comnts-count');
  const commentsContainer = document.querySelector('.display-comnts');

  if (comments) {
    commentsContainer.innerHTML = '';
    for (let i = comments.length - 1; i >= 0; i -= 1) {
      commentsContainer.innerHTML += `
        <li class="show-comment">
        ${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}
        </li>
        `;
    }

    const showCommnets = document.querySelectorAll('.show-comment');
    const count = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(showCommnets);
    if (count > 0) {
      commentsCount.innerHTML = `(${count})`;
    } else {
      commentsCount.innerHTML = '(0)';
      commentsContainer.innerHTML = 'no comments...';
    }
  }
};

const showModal = async (id) => {
  const show = `https://api.tvmaze.com/shows/${id}`;
  const response = await fetch(show);
  const data = await response.json();
  const projectOverlay = document.createElement('section');
  projectOverlay.classList.add('popup-conatiner');

  const modalContent = `
  <div class="popup-card">
  <span class="work-close">X</span>
  <div class="show">
      <img src="${data.image.original}" class="show-img" alt="">
      <h2>${data.name}</h2>
      <ul class="show-details">
          <li>Rating: ${data.rating.average}</li>
          <li>Length: ${data.runtime}</li>
          <li>Language: ${data.language}</li>
          <li>Status: ${data.status}</li>
      </ul>
  </div>
  <div class="display-comnts-section">
      <h3>Comments <span class="comnts-count"></span></h3>
      <ul class="display-comnts">
      </ul>
  </div>

  <div class="Add-comnt">
      <h3>Add a comment</h3>
      <form id="${id}" class="comment-form">
          <input type="text" class="form-control" id="username" placeholder="Your name" required>
          <textarea name="comment" class="form-control" id="comment" cols="30" rows="10" placeholder="Your insights" required></textarea>
          <button class="btn">Comment</button>
      </form>
  </div>

</div>
      `;

  projectOverlay.innerHTML = modalContent;
  bodyTag.appendChild(projectOverlay);
  const closeBtn = document.querySelector('.work-close');
  closeBtn.addEventListener('click', () => {
    bodyTag.removeChild(projectOverlay);
  });

  renderComments(id);

  const addComment = async (id) => {
    const username = document.getElementById('username');
    const comment = document.getElementById('comment');

    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments';
    const data = {
      item_id: `item${id}`,
      username: username.value,
      comment: comment.value,
    };
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    username.value = '';
    comment.value = '';

    renderComments(id);
  };

  const commentForm = document.querySelector('.comment-form');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(e.target.id);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showModal);

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const headerContainer = document.querySelector('.main-nav');
const renderHeader = () => {
  const totalMovies = document.querySelectorAll('.movie');
  headerContainer.innerHTML = `<a href="./index.html" class="logo">Movies</a>
<ul class="nav-list">
    <li><a href="#" class="nav-item" id="counter">Total Movies<span>(${totalMovies.length})</span></a></li>
    <li><a href="#" class="nav-item">Planets</a></li>
    <li><a href="#" class="nav-item">Races</a></li>
</ul>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLikesCount: () => (/* binding */ getLikesCount),
/* harmony export */   postLikes: () => (/* binding */ postLikes)
/* harmony export */ });
const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/likes';

const postLikes = async (id) => {
  const test = { item_id: id };
  await fetch(likesApi, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(test),
  });
};

const getLikesCount = async () => {
  const likes = await fetch(likesApi);
  const response = await likes.json();
  return response;
};



/***/ }),

/***/ "./src/modules/rendermovies.js":
/*!*************************************!*\
  !*** ./src/modules/rendermovies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   movies: () => (/* binding */ movies)
/* harmony export */ });
/* harmony import */ var _involvement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvement.js */ "./src/modules/involvement.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/modules/header.js");
/* harmony import */ var _commentWindow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentWindow.js */ "./src/modules/commentWindow.js");




const movies = 'https://api.tvmaze.com/shows';

const getAllmovies = async () => {
  const result = await fetch(movies);
  let showoutput = '';
  const data = await result.json();
  data.forEach((movie) => {
    const displaymovie = `<li class="movie" id=${movie.id}>
    <img src=${movie.image.original}
        alt="">
    <div class="detail">
        <h3>${movie.name}</h3>
        <div class="likes">
            <i class='far fa-heart' id=${movie.id}></i>
            <span class="likes" id='likes-${movie.id}'></span>
        </div>
    </div>
    <div class="reserve-comment">
        <button class="btn cmnt-btn" id=${movie.id}>Comments</button>
    </div>
</li>`;
    showoutput += displaymovie;
  });
  const movieSection = document.getElementById('movies-list');
  movieSection.innerHTML = showoutput;
  (0,_header_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const updateLikesCount = async () => {
    const likesData = await (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.getLikesCount)();
    likesData.forEach((item) => {
      const likesCount = [`${item.likes}`];
      const likesCountElement = document.getElementById(`likes-${item.item_id}`);
      if (likesCountElement) {
        likesCountElement.innerHTML = likesCount;
      }
    });
  };

  const likeBtn = document.querySelectorAll('.likes');
  likeBtn.forEach((button) => {
    button.addEventListener('click', async (item) => {
      if (item.target.classList.contains('fa-heart')) {
        const { id } = item.target;
        (0,_involvement_js__WEBPACK_IMPORTED_MODULE_0__.postLikes)(id);
        updateLikesCount();
      }
    });
    updateLikesCount();
  });

  const commentButtons = document.querySelectorAll('.btn');
  commentButtons.forEach((btn) => btn.addEventListener('click', (e) => {
    (0,_commentWindow_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target.id);
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllmovies);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjREO0FBQ3JCO0FBQ0k7O0FBRXBDOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsU0FBUztBQUMxRCxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xELDRDQUE0QyxTQUFTO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRSxzREFBWTs7QUFFZDtBQUNBLDRCQUE0Qiw4REFBYTtBQUN6QztBQUNBLDZCQUE2QixXQUFXO0FBQ3hDLGlFQUFpRSxhQUFhO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFLO0FBQ3JCLFFBQVEsMERBQVM7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksNkRBQVM7QUFDYixHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9rYW5iYW5ib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvY29tbWVudENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9jb21tZW50V2luZG93LmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL2thbmJhbmJvYXJkLy4vc3JjL21vZHVsZXMvaW52b2x2ZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2FuYmFuYm9hcmQvLi9zcmMvbW9kdWxlcy9yZW5kZXJtb3ZpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMTAwJmZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzIwMDszMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLXdoaXRlOiAjZjFmNmY5O1xcclxcbiAgLS1saWdodC1ibHVlOiAjMzk0ODY3O1xcclxcbiAgLS1kYXJrLWJsdWU6ICMyMTJhM2U7XFxyXFxuICAtLWdyYXk6ICM5YmE0YjU7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogdW5pdmVyc2FsIHN0eWxpbmcgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHZoO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gIGhlaWdodDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMTBweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBtYXJnaW4tYmxvY2s6IDIwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcy1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmUtY29tbWVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGxpOm50aC1jaGlsZCgyKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgbGk6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFBvcHVwIENvbW1lbnQgTW9kYWwgICovXFxyXFxuLnBvcHVwLWNvbmF0aW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogI2MxYzdkMGYwO1xcclxcbiAgcGFkZGluZzogMyU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAzJTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWNsb3NlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1jbG9zZTpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1pbWcge1xcclxcbiAgaGVpZ2h0OiA3MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1kZXRhaWxzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1jb21udHMtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLkFkZC1jb21udCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250cm9sIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDAsIDEyMywgMjU1LCAwLjE5OSk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3MTBweCkge1xcclxcbiAgLm1vdmllcy1saXN0IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlzdCBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtbGlzdCBsaTpudGgtY2hpbGQoMykge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5idG4ge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDY0cHgpIHtcXHJcXG4gIC5tb3ZpZXMtbGlzdCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87QUFDVDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0VBQ04sT0FBTztFQUNQLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUNFLFVBQVU7RUFDVixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2Qzs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFDQUFxQztFQUN2QztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAxMDAmZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7MjAwOzMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0td2hpdGU6ICNmMWY2Zjk7XFxyXFxuICAtLWxpZ2h0LWJsdWU6ICMzOTQ4Njc7XFxyXFxuICAtLWRhcmstYmx1ZTogIzIxMmEzZTtcXHJcXG4gIC0tZ3JheTogIzliYTRiNTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiB1bml2ZXJzYWwgc3R5bGluZyAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwdmg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIG1hcmdpbi1ibG9jazogMjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWVzLWxpc3Qge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2ZS1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcclxcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgbGk6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaTpudGgtY2hpbGQoMykge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9wdXAgQ29tbWVudCBNb2RhbCAgKi9cXHJcXG4ucG9wdXAtY29uYXRpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYzFjN2QwZjA7XFxyXFxuICBwYWRkaW5nOiAzJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstY2xvc2Uge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWNsb3NlOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWltZyB7XFxyXFxuICBoZWlnaHQ6IDcwdmg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWRldGFpbHMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWNvbW50cy1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDMlO1xcclxcbn1cXHJcXG5cXHJcXG4uQWRkLWNvbW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWNvbnRyb2wge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tY29udHJvbDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiAwO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMCwgMTIzLCAyNTUsIDAuMTk5KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDcxMHB4KSB7XFxyXFxuICAubW92aWVzLWxpc3Qge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saXN0IGxpOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1saXN0IGxpOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNjRweCkge1xcclxcbiAgLm1vdmllcy1saXN0IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdldEFsbG1vdmllcyBmcm9tICcuL21vZHVsZXMvcmVuZGVybW92aWVzLmpzJztcblxuZ2V0QWxsbW92aWVzKCk7IiwiY29uc3QgY29tbWVudENvdW50ZXIgPSAob2JqZWN0KSA9PiBvYmplY3QubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50Q291bnRlcjsiLCJpbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi9jb21tZW50Q291bnRlci5qcyc7XG5cbmNvbnN0IGJvZHlUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VS1AyN01tZW5rZFVWdm05SDkzSC9jb21tZW50cz9pdGVtX2lkPWl0ZW0ke2lkfWA7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCByZW5kZXJDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGdldENvbW1lbnRzKGlkKTtcbiAgY29uc3QgY29tbWVudHNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21udHMtY291bnQnKTtcbiAgY29uc3QgY29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1jb21udHMnKTtcblxuICBpZiAoY29tbWVudHMpIHtcbiAgICBjb21tZW50c0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gY29tbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcbiAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxsaSBjbGFzcz1cInNob3ctY29tbWVudFwiPlxuICAgICAgICAke2NvbW1lbnRzW2ldLmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudHNbaV0udXNlcm5hbWV9OiAke2NvbW1lbnRzW2ldLmNvbW1lbnR9XG4gICAgICAgIDwvbGk+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0NvbW1uZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctY29tbWVudCcpO1xuICAgIGNvbnN0IGNvdW50ID0gY29tbWVudENvdW50ZXIoc2hvd0NvbW1uZXRzKTtcbiAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICBjb21tZW50c0NvdW50LmlubmVySFRNTCA9IGAoJHtjb3VudH0pYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tbWVudHNDb3VudC5pbm5lckhUTUwgPSAnKDApJztcbiAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9ICdubyBjb21tZW50cy4uLic7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBzaG93TW9kYWwgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3Qgc2hvdyA9IGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzaG93KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgcHJvamVjdE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gIHByb2plY3RPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWNvbmF0aW5lcicpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGBcbiAgPGRpdiBjbGFzcz1cInBvcHVwLWNhcmRcIj5cbiAgPHNwYW4gY2xhc3M9XCJ3b3JrLWNsb3NlXCI+WDwvc3Bhbj5cbiAgPGRpdiBjbGFzcz1cInNob3dcIj5cbiAgICAgIDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm9yaWdpbmFsfVwiIGNsYXNzPVwic2hvdy1pbWdcIiBhbHQ9XCJcIj5cbiAgICAgIDxoMj4ke2RhdGEubmFtZX08L2gyPlxuICAgICAgPHVsIGNsYXNzPVwic2hvdy1kZXRhaWxzXCI+XG4gICAgICAgICAgPGxpPlJhdGluZzogJHtkYXRhLnJhdGluZy5hdmVyYWdlfTwvbGk+XG4gICAgICAgICAgPGxpPkxlbmd0aDogJHtkYXRhLnJ1bnRpbWV9PC9saT5cbiAgICAgICAgICA8bGk+TGFuZ3VhZ2U6ICR7ZGF0YS5sYW5ndWFnZX08L2xpPlxuICAgICAgICAgIDxsaT5TdGF0dXM6ICR7ZGF0YS5zdGF0dXN9PC9saT5cbiAgICAgIDwvdWw+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZGlzcGxheS1jb21udHMtc2VjdGlvblwiPlxuICAgICAgPGgzPkNvbW1lbnRzIDxzcGFuIGNsYXNzPVwiY29tbnRzLWNvdW50XCI+PC9zcGFuPjwvaDM+XG4gICAgICA8dWwgY2xhc3M9XCJkaXNwbGF5LWNvbW50c1wiPlxuICAgICAgPC91bD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cIkFkZC1jb21udFwiPlxuICAgICAgPGgzPkFkZCBhIGNvbW1lbnQ8L2gzPlxuICAgICAgPGZvcm0gaWQ9XCIke2lkfVwiIGNsYXNzPVwiY29tbWVudC1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD5cbiAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY29tbWVudFwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPkNvbW1lbnQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgPC9kaXY+XG5cbjwvZGl2PlxuICAgICAgYDtcblxuICBwcm9qZWN0T3ZlcmxheS5pbm5lckhUTUwgPSBtb2RhbENvbnRlbnQ7XG4gIGJvZHlUYWcuYXBwZW5kQ2hpbGQocHJvamVjdE92ZXJsYXkpO1xuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLWNsb3NlJyk7XG4gIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJvZHlUYWcucmVtb3ZlQ2hpbGQocHJvamVjdE92ZXJsYXkpO1xuICB9KTtcblxuICByZW5kZXJDb21tZW50cyhpZCk7XG5cbiAgY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG4gICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21tZW50Jyk7XG5cbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvVUtQMjdNbWVua2RVVnZtOUg5M0gvY29tbWVudHMnO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBpdGVtX2lkOiBgaXRlbSR7aWR9YCxcbiAgICAgIHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcbiAgICAgIGNvbW1lbnQ6IGNvbW1lbnQudmFsdWUsXG4gICAgfTtcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdXNlcm5hbWUudmFsdWUgPSAnJztcbiAgICBjb21tZW50LnZhbHVlID0gJyc7XG5cbiAgICByZW5kZXJDb21tZW50cyhpZCk7XG4gIH07XG5cbiAgY29uc3QgY29tbWVudEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1mb3JtJyk7XG4gIGNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZENvbW1lbnQoZS50YXJnZXQuaWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dNb2RhbDsiLCJjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcbmNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgdG90YWxNb3ZpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW92aWUnKTtcbiAgaGVhZGVyQ29udGFpbmVyLmlubmVySFRNTCA9IGA8YSBocmVmPVwiLi9pbmRleC5odG1sXCIgY2xhc3M9XCJsb2dvXCI+TW92aWVzPC9hPlxuPHVsIGNsYXNzPVwibmF2LWxpc3RcIj5cbiAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdi1pdGVtXCIgaWQ9XCJjb3VudGVyXCI+VG90YWwgTW92aWVzPHNwYW4+KCR7dG90YWxNb3ZpZXMubGVuZ3RofSk8L3NwYW4+PC9hPjwvbGk+XG4gICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXYtaXRlbVwiPlBsYW5ldHM8L2E+PC9saT5cbiAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5hdi1pdGVtXCI+UmFjZXM8L2E+PC9saT5cbjwvdWw+YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckhlYWRlcjsiLCJjb25zdCBsaWtlc0FwaSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9VS1AyN01tZW5rZFVWdm05SDkzSC9saWtlcyc7XG5cbmNvbnN0IHBvc3RMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB0ZXN0ID0geyBpdGVtX2lkOiBpZCB9O1xuICBhd2FpdCBmZXRjaChsaWtlc0FwaSwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0ZXN0KSxcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRMaWtlc0NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IGZldGNoKGxpa2VzQXBpKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBsaWtlcy5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCB7IHBvc3RMaWtlcywgZ2V0TGlrZXNDb3VudCB9OyIsImltcG9ydCB7IGdldExpa2VzQ291bnQsIHBvc3RMaWtlcyB9IGZyb20gJy4vaW52b2x2ZW1lbnQuanMnO1xuaW1wb3J0IHJlbmRlckhlYWRlciBmcm9tICcuL2hlYWRlci5qcyc7XG5pbXBvcnQgc2hvd01vZGFsIGZyb20gJy4vY29tbWVudFdpbmRvdy5qcyc7XG5cbmV4cG9ydCBjb25zdCBtb3ZpZXMgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG5cbmNvbnN0IGdldEFsbG1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2gobW92aWVzKTtcbiAgbGV0IHNob3dvdXRwdXQgPSAnJztcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIGRhdGEuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5bW92aWUgPSBgPGxpIGNsYXNzPVwibW92aWVcIiBpZD0ke21vdmllLmlkfT5cbiAgICA8aW1nIHNyYz0ke21vdmllLmltYWdlLm9yaWdpbmFsfVxuICAgICAgICBhbHQ9XCJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsXCI+XG4gICAgICAgIDxoMz4ke21vdmllLm5hbWV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz0nZmFyIGZhLWhlYXJ0JyBpZD0ke21vdmllLmlkfT48L2k+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpa2VzXCIgaWQ9J2xpa2VzLSR7bW92aWUuaWR9Jz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZlLWNvbW1lbnRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBjbW50LWJ0blwiIGlkPSR7bW92aWUuaWR9PkNvbW1lbnRzPC9idXR0b24+XG4gICAgPC9kaXY+XG48L2xpPmA7XG4gICAgc2hvd291dHB1dCArPSBkaXNwbGF5bW92aWU7XG4gIH0pO1xuICBjb25zdCBtb3ZpZVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW92aWVzLWxpc3QnKTtcbiAgbW92aWVTZWN0aW9uLmlubmVySFRNTCA9IHNob3dvdXRwdXQ7XG4gIHJlbmRlckhlYWRlcigpO1xuXG4gIGNvbnN0IHVwZGF0ZUxpa2VzQ291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbGlrZXNEYXRhID0gYXdhaXQgZ2V0TGlrZXNDb3VudCgpO1xuICAgIGxpa2VzRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBsaWtlc0NvdW50ID0gW2Ake2l0ZW0ubGlrZXN9YF07XG4gICAgICBjb25zdCBsaWtlc0NvdW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaWtlcy0ke2l0ZW0uaXRlbV9pZH1gKTtcbiAgICAgIGlmIChsaWtlc0NvdW50RWxlbWVudCkge1xuICAgICAgICBsaWtlc0NvdW50RWxlbWVudC5pbm5lckhUTUwgPSBsaWtlc0NvdW50O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxpa2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKTtcbiAgbGlrZUJ0bi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0udGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtaGVhcnQnKSkge1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBpdGVtLnRhcmdldDtcbiAgICAgICAgcG9zdExpa2VzKGlkKTtcbiAgICAgICAgdXBkYXRlTGlrZXNDb3VudCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHVwZGF0ZUxpa2VzQ291bnQoKTtcbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuJyk7XG4gIGNvbW1lbnRCdXR0b25zLmZvckVhY2goKGJ0bikgPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzaG93TW9kYWwoZS50YXJnZXQuaWQpO1xuICB9KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRBbGxtb3ZpZXM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9