import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';

const inputs = [
  'fxGap',
  'fxGap.xs',
  'fxGap.sm',
  'fxGap.md',
  'fxGap.lg',
  'fxGap.xl',
  'fxGap.lt-sm',
  'fxGap.lt-md',
  'fxGap.lt-lg',
  'fxGap.lt-xl',
  'fxGap.gt-xs',
  'fxGap.gt-sm',
  'fxGap.gt-md',
  'fxGap.gt-lg',
];
const selector = `
  [fxGap], [fxGap.xs], [fxGap.sm], [fxGap.md],
  [fxGap.lg], [fxGap.xl], [fxGap.lt-sm], [fxGap.lt-md],
  [fxGap.lt-lg], [fxGap.lt-xl], [fxGap.gt-xs], [fxGap.gt-sm],
  [fxGap.gt-md], [fxGap.gt-lg]
`;

@Directive({ selector, inputs })
export class GapDirective extends BaseDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.GAP;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
