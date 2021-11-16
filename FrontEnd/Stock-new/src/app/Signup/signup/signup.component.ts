import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:User;
  constructor(private route:Router,private item_service:UserService) { this.user=new User()}

  ngOnInit(): void {
  }

  AddUser()
  {
    console.log(this.user);
  
    this.item_service.AddUser(this.user).subscribe(response=>{

    },error=>{
      console.log(error)
    })
  }


submit(){
  this.route.navigateByUrl('/user-dashboard')

}


}
