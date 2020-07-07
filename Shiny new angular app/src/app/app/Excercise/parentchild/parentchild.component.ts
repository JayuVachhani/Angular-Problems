import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.css']
})
export class ParentchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectproduct:boolean=false  
 @Output() userlist=new EventEmitter; 
 @Output() adminlist =new EventEmitter;
  senddatatoparent(username){
    this.selectproduct=true    
    this.userlist.emit(username.value)
  }       
     
  
  senddatatoadmin(inputadminname){
    this.selectproduct=true
    this.adminlist.emit(inputadminname.value)
  }
  
}
