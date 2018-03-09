import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-libros-buscar',
  templateUrl: './libros-buscar.component.html',
  styleUrls: ['./libros-buscar.component.css']
})
export class LibrosBuscarComponent implements OnInit {
  clave: string;
  listaLibros: string[];
  urlGoogle: string;
  constructor(public http: HttpClient) { }

  // https://www.googleapis.com/books/v1/volumes?q=intitle:"clave"
  ngOnInit() {
    this.listaLibros = [];
    this.urlGoogle = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }
  buscar() {
    this.listaLibros = [];
    const url = this.urlGoogle + this.clave;
    this.http.get(url).toPromise()
    .then((response: any) => {response.items.forEach(element => {
      this.listaLibros.push(element.volumeInfo.title);
    }); })
    .catch((error) => console.log(error));
    this.clave = '';
  }
  /* buscarAsinc() {
    this.books.getLibrosAsinc(this.clave).then((response: any) => {this.listaLibros = response; } );

  } */
}
