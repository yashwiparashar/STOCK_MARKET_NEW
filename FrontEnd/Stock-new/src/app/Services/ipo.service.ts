import { Injectable } from '@angular/core';
import { Ipo } from '../Models/ipo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  Item_Url='http://localhost:54564/api/Ipo/'

  constructor(private http:HttpClient) { }
  GetAllItems():Observable<Ipo[]>
  {
    return this.http.get<Ipo[]>(this.Item_Url+'GetAll');
  }
  GetItem(itemId:string):Observable<Ipo>
  {
    return this.http.get<Ipo>(this.Item_Url+'GetItem/'+itemId);
  }
  DeleteItem(itemId:string):Observable<any>
  {
    return this.http.delete(this.Item_Url+'DeleteItem/'+itemId);
  }
  AddItem(item:Ipo):Observable<any>
  {

    return this.http.post(this.Item_Url+'AddIpo',item);
  }
  Edititem(item:Ipo):Observable<any>
  {

    return this.http.put(this.Item_Url+'EditItem',item);
  }





}
