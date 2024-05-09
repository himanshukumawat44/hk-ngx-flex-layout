import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';

const inputs = [
  'fxHide',
  'fxHide.xs',
  'fxHide.sm',
  'fxHide.md',
  'fxHide.lg',
  'fxHide.xl',
  'fxHide.lt-sm',
  'fxHide.lt-md',
  'fxHide.lt-lg',
  'fxHide.lt-xl',
  'fxHide.gt-xs',
  'fxHide.gt-sm',
  'fxHide.gt-md',
  'fxHide.gt-lg',
];
const selector = `
  [fxHide], [fxHide.xs], [fxHide.sm], [fxHide.md],
  [fxHide.lg], [fxHide.xl], [fxHide.lt-sm], [fxHide.lt-md],
  [fxHide.lt-lg], [fxHide.lt-xl], [fxHide.gt-xs], [fxHide.gt-sm],
  [fxHide.gt-md], [fxHide.gt-lg]
`;

@Directive({ selector, inputs })
export class HideDirective extends BaseDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.HIDE;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
