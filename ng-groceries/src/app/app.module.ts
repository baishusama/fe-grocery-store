import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* 3rd Part */
import { NgZorroAntdModule } from 'ng-zorro-antd';

/* Custom */
// Modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
