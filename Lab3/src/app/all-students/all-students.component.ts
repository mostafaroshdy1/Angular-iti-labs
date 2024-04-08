import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-all-students',
  standalone: true,
  imports: [],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.css',
})
export class AllStudentsComponent {
  @Input() students: { name: string; age: string }[] = [];
}
