import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registor',
  templateUrl: './user-registor.component.html',
  styleUrls: ['./user-registor.component.css']
})
export class UserRegistorComponent {
  [x: string]: any;

  studentname: string ="";
  email: string ="";
  password: string ="";
  constructor(private http: HttpClient )
  {
  }
  save()
  {
  
    let bodyData = {
      "studentname" : this['studentname'],
      "email" : this.email,
      "password" : this.password
    };
    this.http.post("http://localhost:8085/api/v1/student/save",bodyData,
    {responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully");
    });
  }
}
