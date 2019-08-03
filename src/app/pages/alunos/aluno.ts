export class Aluno {
  private id: number
  private nome: string
  private turma: string
  private nota: number

  constructor(id: number, nome: string, turma: string, nota: number) {
    this.id = id
    this.nome = nome
    this.turma = turma
    this.nota = nota
  }

  get getId(): number {
    return this.id
  }

  set setId(id: number) {
    this.id = id
  }

  get getNome(): string {
    return this.nome
  }

  set setNome(nome: string) {
    this.nome = nome
  }

  get getTurma(): string {
    return this.turma
  }

  set setTurma(turma: string) {
    this.turma = turma
  }

  get getNota(): number {
    return this.nota
  }

  set setNota(nota: number) {
    this.nota = nota
  }
}
