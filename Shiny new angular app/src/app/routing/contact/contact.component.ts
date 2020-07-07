import { Component, OnInit } from '@angular/core';
import { CodeserviceService } from '../codeservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _messageservice:CodeserviceService) { }

  ngOnInit(): void {
  }
  laptopmethod(){
    this._messageservice.messageservice()
  }

}
