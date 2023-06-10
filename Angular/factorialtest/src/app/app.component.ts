import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'factorialtest';
  number!: number;
  factorial!: number;

  calculate() {
    this.factorial = this.calculateFactorial(this.number);
  }

  private calculateFactorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.calculateFactorial(n - 1);
    }
  }
}
