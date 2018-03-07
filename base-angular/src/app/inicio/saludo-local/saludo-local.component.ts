import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
})
export class SaludoLocalComponent implements OnInit {
  @ViewChild('locNombre')
  varName: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(this.varName);
  }

}
