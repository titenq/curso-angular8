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
  nome: string = 'João'
  funcionarios: string[]
  imgUrl: string = 'http://lorempixel.com/400/200'
  classeAlerta: string
  estiloAlerta: string
  textoDigitado: string = ''
  funcModel: string = ''
  funcsModel: string[] = []

  constructor(private funcionariosService: FuncionariosService) {
    this.funcionarios = this.funcionariosService.getFuncionarios()
  }

  soma(num1: number, num2: number): number {
    return num1 + num2
  }

  valorAlerta(nomeAlerta: string): void {
    this.classeAlerta = nomeAlerta
  }

  valorEstilo(nomeEstilo: string): void {
    this.estiloAlerta = nomeEstilo
  }

  mostrarTextoEnquantoDigita(event: KeyboardEvent) {
    this.textoDigitado = (event.target as HTMLInputElement).value
  }

  gravarFuncModel() {
    this.funcsModel.push(this.funcModel)
    this.funcModel = ''
  }
}
