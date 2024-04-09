import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-page',
  standalone: true,
  imports: [],
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css',
})
export class StudentPageComponent {
  id = '';
  constructor(myRoute: ActivatedRoute) {
    this.id = myRoute.snapshot.params['id'];
  }
}
