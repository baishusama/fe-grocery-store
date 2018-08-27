import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LazyHomeSub2Component } from './lazy-home-sub2/lazy-home-sub2.component';

const routes: Routes = [
  {
    path: 'sub2',
    component: LazyHomeSub2Component
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LazyHomeSub2Component]
})
export class LazyHomeSub2Module {}
