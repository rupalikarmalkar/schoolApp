import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalesMaster } from '../model/salesMaster';

@Injectable({
  providedIn: 'root'
})
export class SalesMasterServiceService {

  constructor(private _http:HttpClient) { }
  API ='http://localhost:8080/salesMaster';

  public postSales(sales:SalesMaster){
    return this._http.post(this.API + '/save',sales);
  }
  public getSales(){
    return this._http.get(this.API + '/getAll');
  }
  public updateSales(sales:SalesMaster){
    return this._http.put(this.API + '/update',sales);
  }

  // public deleteSales(){
  //   return this._http.delete(this.API '/delete',);//id
  // }
}
