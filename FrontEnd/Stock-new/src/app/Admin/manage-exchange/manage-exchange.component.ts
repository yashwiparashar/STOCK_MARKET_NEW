import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/Models/exchange';
import { Router } from '@angular/router';
import { ExchangeService } from 'src/app/Services/exchange.service';
@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.css']
})
export class ManageExchangeComponent implements OnInit {
  exchange:Exchange;
  constructor(private route:Router,private item_service:ExchangeService) { this.exchange=new Exchange()}

  ngOnInit(): void {
  }

  AddUser()
  {
    console.log(this.exchange);
  
    this.item_service.AddItem(this.exchange).subscribe(response=>{

    },error=>{
      console.log(error)
    })
  }


submit(){
  this.route.navigateByUrl('/Admin-dashboard')

}

 

}
