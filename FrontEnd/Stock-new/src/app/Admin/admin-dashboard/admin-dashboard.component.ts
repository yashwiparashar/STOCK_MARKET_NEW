import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  Homo(){
    this.route.navigateByUrl('/')

  }
AddIpo(){

this.route.navigateByUrl('/Admin-dashboard/UpdateIpo')

}

AddExc(){

  this.route.navigateByUrl('/Admin-dashboard/Manage-Exchange')
  
  }
  AddCom(){

    this.route.navigateByUrl('/Admin-dashboard/Manage-Company')
    
    }

VelIpo(){

  this.route.navigateByUrl('/Admin-dashboard/VelIpo')
  
  }
  EditCom(){
    this.route.navigateByUrl('/Admin-dashboard/Velcompany')
  
  }
  EditExc(){
    this.route.navigateByUrl('/Admin-dashboard/Velexc') 
  }
  
  AddSec(){
    this.route.navigateByUrl('/Admin-dashboard/add-sec')
  }


}
