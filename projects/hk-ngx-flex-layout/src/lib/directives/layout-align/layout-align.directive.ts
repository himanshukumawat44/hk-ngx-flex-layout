import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';

const inputs = [
  'fxLayoutAlign',
  'fxLayoutAlign.xs',
  'fxLayoutAlign.sm',
  'fxLayoutAlign.md',
  'fxLayoutAlign.lg',
  'fxLayoutAlign.xl',
  'fxLayoutAlign.lt-sm',
  'fxLayoutAlign.lt-md',
  'fxLayoutAlign.lt-lg',
  'fxLayoutAlign.lt-xl',
  'fxLayoutAlign.gt-xs',
  'fxLayoutAlign.gt-sm',
  'fxLayoutAlign.gt-md',
  'fxLayoutAlign.gt-lg',
];
const selector = `
  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],
  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],
  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],
  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]
`;

@Directive({ selector, inputs })
export class LayoutAlignDirective extends BaseDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.ALIGN_CHILDREN;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
