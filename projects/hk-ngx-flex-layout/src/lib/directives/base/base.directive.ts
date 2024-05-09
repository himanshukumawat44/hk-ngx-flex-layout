import {
  Directive,
  ElementRef,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { DirectiveType } from '../../enums/directive-type.enum';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';

@Directive()
export class BaseDirective implements OnChanges, OnDestroy {
  protected DIRECTIVE_TYPE: DirectiveType = DirectiveType.LAYOUT;
  protected inputs: string[] = [];

  constructor(
    protected elementRef: ElementRef,
    protected breakpointHandlerService: BreakpointHandlerService
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    Object.keys(changes).forEach((key) => {
      if (this.inputs.indexOf(key) !== -1) {
        let bp = key.split('.').slice(1).join('.');
        const val = changes[key].currentValue;
        if (bp === '') {
          bp = 'all';
        }
        this.breakpointHandlerService.addStyle(
          this.elementRef.nativeElement,
          this.DIRECTIVE_TYPE,
          bp,
          val
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
