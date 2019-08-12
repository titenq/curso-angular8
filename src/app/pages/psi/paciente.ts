export class Paciente {
  public id: number
  public nome: string
  public local: string

  constructor(id: number, nome: string, local: string) {
    this.id = id
    this.nome = nome
    this.local = local
  }
}
