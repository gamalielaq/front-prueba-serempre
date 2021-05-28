import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [ProductsListComponent, SlideShowComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SlideShowComponent
  ]
})
export class ComponentsModule { }
