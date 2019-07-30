import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor() { }

  getAlunos() {
    return [
      {
        id: 1,
        nome: 'Antônio',
        turma: '1101',
        nota: 8.5
      },
      {
        id: 2,
        nome: 'Simone',
        turma: '1201',
        nota: 7.0
      },
      {
        id: 3,
        nome: 'Marcos',
        turma: '1102',
        nota: 9.5
      }
    ]
  }

  getAlunoPorId(id: number) {
    return this.getAlunos().find(x => x.id === id)
  }

}
