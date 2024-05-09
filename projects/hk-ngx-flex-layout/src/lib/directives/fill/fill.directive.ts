import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';

const inputs = [
  'fxFill',
  'fxFill.xs',
  'fxFill.sm',
  'fxFill.md',
  'fxFill.lg',
  'fxFill.xl',
  'fxFill.lt-sm',
  'fxFill.lt-md',
  'fxFill.lt-lg',
  'fxFill.lt-xl',
  'fxFill.gt-xs',
  'fxFill.gt-sm',
  'fxFill.gt-md',
  'fxFill.gt-lg',
];
const selector = `
  [fxFill], [fxFill.xs], [fxFill.sm], [fxFill.md],
  [fxFill.lg], [fxFill.xl], [fxFill.lt-sm], [fxFill.lt-md],
  [fxFill.lt-lg], [fxFill.lt-xl], [fxFill.gt-xs], [fxFill.gt-sm],
  [fxFill.gt-md], [fxFill.gt-lg]
`;

@Directive({ selector, inputs })
export class FillDirective extends BaseDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.FILL;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
