import { Injectable } from '@angular/core';
import { ElementHandlerService } from '../element-handler/element-handler.service';
import { StyleHandlerService } from '../style-handler/style-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  BreakpointChangeEventMediaMap,
  BreakpointChangeModel,
  DEFAULT_BREAKPOINTS,
} from '../../models/breakpoint.model';

@Injectable({
  providedIn: 'root',
})
export class BreakpointHandlerService {
  private breakpointChangeObserver: BehaviorSubject<any> = new BehaviorSubject(
    null
  );
  private registeredBreakpointStatus: Map<string, boolean> = new Map();
  private subsciption: Subscription | null = null;
  private initialBreakpoint: string | null = null;
  private eventTracker: Map<string, BreakpointChangeEventMediaMap> = new Map();

  constructor(
    private elementHandler: ElementHandlerService,
    private styleHandler: StyleHandlerService
  ) {}

  addStyle(
    element: HTMLElement,
    directiveType: DirectiveType,
    breakpoint: string,
    styleValue: string
  ) {
    //get style definition
    let generatedStyle = this.styleHandler.buildStyle(
      directiveType,
      styleValue
    );

    //register element
    this.elementHandler.registerElement(element, breakpoint, generatedStyle);

    //init subscription
    this.initBreakpointChangeSubscription();

    //register layout change event
    this.registerBreakpointChangeHandler(breakpoint);
  }

  addClasses(element: HTMLElement, breakpoint: string, classes: string[]) {
    this.elementHandler.registerElementWithClasses(
      element,
      breakpoint,
      classes
    );

    //init subscription
    this.initBreakpointChangeSubscription();

    //register layout change event
    this.registerBreakpointChangeHandler(breakpoint);
  }

  registerBreakpointChangeHandler(breakpoint: string) {
    if (!this.registeredBreakpointStatus.has(breakpoint)) {
      const bp = DEFAULT_BREAKPOINTS.find((bp) => bp.alias == breakpoint);
      if (bp) {
        const mql = window.matchMedia(bp.mediaQuery);
        const eventHandler = (e: any) => {
          this.breakpointChangeObserver.next({
            breakpoint: breakpoint,
            didMatch: e.matches,
          });
        };
        mql.addEventListener('change', eventHandler);
        this.eventTracker.set(breakpoint, {
          mediaQueryList: mql,
          eventHandler: eventHandler,
        });

        if (mql.matches) {
          this.initialBreakpoint = bp.alias;
        }
      }
      this.registeredBreakpointStatus.set(breakpoint, false);
    }
    if (this.initialBreakpoint && breakpoint === this.initialBreakpoint) {
      this.breakpointChangeObserver.next({
        breakpoint: this.initialBreakpoint,
        didMatch: true,
      });
    }
  }

  initBreakpointChangeSubscription() {
    if (!this.subsciption) {
      this.subsciption = this.breakpointChangeObserver.subscribe(
        (bpChange: BreakpointChangeModel) => {
          console.log(bpChange);
          if (bpChange) {
            this.updateRegisteredBreakbpointsStatus(bpChange);
            const elMap = this.elementHandler.getRegisteredElementsMap();
            const elMapWithClasses =
              this.elementHandler.getRegisteredElementsWithClassesMap();
            const activeBP = this.getActiveBreakpoint();
            elMap.forEach((bpStyleMap, el) => {
              bpStyleMap.forEach((styleDef, bp) => {
                if (bp !== activeBP) {
                  styleDef.forEach((style) => {
                    el.style.removeProperty(style.name);
                  });
                }
              });
              if (activeBP && bpStyleMap.has(activeBP)) {
                bpStyleMap.get(activeBP)?.forEach((style) => {
                  el.style.setProperty(style.name, style.value);
                });
              } else if (bpStyleMap.has('all')) {
                bpStyleMap.get('all')?.forEach((style) => {
                  el.style.setProperty(style.name, style.value);
                });
              }
            });

            elMapWithClasses.forEach((bpClassMap, el) => {
              bpClassMap.forEach((classes, bp) => {
                if (bp !== activeBP) {
                  classes.forEach((className) => {
                    el.classList.remove(className);
                  });
                }
              });
              if (activeBP && bpClassMap.has(activeBP)) {
                bpClassMap.get(activeBP)?.forEach((className) => {
                  el.classList.add(className);
                });
              } else if (bpClassMap.has('all')) {
                bpClassMap.get('all')?.forEach((className) => {
                  el.classList.add(className);
                });
              }
            });
          }
        }
      );
    }
  }

  updateRegisteredBreakbpointsStatus(bpChange: BreakpointChangeModel) {
    if (bpChange.didMatch) {
      this.registeredBreakpointStatus.forEach((match, bp) => {
        if (match) {
          this.registeredBreakpointStatus.set(bp, false);
        }
      });
      this.registeredBreakpointStatus.set(
        bpChange.breakpoint,
        bpChange.didMatch
      );
    } else {
      this.registeredBreakpointStatus.forEach((match, bp) => {
        if (match && bp === bpChange.breakpoint) {
          this.registeredBreakpointStatus.set(
            bpChange.breakpoint,
            bpChange.didMatch
          );
        }
      });
    }
  }

  getActiveBreakpoint(): string | null {
    let activeBP = null;
    this.registeredBreakpointStatus.forEach((active, bp) => {
      if (active) {
        activeBP = bp;
      }
    });
    return activeBP;
  }

  removeElementFromMap(element: HTMLElement) {
    this.elementHandler.removeElementFromMap(element);

    this.updateBreakpointStatusAndEventTracker();
  }

  updateBreakpointStatusAndEventTracker() {
    const currentBPMap = new Map();
    this.elementHandler.getRegisteredElementsMap().forEach((bpMap, element) => {
      bpMap.forEach((styleDef, bp) => {
        currentBPMap.set(bp, true);
      });
    });
    this.elementHandler
      .getRegisteredElementsWithClassesMap()
      .forEach((bpMap, element) => {
        bpMap.forEach((classes, bp) => {
          currentBPMap.set(bp, true);
        });
      });

    this.registeredBreakpointStatus.forEach((bpStatus, bp) => {
      if (!currentBPMap.has(bp)) {
        this.registeredBreakpointStatus.delete(bp);
        const eventsMap = this.eventTracker.get(bp);
        eventsMap?.mediaQueryList.removeEventListener(
          'change',
          eventsMap.eventHandler
        );
        this.eventTracker.delete(bp);
      }
    });
  }
}
