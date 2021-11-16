import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exchange } from '../Models/exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  Item_Url='http://localhost:54564/api/Exchange/'

  constructor(private http:HttpClient) { }
  GetAllItems():Observable<Exchange[]>
  {
    return this.http.get<Exchange[]>(this.Item_Url+'GetAllExchange');
  }
  GetItem(itemId:string):Observable<Exchange>
  {
    return this.http.get<Exchange>(this.Item_Url+'GetExchange/'+itemId);
  }
  DeleteItem(itemId:string):Observable<any>
  {
    return this.http.delete(this.Item_Url+'DeleteExchange/'+itemId);
  }
  AddItem(item:Exchange):Observable<any>
  {

    return this.http.post(this.Item_Url+'AddExchange',item);
  }
  Edititem(item:Exchange):Observable<any>
  {

    return this.http.put(this.Item_Url+'EditExchange',item);
  }


}
