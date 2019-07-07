import { Component } from '@angular/core';

import { FuncionariosService } from './funcionarios/funcionarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  nomeTabela: string = 'Meses'
  meses: string[] = ['Janeiro', 'Fevereiro', 'Março']

  funcionarios: string[]

  constructor(private funcionariosService: FuncionariosService) {
    this.funcionarios = this.funcionariosService.getFuncionarios()
  }
}
