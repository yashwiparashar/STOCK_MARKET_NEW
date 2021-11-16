import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/Models/company';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-compare-companies',
  templateUrl: './compare-companies.component.html',
  styleUrls: ['./compare-companies.component.css']
})
export class CompareCompaniesComponent implements OnInit {
  items:Company[]=[];
  item:Company;


  constructor(private item_service:CompanyService,private router:Router) { 
    item_service.GetAllItems().subscribe(response=>{
      this.items=response
      console.log(this.items);
    },error=>{
      console.log(error);
    })



  }

 

  ngOnInit(): void {
  }

}
