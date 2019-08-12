import { Component, OnInit } from '@angular/core';

import { Paciente } from '../paciente'
import { PsiService } from '../psi.service'

@Component({
  selector: 'app-psi',
  templateUrl: './psi.component.html',
  styleUrls: ['./psi.component.css']
})
export class PsiComponent implements OnInit {

  data = new Date()
  pacientes: Paciente[]

  constructor(private psiService: PsiService) { }

  ngOnInit() {
    this.pacientes = this.psiService.getPacientes()
  }

  onDelete(id: number): void {
    this.psiService.deletePaciente(id)
  }
}
