import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LazyAboutComponent } from './lazy-about/lazy-about.component';

const routes: Routes = [
  {
    path: '',
    component: LazyAboutComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [LazyAboutComponent]
})
export class LazyAboutModule {}
