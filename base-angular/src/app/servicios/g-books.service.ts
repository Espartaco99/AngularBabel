import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class GBooksService {
  urlGoogle: string;
  listaLibros: string[];

  constructor(public http: HttpClient) {
    this.listaLibros = [];
    this.urlGoogle = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  getLibros(clave: string): any {
    this.listaLibros = [];
    const url = this.urlGoogle + clave;
    return this.http.get(url).toPromise()
    .then((response: any) => {response.items.forEach(element => {
      this.listaLibros.push(element.volumeInfo.title);
      });
      return new Promise((resolve, reject) => {
        resolve(this.listaLibros);
      });
    });
  }
}
