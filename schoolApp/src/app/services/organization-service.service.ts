import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Organization } from '../model/organizationData';

@Injectable({
  providedIn: 'root'
})
export class OrganizationServiceService {
  constructor(private _http:HttpClient) { }
  API ='http://localhost:8080/org';

 public postOrganization(org:Organization){
  return this._http.post(this.API + '/save',org);
 }

  public getOrganization(){
  return this._http.get(this.API+'/getAll');
  }

  public deleteOrganization(org:any){
    return this._http.delete(this.API + '/delete',org);
  }

  public  updateOrganization(org:any){
    return this._http.put(this.API + '/update',org);
  }
}
