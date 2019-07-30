import { Injectable } from '@angular/core';

import { Aluno } from './aluno'

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunos: Aluno[]

  constructor() {
    this.alunos = [
      new Aluno(1, 'Roberto', '1101', 8.5),
      new Aluno(2, 'Mariana', '1201', 6.0),
      new Aluno(3, 'Marcela', '1102', 7.5)
    ]
  }

  addAluno(aluno: Aluno): void {
    this.alunos.push(aluno)
  }

  getAlunos(): Aluno[] {
    return this.alunos
  }
}
