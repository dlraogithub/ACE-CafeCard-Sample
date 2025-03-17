(()=>{ var __RUSHSTACK_CURRENT_SCRIPT__ = document.currentScript; define("bf364284-e06b-4342-9667-6bf607c7cafc_0.0.1", ["@microsoft/sp-adaptive-card-extension-base","AceCafeCardSampleAdaptiveCardExtensionStrings","@microsoft/sp-http","@microsoft/sp-loader"], (__WEBPACK_EXTERNAL_MODULE__340__, __WEBPACK_EXTERNAL_MODULE__233__, __WEBPACK_EXTERNAL_MODULE__272__, __WEBPACK_EXTERNAL_MODULE__37__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 158:
/*!************************************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/aceCafeCardSample/AceCafeCardSampleAdaptiveCardExtension.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QUICK_VIEW_REGISTRY_ID: () => (/* binding */ QUICK_VIEW_REGISTRY_ID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-adaptive-card-extension-base */ 340);
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cardView_CardView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardView/CardView */ 954);
/* harmony import */ var _quickView_QuickView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickView/QuickView */ 961);
/* harmony import */ var _services_sp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/sp.service */ 458);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CARD_VIEW_REGISTRY_ID = 'AceCafeCardSample_CARD_VIEW';
var QUICK_VIEW_REGISTRY_ID = 'AceCafeCardSample_QUICK_VIEW';
var AceCafeCardSampleAdaptiveCardExtension = /** @class */ (function (_super) {
    __extends(AceCafeCardSampleAdaptiveCardExtension, _super);
    function AceCafeCardSampleAdaptiveCardExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AceCafeCardSampleAdaptiveCardExtension.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            var _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        this.state = {
                            currentIndex: 0,
                            listTitle: '',
                            listItems: [],
                        };
                        // registers the card view to be shown in a dashboard
                        this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, function () { return new _cardView_CardView__WEBPACK_IMPORTED_MODULE_1__.CardView(); });
                        // registers the quick view to open via QuickView action
                        this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, function () { return new _quickView_QuickView__WEBPACK_IMPORTED_MODULE_2__.QuickView(); });
                        if (!this.properties.listId) return [3 /*break*/, 3];
                        _b = (_a = Promise).all;
                        _c = this.setState;
                        _f = {};
                        return [4 /*yield*/, (0,_services_sp_service__WEBPACK_IMPORTED_MODULE_3__.fetchListTitle)(this.context, this.properties.listId)];
                    case 1:
                        _d = [
                            _c.apply(this, [(_f.listTitle = _h.sent(),
                                    _f)])
                        ];
                        _e = this.setState;
                        _g = {};
                        return [4 /*yield*/, (0,_services_sp_service__WEBPACK_IMPORTED_MODULE_3__.fetchListItems)(this.context, this.properties.listId)];
                    case 2:
                        _b.apply(_a, [_d.concat([
                                _e.apply(this, [(_g.listItems = _h.sent(),
                                        _g)])
                            ])]);
                        _h.label = 3;
                    case 3: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    AceCafeCardSampleAdaptiveCardExtension.prototype.loadPropertyPaneResources = function () {
        var _this = this;
        return __webpack_require__.e(/*! import() | AceCafeCardSample-property-pane */ "AceCafeCardSample-property-pane").then(__webpack_require__.bind(__webpack_require__, /*! ./AceCafeCardSamplePropertyPane */ 881)).then(function (component) {
            _this._deferredPropertyPane =
                new component.AceCafeCardSamplePropertyPane();
        });
    };
    AceCafeCardSampleAdaptiveCardExtension.prototype.renderCard = function () {
        return CARD_VIEW_REGISTRY_ID;
    };
    AceCafeCardSampleAdaptiveCardExtension.prototype.getPropertyPaneConfiguration = function () {
        var _a;
        return (_a = this._deferredPropertyPane) === null || _a === void 0 ? void 0 : _a.getPropertyPaneConfiguration();
    };
    AceCafeCardSampleAdaptiveCardExtension.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        var _this = this;
        if (propertyPath === 'listId' && newValue !== oldValue) {
            // TODO onPropertyPaneFieldChanged
            if (newValue) {
                (function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, _b;
                    var _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                _a = this.setState;
                                _c = {};
                                return [4 /*yield*/, (0,_services_sp_service__WEBPACK_IMPORTED_MODULE_3__.fetchListTitle)(this.context, this.properties.listId)];
                            case 1:
                                _a.apply(this, [(_c.listTitle = _e.sent(),
                                        _c)]);
                                _b = this.setState;
                                _d = {};
                                return [4 /*yield*/, (0,_services_sp_service__WEBPACK_IMPORTED_MODULE_3__.fetchListItems)(this.context, this.properties.listId)];
                            case 2:
                                _b.apply(this, [(_d.listItems = _e.sent(),
                                        _d)]);
                                return [2 /*return*/];
                        }
                    });
                }); })();
            }
            else {
                this.setState({
                    listTitle: '',
                    listItems: [],
                });
            }
        }
    };
    return AceCafeCardSampleAdaptiveCardExtension;
}(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__.BaseAdaptiveCardExtension));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AceCafeCardSampleAdaptiveCardExtension);


