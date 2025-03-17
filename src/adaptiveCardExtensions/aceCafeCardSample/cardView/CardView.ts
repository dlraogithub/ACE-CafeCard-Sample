import {
  BaseComponentsCardView,
  ComponentsCardViewParameters,
  BasicCardView,
  IExternalLinkCardAction,
  IQuickViewCardAction,
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'AceCafeCardSampleAdaptiveCardExtensionStrings';
import {
  IAceCafeCardSampleAdaptiveCardExtensionProps,
  IAceCafeCardSampleAdaptiveCardExtensionState,
  QUICK_VIEW_REGISTRY_ID,
} from '../AceCafeCardSampleAdaptiveCardExtension';

export class CardView extends BaseComponentsCardView<
  IAceCafeCardSampleAdaptiveCardExtensionProps,
  IAceCafeCardSampleAdaptiveCardExtensionState,
  ComponentsCardViewParameters
> {
  public get cardViewParameters(): ComponentsCardViewParameters {
    return BasicCardView({
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
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID,
          },
        },
      },
    });
  }

  public get onCardSelection():
    | IQuickViewCardAction
    | IExternalLinkCardAction
    | undefined {
    return {
      type: 'ExternalLink',
      parameters: {
        target: 'https://www.bing.com',
      },
    };
  }
}
