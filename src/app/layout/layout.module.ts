import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SharedComponentsModule } from '../shared/components/shared-components.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    LayoutRoutingModule
  ]
})
export class LayoutsModule { }
