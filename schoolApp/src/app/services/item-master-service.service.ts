import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemMaster } from '../model/itemMaster';

@Injectable({
  providedIn: 'root'
})
export class ItemMasterServiceService {

  constructor( private _http:HttpClient) { }
  API ='http://localhost:8080/itemMaster';

  public postItemMaster(itemMaster:ItemMaster){
    return this._http.post(this.API + '/save',itemMaster);
  }
  public getItemMaster(){
    return this._http.get(this.API + '/getAll');
  }
  public deleteItemMaster(itemCode:any){
    return this._http.delete(this.API + '/delete/itemCode',itemCode); //chk anhular code for delete
  }
  public updateItemMaster(itemMaster:ItemMaster){
    return this._http.put(this.API + '/update' ,itemMaster);
  }
}
