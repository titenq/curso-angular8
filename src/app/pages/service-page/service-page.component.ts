import { Component, OnInit } from '@angular/core'

import { FuncionariosService } from './funcionarios.service'

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  funcionarios: string[]

  constructor(private funcionariosService: FuncionariosService) {
    this.funcionarios = this.funcionariosService.getFuncionarios()
  }

  ngOnInit() {
  }

}
