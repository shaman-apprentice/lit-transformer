window["createLitTransformer"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/full-configured-lit-transformer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/full-configured-lit-transformer.js":
/*!************************************************!*\
  !*** ./src/full-configured-lit-transformer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_transformer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-transformer.js */ "./src/lit-transformer.js");
/* harmony import */ var _transformers_transformVariable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transformers/transformVariable.js */ "./src/transformers/transformVariable.js");
/* harmony import */ var _transformers_unsafeVariable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformers/unsafeVariable.js */ "./src/transformers/unsafeVariable.js");
/* harmony import */ var _transformers_section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transformers/section.js */ "./src/transformers/section.js");
/* harmony import */ var _transformers_invertedSection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transformers/invertedSection.js */ "./src/transformers/invertedSection.js");
/* harmony import */ var _transformers_comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transformers/comment.js */ "./src/transformers/comment.js");
/* harmony import */ var _transformers_customDelimiter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transformers/customDelimiter.js */ "./src/transformers/customDelimiter.js");








/* harmony default export */ __webpack_exports__["default"] = ((html, unsafeHTML) =>
  Object(_lit_transformer_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    html,
    delimiter: { start: '{{', end: '}}' },
    transformVariable: _transformers_transformVariable_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    transformers: {
      unsafeVariable: Object(_transformers_unsafeVariable_js__WEBPACK_IMPORTED_MODULE_2__["default"])(unsafeHTML),
      section: Object(_transformers_section_js__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      invertedSection: Object(_transformers_invertedSection_js__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      comment: Object(_transformers_comment_js__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      customDelimiterTransformer: Object(_transformers_customDelimiter_js__WEBPACK_IMPORTED_MODULE_6__["default"])(),
    },
  }));

/***/ }),

/***/ "./src/helper/dataHelper.js":
/*!**********************************!*\
  !*** ./src/helper/dataHelper.js ***!
  \**********************************/
/*! exports provided: ctx2Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx2Value", function() { return ctx2Value; });
function ctx2Value(ctx, key) {
  return key.split('.').reduce((acc, key) => key ? acc[key] : acc, ctx)
}

/***/ }),

/***/ "./src/helper/isMustacheFalsy.js":
/*!***************************************!*\
  !*** ./src/helper/isMustacheFalsy.js ***!
  \***************************************/
/*! exports provided: isMustacheFalsy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMustacheFalsy", function() { return isMustacheFalsy; });
function isMustacheFalsy(value) {
  return [null, undefined, false, 0, NaN, '']
    .some(falsy => falsy === value)
    || (value.length && value.length === 0)
}

/***/ }),

/***/ "./src/lit-transformer.js":
/*!********************************!*\
  !*** ./src/lit-transformer.js ***!
  \********************************/
/*! exports provided: default, transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/** 
 * @param {object} config = {
 *  html: lit-html.html,
 *  delimiter: { start: '{{', end: '}}' },
 *  transformers: { // note that transformVariable is not here, so that it is always the last one
 *    name: {
 *      test: (str, config) => bool,
 *      transform: (str, config) => ({
 *        remainingTmplStr: str,
 *        staticParts: [ str ],
 *        insertionPoint: (ctx) => lit-html.TemplateResult,
 *      }),
 *    },
 *  },
 *  transformVariable, 
 * }
 * @returns {function} strTemplate => ctx => lit-html.TemplateResult
 */
/* harmony default export */ __webpack_exports__["default"] = (config => template => transform(template, config));

function transform(tmpl2Parse, config) {
  const staticParts = []
  const insertionPoints = []

  let remainingTmplStr = tmpl2Parse
  let startIndexOfIP
  while (0 <= (startIndexOfIP = remainingTmplStr.indexOf(config.delimiter.start))) {
    staticParts.push(remainingTmplStr.substring(0, startIndexOfIP))
    remainingTmplStr = remainingTmplStr.substring(startIndexOfIP + config.delimiter.start.length)

    const transform = getTransform(remainingTmplStr, config)
    const transformResult = transform(remainingTmplStr, config)

    // a template must become smaller with each transformation - if not there was probably a start tag without a closing tag
    if (transformResult.remainingTmplStr.length + config.delimiter.end.length >= remainingTmplStr.length)
      throw new Error(`'${tmpl2Parse}' is not a valid template - got stuck at '${remainingTmplStr}'`)

    remainingTmplStr = transformResult.remainingTmplStr
    insertionPoints.push(transformResult.insertionPoint)
  }

  staticParts.push(remainingTmplStr)

  return ctx =>
    config.html(staticParts, ...insertionPoints.map(iP => iP(ctx)))
}


function getTransform(remainingTmplStr, config) {
  const transformer = Object.values(config.transformers).find(t => t.test(remainingTmplStr, config))
  return transformer
    ? transformer.transform
    : config.transformVariable
}

/***/ }),

/***/ "./src/transformers/comment.js":
/*!*************************************!*\
  !*** ./src/transformers/comment.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => ({
  test: remainingTmplStr => remainingTmplStr[0] === '!',
  transform: (remainingTmplStr, { delimiter }) => ({
    remainingTmplStr: remainingTmplStr.substring(remainingTmplStr.indexOf(delimiter.end) + delimiter.end.length),
    insertionPoint: ctx => '',
  })
}));

/***/ }),

/***/ "./src/transformers/customDelimiter.js":
/*!*********************************************!*\
  !*** ./src/transformers/customDelimiter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transformVariable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transformVariable.js */ "./src/transformers/transformVariable.js");


