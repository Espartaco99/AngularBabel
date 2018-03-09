import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Printer, Departamentos } from '../../modelos/master.model';
import { printers, departamentos } from '../../modelos/master.data';
import { OrderPrintIf } from '../../modelos/orderprint.model';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {
  listaPrinters: Printer[];
  listaDepartamentos: Departamentos[];
  orderPrint: OrderPrintIf;
  @ViewChild('form') formulario: any;
  constructor() { }

  ngOnInit() {
    this.listaPrinters = printers;
    this.listaDepartamentos = departamentos;
    this.orderPrint = {
      user: {nombre: '', apellidos: '', telefono: ''},
      printer: {id: '', name: ''},
      isColor: false,
      isClaro: false,
      departamento: {id: '', name: ''}
    };

    console.dir(this.formulario);
  }
  borrar() {
    this.formulario.reset();
    /* this.orderPrint = {
      user: {nombre: '', apellidos: '', telefono: ''},
      printer: {id: '', name: ''},
      isColor: false,
      isClaro: false,
      departamento: {id: '', name: ''}
    }; */
  }
}
