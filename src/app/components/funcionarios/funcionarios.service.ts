import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor() { }

  funcionarios: string[] = ['José', 'Maria', 'João', 'Pedro']
  funcionariosComId = [
    {
      id: 1,
      nome: 'João',
      email: 'joao@email.com'
    },
    {
      id: 2,
      nome: 'Maria',
      email: 'maria@email.com'
    },
    {
      id: 3,
      nome: 'Roberto',
      email: 'roberto@email.com'
    }
  ]

  getFuncionarios() {
    return this.funcionarios
  }

  getFuncionariosComId() {
    return this.funcionariosComId
  }

  getFuncionarioPorId(id: number) {
    let idFuncionario = id
    return this.getFuncionariosComId().find(x => x.id === idFuncionario)
  }
}
