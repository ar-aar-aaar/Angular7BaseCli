import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  @Input() message: string;
  @Output() messageReturn = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  clickLike(message: string){
    this.messageReturn.emit(`Me gustó el chiste, $(message)`);
  }



}
