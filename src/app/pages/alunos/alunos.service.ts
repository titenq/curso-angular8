import { EventEmitter, Injectable } from '@angular/core'

import { Aluno } from './aluno'

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    new Aluno(1, 'Roberto', '1101', 8.5),
    new Aluno(2, 'Mariana', '1201', 6),
    new Aluno(3, 'Marcela', '1102', 10)
  ]

  emitAluno = new EventEmitter<Aluno>()

  constructor() { }

  addAluno(aluno: Aluno): void {
    this.alunos.push(aluno)
    this.emitAluno.emit(aluno)
  }

  getAlunos(): Aluno[] {
    return this.alunos
  }

  getAluno(id: number): Aluno {
    return this.getAlunos().find(aluno => aluno.id == id)
  }

  getLastId(): number {
    let alunos = this.getAlunos()
    return alunos[alunos.length - 1].id + 1
  }

}
