import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  template: `
    <div class="container">
      <div class="row">
        <app-tareas></app-tareas>
      </div>
    </div>
  `,
  styles: []
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
