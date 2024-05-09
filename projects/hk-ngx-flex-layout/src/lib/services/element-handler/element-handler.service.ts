import { Injectable } from '@angular/core';
import { StyleDefinition } from '../../models/style-definition.model';
import {
  BPClassesMap,
  BPStyleDefinisionMap,
  ElementClassMap,
  ElementMap,
} from '../../models/element-map.model';

@Injectable({
  providedIn: 'root',
})
export class ElementHandlerService {
  private registeredElementsMap: ElementMap = new Map();
  private registeredElementsWithClassesMap: ElementClassMap = new Map();

  constructor() {}

  registerElement(
    element: HTMLElement,
    breakpoint: string,
    styles: StyleDefinition[]
  ): BPStyleDefinisionMap {
    if (!this.registeredElementsMap.has(element)) {
      this.registeredElementsMap.set(
        element,
        new Map().set(breakpoint, styles)
      );
    } else {
      this.addBreadpointsToRegisteredElement(
        this.registeredElementsMap.get(element) as BPStyleDefinisionMap,
        breakpoint,
        styles
      );
    }
    return this.registeredElementsMap.get(element) as BPStyleDefinisionMap;
  }

  registerElementWithClasses(
    element: HTMLElement,
    breakpoint: string,
    classes: string[]
  ): BPClassesMap {
    if (!this.registeredElementsWithClassesMap.has(element)) {
      this.registeredElementsWithClassesMap.set(
        element,
        new Map().set(breakpoint, classes)
      );
    } else {
      (this.registeredElementsWithClassesMap.get(element) as BPClassesMap).set(
        breakpoint,
        classes
      );
    }
    return this.registeredElementsWithClassesMap.get(element) as BPClassesMap;
  }

  addBreadpointsToRegisteredElement(
    bpStyleDefMap: BPStyleDefinisionMap,
    breakpoint: string,
    styles: StyleDefinition[]
  ) {
    if (bpStyleDefMap.has(breakpoint)) {
      const existingStyle = bpStyleDefMap.get(breakpoint) as StyleDefinition[];
      bpStyleDefMap.set(breakpoint, this.mergeStyleDefs(existingStyle, styles));
    } else {
      bpStyleDefMap.set(breakpoint, styles);
    }
  }

  mergeStyleDefs(
    oldStyles: StyleDefinition[],
    newStyles: StyleDefinition[]
  ): StyleDefinition[] {
    return oldStyles.concat(newStyles);
  }

  getRegisteredElementsMap = () => this.registeredElementsMap;
  getRegisteredElementsWithClassesMap = () =>
    this.registeredElementsWithClassesMap;

  removeElementFromMap = (element: HTMLElement) => {
    this.registeredElementsMap.delete(element);
    this.registeredElementsWithClassesMap.delete(element);
  };
}
