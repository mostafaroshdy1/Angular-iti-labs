import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css',
})
export class Task1Component {
  inputText = '';
  resetBtn() {
    this.inputText = '';
  }
}
