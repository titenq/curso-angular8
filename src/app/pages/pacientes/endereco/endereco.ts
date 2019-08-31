export class Endereco {
  public id: number
  public logradouro: string
  public numero: string
  public complemento?: string
  public cep: string
  public bairro: string
  public cidade: string
  public estado: string

  constructor(id: number,
              logradouro: string,
              numero: string,
              complemento: string,
              cep: string,
              bairro: string,
              cidade: string,
              estado: string) {

    this.id = id
    this.logradouro = logradouro
    this.numero = numero
    this.complemento = complemento
    this.cep = cep
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
  }
}
