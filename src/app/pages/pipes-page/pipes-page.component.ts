import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-page',
  templateUrl: './pipes-page.component.html',
  styleUrls: ['./pipes-page.component.css']
})
export class PipesPageComponent implements OnInit {

  funcionario = {
    nome: 'José de Almeida Telles',
    cpf: '12345678901',
    celular: '21987654321',
    dataNascimento: new Date(1973, 4, 19),
    altura: 1.894,
    peso: 98.755,
    salario: 1230.00
  }

  idadeFuncionario = this.calcularIdadeComDate(this.funcionario.dataNascimento)

  /*calcularIdade(dia: number, mes: number, ano: number): number {
    let dataNascimento = new Date(ano, mes - 1, dia)
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    let aniversarioNesteAno = new Date(anoAtual, dataNascimento.getMonth(), dataNascimento.getDate())
    let idade = anoAtual - dataNascimento.getFullYear()

    if (aniversarioNesteAno > dataAtual) {
      idade--
    }

    return idade
  }*/

  calcularIdadeComDate(dataNascimentoComDate: Date) {
    let dataNascimento = dataNascimentoComDate
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    let aniversarioNesteAno = new Date(anoAtual, dataNascimento.getMonth(), dataNascimento.getDate())
    let idade = anoAtual - dataNascimento.getFullYear()

    if (aniversarioNesteAno > dataAtual) {
      idade--
    }

    return idade
  }

  constructor() { }

  ngOnInit() {
  }

}
