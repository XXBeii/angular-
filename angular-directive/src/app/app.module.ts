import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleDirectiveDirective } from './simple-directive.directive';
import { CheckedBoxDirective } from './checked-box.directive';
import { ServiceDirective } from './service.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDirectiveDirective,
    CheckedBoxDirective,
    ServiceDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
