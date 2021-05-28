import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout/layout-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
