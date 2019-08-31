import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'

import { Paciente } from '../paciente'
import { PacientesService } from '../pacientes.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit, OnDestroy {

  addOrEdit: string
  paciente: Paciente
  subscriptionPaciente: Subscription

  /*this.formPaciente = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl(null),
      local: new FormControl(null)
    })
    Com o FormGroup o tipo de formPaciente deve ser FormGroup*/

  formPaciente = this.formBuilder.group({
    id: [null, Validators.required],
    nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    local: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private pacientesService: PacientesService) { }

  ngOnInit() {
    this.addOrEdit = this.isAddOrEdit()

    this.subscriptionPaciente = this.activatedRoute.data.subscribe(
      (data: { paciente: Paciente }) => {
        this.paciente = data.paciente
      })

    if (this.paciente === undefined) {
      this.paciente = new Paciente(null, '', '')
    }
  }

  editPaciente(paciente: any) {

  }

  private isAddOrEdit(): string {

    let urlSnapshot = this.activatedRoute.snapshot.url

    if (urlSnapshot[urlSnapshot.length - 1].path === 'add') {
      return 'add'
    }

    if (urlSnapshot[urlSnapshot.length - 1].path === 'edit') {
      return 'edit'
    }
  }

  onSubmit() {
    this.pacientesService.addPaciente(this.formPaciente.value)
  }

  ngOnDestroy(): void {
    this.subscriptionPaciente.unsubscribe()
  }
}
