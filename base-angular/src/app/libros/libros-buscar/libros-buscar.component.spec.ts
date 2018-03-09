import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosBuscarComponent } from './libros-Buscar.component';

describe('LibrosBuscarComponent', () => {
  let component: LibrosBuscarComponent;
  let fixture: ComponentFixture<LibrosBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
