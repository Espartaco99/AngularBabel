import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  template: `
  <div class="container">
    <div class="row">
      <app-libros-mock class="col-6"></app-libros-mock>
    </div>
  </div>
  `,
  styles: []
})
export class LibrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
