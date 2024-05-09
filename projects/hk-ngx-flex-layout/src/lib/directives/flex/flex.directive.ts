import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';

const inputs = [
  'fxFlex',
  'fxFlex.xs',
  'fxFlex.sm',
  'fxFlex.md',
  'fxFlex.lg',
  'fxFlex.xl',
  'fxFlex.lt-sm',
  'fxFlex.lt-md',
  'fxFlex.lt-lg',
  'fxFlex.lt-xl',
  'fxFlex.gt-xs',
  'fxFlex.gt-sm',
  'fxFlex.gt-md',
  'fxFlex.gt-lg',
];
const selector = `
  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],
  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],
  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],
  [fxFlex.gt-md], [fxFlex.gt-lg]
`;

@Directive({ selector, inputs })
export class FlexDirective extends BaseDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.FLEX;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
