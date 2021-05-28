import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ProductComponent } from '../pages/product/product.component';

export const Pagesroutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      { path: 'product/:id', component: ProductComponent }
    ]
  }
];
// { path: '**', redirectTo: '/home' },