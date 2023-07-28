import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent {
  post:any=[];
  baseUrl='http://localhost:8085/api/v2/organization/getAll';

  constructor(private  _http:HttpClient){
    
   this._http.get(this.baseUrl).subscribe(result=>{
    this.post=result;
    console.log(result);
    
  })
}
}