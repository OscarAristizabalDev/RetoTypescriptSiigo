/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myLibrary"] = factory();
	else
		root["myLibrary"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCharactersByNumber = exports.characters = void 0;\nconst enum_1 = __webpack_require__(/*! ./enums/enum */ \"./enums/enum.ts\");\nconst CharacterServices_1 = __webpack_require__(/*! ./services/CharacterServices */ \"./services/CharacterServices.ts\");\nexports.characters = [];\nconst getCharactersByNumber = () => __awaiter(void 0, void 0, void 0, function* () {\n    const pageCharacter = document.getElementById(\"pageCharacter\");\n    if (isNaN(parseInt(pageCharacter.value)))\n        return;\n    const { results } = yield (0, CharacterServices_1.getCharactersByPage)(parseInt(pageCharacter.value));\n    console.log(results);\n    setCharacters(results);\n    // displayCharacters(characters)\n});\nexports.getCharactersByNumber = getCharactersByNumber;\nconst setCharacters = (characters) => {\n    localStorage.setItem(enum_1.localStorageEnum.key, JSON.stringify(characters));\n};\nconst displayCharacters = (characters) => {\n    const charactersElement = document.getElementById(\"characters\");\n    if (charactersElement) {\n        charactersElement.innerHTML = '';\n        for (const character of characters) {\n            const li = document.createElement(\"li\");\n            li.innerText = character.name;\n            charactersElement.appendChild(li);\n        }\n    }\n};\n\n\n//# sourceURL=webpack://myLibrary/./app.ts?");

/***/ }),

/***/ "./enums/enum.ts":
/*!***********************!*\
  !*** ./enums/enum.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.localStorageEnum = void 0;\nvar localStorageEnum;\n(function (localStorageEnum) {\n    localStorageEnum[\"key\"] = \"characteres\";\n})(localStorageEnum || (exports.localStorageEnum = localStorageEnum = {}));\n\n\n//# sourceURL=webpack://myLibrary/./enums/enum.ts?");

/***/ }),

/***/ "./services/CharacterServices.ts":
/*!***************************************!*\
  !*** ./services/CharacterServices.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCharactersByPage = void 0;\nconst getCharactersByPage = (page) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const response = yield fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);\n        return yield response.json();\n    }\n    catch (error) {\n        throw new Error('Error fetching data: , error');\n    }\n});\nexports.getCharactersByPage = getCharactersByPage;\n\n\n//# sourceURL=webpack://myLibrary/./services/CharacterServices.ts?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});