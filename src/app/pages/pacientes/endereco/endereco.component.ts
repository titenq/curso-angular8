import { Component, OnInit } from '@angular/core'

import { PacientesService } from '../pacientes.service'
import { Endereco } from './endereco'

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  enderecos: Endereco[] = this.pacientesService.getEnderecos()

  constructor(private pacientesService: PacientesService) { }

  ngOnInit() {
  }

}
