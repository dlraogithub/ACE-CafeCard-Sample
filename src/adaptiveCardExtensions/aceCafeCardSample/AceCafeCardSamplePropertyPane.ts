import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-property-pane';
import * as strings from 'AceCafeCardSampleAdaptiveCardExtensionStrings';

export class AceCafeCardSamplePropertyPane {
  public getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: { description: strings.PropertyPaneDescription },
          groups: [
            {
              // groupFields: [
              //   PropertyPaneTextField('title', {
              //     label: strings.TitleFieldLabel
              //   })
              // ]
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title', {
                  label: strings.TitleFieldLabel,
                }),
                PropertyPaneTextField('iconProperty', {
                  label: strings.IconPropertyFieldLabel,
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                  multiline: true,
                }),
                PropertyPaneTextField('listId', {
                  label: 'List ID (GUID)',
                }),
                PropertyPaneTextField('url', {
                  label: 'Menu URL',
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
