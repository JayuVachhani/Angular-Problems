import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  available:boolean=true;
  products=[]
  
  checkproduct(){
    this.available=true;
  this.products = [
    {name:'Laptop'},
    {name:'Mobile'},
    {name:'TV'},
    {name:'Camera'}    
  ] 
}

}
