import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-all-students',
  standalone: true,
  imports: [],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.css',
})
export class AllStudentsComponent {
  students: { name: string; age: string; email: string }[] = [];
  constructor() {
    const studentData = localStorage.getItem('students');
    if (studentData) {
      this.students = JSON.parse(studentData);
    }
  }
}
