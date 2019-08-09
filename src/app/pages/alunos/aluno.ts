export class Aluno {
  public id: number
  public nome: string
  public turma: string
  public nota: number

  constructor(id: number, nome: string, turma: string, nota: number) {
    this.id = id
    this.nome = nome
    this.turma = turma
    this.nota = nota
  }
}
