import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';

const inputs = [
  'fxOrder',
  'fxOrder.xs',
  'fxOrder.sm',
  'fxOrder.md',
  'fxOrder.lg',
  'fxOrder.xl',
  'fxOrder.lt-sm',
  'fxOrder.lt-md',
  'fxOrder.lt-lg',
  'fxOrder.lt-xl',
  'fxOrder.gt-xs',
  'fxOrder.gt-sm',
  'fxOrder.gt-md',
  'fxOrder.gt-lg',
];
const selector = `
  [fxOrder], [fxOrder.xs], [fxOrder.sm], [fxOrder.md],
  [fxOrder.lg], [fxOrder.xl], [fxOrder.lt-sm], [fxOrder.lt-md],
  [fxOrder.lt-lg], [fxOrder.lt-xl], [fxOrder.gt-xs], [fxOrder.gt-sm],
  [fxOrder.gt-md], [fxOrder.gt-lg]
`;

@Directive({ selector, inputs })
export class OrderDirective extends BaseDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.ORDER;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
