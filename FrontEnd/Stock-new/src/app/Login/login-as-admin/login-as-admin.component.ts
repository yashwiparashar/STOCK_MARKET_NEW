import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-as-admin',
  templateUrl: './login-as-admin.component.html',
  styleUrls: ['./login-as-admin.component.css']
})
export class LoginAsAdminComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  Admin(){
this.route.navigateByUrl('/Admin-dashboard')
  }
  submit(){
    console.log("yay adminss")
  }

}
