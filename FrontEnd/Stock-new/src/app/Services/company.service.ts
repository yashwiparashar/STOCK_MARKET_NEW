import { Injectable } from '@angular/core';
import { Company } from '../Models/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  Item_Url='http://localhost:54564/api/Company/'

  constructor(private http:HttpClient) { }
  GetAllItems():Observable<Company[]>
  {
    return this.http.get<Company[]>(this.Item_Url+'GetAllCompany');
  }
  GetItem(itemId:string):Observable<Company>
  {
    return this.http.get<Company>(this.Item_Url+'GetCompany/'+itemId);
  }
  DeleteItem(itemId:string):Observable<any>
  {
    return this.http.delete(this.Item_Url+'DeleteCompany/'+itemId);
  }
  AddItem(item:Company):Observable<any>
  {

    return this.http.post(this.Item_Url+'AddCompany',item);
  }
  Edititem(item:Company):Observable<any>
  {

    return this.http.put(this.Item_Url+'EditCompany',item);
  }

 
}
