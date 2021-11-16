import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/Models/company';
import { CompanyService } from 'src/app/Services/company.service';

@Component({
  selector: 'app-vel-company',
  templateUrl: './vel-company.component.html',
  styleUrls: ['./vel-company.component.css']
})
export class VelCompanyComponent implements OnInit {

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


  DeleteItem(itemId:string)
  {
    this.item_service.DeleteItem(itemId).subscribe(response=>{

    },error=>{
      console.log(error);

    });
    location.reload();
  }
  Edit(){
this.router.navigateByUrl('/Admin-dashboard/edit-Company')

  }



}
