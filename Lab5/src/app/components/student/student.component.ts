import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { OneStudentComponent } from '../one-student/one-student.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [
    HttpClientModule,
    OneStudentComponent,
    CommonModule
  ],
  providers: [
    ApiServiceService
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  students:any;
  constructor(private api:ApiServiceService) { }
  ngOnInit(): void {
    this.api.getAllStudent().subscribe({
      next:(data)=>{
        this.students=data;
      },
      error:(err)=>{console.log(err);},
  })
  }

  trackById(index: number, student: any): number {
    return student.id;
  }


}
