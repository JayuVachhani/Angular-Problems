import { Component, OnInit } from '@angular/core';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
  
  name:string = "Jay";

  constructor() { }
// Life cycle hook ngOn....
// Constructor-->ngOnChanges-->ngOnInit-->ngDoCheck-->ngAfterContentInit-->ngAfterContentChecked-->ngAfterViewInit-->ngAfterViewChecked-->ngOnDestroy
  ngOnInit(): void {
  }
  appStatus:boolean = false;

  Name ="";
  onClick(){
    this.Name="Jay Vachhani";    
  }
  Namee:string="Jay Vachhani";

  yourmessage:string = "Hello Jay";

  mypro:boolean=true;

  mystyle:string="red"

  mltclasses = {
    class1:true,
    class2:false,
    class3:true
  }
  mltstyles = {
    'background':'yellow',
    'border':'1px solid red',
    'width':'50px'
  }
  getinputinfo(inputinfo){
    console.log(inputinfo.value);
    console.log(inputinfo.name);
    console.log(inputinfo);
  }

  isCollapsed = false;

  isValid:boolean= false;
  oncreate(){
    this.isValid= true;
  }
  
  isVal:boolean=true;
  
  oncreatebtn(){
    
    this.isVal= false; 

  }
  isVali:boolean=false;
  oncreatebtnthen(){
    this.isVali=true;
  }
  selectedproduct:string="";
  getproductvalue(event){
    this.selectedproduct=event.target.value;

  }
  products =[
    {proimg:"../../../assets/laptop.png",name:'Laptop',id:'pro01'},
    {proimg:"../../../assets/mobile.png",name:'Mobile',id:'pro02'},
    {proimg:"../../../assets/camera.png",name:'Camera',id:'pro03'}    
  ]
  users = []
  oncreateuser(username){
    this.users.push({
      name:username.value
    });
  }
  onremoveuser(){
    this.users.splice(this.users.length-1)

  }
  removeuser(i){
    this.users.splice(i, 1);

  }
}
