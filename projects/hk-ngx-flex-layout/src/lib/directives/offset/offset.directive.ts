import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';

const inputs = [
  'fxOffset',
  'fxOffset.xs',
  'fxOffset.sm',
  'fxOffset.md',
  'fxOffset.lg',
  'fxOffset.xl',
  'fxOffset.lt-sm',
  'fxOffset.lt-md',
  'fxOffset.lt-lg',
  'fxOffset.lt-xl',
  'fxOffset.gt-xs',
  'fxOffset.gt-sm',
  'fxOffset.gt-md',
  'fxOffset.gt-lg',
];
const selector = `
  [fxOffset], [fxOffset.xs], [fxOffset.sm], [fxOffset.md],
  [fxOffset.lg], [fxOffset.xl], [fxOffset.lt-sm], [fxOffset.lt-md],
  [fxOffset.lt-lg], [fxOffset.lt-xl], [fxOffset.gt-xs], [fxOffset.gt-sm],
  [fxOffset.gt-md], [fxOffset.gt-lg]
`;

@Directive({ selector, inputs })
export class OffsetDirective extends BaseDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.ALIGN_CHILDREN;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
