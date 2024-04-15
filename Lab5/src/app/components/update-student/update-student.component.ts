import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  providers: [ApiServiceService],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css',
})
export class UpdateStudentComponent implements OnInit {
  user: any;
  ID: any;
  constructor(private api: ApiServiceService, myRouter: ActivatedRoute , private router:Router) {
    this.ID = myRouter.snapshot.params['id'];
    this.user = {
      name: '',
      mobNumber: '',
      age: '',
      email: '',
      password: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
      },
      gender: '',
      id: '',
    };
  }
  ngOnInit(): void {
    this.api.getStudentById(this.ID).subscribe({
      next: (data) => {
        this.user = data;
        console.log(this.user.name);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  UpdateUser() {
    this.api.updateStudent(this.ID, this.user).subscribe({
      complete:()=>{
        console.log('Student Updated');
        this.router.navigate(['/student']);
      }
    });
  }
}
