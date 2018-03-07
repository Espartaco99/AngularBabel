import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  template: `
  <div class="container">
    <div class="row">
      <app-saludo class="col-6"></app-saludo>
      <app-saludo-local class="col-6"></app-saludo-local>
    </div>
  </div>
  `,
  styles: []
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
