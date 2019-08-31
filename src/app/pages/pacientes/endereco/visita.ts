import { Endereco } from './endereco'
import { Paciente } from '../paciente';

export class Visita {
  public id: number
  public nome: string
  public rg: string
  public endereco: Endereco
  public paciente: Paciente

  constructor(id: number, nome: string, rg: string, endereco: Endereco, paciente: Paciente) {
    this.id = id;
    this.nome = nome;
    this.rg = rg;
    this.endereco = endereco;
    this.paciente = paciente;
  }
}
