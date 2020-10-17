module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/users.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/users.js":
/*!****************************!*\
  !*** ./pages/api/users.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  /*\n   * Middleware included to parse the incoming request `req`.\n   * req.cookies\n   * req.query\n   * req.body\n   */\n\n  /*\n   * Express-like helper functions for the response `res`.\n   * res.status(200);\n   * res.json({});\n   * res.send('HTTP response');\n   */\n  return res.status(200).json([{\n    email: 'me@leerob.io',\n    id: 1,\n    name: 'Lee'\n  }]);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMuanM/NTc0ZCJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZW1haWwiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsZ0VBQUNBLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSSxTQUFPQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixDQUN4QjtBQUNJQyxTQUFLLEVBQUUsY0FEWDtBQUVJQyxNQUFFLEVBQUUsQ0FGUjtBQUdJQyxRQUFJLEVBQUU7QUFIVixHQUR3QixDQUFyQixDQUFQO0FBT0gsQ0F0QkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvdXNlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICAvKlxuICAgICAqIE1pZGRsZXdhcmUgaW5jbHVkZWQgdG8gcGFyc2UgdGhlIGluY29taW5nIHJlcXVlc3QgYHJlcWAuXG4gICAgICogcmVxLmNvb2tpZXNcbiAgICAgKiByZXEucXVlcnlcbiAgICAgKiByZXEuYm9keVxuICAgICAqL1xuXG4gICAgLypcbiAgICAgKiBFeHByZXNzLWxpa2UgaGVscGVyIGZ1bmN0aW9ucyBmb3IgdGhlIHJlc3BvbnNlIGByZXNgLlxuICAgICAqIHJlcy5zdGF0dXMoMjAwKTtcbiAgICAgKiByZXMuanNvbih7fSk7XG4gICAgICogcmVzLnNlbmQoJ0hUVFAgcmVzcG9uc2UnKTtcbiAgICAgKi9cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGVtYWlsOiAnbWVAbGVlcm9iLmlvJyxcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogJ0xlZSdcbiAgICAgICAgfVxuICAgIF0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/users.js\n");

/***/ })

/******/ });