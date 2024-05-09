import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxResponsiveLayoutModule } from 'hk-ngx-flex-layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NgxResponsiveLayoutModule],
})
export class HomeModule {}
