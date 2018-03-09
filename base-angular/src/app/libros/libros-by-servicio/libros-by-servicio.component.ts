import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GBooksService } from '../../servicios/g-books.service';

@Component({
  selector: 'app-libros-by-servicio',
  templateUrl: './libros-by-servicio.component.html',
  styleUrls: ['./libros-by-servicio.component.css']
})
export class LibrosByServicioComponent implements OnInit {
  clave: string;
  listaLibros: string[];
  constructor(public gBooks: GBooksService) { }

  // https://www.googleapis.com/books/v1/volumes?q=intitle:"clave"
  ngOnInit() {
    this.listaLibros = [];
  }
  buscar() {
    this.gBooks.getLibros(this.clave).then( (response) => this.listaLibros = response);
  }
}
