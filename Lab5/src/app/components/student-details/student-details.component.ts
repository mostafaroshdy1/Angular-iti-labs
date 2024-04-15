import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { ConfirmDeletionComponent } from '../confirm-deletion/confirm-deletion.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    ConfirmDeletionComponent,
    CommonModule
  ],
  providers: [
    ApiServiceService
  ],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{

  ID:any;
  student:any;
  showConfirmationDialog = false;
  constructor(private api:ApiServiceService, myRoute:ActivatedRoute, private router:Router){
    this.ID=myRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.api.getStudentById(this.ID).subscribe({
      next:(data:any)=>{
        this.student=data;
        console.log(data);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }

  deleteStd() {
    this.showConfirmationDialog = true;
  }

  deleteStudent() {
    this.api.deleteStudent(this.ID).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Student Deleted');
        this.router.navigate(['/student']);
      }
    });
  }
}
