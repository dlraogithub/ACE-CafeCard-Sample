import { ISPFxAdaptiveCard, BaseAdaptiveCardQuickView } from '@microsoft/sp-adaptive-card-extension-base';
import { IAceCafeCardSampleAdaptiveCardExtensionProps, IAceCafeCardSampleAdaptiveCardExtensionState } from '../AceCafeCardSampleAdaptiveCardExtension';
import { IListItem } from '../services/sp.service';
export interface IQuickViewData {
    subTitle: string;
    title: string;
    description: string;
    listItems: IListItem[];
    url: string;
}
export declare class QuickView extends BaseAdaptiveCardQuickView<IAceCafeCardSampleAdaptiveCardExtensionProps, IAceCafeCardSampleAdaptiveCardExtensionState, IQuickViewData> {
    get data(): IQuickViewData;
    get template(): ISPFxAdaptiveCard;
}
//# sourceMappingURL=QuickView.d.ts.map