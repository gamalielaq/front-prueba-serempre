import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    SharedComponentsModule
  ]
})
export class SharedComponentsModule { }
