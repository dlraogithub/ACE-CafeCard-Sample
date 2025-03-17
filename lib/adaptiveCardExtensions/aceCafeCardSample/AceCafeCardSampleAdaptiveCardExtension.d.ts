import type { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { IListItem } from './services/sp.service';
export interface IAceCafeCardSampleAdaptiveCardExtensionProps {
    title: string;
    description: string;
    iconProperty: string;
    listId: string;
    url: string;
}
export interface IAceCafeCardSampleAdaptiveCardExtensionState {
    listTitle: string;
    listItems: IListItem[];
    currentIndex: number;
}
export declare const QUICK_VIEW_REGISTRY_ID: string;
export default class AceCafeCardSampleAdaptiveCardExtension extends BaseAdaptiveCardExtension<IAceCafeCardSampleAdaptiveCardExtensionProps, IAceCafeCardSampleAdaptiveCardExtensionState> {
    private _deferredPropertyPane;
    onInit(): Promise<void>;
    protected loadPropertyPaneResources(): Promise<void>;
    protected renderCard(): string | undefined;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void;
}
//# sourceMappingURL=AceCafeCardSampleAdaptiveCardExtension.d.ts.map