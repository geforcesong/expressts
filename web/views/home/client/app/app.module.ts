import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeTitleComponent } from './components/hometitle/hometitle.component';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    HomeTitleComponent
  ],
  bootstrap: [HomeTitleComponent]
})
export class AppModule { }
