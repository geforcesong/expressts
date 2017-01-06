import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { H1Component } from './components/h1/h1.component';
import { H2Component } from './components/h2/h2.component';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    H1Component,
    H2Component
  ],
  bootstrap: [H1Component]
})
export class AppModule { }
