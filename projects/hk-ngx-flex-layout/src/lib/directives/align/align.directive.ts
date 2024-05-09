import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';

const inputs = [
  'fxAlign',
  'fxAlign.xs',
  'fxAlign.sm',
  'fxAlign.md',
  'fxAlign.lg',
  'fxAlign.xl',
  'fxAlign.lt-sm',
  'fxAlign.lt-md',
  'fxAlign.lt-lg',
  'fxAlign.lt-xl',
  'fxAlign.gt-xs',
  'fxAlign.gt-sm',
  'fxAlign.gt-md',
  'fxAlign.gt-lg',
];
const selector = `
  [fxAlign], [fxAlign.xs], [fxAlign.sm], [fxAlign.md],
  [fxAlign.lg], [fxAlign.xl], [fxAlign.lt-sm], [fxAlign.lt-md],
  [fxAlign.lt-lg], [fxAlign.lt-xl], [fxAlign.gt-xs], [fxAlign.gt-sm],
  [fxAlign.gt-md], [fxAlign.gt-lg]
`;

@Directive({ selector, inputs })
export class AlignDirective extends BaseDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.ALIGN_SELF;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