/* harmony default export */ __webpack_exports__["default"] = (() => ({
  test: remainingTmplStr => remainingTmplStr[0] === '=',
  transform: (remainingTmplStr, config) => {
    const originalEndDeliLength = config.delimiter.end.length
    const indexOfEndTag = remainingTmplStr.indexOf('=' + config.delimiter.end)
    const innerTmpl = remainingTmplStr.substring(1, indexOfEndTag)
    const newDelis = innerTmpl.split(' ')

    config.delimiter.start = newDelis[0]
    config.delimiter.end = newDelis[1]
    
    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndTag + 1 + originalEndDeliLength),
      insertionPoint: ctx => '',  
    }
  }
}));

/***/ }),

/***/ "./src/transformers/invertedSection.js":
/*!*********************************************!*\
  !*** ./src/transformers/invertedSection.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_dataHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/dataHelper.js */ "./src/helper/dataHelper.js");
/* harmony import */ var _helper_isMustacheFalsy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/isMustacheFalsy.js */ "./src/helper/isMustacheFalsy.js");



/* harmony default export */ __webpack_exports__["default"] = (() => ({
  test: remainingTmplStr => remainingTmplStr[0] === '^',
  transform: (remainingTmplStr, { delimiter }) => {
    const indexOfStartTagEnd = remainingTmplStr.indexOf(delimiter.end)
    const dataKey = remainingTmplStr.substring(1, indexOfStartTagEnd)
    const endTag = delimiter.start + '/' + dataKey + delimiter.end
    const indexOfEndTagStart = remainingTmplStr.indexOf(endTag)
    const innerStr = remainingTmplStr.substring(indexOfStartTagEnd + delimiter.start.length, indexOfEndTagStart)

    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndTagStart + endTag.length),
      insertionPoint: ctx => {
        const dataValue = Object(_helper_dataHelper_js__WEBPACK_IMPORTED_MODULE_0__["ctx2Value"])(ctx, dataKey)

        return Object(_helper_isMustacheFalsy_js__WEBPACK_IMPORTED_MODULE_1__["isMustacheFalsy"])(dataValue)
          ? innerStr
          : ''
      },
    }
  }
}));

/***/ }),

/***/ "./src/transformers/section.js":
/*!*************************************!*\
  !*** ./src/transformers/section.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_dataHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/dataHelper.js */ "./src/helper/dataHelper.js");
/* harmony import */ var _helper_isMustacheFalsy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/isMustacheFalsy.js */ "./src/helper/isMustacheFalsy.js");
/* harmony import */ var _lit_transformer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lit-transformer.js */ "./src/lit-transformer.js");




/** Note, unlike within mustache functions as data values are not supported for the time being */
/* harmony default export */ __webpack_exports__["default"] = (() => ({
  test: remainingTmplStr => remainingTmplStr[0] === '#',
  transform: (remainingTmplStr, config) => {
    const indexOfStartTagEnd = remainingTmplStr.indexOf(config.delimiter.end)
    const dataKey = remainingTmplStr.substring(1, indexOfStartTagEnd)
    const endTag = config.delimiter.start + '/' + dataKey + config.delimiter.end
    const indexOfEndTagStart = remainingTmplStr.indexOf(endTag)
    const innerTmpl = remainingTmplStr.substring(indexOfStartTagEnd + config.delimiter.start.length, indexOfEndTagStart)
    const transformedInnerTmpl = Object(_lit_transformer_js__WEBPACK_IMPORTED_MODULE_2__["transform"])(innerTmpl, config)

    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndTagStart + endTag.length),
      insertionPoint: ctx => {
        const sectionData = Object(_helper_dataHelper_js__WEBPACK_IMPORTED_MODULE_0__["ctx2Value"])(ctx, dataKey)
        
        if (Object(_helper_isMustacheFalsy_js__WEBPACK_IMPORTED_MODULE_1__["isMustacheFalsy"])(sectionData))
          return '';

        return sectionData.map(innerCtx => transformedInnerTmpl(innerCtx))
      }
    }
  }
}));

/***/ }),

/***/ "./src/transformers/transformVariable.js":
/*!***********************************************!*\
  !*** ./src/transformers/transformVariable.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_dataHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/dataHelper.js */ "./src/helper/dataHelper.js");


/* harmony default export */ __webpack_exports__["default"] = ((remainingTmplStr, { delimiter }) => {
  const indexOfEndDelimiter = remainingTmplStr.indexOf(delimiter.end)
  const dataKey = remainingTmplStr.substring(0, indexOfEndDelimiter)
  return {
    remainingTmplStr: remainingTmplStr.substring(indexOfEndDelimiter + delimiter.end.length),
    insertionPoint: ctx => Object(_helper_dataHelper_js__WEBPACK_IMPORTED_MODULE_0__["ctx2Value"])(ctx, dataKey)
  }
});

/***/ }),

/***/ "./src/transformers/unsafeVariable.js":
/*!********************************************!*\
  !*** ./src/transformers/unsafeVariable.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_dataHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/dataHelper.js */ "./src/helper/dataHelper.js");


/** Note, this is unsafe to use, because the rendered output could be any JavaScript! */
/* harmony default export */ __webpack_exports__["default"] = (unsafeHTML => ({
  test: remainingTmplStr => remainingTmplStr[0] === '{',
  transform: (remainingTmplStr, { delimiter }) => {
    const indexOfEndDelimiter = remainingTmplStr.indexOf('}' + delimiter.end)
    const dataKey = remainingTmplStr.substring(1, indexOfEndDelimiter)
    return {
      remainingTmplStr: remainingTmplStr.substring(indexOfEndDelimiter + 1 + delimiter.end.length),
      insertionPoint: ctx => unsafeHTML(Object(_helper_dataHelper_js__WEBPACK_IMPORTED_MODULE_0__["ctx2Value"])(ctx, dataKey)),
    }
  }
}));

/***/ })

/******/ })["default"];
//# sourceMappingURL=injectCreateLitTransformer.js.map