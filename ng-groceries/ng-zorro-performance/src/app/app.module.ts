import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { NzSelectListComponent } from './nz-select-list/nz-select-list.component';
import { NzSelectGridListComponent } from './nz-select-grid-list/nz-select-grid-list.component';
import { SelectListComponent } from './select-list/select-list.component';
import { HomeComponent } from './home/home.component';

registerLocaleData(zh);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'select-list',
    component: SelectListComponent
  },
  {
    path: 'nz-select-list',
    component: NzSelectListComponent
  },
  {
    path: 'nz-select-grid-list',
    component: NzSelectGridListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NzSelectListComponent,
    NzSelectGridListComponent,
    SelectListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
