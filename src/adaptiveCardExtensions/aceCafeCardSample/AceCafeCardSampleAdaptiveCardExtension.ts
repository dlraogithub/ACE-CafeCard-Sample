import type { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { AceCafeCardSamplePropertyPane } from './AceCafeCardSamplePropertyPane';
import {
  fetchListTitle,
  fetchListItems,
  IListItem,
} from './services/sp.service';

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

const CARD_VIEW_REGISTRY_ID: string = 'AceCafeCardSample_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'AceCafeCardSample_QUICK_VIEW';

export default class AceCafeCardSampleAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IAceCafeCardSampleAdaptiveCardExtensionProps,
  IAceCafeCardSampleAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: AceCafeCardSamplePropertyPane;

  public async onInit(): Promise<void> {
    this.state = {
      currentIndex: 0,
      listTitle: '',
      listItems: [],
    };

    // registers the card view to be shown in a dashboard
    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    // registers the quick view to open via QuickView action
    this.quickViewNavigator.register(
      QUICK_VIEW_REGISTRY_ID,
      () => new QuickView()
    );
    if (this.properties.listId) {
      Promise.all([
        this.setState({
          listTitle: await fetchListTitle(this.context, this.properties.listId),
        }),
        this.setState({
          listItems: await fetchListItems(this.context, this.properties.listId),
        }),
        //this.setState({currentUser: await calendarService.GetCurrentUser()})
      ]);
    }
    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'AceCafeCardSample-property-pane'*/
      './AceCafeCardSamplePropertyPane'
    ).then((component) => {
      this._deferredPropertyPane =
        new component.AceCafeCardSamplePropertyPane();
    });
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane?.getPropertyPaneConfiguration();
  }
  protected onPropertyPaneFieldChanged(
    propertyPath: string,
    oldValue: any,
    newValue: any
  ): void {
    if (propertyPath === 'listId' && newValue !== oldValue) {
      // TODO onPropertyPaneFieldChanged
      if (newValue) {
        (async () => {
          this.setState({
            listTitle: await fetchListTitle(
              this.context,
              this.properties.listId
            ),
          }),
            this.setState({
              listItems: await fetchListItems(
                this.context,
                this.properties.listId
              ),
            });
          //this.setState({currentUser: await calendarService.GetCurrentUser() })
        })();
      } else {
        this.setState({
          listTitle: '',
          listItems: [],
        });
      }
    }
  }
}
