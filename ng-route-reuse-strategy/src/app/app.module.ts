import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { SimpleReuseStrategy } from './route/SimpleReuseStrategy';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: SimpleReuseStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
