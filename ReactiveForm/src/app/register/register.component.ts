import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myReactiveForm: FormGroup;
  notallowednames = ['Jay','Vachhani'];
  constructor() { }

  ngOnInit() {
    // setup form
    this.myReactiveForm = new FormGroup({
      // form-controls
      'username': new FormControl(null,[Validators.required,this.NaName.bind(this)]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'role': new FormControl(null,[Validators.required]),
      'address': new FormControl(null,[Validators.required]),
      'skills' : new FormArray([
        new FormControl(null,[Validators.required])
      ])
    });
  }
  onsubmit(){
    console.log(this.myReactiveForm);
  }
  onadd(){
    // add same input field
    const control = new FormControl(null,[Validators.required]);
    (<FormArray>this.myReactiveForm.get('skills')).push(control);
  }
  // if not allowed name present
  NaName(control:FormControl){
    if(this.notallowednames.indexOf(control.value)!==-1){
      // return error code
      return {'NamenotAllowed ':true};

    }
    return null;
  }

}
