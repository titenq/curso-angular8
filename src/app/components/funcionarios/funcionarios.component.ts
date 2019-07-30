import { Component, OnInit } from '@angular/core'

import { FuncionariosService } from './funcionarios.service'

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionarios: string[]

  constructor(private funcionariosService: FuncionariosService) {
    this.funcionarios = this.funcionariosService.getFuncionarios()
  }

  ngOnInit() {
  }
}
