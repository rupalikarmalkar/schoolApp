import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalesTransaction } from '../model/salesTransaction';

@Injectable({
  providedIn: 'root'
})
export class SalesTransactionServiceService {

  constructor(private _http:HttpClient) { }
  API ='http://localhost:8080/salesTransaction';

public postSalesTransaction(salesTransaction:SalesTransaction){
  return this._http.post(this.API + '/save',salesTransaction);
}
public getSalesTransaction(){
  return this._http.get(this.API+'/getAll');
}
public updateSalesTransaction(salesTransaction:SalesTransaction){
return this._http.put(this.API + '/update',salesTransaction);
}
public deleteSalesTransaction(){
  return this._http.delete(this.API);//Id
}
}
