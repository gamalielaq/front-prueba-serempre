import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Pagesroutes } from './pages-routing.module';


@NgModule({
  declarations: [
    ProductComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(Pagesroutes,),
  ],
  exports: [
  ]
})
export class PagesModule { }
