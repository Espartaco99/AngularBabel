import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printer',
  template: `
  <div class="container">
  <div class="row">
    <app-form-td class="col-6"></app-form-td>
  </div>
</div>
  `,
  styles: []
})
export class PrinterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
