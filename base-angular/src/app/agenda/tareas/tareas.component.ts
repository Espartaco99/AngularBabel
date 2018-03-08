import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tarea: String;
  // Hay que inicializarlos
  tareas: Array<String>;
  constructor() { }

  ngOnInit() {
    this.tareas = new Array<String>();
  }

  addTarea() {
    // Evitar añadir tareas vacias
    if (this.tarea.length) {
      this.tareas.push(this.tarea);
    }
  }
}
