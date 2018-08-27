import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PaginationDjComponent } from './pagination-dj/pagination-dj.component';
import { CustomMiddlewareChainComponent } from './custom-middleware-chain/custom-middleware-chain.component';

const routes: Routes = [
  {
    path: '',
    // canActivate
    // canActivateChild
    children: [
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'pagination-dj',
        component: PaginationDjComponent
      },
      {
        path: 'custom-middleware-chain',
        component: CustomMiddlewareChainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
