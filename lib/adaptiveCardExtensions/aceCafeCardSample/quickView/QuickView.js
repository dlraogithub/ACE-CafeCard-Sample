var __extends = (this && this.__extends) || (function () {
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
import { BaseAdaptiveCardQuickView, } from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'AceCafeCardSampleAdaptiveCardExtensionStrings';
var QuickView = /** @class */ (function (_super) {
    __extends(QuickView, _super);
    function QuickView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(QuickView.prototype, "data", {
        get: function () {
            return {
                subTitle: "The office cafeteria is a convenient and inviting space that caters to the breakfast and lunch needs of employees. With a diverse menu, it offers a range of delicious options to satisfy different tastes and dietary preferences. From hearty breakfast items like freshly baked pastries and energizing smoothies to a variety of flavorful lunch choices including salads, sandwiches, and hot entrees, the cafeteria ensures that employees have a satisfying and nourishing dining experience throughout the day.",
                title: strings.Title,
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
            return require('./template/QuickViewTemplate.json');
        },
        enumerable: false,
        configurable: true
    });
    return QuickView;
}(BaseAdaptiveCardQuickView));
export { QuickView };
//# sourceMappingURL=QuickView.js.map