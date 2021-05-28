import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../pages/pages.module').then((m) => m.PagesModule)
      },
      { path: '**', redirectTo: '/home'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
