import { Component, OnInit } from '@angular/core';
import { Ipo } from 'src/app/Models/ipo';
import { IpoService } from 'src/app/Services/ipo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-ipo',
  templateUrl: './edit-ipo.component.html',
  styleUrls: ['./edit-ipo.component.css']
})
export class EditIpoComponent implements OnInit {

  ipo:Ipo;
  constructor(private route:Router,private item_service:IpoService) { this.ipo=new Ipo()}

  ngOnInit(): void {
  }

  AddUser()
  {
    console.log(this.ipo);
  
    this.item_service.Edititem(this.ipo).subscribe(response=>{

    },error=>{
      console.log(error)
    })
  }


submit(){
  this.route.navigateByUrl('/Admin-dashboard')

}

}
