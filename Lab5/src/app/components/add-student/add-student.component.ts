import { Component } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    ApiServiceService
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  studentForm=new FormGroup({
    name: new FormControl('', Validators.required),
    mobNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    addressLine1: new FormControl('', Validators.required),
    addressLine2: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  })
  constructor(private apiService: ApiServiceService, private router:Router) { }
  AddUser(){
    if(this.studentForm.invalid){
      console.log('Invalid Form');
      return;
    }

    const formData = this.studentForm.value;
    const addressData = {
      addressLine1: formData.addressLine1,
      addressLine2: formData.addressLine2,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode
    };

    const userData = {
      name: formData.name,
      mobNumber: formData.mobNumber,
      email: formData.email,
      age: formData.age,
      password: formData.password,
      address: addressData,
      gender: formData.gender
    };

    this.apiService.addStudent(userData).subscribe({
      next:(data:any)=>{
        console.log(data);
      },
      error:(err:any)=>{
        console.log(err);
      },
      complete:()=>{
        console.log('Student Added');
        this.router.navigate(['/student']);
      }
    })
  }

}
