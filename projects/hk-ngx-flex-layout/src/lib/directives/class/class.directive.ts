import { Directive, ElementRef } from '@angular/core';
import { BaseDirective } from '../base/base.directive';
import { BreakpointHandlerService } from '../../services/breakpoint-handler/breakpoint-handler.service';
import { DirectiveType } from '../../enums/directive-type.enum';
import { BaseClassDirective } from '../base/base-class.directive';

const inputs = [
  'fxClass',
  'fxClass.xs',
  'fxClass.sm',
  'fxClass.md',
  'fxClass.lg',
  'fxClass.xl',
  'fxClass.lt-sm',
  'fxClass.lt-md',
  'fxClass.lt-lg',
  'fxClass.lt-xl',
  'fxClass.gt-xs',
  'fxClass.gt-sm',
  'fxClass.gt-md',
  'fxClass.gt-lg',
];
const selector = `
  [fxClass], [fxClass.xs], [fxClass.sm], [fxClass.md],
  [fxClass.lg], [fxClass.xl], [fxClass.lt-sm], [fxClass.lt-md],
  [fxClass.lt-lg], [fxClass.lt-xl], [fxClass.gt-xs], [fxClass.gt-sm],
  [fxClass.gt-md], [fxClass.gt-lg]
`;

@Directive({ selector, inputs })
export class ClassDirective extends BaseClassDirective {
  protected override DIRECTIVE_TYPE = DirectiveType.CLASS;
  protected override inputs = inputs;

  constructor(
    elRef: ElementRef,
    breakpointHandlerService: BreakpointHandlerService
  ) {
    super(elRef, breakpointHandlerService);
  }
}
