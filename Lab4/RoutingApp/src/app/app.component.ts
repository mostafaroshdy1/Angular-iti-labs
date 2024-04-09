import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { StudentPageComponent } from './student-page/student-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    StudentRegistrationComponent,
    AllStudentsComponent,
    StudentPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'RoutingApp';
}
