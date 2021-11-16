import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipo } from 'src/app/Models/ipo';
import { DatePipe } from '@angular/common';
import { IpoService } from 'src/app/Services/ipo.service';

@Component({
  selector: 'app-vel-ipo',
  templateUrl: './vel-ipo.component.html',
  styleUrls: ['./vel-ipo.component.css']
})
export class VelIpoComponent implements OnInit {
  items:Ipo[]=[];
  item:Ipo;




  constructor(private item_service:IpoService,private router:Router) { 
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
this.router.navigateByUrl('/Admin-dashboard/edit-ipo')

  }






}

