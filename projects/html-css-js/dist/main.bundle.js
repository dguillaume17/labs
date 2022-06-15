/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("function html(args) {\r\n    return args;\r\n}\r\n\r\nclass HelloWorldComponent extends HTMLElement {\r\n\r\n    // Lifecycle\r\n\r\n    connectedCallback() {\r\n        this._shadow = this.attachShadow({\r\n            mode: 'closed'\r\n        })\r\n\r\n        this.render()\r\n    }\r\n\r\n    // Render\r\n\r\n    render() {\r\n        this._shadow.innerHTML = html`\r\n            <div>\r\n                coucou\r\n            </div>\r\n            <style>\r\n                div {\r\n                    background-color: red;\r\n                }\r\n            </style>\r\n        `\r\n    }\r\n\r\n}\r\n\r\nclass Component {\r\n\r\n    // Lifecycle\r\n    \r\n    constructor() {}\r\n\r\n    initialize(refs) {\r\n        this._form = refs.form\r\n        this._inputs = refs.inputs\r\n        this._buttons = refs.buttons\r\n        this._viewers = refs.viewers\r\n\r\n        this._setupGeneralListeners()\r\n    }\r\n\r\n    // Setup listeners\r\n\r\n    _setupGeneralListeners() {\r\n        this._setupFirstNameListener()\r\n        this._setupSizeListener()\r\n        this._setupDefaultButton()\r\n        this._setupCancelButton()\r\n    }\r\n\r\n    _setupFirstNameListener() {\r\n        this._inputs.firstName.addEventListener('input', event => {\r\n            const newValue = event.target.value\r\n            this._viewers.firstName.innerHTML = newValue\r\n        })\r\n\r\n        this._inputs.firstName.addEventListener('change', event => {\r\n            this._viewers.firstName.innerHTML = ''\r\n        })\r\n    }\r\n\r\n    _setupSizeListener() {\r\n        this._inputs.size.addEventListener('change', event => {\r\n            const newValue = event.target.value\r\n            this._viewers.size.innerHTML = newValue\r\n        })\r\n    }\r\n\r\n    _setupDefaultButton() {\r\n        this._buttons.default.addEventListener('click', event => {\r\n            this._inputs.firstName.value = 'John';\r\n            this._inputs.size.value = 50;\r\n        }) \r\n    }\r\n\r\n    _setupCancelButton() {\r\n        this._buttons.cancel.addEventListener('click', event => {\r\n            this._form.reset();\r\n        })\r\n    }\r\n}\r\n\r\nconst component = new Component()\r\n\r\ndocument.addEventListener('DOMContentLoaded', (event) => {\r\n    customElements.define( 'app-hello-world', HelloWorldComponent);\r\n    document.body.innerHTML = document.body.innerHTML + html`\r\n        <app-hello-world>\r\n            <div slot=\"test\"><span>OK</span></div>\r\n        </app-hello-world>\r\n    `;\r\n    component.initialize({\r\n        form: document.querySelector('#main-form'),\r\n        inputs: {\r\n            firstName: document.querySelector('[name=\"input-first-name\"'),\r\n            size: document.querySelector('[name=\"input-size\"'),\r\n        },\r\n        buttons: {\r\n            default: document.querySelector('[name=\"btn-default\"]'),\r\n            cancel: document.querySelector('[name=\"btn-cancel\"]')\r\n        },\r\n        viewers: {\r\n            firstName: document.querySelector('[name=\"viewer-first-name\"]'),\r\n            size: document.querySelector('[name=\"viewer-size\"]')\r\n        }\r\n    })\r\n})\n\n//# sourceURL=webpack://html-css-js/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"]();
/******/ 	
/******/ })()
;