/***/ }),

/***/ 954:
/*!***************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/aceCafeCardSample/cardView/CardView.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardView: () => (/* binding */ CardView)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-adaptive-card-extension-base */ 340);
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! AceCafeCardSampleAdaptiveCardExtensionStrings */ 233);
/* harmony import */ var AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AceCafeCardSampleAdaptiveCardExtension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AceCafeCardSampleAdaptiveCardExtension */ 158);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var CardView = /** @class */ (function (_super) {
    __extends(CardView, _super);
    function CardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CardView.prototype, "cardViewParameters", {
        get: function () {
            return (0,_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__.BasicCardView)({
                cardBar: {
                    componentName: 'cardBar',
                    title: this.properties.title,
                },
                header: {
                    componentName: 'text',
                    text: 'Check out this weeks menu at EXP', //strings.PrimaryText;
                },
                footer: {
                    componentName: 'cardButton',
                    title: AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__.QuickViewButton,
                    action: {
                        type: 'QuickView',
                        parameters: {
                            view: _AceCafeCardSampleAdaptiveCardExtension__WEBPACK_IMPORTED_MODULE_2__.QUICK_VIEW_REGISTRY_ID,
                        },
                    },
                },
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardView.prototype, "onCardSelection", {
        get: function () {
            return {
                type: 'ExternalLink',
                parameters: {
                    target: 'https://www.bing.com',
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return CardView;
}(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__.BaseComponentsCardView));



/***/ }),

/***/ 961:
/*!*****************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/aceCafeCardSample/quickView/QuickView.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickView: () => (/* binding */ QuickView)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-adaptive-card-extension-base */ 340);
/* harmony import */ var _microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! AceCafeCardSampleAdaptiveCardExtensionStrings */ 233);
/* harmony import */ var AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var QuickView = /** @class */ (function (_super) {
    __extends(QuickView, _super);
    function QuickView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(QuickView.prototype, "data", {
        get: function () {
            return {
                subTitle: "The office cafeteria is a convenient and inviting space that caters to the breakfast and lunch needs of employees. With a diverse menu, it offers a range of delicious options to satisfy different tastes and dietary preferences. From hearty breakfast items like freshly baked pastries and energizing smoothies to a variety of flavorful lunch choices including salads, sandwiches, and hot entrees, the cafeteria ensures that employees have a satisfying and nourishing dining experience throughout the day.",
                title: AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__.Title,
                description: '',
                listItems: this.state.listItems,
                url: this.properties.url,
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuickView.prototype, "template", {
        get: function () {
            return __webpack_require__(/*! ./template/QuickViewTemplate.json */ 312);
        },
        enumerable: false,
        configurable: true
    });
    return QuickView;
}(_microsoft_sp_adaptive_card_extension_base__WEBPACK_IMPORTED_MODULE_0__.BaseAdaptiveCardQuickView));



/***/ }),

/***/ 458:
/*!*****************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/aceCafeCardSample/services/sp.service.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchListItems: () => (/* binding */ fetchListItems),
/* harmony export */   fetchListTitle: () => (/* binding */ fetchListTitle)
/* harmony export */ });
/* unused harmony export addListItem */
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-http */ 272);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var fetchListTitle = function (spContext, listId) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!listId) {
                    return [2 /*return*/, Promise.reject('No listId specified.')];
                }
                return [4 /*yield*/, spContext.spHttpClient.get("".concat(spContext.pageContext.web.absoluteUrl, "/_api/web/lists/GetById(id='").concat(listId, "')/?$select=Title"), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__.SPHttpClient.configurations.v1)];
            case 1: return [4 /*yield*/, (_a.sent()).json()];
            case 2:
                response = _a.sent();
                return [2 /*return*/, Promise.resolve(response.Title)];
        }
    });
}); };
var fetchListItems = function (spContext, listId) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!listId) {
                    return [2 /*return*/, Promise.reject('No listId specified.')];
                }
                return [4 /*yield*/, spContext.spHttpClient.get("".concat(spContext.pageContext.web.absoluteUrl, "/_api/web/lists/GetById(id='").concat(listId, "')/items?$select=ID,Title,Description,Price,Category,Location"), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__.SPHttpClient.configurations.v1)];
            case 1: return [4 /*yield*/, (_b.sent()).json()];
            case 2:
                response = _b.sent();
                if (((_a = response.value) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    return [2 /*return*/, Promise.resolve(response.value.map(function (listItem, index) {
                            return {
                                id: listItem.ID,
                                title: listItem.Title,
                                description: listItem.Description,
                                index: index,
                                price: listItem.Price,
                                category: listItem.Category,
                                location: listItem.Location
                            };
                        }))];
                }
                else {
                    return [2 /*return*/, Promise.resolve([])];
                }
                return [2 /*return*/];
        }
    });
}); };
var getItemEntityType = function (spContext, listId) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, spContext.spHttpClient.get("".concat(spContext.pageContext.web.absoluteUrl, "/_api/web/lists/GetById(id='").concat(listId, "')?$select=ListItemEntityTypeFullName"), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__.SPHttpClient.configurations.v1)];
            case 1: return [4 /*yield*/, (_a.sent()).json()];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.ListItemEntityTypeFullName];
        }
    });
}); };
var addListItem = function (spContext, listId, listItemTitle, listItemDescription) { return __awaiter(void 0, void 0, void 0, function () {
    var entityListItemType, newListItem;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getItemEntityType(spContext, listId)];
            case 1:
                entityListItemType = _a.sent();
                newListItem = {
                    '@odata.type': entityListItemType,
                    Title: listItemTitle,
                    Description: listItemDescription
                };
                return [4 /*yield*/, spContext.spHttpClient.post("".concat(spContext.pageContext.web.absoluteUrl, "/_api/web/lists/GetById(id='").concat(listId, "')/items"), _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_0__.SPHttpClient.configurations.v1, {
                        headers: {
                            'ACCEPT': 'application/json; odata.metadata=none',
                            'CONTENT-TYPE': 'application/json'
                        },
                        body: JSON.stringify(newListItem)
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/, Promise.resolve()];
        }
    });
}); };


