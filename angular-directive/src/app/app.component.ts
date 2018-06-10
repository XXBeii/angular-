import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h2>Hello, Angular</h2>
  <h2 simpleDirective>Hello, Angular</h2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
