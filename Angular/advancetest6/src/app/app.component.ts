import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advancetest6';
  showMessage = false;
  message = 'This is an alert message.';

  showAlert() {
    this.showMessage = true;
  }
}
