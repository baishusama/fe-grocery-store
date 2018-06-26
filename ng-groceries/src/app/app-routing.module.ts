import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuardService } from './core/services/guards/auth-guard.service';
// import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page',
    pathMatch: 'full'
  },
  {
    path: 'page',
    // TODO: 每个懒加载的模块都可以加一个 canload guard
    // canLoad: [AuthGuardService],
    loadChildren: './pages/pages.module#PagesModule' // TODO: 这里只能用相对路径了么？？？
  }
  // {
  //     path: 'login',
  //     loadChildren:
  //         'app/authentication/authentication.module#AuthenticationModule'
  // },
  // {
  //     path: '404',
  //     canActivate: [AuthGuardService],
  //     component: NotFoundComponent
  // },
  // {
  //     path: '**',
  //     redirectTo: '404'
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //   enableTracing: true, // for testing
      //   useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
