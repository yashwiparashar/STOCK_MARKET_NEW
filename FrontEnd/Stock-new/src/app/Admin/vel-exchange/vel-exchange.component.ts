import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exchange } from 'src/app/Models/exchange';
import { ExchangeService } from 'src/app/Services/exchange.service';

@Component({
  selector: 'app-vel-exchange',
  templateUrl: './vel-exchange.component.html',
  styleUrls: ['./vel-exchange.component.css']
})
export class VelExchangeComponent implements OnInit {

  items:Exchange[]=[];
  item:Exchange;




  constructor(private item_service:ExchangeService,private router:Router) { 
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
