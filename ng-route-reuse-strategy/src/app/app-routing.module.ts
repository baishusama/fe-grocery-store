import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lazy-home',
        loadChildren: './lazy/lazy-home.module#LazyHomeModule'
      },
      {
        path: 'lazy-about',
        loadChildren: './lazy/lazy-about.module#LazyAboutModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
