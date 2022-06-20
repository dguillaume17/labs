/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppComponent = void 0;
class AppComponent extends HTMLElement {
    // Lifecycle
    connectedCallback() {
        this._shadow = this.attachShadow({
            mode: 'closed'
        });
        this.render();
    }
    // Render
    render() {
        this._shadow.innerHTML = /*html*/ `
            <form id="main-form">
                <div class="input-container">
                    <label for="first-name">First Name:</label>
                    <input type="text" id="first-name" name="input-first-name">
                    <span name="viewer-first-name"></span>
                </div>
                <div class="input-container">
                    <label for="input-size">Size:</label>
                    <input type="range" min="20" max="80" id="input-size" name="input-size">
                    <span name="viewer-size"></span>
                </div>
                <div class="input-container">
                    <label for="preferences">Preference(s):</label>
                    <input type="checkbox" id="preferences1" name="preferences1">
                    <input type="checkbox" id="preferences2" name="preferences2">
                </div>
                <div class="input-container">
                    <label for="preferences">Sex:</label>
                    <input type="radio" id="sex" name="input-sex" value="M" checked>
                    <input type="radio" id="sex" name="input-sex" value="F">
                </div>
                <div class="input-container">
                    <button type="button" name="btn-default">Set default values</button>
                    <button type="button" name="btn-cancel">Cancel</button>
                    <button type="submit">Send form</button>
                </div>
            </form>

            <app-hello-world>
                <div slot="test"><span>OK</span></div>
            </app-hello-world>
        `;
        this._setupGeneralTemplateRefs();
        this._setupGeneralListeners();
    }
    // Setup template refs
    _setupGeneralTemplateRefs() {
        this._setupButtonTemplateRefs();
        this._setupFormTemplateRefs();
        this._setupInputsTemplateRefs();
        this._setupViewerTemplateRefs();
    }
    _setupButtonTemplateRefs() {
        var _a, _b;
        this._buttons = {
            default: (_a = this._shadow) === null || _a === void 0 ? void 0 : _a.querySelector('[name="btn-default"]'),
            cancel: (_b = this._shadow) === null || _b === void 0 ? void 0 : _b.querySelector('[name="btn-cancel"]')
        };
    }
    _setupFormTemplateRefs() {
        var _a;
        this._form = (_a = this._shadow) === null || _a === void 0 ? void 0 : _a.querySelector('#main-form');
    }
    _setupInputsTemplateRefs() {
        var _a, _b;
        this._inputs = {
            firstName: (_a = this._shadow) === null || _a === void 0 ? void 0 : _a.querySelector('[name="input-first-name"'),
            size: (_b = this._shadow) === null || _b === void 0 ? void 0 : _b.querySelector('[name="input-size"'),
        };
    }
    _setupViewerTemplateRefs() {
        var _a, _b;
        this._viewers = {
            firstName: (_a = this._shadow) === null || _a === void 0 ? void 0 : _a.querySelector('[name="viewer-first-name"]'),
            size: (_b = this._shadow) === null || _b === void 0 ? void 0 : _b.querySelector('[name="viewer-size"]')
        };
    }
    // Setup listeners
    _setupGeneralListeners() {
        this._setupFirstNameListener();
        this._setupSizeListener();
        this._setupDefaultButton();
        this._setupCancelButton();
    }
    _setupFirstNameListener() {
        var _a, _b, _c, _d;
        (_b = (_a = this._inputs) === null || _a === void 0 ? void 0 : _a.firstName) === null || _b === void 0 ? void 0 : _b.addEventListener('input', event => {
            const newValue = event.target.value;
            this._viewers.firstName.innerHTML = newValue;
        });
        (_d = (_c = this._inputs) === null || _c === void 0 ? void 0 : _c.firstName) === null || _d === void 0 ? void 0 : _d.addEventListener('change', event => {
            this._viewers.firstName.innerHTML = '';
        });
    }
    _setupSizeListener() {
        var _a, _b;
        (_b = (_a = this._inputs) === null || _a === void 0 ? void 0 : _a.size) === null || _b === void 0 ? void 0 : _b.addEventListener('change', event => {
            const newValue = event.target.value;
            this._viewers.size.innerHTML = newValue;
        });
    }
    _setupDefaultButton() {
        var _a, _b;
        (_b = (_a = this._buttons) === null || _a === void 0 ? void 0 : _a.default) === null || _b === void 0 ? void 0 : _b.addEventListener('click', event => {
            this._inputs.firstName.value = 'John';
            this._inputs.size.value = String(50);
        });
    }
    _setupCancelButton() {
        var _a, _b;
        (_b = (_a = this._buttons) === null || _a === void 0 ? void 0 : _a.cancel) === null || _b === void 0 ? void 0 : _b.addEventListener('click', event => {
            var _a;
            (_a = this._form) === null || _a === void 0 ? void 0 : _a.reset();
        });
    }
}
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/hello-world.components.ts":
/*!*******************************************!*\
  !*** ./src/app/hello-world.components.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HelloWorldComponent = void 0;
const hello_world_component_html_1 = __importDefault(__webpack_require__(/*! ./hello-world.component.html */ "./src/app/hello-world.component.html"));
const hello_world_component_css_1 = __importDefault(__webpack_require__(/*! ./hello-world.component.css */ "./src/app/hello-world.component.css"));
class HelloWorldComponent extends HTMLElement {
    // Lifecycle
    connectedCallback() {
        this._shadow = this.attachShadow({
            mode: 'closed'
        });
        this.render();
    }
    // Render
    render() {
        this._shadow.innerHTML = /*html*/ `
            ${hello_world_component_html_1.default}
            <style>
                ${hello_world_component_css_1.default}
            </style>
        `;
    }
}
exports.HelloWorldComponent = HelloWorldComponent;


/***/ }),

/***/ "./src/app/hello-world.component.css":
/*!*******************************************!*\
  !*** ./src/app/hello-world.component.css ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "div {\r\n    background-color: red;\r\n}";

/***/ }),

/***/ "./src/app/hello-world.component.html":
/*!********************************************!*\
  !*** ./src/app/hello-world.component.html ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<div>\r\n    coucou ok 2\r\n</div>";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_component_1 = __webpack_require__(/*! ./app/app.component */ "./src/app/app.component.ts");
const hello_world_components_1 = __webpack_require__(/*! ./app/hello-world.components */ "./src/app/hello-world.components.ts");
document.addEventListener('DOMContentLoaded', (event) => {
    customElements.define('app-root', app_component_1.AppComponent);
    customElements.define('app-hello-world', hello_world_components_1.HelloWorldComponent);
});

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map