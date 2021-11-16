import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/Models/ipo';
import { IpoService } from 'src/app/Services/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ipodetails',
  templateUrl: './update-ipodetails.component.html',
  styleUrls: ['./update-ipodetails.component.css']
})
export class UpdateIPODetailsComponent implements OnInit {

  ipo:Ipo;
  constructor(private route:Router,private item_service:IpoService) { this.ipo=new Ipo()}

  ngOnInit(): void {
  }

  AddUser()
  {
    console.log(this.ipo);
  
    this.item_service.AddItem(this.ipo).subscribe(response=>{

    },error=>{
      console.log(error)
    })
  }


submit(){
  this.route.navigateByUrl('/Admin-dashboard')

}


}
