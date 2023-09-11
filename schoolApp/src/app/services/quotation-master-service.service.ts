import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuotationMaster } from '../model/quotationMaster';

@Injectable({
  providedIn: 'root'
})
export class QuotationMasterServiceService {

  constructor(private _http:HttpClient) { }
  API ='http://localhost:8080/quotationMaster';

  public postQuotation(quotation:QuotationMaster){
 return this._http.post(this.API + '/save', quotation);
  }
 public getQuotation(){
  return this._http.get(this.API + '/getAll');
}
public updateQuotation(quotation:QuotationMaster){
  return this._http.put(this.API+ '/update',quotation);

}
public deleteQuotation(){
  return this._http.delete(this.API + '/delete'); // id
}


}
