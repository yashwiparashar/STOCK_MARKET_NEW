import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/Models/company';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.css']
})
export class ManageCompanyComponent implements OnInit {
  company:Company;
  constructor(private route:Router,private item_service:CompanyService) { this.company=new Company()}

  ngOnInit(): void {
  }

  AddUser()
  {
    console.log(this.company);
  
    this.item_service.AddItem(this.company).subscribe(response=>{

    },error=>{
      console.log(error)
    })
  }


submit(){
  this.route.navigateByUrl('/Admin-dashboard')

}

  

}
