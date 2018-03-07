import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunics',
  template: `
  <div class="container">
  <div class="row">
    <app-padre class="col-6"></app-padre>
  </div>
</div>
  `,
  styles: []
})
export class ComunicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
