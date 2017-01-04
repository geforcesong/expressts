import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { H1Component } from './components/h1/h1.component';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    H1Component
  ],
  bootstrap: [H1Component]
})
export class AppModule { }
