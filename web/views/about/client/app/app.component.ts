import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello world from {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }
