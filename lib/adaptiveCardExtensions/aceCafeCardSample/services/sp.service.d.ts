import { AdaptiveCardExtensionContext } from '@microsoft/sp-adaptive-card-extension-base';
export interface IListItem {
    id: string;
    title: string;
    description: string;
    index: number;
    price: string;
    category: string;
    location: string;
}
export declare const fetchListTitle: (spContext: AdaptiveCardExtensionContext, listId: string) => Promise<string>;
export declare const fetchListItems: (spContext: AdaptiveCardExtensionContext, listId: string) => Promise<IListItem[]>;
export declare const addListItem: (spContext: AdaptiveCardExtensionContext, listId: string, listItemTitle: string, listItemDescription: string) => Promise<void>;
//# sourceMappingURL=sp.service.d.ts.map