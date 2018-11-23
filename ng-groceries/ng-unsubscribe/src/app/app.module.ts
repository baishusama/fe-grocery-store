import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpPageComponent } from './http-page/http-page.component';
import { TakeUntilPageComponent } from './take-until-page/take-until-page.component';
import { SlowHttpPageComponent } from './slow-http-page/slow-http-page.component';
import { DifferentWaysPageComponent } from './different-ways-page/different-ways-page.component';
import { AsyncPipePageComponent } from './async-pipe-page/async-pipe-page.component';
import { TimerPageComponent } from './timer-page/timer-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'different-ways-page',
    pathMatch: 'full'
  },
  {
    path: 'different-ways-page',
    component: DifferentWaysPageComponent
  },
  {
    path: 'http-page',
    component: HttpPageComponent
  },
  {
    path: 'slow-http-page',
    component: SlowHttpPageComponent
  },
  {
    path: 'timer-page',
    component: TimerPageComponent
  },
  {
    path: 'take-until-page',
    component: TakeUntilPageComponent
  },
  {
    path: 'async-pipe-page',
    component: AsyncPipePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HttpPageComponent,
    TakeUntilPageComponent,
    SlowHttpPageComponent,
    DifferentWaysPageComponent,
    AsyncPipePageComponent,
    TimerPageComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
