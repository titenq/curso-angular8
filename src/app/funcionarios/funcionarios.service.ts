import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor() { }

  funcionarios: string[] = ['José', 'Maria', 'João', 'Pedro']

  getFuncionarios() {
    return this.funcionarios
  }
}
