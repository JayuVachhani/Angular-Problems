import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-excercise1',
  templateUrl: './excercise1.component.html',
  styleUrls: ['./excercise1.component.css']
})
export class Excercise1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users:any=[]
  admins:any=[]
  selectproduct:boolean=false
  
  
  senddatatoparent(userevent)
  {
this.selectproduct=true
this.users.push({name:userevent.value})
  }   
  
  removeuser(i){
    this.users.splice(i, 1 )
  }
  

  senddatatoadmin(event){
    this.selectproduct=true
this.admins.push({name:event.value})
  }
  removeadmin(i){
    this.admins.splice(i, 1 )
  }

}
