import { Directive, ElementRef, SimpleChanges } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';

const inputs = [
  'fxShow',
  'fxShow.xs',
  'fxShow.sm',
  'fxShow.md',
  'fxShow.lg',
  'fxShow.xl',
  'fxShow.lt-sm',
  'fxShow.lt-md',
  'fxShow.lt-lg',
  'fxShow.lt-xl',
  'fxShow.gt-xs',
  'fxShow.gt-sm',
  'fxShow.gt-md',
  'fxShow.gt-lg',
];
const selector = `
  [fxShow], [fxShow.xs], [fxShow.sm], [fxShow.md],
  [fxShow.lg], [fxShow.xl], [fxShow.lt-sm], [fxShow.lt-md],
  [fxShow.lt-lg], [fxShow.lt-xl], [fxShow.gt-xs], [fxShow.gt-sm],
  [fxShow.gt-md], [fxShow.gt-lg]
`;

@Directive({ selector, inputs })
export class ShowDirective extends BaseDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.SHOW;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }

  override ngOnChanges(changes: SimpleChanges) {
    Object.keys(changes).forEach((key) => {
      if (this.inputs.indexOf(key) !== -1) {
        const bp = key.split('.').slice(1).join('.');
        const val = changes[key].currentValue;
        if (val === false || val === 'false') {
          this.breakpointHandlerService.addStyle(
            this.elementRef.nativeElement,
            this.DIRECTIVE_TYPE,
            bp,
            val
          );
        } else {
        }
      }
    });
  }
}
