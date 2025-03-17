import { BaseComponentsCardView, ComponentsCardViewParameters, IExternalLinkCardAction, IQuickViewCardAction } from '@microsoft/sp-adaptive-card-extension-base';
import { IAceCafeCardSampleAdaptiveCardExtensionProps, IAceCafeCardSampleAdaptiveCardExtensionState } from '../AceCafeCardSampleAdaptiveCardExtension';
export declare class CardView extends BaseComponentsCardView<IAceCafeCardSampleAdaptiveCardExtensionProps, IAceCafeCardSampleAdaptiveCardExtensionState, ComponentsCardViewParameters> {
    get cardViewParameters(): ComponentsCardViewParameters;
    get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined;
}
//# sourceMappingURL=CardView.d.ts.map