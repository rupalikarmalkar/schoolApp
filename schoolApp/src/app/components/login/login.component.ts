import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RegisterService } from 'src/app/services/register.service';

// import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//  user!: User;


 email: string ="";
 password: string ="";
 constructor(private router: Router,private http: HttpClient) {}

 Login() {
   console.log(this.email);
   console.log(this.password);

   let bodyData = {
     email: this.email,
     password: this.password,
   };

       this.http.post("http://localhost:8085/api/v1/student/login", bodyData).
       subscribe(  (resultData: any) => {
       console.log(resultData);

       if (resultData.message == "Email not exits")
       {
     
         alert("Email not exits");
   

       }
       else if(resultData.message == "Login Success")
   
        {
         this.router.navigateByUrl('/home');
       }
       else
       {
         alert("Incorrect Email and Password not match");
       }
     });
   }


    }


 
  




