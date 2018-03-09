import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../servicios/books.service';

@Component({
  selector: 'app-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {
  clave: string;
  listaLibros: string[];
  constructor(public books: BooksService) { }

  ngOnInit() {
    this.listaLibros = [];
  }
  buscar() {
    this.listaLibros = this.books.getLibros(this.clave);
    this.clave = '';
  }
  buscarAsinc() {
    this.books.getLibrosAsinc(this.clave).then((response: any) => {this.listaLibros = response; } );

  }
}
