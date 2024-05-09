import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { DirectiveType } from '../../enums/directive-type.enum';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';

const inputs = [
  'fxLayout',
  'fxLayout.xs',
  'fxLayout.sm',
  'fxLayout.md',
  'fxLayout.lg',
  'fxLayout.xl',
  'fxLayout.lt-sm',
  'fxLayout.lt-md',
  'fxLayout.lt-lg',
  'fxLayout.lt-xl',
  'fxLayout.gt-xs',
  'fxLayout.gt-sm',
  'fxLayout.gt-md',
  'fxLayout.gt-lg',
];
const selector = `
  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],
  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],
  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],
  [fxLayout.gt-md], [fxLayout.gt-lg]
`;

@Directive({ selector, inputs })
export class LayoutDirective extends BaseDirective {
  // protected override DIRECTIVE_TYPE = DirectiveType.LAYOUT;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
