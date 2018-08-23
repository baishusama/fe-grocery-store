import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, Optional } from '@angular/core';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpHandler,
  HttpBackend
} from '@angular/common/http';
import { HttpInterceptingHandler } from '@angular/common/http/src/module';

/* 3rd Part */
import { NgZorroAntdModule } from 'ng-zorro-antd';

/* Custom */
// Modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
// Interceptors
import { I1 } from './pages/custom-middleware-chain/interceptors';
import { I2 } from './pages/custom-middleware-chain/interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I1,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I2,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
