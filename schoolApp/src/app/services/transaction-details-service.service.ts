import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionDetails } from '../model/transactionDetails';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsServiceService {

  constructor(private _http:HttpClient) { }
  API ='http://localhost:8080/transactionDetails';

  public postTransactionDetails(transactionDetails:TransactionDetails){
    return this._http.post(this.API+'/save',transactionDetails);
}
public getTransactionDetails(){
  return this._http.get(this.API +'/getAll');
}
public updateTransactionDetails(transactionDetails:TransactionDetails){
  return this._http.put(this.API + '/update',transactionDetails);
}
//  public deleteTransactionDetails(){
//   return this._http.delete();
//  } 
}
