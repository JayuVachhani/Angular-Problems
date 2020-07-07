import { Component, OnInit } from '@angular/core';
import { CodeserviceService } from '../codeservice.service';

@Component({
  selector: 'app-buyproducts',
  templateUrl: './buyproducts.component.html',
  styleUrls: ['./buyproducts.component.css']
})
export class BuyproductsComponent implements OnInit {
//for service use private instance:servicename
  constructor(private _messageService:CodeserviceService) { }

  ngOnInit(): void {
  }
  sltpro:boolean=false
  sltitem:string=""
  list:any
  onselect(item){
this.sltpro=true
this.sltitem=item
  }
  
  productinlist(event){
  this.list=event
  }
  msgAlert(){
  this._messageService.msgAlert()
  }
}
