import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'incrdecr';
  counter = 0;

  updateCounter(value: number) {
    this.counter = value;
  }

}
