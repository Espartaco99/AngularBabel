import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
 /*  encapsulation: ViewEncapsulation.Emulated */
})
export class SaludoComponent implements OnInit {
  VarNombre: String;
  constructor() { }

  ngOnInit() {
    this.VarNombre = 'Luis';
  }

  btnBorrar() {
    this.VarNombre = '';
  }

}
