import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BooksService } from '../servicios/books.service';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { FormsModule } from '@angular/forms';
import { LibrosBuscarComponent } from './libros-buscar/libros-buscar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    LibrosRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [LibrosComponent, LibrosMockComponent, LibrosBuscarComponent],
  exports: [LibrosComponent],
  providers: [BooksService]
})
export class LibrosModule { }
