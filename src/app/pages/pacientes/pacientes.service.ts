import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import { Paciente } from './paciente'
import { Endereco } from './endereco/endereco'
import { Visita } from './endereco/visita'
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs'
import { EstadoBr } from './endereco/estado-br'

@Injectable()
export class PacientesService {

  pacientes: Paciente[] = [
    new Paciente(1, 'Antônio Bezerra de Freitas', 'Sala Amarela'),
    new Paciente(2, 'Márcio de Souza Lima', 'Sala Vermelha')
  ]

  enderecos: Endereco[] = [
    new Endereco(1, 'Rua dos Inválidos', '45', 'Apto 604', '25000500', 'Centro', 'Rio de Janeiro', 'RJ')
  ]

  visitas: Visita[] = [
    new Visita(1, 'Maria da Silva', '193344927-8', this.getEndereco(1), this.getPaciente(1))
  ]

  constructor(private router: Router,
              private httpClient: HttpClient) { }

  addPaciente(paciente: Paciente): void {
    this.pacientes.push(paciente)
    this.router.navigate(['/pacientes'])
  }

  getPacientes(): Paciente[] {
    return this.pacientes
  }

  getLastId(): number {
    let pacientes: Paciente[] = this.getPacientes()

    if (pacientes.length == 0) {
      return 1
    }

    return pacientes[pacientes.length - 1].id + 1
  }

  getPaciente(id: number): Paciente {
    return this.getPacientes().find(paciente => paciente.id == id)
  }

  /*editPaciente(paciente: Paciente): Paciente {

    paciente = {id: paciente.id, nome: paciente.nome, local: paciente.local}

    return paciente
  }*/

  deletePaciente(id: number): void {

    let index = this.pacientes.findIndex(i => i.id == id)

    this.pacientes.splice(index, 1)
  }

  getEnderecos(): Endereco[] {
    return this.enderecos
  }

  addEndereco(endereco: Endereco) {
    this.enderecos.push(endereco)
    this.router.navigate(['/endereco'])
  }

  getEndereco(id: number): Endereco {
    return this.getEnderecos().find(endereco => endereco.id == id)
  }

  getVisitas(): Visita[] {
    return this.visitas
  }

  addVisita(visita: Visita) {
    this.visitas.push(visita)
    this.router.navigate(['/pacientes'])
  }

  getVisita(id: number): Visita {
    return this.getVisitas().find(visita => visita.id == id)
  }

  getEstadosBr() {
    return this.httpClient.get<Array<EstadoBr>>('assets/estados-brasileiros.json')
      .pipe(map(res => res))
  }
}
