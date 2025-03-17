import {
  ISPFxAdaptiveCard,
  BaseAdaptiveCardQuickView,
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'AceCafeCardSampleAdaptiveCardExtensionStrings';
import {
  IAceCafeCardSampleAdaptiveCardExtensionProps,
  IAceCafeCardSampleAdaptiveCardExtensionState,
} from '../AceCafeCardSampleAdaptiveCardExtension';
import { IListItem } from '../services/sp.service';

export interface IQuickViewData {
  subTitle: string;
  title: string;
  description: string;
  listItems: IListItem[];
  url: string;
}

export class QuickView extends BaseAdaptiveCardQuickView<
  IAceCafeCardSampleAdaptiveCardExtensionProps,
  IAceCafeCardSampleAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    return {
      subTitle: `The office cafeteria is a convenient and inviting space that caters to the breakfast and lunch needs of employees. With a diverse menu, it offers a range of delicious options to satisfy different tastes and dietary preferences. From hearty breakfast items like freshly baked pastries and energizing smoothies to a variety of flavorful lunch choices including salads, sandwiches, and hot entrees, the cafeteria ensures that employees have a satisfying and nourishing dining experience throughout the day.`, //strings.SubTitle,
      title: strings.Title,
      description: '', //this.properties.description,
      listItems: this.state.listItems,
      url: this.properties.url,
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }
}
