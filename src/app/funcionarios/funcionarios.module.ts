import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosComponent } from './funcionarios.component';
import { FuncionarioEscalaComponent } from './funcionario-escala/funcionario-escala.component';

@NgModule({
  declarations: [FuncionariosComponent, FuncionarioEscalaComponent],
  imports: [
    CommonModule
  ],
  exports: [FuncionariosComponent]
})
export class FuncionariosModule { }
