import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AllStudentsComponent } from './all-students/all-students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentRegistrationComponent, AllStudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lab3';
  students: { name: string; age: string }[] = [];
  getStudent(newStd: { name: string; age: string }) {
    this.students.push(newStd);
    console.log(this.students);
  }
}