/***/ }),

/***/ 340:
/*!*************************************************************!*\
  !*** external "@microsoft/sp-adaptive-card-extension-base" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__340__;

/***/ }),

/***/ 272:
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__272__;

/***/ }),

/***/ 37:
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__37__;

/***/ }),

/***/ 233:
/*!****************************************************************!*\
  !*** external "AceCafeCardSampleAdaptiveCardExtensionStrings" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__233__;

/***/ }),

/***/ 312:
/*!************************************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/aceCafeCardSample/quickView/template/QuickViewTemplate.json ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.2","body":[{"type":"TextBlock","weight":"Bolder","text":"${title}"},{"type":"ColumnSet","columns":[{"type":"Column","items":[{"type":"TextBlock","size":"small","text":"${subTitle}","wrap":true}]}]},{"type":"TextBlock","size":"large","weight":"bolder","text":"**CAFE HOURS**","color":"warning","wrap":true},{"type":"FactSet","spacing":"large","facts":[{"title":"COFFEE SERVICE","value":"**7:00 – 3:00**"},{"title":"BREAKFAST","value":"**7:30 – 10:00**"},{"title":"LUNCH","value":"**11:00 – 2:00**"}]},{"type":"TextBlock","size":"large","weight":"bolder","text":"**LUNCH MENU**","color":"warning","wrap":true},{"type":"TextBlock","text":"${description}","wrap":true},{"type":"Container","spacing":"Large","style":"emphasis","items":[{"type":"ColumnSet","columns":[{"type":"Column","spacing":"Large","items":[{"type":"TextBlock","text":"TITLE","size":"small","weight":"Bolder","style":"heading","wrap":true}],"width":"100px"},{"type":"Column","items":[{"type":"TextBlock","text":"PRICE","size":"small","weight":"Bolder","style":"heading","wrap":true}],"width":"stretch"},{"type":"Column","items":[{"type":"TextBlock","text":"LOCATION","size":"small","weight":"Bolder","style":"heading","wrap":true}],"width":"60px"},{"type":"Column","items":[{"type":"TextBlock","text":"CATEGORY","size":"small","weight":"Bolder","style":"heading","wrap":true}],"width":"80px"}]}],"bleed":true},{"$data":"${listItems}","type":"Container","items":[{"type":"ColumnSet","columns":[{"type":"Column","items":[{"type":"TextBlock","text":"${title}","size":"small","wrap":true}],"width":"100px"},{"type":"Column","items":[{"type":"TextBlock","text":"$ ${formatNumber(price, 2)}","size":"small","wrap":true}],"width":"stretch"},{"type":"Column","items":[{"type":"TextBlock","text":"${location}","size":"small","horizontalAlignment":"center","wrap":true}],"width":"60px"},{"type":"Column","items":[{"type":"TextBlock","text":"${category}","color":"${if(category == \'GRILL LUNCH\', \'good\', if(category == \'FRIES\', \'warning\', if(category == \'SOUP\', \'accent\', if(category == \'SANDWICHES\', \'attention\', \'\'))))}","size":"small","wrap":true}],"width":"80px"}]}]},{"type":"TextBlock","size":"large","weight":"bolder","text":"**WEEKLY LUNCH SPECIALS**","color":"warning","wrap":true},{"type":"FactSet","spacing":"large","facts":[{"title":"**M**","value":"Baked Manicotti, Marina, Mozzarella, Parmesan, Seasonal Vegetables"},{"title":"**T**","value":"Taco Tuesday"},{"title":"**W**","value":"Pizza Partito"},{"title":"**TH**","value":"Turkey a la King, Rice"},{"title":"**F**","value":"Steak Fajitas, Spanish Rice, Cuban Black Beans"}]}],"actions":[{"type":"Action.OpenUrl","title":"View Menu (pdf version)","url":"${url}"},{"type":"Action.OpenUrl","title":"Welcome to our online catering system!","url":"https://thehughescafe.catertrax.com/"},{"type":"Action.OpenUrl","title":"LFF Order Form","url":"https://www.clover.com/online-ordering/ays-hospitality-llc-germantown/"}]}');

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "chunk." + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "bf364284-e06b-4342-9667-6bf607c7cafc_0.0.1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 				if (script.src.indexOf(window.location.origin + '/') !== 0) {
/******/ 					script.crossOrigin = "anonymous";
/******/ 				}
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 		var _publicPath = __RUSHSTACK_CURRENT_SCRIPT__ ? __RUSHSTACK_CURRENT_SCRIPT__.src : '';
/******/ 		__webpack_require__.p = _publicPath.slice(0, _publicPath.lastIndexOf('/') + 1);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// Returns a list of SPFx components used in a given chunk but not used in the runtime chunk
/******/ 	function getAsyncSpfxComponents(chunkId) {
/******/ 		var component_0 = { // @microsoft/sp-property-pane
/******/ 			i: "f9e737b7-f0df-4597-ba8c-3060f82380db",
/******/ 			v: "1.20.0",
/******/ 			m: 723
/******/ 		};
/******/ 	
/******/ 		return {"AceCafeCardSample-property-pane": [component_0]}[chunkId] || [];
/******/ 	}
/******/ 	__webpack_require__.f.compat = (chunkId, promises) => {
/******/ 	
/******/ 		// SPFx Component async loading
/******/ 	
/******/ 		var chunkAsyncComponents = getAsyncSpfxComponents(chunkId);
/******/ 		for (var i = 0; i < chunkAsyncComponents.length; i++) {
/******/ 			// Has the component already been loaded into the modules object?
/******/ 			if (!__webpack_require__.m[chunkAsyncComponents[i].m]) {
/******/ 				((chunkComponent) => {
/******/ 					promises.push(spfxLoader.SPComponentLoader.loadComponentById(
/******/ 						chunkComponent.i,
/******/ 						chunkComponent.v
/******/ 					).then((component) => {
/******/ 						__webpack_require__.m[chunkComponent.m] = (module) => module.exports = component;
/******/ 					}));
/******/ 				})(chunkAsyncComponents[i]);
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	
/******/ 	var spfxLoader = __webpack_require__(37);
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"ace-cafe-card-sample-adaptive-card-extension": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackJsonp_bf364284-e06b-4342-9667-6bf607c7cafc_0.0.1"] = self["webpackJsonp_bf364284-e06b-4342-9667-6bf607c7cafc_0.0.1"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(158);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});})();;
//# sourceMappingURL=ace-cafe-card-sample-adaptive-card-extension.js.map