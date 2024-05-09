import {
  Directive,
  ElementRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { DirectiveType } from '../../enums/directive-type.enum';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { ClassInputType } from '../../enums/class-input-type.enum';

@Directive()
export class BaseClassDirective implements OnChanges, OnDestroy {
  protected DIRECTIVE_TYPE: DirectiveType = DirectiveType.LAYOUT;
  protected inputs: string[] = [];

  constructor(
    protected elementRef: ElementRef,
    protected breakpointHandlerService: BreakpointHandlerService
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    Object.keys(changes).forEach((key) => {
      if (this.inputs.indexOf(key) !== -1) {
        let bp = key.split('.').slice(1).join('.');
        if (bp === '') {
          bp = 'all';
        }
        const val = changes[key].currentValue;
        let inputClasses = [];
        const valType: ClassInputType = val.constructor.name.toLowerCase();
        if (valType === ClassInputType.OBJECT) {
          Object.keys(val).forEach((key) => {
            if (val[key]) {
              inputClasses.push(key);
            }
          });
        } else if (valType === ClassInputType.STRING) {
          inputClasses = val.split(' ');
        } else if (valType === ClassInputType.ARRAY) {
          inputClasses = val;
        }
        console.log(inputClasses, valType, typeof valType);
        this.breakpointHandlerService.addClasses(
          this.elementRef.nativeElement,
          bp,
          inputClasses
        );
      }
    });
  }
  ngOnDestroy(): void {
    this.breakpointHandlerService.removeElementFromMap(
      this.elementRef.nativeElement
    );
  }
}
