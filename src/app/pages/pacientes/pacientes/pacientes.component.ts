import { Component, OnInit } from '@angular/core'

import { Paciente } from '../paciente'
import { PacientesService } from '../pacientes.service'

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  data = new Date()
  pacientes: Paciente[] = this.pacientesService.getPacientes()

  constructor(private pacientesService: PacientesService) { }

  ngOnInit() {
  }

  onDelete(id: number) {

  }
}
