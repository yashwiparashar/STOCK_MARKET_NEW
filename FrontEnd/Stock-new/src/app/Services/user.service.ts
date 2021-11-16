import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Item_Url='http://localhost:31031/api/User/'
  constructor(private http:HttpClient) { }

    AddUser(user:User):Observable<any>
    {
  
      return this.http.post(this.Item_Url+'Register',user);
    }


    LogUser(user:User):Observable<any>
    {
  
      return this.http.post(this.Item_Url+'Login',user);
    }



    
  }

