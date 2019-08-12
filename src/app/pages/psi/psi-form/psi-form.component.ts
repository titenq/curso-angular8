import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Paciente } from '../paciente'
import { PsiService } from '../psi.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-psi-form',
  templateUrl: './psi-form.component.html',
  styleUrls: ['./psi-form.component.css']
})
export class PsiFormComponent implements OnInit, OnDestroy {

  paciente: Paciente
  subscriptionPaciente: Subscription
  addOrEdit: string

  constructor(private psiService: PsiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.subscriptionPaciente = this.activatedRoute.data.subscribe(
      (data: { paciente: Paciente }) => {
        this.paciente = data.paciente
      })

    if (this.paciente === undefined) {
      this.paciente = new Paciente(null, '', '')
    }

    let urlSnapshot = this.activatedRoute.snapshot.url

    if (urlSnapshot[urlSnapshot.length - 1].path === 'add') {
      this.addOrEdit = 'add'
    }

    if (urlSnapshot[urlSnapshot.length - 1].path === 'edit') {
      this.addOrEdit = 'edit'
    }
  }

  ngOnDestroy(): void {
    this.subscriptionPaciente.unsubscribe()
  }

  onSubmit(formPaciente) {

    this.psiService.addPaciente(this.paciente)

    this.router.navigate(['/template-form'])
  }

  editPaciente(paciente: Paciente) {
    this.paciente = this.psiService.editPaciente(paciente)

    this.router.navigate(['/template-form'])
  }
}
