"use strict";
(self["webpackJsonp_bf364284-e06b-4342-9667-6bf607c7cafc_0.0.1"] = self["webpackJsonp_bf364284-e06b-4342-9667-6bf607c7cafc_0.0.1"] || []).push([["AceCafeCardSample-property-pane"],{

/***/ 881:
/*!***************************************************************************************!*\
  !*** ./lib/adaptiveCardExtensions/aceCafeCardSample/AceCafeCardSamplePropertyPane.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AceCafeCardSamplePropertyPane: () => (/* binding */ AceCafeCardSamplePropertyPane)
/* harmony export */ });
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-property-pane */ 723);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! AceCafeCardSampleAdaptiveCardExtensionStrings */ 233);
/* harmony import */ var AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__);


var AceCafeCardSamplePropertyPane = /** @class */ (function () {
    function AceCafeCardSamplePropertyPane() {
    }
    AceCafeCardSamplePropertyPane.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: { description: AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__.PropertyPaneDescription },
                    groups: [
                        {
                            // groupFields: [
                            //   PropertyPaneTextField('title', {
                            //     label: strings.TitleFieldLabel
                            //   })
                            // ]
                            groupName: AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__.BasicGroupName,
                            groupFields: [
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)('title', {
                                    label: AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__.TitleFieldLabel,
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)('iconProperty', {
                                    label: AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__.IconPropertyFieldLabel,
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)('description', {
                                    label: AceCafeCardSampleAdaptiveCardExtensionStrings__WEBPACK_IMPORTED_MODULE_1__.DescriptionFieldLabel,
                                    multiline: true,
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)('listId', {
                                    label: 'List ID (GUID)',
                                }),
                                (0,_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_0__.PropertyPaneTextField)('url', {
                                    label: 'Menu URL',
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return AceCafeCardSamplePropertyPane;
}());



/***/ })

}]);
//# sourceMappingURL=chunk.AceCafeCardSample-property-pane.js.map