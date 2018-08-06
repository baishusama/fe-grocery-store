import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouteReuseStrategy } from '@angular/router';

// import {} from ''
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
