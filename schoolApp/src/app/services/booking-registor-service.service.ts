import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookingRegistor } from '../model/bookingRregistor';

@Injectable({
  providedIn: 'root'
})
export class BookingRegistorServiceService {

  constructor(private _http:HttpClient) { }
  API ='http://localhost:8080/bookingRegistor';

  public postBooking(booking:BookingRegistor){
    return this._http.post(this.API + '/save',booking);
}
public getBooking(){
  return this._http.get(this.API + '/getAll');
}
public updateBooking(booking:BookingRegistor){
  return this._http.put(this.API + '/update',booking);

}
public deleteBooking(){
  return this._http.delete(this.API+'/delete',);//mention id
}
}
