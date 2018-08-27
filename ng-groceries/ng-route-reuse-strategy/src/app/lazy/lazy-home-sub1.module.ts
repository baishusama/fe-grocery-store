import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LazyHomeSub1Component } from './lazy-home-sub1/lazy-home-sub1.component';

const routes: Routes = [
  {
    path: 'sub1',
    component: LazyHomeSub1Component
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LazyHomeSub1Component]
})
export class LazyHomeSub1Module {}
