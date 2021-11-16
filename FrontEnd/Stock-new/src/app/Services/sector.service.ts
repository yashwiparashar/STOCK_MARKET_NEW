import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sectors } from '../Models/sectors';
@Injectable({
  providedIn: 'root'
})
export class SectorService {
  Item_Url='http://localhost:54564/api/Sector/'

  constructor(private http:HttpClient) { }
  GetAllItems():Observable<Sectors[]>
  {
    return this.http.get<Sectors[]>(this.Item_Url+'GetAllSector');
  }
  GetItem(itemId:string):Observable<Sectors>
  {
    return this.http.get<Sectors>(this.Item_Url+'GetSector/'+itemId);
  }
  DeleteItem(itemId:string):Observable<any>
  {
    return this.http.delete(this.Item_Url+'DeleteSector/'+itemId);
  }
  AddItem(item:Sectors):Observable<any>
  {

    return this.http.post(this.Item_Url+'AddSector',item);
  }
  Edititem(item:Sectors):Observable<any>
  {

    return this.http.put(this.Item_Url+'EditSector',item);
  }

 
}
