import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent {
  @Input()
  counterValue!: number;
  @Output() counterChange = new EventEmitter<number>();

  increment() {
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    if (this.counterValue > 0) {
      this.counterValue--;
      this.counterChange.emit(this.counterValue);
    }
  }

}
