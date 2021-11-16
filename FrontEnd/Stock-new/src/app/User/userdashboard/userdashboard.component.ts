import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  IPO(){
this.route.navigateByUrl('/user-dashboard/Ipo')

  }
  Comp(){
    this.route.navigateByUrl('/user-dashboard/Compare-Company')
  }


  Home(){
    this.route.navigateByUrl('/')

  }
  Sec(){
    this.route.navigateByUrl('/user-dashboard/Compare-Sector')
  }


}
