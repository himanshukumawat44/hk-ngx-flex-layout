import { Injectable } from '@angular/core';
import { DirectiveType } from '../../enums/directive-type.enum';
import { StyleDefinition } from '../../models/style-definition.model';

const DIRECTIVE_BASED_DEFAULT_STYLES: any = {
  layout: {
    getStyles: (styleValue: string) => {
      const layoutStyleArr = styleValue.trim().split(' ');
      let direction = styleValue;
      let wrap = '';
      const builtStyles = [];
      if (layoutStyleArr.length === 2) {
        direction = layoutStyleArr[0];
        wrap = layoutStyleArr[1];
      }
      builtStyles.push(
        {
          name: 'flex-direction',
          value: direction,
        },
        {
          name: 'display',
          value: 'flex',
        },
        {
          name: 'box-sizing',
          value: 'border-box',
        }
      );
      if (wrap !== '') {
        builtStyles.push({
          name: 'flex-wrap',
          value: wrap,
        });
      }
      return builtStyles;
    },
  },
  align_self: {
    getStyles: (styleValue: string) => {
      return [
        {
          name: 'align-self',
          value: styleValue,
        },
      ];
    },
  },
  flex: {
    getStyles: (styleValue: string) => {
      return [
        {
          name: 'flex',
          value: styleValue,
        },
      ];
    },
  },
  fill: {
    getStyles: (styleValue: string) => {
      return [
        {
          name: 'height',
          value: '100%',
        },
        {
          name: 'width',
          value: '100%',
        },
        {
          name: 'min-height',
          value: '100%',
        },
        {
          name: 'min-width',
          value: '100%',
        },
      ];
    },
  },
  gap: {
    getStyles: (styleValue: string) => {
      return [
        {
          name: 'gap',
          value: styleValue,
        },
      ];
    },
  },
  align_children: {
    getStyles: (styleValue: string) => {
      let mainAxisStyle = '';
      let crossAxisStyle = '';
      const builtStyles = [];
      const alignStyleArr = styleValue.trim().split(' ');
      if (styleValue.trim().split(' ').length === 2) {
        mainAxisStyle = alignStyleArr[0];
        crossAxisStyle = alignStyleArr[1];
      } else {
        mainAxisStyle = alignStyleArr[0];
        crossAxisStyle = alignStyleArr[0];
      }
      builtStyles.push({
        name: 'justify-content',
        value: mainAxisStyle,
      });
      builtStyles.push({
        name: 'align-items',
        value: crossAxisStyle,
      });
      return builtStyles;
    },
  },
  offset: {
    getStyles: (styleValue: string) => {
      return [
        {
          name: 'margin-left',
          value: styleValue ?? '0%',
        },
      ];
    },
  },
  order: {
    getStyles: (styleValue: string) => {
      return [
        {
          name: 'order',
          value: styleValue,
        },
      ];
    },
  },
  show: {
    getStyles: (styleValue: string | boolean) => {
      return [
        {
          name: 'display',
          value: 'none',
        },
      ];
    },
  },
  hide: {
    getStyles: (styleValue: string | boolean) => {
      return [
        {
          name: 'display',
          value: 'none',
        },
      ];
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class StyleHandlerService {
  constructor() {}

  buildStyle(
    directiveType: DirectiveType,
    styleValue: string | boolean
  ): StyleDefinition[] {
    let directivetStyles = DIRECTIVE_BASED_DEFAULT_STYLES[directiveType];
    let builtStyles: StyleDefinition[] = directivetStyles.getStyles(styleValue);

    return builtStyles;
  }
}
