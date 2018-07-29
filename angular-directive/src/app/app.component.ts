import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h2>Hello, Angular</h2>
  <h2 simpleDirective [greet]="'hhhh'">Hello, Angular</h2>
  <checked-iput></checked-iput>
  `
})
export class AppComponent {
  title = 'app';
}
