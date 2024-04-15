import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  private url='http://localhost:3000/students';

  getAllStudent(){
    return this.http.get(this.url);
  }

  getStudentById(id:number){
    return this.http.get(this.url+'/'+id);
  }

  addStudent(data:any){
    return this.http.post(this.url,data);
  }

  updateStudent(id:number,data:any){
    return this.http.put(this.url+'/'+id,data);
  }

  deleteStudent(id:number){
    return this.http.delete(this.url+'/'+id);
  }

}
