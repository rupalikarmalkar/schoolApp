import { Injectable } from '@angular/core';
import { UserData } from '../model/userData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private _http:HttpClient) { }

  API ='http://localhost:8080/user';

  public postUser(user:UserData){
   return this._http.post(this.API + '/save',user);
  }
 
   public getUser(){
   return this._http.get(this.API+'/getAll');
   }
 
   public deleteUser(ID:any){
     return this._http.delete(this.API + '/delete?ID='+ ID);
   }
 


   
   public  updateUser(user:any){
     return this._http.put(this.API + '/update',user);
   }
  }
