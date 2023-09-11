import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from '../model/branchData';

@Injectable({
  providedIn: 'root'
})
export class BranchServiceService {

  constructor(private _http:HttpClient) { }

  API ='http://localhost:8080/branch';

  public postBranch(branch:Branch){
   return this._http.post(this.API + '/save',branch);
  }
 
   public getBranch(){
   return this._http.get(this.API+'/getAll');
   }
 
   public deleteBranch(branchID:any){
     return this._http.delete(this.API + '/delete?branchID='+ branchID);
   }
 
   public  updateBranch(branch:Branch){
     return this._http.put(this.API + '/update',branch);
   }
}
