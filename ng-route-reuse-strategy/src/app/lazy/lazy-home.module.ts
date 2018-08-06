import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LazyHomeComponent } from './lazy-home/lazy-home.component';

const routes: Routes = [
  {
    path: '',
    component: LazyHomeComponent,
    children: [
      {
        path: 'home-sub1',
        loadChildren: './lazy-home-sub1.module#LazyHomeSub1Module'
      },
      {
        path: 'home-sub2',
        loadChildren: './lazy-home-sub2.module#LazyHomeSub2Module'
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LazyHomeComponent]
})
export class LazyHomeModule {}
