import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ipo } from 'src/app/Models/ipo';
import { DatePipe } from '@angular/common';
import { IpoService } from 'src/app/Services/ipo.service';
@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css']
})
export class IPOsComponent implements OnInit {
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

}
