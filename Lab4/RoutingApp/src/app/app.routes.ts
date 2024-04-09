import { Routes } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: StudentRegistrationComponent,
  },
  {
    path: 'students',
    component: AllStudentsComponent,
  },
  {
    path: 'students/:id',
    component: StudentPageComponent,
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
];
