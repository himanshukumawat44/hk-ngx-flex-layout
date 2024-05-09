import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDirective } from './directives/layout/layout.directive';
import { FlexDirective } from './directives/flex/flex.directive';
import { AlignDirective } from './directives/align/align.directive';
import { FillDirective } from './directives/fill/fill.directive';
import { GapDirective } from './directives/gap/gap.directive';
import { LayoutAlignDirective } from './directives/layout-align/layout-align.directive';
import { OffsetDirective } from './directives/offset/offset.directive';
import { OrderDirective } from './directives/order/order.directive';
import { ClassDirective } from './directives/class/class.directive';

@NgModule({
  declarations: [
    LayoutDirective,
    FlexDirective,
    AlignDirective,
    FillDirective,
    GapDirective,
    LayoutAlignDirective,
    OffsetDirective,
    OrderDirective,
    ClassDirective,
  ],
  imports: [CommonModule],
  exports: [
    LayoutDirective,
    FlexDirective,
    AlignDirective,
    FillDirective,
    GapDirective,
    LayoutAlignDirective,
    OffsetDirective,
    OrderDirective,
    ClassDirective,
  ],
})
export class NgxResponsiveLayoutModule {}
