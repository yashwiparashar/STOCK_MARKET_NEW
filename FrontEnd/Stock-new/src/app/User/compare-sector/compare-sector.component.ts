import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sectors } from 'src/app/Models/sectors';
import { SectorService } from 'src/app/Services/sector.service';

@Component({
  selector: 'app-compare-sector',
  templateUrl: './compare-sector.component.html',
  styleUrls: ['./compare-sector.component.css']
})
export class CompareSectorComponent implements OnInit {

  items:Sectors[]=[];
  item:Sectors;


  constructor(private item_service:SectorService,private router:Router) { 
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
