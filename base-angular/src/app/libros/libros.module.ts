import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../servicios/books.service';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { FormsModule } from '@angular/forms';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';
import { HttpClientModule } from '@angular/common/http';
import { GBooksService } from '../servicios/g-books.service';
import { LibrosByServicioComponent } from './libros-by-servicio/libros-by-servicio.component';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    LibrosComponent,
    LibrosMockComponent,
    LibrosBuscarComponent,
    LibrosByServicioComponent
  ],
  exports: [LibrosComponent],
  providers: [BooksService, GBooksService]
})
export class LibrosModule { }
