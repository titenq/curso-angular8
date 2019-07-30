export class Aluno {
  private _id: number
  private _nome: string
  private _turma: string
  private _nota: number

  constructor(id: number, nome: string, turma: string, nota: number) {
    this._id = id
    this._nome = nome
    this._turma = turma
    this._nota = nota
  }

  get id(): number {
    return this._id
  }

  set id(value: number) {
    this._id = value
  }

  get nome(): string {
    return this._nome
  }

  set nome(value: string) {
    this._nome = value
  }

  get turma(): string {
    return this._turma
  }

  set turma(value: string) {
    this._turma = value
  }

  get nota(): number {
    return this._nota
  }

  set nota(value: number) {
    this._nota = value
  }
}
