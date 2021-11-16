import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-login-as-user',
  templateUrl: './login-as-user.component.html',
  styleUrls: ['./login-as-user.component.css']
})
export class LoginAsUserComponent implements OnInit {
  user:User;
  constructor(private route:Router,private item_service:UserService) { this.user=new User()}

  ngOnInit(): void {
  }
  Userdash(){

    console.log(this.user);
  
    this.item_service.LogUser(this.user).subscribe(response=>{
      this.route.navigateByUrl('/user-dashboard')

    },error=>{
      console.log(error)
      
    })


    

    
  }
submit(){
  console.log("submit")
}

}
