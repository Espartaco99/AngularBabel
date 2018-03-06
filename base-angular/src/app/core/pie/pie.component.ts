import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  autor: string;
  lugar: string;
  fecha: string;
  constructor() { }

  ngOnInit() {
    this.autor = 'Yo';
    this.lugar = 'Babel';
    this.fecha = '06/03/2018';
  }

}
