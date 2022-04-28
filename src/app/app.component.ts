import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dev-richard';
  name = '';
  welcome = '';

  constructor() {
    setTimeout(() => {
      this.name = 'Hi';
    }, 2000);

    setTimeout(() => {
      this.name = 'Welcome, I am Richard';
    }, 5000);

    setTimeout(() => {
      this.name = 'Enjoy my page';
    }, 7000);
    setTimeout(() => {
      this.name = '< DEV-RICHARD />';
    }, 10000);
  }
}
