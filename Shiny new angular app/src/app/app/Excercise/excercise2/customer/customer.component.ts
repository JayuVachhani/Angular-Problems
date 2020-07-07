import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selected:boolean;
  ItemsArray = [{"id":101,"customerName":"Kiran","customerAge":25,"customerMobileNumber":9876543210,"regstatus":"New",selected:false},
   {"id":102,"customerName":"Rajesh","customerAge":32,"customerMobileNumber":9638527410,"regstatus": "Confirmed",selected:false},
   {"id":103,"customerName":"Keerthi","customerAge":26,"customerMobileNumber":9865327410,"regstatus": "New",selected:false}, 
   {"id":104,"customerName":"Mounika","customerAge":25,"customerMobileNumber":9738527410,"regstatus": "Confirmed",selected:false},
  {"id":105,"customerName":"Ravana","customerAge":26,"customerMobileNumber":9869327410,"regstatus":"New",selected:false}];

  checkAll(){
    this.selected=true
  }
  
}
