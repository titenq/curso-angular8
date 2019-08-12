import { Injectable } from '@angular/core';

import { Paciente } from './paciente';

@Injectable()
export class PsiService {

  pacientes: Paciente[] = [
    new Paciente(1, 'Antônio Bezerra de Freitas', 'Sala Amarela'),
    new Paciente(2, 'Márcio de Souza Lima', 'Sala Vermelha')
  ]

  constructor() { }

  addPaciente(paciente: Paciente): void {
    this.pacientes.push(paciente)
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

  editPaciente(paciente: Paciente): Paciente {

    paciente = {id: paciente.id, nome: paciente.nome, local: paciente.local}

    return paciente
  }

  deletePaciente(id: number): void {

    let index = this.pacientes.findIndex(i => i.id == id)

    this.pacientes.splice(index, 1)
  }
}
