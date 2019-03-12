import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  @Input() message: string;
  @Output() messageReturn = new EventEmitter<string>();

  constructor(
      private _data: DataService
      ) { }

  ngOnInit() {
  }

  clickLike(message: string){
    this.messageReturn.emit(`Me gustó el chiste, ${message}`);
  }

  	clickShare(){
	  this._data.setGeneralNotificationMessage(`wow such notification very informative wow`);
	}
}