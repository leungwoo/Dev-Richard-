import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dev-richard';
  name = '';

  constructor() {
    setTimeout(() => {
      this.name = 'Hi and Welcome!';
    }, 2000);

    setTimeout(() => {
      this.name = 'I am Richard';
    }, 5000);

    setTimeout(() => {
      this.name = 'Enjoy the page';
    }, 7000);
    setTimeout(() => {
      this.name = '< Richard Leung Woo-Gabriel />';
    }, 10000);
  }
}
