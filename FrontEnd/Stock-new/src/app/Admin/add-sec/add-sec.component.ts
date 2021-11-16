import { Component, OnInit } from '@angular/core';
import { Sectors } from 'src/app/Models/sectors';
import { Router } from '@angular/router';
import { SectorService } from 'src/app/Services/sector.service';

@Component({
  selector: 'app-add-sec',
  templateUrl: './add-sec.component.html',
  styleUrls: ['./add-sec.component.css']
})
export class AddSecComponent implements OnInit {

  company:Sectors;
  constructor(private route:Router,private item_service:SectorService) { this.company=new Sectors()}

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
