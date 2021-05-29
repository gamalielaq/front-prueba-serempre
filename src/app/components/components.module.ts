import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { OverviewComponent } from './overview/overview.component';
import { FeaturesComponent } from './features/features.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    SlideShowComponent,
    OverviewComponent,
    FeaturesComponent,
    BoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SlideShowComponent,
    OverviewComponent,
    FeaturesComponent,
    BoxComponent
  ]
})
export class ComponentsModule { }
