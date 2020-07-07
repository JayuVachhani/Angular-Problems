import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 @Input() selectproduct:boolean=false
 @Input() selecteditem:string=""
 @Output() list:any= new EventEmitter;
  onselect(item){
this.selectproduct=true
this.selecteditem=item
  }
  
  productinlist(){
  this.list.emit(this.selecteditem)
  }




}
