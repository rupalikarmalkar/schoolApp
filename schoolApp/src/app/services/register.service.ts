import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user: User = new User();

  url='http://localhost:8075/user/login';

  constructor(private _http:HttpClient) { }
  
  public loginUserFromRemote(user : User):Observable<User>{
     return this._http.post<User>(this.url,user);
    
  }
}
