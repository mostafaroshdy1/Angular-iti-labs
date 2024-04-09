import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css',
})
export class StudentRegistrationComponent {
  regForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [
      Validators.min(20),
      Validators.max(40),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  students: { name: string; age: string; email: string }[] = [];
  send() {
    if (this.regForm.valid) {
      const storedStudents = localStorage.getItem('students');
      if (storedStudents !== null) {
        this.students = JSON.parse(storedStudents);
      }
      this.students.push({
        name: this.regForm.value.name || '',
        age: this.regForm.value.age || '',
        email: this.regForm.value.email || '',
      });
      localStorage.setItem('students', JSON.stringify(this.students));
    }
  }
}
