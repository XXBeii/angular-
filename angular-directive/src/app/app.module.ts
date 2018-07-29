import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleDirectiveDirective } from './simple-directive.directive';
import { CheckedBoxDirective } from './checked-box.directive';
import { ServiceDirective } from './service.directive';
import { CheckedIputComponent } from './checked-iput/checked-iput.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleDirectiveDirective,
    CheckedBoxDirective,
    ServiceDirective,
    CheckedIputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
