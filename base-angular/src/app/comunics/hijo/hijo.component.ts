import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  miNombre: string;
  @Input() nombre: String;
  @Output() respuesta: EventEmitter<string>;
  constructor() {
    this.respuesta = new EventEmitter();
   }

  ngOnInit() {}

  btnRespuesta() {
    this.respuesta.emit(this.miNombre);
  }

}
