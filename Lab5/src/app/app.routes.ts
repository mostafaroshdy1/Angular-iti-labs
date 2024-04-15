import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

export const routes: Routes = [
  {path: '', redirectTo: 'student', pathMatch: 'full'},
  {path: 'student', component: StudentComponent},
  {path:'student/:id', component: StudentDetailsComponent},
  {path: 'students/add', component: AddStudentComponent},
  {path:'student/:id/update', component: UpdateStudentComponent},
  {path: '**', component: StudentComponent}
];
