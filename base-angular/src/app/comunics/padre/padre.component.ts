import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  nombre: String;
  constructor() { }

  ngOnInit() {
  }

  respuestaHijo(event) {
    this.nombre = event;
  }

}
