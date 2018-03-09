import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  listaLibros: string[];
  constructor() {
    this.listaLibros = [
      'Angular Avanzado',
      'Aprendiendo Angular',
      'Master in Angular',
      'Angular Ninja'
    ];
   }
   getLibros(clave: string) {
      return this.listaLibros;
   }

   getLibrosAsinc(clave: string) {
     return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(this.listaLibros); }, 4000);
     });
   }
}
