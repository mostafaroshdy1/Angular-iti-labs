import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css',
})
export class StudentRegistrationComponent {
  name: string = '';
  age: string = '';

  @Output() sendStudentData = new EventEmitter();
  addStudent() {
    if (isNaN(Number(this.age)) || Number(this.age) > 25) {
      return;
    }

    this.sendStudentData.emit({ name: this.name, age: this.age });
  }
}
