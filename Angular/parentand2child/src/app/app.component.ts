import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentand2child';
  tasks: string[] = [];
 

  createTask(task: string) {
    this.tasks.push(task);
  }
}
