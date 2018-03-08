import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda.component';

@NgModule({
  imports: [
    CommonModule,
    AgendaRoutingModule
  ],
  declarations: [AgendaComponent],
  exports: [
    AgendaComponent
  ]
})
export class AgendaModule { }
