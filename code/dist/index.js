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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_tree_binary_search_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/tree/binary-search-tree */ \"./src/tree/binary-search-tree.ts\");\n\r\nfunction getBSTRoot(insertArray) {\r\n    if (insertArray === void 0) { insertArray = [1, 3, 5, 4, 2, 6]; }\r\n    var BST = new _src_tree_binary_search_tree__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    for (var i = 0; i < 1000; i++) {\r\n        [].push.apply(insertArray, [1, 3, 5, 4, 2, 6]);\r\n    }\r\n    insertArray.forEach(function (node) { return BST.insert(node); });\r\n    var logNode = function (key) { };\r\n    console.time(\"inOrderTraverse\");\r\n    BST.inOrderTraverse(logNode);\r\n    console.timeEnd(\"inOrderTraverse\");\r\n    console.time(\"preOrderTraverse\");\r\n    BST.preOrderTraverse(logNode);\r\n    console.timeEnd(\"preOrderTraverse\");\r\n    console.time(\"postOrderTraverse\");\r\n    BST.postOrderTraverse(logNode);\r\n    console.timeEnd(\"postOrderTraverse\");\r\n    return BST.root;\r\n}\r\nvar Root = getBSTRoot();\r\nconsole.log(Root);\r\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ }),

/***/ "./src/tree/binary-search-tree.ts":
/*!****************************************!*\
  !*** ./src/tree/binary-search-tree.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Node = (function () {\r\n    function Node(key) {\r\n        this.key = key;\r\n        this.left = null;\r\n        this.right = null;\r\n    }\r\n    return Node;\r\n}());\r\nvar BinarySearchTree = (function () {\r\n    function BinarySearchTree() {\r\n        this.root = null;\r\n    }\r\n    BinarySearchTree.prototype.insert = function (key) {\r\n        if (this.root === null) {\r\n            this.root = new Node(key);\r\n        }\r\n        else {\r\n            this.insertNode(this.root, key);\r\n        }\r\n    };\r\n    BinarySearchTree.prototype.insertNode = function (node, key) {\r\n        if (key < node.key) {\r\n            if (node.left === null) {\r\n                node.left = new Node(key);\r\n            }\r\n            else {\r\n                this.insertNode(node.left, key);\r\n            }\r\n        }\r\n        else {\r\n            if (node.right === null) {\r\n                node.right = new Node(key);\r\n            }\r\n            else {\r\n                this.insertNode(node.right, key);\r\n            }\r\n        }\r\n    };\r\n    BinarySearchTree.prototype.inOrderTraverse = function (callback) {\r\n        this.inOrderTraverseNode(this.root, callback);\r\n    };\r\n    BinarySearchTree.prototype.inOrderTraverseNode = function (node, callback) {\r\n        if (node !== null) {\r\n            this.inOrderTraverseNode(node.left, callback);\r\n            callback(node.key);\r\n            this.inOrderTraverseNode(node.right, callback);\r\n        }\r\n    };\r\n    BinarySearchTree.prototype.preOrderTraverse = function (callback) {\r\n        this.preOrderTraverseNode(this.root, callback);\r\n    };\r\n    BinarySearchTree.prototype.preOrderTraverseNode = function (node, callback) {\r\n        if (node !== null) {\r\n            callback(node.key);\r\n            this.preOrderTraverseNode(node.left, callback);\r\n            this.preOrderTraverseNode(node.right, callback);\r\n        }\r\n    };\r\n    BinarySearchTree.prototype.postOrderTraverse = function (callback) {\r\n        this.postOrderTraverseNode(this.root, callback);\r\n    };\r\n    BinarySearchTree.prototype.postOrderTraverseNode = function (node, callback) {\r\n        if (node !== null) {\r\n            this.postOrderTraverseNode(node.left, callback);\r\n            this.postOrderTraverseNode(node.right, callback);\r\n            callback(node.key);\r\n        }\r\n    };\r\n    BinarySearchTree.prototype.search = function () { };\r\n    BinarySearchTree.prototype.min = function () { };\r\n    BinarySearchTree.prototype.max = function () { };\r\n    BinarySearchTree.prototype.remove = function () { };\r\n    return BinarySearchTree;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BinarySearchTree);\r\n\n\n//# sourceURL=webpack:///./src/tree/binary-search-tree.ts?");

/***/ })

/******/ });