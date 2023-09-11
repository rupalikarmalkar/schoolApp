import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from '../model/customerDetails';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsServiceService {

  constructor(private _http: HttpClient) { }
  API = 'http://localhost:8080/customerDetails';

  // http://localhost:8080/customerDetails/update

  public postCustomer(customer: CustomerDetails) {
    return this._http.post(this.API + '/save', customer);
  }

  public getCustomer() {
    return this._http.get(this.API + '/getAll');
  }

  public updateCustomer(customer: CustomerDetails) {
    return this._http.put(this.API + '/update', customer);
  }

  public deleteCustomer() {
    return this._http.delete(this.API + '/delete'); // id
  }

}
